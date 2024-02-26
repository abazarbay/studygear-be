(function(){"use strict";var r={2463:function(r,e,t){var a=t(3751),o=t(641);const n={id:"app"};function s(r,e,t,a,s,m){const i=(0,o.g2)("NavBar"),u=(0,o.g2)("router-view"),c=(0,o.g2)("FooterPage");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(i),(0,o.bF)(u),(0,o.bF)(c)])}const m=r=>((0,o.Qi)("data-v-5e20bc6e"),r=r(),(0,o.jt)(),r),i={id:"nav-bar"},u=m((()=>(0,o.Lk)("h1",null,"Study Gear",-1))),c=m((()=>(0,o.Lk)("h1",null,"Programs",-1))),l=m((()=>(0,o.Lk)("h1",null,"Evaluation",-1))),d=m((()=>(0,o.Lk)("h1",null,"About Us",-1))),p=m((()=>(0,o.Lk)("button",null,"My Account",-1)));function g(r,e,t,a,n,s){const m=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(m,{to:"/home",id:"programm-link"},{default:(0,o.k6)((()=>[u])),_:1}),(0,o.bF)(m,{to:"/programms",id:"programm-link"},{default:(0,o.k6)((()=>[c])),_:1}),(0,o.bF)(m,{to:"/evaluation",id:"programm-link"},{default:(0,o.k6)((()=>[l])),_:1}),(0,o.bF)(m,{to:"/about",id:"programm-link"},{default:(0,o.k6)((()=>[d])),_:1}),(0,o.bF)(m,{to:"/cart",id:"cart-link"},{default:(0,o.k6)((()=>[p])),_:1})])}var v={name:"NavBar"},h=t(6262);const f=(0,h.A)(v,[["render",g],["__scopeId","data-v-5e20bc6e"]]);var b=f;const k={id:"footer"},y=(0,o.Fv)('<div id="site-map"><h2>Website-Karte</h2><ul><li><a href="/home">Home</a></li><li><a href="/about">Über uns</a></li><li><a href="/contact">Kontakt</a></li></ul></div><div id="social-media"><h2>Folgen Sie uns</h2><a href="https://www.facebook.com/yourpage">Facebook</a><a href="https://www.twitter.com/yourpage">Twitter</a><a href="https://www.instagram.com/yourpage">Instagram</a></div>',2),L=[y];function w(r,e,t,a,n,s){return(0,o.uX)(),(0,o.CE)("div",k,L)}var C={name:"FooterPage"};const P=(0,h.A)(C,[["render",w]]);var _=P,I={name:"App",components:{NavBar:b,FooterPage:_}};const F=(0,h.A)(I,[["render",s]]);var A=F,E=t(5220),X=t(33);const j=r=>((0,o.Qi)("data-v-4bd21b50"),r=r(),(0,o.jt)(),r),O={id:"page-wrap"},S=j((()=>(0,o.Lk)("h1",null,"Account",-1))),D={id:"total-price"},N=j((()=>(0,o.Lk)("button",{id:"checkout-button"},"Proceed to Checkout",-1)));function x(r,e,t,a,n,s){const m=(0,o.g2)("ProgrammsList");return(0,o.uX)(),(0,o.CE)("div",O,[S,(0,o.bF)(m,{programms:n.cartItems,onRemoveFromCart:e[0]||(e[0]=r=>s.removeFromCart(r))},null,8,["programms"]),(0,o.Lk)("h3",D,"Total: €"+(0,X.v_)(s.totalPrice),1),N])}var G=t(1250);const Q={key:0},T={key:1};function M(r,e,t,a,n,s){const m=(0,o.g2)("ProgrammsListItem");return t.programms.length>0?((0,o.uX)(),(0,o.CE)("div",Q,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.programms,(t=>((0,o.uX)(),(0,o.Wv)(m,{onRemoveFromCart:e[0]||(e[0]=e=>r.$emit("remove-from-cart",e)),key:t.id,programm:t},null,8,["programm"])))),128))])):((0,o.uX)(),(0,o.CE)("p",T,"No programms available"))}const U={class:"programm-container"},W=["src"],$={class:"details-wrap"};function K(r,e,t,a,n,s){return(0,o.uX)(),(0,o.CE)("div",U,[(0,o.Lk)("img",{class:"programm-image",src:t.programm.imageUrl},null,8,W),(0,o.Lk)("div",$,[(0,o.Lk)("h3",null,(0,X.v_)(t.programm.name),1)]),(0,o.Lk)("button",{class:"remove-button",onClick:e[0]||(e[0]=e=>r.$emit("remove-from-cart",t.programm.id))},"Remove")])}var q={name:"ProgrammsListItem",props:["programm"]};const R=(0,h.A)(q,[["render",K],["__scopeId","data-v-25b668c2"]]);var V=R,B={name:"ProgrammsList",props:["programms"],components:{ProgrammsListItem:V}};const H=(0,h.A)(B,[["render",M]]);var J=H,Y={name:"CartPage",components:{ProgrammsList:J},data(){return{cartItems:[]}},computed:{totalPrice(){return this.cartItems.reduce(((r,e)=>r+Number(e.price)),0)}},methods:{async removeFromCart(r){const e=await G.A.delete(`/api/users/12345/cart/${r}`);this.cartItems=e.data}},async created(){const r=await G.A.get("/api/users/12345/cart"),e=r.data;this.cartItems=e}};const z=(0,h.A)(Y,[["render",x],["__scopeId","data-v-4bd21b50"]]);var Z=z;const rr={id:"page-wrap"};function er(r,e,t,a,n,s){const m=(0,o.g2)("ProgrammsGrid");return(0,o.uX)(),(0,o.CE)("div",rr,[(0,o.bF)(m,{programms:n.programms},null,8,["programms"])])}const tr={class:"grid-wrap"};function ar(r,e,t,a,n,s){const m=(0,o.g2)("ProgrammsGridItem");return(0,o.uX)(),(0,o.CE)("div",tr,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.programms,(r=>((0,o.uX)(),(0,o.Wv)(m,{key:r.id,programm:r},null,8,["programm"])))),128))])}const or=r=>((0,o.Qi)("data-v-e90b8ce2"),r=r(),(0,o.jt)(),r),nr={class:"programm-item"},sr=["src"],mr={class:"programm-name"},ir=or((()=>(0,o.Lk)("button",null,"View Details",-1)));function ur(r,e,t,a,n,s){const m=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",nr,[(0,o.Lk)("img",{src:t.programm.imageUrl},null,8,sr),(0,o.Lk)("h3",mr,(0,X.v_)(t.programm.name),1),(0,o.bF)(m,{to:"/programms/"+t.programm.id},{default:(0,o.k6)((()=>[ir])),_:1},8,["to"])])}var cr={name:"ProgrammsGridItem",props:["programm"]};const lr=(0,h.A)(cr,[["render",ur],["__scopeId","data-v-e90b8ce2"]]);var dr=lr,pr={name:"ProgrammsGrid",props:["programms"],components:{ProgrammsGridItem:dr}};const gr=(0,h.A)(pr,[["render",ar],["__scopeId","data-v-9ec785c4"]]);var vr=gr,hr={name:"ProgrammsPage",components:{ProgrammsGrid:vr},data(){return{programms:[]}},async created(){const r=await G.A.get("/api/programms"),e=r.data;this.programms=e}};const fr=(0,h.A)(hr,[["render",er]]);var br=fr;const kr=r=>((0,o.Qi)("data-v-7c5c2692"),r=r(),(0,o.jt)(),r),yr={key:0,id:"page-wrap"},Lr={id:"img-wrap"},wr=["src"],Cr={id:"programm-details"},Pr={key:1,id:"add-to-cart",class:"grey-button"},_r={key:2,id:"add-to-cart",class:"green-button"},Ir=kr((()=>(0,o.Lk)("h4",null,"Description",-1)));function Fr(r,e,t,a,n,s){const m=(0,o.g2)("NotFoundPage");return n.programm?((0,o.uX)(),(0,o.CE)("div",yr,[(0,o.Lk)("div",Lr,[(0,o.Lk)("img",{src:n.programm.imageUrl},null,8,wr),(0,o.Lk)("div",Cr,[(0,o.Lk)("h1",null,(0,X.v_)(n.programm.name),1),(0,o.Lk)("p",null,"Average rating: "+(0,X.v_)(n.programm.averageRating),1),s.itemIsInCart||n.showSuccessMessage?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:0,id:"add-to-cart",onClick:e[0]||(e[0]=(...r)=>s.addToCart&&s.addToCart(...r))},"Add the program")),s.itemIsInCart?((0,o.uX)(),(0,o.CE)("button",Pr,"Program is already added")):(0,o.Q3)("",!0),!s.itemIsInCart&&n.showSuccessMessage?((0,o.uX)(),(0,o.CE)("button",_r,"Successfully added a program")):(0,o.Q3)("",!0),Ir,(0,o.Lk)("p",null,(0,X.v_)(n.programm.description),1)])])])):((0,o.uX)(),(0,o.Wv)(m,{key:1}))}t(4114);function Ar(r,e,t,a,n,s){return(0,o.uX)(),(0,o.CE)("h1",null,"404: Page Not Found")}var Er={name:"NotFoundPage"};const Xr=(0,h.A)(Er,[["render",Ar],["__scopeId","data-v-64de43a2"]]);var jr=Xr,Or={name:"ProgrammDetailPage",components:{NotFoundPage:jr},data(){return{programm:{},cartItems:[],showSuccessMessage:!1}},computed:{itemIsInCart(){return this.cartItems.some((r=>r.id===this.programm.id))}},methods:{async addToCart(){await G.A.post("/api/users/12345/cart",{programmId:this.$route.params.id}),this.showSuccessMessage=!0,setTimeout((()=>{this.$router.push("/programms")}),1500)}},async created(){const{data:r}=await G.A.get(`/api/programms/${this.$route.params.id}`);this.programm=r;const{data:e}=await G.A.get("/api/users/12345/cart");this.cartItems=e}};const Sr=(0,h.A)(Or,[["render",Fr],["__scopeId","data-v-7c5c2692"]]);var Dr=Sr;const Nr=r=>((0,o.Qi)("data-v-833b0872"),r=r(),(0,o.jt)(),r),xr=Nr((()=>(0,o.Lk)("h1",null,"Evaluation",-1))),Gr=Nr((()=>(0,o.Lk)("hr",null,null,-1))),Qr=[xr,Gr];function Tr(r,e){return(0,o.uX)(),(0,o.CE)("div",null,Qr)}const Mr={},Ur=(0,h.A)(Mr,[["render",Tr],["__scopeId","data-v-833b0872"]]);var Wr=Ur,$r=t.p+"img/logo.1c8f9ab2.png";const Kr=r=>((0,o.Qi)("data-v-4c8b547d"),r=r(),(0,o.jt)(),r),qr=Kr((()=>(0,o.Lk)("div",{id:"logo-container"},[(0,o.Lk)("img",{id:"logo",src:$r,alt:"Logo"})],-1))),Rr={id:"main-content"},Vr=Kr((()=>(0,o.Lk)("h1",null,"Your way to study in Germany",-1))),Br=Kr((()=>(0,o.Lk)("hr",null,null,-1))),Hr=Kr((()=>(0,o.Lk)("h1",null,"We'll help you to evaluate your enrollment chances!",-1))),Jr=Kr((()=>(0,o.Lk)("p",{id:"description"},"We'll help you to evaluate your chances of enrolling in a German university. We'll ask you a few questions and then give you a score. You can then use this score to decide whether to apply to a German university or not.",-1))),Yr=Kr((()=>(0,o.Lk)("button",null,"Evaluate your chances now",-1))),zr=Kr((()=>(0,o.Lk)("hr",null,null,-1)));function Zr(r,e){const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[qr,(0,o.Lk)("div",Rr,[Vr,Br,Hr,Jr,(0,o.bF)(t,{to:"/evaluation",id:"next-button"},{default:(0,o.k6)((()=>[Yr])),_:1}),zr])],64)}const re={},ee=(0,h.A)(re,[["render",Zr],["__scopeId","data-v-4c8b547d"]]);var te=ee;const ae=r=>((0,o.Qi)("data-v-d06d93ce"),r=r(),(0,o.jt)(),r),oe=ae((()=>(0,o.Lk)("h1",null,"About Us",-1))),ne=ae((()=>(0,o.Lk)("p",null,"Our mission is to provide the best possible learning experience for our students. We offer a wide range of programs and courses to help you achieve your goals. Our instructors are experienced professionals who are passionate about teaching and learning. We are committed to helping you succeed.",-1))),se=[oe,ne];function me(r,e){return(0,o.uX)(),(0,o.CE)("div",null,se)}const ie={},ue=(0,h.A)(ie,[["render",me],["__scopeId","data-v-d06d93ce"]]);var ce=ue;const le=(0,o.Lk)("h2",null,"Kontaktformular",-1),de=(0,o.Lk)("label",{for:"name"},"Name:",-1),pe=(0,o.Lk)("label",{for:"email"},"E-Mail:",-1),ge=(0,o.Lk)("label",{for:"message"},"Nachricht:",-1),ve=(0,o.Lk)("button",{type:"submit"},"Senden",-1);function he(r,e,t,n,s,m){return(0,o.uX)(),(0,o.CE)("div",null,[le,(0,o.Lk)("form",{onSubmit:e[3]||(e[3]=(0,a.D$)(((...r)=>m.submitForm&&m.submitForm(...r)),["prevent"]))},[de,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=r=>s.formData.username=r),required:""},null,512),[[a.Jo,s.formData.username]]),pe,(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=r=>s.formData.email=r),required:""},null,512),[[a.Jo,s.formData.email]]),ge,(0,o.bo)((0,o.Lk)("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=r=>s.formData.message=r),required:""},null,512),[[a.Jo,s.formData.message]]),ve],32)])}var fe={data(){return{formData:{username:"",email:"",message:""}}},methods:{async submitForm(){await G.A.post("/send-email",this.formData).then((r=>{console.log("Erfolgreich gesendet:",r.data)})).catch((r=>{console.error("Fehler beim Senden:",r)}))}}};const be=(0,h.A)(fe,[["render",he]]);var ke=be;const ye=[{path:"/home",name:"Home",component:te},{path:"/programms",name:"Programms",component:br},{path:"/programms/:id",name:"ProgrammDetail",component:Dr,props:!0},{path:"/evaluation",name:"Evaluation",component:Wr},{path:"/evaluation/:id",name:"EvaluationDetail",component:Wr,props:!0},{path:"/about",name:"About",component:ce},{path:"/cart",name:"Cart",component:Z},{path:"/contact",name:"ContactUs",component:ke},{path:"/",name:"HomePage",redirect:"/home"},{path:"/:pathMatch(.*)*",name:"NotFound-Page",component:jr}],Le=(0,E.aE)({history:(0,E.LA)("/"),routes:ye});var we=Le;(0,a.Ef)(A).use(we).mount("#app")}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return r[a].call(n.exports,n,n.exports,t),n.exports}t.m=r,function(){var r=[];t.O=function(e,a,o,n){if(!a){var s=1/0;for(c=0;c<r.length;c++){a=r[c][0],o=r[c][1],n=r[c][2];for(var m=!0,i=0;i<a.length;i++)(!1&n||s>=n)&&Object.keys(t.O).every((function(r){return t.O[r](a[i])}))?a.splice(i--,1):(m=!1,n<s&&(s=n));if(m){r.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=r.length;c>0&&r[c-1][2]>n;c--)r[c]=r[c-1];r[c]=[a,o,n]}}(),function(){t.d=function(r,e){for(var a in e)t.o(e,a)&&!t.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var r={524:0};t.O.j=function(e){return 0===r[e]};var e=function(e,a){var o,n,s=a[0],m=a[1],i=a[2],u=0;if(s.some((function(e){return 0!==r[e]}))){for(o in m)t.o(m,o)&&(t.m[o]=m[o]);if(i)var c=i(t)}for(e&&e(a);u<s.length;u++)n=s[u],t.o(r,n)&&r[n]&&r[n][0](),r[n]=0;return t.O(c)},a=self["webpackChunkstudygear_frontend"]=self["webpackChunkstudygear_frontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(2463)}));a=t.O(a)})();
//# sourceMappingURL=app.e87a336b.js.map