import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import history from 'connect-history-api-fallback';

const app = express();
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.resolve(__dirname, '../dist'), {maxAge: '1y', etag: false}));
app.use(history());

app.get('/api/programms', async (req, res) => {
    const client = await MongoClient.connect(
      process.env.MONGO_USER && process.env.MONGO_PASS 
      ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wos7rvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      : 'mongodb://localhost:27017', 
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
const db = client.db(process.env.MONGO_DBNAME || 'vue-db');
const programms = await db.collection('programms').find({}).toArray();
res.status(200).json(programms);
client.close(); 
});

app.get('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const client = await MongoClient.connect( 
    process.env.MONGO_USER && process.env.MONGO_PASS 
    ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wos7rvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    : 'mongodb://localhost:27017', 
     { useUnifiedTopology: true, useNewUrlParser: true }
  );
  const db = client.db(process.env.MONGO_DBNAME || 'vue-db');
  const user = await db.collection('users').findOne({ id: userId });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const programms = await db.collection('programms').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id => 
    programms.find(programm => programm.id === id));
  res.status(200).json(cartItems);
  client.close(); 
}); 

app.get('/api/programms/:programmId', async (req, res) => {
    const { programmId } = req.params;
    const client = await MongoClient.connect(
      process.env.MONGO_USER && process.env.MONGO_PASS 
      ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wos7rvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      : 'mongodb://localhost:27017', 
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    const db = client.db(process.env.MONGO_DBNAME || 'vue-db');
    const programm = await db.collection('programms').findOne({ id: programmId });
    if (programm) {
      res.status(200).json(programm);
    } else {
      res.status(404).json({ message: 'Programm not found' });
    }
    client.close();
});

app.post('/api/users/:userId/cart', async (req, res) => {
    const { userId } = req.params;
    const { programmId } = req.body;
    const client = await MongoClient.connect(
      process.env.MONGO_USER && process.env.MONGO_PASS 
      ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wos7rvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      : 'mongodb://localhost:27017', 
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    const db = client.db(process.env.MONGO_DBNAME || 'vue-db');
    await db.collection('users').updateOne({ id: userId }, 
      { $addToSet: { cartItems: programmId } 
    });
    const user = await db.collection('users').findOne({ id: userId });
    const programms = await db.collection('programms').find({}).toArray();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id => programms.find(programm => programm.id === id));
      res.status(200).json(cartItems);
    client.close();
    }
);

app.delete('/api/users/:userId/cart/:programmId', async (req, res) => {
    const { userId, programmId } = req.params;
    const client = await MongoClient.connect(
      process.env.MONGO_USER && process.env.MONGO_PASS 
      ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wos7rvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      : 'mongodb://localhost:27017', 
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    const db = client.db(process.env.MONGO_DBNAME || 'vue-db');
  
    await db.collection('users').updateOne({ id: userId }, { $pull: { cartItems: programmId } });
    const user = await db.collection('users').findOne({ id: userId });
    const programms = await db.collection('programms').find({}).toArray();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id => 
      programms.find(programm => programm.id === id));
    res.status(200).json(cartItems);
    client.close();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on port 8080');
});