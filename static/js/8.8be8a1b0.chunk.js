(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[8],{221:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(21),r=function(){return{type:a.a}},o=function(e,t){return 404===e.response.status?function(e){return{type:a.e,props:e}}(t):500===e.response.status?function(e){return{type:a.f,props:e}}(t):function(e){return{type:a.g,error:e}}(e)}},222:function(e,t,n){},223:function(e,t,n){"use strict";var a=n(21),r=n(221),o=n(227),c=n.n(o).a.create({baseURL:"https://pauls-brokerage.herokuapp.com",headers:{headerType:"example header type"}});n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return d}));var u=function(e,t){return function(n){c.get(e).then((function(e){var t;n((t=e.data,{type:a.d,data:t}))})).catch((function(e){n(r.b(e,t))}))}},l=function(e,t,n){return function(o){c.post(e,t).then((function(e){o(function(e){return{type:a.h,response:e}}(e))})).catch((function(e){o(r.b(e,n))}))}},s=function(e,t,n){return function(o){c.put(e,t).then((function(e){o(function(e){return{type:a.i,response:e}}(e))})).catch((function(e){o(r.b(e,n))}))}},i=function(e,t){return function(n){c.delete(e).then((function(e){n(function(e){return{type:a.c,response:e}}(e))})).catch((function(e){n(r.b(e,t))}))}},d=function(e,t){return{type:a.b,props:e,url:t}}},225:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(12);n(222);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(o.h,{show:e.show,backdrop:"static"},r.a.createElement(o.h.Header,null,e.modalHeaderText),r.a.createElement(o.h.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(o.h.Footer,null,r.a.createElement(o.a,{bsStyle:"success",onClick:e.successClick},e.okButtonText))))}},226:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(12);n(222);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(o.h,{show:e.show,backdrop:"static"},r.a.createElement(o.h.Header,null,e.modalHeaderText),r.a.createElement(o.h.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(o.h.Footer,null,r.a.createElement(o.a,{bsStyle:"danger",onClick:e.closeModal},e.okButtonText))))}},229:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(12),c=n(235);n(234),n(230);t.a=function(e){var t=null,n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=r.a.createElement("em",null,e.errorMessage)),e.elementType){case"input":t=r.a.createElement(o.f,{controlId:e.id},r.a.createElement(o.b,{componentClass:o.c,sm:2},e.label),r.a.createElement(o.b,{sm:6},r.a.createElement(o.e,{type:e.type,value:e.value,onChange:e.changed,onBlur:e.blur})),r.a.createElement(o.b,null,r.a.createElement("em",null,n)));break;case"datePicker":t=r.a.createElement(o.f,{controlId:e.id},r.a.createElement(o.b,{componentClass:o.c,sm:2},e.label),r.a.createElement(o.b,{sm:6},r.a.createElement(c.a,{selected:e.value,dateFormat:"MM/DD/YYYY",readOnly:!0,onChange:e.changed,className:"datePickerControl",showYearDropdown:!0,dropdownMode:"select"})),r.a.createElement(o.b,null,r.a.createElement("em",null,n)));break;default:t=null}return r.a.createElement(a.Fragment,null,t)}},230:function(e,t,n){},231:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(228),r=n.n(a),o=function(){return{name:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Name:"},address:{element:"input",type:"text",value:"",validation:{required:!0,maxLength:60},valid:!1,touched:!1,errorMessage:"",label:"Address:"},dateOfBirth:{element:"datePicker",type:"text",value:r()(),valid:!0,touched:!1,errorMessage:"",label:"Date of birth:"}}},c=function(){return{accountType:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Account type:"},dateCreated:{element:"datePicker",type:"text",value:r()(),valid:!0,touched:!1,errorMessage:"",label:"Created date:"}}}},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(22),r=function(e){var t=[];for(var n in e)t.push({id:n,config:e[n]});return t},o=function(e,t,n){var r=Object(a.a)({},t[n]);r.value=n.startsWith("date")?e:e.target.value,r.touched=!0;var o=c(r.value,r.validation);return r.valid=o.isValid,r.errorMessage=o.errorMessage,r},c=function(e,t){var n={isValid:!0,errorMessage:""};return t?(t.required&&(n.isValid=""!==e.trim(),n.errorMessage=n.isValid?"":"Field is required"),n.isValid&&t.maxLength&&(n.isValid=e.length<=t.maxLength,n.errorMessage="Not allowed more than ".concat(t.maxLength," characters")),n):n},u=function(e){var t=0;for(var n in e)if(!e[n].valid){t+=1;break}return t}},268:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(93),o=n(94),c=n(96),u=n(95),l=n(97),s=n(1),i=n.n(s),d=n(229),p=n(12),m=n(231),f=n(232),h=n(223),v=n(221),b=n(91),y=n(228),g=n.n(y),E=n(225),M=n(226),w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={accountForm:{},isFormValid:!0},n.componentWillMount=function(){n.setState({accountForm:Object(m.a)()})},n.componentDidMount=function(){var e="/api/accounts/"+n.props.match.params.id;n.props.onGetAccountById(e,Object(a.a)({},n.props))},n.componentWillReceiveProps=function(e){var t=Object(a.a)({},n.state.accountForm),r=Object(a.a)({},t.accountType),o=Object(a.a)({},t.dateCreated);r.value=e.data.accountType,r.valid=!0,o.value=g()(e.data.dateCreated),t.accountType=r,t.dateCreated=o,n.setState({accountForm:t})},n.updateAccount=function(e){e.preventDefault();var t={accountType:n.state.accountForm.accountType.value,dateCreated:n.state.accountForm.dateCreated.value,ownerId:n.props.data.ownerId},r="/api/accounts/"+n.props.data.id;n.props.onUpdateAccount(r,t,Object(a.a)({},n.props))},n.redirectToOwnerDetails=function(){n.props.history.push("/ownerDetails/"+n.props.data.ownerId)},n.handleChangeEvent=function(e,t){var r=Object(a.a)({},n.state.accountForm);r[t]=f.c(e,r,t);var o=f.b(r);n.setState({accountForm:r,isFormValid:0===o})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=f.a(Object(a.a)({},this.state.accountForm));return i.a.createElement(p.n,null,i.a.createElement(p.d,{horizontal:!0,onSubmit:this.updateAccount},t.map((function(t){return i.a.createElement(d.a,{key:t.id,elementType:t.config.element,id:t.id,label:t.config.label,type:t.config.type,value:t.config.value,changed:function(n){return e.handleChangeEvent(n,t.id)},errorMessage:t.config.errorMessage,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,blur:function(n){return e.handleChangeEvent(n,t.id)}})})),i.a.createElement("br",null),i.a.createElement(p.f,null,i.a.createElement(p.b,{mdOffset:6,md:1},i.a.createElement(p.a,{type:"submit",bsStyle:"info",disabled:!this.state.isFormValid},"Update")),i.a.createElement(p.b,{md:1},i.a.createElement(p.a,{bsStyle:"danger",onClick:this.redirectToOwnerDetails},"Cancel")))),i.a.createElement(E.a,{show:this.props.showSuccessModal,modalHeaderText:"Success message",modalBodyText:"Action completed successfully",okButtonText:"OK",successClick:function(){return e.props.onCloseSuccessModal("/ownerDetails/"+e.props.data.ownerId,Object(a.a)({},e.props))}}),i.a.createElement(M.a,{show:this.props.showErrorModal,modalHeaderText:"Error message",modalBodyText:this.props.errorMessage,okButtonText:"OK",closeModal:function(){return e.props.onCloseErrorModal()}}))}}]),t}(s.Component);t.default=Object(b.b)((function(e){return{data:e.repository.data,showSuccessModal:e.repository.showSuccessModal,showErrorModal:e.errorHandler.showErrorModal,errorMessage:e.errorHandler.errorMessage}}),(function(e){return{onGetAccountById:function(t,n){return e(h.c(t,n))},onUpdateAccount:function(t,n,a){return e(h.e(t,n,a))},onCloseSuccessModal:function(t,n){return e(h.a(n,t))},onCloseErrorModal:function(){return e(v.a())}}}))(w)}}]);
//# sourceMappingURL=8.8be8a1b0.chunk.js.map