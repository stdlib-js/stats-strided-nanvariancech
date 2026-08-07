"use strict";var M=function(a,n){return function(){try{return n||a((n={exports:{}}).exports,n),n.exports}catch(u){throw (n=0, u)}};};var l=M(function(D,k){
function j(a,n,u,v,b){var y,i,p,t,s,f,e,c,r,o,q;if(y=u.data,i=u.accessors[0],a===1||v===0)return r=i(y,b),r===r&&a-n>0?0:NaN;for(t=b,q=0;q<a;q++){if(r=i(y,t),r===r){p=r;break}t+=v}if(q===a)return NaN;for(t+=v,q+=1,s=0,e=0,o=1,q;q<a;q++)r=i(y,t),r===r&&(c=r-p,s+=c*c,e+=c,o+=1),t+=v;return f=o-n,f<=0?NaN:s/f-e/o*(e/f)}k.exports=j
});var h=M(function(E,m){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=l();function R(a,n,u,v,b){var y,i,p,t,s,f,e,c,r,o;if(a<=0)return NaN;if(o=O(u),o.accessorProtocol)return P(a,n,o,v,b);if(a===1||v===0)return e=u[b],e===e&&a-n>0?0:NaN;for(i=b,r=0;r<a;r++){if(e=u[i],e===e){y=e;break}i+=v}if(r===a)return NaN;for(i+=v,r+=1,p=0,s=0,c=1,r;r<a;r++)e=u[i],e===e&&(f=e-y,p+=f*f,s+=f,c+=1),i+=v;return t=c-n,t<=0?NaN:p/t-s/c*(s/t)}m.exports=R
});var N=M(function(F,x){
var d=require('@stdlib/strided-base-stride2offset/dist'),w=h();function z(a,n,u,v){return w(a,n,u,v,d(a,v))}x.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=N(),B=h();A(g,"ndarray",B);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
