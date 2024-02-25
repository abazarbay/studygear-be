"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongodb = require("mongodb");
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));
var app = (0, _express["default"])();
var _dirname = _path["default"].dirname((0, _url.fileURLToPath)(import.meta.url));
app.use(_bodyParser["default"].json());
app.use('/images', _express["default"]["static"](_path["default"].join(_dirname, '../assets')));
app.use(_express["default"]["static"](_path["default"].resolve(_dirname, '../dist'), {
  maxAge: '1y',
  etag: false
}));
app.use((0, _connectHistoryApiFallback["default"])());
app.get('/api/programms', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var client, db, programms;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _mongodb.MongoClient.connect(process.env.MONGO_USER && process.env.MONGO_PASS ? 'mongodb+srv://${process.env.MONGO_USER}:${process.env.@cluster0.wos7rvs.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0' : 'mongodb://localhost:27017', {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        case 2:
          client = _context.sent;
          db = client.db(process.env.MONGO_DBNAME || 'vue-db');
          _context.next = 6;
          return db.collection('programms').find({}).toArray();
        case 6:
          programms = _context.sent;
          res.status(200).json(programms);
          client.close();
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/api/users/:userId/cart', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userId, client, db, user, programms, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.userId;
          _context2.next = 3;
          return _mongodb.MongoClient.connect(process.env.MONGO_USER && process.env.MONGO_PASS ? 'mongodb+srv://${process.env.MONGO_USER}:${process.env.@cluster0.wos7rvs.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0' : 'mongodb://localhost:27017', {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        case 3:
          client = _context2.sent;
          db = client.db(process.env.MONGO_DBNAME || 'vue-db');
          _context2.next = 7;
          return db.collection('users').findOne({
            id: userId
          });
        case 7:
          user = _context2.sent;
          if (user) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 10:
          _context2.next = 12;
          return db.collection('programms').find({}).toArray();
        case 12:
          programms = _context2.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (id) {
            return programms.find(function (programm) {
              return programm.id === id;
            });
          });
          res.status(200).json(cartItems);
          client.close();
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get('/api/programms/:programmId', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var programmId, client, db, programm;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          programmId = req.params.programmId;
          _context3.next = 3;
          return _mongodb.MongoClient.connect(process.env.MONGO_USER && process.env.MONGO_PASS ? 'mongodb+srv://${process.env.MONGO_USER}:${process.env.@cluster0.wos7rvs.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0' : 'mongodb://localhost:27017', {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        case 3:
          client = _context3.sent;
          db = client.db(process.env.MONGO_DBNAME || 'vue-db');
          _context3.next = 7;
          return db.collection('programms').findOne({
            id: programmId
          });
        case 7:
          programm = _context3.sent;
          if (programm) {
            res.status(200).json(programm);
          } else {
            res.status(404).json({
              message: 'Programm not found'
            });
          }
          client.close();
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.post('/api/users/:userId/cart', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var userId, programmId, client, db, user, programms, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          userId = req.params.userId;
          programmId = req.body.programmId;
          _context4.next = 4;
          return _mongodb.MongoClient.connect(process.env.MONGO_USER && process.env.MONGO_PASS ? 'mongodb+srv://${process.env.MONGO_USER}:${process.env.@cluster0.wos7rvs.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0' : 'mongodb://localhost:27017', {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        case 4:
          client = _context4.sent;
          db = client.db(process.env.MONGO_DBNAME || 'vue-db');
          _context4.next = 8;
          return db.collection('users').updateOne({
            id: userId
          }, {
            $addToSet: {
              cartItems: programmId
            }
          });
        case 8:
          _context4.next = 10;
          return db.collection('users').findOne({
            id: userId
          });
        case 10:
          user = _context4.sent;
          _context4.next = 13;
          return db.collection('programms').find({}).toArray();
        case 13:
          programms = _context4.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (id) {
            return programms.find(function (programm) {
              return programm.id === id;
            });
          });
          res.status(200).json(cartItems);
          client.close();
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app["delete"]('/api/users/:userId/cart/:programmId', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$params, userId, programmId, client, db, user, programms, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$params = req.params, userId = _req$params.userId, programmId = _req$params.programmId;
          _context5.next = 3;
          return _mongodb.MongoClient.connect(process.env.MONGO_USER && process.env.MONGO_PASS ? 'mongodb+srv://${process.env.MONGO_USER}:${process.env.@cluster0.wos7rvs.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0' : 'mongodb://localhost:27017', {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        case 3:
          client = _context5.sent;
          db = client.db(process.env.MONGO_DBNAME || 'vue-db');
          _context5.next = 7;
          return db.collection('users').updateOne({
            id: userId
          }, {
            $pull: {
              cartItems: programmId
            }
          });
        case 7:
          _context5.next = 9;
          return db.collection('users').findOne({
            id: userId
          });
        case 9:
          user = _context5.sent;
          _context5.next = 12;
          return db.collection('programms').find({}).toArray();
        case 12:
          programms = _context5.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (id) {
            return programms.find(function (programm) {
              return programm.id === id;
            });
          });
          res.status(200).json(cartItems);
          client.close();
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(_dirname, '../dist/index.html'));
});
app.listen(process.env.PORT || 8080, function () {
  console.log('Server is running on port 8080');
});