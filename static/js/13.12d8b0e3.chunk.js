(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[13],{221:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(21),a=function(){return{type:r.a}},c=function(e,t){return 404===e.response.status?function(e){return{type:r.e,props:e}}(t):500===e.response.status?function(e){return{type:r.f,props:e}}(t):function(e){return{type:r.g,error:e}}(e)}},223:function(e,t,n){"use strict";var r=n(21),a=n(221),c=n(227),u=n.n(c).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}});n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var l=function(e,t){return function(n){u.get(e).then((function(e){var t;n((t=e.data,{type:r.d,data:t}))})).catch((function(e){n(a.b(e,t))}))}},o=function(e,t,n){return function(c){u.post(e,t).then((function(e){c(function(e){return{type:r.h,response:e}}(e))})).catch((function(e){c(a.b(e,n))}))}},i=function(e,t,n){return function(c){u.put(e,t).then((function(e){c(function(e){return{type:r.i,response:e}}(e))})).catch((function(e){c(a.b(e,n))}))}},s=function(e,t){return function(n){u.delete(e).then((function(e){n(function(e){return{type:r.c,response:e}}(e))})).catch((function(e){n(a.b(e,t))}))}},f=function(e,t){return{type:r.b,props:e,url:t}}},271:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(1),c=n.n(a),u=n(12),l=n(25),o=n(91),i=n(223),s=n(233),f=n.n(s),d=function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.owner.name),c.a.createElement("td",null,c.a.createElement(f.a,{format:"MM/DD/YYYY"},e.owner.dateOfBirth)),c.a.createElement("td",null,e.owner.address),c.a.createElement("td",null,c.a.createElement(u.a,{onClick:function(){return t=e.owner.id,void e.history.push("/ownerDetails/"+t);var t}},"Details")),c.a.createElement("td",null,c.a.createElement(u.a,{bsStyle:"success",onClick:function(){return t=e.owner.id,void e.history.push("/updateOwner/"+t);var t}},"Update")),c.a.createElement("td",null,c.a.createElement(u.a,{bsStyle:"danger",onClick:function(){return t=e.owner.id,void e.history.push("/deleteOwner/"+t);var t}},"Delete")))};t.default=function(e){var t=[],n=Object(o.d)((function(e){return e.repository.data}));n&&n.length>0&&(t=n.map((function(t){return c.a.createElement(d,Object.assign({key:t.id,owner:t},e))})));var s=Object(o.c)();return Object(a.useEffect)((function(){s(i.c("/api/owner",Object(r.a)({},e)))}),[s,e]),c.a.createElement(a.Fragment,null,c.a.createElement(u.l,null,c.a.createElement(u.b,{mdOffset:10,md:2},c.a.createElement(l.Link,{to:"/createOwner"},"Create Owner"))),c.a.createElement("br",null),c.a.createElement(u.l,null,c.a.createElement(u.b,{md:12},c.a.createElement(u.m,{responsive:!0,striped:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Date of birth"),c.a.createElement("th",null,"Address"),c.a.createElement("th",null,"Details"),c.a.createElement("th",null,"Update"),c.a.createElement("th",null,"Delete"))),c.a.createElement("tbody",null,t)))))}}}]);
//# sourceMappingURL=13.12d8b0e3.chunk.js.map