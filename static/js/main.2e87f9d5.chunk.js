(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(5),i=a.n(n),s=a(9),c=a(10),l=a(6),u=a(7),r=a(11),o=a(8),m=a(1),b=a.n(m),p=(a(16),a(17),a(0)),d=function(t){var e=t.images,a=t.step,n=t.frameSize,i=t.itemWidth,s=t.aimationDuration,c=t.infinite,l=i*e.length-n*i,u=0,r=!1,o=function(t){var e=u+a*i,n=u-a*i,s=document.querySelector(".Carousel__list");switch(0!==u&&u!==-l||(r=!0),t){case"prev":e>0&&r&&c?(u=-l,r=!1):e>0?u=0:(u+=a*i,r=!1);break;case"next":n<-l&&r&&c?(u=0,r=!1):n<-l?u=-l:(u-=a*i,r=!1);break;default:u=0}s&&(s.style.transform="translateX(".concat(u,"px)"))},m=function(t){var e=t.classList.contains("Carousel__button-Prev"),a=t.classList.contains("Carousel__button-Next"),n=document.querySelector(".Carousel__button-Prev"),i=document.querySelector(".Carousel__button-Next");switch(!0){case e:o("prev");break;case a:o("next");break;default:u=0}n.disabled=0===u&&!c,i.disabled=u===-l&&!c};return Object(p.jsx)("div",{className:"Carousel",style:{width:"".concat(n*i,"px")},children:Object(p.jsxs)("div",{className:"Carousel__container",children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(10*i,"px"),transition:"all ".concat(s,"ms")},children:e.map((function(t){return Object(p.jsx)("li",{className:"Carousel__list-item",children:Object(p.jsx)("img",{className:"Carousel__list-image",style:{width:"".concat(i,"px"),height:"".concat(i,"px")},src:t,alt:"".concat(e.indexOf(t))})},t)}))}),Object(p.jsx)("button",{className:"Carousel__button Carousel__button-Prev",type:"button",onClick:function(t){m(t.target)},children:"<"}),Object(p.jsx)("button",{"data-cy":"next",className:"Carousel__button Carousel__button-Next",type:"button",onClick:function(t){m(t.target)},children:">"})]})})},j=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,aimationDuration:1e3,infinite:!1},t.submitHandler=function(e){e.preventDefault();var a=Object(c.a)(e.target),n=document.querySelector(".Carousel__list"),i=document.querySelector(".Carousel__button-Prev"),l=document.querySelector(".Carousel__button-Next"),u=Object(s.a)(a,5),r=u[0],o=u[1],m=u[2],b=u[3],p=u[4];r.value.trim().length?t.setState({itemWidth:+r.value}):(t.setState({itemWidth:130}),r.value=130),r.value.trim().length?t.setState({frameSize:+o.value}):(t.setState({frameSize:3}),o.value=3),r.value.trim().length?t.setState({step:+m.value}):(t.setState({step:3}),m.value=3),r.value.trim().length?t.setState({aimationDuration:+b.value}):(t.setState({aimationDuration:1e3}),b.value=1e3),t.setState({infinite:p.checked}),n&&(n.style.transform="translateX(0)",i.disabled=!1,l.disabled=!1)},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.step,n=t.frameSize,i=t.itemWidth,s=t.aimationDuration,c=t.infinite;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(p.jsx)(d,{images:e,step:a,frameSize:n,itemWidth:i,aimationDuration:s,infinite:c}),Object(p.jsxs)("form",{action:"submit",className:"Inputs",onSubmit:this.submitHandler,children:[Object(p.jsxs)("label",{className:"Inputs__input",children:["Enter image width",Object(p.jsx)("input",{defaultValue:130,type:"number",min:0})]}),Object(p.jsxs)("label",{className:"Inputs__input",children:["Enter frame size",Object(p.jsx)("input",{defaultValue:3,type:"number",min:0})]}),Object(p.jsxs)("label",{className:"Inputs__input",children:["Entre scroll steps",Object(p.jsx)("input",{defaultValue:3,type:"number",min:0})]}),Object(p.jsxs)("label",{className:"Inputs__input",children:["Enter animation duration in ms",Object(p.jsx)("input",{defaultValue:1e3,type:"number",min:0})]}),Object(p.jsxs)("label",{className:"Inputs__input Inputs__input-checkbox",children:["Check for infinite loop",Object(p.jsx)("input",{type:"checkbox"})]}),Object(p.jsx)("input",{className:"Inputs__button",type:"submit",name:"button",value:"submit"})]})]})}}]),a}(b.a.Component),h=j;i.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2e87f9d5.chunk.js.map