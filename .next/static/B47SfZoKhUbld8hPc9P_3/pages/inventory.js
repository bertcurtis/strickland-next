(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"W/7i":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,c=[],l=[],o={},s=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:s,headers:{keys:function(){return c},entries:function(){return l},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}};for(var u in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){c.push(t=t.toLowerCase()),l.push([t,n]),o[t]=o[t]?o[t]+","+n:n}),n(s())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(u,t.headers[u]);a.send(t.body||null)})}},"Z4/W":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inventory",function(){var e=n("x3Z4");return{page:e.default||e}}])},x3Z4:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),c=n("O40h"),l=n("q1tI"),o=n.n(l),s=n("crZw"),u=n("zgjP"),i=n.n(u),m=n("20a2"),p=n("YFqc"),f=n.n(p),d=function(e){var t=e.key,n=e.vehicleData;return o.a.createElement("li",{key:t},o.a.createElement("div",null,o.a.createElement("h3",null,"".concat(n.year," ").concat(n.make," ").concat(n.model)),o.a.createElement("div",null,o.a.createElement("p",null,"Miles: ".concat(n.miles)),o.a.createElement("p",null,"Color: ".concat(n.extcolor)),o.a.createElement("p",null,"Trim: ".concat(n.trim)),o.a.createElement("p",null,"Price: ".concat(n.price)),o.a.createElement("p",null,"".concat(n.description)),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("img",{src:n.imgs[0]})),o.a.createElement("li",null,o.a.createElement("img",{src:n.imgs[1]})),o.a.createElement("li",null,o.a.createElement("img",{src:n.imgs[2]})),o.a.createElement("li",null,o.a.createElement(f.a,{href:"/car"},o.a.createElement("a",null,"See More...")))))))},h=function(e){return o.a.createElement(s.a,null,o.a.createElement("ul",null,e.vehicles.map(function(e){return o.a.createElement(d,{key:e.id,vehicleData:e})})))};h.getInitialProps=Object(c.default)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("https://strickland-cars-api.herokuapp.com/cars");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Car data fetched. Count: ".concat(n.length)),e.abrupt("return",{vehicles:n});case 8:case"end":return e.stop()}},e)})),t.default=Object(m.withRouter)(h)},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("W/7i").default||n("W/7i"))}},[["Z4/W",1,0]]]);