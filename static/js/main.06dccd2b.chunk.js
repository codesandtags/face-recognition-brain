(this["webpackJsonpface-recognition-brain"]=this["webpackJsonpface-recognition-brain"]||[]).push([[0],{237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},278:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(42),r=n.n(i),A=(n(89),n(30)),l=n(81),c=n.n(l),s={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},u=(n(237),function(){return o.a.createElement("nav",{className:"flex justify-end"},o.a.createElement("a",{href:"#",className:"f3 link dim black underline pa3 pointer"},"Sign Out"))}),m=n(82),f=n.n(m),g=n(83),d=n.n(g),p=function(){return o.a.createElement("div",null,o.a.createElement(f.a,{className:"Tilt shadow-3 br2 pa2 bg-white",options:{max:25},style:{height:80,width:80}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("img",{src:d.a,width:"100%",alt:"Codes and Tags Logo"}))))},h=(n(238),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return o.a.createElement("div",{className:"w-100 w-100-m w-50-ns center"},o.a.createElement("p",{className:"f4 f4-m f3-ns"},"This magic app will detect faces in your pictures. Git it a try."),o.a.createElement("div",{className:"form flex pa2"},o.a.createElement("input",{type:"text",className:"w-100 w-70-ns f4 pa2",onChange:t,autoFocus:!0}),o.a.createElement("button",{className:"w-50 center-ns w-30-ns grow link dib ph3 pv2 white bg-light-purple f5 f5-m f4-ns",onClick:n},"Detect")))}),b=(n(239),function(e){var t=e.imageUrl,n=e.boundingBox,a=t&&t.length>0?o.a.createElement("img",{className:"face-recognition__image",width:"80%",src:t,alt:"Face Recognition result"}):o.a.createElement("p",null," There is not image yet!");return o.a.createElement("div",{className:"mt3 mb4 center pa2 br2 shadow-3 face-recognition"},a,o.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}}))}),C=(n(240),function(e){var t=e.url;return o.a.createElement("div",{className:"absolute top-0 right-0"},o.a.createElement("a",{href:t,target:"_blank",className:"github-corner","aria-label":"View source on GitHub",rel:"noopener noreferrer"},o.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},o.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),o.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),o.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))))}),w=n(43),E=new(n.n(w).a.App)({apiKey:"bcd464420d0943eeafb026655ee507c3"});var v=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),l=Object(A.a)(r,2),m=l[0],f=l[1],g=Object(a.useState)({}),d=Object(A.a)(g,2),v=d[0],y=d[1],z=function(){E.models.predict(w.FACE_DETECT_MODEL,n).then((function(e){T(N(e))})).catch((function(e){}))},N=function(e){if(!e.outputs||0===e.outputs.length)return{};var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.querySelector(".face-recognition__image"),a=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},T=function(e){y(e)};return o.a.createElement("div",{className:"App flex flex-column w-90 center"},o.a.createElement(c.a,{style:{position:"fixed",top:0,left:0,zIndex:-1},params:s}),o.a.createElement(C,null),o.a.createElement(u,null),o.a.createElement(p,null),o.a.createElement(h,{onInputChange:function(e){console.log("Input",e.target.value),i(e.target.value)},onButtonSubmit:function(){f(n),console.log("Click button to send the image : ",n),setTimeout(z,100)}}),o.a.createElement(b,{boundingBox:v,imageUrl:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(277);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6T+iNAAAAH3RSTlMABAILZBgJgtkegPjiHfbeG34FB+Dj2vcKf4z1+4MISTkjmgAAAqVJREFUeNrtnNtSwkAQRGMgRO5BFIMK/P9fer+yYMpMz2yXfV6tmjldhkBN7U5RCCGEEEIIIYQQQgghhBBCCOHGRWlTp7yI8R8MK5tC1XAQ4T+qL8c2lcaX9SjAfzKdzW1KzWfTiXuC0WRxsAtwWHgnePa3DOCd4MXfNIBvgld/2wCeCd78jQP4JXj3tw7gleDD3zyAT4JPf/sAHgm++AMC4BN89UcEQCf45g8JgE3w3R8TAJnghz8oAC7BT39UAFSCI39YAEyCY39cAESChD8wgH2ClD8ygHWCpD80gG2CtD82gGWCE/6HZWNTv1keoAlO+S9WVzYNrlYLZIKT/vh/sUkLB39oExd/YBsnf1gjN39QK0d/SDNXf0A7Z3/zhu7+xi0D/E2bIvzXzTzFuCrt2yL8R6vrWYKbzbA0bwzxP1Hztm7NW3v6H9U0aB7qb9A+2L+3QLh/T4UM/HtJZOHfQyMT/z+LZOPvGxvh7/vgIfx9P/oIf9+XL8Lf9+sP4e/7AwTh7/sTEOHfuUi2/h3LZOzfqVDW/h1KZe7/a7Hs/X8p126z9z9TcNsWd/fJPz3s9vn4F8V+95AseX8HCIB4Js8EMH+EXD9TT48Qw0zY8zUU8k7LfCbs+VUc9p1COBNG/BzVTLhXTc2Eo/01E47310w43l8z4Xh/zYTj/TUTjvf/RzPhtr7N079jmXK4uUkdoLlehft3K1RW4+QJpmYd789/5Iz/0B//sUv+g6/8R4/5D3/zH7/nvwDBfwWF/xIQ/zUs/otw/FcR+S+D8l/H5b8QzX8lnX8pAP9aBv7FGPyrSfiXw/Cv5+FfkMS/oop/SRj/mjb+RXn8qwr5l0Xyr+vkX5jKv7KWf2kw/9pm/sXZQgghhBBCCCGEEEIIIYQQ4n/yCAeemr0iU/9tAAAAAElFTkSuQmCC"},84:function(e,t,n){e.exports=n(278)},89:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.06dccd2b.chunk.js.map