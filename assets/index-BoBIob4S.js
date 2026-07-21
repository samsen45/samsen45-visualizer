(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="169",ip=0,vu=1,rp=2,Hh=1,sp=2,Wn=3,yi=0,Ge=1,Yn=2,$n=0,_i=1,Es=2,xu=3,Mu=4,ap=5,Xi=100,op=101,lp=102,cp=103,up=104,hp=200,fp=201,dp=202,pp=203,sl=204,al=205,mp=206,_p=207,gp=208,vp=209,xp=210,Mp=211,Sp=212,yp=213,Tp=214,ol=0,ll=1,cl=2,kr=3,ul=4,hl=5,fl=6,dl=7,Gh=0,Ep=1,bp=2,gi=0,Wh=1,Xh=2,qh=3,Ec=4,Ap=5,Yh=6,Zh=7,Kh=300,Vr=301,Hr=302,pl=303,ml=304,Ja=306,_l=1e3,Yi=1001,gl=1002,He=1003,wp=1004,Ys=1005,En=1006,po=1007,Zi=1008,Qn=1009,$h=1010,jh=1011,bs=1012,bc=1013,nr=1014,Zn=1015,wn=1016,Ac=1017,wc=1018,Gr=1020,Jh=35902,Qh=1021,tf=1022,bn=1023,ef=1024,nf=1025,Ir=1026,Wr=1027,rf=1028,Cc=1029,sf=1030,Rc=1031,Pc=1033,Ta=33776,Ea=33777,ba=33778,Aa=33779,vl=35840,xl=35841,Ml=35842,Sl=35843,yl=36196,Tl=37492,El=37496,bl=37808,Al=37809,wl=37810,Cl=37811,Rl=37812,Pl=37813,Dl=37814,Ll=37815,Il=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,wa=36492,zl=36494,kl=36495,af=36283,Vl=36284,Hl=36285,Gl=36286,Cp=3200,Rp=3201,Pp=0,Dp=1,hi="",ze="srgb",Ci="srgb-linear",Dc="display-p3",Qa="display-p3-linear",Ia="linear",ie="srgb",Ua="rec709",Na="p3",lr=7680,Su=519,Lp=512,Ip=513,Up=514,of=515,Np=516,Fp=517,Op=518,Bp=519,Wl=35044,yu="300 es",Kn=2e3,Fa=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,Xl=180/Math.PI;function vi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[r&255]+we[r>>8&255]+we[r>>16&255]+we[r>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ke(r,t,e){return Math.max(t,Math.min(e,r))}function zp(r,t){return(r%t+t)%t}function _o(r,t,e){return(1-e)*r+e*t}function Ln(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],d=i[3],p=i[6],E=i[1],M=i[4],C=i[7],I=i[2],L=i[5],R=i[8];return s[0]=a*_+o*E+l*I,s[3]=a*d+o*M+l*L,s[6]=a*p+o*C+l*R,s[1]=c*_+u*E+h*I,s[4]=c*d+u*M+h*L,s[7]=c*p+u*C+h*R,s[2]=f*_+m*E+g*I,s[5]=f*d+m*M+g*L,s[8]=f*p+m*C+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Ot;function lf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function As(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kp(){const r=As("canvas");return r.style.display="block",r}const Tu={};function Ca(r){r in Tu||(Tu[r]=!0,console.warn(r))}function Vp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Hp(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gp(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Eu=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bu=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[Ci]:{transfer:Ia,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ze]:{transfer:ie,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qa]:{transfer:Ia,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(bu),fromReference:r=>r.applyMatrix3(Eu)},[Dc]:{transfer:ie,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(bu),fromReference:r=>r.applyMatrix3(Eu).convertLinearToSRGB()}},Wp=new Set([Ci,Qa]),Yt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Wp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ls[t].toReference,i=ls[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ls[r].primaries},getTransfer:function(r){return r===hi?Ia:ls[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(ls[t].luminanceCoefficients)}};function Ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cr;class Xp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cr===void 0&&(cr=As("canvas")),cr.width=t.width,cr.height=t.height;const n=cr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ur(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ur(e[n]/255)*255):e[n]=Ur(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qp=0;class cf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(xo(i[a].image)):s.push(xo(i[a]))}else s=xo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function xo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;class De extends is{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Yi,i=Yi,s=En,a=Zi,o=bn,l=Qn,c=De.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=vi(),this.name="",this.source=new cf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _l:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _l:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Kh;De.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,C=(m+1)/2,I=(p+1)/2,L=(u+f)/4,R=(h+_)/4,F=(g+d)/4;return M>C&&M>I?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=L/n,s=R/n):C>I?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=L/i,s=F/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=R/s,i=F/s),this.set(n,i,s,e),this}let E=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Zp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uf extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-o;const p=l*f+c*m+u*g+h*_,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),L=Math.atan2(I,p*E);d=Math.sin(d*L)/I,o=Math.sin(o*L)/I}const C=o*E;if(l=l*d+f*C,c=c*d+m*C,u=u*d+g*C,h=h*d+_*C,d===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-o*m,t[e+2]=c*g+u*m+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new H,Au=new zs;class ks{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Ks.subVectors(this.max,cs),ur.subVectors(t.a,cs),hr.subVectors(t.b,cs),fr.subVectors(t.c,cs),si.subVectors(hr,ur),ai.subVectors(fr,hr),Di.subVectors(ur,fr);let e=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Di.z,Di.y,si.z,0,-si.x,ai.z,0,-ai.x,Di.z,0,-Di.x,-si.y,si.x,0,-ai.y,ai.x,0,-Di.y,Di.x,0];return!So(e,ur,hr,fr,Ks)||(e=[1,0,0,0,1,0,0,0,1],!So(e,ur,hr,fr,Ks))?!1:($s.crossVectors(si,ai),e=[$s.x,$s.y,$s.z],So(e,ur,hr,fr,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new H,new H,new H,new H,new H,new H,new H,new H],Sn=new H,Zs=new ks,ur=new H,hr=new H,fr=new H,si=new H,ai=new H,Di=new H,cs=new H,Ks=new H,$s=new H,Li=new H;function So(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Li.fromArray(r,s);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $p=new ks,us=new H,yo=new H;class to{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$p.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(yo)),this.expandByPoint(us.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new H,To=new H,js=new H,oi=new H,Eo=new H,Js=new H,bo=new H;class hf{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){To.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(To);const s=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=oi.dot(this.direction),l=-oi.dot(js),c=oi.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(To).addScaledVector(js,f),m}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,s){Eo.subVectors(e,t),Js.subVectors(n,t),bo.crossVectors(Eo,Js);let a=this.direction.dot(bo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const l=o*this.direction.dot(Js.crossVectors(oi,Js));if(l<0)return null;const c=o*this.direction.dot(Eo.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(bo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,s,a,o,l,c,u,h,f,m,g,_,d){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,m,g,_,d)}set(t,e,n,i,s,a,o,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/dr.setFromMatrixColumn(t,0).length(),s=1/dr.setFromMatrixColumn(t,1).length(),a=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,Jp)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),li.crossVectors(n,Je),li.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),li.crossVectors(n,Je)),li.normalize(),Qs.crossVectors(Je,li),i[0]=li.x,i[4]=Qs.x,i[8]=Je.x,i[1]=li.y,i[5]=Qs.y,i[9]=Je.y,i[2]=li.z,i[6]=Qs.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],E=n[3],M=n[7],C=n[11],I=n[15],L=i[0],R=i[4],F=i[8],V=i[12],v=i[1],b=i[5],W=i[9],T=i[13],S=i[2],D=i[6],w=i[10],N=i[14],U=i[3],K=i[7],J=i[11],j=i[15];return s[0]=a*L+o*v+l*S+c*U,s[4]=a*R+o*b+l*D+c*K,s[8]=a*F+o*W+l*w+c*J,s[12]=a*V+o*T+l*N+c*j,s[1]=u*L+h*v+f*S+m*U,s[5]=u*R+h*b+f*D+m*K,s[9]=u*F+h*W+f*w+m*J,s[13]=u*V+h*T+f*N+m*j,s[2]=g*L+_*v+d*S+p*U,s[6]=g*R+_*b+d*D+p*K,s[10]=g*F+_*W+d*w+p*J,s[14]=g*V+_*T+d*N+p*j,s[3]=E*L+M*v+C*S+I*U,s[7]=E*R+M*b+C*D+I*K,s[11]=E*F+M*W+C*w+I*J,s[15]=E*V+M*T+C*N+I*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+e*l*m-e*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+d*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],E=h*d*c-_*f*c+_*l*m-o*d*m-h*l*p+o*f*p,M=g*f*c-u*d*c-g*l*m+a*d*m+u*l*p-a*f*p,C=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,I=g*h*l-u*_*l-g*o*f+a*_*f+u*o*d-a*h*d,L=e*E+n*M+i*C+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return t[0]=E*R,t[1]=(_*f*s-h*d*s-_*i*m+n*d*m+h*i*p-n*f*p)*R,t[2]=(o*d*s-_*l*s+_*i*c-n*d*c-o*i*p+n*l*p)*R,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*R,t[4]=M*R,t[5]=(u*d*s-g*f*s+g*i*m-e*d*m-u*i*p+e*f*p)*R,t[6]=(g*l*s-a*d*s-g*i*c+e*d*c+a*i*p-e*l*p)*R,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*m+e*l*m)*R,t[8]=C*R,t[9]=(g*h*s-u*_*s-g*n*m+e*_*m+u*n*p-e*h*p)*R,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*R,t[12]=I*R,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*d+e*h*d)*R,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*d-e*o*d)*R,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,_=a*u,d=a*h,p=o*h,E=l*c,M=l*u,C=l*h,I=n.x,L=n.y,R=n.z;return i[0]=(1-(_+p))*I,i[1]=(m+C)*I,i[2]=(g-M)*I,i[3]=0,i[4]=(m-C)*L,i[5]=(1-(f+p))*L,i[6]=(d+E)*L,i[7]=0,i[8]=(g+M)*R,i[9]=(d-E)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=dr.set(i[0],i[1],i[2]).length();const a=dr.set(i[4],i[5],i[6]).length(),o=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const c=1/s,u=1/a,h=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Kn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(o===Kn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Fa)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Kn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,m=(n+i)*u;let g,_;if(o===Kn)g=(a+s)*h,_=-2*h;else if(o===Fa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const dr=new H,yn=new de,jp=new H(0,0,0),Jp=new H(1,1,1),li=new H,Qs=new H,Je=new H,wu=new de,Cu=new zs;class ti{constructor(t=0,e=0,n=0,i=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qp=0;const Ru=new H,pr=new zs,Vn=new de,ta=new H,hs=new H,tm=new H,em=new zs,Pu=new H(1,0,0),Du=new H(0,1,0),Lu=new H(0,0,1),Iu={type:"added"},nm={type:"removed"},mr={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Ne extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new H,e=new ti,n=new zs,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Ot}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(hs,ta,this.up):Vn.lookAt(ta,hs,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Vn),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ne.DEFAULT_UP=new H(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new H,Hn=new H,wo=new H,Gn=new H,_r=new H,gr=new H,Uu=new H,Co=new H,Ro=new H,Po=new H,Do=new _e,Lo=new _e,Io=new _e;class mn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Tn.subVectors(i,e),Hn.subVectors(n,e),wo.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Hn),l=Tn.dot(wo),c=Hn.dot(Hn),u=Hn.dot(wo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Do.setScalar(0),Lo.setScalar(0),Io.setScalar(0),Do.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Io.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Do,s.x),a.addScaledVector(Lo,s.y),a.addScaledVector(Io,s.z),a}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),Hn.subVectors(t,e),Tn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Tn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;_r.subVectors(i,n),gr.subVectors(s,n),Co.subVectors(t,n);const l=_r.dot(Co),c=gr.dot(Co);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,i);const u=_r.dot(Ro),h=gr.dot(Ro);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(_r,a);Po.subVectors(t,s);const m=_r.dot(Po),g=gr.dot(Po);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(gr,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Uu.subVectors(s,i),o=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Uu,o);const p=1/(d+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(_r,a).addScaledVector(gr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Uo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=zp(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Uo(a,s,t+1/3),this.g=Uo(a,s,t),this.b=Uo(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Yt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ke(Ce.r*255,0,255))*65536+Math.round(ke(Ce.g*255,0,255))*256+Math.round(ke(Ce.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,s=Ce.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ze){Yt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(ea);const n=_o(ci.h,ea.h,e),i=_o(ci.s,ea.s,e),s=_o(ci.l,ea.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Bt;Bt.NAMES=df;let im=0;class rs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=_i,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=al,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xr extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new H,na=new Lt;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}}class pf extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mf extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jn extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rm=0;const hn=new de,No=new Ne,vr=new H,Qe=new ks,fs=new ks,ye=new H;class Cn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?mf:pf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Qe.min,fs.min),Qe.expandByPoint(ye),ye.addVectors(Qe.max,fs.max),Qe.expandByPoint(ye)):(Qe.expandByPoint(fs.min),Qe.expandByPoint(fs.max))}Qe.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&(vr.fromBufferAttribute(t,c),ye.add(vr)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new H,l[F]=new H;const c=new H,u=new H,h=new H,f=new Lt,m=new Lt,g=new Lt,_=new H,d=new H;function p(F,V,v){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,V),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,F),m.fromBufferAttribute(s,V),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(b),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(b),o[F].add(_),o[V].add(_),o[v].add(_),l[F].add(d),l[V].add(d),l[v].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,V=E.length;F<V;++F){const v=E[F],b=v.start,W=v.count;for(let T=b,S=b+W;T<S;T+=3)p(t.getX(T+0),t.getX(T+1),t.getX(T+2))}const M=new H,C=new H,I=new H,L=new H;function R(F){I.fromBufferAttribute(i,F),L.copy(I);const V=o[F];M.copy(V),M.sub(I.multiplyScalar(I.dot(V))).normalize(),C.crossVectors(L,V);const b=C.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,b)}for(let F=0,V=E.length;F<V;++F){const v=E[F],b=v.start,W=v.count;for(let T=b,S=b+W;T<S;T+=3)R(t.getX(T+0)),R(t.getX(T+1)),R(t.getX(T+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new de,Ii=new hf,ia=new to,Fu=new H,ra=new H,sa=new H,aa=new H,Fo=new H,oa=new H,Ou=new H,la=new H;class _n extends Ne{constructor(t=new Cn,e=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Fo.fromBufferAttribute(h,t),a?oa.addScaledVector(Fo,u):oa.addScaledVector(Fo.sub(e),u))}e.add(oa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),Ii.copy(t.ray).recast(t.near),!(ia.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ia,Fu)===null||Ii.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Nu.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],E=Math.max(d.start,m.start),M=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let C=E,I=M;C<I;C+=3){const L=o.getX(C),R=o.getX(C+1),F=o.getX(C+2);i=ca(this,p,t,n,c,u,h,L,R,F),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const E=o.getX(d),M=o.getX(d+1),C=o.getX(d+2);i=ca(this,a,t,n,c,u,h,E,M,C),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],E=Math.max(d.start,m.start),M=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let C=E,I=M;C<I;C+=3){const L=C,R=C+1,F=C+2;i=ca(this,p,t,n,c,u,h,L,R,F),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const E=d,M=d+1,C=d+2;i=ca(this,a,t,n,c,u,h,E,M,C),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function sm(r,t,e,n,i,s,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===yi,o),l===null)return null;la.copy(o),la.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:r}}function ca(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ra),r.getVertexPosition(l,sa),r.getVertexPosition(c,aa);const u=sm(r,t,e,n,ra,sa,aa,Ou);if(u){const h=new H;mn.getBarycoord(Ou,ra,sa,aa,h),i&&(u.uv=mn.getInterpolatedAttribute(i,o,l,c,h,new Lt)),s&&(u.uv1=mn.getInterpolatedAttribute(s,o,l,c,h,new Lt)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};mn.getNormal(ra,sa,aa,f.normal),u.face=f,u.barycoord=h}return u}class Vs extends Cn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(h,2));function g(_,d,p,E,M,C,I,L,R,F,V){const v=C/R,b=I/F,W=C/2,T=I/2,S=L/2,D=R+1,w=F+1;let N=0,U=0;const K=new H;for(let J=0;J<w;J++){const j=J*b-T;for(let et=0;et<D;et++){const at=et*v-W;K[_]=at*E,K[d]=j*M,K[p]=S,c.push(K.x,K.y,K.z),K[_]=0,K[d]=0,K[p]=L>0?1:-1,u.push(K.x,K.y,K.z),h.push(et/R),h.push(1-J/F),N+=1}}for(let J=0;J<F;J++)for(let j=0;j<R;j++){const et=f+j+D*J,at=f+j+D*(J+1),q=f+(j+1)+D*(J+1),Z=f+(j+1)+D*J;l.push(et,at,Z),l.push(at,q,Z),U+=6}o.addGroup(m,U,V),m+=U,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(r){const t={};for(let e=0;e<r.length;e++){const n=qr(r[e]);for(const i in n)t[i]=n[i]}return t}function am(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _f(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Yr={clone:qr,merge:Ue};var om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gf extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new H,Bu=new Lt,zu=new Lt;class dn extends gf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Bu,zu),e.subVectors(zu,Bu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xr=-90,Mr=1;class cm extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(xr,Mr,t,e);i.layers=this.layers,this.add(i);const s=new dn(xr,Mr,t,e);s.layers=this.layers,this.add(s);const a=new dn(xr,Mr,t,e);a.layers=this.layers,this.add(a);const o=new dn(xr,Mr,t,e);o.layers=this.layers,this.add(o);const l=new dn(xr,Mr,t,e);l.layers=this.layers,this.add(l);const c=new dn(xr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vf extends De{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Vr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class um extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new vf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vs(5,5,5),s=new Pe({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:$n});s.uniforms.tEquirect.value=e;const a=new _n(i,s),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=En),new cm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Oo=new H,hm=new H,fm=new Ot;class zi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oo.subVectors(n,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fm.getNormalMatrix(t),i=this.coplanarPoint(Oo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new to,ua=new H;class xf{constructor(t=new zi,e=new zi,n=new zi,i=new zi,s=new zi,a=new zi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],d=i[11],p=i[12],E=i[13],M=i[14],C=i[15];if(n[0].setComponents(l-s,f-c,d-m,C-p).normalize(),n[1].setComponents(l+s,f+c,d+m,C+p).normalize(),n[2].setComponents(l+a,f+u,d+g,C+E).normalize(),n[3].setComponents(l-a,f-u,d-g,C-E).normalize(),n[4].setComponents(l-o,f-h,d-_,C-M).normalize(),e===Kn)n[5].setComponents(l+o,f+h,d+_,C+M).normalize();else if(e===Fa)n[5].setComponents(o,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ua.x=i.normal.x>0?t.max.x:t.min.x,ua.y=i.normal.y>0?t.max.y:t.min.y,ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function dm(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Zr extends Cn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const E=p*f-a;for(let M=0;M<c;M++){const C=M*h-s;g.push(C,-E,0),_.push(0,0,1),d.push(M/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const M=E+c*p,C=E+c*(p+1),I=E+1+c*(p+1),L=E+1+c*p;m.push(M,C,L),m.push(C,I,L)}this.setIndex(m),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:_m,alphamap_pars_fragment:gm,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:Mm,aomap_pars_fragment:Sm,batching_pars_vertex:ym,batching_vertex:Tm,begin_vertex:Em,beginnormal_vertex:bm,bsdfs:Am,iridescence_fragment:wm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Lm,color_fragment:Im,color_pars_fragment:Um,color_pars_vertex:Nm,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:km,displacementmap_vertex:Vm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Zm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:a_,envmap_vertex:$m,fog_vertex:jm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:t_,gradientmap_pars_fragment:e_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:r_,lights_pars_begin:s_,lights_toon_fragment:o_,lights_toon_pars_fragment:l_,lights_phong_fragment:c_,lights_phong_pars_fragment:u_,lights_physical_fragment:h_,lights_physical_pars_fragment:f_,lights_fragment_begin:d_,lights_fragment_maps:p_,lights_fragment_end:m_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:g_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:x_,map_fragment:M_,map_pars_fragment:S_,map_particle_fragment:y_,map_particle_pars_fragment:T_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:b_,morphinstance_vertex:A_,morphcolor_vertex:w_,morphnormal_vertex:C_,morphtarget_pars_vertex:R_,morphtarget_vertex:P_,normal_fragment_begin:D_,normal_fragment_maps:L_,normal_pars_fragment:I_,normal_pars_vertex:U_,normal_vertex:N_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:k_,opaque_fragment:V_,packing:H_,premultiplied_alpha_fragment:G_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:$_,shadowmap_vertex:j_,shadowmask_pars_fragment:J_,skinbase_vertex:Q_,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:ug,uv_vertex:hg,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:_g,cube_vert:gg,cube_frag:vg,depth_vert:xg,depth_frag:Mg,distanceRGBA_vert:Sg,distanceRGBA_frag:yg,equirect_vert:Tg,equirect_frag:Eg,linedashed_vert:bg,linedashed_frag:Ag,meshbasic_vert:wg,meshbasic_frag:Cg,meshlambert_vert:Rg,meshlambert_frag:Pg,meshmatcap_vert:Dg,meshmatcap_frag:Lg,meshnormal_vert:Ig,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:kg,points_vert:Vg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},lt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Pn={basic:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ue([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ue([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ue([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ue([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ue([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ue([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ue([lt.common,lt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ue([lt.lights,lt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Pn.physical={uniforms:Ue([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ha={r:0,b:0,g:0},Ni=new ti,Yg=new de;function Zg(r,t,e,n,i,s,a){const o=new Bt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const C=g(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),M=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(E,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===Ja)?(u===void 0&&(u=new _n(new Vs(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:qr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ni.copy(M.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(Ni)),u.material.toneMapped=Yt.getTransfer(C.colorSpace)!==ie,(h!==C||f!==C.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,m=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new _n(new Zr(2,2),new Pe({name:"BackgroundMaterial",uniforms:qr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(C.colorSpace)!==ie,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,m=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(ha,_f(r)),n.buffers.color.setClear(ha.r,ha.g,ha.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:d}}function Kg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,b,W,T,S){let D=!1;const w=h(T,W,b);s!==w&&(s=w,c(s.object)),D=m(v,T,W,S),D&&g(v,T,W,S),S!==null&&t.update(S,r.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,C(v,b,W,T),S!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,b,W){const T=W.wireframe===!0;let S=n[v.id];S===void 0&&(S={},n[v.id]=S);let D=S[b.id];D===void 0&&(D={},S[b.id]=D);let w=D[T];return w===void 0&&(w=f(l()),D[T]=w),w}function f(v){const b=[],W=[],T=[];for(let S=0;S<e;S++)b[S]=0,W[S]=0,T[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:T,object:v,attributes:{},index:null}}function m(v,b,W,T){const S=s.attributes,D=b.attributes;let w=0;const N=W.getAttributes();for(const U in N)if(N[U].location>=0){const J=S[U];let j=D[U];if(j===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),J===void 0||J.attribute!==j||j&&J.data!==j.data)return!0;w++}return s.attributesNum!==w||s.index!==T}function g(v,b,W,T){const S={},D=b.attributes;let w=0;const N=W.getAttributes();for(const U in N)if(N[U].location>=0){let J=D[U];J===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const j={};j.attribute=J,J&&J.data&&(j.data=J.data),S[U]=j,w++}s.attributes=S,s.attributesNum=w,s.index=T}function _(){const v=s.newAttributes;for(let b=0,W=v.length;b<W;b++)v[b]=0}function d(v){p(v,0)}function p(v,b){const W=s.newAttributes,T=s.enabledAttributes,S=s.attributeDivisors;W[v]=1,T[v]===0&&(r.enableVertexAttribArray(v),T[v]=1),S[v]!==b&&(r.vertexAttribDivisor(v,b),S[v]=b)}function E(){const v=s.newAttributes,b=s.enabledAttributes;for(let W=0,T=b.length;W<T;W++)b[W]!==v[W]&&(r.disableVertexAttribArray(W),b[W]=0)}function M(v,b,W,T,S,D,w){w===!0?r.vertexAttribIPointer(v,b,W,S,D):r.vertexAttribPointer(v,b,W,T,S,D)}function C(v,b,W,T){_();const S=T.attributes,D=W.getAttributes(),w=b.defaultAttributeValues;for(const N in D){const U=D[N];if(U.location>=0){let K=S[N];if(K===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const J=K.normalized,j=K.itemSize,et=t.get(K);if(et===void 0)continue;const at=et.buffer,q=et.type,Z=et.bytesPerElement,ct=q===r.INT||q===r.UNSIGNED_INT||K.gpuType===bc;if(K.isInterleavedBufferAttribute){const ot=K.data,vt=ot.stride,Mt=K.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<U.locationSize;bt++)p(U.location+bt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<U.locationSize;bt++)d(U.location+bt);r.bindBuffer(r.ARRAY_BUFFER,at);for(let bt=0;bt<U.locationSize;bt++)M(U.location+bt,j/U.locationSize,q,J,vt*Z,(Mt+j/U.locationSize*bt)*Z,ct)}else{if(K.isInstancedBufferAttribute){for(let ot=0;ot<U.locationSize;ot++)p(U.location+ot,K.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ot=0;ot<U.locationSize;ot++)d(U.location+ot);r.bindBuffer(r.ARRAY_BUFFER,at);for(let ot=0;ot<U.locationSize;ot++)M(U.location+ot,j/U.locationSize,q,J,j*Z,j/U.locationSize*ot*Z,ct)}}else if(w!==void 0){const J=w[N];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(U.location,J);break;case 3:r.vertexAttrib3fv(U.location,J);break;case 4:r.vertexAttrib4fv(U.location,J);break;default:r.vertexAttrib1fv(U.location,J)}}}}E()}function I(){F();for(const v in n){const b=n[v];for(const W in b){const T=b[W];for(const S in T)u(T[S].object),delete T[S];delete b[W]}delete n[v]}}function L(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const W in b){const T=b[W];for(const S in T)u(T[S].object),delete T[S];delete b[W]}delete n[v.id]}function R(v){for(const b in n){const W=n[b];if(W[v.id]===void 0)continue;const T=W[v.id];for(const S in T)u(T[S].object),delete T[S];delete W[v.id]}}function F(){V(),a=!0,s!==i&&(s=i,c(s.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:d,disableUnusedAttributes:E}}function $g(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==bn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Zn&&!F)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:I,maxSamples:L}}function Jg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new zi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!d)s?u(null):c();else{const E=s?0:n,M=E*4;let C=p.clippingState||null;l.value=C,C=u(g,f,M,m);for(let I=0;I!==M;++I)C[I]=e[I];p.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<p)&&(d=new Float32Array(p));for(let M=0,C=m;M!==_;++M,C+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(d,C),d[C+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Qg(r){let t=new WeakMap;function e(a,o){return o===pl?a.mapping=Vr:o===ml&&(a.mapping=Hr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pl||o===ml)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new um(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Sf extends gf{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rr=4,ku=[.125,.215,.35,.446,.526,.582],qi=20,Bo=new Sf,Vu=new Bt;let zo=null,ko=0,Vo=0,Ho=!1;const ki=(1+Math.sqrt(5))/2,Sr=1/ki,Hu=[new H(-ki,Sr,0),new H(ki,Sr,0),new H(-Sr,0,ki),new H(Sr,0,ki),new H(0,ki,-Sr),new H(0,ki,Sr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){zo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,ko,Vo),this._renderer.xr.enabled=Ho,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vr||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:wn,format:bn,colorSpace:Ci,depthBuffer:!1},i=Wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(s)),this._blurMaterial=e0(s,t,e)}return i}_compileMaterial(t){const e=new _n(this._lodPlanes[0],t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,i){const o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Vu),u.toneMapping=gi,u.autoClear=!1;const m=new Xr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new _n(new Vs,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Vu),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;fa(i,E*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vr||t.mapping===Hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hu[(i-s-1)%Hu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _n(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qi-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):qi;d>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${qi}`);const p=[];let E=0;for(let R=0;R<qi;++R){const F=R/_,V=Math.exp(-F*F/2);p.push(V),R===0?E+=V:R<d&&(E+=2*V)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const C=this._sizeLods[i],I=3*C*(i>M-Rr?i-M+Rr:0),L=4*(this._cubeSize-C);fa(e,I,L,3*C,2*C),l.setRenderTarget(e),l.render(h,Bo)}}function t0(r){const t=[],e=[],n=[];let i=r;const s=r-Rr+1+ku.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Rr?l=ku[a-r+Rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,E=new Float32Array(_*g*m),M=new Float32Array(d*g*m),C=new Float32Array(p*g*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,F=L>2?0:-1,V=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];E.set(V,_*g*L),M.set(f,d*g*L);const v=[L,L,L,L,L,L];C.set(v,p*g*L)}const I=new Cn;I.setAttribute("position",new an(E,_)),I.setAttribute("uv",new an(M,d)),I.setAttribute("faceIndex",new an(C,p)),t.push(I),i>Rr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wu(r,t,e){const n=new sn(r,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function e0(r,t,e){const n=new Float32Array(qi),i=new H(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Xu(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function qu(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pl||l===ml,u=l===Vr||l===Hr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Gu(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new Gu(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function i0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ca("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r0(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let M=0,C=E.length;M<C;M+=3){const I=E[M+0],L=E[M+1],R=E[M+2];f.push(I,L,L,R,R,I)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,C=E.length/3-1;M<C;M+=3){const I=M+0,L=M+1,R=M+2;f.push(I,L,L,R,R,I)}}else return;const d=new(lf(f)?mf:pf)(f,1);d.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function s0(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){r.drawElements(n,m,s,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,f*a,g),e.update(m,n,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function h(f,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=m[E];for(let E=0;E<_.length;E++)e.update(p,n,_[E])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function a0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(r,t,e){const n=new WeakMap,i=new _e;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let C=0;g===!0&&(C=1),_===!0&&(C=2),d===!0&&(C=3);let I=o.attributes.position.count*C,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*L*4*h),F=new uf(R,I,L,h);F.type=Zn,F.needsUpdate=!0;const V=C*4;for(let b=0;b<h;b++){const W=p[b],T=E[b],S=M[b],D=I*L*4*b;for(let w=0;w<W.count;w++){const N=w*V;g===!0&&(i.fromBufferAttribute(W,w),R[D+N+0]=i.x,R[D+N+1]=i.y,R[D+N+2]=i.z,R[D+N+3]=0),_===!0&&(i.fromBufferAttribute(T,w),R[D+N+4]=i.x,R[D+N+5]=i.y,R[D+N+6]=i.z,R[D+N+7]=0),d===!0&&(i.fromBufferAttribute(S,w),R[D+N+8]=i.x,R[D+N+9]=i.y,R[D+N+10]=i.z,R[D+N+11]=S.itemSize===4?i.w:1)}}f={count:h,texture:F,size:new Lt(I,L)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function l0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class yf extends De{constructor(t,e,n,i,s,a,o,l,c,u=Ir){if(u!==Ir&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=nr),n===void 0&&u===Wr&&(n=Gr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tf=new De,Yu=new yf(1,1),Ef=new uf,bf=new Kp,Af=new vf,Zu=[],Ku=[],$u=new Float32Array(16),ju=new Float32Array(9),Ju=new Float32Array(4);function ss(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Zu[i];if(s===void 0&&(s=new Float32Array(i),Zu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Se(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function eo(r,t){let e=Ku[t];e===void 0&&(e=new Int32Array(t),Ku[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function c0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function u0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),Se(e,t)}}function h0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),Se(e,t)}}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),Se(e,t)}}function d0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Ju.set(n),r.uniformMatrix2fv(this.addr,!1,Ju),Se(e,n)}}function p0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ju.set(n),r.uniformMatrix3fv(this.addr,!1,ju),Se(e,n)}}function m0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;$u.set(n),r.uniformMatrix4fv(this.addr,!1,$u),Se(e,n)}}function _0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function g0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),Se(e,t)}}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),Se(e,t)}}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),Se(e,t)}}function M0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function S0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),Se(e,t)}}function y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),Se(e,t)}}function T0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),Se(e,t)}}function E0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Yu.compareFunction=of,s=Yu):s=Tf,e.setTexture2D(t||s,i)}function b0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||bf,i)}function A0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Af,i)}function w0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ef,i)}function C0(r){switch(r){case 5126:return c0;case 35664:return u0;case 35665:return h0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return _0;case 35667:case 35671:return g0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return M0;case 36294:return S0;case 36295:return y0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}function R0(r,t){r.uniform1fv(this.addr,t)}function P0(r,t){const e=ss(t,this.size,2);r.uniform2fv(this.addr,e)}function D0(r,t){const e=ss(t,this.size,3);r.uniform3fv(this.addr,e)}function L0(r,t){const e=ss(t,this.size,4);r.uniform4fv(this.addr,e)}function I0(r,t){const e=ss(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function U0(r,t){const e=ss(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function N0(r,t){const e=ss(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function F0(r,t){r.uniform1iv(this.addr,t)}function O0(r,t){r.uniform2iv(this.addr,t)}function B0(r,t){r.uniform3iv(this.addr,t)}function z0(r,t){r.uniform4iv(this.addr,t)}function k0(r,t){r.uniform1uiv(this.addr,t)}function V0(r,t){r.uniform2uiv(this.addr,t)}function H0(r,t){r.uniform3uiv(this.addr,t)}function G0(r,t){r.uniform4uiv(this.addr,t)}function W0(r,t,e){const n=this.cache,i=t.length,s=eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Tf,s[a])}function X0(r,t,e){const n=this.cache,i=t.length,s=eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||bf,s[a])}function q0(r,t,e){const n=this.cache,i=t.length,s=eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Af,s[a])}function Y0(r,t,e){const n=this.cache,i=t.length,s=eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ef,s[a])}function Z0(r){switch(r){case 5126:return R0;case 35664:return P0;case 35665:return D0;case 35666:return L0;case 35674:return I0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return V0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}class K0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Qu(r,t){r.seq.push(t),r.map[t.id]=t}function J0(r,t,e){const n=r.name,i=n.length;for(Go.lastIndex=0;;){const s=Go.exec(n),a=Go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qu(e,c===void 0?new K0(o,r,t):new $0(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new j0(o),Qu(e,h)),e=h}}}class Ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);J0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function th(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Q0=37297;let tv=0;function ev(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function nv(r){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(r);let n;switch(t===e?n="":t===Na&&e===Ua?n="LinearDisplayP3ToLinearSRGB":t===Ua&&e===Na&&(n="LinearSRGBToLinearDisplayP3"),r){case Ci:case Qa:return[n,"LinearTransferOETF"];case ze:case Dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function eh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ev(r.getShaderSource(t),a)}else return i}function iv(r,t){const e=nv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rv(r,t){let e;switch(t){case Wh:e="Linear";break;case Xh:e="Reinhard";break;case qh:e="Cineon";break;case Ec:e="ACESFilmic";break;case Yh:e="AgX";break;case Zh:e="Neutral";break;case Ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const da=new H;function sv(){Yt.getLuminanceCoefficients(da);const r=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function ov(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function gs(r){return r!==""}function nh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(r){return r.replace(cv,hv)}const uv=new Map;function hv(r,t){let e=Ft[t];if(e===void 0){const n=uv.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(r){return r.replace(fv,dv)}function dv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function sh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function mv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vr:case Hr:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _v(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hr:t="ENVMAP_MODE_REFRACTION";break}return t}function gv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ep:t="ENVMAP_BLENDING_MIX";break;case bp:t="ENVMAP_BLENDING_ADD";break}return t}function vv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xv(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pv(e),c=mv(e),u=_v(e),h=gv(e),f=vv(e),m=av(e),g=ov(s),_=i.createProgram();let d,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(d=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==gi?rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,iv("linearToOutputTexel",e.outputColorSpace),sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=ql(a),a=nh(a,e),a=ih(a,e),o=ql(o),o=nh(o,e),o=ih(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+d+a,C=E+p+o,I=th(i,i.VERTEX_SHADER,M),L=th(i,i.FRAGMENT_SHADER,C);i.attachShader(_,I),i.attachShader(_,L),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(b){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(I).trim(),S=i.getShaderInfoLog(L).trim();let D=!0,w=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,I,L);else{const N=eh(i,I,"vertex"),U=eh(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+N+`
`+U)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(T===""||S==="")&&(w=!1);w&&(b.diagnostics={runnable:D,programLog:W,vertexShader:{log:T,prefix:d},fragmentShader:{log:S,prefix:p}})}i.deleteShader(I),i.deleteShader(L),F=new Ra(i,_),V=lv(i,_)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let V;this.getAttributes=function(){return V===void 0&&R(this),V};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Q0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=L,this}let Mv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yv(t),e.set(t,n)),n}}class yv{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}}function Tv(r,t,e,n,i,s,a){const o=new ff,l=new Sv,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,W,T,S){const D=T.fog,w=S.geometry,N=v.isMeshStandardMaterial?T.environment:null,U=(v.isMeshStandardMaterial?e:t).get(v.envMap||N),K=U&&U.mapping===Ja?U.image.height:null,J=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const j=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,et=j!==void 0?j.length:0;let at=0;w.morphAttributes.position!==void 0&&(at=1),w.morphAttributes.normal!==void 0&&(at=2),w.morphAttributes.color!==void 0&&(at=3);let q,Z,ct,ot;if(J){const Oe=Pn[J];q=Oe.vertexShader,Z=Oe.fragmentShader}else q=v.vertexShader,Z=v.fragmentShader,l.update(v),ct=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);const vt=r.getRenderTarget(),Mt=S.isInstancedMesh===!0,bt=S.isBatchedMesh===!0,It=!!v.map,At=!!v.matcap,O=!!U,Ke=!!v.aoMap,Vt=!!v.lightMap,Wt=!!v.bumpMap,Rt=!!v.normalMap,re=!!v.displacementMap,Ut=!!v.emissiveMap,P=!!v.metalnessMap,y=!!v.roughnessMap,G=v.anisotropy>0,tt=v.clearcoat>0,it=v.dispersion>0,Q=v.iridescence>0,yt=v.sheen>0,ut=v.transmission>0,mt=G&&!!v.anisotropyMap,Xt=tt&&!!v.clearcoatMap,rt=tt&&!!v.clearcoatNormalMap,_t=tt&&!!v.clearcoatRoughnessMap,Pt=Q&&!!v.iridescenceMap,Dt=Q&&!!v.iridescenceThicknessMap,gt=yt&&!!v.sheenColorMap,Ht=yt&&!!v.sheenRoughnessMap,Nt=!!v.specularMap,ne=!!v.specularColorMap,B=!!v.specularIntensityMap,dt=ut&&!!v.transmissionMap,$=ut&&!!v.thicknessMap,nt=!!v.gradientMap,ht=!!v.alphaMap,pt=v.alphaTest>0,Gt=!!v.alphaHash,ge=!!v.extensions;let Fe=gi;v.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const qt={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Z,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:bt,batchingColor:bt&&S._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&S.instanceColor!==null,instancingMorph:Mt&&S.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ci,alphaToCoverage:!!v.alphaToCoverage,map:It,matcap:At,envMap:O,envMapMode:O&&U.mapping,envMapCubeUVHeight:K,aoMap:Ke,lightMap:Vt,bumpMap:Wt,normalMap:Rt,displacementMap:m&&re,emissiveMap:Ut,normalMapObjectSpace:Rt&&v.normalMapType===Dp,normalMapTangentSpace:Rt&&v.normalMapType===Pp,metalnessMap:P,roughnessMap:y,anisotropy:G,anisotropyMap:mt,clearcoat:tt,clearcoatMap:Xt,clearcoatNormalMap:rt,clearcoatRoughnessMap:_t,dispersion:it,iridescence:Q,iridescenceMap:Pt,iridescenceThicknessMap:Dt,sheen:yt,sheenColorMap:gt,sheenRoughnessMap:Ht,specularMap:Nt,specularColorMap:ne,specularIntensityMap:B,transmission:ut,transmissionMap:dt,thicknessMap:$,gradientMap:nt,opaque:v.transparent===!1&&v.blending===_i&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:pt,alphaHash:Gt,combine:v.combine,mapUv:It&&d(v.map.channel),aoMapUv:Ke&&d(v.aoMap.channel),lightMapUv:Vt&&d(v.lightMap.channel),bumpMapUv:Wt&&d(v.bumpMap.channel),normalMapUv:Rt&&d(v.normalMap.channel),displacementMapUv:re&&d(v.displacementMap.channel),emissiveMapUv:Ut&&d(v.emissiveMap.channel),metalnessMapUv:P&&d(v.metalnessMap.channel),roughnessMapUv:y&&d(v.roughnessMap.channel),anisotropyMapUv:mt&&d(v.anisotropyMap.channel),clearcoatMapUv:Xt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&d(v.sheenRoughnessMap.channel),specularMapUv:Nt&&d(v.specularMap.channel),specularColorMapUv:ne&&d(v.specularColorMap.channel),specularIntensityMapUv:B&&d(v.specularIntensityMap.channel),transmissionMapUv:dt&&d(v.transmissionMap.channel),thicknessMapUv:$&&d(v.thicknessMap.channel),alphaMapUv:ht&&d(v.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Rt||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!w.attributes.uv&&(It||ht),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:S.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:at,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:It&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yn,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function E(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)b.push(W),b.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(M(b,v),C(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function C(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){const b=_[v.type];let W;if(b){const T=Pn[b];W=Yr.clone(T.uniforms)}else W=v.uniforms;return W}function L(v,b){let W;for(let T=0,S=u.length;T<S;T++){const D=u[T];if(D.cacheKey===b){W=D,++W.usedTimes;break}}return W===void 0&&(W=new xv(r,b,v,s),u.push(W)),W}function R(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function F(v){l.remove(v)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:I,acquireProgram:L,releaseProgram:R,releaseShaderCache:F,programs:u,dispose:V}}function Ev(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function bv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ah(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function oh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,_,d){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),t++,p}function o(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||bv),n.length>1&&n.sort(f||ah),i.length>1&&i.sort(f||ah)}function u(){for(let h=t,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Av(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new oh,r.set(n,[a])):i>=s.length?(a=new oh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function wv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Bt};break;case"SpotLight":e={position:new H,direction:new H,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function Cv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Rv=0;function Pv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Dv(r){const t=new wv,e=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new de,a=new de;function o(c){let u=0,h=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,E=0,M=0,C=0,I=0,L=0,R=0;c.sort(Pv);for(let V=0,v=c.length;V<v;V++){const b=c[V],W=b.color,T=b.intensity,S=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=W.r*T,h+=W.g*T,f+=W.b*T;else if(b.isLightProbe){for(let w=0;w<9;w++)n.probe[w].addScaledVector(b.sh.coefficients[w],T);R++}else if(b.isDirectionalLight){const w=t.get(b);if(w.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const N=b.shadow,U=e.get(b);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=D,n.directionalShadowMatrix[m]=b.shadow.matrix,E++}n.directional[m]=w,m++}else if(b.isSpotLight){const w=t.get(b);w.position.setFromMatrixPosition(b.matrixWorld),w.color.copy(W).multiplyScalar(T),w.distance=S,w.coneCos=Math.cos(b.angle),w.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),w.decay=b.decay,n.spot[_]=w;const N=b.shadow;if(b.map&&(n.spotLightMap[I]=b.map,I++,N.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[_]=N.matrix,b.castShadow){const U=e.get(b);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=D,C++}_++}else if(b.isRectAreaLight){const w=t.get(b);w.color.copy(W).multiplyScalar(T),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),n.rectArea[d]=w,d++}else if(b.isPointLight){const w=t.get(b);if(w.color.copy(b.color).multiplyScalar(b.intensity),w.distance=b.distance,w.decay=b.decay,b.castShadow){const N=b.shadow,U=e.get(b);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=b.shadow.matrix,M++}n.point[g]=w,g++}else if(b.isHemisphereLight){const w=t.get(b);w.skyColor.copy(b.color).multiplyScalar(T),w.groundColor.copy(b.groundColor).multiplyScalar(T),n.hemi[p]=w,p++}}d>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==d||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==M||F.numSpotShadows!==C||F.numSpotMaps!==I||F.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=d,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=M,F.numSpotShadows=C,F.numSpotMaps=I,F.numLightProbes=R,n.version=Rv++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const d=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(d),h++}else if(M.isSpotLight){const C=n.spot[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const C=n.rectArea[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const C=n.hemi[_];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function lh(r){const t=new Dv(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Lv(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new lh(r),t.set(i,[o])):s>=a.length?(o=new lh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Iv extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uv extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ov(r,t,e){let n=new xf;const i=new Lt,s=new Lt,a=new _e,o=new Iv({depthPacking:Rp}),l=new Uv,c={},u=e.maxTextureSize,h={[yi]:Ge,[Ge]:yi,[Yn]:Yn},f=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Nv,fragmentShader:Fv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(L,R,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||L.length===0)return;const V=r.getRenderTarget(),v=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),W=r.state;W.setBlending($n),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const T=p!==Wn&&this.type===Wn,S=p===Wn&&this.type!==Wn;for(let D=0,w=L.length;D<w;D++){const N=L[D],U=N.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const K=U.getFrameExtents();if(i.multiply(K),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null||T===!0||S===!0){const j=this.type!==Wn?{minFilter:He,magFilter:He}:{};U.map!==null&&U.map.dispose(),U.map=new sn(i.x,i.y,j),U.map.texture.name=N.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const J=U.getViewportCount();for(let j=0;j<J;j++){const et=U.getViewport(j);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),W.viewport(a),U.updateMatrices(N,j),n=U.getFrustum(),C(R,F,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===Wn&&E(U,F),U.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(V,v,b)};function E(L,R){const F=t.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new sn(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(R,null,F,f,_,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(R,null,F,m,_,null)}function M(L,R,F,V){let v=null;const b=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)v=b;else if(v=F.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=v.uuid,T=R.uuid;let S=c[W];S===void 0&&(S={},c[W]=S);let D=S[T];D===void 0&&(D=v.clone(),S[T]=D,R.addEventListener("dispose",I)),v=D}if(v.visible=R.visible,v.wireframe=R.wireframe,V===Wn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=r.properties.get(v);W.light=F}return v}function C(L,R,F,V,v){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===Wn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const T=t.update(L),S=L.material;if(Array.isArray(S)){const D=T.groups;for(let w=0,N=D.length;w<N;w++){const U=D[w],K=S[U.materialIndex];if(K&&K.visible){const J=M(L,K,V,v);L.onBeforeShadow(r,L,R,F,T,J,U),r.renderBufferDirect(F,null,T,J,L,U),L.onAfterShadow(r,L,R,F,T,J,U)}}}else if(S.visible){const D=M(L,S,V,v);L.onBeforeShadow(r,L,R,F,T,D,null),r.renderBufferDirect(F,null,T,D,L,null),L.onAfterShadow(r,L,R,F,T,D,null)}}const W=L.children;for(let T=0,S=W.length;T<S;T++)C(W[T],R,F,V,v)}function I(L){L.target.removeEventListener("dispose",I);for(const F in c){const V=c[F],v=L.target.uuid;v in V&&(V[v].dispose(),delete V[v])}}}const Bv={[ol]:ll,[cl]:fl,[ul]:dl,[kr]:hl,[ll]:ol,[fl]:cl,[dl]:ul,[hl]:kr};function zv(r){function t(){let B=!1;const dt=new _e;let $=null;const nt=new _e(0,0,0,0);return{setMask:function(ht){$!==ht&&!B&&(r.colorMask(ht,ht,ht,ht),$=ht)},setLocked:function(ht){B=ht},setClear:function(ht,pt,Gt,ge,Fe){Fe===!0&&(ht*=ge,pt*=ge,Gt*=ge),dt.set(ht,pt,Gt,ge),nt.equals(dt)===!1&&(r.clearColor(ht,pt,Gt,ge),nt.copy(dt))},reset:function(){B=!1,$=null,nt.set(-1,0,0,0)}}}function e(){let B=!1,dt=!1,$=null,nt=null,ht=null;return{setReversed:function(pt){dt=pt},setTest:function(pt){pt?ct(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(pt){$!==pt&&!B&&(r.depthMask(pt),$=pt)},setFunc:function(pt){if(dt&&(pt=Bv[pt]),nt!==pt){switch(pt){case ol:r.depthFunc(r.NEVER);break;case ll:r.depthFunc(r.ALWAYS);break;case cl:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case ul:r.depthFunc(r.EQUAL);break;case hl:r.depthFunc(r.GEQUAL);break;case fl:r.depthFunc(r.GREATER);break;case dl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=pt}},setLocked:function(pt){B=pt},setClear:function(pt){ht!==pt&&(r.clearDepth(pt),ht=pt)},reset:function(){B=!1,$=null,nt=null,ht=null}}}function n(){let B=!1,dt=null,$=null,nt=null,ht=null,pt=null,Gt=null,ge=null,Fe=null;return{setTest:function(qt){B||(qt?ct(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(qt){dt!==qt&&!B&&(r.stencilMask(qt),dt=qt)},setFunc:function(qt,Oe,Bn){($!==qt||nt!==Oe||ht!==Bn)&&(r.stencilFunc(qt,Oe,Bn),$=qt,nt=Oe,ht=Bn)},setOp:function(qt,Oe,Bn){(pt!==qt||Gt!==Oe||ge!==Bn)&&(r.stencilOp(qt,Oe,Bn),pt=qt,Gt=Oe,ge=Bn)},setLocked:function(qt){B=qt},setClear:function(qt){Fe!==qt&&(r.clearStencil(qt),Fe=qt)},reset:function(){B=!1,dt=null,$=null,nt=null,ht=null,pt=null,Gt=null,ge=null,Fe=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,E=null,M=null,C=null,I=null,L=new Bt(0,0,0),R=0,F=!1,V=null,v=null,b=null,W=null,T=null;const S=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,w=0;const N=r.getParameter(r.VERSION);N.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(N)[1]),D=w>=1):N.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),D=w>=2);let U=null,K={};const J=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),et=new _e().fromArray(J),at=new _e().fromArray(j);function q(B,dt,$,nt){const ht=new Uint8Array(4),pt=r.createTexture();r.bindTexture(B,pt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<$;Gt++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,nt,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(dt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return pt}const Z={};Z[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ct(r.DEPTH_TEST),s.setFunc(kr),Vt(!1),Wt(vu),ct(r.CULL_FACE),O($n);function ct(B){c[B]!==!0&&(r.enable(B),c[B]=!0)}function ot(B){c[B]!==!1&&(r.disable(B),c[B]=!1)}function vt(B,dt){return u[B]!==dt?(r.bindFramebuffer(B,dt),u[B]=dt,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function Mt(B,dt){let $=f,nt=!1;if(B){$=h.get(dt),$===void 0&&($=[],h.set(dt,$));const ht=B.textures;if($.length!==ht.length||$[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Gt=ht.length;pt<Gt;pt++)$[pt]=r.COLOR_ATTACHMENT0+pt;$.length=ht.length,nt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,nt=!0);nt&&r.drawBuffers($)}function bt(B){return m!==B?(r.useProgram(B),m=B,!0):!1}const It={[Xi]:r.FUNC_ADD,[op]:r.FUNC_SUBTRACT,[lp]:r.FUNC_REVERSE_SUBTRACT};It[cp]=r.MIN,It[up]=r.MAX;const At={[hp]:r.ZERO,[fp]:r.ONE,[dp]:r.SRC_COLOR,[sl]:r.SRC_ALPHA,[xp]:r.SRC_ALPHA_SATURATE,[gp]:r.DST_COLOR,[mp]:r.DST_ALPHA,[pp]:r.ONE_MINUS_SRC_COLOR,[al]:r.ONE_MINUS_SRC_ALPHA,[vp]:r.ONE_MINUS_DST_COLOR,[_p]:r.ONE_MINUS_DST_ALPHA,[Mp]:r.CONSTANT_COLOR,[Sp]:r.ONE_MINUS_CONSTANT_COLOR,[yp]:r.CONSTANT_ALPHA,[Tp]:r.ONE_MINUS_CONSTANT_ALPHA};function O(B,dt,$,nt,ht,pt,Gt,ge,Fe,qt){if(B===$n){g===!0&&(ot(r.BLEND),g=!1);return}if(g===!1&&(ct(r.BLEND),g=!0),B!==ap){if(B!==_||qt!==F){if((d!==Xi||M!==Xi)&&(r.blendEquation(r.FUNC_ADD),d=Xi,M=Xi),qt)switch(B){case _i:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Es:r.blendFunc(r.ONE,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case _i:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Es:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,E=null,C=null,I=null,L.set(0,0,0),R=0,_=B,F=qt}return}ht=ht||dt,pt=pt||$,Gt=Gt||nt,(dt!==d||ht!==M)&&(r.blendEquationSeparate(It[dt],It[ht]),d=dt,M=ht),($!==p||nt!==E||pt!==C||Gt!==I)&&(r.blendFuncSeparate(At[$],At[nt],At[pt],At[Gt]),p=$,E=nt,C=pt,I=Gt),(ge.equals(L)===!1||Fe!==R)&&(r.blendColor(ge.r,ge.g,ge.b,Fe),L.copy(ge),R=Fe),_=B,F=!1}function Ke(B,dt){B.side===Yn?ot(r.CULL_FACE):ct(r.CULL_FACE);let $=B.side===Ge;dt&&($=!$),Vt($),B.blending===_i&&B.transparent===!1?O($n):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),i.setMask(B.colorWrite);const nt=B.stencilWrite;a.setTest(nt),nt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(B){V!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),V=B)}function Wt(B){B!==ip?(ct(r.CULL_FACE),B!==v&&(B===vu?r.cullFace(r.BACK):B===rp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),v=B}function Rt(B){B!==b&&(D&&r.lineWidth(B),b=B)}function re(B,dt,$){B?(ct(r.POLYGON_OFFSET_FILL),(W!==dt||T!==$)&&(r.polygonOffset(dt,$),W=dt,T=$)):ot(r.POLYGON_OFFSET_FILL)}function Ut(B){B?ct(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function P(B){B===void 0&&(B=r.TEXTURE0+S-1),U!==B&&(r.activeTexture(B),U=B)}function y(B,dt,$){$===void 0&&(U===null?$=r.TEXTURE0+S-1:$=U);let nt=K[$];nt===void 0&&(nt={type:void 0,texture:void 0},K[$]=nt),(nt.type!==B||nt.texture!==dt)&&(U!==$&&(r.activeTexture($),U=$),r.bindTexture(B,dt||Z[B]),nt.type=B,nt.texture=dt)}function G(){const B=K[U];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function tt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(B){et.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),et.copy(B))}function gt(B){at.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),at.copy(B))}function Ht(B,dt){let $=l.get(dt);$===void 0&&($=new WeakMap,l.set(dt,$));let nt=$.get(B);nt===void 0&&(nt=r.getUniformBlockIndex(dt,B.name),$.set(B,nt))}function Nt(B,dt){const nt=l.get(dt).get(B);o.get(dt)!==nt&&(r.uniformBlockBinding(dt,nt,B.__bindingPointIndex),o.set(dt,nt))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},U=null,K={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,E=null,M=null,C=null,I=null,L=new Bt(0,0,0),R=0,F=!1,V=null,v=null,b=null,W=null,T=null,et.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ct,disable:ot,bindFramebuffer:vt,drawBuffers:Mt,useProgram:bt,setBlending:O,setMaterial:Ke,setFlipSided:Vt,setCullFace:Wt,setLineWidth:Rt,setPolygonOffset:re,setScissorTest:Ut,activeTexture:P,bindTexture:y,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:rt,texSubImage2D:Q,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Dt,viewport:gt,reset:ne}}function ch(r,t,e,n){const i=kv(n);switch(e){case Qh:return r*t;case ef:return r*t;case nf:return r*t*2;case rf:return r*t/i.components*i.byteLength;case Cc:return r*t/i.components*i.byteLength;case sf:return r*t*2/i.components*i.byteLength;case Rc:return r*t*2/i.components*i.byteLength;case tf:return r*t*3/i.components*i.byteLength;case bn:return r*t*4/i.components*i.byteLength;case Pc:return r*t*4/i.components*i.byteLength;case Ta:case Ea:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ba:case Aa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xl:case Sl:return Math.max(r,16)*Math.max(t,8)/4;case vl:case Ml:return Math.max(r,8)*Math.max(t,8)/2;case yl:case Tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wa:case zl:case kl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case af:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Hl:case Gl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kv(r){switch(r){case Qn:case $h:return{byteLength:1,components:1};case bs:case jh:case wn:return{byteLength:2,components:1};case Ac:case wc:return{byteLength:2,components:4};case nr:case bc:case Zn:return{byteLength:4,components:1};case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Vv(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,y){return m?new OffscreenCanvas(P,y):As("canvas")}function _(P,y,G){let tt=1;const it=Ut(P);if((it.width>G||it.height>G)&&(tt=G/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(tt*it.width),yt=Math.floor(tt*it.height);h===void 0&&(h=g(Q,yt));const ut=y?g(Q,yt):h;return ut.width=Q,ut.height=yt,ut.getContext("2d").drawImage(P,0,0,Q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+yt+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==He&&P.minFilter!==En}function p(P){r.generateMipmap(P)}function E(P,y,G,tt,it=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=y;if(y===r.RED&&(G===r.FLOAT&&(Q=r.R32F),G===r.HALF_FLOAT&&(Q=r.R16F),G===r.UNSIGNED_BYTE&&(Q=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.R8UI),G===r.UNSIGNED_SHORT&&(Q=r.R16UI),G===r.UNSIGNED_INT&&(Q=r.R32UI),G===r.BYTE&&(Q=r.R8I),G===r.SHORT&&(Q=r.R16I),G===r.INT&&(Q=r.R32I)),y===r.RG&&(G===r.FLOAT&&(Q=r.RG32F),G===r.HALF_FLOAT&&(Q=r.RG16F),G===r.UNSIGNED_BYTE&&(Q=r.RG8)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RG8UI),G===r.UNSIGNED_SHORT&&(Q=r.RG16UI),G===r.UNSIGNED_INT&&(Q=r.RG32UI),G===r.BYTE&&(Q=r.RG8I),G===r.SHORT&&(Q=r.RG16I),G===r.INT&&(Q=r.RG32I)),y===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),G===r.UNSIGNED_INT&&(Q=r.RGB32UI),G===r.BYTE&&(Q=r.RGB8I),G===r.SHORT&&(Q=r.RGB16I),G===r.INT&&(Q=r.RGB32I)),y===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),G===r.UNSIGNED_INT&&(Q=r.RGBA32UI),G===r.BYTE&&(Q=r.RGBA8I),G===r.SHORT&&(Q=r.RGBA16I),G===r.INT&&(Q=r.RGBA32I)),y===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),y===r.RGBA){const yt=it?Ia:Yt.getTransfer(tt);G===r.FLOAT&&(Q=r.RGBA32F),G===r.HALF_FLOAT&&(Q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Q=yt===ie?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(P,y){let G;return P?y===null||y===nr||y===Gr?G=r.DEPTH24_STENCIL8:y===Zn?G=r.DEPTH32F_STENCIL8:y===bs&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===nr||y===Gr?G=r.DEPTH_COMPONENT24:y===Zn?G=r.DEPTH_COMPONENT32F:y===bs&&(G=r.DEPTH_COMPONENT16),G}function C(P,y){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==He&&P.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function I(P){const y=P.target;y.removeEventListener("dispose",I),R(y),y.isVideoTexture&&u.delete(y)}function L(P){const y=P.target;y.removeEventListener("dispose",L),V(y)}function R(P){const y=n.get(P);if(y.__webglInit===void 0)return;const G=P.source,tt=f.get(G);if(tt){const it=tt[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(P),Object.keys(tt).length===0&&f.delete(G)}n.remove(P)}function F(P){const y=n.get(P);r.deleteTexture(y.__webglTexture);const G=P.source,tt=f.get(G);delete tt[y.__cacheKey],a.memory.textures--}function V(P){const y=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let it=0;it<y.__webglFramebuffer[tt].length;it++)r.deleteFramebuffer(y.__webglFramebuffer[tt][it]);else r.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)r.deleteFramebuffer(y.__webglFramebuffer[tt]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=P.textures;for(let tt=0,it=G.length;tt<it;tt++){const Q=n.get(G[tt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(G[tt])}n.remove(P)}let v=0;function b(){v=0}function W(){const P=v;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),v+=1,P}function T(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function S(P,y){const G=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(G,P,y);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function D(P,y){const G=n.get(P);if(P.version>0&&G.__version!==P.version){at(G,P,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function w(P,y){const G=n.get(P);if(P.version>0&&G.__version!==P.version){at(G,P,y);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function N(P,y){const G=n.get(P);if(P.version>0&&G.__version!==P.version){q(G,P,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const U={[_l]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[gl]:r.MIRRORED_REPEAT},K={[He]:r.NEAREST,[wp]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[po]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},J={[Lp]:r.NEVER,[Bp]:r.ALWAYS,[Ip]:r.LESS,[of]:r.LEQUAL,[Up]:r.EQUAL,[Op]:r.GEQUAL,[Np]:r.GREATER,[Fp]:r.NOTEQUAL};function j(P,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===po||y.magFilter===Ys||y.magFilter===Zi||y.minFilter===En||y.minFilter===po||y.minFilter===Ys||y.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,U[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,U[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,U[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,K[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,J[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===He||y.minFilter!==Ys&&y.minFilter!==Zi||y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function et(P,y){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",I));const tt=y.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const Q=T(y);if(Q!==P.__cacheKey){it[Q]===void 0&&(it[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[Q].usedTimes++;const yt=it[P.__cacheKey];yt!==void 0&&(it[P.__cacheKey].usedTimes--,yt.usedTimes===0&&F(y)),P.__cacheKey=Q,P.__webglTexture=it[Q].texture}return G}function at(P,y,G){let tt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=r.TEXTURE_3D);const it=et(P,y),Q=y.source;e.bindTexture(tt,P.__webglTexture,r.TEXTURE0+G);const yt=n.get(Q);if(Q.version!==yt.__version||it===!0){e.activeTexture(r.TEXTURE0+G);const ut=Yt.getPrimaries(Yt.workingColorSpace),mt=y.colorSpace===hi?null:Yt.getPrimaries(y.colorSpace),Xt=y.colorSpace===hi||ut===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let rt=_(y.image,!1,i.maxTextureSize);rt=re(y,rt);const _t=s.convert(y.format,y.colorSpace),Pt=s.convert(y.type);let Dt=E(y.internalFormat,_t,Pt,y.colorSpace,y.isVideoTexture);j(tt,y);let gt;const Ht=y.mipmaps,Nt=y.isVideoTexture!==!0,ne=yt.__version===void 0||it===!0,B=Q.dataReady,dt=C(y,rt);if(y.isDepthTexture)Dt=M(y.format===Wr,y.type),ne&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Dt,rt.width,rt.height,0,_t,Pt,null));else if(y.isDataTexture)if(Ht.length>0){Nt&&ne&&e.texStorage2D(r.TEXTURE_2D,dt,Dt,Ht[0].width,Ht[0].height);for(let $=0,nt=Ht.length;$<nt;$++)gt=Ht[$],Nt?B&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,_t,Pt,gt.data):e.texImage2D(r.TEXTURE_2D,$,Dt,gt.width,gt.height,0,_t,Pt,gt.data);y.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(r.TEXTURE_2D,dt,Dt,rt.width,rt.height),B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Pt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,rt.width,rt.height,0,_t,Pt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Dt,Ht[0].width,Ht[0].height,rt.depth);for(let $=0,nt=Ht.length;$<nt;$++)if(gt=Ht[$],y.format!==bn)if(_t!==null)if(Nt){if(B)if(y.layerUpdates.size>0){const ht=ch(gt.width,gt.height,y.format,y.type);for(const pt of y.layerUpdates){const Gt=gt.data.subarray(pt*ht/gt.data.BYTES_PER_ELEMENT,(pt+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,pt,gt.width,gt.height,1,_t,Gt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,rt.depth,_t,gt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Dt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,rt.depth,_t,Pt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Dt,gt.width,gt.height,rt.depth,0,_t,Pt,gt.data)}else{Nt&&ne&&e.texStorage2D(r.TEXTURE_2D,dt,Dt,Ht[0].width,Ht[0].height);for(let $=0,nt=Ht.length;$<nt;$++)gt=Ht[$],y.format!==bn?_t!==null?Nt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?B&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,_t,Pt,gt.data):e.texImage2D(r.TEXTURE_2D,$,Dt,gt.width,gt.height,0,_t,Pt,gt.data)}else if(y.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Dt,rt.width,rt.height,rt.depth),B)if(y.layerUpdates.size>0){const $=ch(rt.width,rt.height,y.format,y.type);for(const nt of y.layerUpdates){const ht=rt.data.subarray(nt*$/rt.data.BYTES_PER_ELEMENT,(nt+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,_t,Pt,ht)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Pt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,_t,Pt,rt.data);else if(y.isData3DTexture)Nt?(ne&&e.texStorage3D(r.TEXTURE_3D,dt,Dt,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Pt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,_t,Pt,rt.data);else if(y.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(r.TEXTURE_2D,dt,Dt,rt.width,rt.height);else{let $=rt.width,nt=rt.height;for(let ht=0;ht<dt;ht++)e.texImage2D(r.TEXTURE_2D,ht,Dt,$,nt,0,_t,Pt,null),$>>=1,nt>>=1}}else if(Ht.length>0){if(Nt&&ne){const $=Ut(Ht[0]);e.texStorage2D(r.TEXTURE_2D,dt,Dt,$.width,$.height)}for(let $=0,nt=Ht.length;$<nt;$++)gt=Ht[$],Nt?B&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,_t,Pt,gt):e.texImage2D(r.TEXTURE_2D,$,Dt,_t,Pt,gt);y.generateMipmaps=!1}else if(Nt){if(ne){const $=Ut(rt);e.texStorage2D(r.TEXTURE_2D,dt,Dt,$.width,$.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Pt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Dt,_t,Pt,rt);d(y)&&p(tt),yt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function q(P,y,G){if(y.image.length!==6)return;const tt=et(P,y),it=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const Q=n.get(it);if(it.version!==Q.__version||tt===!0){e.activeTexture(r.TEXTURE0+G);const yt=Yt.getPrimaries(Yt.workingColorSpace),ut=y.colorSpace===hi?null:Yt.getPrimaries(y.colorSpace),mt=y.colorSpace===hi||yt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let nt=0;nt<6;nt++)!Xt&&!rt?_t[nt]=_(y.image[nt],!0,i.maxCubemapSize):_t[nt]=rt?y.image[nt].image:y.image[nt],_t[nt]=re(y,_t[nt]);const Pt=_t[0],Dt=s.convert(y.format,y.colorSpace),gt=s.convert(y.type),Ht=E(y.internalFormat,Dt,gt,y.colorSpace),Nt=y.isVideoTexture!==!0,ne=Q.__version===void 0||tt===!0,B=it.dataReady;let dt=C(y,Pt);j(r.TEXTURE_CUBE_MAP,y);let $;if(Xt){Nt&&ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Ht,Pt.width,Pt.height);for(let nt=0;nt<6;nt++){$=_t[nt].mipmaps;for(let ht=0;ht<$.length;ht++){const pt=$[ht];y.format!==bn?Dt!==null?Nt?B&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht,Ht,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht,0,0,pt.width,pt.height,Dt,gt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht,Ht,pt.width,pt.height,0,Dt,gt,pt.data)}}}else{if($=y.mipmaps,Nt&&ne){$.length>0&&dt++;const nt=Ut(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Ht,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Nt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t[nt].width,_t[nt].height,Dt,gt,_t[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,_t[nt].width,_t[nt].height,0,Dt,gt,_t[nt].data);for(let ht=0;ht<$.length;ht++){const Gt=$[ht].image[nt].image;Nt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht+1,0,0,Gt.width,Gt.height,Dt,gt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht+1,Ht,Gt.width,Gt.height,0,Dt,gt,Gt.data)}}else{Nt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Dt,gt,_t[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,Dt,gt,_t[nt]);for(let ht=0;ht<$.length;ht++){const pt=$[ht];Nt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht+1,0,0,Dt,gt,pt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht+1,Ht,Dt,gt,pt.image[nt])}}}d(y)&&p(r.TEXTURE_CUBE_MAP),Q.__version=it.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Z(P,y,G,tt,it,Q){const yt=s.convert(G.format,G.colorSpace),ut=s.convert(G.type),mt=E(G.internalFormat,yt,ut,G.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>Q),_t=Math.max(1,y.height>>Q);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,mt,rt,_t,y.depth,0,yt,ut,null):e.texImage2D(it,Q,mt,rt,_t,0,yt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Wt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,it,n.get(G).__webglTexture,0,Vt(y)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,it,n.get(G).__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(P,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){const tt=y.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Q=M(y.stencilBuffer,it),yt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=Vt(y);Wt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,Q,y.width,y.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Q,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Q,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,P)}else{const tt=y.textures;for(let it=0;it<tt.length;it++){const Q=tt[it],yt=s.convert(Q.format,Q.colorSpace),ut=s.convert(Q.type),mt=E(Q.internalFormat,yt,ut,Q.colorSpace),Xt=Vt(y);G&&Wt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,mt,y.width,y.height):Wt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,mt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,mt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),S(y.depthTexture,0);const tt=n.get(y.depthTexture).__webglTexture,it=Vt(y);if(y.depthTexture.format===Ir)Wt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Wr)Wt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function vt(P){const y=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=tt}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ot(y.__webglFramebuffer,P)}else if(G){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=r.createRenderbuffer(),ct(y.__webglDepthbuffer[tt],P,!1);else{const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ct(y.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,it)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(P,y,G){const tt=n.get(P);y!==void 0&&Z(tt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&vt(P)}function bt(P){const y=P.texture,G=n.get(P),tt=n.get(y);P.addEventListener("dispose",L);const it=P.textures,Q=P.isWebGLCubeRenderTarget===!0,yt=it.length>1;if(yt||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=y.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let mt=0;mt<y.mipmaps.length;mt++)G.__webglFramebuffer[ut][mt]=r.createFramebuffer()}else G.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)G.__webglFramebuffer[ut]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(yt)for(let ut=0,mt=it.length;ut<mt;ut++){const Xt=n.get(it[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Wt(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const mt=it[ut];G.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const Xt=s.convert(mt.format,mt.colorSpace),rt=s.convert(mt.type),_t=E(mt.internalFormat,Xt,rt,mt.colorSpace,P.isXRRenderTarget===!0),Pt=Vt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,_t,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),j(r.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)Z(G.__webglFramebuffer[ut][mt],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else Z(G.__webglFramebuffer[ut],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);d(y)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ut=0,mt=it.length;ut<mt;ut++){const Xt=it[ut],rt=n.get(Xt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),j(r.TEXTURE_2D,Xt),Z(G.__webglFramebuffer,P,Xt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),d(Xt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),j(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)Z(G.__webglFramebuffer[mt],P,y,r.COLOR_ATTACHMENT0,ut,mt);else Z(G.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,ut,0);d(y)&&p(ut),e.unbindTexture()}P.depthBuffer&&vt(P)}function It(P){const y=P.textures;for(let G=0,tt=y.length;G<tt;G++){const it=y[G];if(d(it)){const Q=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,yt=n.get(it).__webglTexture;e.bindTexture(Q,yt),p(Q),e.unbindTexture()}}}const At=[],O=[];function Ke(P){if(P.samples>0){if(Wt(P)===!1){const y=P.textures,G=P.width,tt=P.height;let it=r.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(P),ut=y.length>1;if(ut)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Xt=n.get(y[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,G,tt,0,0,G,tt,it,r.NEAREST),l===!0&&(At.length=0,O.length=0,At.push(r.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(At.push(Q),O.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Xt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Vt(P){return Math.min(i.maxSamples,P.samples)}function Wt(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(P){const y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function re(P,y){const G=P.colorSpace,tt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ci&&G!==hi&&(Yt.getTransfer(G)===ie?(tt!==bn||it!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=b,this.setTexture2D=S,this.setTexture2DArray=D,this.setTexture3D=w,this.setTextureCube=N,this.rebindTextures=Mt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Wt}function Hv(r,t){function e(n,i=hi){let s;const a=Yt.getTransfer(i);if(n===Qn)return r.UNSIGNED_BYTE;if(n===Ac)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return r.BYTE;if(n===jh)return r.SHORT;if(n===bs)return r.UNSIGNED_SHORT;if(n===bc)return r.INT;if(n===nr)return r.UNSIGNED_INT;if(n===Zn)return r.FLOAT;if(n===wn)return r.HALF_FLOAT;if(n===Qh)return r.ALPHA;if(n===tf)return r.RGB;if(n===bn)return r.RGBA;if(n===ef)return r.LUMINANCE;if(n===nf)return r.LUMINANCE_ALPHA;if(n===Ir)return r.DEPTH_COMPONENT;if(n===Wr)return r.DEPTH_STENCIL;if(n===rf)return r.RED;if(n===Cc)return r.RED_INTEGER;if(n===sf)return r.RG;if(n===Rc)return r.RG_INTEGER;if(n===Pc)return r.RGBA_INTEGER;if(n===Ta||n===Ea||n===ba||n===Aa)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===xl||n===Ml||n===Sl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Tl||n===El)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yl||n===Tl)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===El)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===Al||n===wl||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===zl||n===kl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===wa)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===Vl||n===Hl||n===Gl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===wa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Gv extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pr extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wv={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pe({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _n(new Zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zv extends is{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Yv,d=e.getContextAttributes();let p=null,E=null;const M=[],C=[],I=new Lt;let L=null;const R=new dn;R.layers.enable(1),R.viewport=new _e;const F=new dn;F.layers.enable(2),F.viewport=new _e;const V=[R,F],v=new Gv;v.layers.enable(1),v.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=M[q];return Z===void 0&&(Z=new Wo,M[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=M[q];return Z===void 0&&(Z=new Wo,M[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=M[q];return Z===void 0&&(Z=new Wo,M[q]=Z),Z.getHandSpace()};function T(q){const Z=C.indexOf(q.inputSource);if(Z===-1)return;const ct=M[Z];ct!==void 0&&(ct.update(q.inputSource,q.frame,c||a),ct.dispatchEvent({type:q.type,data:q.inputSource}))}function S(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",S),i.removeEventListener("inputsourceschange",D);for(let q=0;q<M.length;q++){const Z=C[q];Z!==null&&(C[q]=null,M[q].disconnect(Z))}b=null,W=null,_.reset(),t.setRenderTarget(p),m=null,f=null,h=null,i=null,E=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",S),i.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const Z={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new sn(m.framebufferWidth,m.framebufferHeight,{format:bn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,ct=null,ot=null;d.depth&&(ot=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=d.stencil?Wr:Ir,ct=d.stencil?Gr:nr);const vt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new sn(f.textureWidth,f.textureHeight,{format:bn,type:Qn,depthTexture:new yf(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(q){for(let Z=0;Z<q.removed.length;Z++){const ct=q.removed[Z],ot=C.indexOf(ct);ot>=0&&(C[ot]=null,M[ot].disconnect(ct))}for(let Z=0;Z<q.added.length;Z++){const ct=q.added[Z];let ot=C.indexOf(ct);if(ot===-1){for(let Mt=0;Mt<M.length;Mt++)if(Mt>=C.length){C.push(ct),ot=Mt;break}else if(C[Mt]===null){C[Mt]=ct,ot=Mt;break}if(ot===-1)break}const vt=M[ot];vt&&vt.connect(ct)}}const w=new H,N=new H;function U(q,Z,ct){w.setFromMatrixPosition(Z.matrixWorld),N.setFromMatrixPosition(ct.matrixWorld);const ot=w.distanceTo(N),vt=Z.projectionMatrix.elements,Mt=ct.projectionMatrix.elements,bt=vt[14]/(vt[10]-1),It=vt[14]/(vt[10]+1),At=(vt[9]+1)/vt[5],O=(vt[9]-1)/vt[5],Ke=(vt[8]-1)/vt[0],Vt=(Mt[8]+1)/Mt[0],Wt=bt*Ke,Rt=bt*Vt,re=ot/(-Ke+Vt),Ut=re*-Ke;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ut),q.translateZ(re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const P=bt+re,y=It+re,G=Wt-Ut,tt=Rt+(ot-Ut),it=At*It/y*P,Q=O*It/y*P;q.projectionMatrix.makePerspective(G,tt,it,Q,P,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,ct=q.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),v.near=F.near=R.near=Z,v.far=F.far=R.far=ct,(b!==v.near||W!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,W=v.far);const ot=q.parent,vt=v.cameras;K(v,ot);for(let Mt=0;Mt<vt.length;Mt++)K(vt[Mt],ot);vt.length===2?U(v,R,F):v.projectionMatrix.copy(R.projectionMatrix),J(q,v,ot)};function J(q,Z,ct){ct===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let j=null;function et(q,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const ct=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ot=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let Mt=0;Mt<ct.length;Mt++){const bt=ct[Mt];let It=null;if(m!==null)It=m.getViewport(bt);else{const O=h.getViewSubImage(f,bt);It=O.viewport,Mt===0&&(t.setRenderTargetTextures(E,O.colorTexture,f.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(E))}let At=V[Mt];At===void 0&&(At=new dn,At.layers.enable(Mt),At.viewport=new _e,V[Mt]=At),At.matrix.fromArray(bt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(bt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(It.x,It.y,It.width,It.height),Mt===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(At)}const vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const Mt=h.getDepthInformation(ct[0]);Mt&&Mt.isValid&&Mt.texture&&_.init(t,Mt,i.renderState)}}for(let ct=0;ct<M.length;ct++){const ot=C[ct],vt=M[ct];ot!==null&&vt!==void 0&&vt.update(ot,Z,c||a)}j&&j(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const at=new Mf;at.setAnimationLoop(et),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}const Fi=new ti,Kv=new de;function $v(r,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,_f(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,E,M,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,C)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,E,M):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const E=t.get(p),M=E.envMap,C=E.envMapRotation;M&&(d.envMap.value=M,Fi.copy(C),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),d.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(Fi)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,E,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*E,d.scale.value=M*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,E){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const E=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jv(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const C=M.program;n.uniformBlockBinding(E,C)}function c(E,M){let C=i[E.id];C===void 0&&(g(E),C=u(E),i[E.id]=C,E.addEventListener("dispose",d));const I=M.program;n.updateUBOMapping(E,I);const L=t.render.frame;s[E.id]!==L&&(f(E),s[E.id]=L)}function u(E){const M=h();E.__bindingPointIndex=M;const C=r.createBuffer(),I=E.__size,L=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,I,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,C),C}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],C=E.uniforms,I=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let L=0,R=C.length;L<R;L++){const F=Array.isArray(C[L])?C[L]:[C[L]];for(let V=0,v=F.length;V<v;V++){const b=F[V];if(m(b,L,V,I)===!0){const W=b.__offset,T=Array.isArray(b.value)?b.value:[b.value];let S=0;for(let D=0;D<T.length;D++){const w=T[D],N=_(w);typeof w=="number"||typeof w=="boolean"?(b.__data[0]=w,r.bufferSubData(r.UNIFORM_BUFFER,W+S,b.__data)):w.isMatrix3?(b.__data[0]=w.elements[0],b.__data[1]=w.elements[1],b.__data[2]=w.elements[2],b.__data[3]=0,b.__data[4]=w.elements[3],b.__data[5]=w.elements[4],b.__data[6]=w.elements[5],b.__data[7]=0,b.__data[8]=w.elements[6],b.__data[9]=w.elements[7],b.__data[10]=w.elements[8],b.__data[11]=0):(w.toArray(b.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,M,C,I){const L=E.value,R=M+"_"+C;if(I[R]===void 0)return typeof L=="number"||typeof L=="boolean"?I[R]=L:I[R]=L.clone(),!0;{const F=I[R];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return I[R]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function g(E){const M=E.uniforms;let C=0;const I=16;for(let R=0,F=M.length;R<F;R++){const V=Array.isArray(M[R])?M[R]:[M[R]];for(let v=0,b=V.length;v<b;v++){const W=V[v],T=Array.isArray(W.value)?W.value:[W.value];for(let S=0,D=T.length;S<D;S++){const w=T[S],N=_(w),U=C%I,K=U%N.boundary,J=U+K;C+=K,J!==0&&I-J<N.storage&&(C+=I-J),W.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=N.storage}}}const L=C%I;return L>0&&(C+=I-L),E.__size=C,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function d(E){const M=E.target;M.removeEventListener("dispose",d);const C=a.indexOf(M.__bindingPointIndex);a.splice(C,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Jv{constructor(t={}){const{canvas:e=kp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=gi,this.toneMappingExposure=1;const M=this;let C=!1,I=0,L=0,R=null,F=-1,V=null;const v=new _e,b=new _e;let W=null;const T=new Bt(0);let S=0,D=e.width,w=e.height,N=1,U=null,K=null;const J=new _e(0,0,D,w),j=new _e(0,0,D,w);let et=!1;const at=new xf;let q=!1,Z=!1;const ct=new de,ot=new de,vt=new H,Mt=new _e,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function At(){return R===null?N:1}let O=n;function Ke(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",pt,!1),O===null){const z="webgl2";if(O=Ke(z,A),O===null)throw Ke(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Vt,Wt,Rt,re,Ut,P,y,G,tt,it,Q,yt,ut,mt,Xt,rt,_t,Pt,Dt,gt,Ht,Nt,ne,B;function dt(){Vt=new i0(O),Vt.init(),Nt=new Hv(O,Vt),Wt=new jg(O,Vt,t,Nt),Rt=new zv(O),Wt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),re=new a0(O),Ut=new Ev,P=new Vv(O,Vt,Rt,Ut,Wt,Nt,re),y=new Qg(M),G=new n0(M),tt=new dm(O),ne=new Kg(O,tt),it=new r0(O,tt,re,ne),Q=new l0(O,it,tt,re),Dt=new o0(O,Wt,P),rt=new Jg(Ut),yt=new Tv(M,y,G,Vt,Wt,ne,rt),ut=new $v(M,Ut),mt=new Av,Xt=new Lv(Vt),Pt=new Zg(M,y,G,Rt,Q,f,l),_t=new Ov(M,Q,Wt),B=new jv(O,re,Wt,Rt),gt=new $g(O,Vt,re),Ht=new s0(O,Vt,re),re.programs=yt.programs,M.capabilities=Wt,M.extensions=Vt,M.properties=Ut,M.renderLists=mt,M.shadowMap=_t,M.state=Rt,M.info=re}dt();const $=new Zv(M,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(D,w,!1))},this.getSize=function(A){return A.set(D,w)},this.setSize=function(A,z,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,w=z,e.width=Math.floor(A*N),e.height=Math.floor(z*N),X===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(D*N,w*N).floor()},this.setDrawingBufferSize=function(A,z,X){D=A,w=z,N=X,e.width=Math.floor(A*X),e.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,z,X,Y){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,X,Y),Rt.viewport(v.copy(J).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,z,X,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,z,X,Y),Rt.scissor(b.copy(j).multiplyScalar(N).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Rt.setScissorTest(et=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(A=!0,z=!0,X=!0){let Y=0;if(A){let k=!1;if(R!==null){const st=R.texture.format;k=st===Pc||st===Rc||st===Cc}if(k){const st=R.texture.type,ft=st===Qn||st===nr||st===bs||st===Gr||st===Ac||st===wc,xt=Pt.getClearColor(),St=Pt.getClearAlpha(),wt=xt.r,Ct=xt.g,Tt=xt.b;ft?(m[0]=wt,m[1]=Ct,m[2]=Tt,m[3]=St,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=wt,g[1]=Ct,g[2]=Tt,g[3]=St,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),mt.dispose(),Xt.dispose(),Ut.dispose(),y.dispose(),G.dispose(),Q.dispose(),ne.dispose(),B.dispose(),yt.dispose(),$.dispose(),$.removeEventListener("sessionstart",uu),$.removeEventListener("sessionend",hu),Pi.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=re.autoReset,z=_t.enabled,X=_t.autoUpdate,Y=_t.needsUpdate,k=_t.type;dt(),re.autoReset=A,_t.enabled=z,_t.autoUpdate=X,_t.needsUpdate=Y,_t.type=k}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){const z=A.target;z.removeEventListener("dispose",Gt),ge(z)}function ge(A){Fe(A),Ut.remove(A)}function Fe(A){const z=Ut.get(A).programs;z!==void 0&&(z.forEach(function(X){yt.releaseProgram(X)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,Y,k,st){z===null&&(z=bt);const ft=k.isMesh&&k.matrixWorld.determinant()<0,xt=Qd(A,z,X,Y,k);Rt.setMaterial(Y,ft);let St=X.index,wt=1;if(Y.wireframe===!0){if(St=it.getWireframeAttribute(X),St===void 0)return;wt=2}const Ct=X.drawRange,Tt=X.attributes.position;let $t=Ct.start*wt,se=(Ct.start+Ct.count)*wt;st!==null&&($t=Math.max($t,st.start*wt),se=Math.min(se,(st.start+st.count)*wt)),St!==null?($t=Math.max($t,0),se=Math.min(se,St.count)):Tt!=null&&($t=Math.max($t,0),se=Math.min(se,Tt.count));const he=se-$t;if(he<0||he===1/0)return;ne.setup(k,Y,xt,X,St);let $e,Zt=gt;if(St!==null&&($e=tt.get(St),Zt=Ht,Zt.setIndex($e)),k.isMesh)Y.wireframe===!0?(Rt.setLineWidth(Y.wireframeLinewidth*At()),Zt.setMode(O.LINES)):Zt.setMode(O.TRIANGLES);else if(k.isLine){let Et=Y.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*At()),k.isLineSegments?Zt.setMode(O.LINES):k.isLineLoop?Zt.setMode(O.LINE_LOOP):Zt.setMode(O.LINE_STRIP)}else k.isPoints?Zt.setMode(O.POINTS):k.isSprite&&Zt.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Zt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Et=k._multiDrawStarts,be=k._multiDrawCounts,Kt=k._multiDrawCount,Mn=St?tt.get(St).bytesPerElement:1,or=Ut.get(Y).currentProgram.getUniforms();for(let je=0;je<Kt;je++)or.setValue(O,"_gl_DrawID",je),Zt.render(Et[je]/Mn,be[je])}else if(k.isInstancedMesh)Zt.renderInstances($t,he,k.count);else if(X.isInstancedBufferGeometry){const Et=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,Et);Zt.renderInstances($t,he,be)}else Zt.render($t,he)};function qt(A,z,X){A.transparent===!0&&A.side===Yn&&A.forceSinglePass===!1?(A.side=Ge,A.needsUpdate=!0,qs(A,z,X),A.side=yi,A.needsUpdate=!0,qs(A,z,X),A.side=Yn):qs(A,z,X)}this.compile=function(A,z,X=null){X===null&&(X=A),d=Xt.get(X),d.init(z),E.push(d),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),A!==X&&A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const Y=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const st=k.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const xt=st[ft];qt(xt,X,k),Y.add(xt)}else qt(st,X,k),Y.add(st)}),E.pop(),d=null,Y},this.compileAsync=function(A,z,X=null){const Y=this.compile(A,z,X);return new Promise(k=>{function st(){if(Y.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){k(A);return}setTimeout(st,10)}Vt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Oe=null;function Bn(A){Oe&&Oe(A)}function uu(){Pi.stop()}function hu(){Pi.start()}const Pi=new Mf;Pi.setAnimationLoop(Bn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){Oe=A,$.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},$.addEventListener("sessionstart",uu),$.addEventListener("sessionend",hu),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,z,R),d=Xt.get(A,E.length),d.init(z),E.push(d),ot.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),at.setFromProjectionMatrix(ot),Z=this.localClippingEnabled,q=rt.init(this.clippingPlanes,Z),_=mt.get(A,p.length),_.init(),p.push(_),$.enabled===!0&&$.isPresenting===!0){const st=M.xr.getDepthSensingMesh();st!==null&&co(st,z,-1/0,M.sortObjects)}co(A,z,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(U,K),It=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,It&&Pt.addToRenderList(_,A),this.info.render.frame++,q===!0&&rt.beginShadows();const X=d.state.shadowsArray;_t.render(X,A,z),q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,k=_.transmissive;if(d.setupLights(),z.isArrayCamera){const st=z.cameras;if(k.length>0)for(let ft=0,xt=st.length;ft<xt;ft++){const St=st[ft];du(Y,k,A,St)}It&&Pt.render(A);for(let ft=0,xt=st.length;ft<xt;ft++){const St=st[ft];fu(_,A,St,St.viewport)}}else k.length>0&&du(Y,k,A,z),It&&Pt.render(A),fu(_,A,z);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,z),ne.resetDefaultState(),F=-1,V=null,E.pop(),E.length>0?(d=E[E.length-1],q===!0&&rt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function co(A,z,X,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){Y&&Mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const ft=Q.update(A),xt=A.material;xt.visible&&_.push(A,ft,xt,X,Mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const ft=Q.update(A),xt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Mt.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Mt.copy(ft.boundingSphere.center)),Mt.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(xt)){const St=ft.groups;for(let wt=0,Ct=St.length;wt<Ct;wt++){const Tt=St[wt],$t=xt[Tt.materialIndex];$t&&$t.visible&&_.push(A,ft,$t,X,Mt.z,Tt)}}else xt.visible&&_.push(A,ft,xt,X,Mt.z,null)}}const st=A.children;for(let ft=0,xt=st.length;ft<xt;ft++)co(st[ft],z,X,Y)}function fu(A,z,X,Y){const k=A.opaque,st=A.transmissive,ft=A.transparent;d.setupLightsView(X),q===!0&&rt.setGlobalState(M.clippingPlanes,X),Y&&Rt.viewport(v.copy(Y)),k.length>0&&Xs(k,z,X),st.length>0&&Xs(st,z,X),ft.length>0&&Xs(ft,z,X),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function du(A,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new sn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?wn:Qn,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const st=d.state.transmissionRenderTarget[Y.id],ft=Y.viewport||v;st.setSize(ft.z,ft.w);const xt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(T),S=M.getClearAlpha(),S<1&&M.setClearColor(16777215,.5),M.clear(),It&&Pt.render(X);const St=M.toneMapping;M.toneMapping=gi;const wt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),q===!0&&rt.setGlobalState(M.clippingPlanes,Y),Xs(A,X,Y),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Tt=0,$t=z.length;Tt<$t;Tt++){const se=z[Tt],he=se.object,$e=se.geometry,Zt=se.material,Et=se.group;if(Zt.side===Yn&&he.layers.test(Y.layers)){const be=Zt.side;Zt.side=Ge,Zt.needsUpdate=!0,pu(he,X,Y,$e,Zt,Et),Zt.side=be,Zt.needsUpdate=!0,Ct=!0}}Ct===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}M.setRenderTarget(xt),M.setClearColor(T,S),wt!==void 0&&(Y.viewport=wt),M.toneMapping=St}function Xs(A,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let k=0,st=A.length;k<st;k++){const ft=A[k],xt=ft.object,St=ft.geometry,wt=Y===null?ft.material:Y,Ct=ft.group;xt.layers.test(X.layers)&&pu(xt,z,X,St,wt,Ct)}}function pu(A,z,X,Y,k,st){A.onBeforeRender(M,z,X,Y,k,st),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(M,z,X,Y,A,st),k.transparent===!0&&k.side===Yn&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,M.renderBufferDirect(X,z,Y,k,A,st),k.side=yi,k.needsUpdate=!0,M.renderBufferDirect(X,z,Y,k,A,st),k.side=Yn):M.renderBufferDirect(X,z,Y,k,A,st),A.onAfterRender(M,z,X,Y,k,st)}function qs(A,z,X){z.isScene!==!0&&(z=bt);const Y=Ut.get(A),k=d.state.lights,st=d.state.shadowsArray,ft=k.state.version,xt=yt.getParameters(A,k.state,st,z,X),St=yt.getProgramCacheKey(xt);let wt=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?G:y).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,wt===void 0&&(A.addEventListener("dispose",Gt),wt=new Map,Y.programs=wt);let Ct=wt.get(St);if(Ct!==void 0){if(Y.currentProgram===Ct&&Y.lightsStateVersion===ft)return _u(A,xt),Ct}else xt.uniforms=yt.getUniforms(A),A.onBeforeCompile(xt,M),Ct=yt.acquireProgram(xt,St),wt.set(St,Ct),Y.uniforms=xt.uniforms;const Tt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),_u(A,xt),Y.needsLights=ep(A),Y.lightsStateVersion=ft,Y.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ct,Y.uniformsList=null,Ct}function mu(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Ra.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function _u(A,z){const X=Ut.get(A);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Qd(A,z,X,Y,k){z.isScene!==!0&&(z=bt),P.resetTextureUnits();const st=z.fog,ft=Y.isMeshStandardMaterial?z.environment:null,xt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ci,St=(Y.isMeshStandardMaterial?G:y).get(Y.envMap||ft),wt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ct=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Tt=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,se=!!X.morphAttributes.color;let he=gi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=M.toneMapping);const $e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=$e!==void 0?$e.length:0,Et=Ut.get(Y),be=d.state.lights;if(q===!0&&(Z===!0||A!==V)){const un=A===V&&Y.id===F;rt.setState(Y,A,un)}let Kt=!1;Y.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==be.state.version||Et.outputColorSpace!==xt||k.isBatchedMesh&&Et.batching===!1||!k.isBatchedMesh&&Et.batching===!0||k.isBatchedMesh&&Et.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Et.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Et.instancing===!1||!k.isInstancedMesh&&Et.instancing===!0||k.isSkinnedMesh&&Et.skinning===!1||!k.isSkinnedMesh&&Et.skinning===!0||k.isInstancedMesh&&Et.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Et.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Et.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Et.instancingMorph===!1&&k.morphTexture!==null||Et.envMap!==St||Y.fog===!0&&Et.fog!==st||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==rt.numPlanes||Et.numIntersection!==rt.numIntersection)||Et.vertexAlphas!==wt||Et.vertexTangents!==Ct||Et.morphTargets!==Tt||Et.morphNormals!==$t||Et.morphColors!==se||Et.toneMapping!==he||Et.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,Et.__version=Y.version);let Mn=Et.currentProgram;Kt===!0&&(Mn=qs(Y,z,k));let or=!1,je=!1,uo=!1;const pe=Mn.getUniforms(),ri=Et.uniforms;if(Rt.useProgram(Mn.program)&&(or=!0,je=!0,uo=!0),Y.id!==F&&(F=Y.id,je=!0),or||V!==A){Wt.reverseDepthBuffer?(ct.copy(A.projectionMatrix),Hp(ct),Gp(ct),pe.setValue(O,"projectionMatrix",ct)):pe.setValue(O,"projectionMatrix",A.projectionMatrix),pe.setValue(O,"viewMatrix",A.matrixWorldInverse);const un=pe.map.cameraPosition;un!==void 0&&un.setValue(O,vt.setFromMatrixPosition(A.matrixWorld)),Wt.logarithmicDepthBuffer&&pe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,je=!0,uo=!0)}if(k.isSkinnedMesh){pe.setOptional(O,k,"bindMatrix"),pe.setOptional(O,k,"bindMatrixInverse");const un=k.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),pe.setValue(O,"boneTexture",un.boneTexture,P))}k.isBatchedMesh&&(pe.setOptional(O,k,"batchingTexture"),pe.setValue(O,"batchingTexture",k._matricesTexture,P),pe.setOptional(O,k,"batchingIdTexture"),pe.setValue(O,"batchingIdTexture",k._indirectTexture,P),pe.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(O,"batchingColorTexture",k._colorsTexture,P));const ho=X.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&Dt.update(k,X,Mn),(je||Et.receiveShadow!==k.receiveShadow)&&(Et.receiveShadow=k.receiveShadow,pe.setValue(O,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ri.envMap.value=St,ri.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(ri.envMapIntensity.value=z.environmentIntensity),je&&(pe.setValue(O,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&tp(ri,uo),st&&Y.fog===!0&&ut.refreshFogUniforms(ri,st),ut.refreshMaterialUniforms(ri,Y,N,w,d.state.transmissionRenderTarget[A.id]),Ra.upload(O,mu(Et),ri,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ra.upload(O,mu(Et),ri,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(O,"center",k.center),pe.setValue(O,"modelViewMatrix",k.modelViewMatrix),pe.setValue(O,"normalMatrix",k.normalMatrix),pe.setValue(O,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const un=Y.uniformsGroups;for(let fo=0,np=un.length;fo<np;fo++){const gu=un[fo];B.update(gu,Mn),B.bind(gu,Mn)}}return Mn}function tp(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ep(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,X){Ut.get(A.texture).__webglTexture=z,Ut.get(A.depthTexture).__webglTexture=X;const Y=Ut.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const X=Ut.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){R=A,I=z,L=X;let Y=!0,k=null,st=!1,ft=!1;if(A){const St=Ut.get(A);if(St.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(St.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(St.__hasExternalTextures)P.rebindTextures(A,Ut.get(A.texture).__webglTexture,Ut.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Tt=A.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&Ut.has(Tt)&&(A.width!==Tt.image.width||A.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const wt=A.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ft=!0);const Ct=Ut.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[z])?k=Ct[z][X]:k=Ct[z],st=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=Ut.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?k=Ct[X]:k=Ct,v.copy(A.viewport),b.copy(A.scissor),W=A.scissorTest}else v.copy(J).multiplyScalar(N).floor(),b.copy(j).multiplyScalar(N).floor(),W=et;if(Rt.bindFramebuffer(O.FRAMEBUFFER,k)&&Y&&Rt.drawBuffers(A,k),Rt.viewport(v),Rt.scissor(b),Rt.setScissorTest(W),st){const St=Ut.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,St.__webglTexture,X)}else if(ft){const St=Ut.get(A.texture),wt=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,X||0,wt)}F=-1},this.readRenderTargetPixels=function(A,z,X,Y,k,st,ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){Rt.bindFramebuffer(O.FRAMEBUFFER,xt);try{const St=A.texture,wt=St.format,Ct=St.type;if(!Wt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&X>=0&&X<=A.height-k&&O.readPixels(z,X,Y,k,Nt.convert(wt),Nt.convert(Ct),st)}finally{const St=R!==null?Ut.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(A,z,X,Y,k,st,ft){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){const St=A.texture,wt=St.format,Ct=St.type;if(!Wt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-Y&&X>=0&&X<=A.height-k){Rt.bindFramebuffer(O.FRAMEBUFFER,xt);const Tt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.bufferData(O.PIXEL_PACK_BUFFER,st.byteLength,O.STREAM_READ),O.readPixels(z,X,Y,k,Nt.convert(wt),Nt.convert(Ct),0);const $t=R!==null?Ut.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,$t);const se=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vp(O,se,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,st),O.deleteBuffer(Tt),O.deleteSync(se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,X=0){A.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(A.image.width*Y),st=Math.floor(A.image.height*Y),ft=z!==null?z.x:0,xt=z!==null?z.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,ft,xt,k,st),Rt.unbindTexture()},this.copyTextureToTexture=function(A,z,X=null,Y=null,k=0){A.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],z=arguments[2],k=arguments[3]||0,X=null);let st,ft,xt,St,wt,Ct;X!==null?(st=X.max.x-X.min.x,ft=X.max.y-X.min.y,xt=X.min.x,St=X.min.y):(st=A.image.width,ft=A.image.height,xt=0,St=0),Y!==null?(wt=Y.x,Ct=Y.y):(wt=0,Ct=0);const Tt=Nt.convert(z.format),$t=Nt.convert(z.type);P.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const se=O.getParameter(O.UNPACK_ROW_LENGTH),he=O.getParameter(O.UNPACK_IMAGE_HEIGHT),$e=O.getParameter(O.UNPACK_SKIP_PIXELS),Zt=O.getParameter(O.UNPACK_SKIP_ROWS),Et=O.getParameter(O.UNPACK_SKIP_IMAGES),be=A.isCompressedTexture?A.mipmaps[k]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,St),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,wt,Ct,st,ft,Tt,$t,be.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,wt,Ct,be.width,be.height,Tt,be.data):O.texSubImage2D(O.TEXTURE_2D,k,wt,Ct,st,ft,Tt,$t,be),O.pixelStorei(O.UNPACK_ROW_LENGTH,se),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$e),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Et),k===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X=null,Y=null,k=0){A.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],z=arguments[3],k=arguments[4]||0);let st,ft,xt,St,wt,Ct,Tt,$t,se;const he=A.isCompressedTexture?A.mipmaps[k]:A.image;X!==null?(st=X.max.x-X.min.x,ft=X.max.y-X.min.y,xt=X.max.z-X.min.z,St=X.min.x,wt=X.min.y,Ct=X.min.z):(st=he.width,ft=he.height,xt=he.depth,St=0,wt=0,Ct=0),Y!==null?(Tt=Y.x,$t=Y.y,se=Y.z):(Tt=0,$t=0,se=0);const $e=Nt.convert(z.format),Zt=Nt.convert(z.type);let Et;if(z.isData3DTexture)P.setTexture3D(z,0),Et=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)P.setTexture2DArray(z,0),Et=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const be=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Mn=O.getParameter(O.UNPACK_SKIP_PIXELS),or=O.getParameter(O.UNPACK_SKIP_ROWS),je=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,wt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ct),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Et,k,Tt,$t,se,st,ft,xt,$e,Zt,he.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,k,Tt,$t,se,st,ft,xt,$e,he.data):O.texSubImage3D(Et,k,Tt,$t,se,st,ft,xt,$e,Zt,he),O.pixelStorei(O.UNPACK_ROW_LENGTH,be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mn),O.pixelStorei(O.UNPACK_SKIP_ROWS,or),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je),k===0&&z.generateMipmaps&&O.generateMipmap(Et),Rt.unbindTexture()},this.initRenderTarget=function(A){Ut.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){I=0,L=0,R=null,Rt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Dc?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===Qa?"display-p3":"srgb"}}class Ic{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qv extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new H;class Oa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class no extends rs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yr;const ds=new H,Tr=new H,Er=new H,br=new Lt,ps=new Lt,wf=new de,pa=new H,ms=new H,ma=new H,uh=new Lt,Xo=new Lt,hh=new Lt;class Uc extends Ne{constructor(t=new no){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new Cn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tx(e,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Oa(n,3,0,!1)),yr.setAttribute("uv",new Oa(n,2,3,!1))}this.geometry=yr,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tr.setFromMatrixScale(this.matrixWorld),wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Er.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;_a(pa.set(-.5,-.5,0),Er,a,Tr,i,s),_a(ms.set(.5,-.5,0),Er,a,Tr,i,s),_a(ma.set(.5,.5,0),Er,a,Tr,i,s),uh.set(0,0),Xo.set(1,0),hh.set(1,1);let o=t.ray.intersectTriangle(pa,ms,ma,!1,ds);if(o===null&&(_a(ms.set(-.5,.5,0),Er,a,Tr,i,s),Xo.set(0,1),o=t.ray.intersectTriangle(pa,ma,ms,!1,ds),o===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:mn.getInterpolation(ds,pa,ms,ma,uh,Xo,hh,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _a(r,t,e,n,i,s){br.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ps.x=s*br.x-i*br.y,ps.y=i*br.x+s*br.y):ps.copy(br),r.copy(t),r.x+=ps.x,r.y+=ps.y,r.applyMatrix4(wf)}class Cf extends rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fh=new de,Yl=new hf,ga=new to,va=new H;class ex extends Ne{constructor(t=new Cn,e=new Cf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=s,t.ray.intersectsSphere(ga)===!1)return;fh.copy(i).invert(),Yl.copy(t.ray).applyMatrix4(fh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const d=c.getX(g);va.fromBufferAttribute(h,d),dh(va,d,l,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,_=m;g<_;g++)va.fromBufferAttribute(h,g),dh(va,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dh(r,t,e,n,i,s,a){const o=Yl.distanceSqToPoint(r);if(o<e){const l=new H;Yl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Nc extends De{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nx extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const ph={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ix{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const rx=new ix;class Fc{constructor(t){this.manager=t!==void 0?t:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";class sx extends Fc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ph.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=As("img");function l(){u(),ph.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class ax extends Fc{constructor(t){super(t)}load(t,e,n,i){const s=new De,a=new sx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Rf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);const Pf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ox=new Sf(-1,1,1,-1,0,1);class lx extends Cn{constructor(){super(),this.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jn([0,2,0,0,2,0],2))}}const cx=new lx;class ws{constructor(t){this._mesh=new _n(cx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ox)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ux extends sr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yr.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ws(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _h extends sr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class hx extends sr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ux(Pf),this.copyPass.material.blending=$n,this.clock=new Rf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(a instanceof _h?n=!0:a instanceof hx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dx extends sr{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const px={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class mx extends sr{constructor(t=.96){super(),this.shader=px,this.uniforms=Yr.clone(this.shader.uniforms),this.uniforms.damp.value=t,this.textureComp=new sn(window.innerWidth,window.innerHeight,{magFilter:He,type:wn}),this.textureOld=new sn(window.innerWidth,window.innerHeight,{magFilter:He,type:wn}),this.compFsMaterial=new Pe({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new ws(this.compFsMaterial),this.copyFsMaterial=new Xr,this.copyFsQuad=new ws(this.copyFsMaterial)}render(t,e,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,t.setRenderTarget(this.textureComp),this.compFsQuad.render(t),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this.copyFsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.copyFsQuad.render(t));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(t,e){this.textureComp.setSize(t,e),this.textureOld.setSize(t,e)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}const _x={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Kr extends sr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(s,a,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new sn(s,a,{type:wn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new sn(s,a,{type:wn});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const o=_x;this.highPassUniforms=Yr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Lt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Pf;this.copyUniforms=Yr.clone(u.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Es,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new Xr,this.fsQuad=new ws(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Kr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Kr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Kr.BlurDirectionX=new Lt(1,0);Kr.BlurDirectionY=new Lt(0,1);const gx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class vx extends sr{constructor(){super();const t=gx;this.uniforms=Yr.clone(t.uniforms),this.material=new nx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ws(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Xn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Df(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},Oc,Ae,ae,gn=1e8,te=1/gn,Zl=Math.PI*2,xx=Zl/4,Mx=0,Lf=Math.sqrt,Sx=Math.cos,yx=Math.sin,Ee=function(t){return typeof t=="string"},fe=function(t){return typeof t=="function"},ei=function(t){return typeof t=="number"},Bc=function(t){return typeof t>"u"},Fn=function(t){return typeof t=="object"},We=function(t){return t!==!1},zc=function(){return typeof window<"u"},xa=function(t){return fe(t)||Ee(t)},If=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Le=Array.isArray,Tx=/random\([^)]+\)/g,Ex=/,\s*/g,gh=/(?:-?\.?\d|\.)+/gi,Uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nf=/[+-]=-?[.\d]+/,bx=/[^,'"\[\]\s]+/gi,Ax=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ce,Rn,Kl,kc,ln={},Ba={},Ff,Of=function(t){return(Ba=$r(t,ln))&&Ze},Vc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Rs=function(t,e){return!e&&console.warn(t)},Bf=function(t,e){return t&&(ln[t]=e)&&Ba&&(Ba[t]=e)||ln},Ps=function(){return 0},wx={suppressEvents:!0,isStart:!0,kill:!1},Pa={suppressEvents:!0,kill:!1},Cx={suppressEvents:!0},Hc={},xi=[],$l={},zf,tn={},Yo={},vh=30,Da=[],Gc="",Wc=function(t){var e=t[0],n,i;if(Fn(e)||fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Da.length;i--&&!Da[i].targetTest(e););n=Da[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new od(t[i],n)))||t.splice(i,1);return t},ji=function(t){return t._gsap||Wc(vn(t))[0]._gsap},kf=function(t,e,n){return(n=t[e])&&fe(n)?t[e]():Bc(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},le=function(t){return Math.round(t*1e7)/1e7||0},Nr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Rx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},za=function(){var t=xi.length,e=xi.slice(0),n,i;for($l={},xi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xc=function(t){return!!(t._initted||t._startAt||t.add)},Vf=function(t,e,n,i){xi.length&&!Ae&&za(),t.render(e,n,!!(Ae&&e<0&&Xc(t))),xi.length&&!Ae&&za()},Hf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(bx).length<2?e:Ee(t)?t.trim():t},Gf=function(t){return t},cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Px=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},$r=function(t,e){for(var n in e)t[n]=e[n];return t},xh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ka=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ms=function(t){var e=t.parent||ce,n=t.keyframes?Px(Le(t.keyframes)):cn;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Dx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Wf=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},io=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ti=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ji=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Lx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},jl=function(t,e,n,i){return t._startAt&&(Ae?t._startAt.revert(Pa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ix=function r(t){return!t||t._ts&&r(t.parent)},Mh=function(t){return t._repeat?jr(t._tTime,t=t.duration()+t._rDelay)*t:0},jr=function(t,e){var n=Math.floor(t=le(t/e));return t&&n===t?n-1:n},Va=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ro=function(t){return t._end=le(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},so=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ro(t),n._dirty||Ji(n,t)),t},Xf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Va(t.rawTime(),e),(!e._dur||Hs(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Ji(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},In=function(t,e,n,i){return e.parent&&Ti(e),e._start=le((ei(n)?n:n||t!==ce?fn(t,n,e):t._time)+e._delay),e._end=le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wf(t,e,"_first","_last",t._sort?"_start":0),Jl(e)||(t._recent=e),i||Xf(t,e),t._ts<0&&so(t,t._tTime),t},qf=function(t,e){return(ln.ScrollTrigger||Vc("scrollTrigger",e))&&ln.ScrollTrigger.create(e,t)},Yf=function(t,e,n,i,s){if(Yc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ae&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zf!==en.frame)return xi.push(t),t._lazy=[s,i],1},Ux=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Jl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Nx=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Ux(t)&&!(!t._initted&&Jl(t))||(t._ts<0||t._dp._ts<0)&&!Jl(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Hs(0,t._tDur,e),u=jr(l,o),t._yoyo&&u&1&&(a=1-a),u!==jr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ae||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&Yf(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&jl(t,e,n,!0),t._onUpdate&&!n&&nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ti(t,1),!n&&!Ae&&(nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Fx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Jr=function(t,e,n,i){var s=t._repeat,a=le(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:le(a*(s+1)+t._rDelay*s):a,o>0&&!i&&so(t,t._tTime=t._tDur*o),t.parent&&ro(t),n||Ji(t.parent,t),t},Sh=function(t){return t instanceof Ve?Ji(t):Jr(t,t._dur)},Ox={_start:0,endTime:Ps,totalDuration:Ps},fn=function r(t,e,n){var i=t.labels,s=t._recent||Ox,a=t.duration()>=gn?s.endTime(!1):t._dur,o,l,c;return Ee(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Le(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ss=function(t,e,n){var i=ei(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=We(l.vars.inherit)&&l.parent;a.immediateRender=We(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new xe(e[0],a,e[s+1])},Ri=function(t,e){return t||t===0?e(t):e},Hs=function(t,e,n){return n<t?t:n>e?e:n},Re=function(t,e){return!Ee(t)||!(e=Ax.exec(t))?"":e[1]},Bx=function(t,e,n){return Ri(n,function(i){return Hs(t,e,i)})},Ql=[].slice,Zf=function(t,e){return t&&Fn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fn(t[0]))&&!t.nodeType&&t!==Rn},zx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ee(i)&&!e||Zf(i,1)?(s=n).push.apply(s,vn(i)):n.push(i)})||n},vn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):Ee(t)&&!n&&(Kl||!Qr())?Ql.call((e||kc).querySelectorAll(t),0):Le(t)?zx(t,n):Zf(t)?Ql.call(t,0):t?[t]:[]},tc=function(t){return t=vn(t)[0]||Rs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vn(e,n.querySelectorAll?n:n===t?Rs("Invalid scope")||kc.createElement("div"):t)}},Kf=function(t){return t.sort(function(){return .5-Math.random()})},$f=function(t){if(fe(t))return t;var e=Fn(t)?t:{each:t},n=Qi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Ee(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||e).length,d=a[_],p,E,M,C,I,L,R,F,V;if(!d){if(V=e.grid==="auto"?0:(e.grid||[1,gn])[1],!V){for(R=-gn;R<(R=g[V++].getBoundingClientRect().left)&&V<_;);V<_&&V--}for(d=a[_]=[],p=l?Math.min(V,_)*u-.5:i%V,E=V===gn?0:l?_*h/V-.5:i/V|0,R=0,F=gn,L=0;L<_;L++)M=L%V-p,C=E-(L/V|0),d[L]=I=c?Math.abs(c==="y"?C:M):Lf(M*M+C*C),I>R&&(R=I),I<F&&(F=I);i==="random"&&Kf(d),d.max=R-F,d.min=F,d.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(V>_?_-1:c?c==="y"?_/V:V:Math.max(V,_/V))||0)*(i==="edges"?-1:1),d.b=_<0?s-_:s,d.u=Re(e.amount||e.each)||0,n=n&&_<0?Jx(n):n}return _=(d[f]-d.min)/d.max||0,le(d.b+(n?n(_):_)*d.v)+d.u}},ec=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ei(n)?0:Re(n))}},jf=function(t,e){var n=Le(t),i,s;return!n&&Fn(t)&&(i=n=t.radius||gn,t.values?(t=vn(t.values),(s=!ei(t[0]))&&(i*=i)):t=ec(t.increment)),Ri(e,n?fe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gn,u=0,h=t.length,f,m;h--;)s?(f=t[h].x-o,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||ei(a)?u:u+Re(a)}:ec(t))},Jf=function(t,e,n,i){return Ri(Le(t)?!e:n===!0?!!(n=0):!i,function(){return Le(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},kx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Vx=function(t,e){return function(n){return t(parseFloat(n))+(e||Re(n))}},Hx=function(t,e,n){return td(t,e,0,1,n)},Qf=function(t,e,n){return Ri(n,function(i){return t[~~e(i)]})},Gx=function r(t,e,n){var i=e-t;return Le(t)?Qf(t,r(0,t.length),e):Ri(n,function(s){return(i+(s-t)%i)%i+t})},Wx=function r(t,e,n){var i=e-t,s=i*2;return Le(t)?Qf(t,r(0,t.length-1),e):Ri(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ds=function(t){return t.replace(Tx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Ex);return Jf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},td=function(t,e,n,i,s){var a=e-t,o=i-n;return Ri(s,function(l){return n+((l-t)/a*o||0)})},Xx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Ee(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Le(t)&&!Le(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=$r(Le(t)?[]:{},t));if(!u){for(l in e)qc.call(o,t,l,"get",e[l]);s=function(g){return $c(g,o)||(a?t.p:t)}}}return Ri(n,s)},yh=function(t,e,n){var i=t.labels,s=gn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},nn=function(t,e,n){var i=t.vars,s=i[e],a=ae,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&xi.length&&za(),o&&(ae=o),u=l?s.apply(c,l):s.call(c),ae=a,u},vs=function(t){return Ti(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ae),t.progress()<1&&nn(t,"onInterrupt"),t},Lr,ed=[],nd=function(t){if(t)if(t=!t.name&&t.default||t,zc()||t.headless){var e=t.name,n=fe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ps,render:$c,add:qc,kill:lM,modifier:oM,rawVars:0},a={targetTest:0,get:0,getSetter:Kc,aliases:{},register:0};if(Qr(),t!==i){if(tn[e])return;cn(i,cn(ka(t,s),a)),$r(i.prototype,$r(s,ka(t,a))),tn[i.prop=e]=i,t.targetTest&&(Da.push(i),Hc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bf(e,i),t.register&&t.register(Ze,i,qe)}else ed.push(t)},Qt=255,xs={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},Zo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Qt+.5|0},id=function(t,e,n){var i=t?ei(t)?[t>>16,t>>8&Qt,t&Qt]:0:xs.black,s,a,o,l,c,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xs[t])i=xs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Qt,i&Qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Qt,t&Qt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(gh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Zo(l+1/3,s,a),i[1]=Zo(l,s,a),i[2]=Zo(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Uf),n&&i.length<4&&(i[3]=1),i}else i=t.match(gh)||xs.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Qt,a=i[1]/Qt,o=i[2]/Qt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rd=function(t){var e=[],n=[],i=-1;return t.split(Mi).forEach(function(s){var a=s.match(Dr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Th=function(t,e,n){var i="",s=(t+i).match(Mi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=id(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=rd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Mi,"1").split(Dr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Mi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xs)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),qx=/hsl[a]?\(/,sd=function(t){var e=t.join(" "),n;if(Mi.lastIndex=0,Mi.test(e))return n=qx.test(e),t[1]=Th(t[1],n),t[0]=Th(t[0],n,rd(t[1])),!0},Ls,en=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,m,g=function _(d){var p=r()-i,E=d===!0,M,C,I,L;if((p>t||p<0)&&(n+=p-e),i+=p,I=i-n,M=I-a,(M>0||E)&&(L=++h.frame,f=I-h.time*1e3,h.time=I=I/1e3,a+=M+(M>=s?4:s-M),C=1),E||(l=c(_)),C)for(m=0;m<o.length;m++)o[m](I,f,L,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Ff&&(!Kl&&zc()&&(Rn=Kl=window,kc=Rn.document||{},ln.gsap=Ze,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(Ze.version),Of(Ba||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),ed.forEach(nd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(d){return setTimeout(d,a-h.time*1e3+1|0)},Ls=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ls=0,c=Ps},lagSmoothing:function(d,p){t=d||1/0,e=Math.min(p||33,t)},fps:function(d){s=1e3/(d||240),a=h.time*1e3+s},add:function(d,p,E){var M=p?function(C,I,L,R){d(C,I,L,R),h.remove(M)}:d;return h.remove(d),o[E?"unshift":"push"](M),Qr(),M},remove:function(d,p){~(p=o.indexOf(d))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},h}(),Qr=function(){return!Ls&&en.wake()},kt={},Yx=/^[\d.\-M][\d.\-,\s]/,Zx=/["']/g,Kx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Zx,"").trim():+c,i=l.substr(o+1).trim();return e},$x=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},jx=function(t){var e=(t+"").split("("),n=kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Kx(e[1])]:$x(t).split(",").map(Hf)):kt._CE&&Yx.test(t)?kt._CE("",t):n},Jx=function(t){return function(e){return 1-t(1-e)}},Qi=function(t,e){return t&&(fe(t)?t:kt[t]||jx(t))||e},ar=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){kt[o]=ln[o]=s,kt[a=o.toLowerCase()]=n;for(var l in s)kt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=kt[o+"."+l]=s[l]}),s},ad=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ko=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Zl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*yx((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:ad(o);return s=Zl/s,l.config=function(c,u){return r(t,c,u)},l},$o=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:ad(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ar(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;ar("Elastic",Ko("in"),Ko("out"),Ko());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};ar("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ar("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ar("Circ",function(r){return-(Lf(1-r*r)-1)});ar("Sine",function(r){return r===1?1:-Sx(r*xx)+1});ar("Back",$o("in"),$o("out"),$o());kt.SteppedEase=kt.steps=ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-te;return function(o){return((i*Hs(0,a,o)|0)+s)*n}}};Cs.ease=kt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gc+=r+","+r+"Params,"});var od=function(t,e){this.id=Mx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kf,this.set=e?e.getSetter:Kc},Is=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jr(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),Ls||en.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Jr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(so(this,n),!s._dp||s.parent||Xf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Vf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?jr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Va(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(Hs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ro(this),Lx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=le(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Va(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Cx);var i=Ae;return Ae=n,Xc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ae=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(fn(this,n),We(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i)),this._dur||(this._zTime=-te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=fe(n)?n:Gf,l=function(){var u=i.then;i.then=null,s&&s(),fe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){vs(this)},r}();cn(Is.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Ve=function(r){Df(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=We(n.sortChildren),ce&&In(n.parent||ce,Xn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&qf(Xn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ss(0,arguments,this),this},e.from=function(i,s,a){return Ss(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ss(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Ms(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(i,s,fn(this,a),1),this},e.call=function(i,s,a){return In(this,xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new xe(i,a,fn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ms(a).immediateRender=We(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Ms(o).immediateRender=We(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:le(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,d,p,E,M,C,I,L,R;if(this!==ce&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,C=this._start,M=this._ts,p=!M,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,a);if(f=le(u%d),u===l?(_=this._repeat,f=c):(I=le(u/d),_=~~I,_&&_===I&&(f=c,_--),f>c&&(f=c)),I=jr(this._tTime,d),!o&&this._tTime&&I!==_&&this._tTime-I*d-this._dur<=0&&(I=_),L&&_&1&&(f=c-f,R=1),_!==I&&!this._lock){var F=L&&I&1,V=F===(L&&_&1);if(_<I&&(F=!F),o=F?0:u%c?c:u,this._lock=1,this.render(o||(R?0:le(_*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,I=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,V&&(this._lock=2,o=F?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Fx(this,le(o),le(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!I&&(nn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-te);break}}m=g}else{m=this._last;for(var v=i<0?i:f;m;){if(g=m._prev,(m._act||v<=m._end)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(v-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(v-m._start)*m._ts,s,a||Ae&&Xc(m)),f!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=v?-te:te);break}}m=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-te)._zTime=f>=o?1:-1,this._ts))return this._start=C,ro(this),this.render(i,s,a);this._onUpdate&&!s&&nn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(C===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ti(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(nn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ei(s)||(s=fn(this,s,i)),!(i instanceof Is)){if(Le(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ee(i))return this.addLabel(i,s);if(fe(i))i=xe.delayedCall(0,i);else return this}return this!==i?In(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ee(i)?this.removeLabel(i):fe(i)?this.killTweensOf(i):(i.parent===this&&io(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=le(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=fn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=xe.delayedCall(0,s||Ps,a);return o.data="isPause",this._hasPause=1,In(this,o,fn(this,i))},e.removePause=function(i){var s=this._first;for(i=fn(this,i);s;)s._start===i&&s.data==="isPause"&&Ti(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)di!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=vn(i),l=this._first,c=ei(s),u;l;)l instanceof xe?Rx(l._targets,o)&&(c?(!di||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=fn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=xe.to(a,cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!m){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==d&&Jr(g,d,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,cn({startAt:{time:fn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),yh(this,fn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),yh(this,fn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=le(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ji(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=gn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=le(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Jr(a,a===ce&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ce._ts&&(Vf(ce,Va(i,ce)),zf=en.frame),en.frame>=vh){vh+=on.autoSleep||120;var s=ce._first;if((!s||!s._ts)&&on.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},t}(Is);cn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qx=function(t,e,n,i,s,a,o){var l=new qe(this._pt,t,e,0,1,dd,null,s),c=0,u=0,h,f,m,g,_,d,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ds(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),f=n.match(qo)||[];h=qo.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(d=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:d,c:g.charAt(1)==="="?Nr(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=qo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Nf.test(i)||p)&&(l.e=0),this._pt=l,l},qc=function(t,e,n,i,s,a,o,l,c,u){fe(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:fe(h)?c?t[e.indexOf("set")||!fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=fe(h)?c?rM:hd:Zc,g;if(Ee(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(g=Nr(f,i)+(Re(f)||0),(g||g===0)&&(i=g))),!u||f!==i||nc)return!isNaN(f*i)&&i!==""?(g=new qe(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?aM:fd,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&Vc(e,i),Qx.call(this,t,e,f,i,m,l||on.stringFilter,c))},tM=function(t,e,n,i,s){if(fe(t)&&(t=ys(t,s,e,n,i)),!Fn(t)||t.style&&t.nodeType||Le(t)||If(t))return Ee(t)?ys(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ys(t[o],s,e,n,i);return a},ld=function(t,e,n,i,s,a){var o,l,c,u;if(tn[t]&&(o=new tn[t]).init(s,o.rawVars?e[t]:tM(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Lr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},di,nc,Yc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,d=t._targets,p=t.parent,E=p&&p.data==="nested"?p.vars.targets:d,M=t._overwrite==="auto"&&!Oc,C=t.timeline,I=i.easeReverse||h,L,R,F,V,v,b,W,T,S,D,w,N,U;if(C&&(!f||!s)&&(s="none"),t._ease=Qi(s,Cs.ease),t._rEase=I&&(Qi(I)||t._ease),t._from=!C&&!!i.runBackwards,t._from&&(t.ratio=1),!C||f&&!i.stagger){if(T=d[0]?ji(d[0]).harness:0,N=T&&i[T.prop],L=ka(i,Hc),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?Pa:wx),_._lazy=0),a){if(Ti(t._startAt=xe.set(d,cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&We(l),startAt:null,delay:0,onUpdate:c&&function(){return nn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ae||!o&&!m)&&t._startAt.revert(Pa),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),F=cn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&We(l),immediateRender:o,stagger:0,parent:p},L),N&&(F[T.prop]=N),Ti(t._startAt=xe.set(d,F)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ae?t._startAt.revert(Pa):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&We(l)||l&&!g,R=0;R<d.length;R++){if(v=d[R],W=v._gsap||Wc(d)[R]._gsap,t._ptLookup[R]=D={},$l[W.id]&&xi.length&&za(),w=E===d?R:E.indexOf(v),T&&(S=new T).init(v,N||L,t,w,E)!==!1&&(t._pt=V=new qe(t._pt,v,S.name,0,1,S.render,S,0,S.priority),S._props.forEach(function(K){D[K]=V}),S.priority&&(b=1)),!T||N)for(F in L)tn[F]&&(S=ld(F,L,t,w,v,E))?S.priority&&(b=1):D[F]=V=qc.call(t,v,F,"get",L[F],w,E,0,i.stringFilter);t._op&&t._op[R]&&t.kill(v,t._op[R]),M&&t._pt&&(di=t,ce.killTweensOf(v,D,t.globalTime(e)),U=!t.parent,di=0),t._pt&&l&&($l[W.id]=1)}b&&pd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!U,f&&e<=0&&C.render(gn,!0,!0)},eM=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(u=f[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return nc=1,t.vars[e]="+=0",Yc(t,o),nc=0,l?Rs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=me(n)+Re(h.e)),h.b&&(h.b=u.s+Re(h.b))},nM=function(t,e){var n=t[0]?ji(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=$r({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},iM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Le(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ys=function(t,e,n,i,s){return fe(t)?t.call(e,n,i,s):Ee(t)&&~t.indexOf("random(")?Ds(t):t},cd=Gc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ud={};Xe(cd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ud[r]=1});var xe=function(r){Df(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ms(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,d=l.scrollTrigger,p=i.parent||ce,E=(Le(n)||If(n)?ei(n[0]):"length"in i)?[n]:vn(n),M,C,I,L,R,F,V,v;if(o._targets=E.length?Wc(E):Rs("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||xa(c)||xa(u)){i=o.vars;var b=i.easeReverse||i.yoyoEase;if(M=o.timeline=new Ve({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:E}),M.kill(),M.parent=M._dp=Xn(o),M._start=0,f||xa(c)||xa(u)){if(L=E.length,V=f&&$f(f),Fn(f))for(R in f)~cd.indexOf(R)&&(v||(v={}),v[R]=f[R]);for(C=0;C<L;C++)I=ka(i,ud),I.stagger=0,b&&(I.easeReverse=b),v&&$r(I,v),F=E[C],I.duration=+ys(c,Xn(o),C,F,E),I.delay=(+ys(u,Xn(o),C,F,E)||0)-o._delay,!f&&L===1&&I.delay&&(o._delay=u=I.delay,o._start+=u,I.delay=0),M.to(F,I,V?V(C,F,E):0),M._ease=kt.none;M.duration()?c=u=0:o.timeline=0}else if(g){Ms(cn(M.vars.defaults,{ease:"none"})),M._ease=Qi(g.ease||i.ease||"none");var W=0,T,S,D;if(Le(g))g.forEach(function(w){return M.to(E,w,">")}),M.duration();else{I={};for(R in g)R==="ease"||R==="easeEach"||iM(R,g[R],I,g.easeEach);for(R in I)for(T=I[R].sort(function(w,N){return w.t-N.t}),W=0,C=0;C<T.length;C++)S=T[C],D={ease:S.e,duration:(S.t-(C?T[C-1].t:0))/100*c},D[R]=S.v,M.to(E,D,W),W+=D.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!Oc&&(di=Xn(o),ce.killTweensOf(E),di=0),In(p,Xn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===le(p._time)&&We(h)&&Ix(Xn(o))&&p.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-u)||0)),d&&qf(Xn(o),d),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-te&&!u?l:i<te?0:i,f,m,g,_,d,p,E,M;if(!c)Nx(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=le(h%_),h===l?(g=this._repeat,f=c):(d=le(h/_),g=~~d,g&&g===d?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),d=jr(this._tTime,_),f===o&&!a&&this._initted&&g===d)return this._tTime=h,this;g!==d&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(le(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Yf(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==d))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var C=f<o;if(C!==this._inv){var I=C?o:c-o;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=I?(C?-1:1)/I:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(f/c);if(this._from&&(this.ratio=E=1-E),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!d&&(nn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(E,m.d),m=m._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&jl(this,i,s,a),nn(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&nn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&jl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ti(this,1),!s&&!(u&&!o)&&(h||o||p)&&(nn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ls||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yc(this,c),u=this._ease(c/this._dur),eM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(so(this,0),this.parent||Wf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ae),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,di&&di.vars.overwrite!==!0)._first||vs(this),this.parent&&a!==this.timeline.totalDuration()&&Jr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vn(i):o,c=this._ptLookup,u=this._pt,h,f,m,g,_,d,p;if((!s||s==="all")&&Dx(o,l))return s==="all"&&(this._pt=0),vs(this);for(h=this._op=this._op||[],s!=="all"&&(Ee(s)&&(_={},Xe(s,function(E){return _[E]=1}),s=_),s=nM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,m={}):(m=h[p]=h[p]||{},g=s);for(_ in g)d=f&&f[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&io(this,d,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&vs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ss(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ss(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ce.killTweensOf(i,s,a)},t}(Is);cn(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){xe[r]=function(){var t=new Ve,e=Ql.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Zc=function(t,e,n){return t[e]=n},hd=function(t,e,n){return t[e](n)},rM=function(t,e,n,i){return t[e](i.fp,n)},sM=function(t,e,n){return t.setAttribute(e,n)},Kc=function(t,e){return fe(t[e])?hd:Bc(t[e])&&t.setAttribute?sM:Zc},fd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},aM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},dd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},$c=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},oM=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},lM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?io(this,e,"_pt"):e.dep||(n=1),e=i;return!n},cM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},pd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qe=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||fd,this.d=l||this,this.set=c||Zc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=cM,this.m=n,this.mt=s,this.tween=i},r}();Xe(Gc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Hc[r]=1});ln.TweenMax=ln.TweenLite=xe;ln.TimelineLite=ln.TimelineMax=Ve;ce=new Ve({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=sd;var tr=[],La={},uM=[],Eh=0,hM=0,jo=function(t){return(La[t]||uM).map(function(e){return e()})},ic=function(){var t=Date.now(),e=[];t-Eh>2&&(jo("matchMediaInit"),tr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Rn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),jo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Eh=t,jo("matchMedia"))},md=function(){function r(e,n){this.selector=n&&tc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){fe(n)&&(s=i,i=n,n=fe);var a=this,o=function(){var c=ae,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=tc(s)),ae=a,h=i.apply(a,arguments),fe(h)&&a._r.push(h),ae=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===fe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=tr.length;a--;)tr[a].id===this.id&&tr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),fM=function(){function r(e){this.contexts=[],this.scope=e,ae&&ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Fn(n)||(n={matches:n});var a=new md(0,s||this.scope),o=a.conditions={},l,c,u;ae&&!a.selector&&(a.selector=ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Rn.matchMedia(n[c]),l&&(tr.indexOf(a)<0&&tr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ic):l.addEventListener("change",ic)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ha={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return nd(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ee(t)&&(t=vn(t)[0]);var s=ji(t||{}).get,a=n?Gf:Hf;return n==="native"&&(n=""),t&&(e?a((tn[e]&&tn[e].get||s)(t,e,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=vn(t),t.length>1){var i=t.map(function(u){return Ze.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=tn[e],o=ji(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Lr._pt=0,h.init(t,n?u+n:u,Lr,0,[t]),h.render(1,h),Lr._pt&&$c(1,Lr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Ze.to(t,cn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Qi(t.ease,Cs.ease)),xh(Cs,t||{})},config:function(t){return xh(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!ln[o]&&Rs(e+" effect requires "+o+" plugin.")}),Yo[e]=function(o,l,c){return n(vn(o),cn(l||{},s),c)},a&&(Ve.prototype[e]=function(o,l,c){return this.add(Yo[e](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){kt[t]=Qi(e)},parseEase:function(t,e){return arguments.length?Qi(t,e):kt},getById:function(t){return ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,s;for(n.smoothChildTiming=We(t.smoothChildTiming),ce.remove(n),n._dp=0,n._time=n._tTime=ce._time,i=ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=s;return In(ce,n,0),n},context:function(t,e){return t?new md(t,e):ae},matchMedia:function(t){return new fM(t)},matchMediaRefresh:function(){return tr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ic()},addEventListener:function(t,e){var n=La[t]||(La[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=La[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Gx,wrapYoyo:Wx,distribute:$f,random:Jf,snap:jf,normalize:Hx,getUnit:Re,clamp:Bx,splitColor:id,toArray:vn,selector:tc,mapRange:td,pipe:kx,unitize:Vx,interpolate:Xx,shuffle:Kf},install:Of,effects:Yo,ticker:en,updateRoot:Ve.updateRoot,plugins:tn,globalTimeline:ce,core:{PropTween:qe,globals:Bf,Tween:xe,Timeline:Ve,Animation:Is,getCache:ji,_removeLinkedListItem:io,reverting:function(){return Ae},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return Oc=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ha[r]=xe[r]});en.add(Ve.updateRoot);Lr=Ha.to({},{duration:0});var dM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},pM=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=dM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Jo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ee(s)&&(l={},Xe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}pM(o,s)}}}},Ze=Ha.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ae?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Jo("roundProps",ec),Jo("modifiers"),Jo("snap",jf))||Ha;xe.version=Ve.version=Ze.version="3.15.0";Ff=1;zc()&&Qr();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bh,pi,Fr,jc,Ki,Ah,Jc,mM=function(){return typeof window<"u"},ni={},Vi=180/Math.PI,Or=Math.PI/180,Ar=Math.atan2,wh=1e8,Qc=/([A-Z])/g,_M=/(left|right|width|margin|padding|x)/i,gM=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},MM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},SM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_d=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},gd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yM=function(t,e,n){return t.style[e]=n},TM=function(t,e,n){return t.style.setProperty(e,n)},EM=function(t,e,n){return t._gsap[e]=n},bM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},AM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},wM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ue="transform",Ye=ue+"Origin",CM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ni&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Un[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=qn(i,o)}):this.tfm[t]=a.x?a[t]:qn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return Un.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ue)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=ue}(s||e)&&this.props.push(t,e,s[t])},vd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},RM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Qc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Jc(),(!s||!s.isStart)&&!n[ue]&&(vd(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xd=function(t,e){var n={target:t,props:[],revert:RM,save:CM};return t._gsap||Ze.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Md,sc=function(t,e){var n=pi.createElementNS?pi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pi.createElement(t);return n&&n.style?n:pi.createElement(t)},rn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Qc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ts(e)||e,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),ts=function(t,e,n){var i=e||Ki,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ch[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ch[a]:"")+t},ac=function(){mM()&&window.document&&(bh=window,pi=bh.document,Fr=pi.documentElement,Ki=sc("div")||{style:{}},sc("div"),ue=ts(ue),Ye=ue+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Md=!!ts("perspective"),Jc=Ze.core.reverting,jc=1)},Rh=function(t){var e=t.ownerSVGElement,n=sc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fr.removeChild(n),s},Ph=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Sd=function(t){var e,n;try{e=t.getBBox()}catch{e=Rh(t),n=1}return e&&(e.width||e.height)||n||(e=Rh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ph(t,["x","cx","x1"])||0,y:+Ph(t,["y","cy","y1"])||0,width:0,height:0}:e},yd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sd(t))},Ei=function(t,e){if(e){var n=t.style,i;e in ni&&e!==Ye&&(e=ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Qc,"-$1").toLowerCase())):n.removeAttribute(e)}},mi=function(t,e,n,i,s,a){var o=new qe(t._pt,e,n,0,1,a?gd:_d);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Dh={deg:1,rad:1,turn:1},PM={grid:1,flex:1},bi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ki.style,l=_M.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,d,p;if(i===a||!s||Dh[i]||Dh[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&yd(t),(m||a==="%")&&(ni[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],me(m?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===pi||!_.appendChild)&&(_=pi.body),d=_._gsap,d&&m&&d.width&&l&&d.time===en.time&&!d.uncache)return me(s/d.width*h);if(m&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=h+i,g=t[u],E?t.style[e]=E:Ei(t,e)}else(m||a==="%")&&!PM[rn(_,"display")]&&(o.position=rn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ki),g=Ki[u],_.removeChild(Ki),o.position="absolute";return l&&m&&(d=ji(_),d.time=en.time,d.width=_[u]),me(f?g*s/h:g&&s?h/g*s:0)},qn=function(t,e,n,i){var s;return jc||ac(),e in Un&&e!=="transform"&&(e=Un[e],~e.indexOf(",")&&(e=e.split(",")[0])),ni[e]&&e!=="transform"?(s=Ns(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Wa(rn(t,Ye))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ga[e]&&Ga[e](t,e,n)||rn(t,e)||kf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?bi(t,e,s,n)+n:s},DM=function(t,e,n,i){if(!n||n==="none"){var s=ts(e,t,1),a=s&&rn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=rn(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,dd),l=0,c=0,u,h,f,m,g,_,d,p,E,M,C,I;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=rn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=rn(t,e)||i,_?t.style[e]=_:Ei(t,e)),u=[n,i],sd(u),n=u[0],i=u[1],f=n.match(Dr)||[],I=i.match(Dr)||[],I.length){for(;h=Dr.exec(i);)d=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),d!==(_=f[c++]||"")&&(m=parseFloat(_)||0,C=_.substr((m+"").length),d.charAt(1)==="="&&(d=Nr(m,d)+C),p=parseFloat(d),M=d.substr((p+"").length),l=Dr.lastIndex-M.length,M||(M=M||on.units[e]||C,l===i.length&&(i+=M,o.e+=M)),C!==M&&(m=bi(t,e,_,M)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:m,c:p-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?gd:_d;return Nf.test(i)&&(o.e=0),this._pt=o,o},Lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Lh[n]||n,e[1]=Lh[i]||i,e.join(" ")},IM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ni[o]&&(l=1,o=o==="transformOrigin"?Ye:ue),Ei(n,o);l&&(Ei(n,ue),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ns(n,1),a.uncache=1,vd(i)))}},Ga={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,IM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Us=[1,0,0,1,0,0],Td={},Ed=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ih=function(t){var e=rn(t,ue);return Ed(e)?Us:e.substr(7).match(Uf).map(me)},tu=function(t,e){var n=t._gsap||ji(t),i=t.style,s=Ih(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Us:s):(s===Us&&!t.offsetParent&&t!==Fr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Fr.appendChild(t)),s=Ih(t),l?i.display=l:Ei(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Fr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},oc=function(t,e,n,i,s,a){var o=t._gsap,l=s||tu(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],_=l[2],d=l[3],p=l[4],E=l[5],M=e.split(" "),C=parseFloat(M[0])||0,I=parseFloat(M[1])||0,L,R,F,V;n?l!==Us&&(R=m*d-g*_)&&(F=C*(d/R)+I*(-_/R)+(_*E-d*p)/R,V=C*(-g/R)+I*(m/R)-(m*E-g*p)/R,C=F,I=V):(L=Sd(t),C=L.x+(~M[0].indexOf("%")?C/100*L.width:C),I=L.y+(~(M[1]||M[0]).indexOf("%")?I/100*L.height:I)),i||i!==!1&&o.smooth?(p=C-c,E=I-u,o.xOffset=h+(p*m+E*_)-p,o.yOffset=f+(p*g+E*d)-E):o.xOffset=o.yOffset=0,o.xOrigin=C,o.yOrigin=I,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(mi(a,o,"xOrigin",c,C),mi(a,o,"yOrigin",u,I),mi(a,o,"xOffset",h,o.xOffset),mi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",C+" "+I)},Ns=function(t,e){var n=t._gsap||new od(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=rn(t,Ye)||"0",u,h,f,m,g,_,d,p,E,M,C,I,L,R,F,V,v,b,W,T,S,D,w,N,U,K,J,j,et,at,q,Z;return u=h=f=_=d=p=E=M=C=0,m=g=1,n.svg=!!(t.getCTM&&yd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),i.scale=i.rotate=i.translate="none"),R=tu(t,n.svg),n.svg&&(n.uncache?(U=t.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),oc(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,R)),I=n.xOrigin||0,L=n.yOrigin||0,R!==Us&&(b=R[0],W=R[1],T=R[2],S=R[3],u=D=R[4],h=w=R[5],R.length===6?(m=Math.sqrt(b*b+W*W),g=Math.sqrt(S*S+T*T),_=b||W?Ar(W,b)*Vi:0,E=T||S?Ar(T,S)*Vi+_:0,E&&(g*=Math.abs(Math.cos(E*Or))),n.svg&&(u-=I-(I*b+L*T),h-=L-(I*W+L*S))):(Z=R[6],at=R[7],J=R[8],j=R[9],et=R[10],q=R[11],u=R[12],h=R[13],f=R[14],F=Ar(Z,et),d=F*Vi,F&&(V=Math.cos(-F),v=Math.sin(-F),N=D*V+J*v,U=w*V+j*v,K=Z*V+et*v,J=D*-v+J*V,j=w*-v+j*V,et=Z*-v+et*V,q=at*-v+q*V,D=N,w=U,Z=K),F=Ar(-T,et),p=F*Vi,F&&(V=Math.cos(-F),v=Math.sin(-F),N=b*V-J*v,U=W*V-j*v,K=T*V-et*v,q=S*v+q*V,b=N,W=U,T=K),F=Ar(W,b),_=F*Vi,F&&(V=Math.cos(F),v=Math.sin(F),N=b*V+W*v,U=D*V+w*v,W=W*V-b*v,w=w*V-D*v,b=N,D=U),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,p=180-p),m=me(Math.sqrt(b*b+W*W+T*T)),g=me(Math.sqrt(w*w+Z*Z)),F=Ar(D,w),E=Math.abs(F)>2e-4?F*Vi:0,C=q?1/(q<0?-q:q):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ed(rn(t,ue)),N&&t.setAttribute("transform",N))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(m*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=me(m),n.scaleY=me(g),n.rotation=me(_)+o,n.rotationX=me(d)+o,n.rotationY=me(p)+o,n.skewX=E+o,n.skewY=M+o,n.transformPerspective=C+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=Wa(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?NM:Md?bd:UM,n.uncache=0,n},Wa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Qo=function(t,e,n){var i=Re(e);return me(parseFloat(e)+parseFloat(bi(t,"x",n+"px",i)))+i},UM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bd(t,e)},Oi="0deg",_s="0px",Bi=") ",bd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,p=n.force3D,E=n.target,M=n.zOrigin,C="",I=p==="auto"&&t&&t!==1||p===!0;if(M&&(h!==Oi||u!==Oi)){var L=parseFloat(u)*Or,R=Math.sin(L),F=Math.cos(L),V;L=parseFloat(h)*Or,V=Math.cos(L),a=Qo(E,a,R*V*-M),o=Qo(E,o,-Math.sin(L)*-M),l=Qo(E,l,F*V*-M+M)}d!==_s&&(C+="perspective("+d+Bi),(i||s)&&(C+="translate("+i+"%, "+s+"%) "),(I||a!==_s||o!==_s||l!==_s)&&(C+=l!==_s||I?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Bi),c!==Oi&&(C+="rotate("+c+Bi),u!==Oi&&(C+="rotateY("+u+Bi),h!==Oi&&(C+="rotateX("+h+Bi),(f!==Oi||m!==Oi)&&(C+="skew("+f+", "+m+Bi),(g!==1||_!==1)&&(C+="scale("+g+", "+_+Bi),E.style[ue]=C||"translate(0, 0)"},NM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,p=n.yOffset,E=n.forceCSS,M=parseFloat(a),C=parseFloat(o),I,L,R,F,V;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Or,c*=Or,I=Math.cos(l)*h,L=Math.sin(l)*h,R=Math.sin(l-c)*-f,F=Math.cos(l-c)*f,c&&(u*=Or,V=Math.tan(c-u),V=Math.sqrt(1+V*V),R*=V,F*=V,u&&(V=Math.tan(u),V=Math.sqrt(1+V*V),I*=V,L*=V)),I=me(I),L=me(L),R=me(R),F=me(F)):(I=h,F=f,L=R=0),(M&&!~(a+"").indexOf("px")||C&&!~(o+"").indexOf("px"))&&(M=bi(m,"x",a,"px"),C=bi(m,"y",o,"px")),(g||_||d||p)&&(M=me(M+g-(g*I+_*R)+d),C=me(C+_-(g*L+_*F)+p)),(i||s)&&(V=m.getBBox(),M=me(M+i/100*V.width),C=me(C+s/100*V.height)),V="matrix("+I+","+L+","+R+","+F+","+M+","+C+")",m.setAttribute("transform",V),E&&(m.style[ue]=V)},FM=function(t,e,n,i,s){var a=360,o=Ee(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*wh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*wh)%a-~~(c/a)*a)),t._pt=f=new qe(t._pt,e,n,i,c,vM),f.e=u,f.u="deg",t._props.push(n),f},Uh=function(t,e){for(var n in e)t[n]=e[n];return t},OM=function(t,e,n){var i=Uh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ue]=e,o=Ns(n,1),Ei(n,ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ue],a[ue]=e,o=Ns(n,1),a[ue]=c);for(l in ni)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Re(c),g=Re(u),h=m!==g?bi(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new qe(t._pt,o,l,h,f-h,rc),t._pt.u=g||0,t._props.push(l));Uh(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Ga[t>1?"border"+r:r]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return qn(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,m,h)}});var Ad={name:"css",register:ac,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,m,g,_,d,p,E,M,C,I,L,R,F,V;jc||ac(),this.styles=this.styles||xd(t),F=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(tn[_]&&ld(_,e,n,i,t,s)))){if(m=typeof u,g=Ga[_],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ds(u)),g)g(this,t,_,u,n)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Mi.lastIndex=0,Mi.test(c)||(d=Re(c),p=Re(u),p?d!==p&&(c=bi(t,_,c,p)+p):d&&(u+=d)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),F.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ee(c)&&~c.indexOf("random(")&&(c=Ds(c)),Re(c+"")||c==="auto"||(c+=on.units[_]||Re(qn(t,_))||""),(c+"").charAt(1)==="="&&(c=qn(t,_))):c=qn(t,_),f=parseFloat(c),E=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Un&&(_==="autoAlpha"&&(f===1&&qn(t,"visibility")==="hidden"&&h&&(f=0),F.push("visibility",0,o.visibility),mi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Un[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ni,M){if(this.styles.save(_),V=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=rn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=rn(t,"perspective"),v?t.style.perspective=v:Ei(t,"perspective")}h=parseFloat(u)}if(C||(I=t._gsap,I.renderTransform&&!e.parseTransform||Ns(t,e.parseTransform),L=e.smoothOrigin!==!1&&I.smooth,C=this._pt=new qe(this._pt,o,ue,0,1,I.renderTransform,I,0,-1),C.dep=1),_==="scale")this._pt=new qe(this._pt,I,"scaleY",I.scaleY,(E?Nr(I.scaleY,E+h):h)-I.scaleY||0,rc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){F.push(Ye,0,o[Ye]),u=LM(u),I.svg?oc(t,u,0,L,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==I.zOrigin&&mi(this,I,"zOrigin",I.zOrigin,p),mi(this,o,_,Wa(c),Wa(u)));continue}else if(_==="svgOrigin"){oc(t,u,1,L,0,this);continue}else if(_ in Td){FM(this,I,_,f,E?Nr(f,E+u):u);continue}else if(_==="smoothOrigin"){mi(this,I,"smooth",I.smooth,u);continue}else if(_==="force3D"){I[_]=u;continue}else if(_==="transform"){OM(this,u,t);continue}}else _ in o||(_=ts(_)||_);if(M||(h||h===0)&&(f||f===0)&&!gM.test(u)&&_ in o)d=(c+"").substr((f+"").length),h||(h=0),p=Re(u)||(_ in on.units?on.units[_]:d),d!==p&&(f=bi(t,_,c,p)),this._pt=new qe(this._pt,M?I:o,_,f,(E?Nr(f,E+h):h)-f,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?SM:rc),this._pt.u=p||0,M&&V!==u?(this._pt.b=c,this._pt.e=V,this._pt.r=MM):d!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=xM);else if(_ in o)DM.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Vc(_,u);continue}M||(_ in o?F.push(_,0,o[_]):typeof t[_]=="function"?F.push(_,2,t[_]()):F.push(_,1,c||t[_])),a.push(_)}}R&&pd(this)},render:function(t,e){if(e.tween._time||!Jc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:qn,aliases:Un,getSetter:function(t,e,n){var i=Un[e];return i&&i.indexOf(",")<0&&(e=i),e in ni&&e!==Ye&&(t._gsap.x||qn(t,"x"))?n&&Ah===n?e==="scale"?bM:EM:(Ah=n||{})&&(e==="scale"?AM:wM):t.style&&!Bc(t.style[e])?yM:~e.indexOf("-")?TM:Kc(t,e)},core:{_removeProperty:Ei,_getMatrix:tu}};Ze.utils.checkPrefix=ts;Ze.core.getStyleSaver=xd;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){ni[s]=1});Xe(t,function(s){on.units[s]="deg",Td[s]=1}),Un[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");Un[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});Ze.registerPlugin(Ad);var oe=Ze.registerPlugin(Ad)||Ze;oe.core.Tween;const Be=Math.PI*2;function Nh(r,t){const e=Math.cos(t),n=Math.sin(t),i=r.y*e-r.z*n,s=r.y*n+r.z*e;r.y=i,r.z=s}function BM(r,t){const e=Math.cos(t),n=Math.sin(t),i=r.x*e-r.y*n,s=r.x*n+r.y*e;r.x=i,r.y=s}const wr=r=>r<0?0:r>1?1:r,ir=[{name:"Vortex Bloom",hue:"pink",camZ:46,tiltX:-.62,tiltZ:0,spinAxis:"y",spinSpeed:1,turbAmp:1,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=Math.pow(n,.65)*30,l=r%5/5*Be+a*.16+(i-.5)*.55*(1+a*.04);e.x=Math.cos(l)*a,e.y=(s-.5)*(2.5+a*.18),e.z=Math.sin(l)*a,e.t=wr(a/30+(i-.5)*.15)}},{name:"Verdant Spiral",hue:"green",camZ:48,tiltX:.55,tiltZ:0,spinAxis:"y",spinSpeed:.95,turbAmp:1,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=Math.pow(n,.65)*30,l=r%4/4*Be+a*.19+(i-.5)*.5*(1+a*.04);e.x=Math.cos(l)*a,e.y=(s-.5)*(2.5+a*.16),e.z=Math.sin(l)*a,e.t=wr(1-(a/30+(i-.5)*.15)),e.spin=-1}},{name:"Double Helix",hue:"pink",camZ:44,tiltX:0,tiltZ:.16,spinAxis:"y",spinSpeed:.8,turbAmp:.7,turbFreq:1,flow:null,eq:!1,sizeScale:1.7,generate(r,t,e,n,i,s){const a=r%2,o=r/t,l=o*Math.PI*10,c=15+(i-.5)*2;if(s<.11){const u=n*2-1;e.x=Math.cos(l)*c*u,e.z=Math.sin(l)*c*u,e.t=.5}else{const u=l+a*Math.PI;e.x=Math.cos(u)*c,e.z=Math.sin(u)*c,e.t=a}e.y=-27+o*54+(n-.5)*1.4}},{name:"Neon Halo",hue:"green",camZ:44,tiltX:-.5,tiltZ:0,spinAxis:"y",spinSpeed:1.1,turbAmp:.9,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=n*Be,o=i*Be,l=4.2*Math.sqrt(s),c=20+l*Math.cos(o);e.x=Math.cos(a)*c,e.z=Math.sin(a)*c,e.y=l*Math.sin(o),e.t=.5+.5*Math.sin(a*3)}},{name:"Trefoil Knot",hue:"pink",camZ:46,tiltX:-.4,tiltZ:0,spinAxis:"y",spinSpeed:.9,turbAmp:1,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=n*Be,o=7.5,l=2+Math.cos(3*a);e.x=Math.cos(2*a)*l*o+(i-.5)*2.4,e.y=Math.sin(3*a)*o+(s-.5)*2.4,e.z=Math.sin(2*a)*l*o+(i+s-1)*1.2,e.t=.5+.5*Math.sin(a*2+1)}},{name:"Pulse Sphere",hue:"green",camZ:50,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:.5,turbAmp:1.6,turbFreq:.9,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=2*n-1,o=Math.sqrt(1-a*a),l=i*Be,c=19+(s-.5)*2.5;e.x=o*Math.cos(l)*c,e.y=a*c,e.z=o*Math.sin(l)*c,e.t=wr(n)}},{name:"Supernova",hue:"pink",camZ:52,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:1,turbAmp:1.8,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=r%4,o=[9,15,21,27][a]+(n-.5)*1.8,l=2*i-1,c=Math.sqrt(1-l*l),u=s*Be;e.x=c*Math.cos(u)*o,e.y=l*o,e.z=c*Math.sin(u)*o,e.t=a%2,e.bright=.9,e.spin=a%2?-.7:1}},{name:"Warp Tunnel",hue:"green",camZ:46,tiltX:0,tiltZ:0,spinAxis:"z",spinSpeed:.6,turbAmp:.8,turbFreq:1,flow:{speed:26,min:-85,max:35},eq:!1,generate(r,t,e,n,i,s){const a=13+n*5,o=i*Be,l=-85+s*120;e.x=Math.cos(o)*a,e.y=Math.sin(o)*a,e.z=l,e.t=.5+.5*Math.sin(l*.25)}},{name:"Neon Tide",hue:"green",camZ:50,tiltX:-.15,tiltZ:0,spinAxis:"y",spinSpeed:.05,turbAmp:2.2,turbFreq:.8,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=r%200,o=r/200|0;e.x=-33+a*(66/199),e.z=-34+o*(56/199),e.y=-9+(n-.5)*.6,e.t=.5+.5*Math.sin(e.x*.12),e.bright=.9,e.phase=e.x*.32+e.z*.45,e.freq=1}},{name:"Star Burst",hue:"pink",camZ:54,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:.3,turbAmp:1.5,turbFreq:1.1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=2*n-1,o=Math.sqrt(1-a*a),l=i*Be,c=7+Math.pow(s,1.6)*32;e.x=o*Math.cos(l)*c,e.y=a*c,e.z=o*Math.sin(l)*c,e.t=wr((c-7)/32)}},{name:"Gemini Discs",hue:"pink",camZ:50,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:1,turbAmp:.8,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=r%2,o=Math.pow(n,.6)*17,l=i*Be;e.x=Math.cos(l)*o,e.y=(s-.5)*1.2,e.z=Math.sin(l)*o,Nh(e,a?.55:-.55),e.y+=a?5.5:-5.5,e.t=a,e.spin=a?-1:1}},{name:"Orbitals",hue:"green",camZ:52,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:.9,turbAmp:.5,turbFreq:1,flow:null,eq:!1,generate(r,t,e,n,i,s){const a=r%8,o=10+a*2.3+(i-.5)*.9,l=n*Be;e.x=Math.cos(l)*o,e.y=(s-.5)*.9,e.z=Math.sin(l)*o,Nh(e,a*.4-1.4),BM(e,a*.77),e.t=a%2,e.spin=a%2?-.8:.8}},{name:"Pulse Array",hue:"pink",camZ:48,tiltX:-.35,tiltZ:0,spinAxis:"y",spinSpeed:.35,turbAmp:.4,turbFreq:1,flow:null,eq:!0,generate(r,t,e,n,i,s){const a=r%64,o=a%3,l=a/64*Be+(s-.5)*.04,c=19+(n-.5)*1.6;e.x=Math.cos(l)*c,e.z=Math.sin(l)*c,e.y=-7+i*10,e.t=o===0?0:o===1?.5:1,e.aux=o+i*.9}},{name:"Phoenix Wings",hue:"pink",camZ:38,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:.25,turbAmp:1.1,turbFreq:1,flow:null,eq:!1,sizeScale:1.55,generate(r,t,e,n,i,s){const a=n*Be*2,o=Math.exp(Math.sin(a))-2*Math.cos(4*a)+Math.pow(Math.sin((2*a-Math.PI)/24),5),l=8.6;e.x=Math.sin(a)*o*l+(i-.5)*.9,e.y=Math.cos(a)*o*l*.92+(s-.5)*.9,e.z=(i-.5)*3,e.t=wr(Math.abs(e.x)/26)}},{name:"Geyser",hue:"pink",camZ:42,tiltX:0,tiltZ:0,spinAxis:"y",spinSpeed:.6,turbAmp:1.2,turbFreq:1.1,flow:{speed:12,min:-14,max:16},eq:!1,sizeScale:1.6,generate(r,t,e,n,i,s){const a=n,o=1.2+Math.pow(a,2.2)*20+(i-.5)*2,l=s*Be;e.x=Math.cos(l)*o,e.y=-14+a*30,e.z=Math.sin(l)*o,e.t=wr(a)}},{name:"Cube Matrix",hue:"green",camZ:56,tiltX:-.3,tiltZ:0,spinAxis:"y",spinSpeed:.4,turbAmp:.9,turbFreq:.9,flow:null,eq:!1,generate(r,t,e,n,i,s){if(r<34*34*34){const c=r%34,u=(r/34|0)%34,h=r/(34*34)|0;e.x=c*1.55-25.575,e.y=u*1.55-25.575,e.z=h*1.55-25.575,e.t=(c+u+h)%2}else e.x=(n-.5)*2*25.575,e.y=(i-.5)*2*25.575,e.z=(s-.5)*2*25.575,e.t=.5;e.bright=.85}}];var zM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wd={exports:{}};(function(r,t){(function(e,n){r.exports=n()})(zM,function(){function e(T,S,D){for(var w,N=0,U=S.length;N<U;N++)!w&&N in S||(w||(w=Array.prototype.slice.call(S,0,N)),w[N]=S[N]);return T.concat(w||Array.prototype.slice.call(S))}var n=Object.freeze({__proto__:null,blackman:function(T){for(var S=new Float32Array(T),D=2*Math.PI/(T-1),w=2*D,N=0;N<T/2;N++)S[N]=.42-.5*Math.cos(N*D)+.08*Math.cos(N*w);for(N=Math.ceil(T/2);N>0;N--)S[T-N]=S[N-1];return S},hamming:function(T){for(var S=new Float32Array(T),D=0;D<T;D++)S[D]=.54-.46*Math.cos(2*Math.PI*(D/T-1));return S},hanning:function(T){for(var S=new Float32Array(T),D=0;D<T;D++)S[D]=.5-.5*Math.cos(2*Math.PI*D/(T-1));return S},sine:function(T){for(var S=Math.PI/(T-1),D=new Float32Array(T),w=0;w<T;w++)D[w]=Math.sin(S*w);return D}}),i={};function s(T){for(;T%2==0&&T>1;)T/=2;return T===1}function a(T,S){if(S!=="rect"){if(S!==""&&S||(S="hanning"),i[S]||(i[S]={}),!i[S][T.length])try{i[S][T.length]=n[S](T.length)}catch{throw new Error("Invalid windowing function")}T=function(D,w){for(var N=[],U=0;U<Math.min(D.length,w.length);U++)N[U]=D[U]*w[U];return N}(T,i[S][T.length])}return T}function o(T,S,D){for(var w=new Float32Array(T),N=0;N<w.length;N++)w[N]=N*S/D,w[N]=13*Math.atan(w[N]/1315.8)+3.5*Math.atan(Math.pow(w[N]/7518,2));return w}function l(T){return Float32Array.from(T)}function c(T){return 1125*Math.log(1+T/700)}function u(T,S,D){for(var w,N=new Float32Array(T+2),U=new Float32Array(T+2),K=S/2,J=c(0),j=(c(K)-J)/(T+1),et=new Array(T+2),at=0;at<N.length;at++)N[at]=at*j,U[at]=(w=N[at],700*(Math.exp(w/1125)-1)),et[at]=Math.floor((D+1)*U[at]/S);for(var q=new Array(T),Z=0;Z<q.length;Z++){for(q[Z]=new Array(D/2+1).fill(0),at=et[Z];at<et[Z+1];at++)q[Z][at]=(at-et[Z])/(et[Z+1]-et[Z]);for(at=et[Z+1];at<et[Z+2];at++)q[Z][at]=(et[Z+2]-at)/(et[Z+2]-et[Z+1])}return q}function h(T,S,D,w,N,U,K){w===void 0&&(w=5),N===void 0&&(N=2),U===void 0&&(U=!0),K===void 0&&(K=440);var J=Math.floor(D/2)+1,j=new Array(D).fill(0).map(function(bt,It){return T*function(At,O){return Math.log2(16*At/O)}(S*It/D,K)});j[0]=j[1]-1.5*T;var et,at,q,Z=j.slice(1).map(function(bt,It){return Math.max(bt-j[It])},1).concat([1]),ct=Math.round(T/2),ot=new Array(T).fill(0).map(function(bt,It){return j.map(function(At){return(10*T+ct+At-It)%T-ct})}),vt=ot.map(function(bt,It){return bt.map(function(At,O){return Math.exp(-.5*Math.pow(2*ot[It][O]/Z[O],2))})});if(at=(et=vt)[0].map(function(){return 0}),q=et.reduce(function(bt,It){return It.forEach(function(At,O){bt[O]+=Math.pow(At,2)}),bt},at).map(Math.sqrt),vt=et.map(function(bt,It){return bt.map(function(At,O){return At/(q[O]||1)})}),N){var Mt=j.map(function(bt){return Math.exp(-.5*Math.pow((bt/T-w)/N,2))});vt=vt.map(function(bt){return bt.map(function(It,At){return It*Mt[At]})})}return U&&(vt=e(e([],vt.slice(3),!0),vt.slice(0,3))),vt.map(function(bt){return bt.slice(0,J)})}function f(T,S){for(var D=0,w=0,N=0;N<S.length;N++)D+=Math.pow(N,T)*Math.abs(S[N]),w+=S[N];return D/w}function m(T){var S=T.ampSpectrum,D=T.barkScale,w=T.numberOfBarkBands,N=w===void 0?24:w;if(typeof S!="object"||typeof D!="object")throw new TypeError;var U=N,K=new Float32Array(U),J=0,j=S,et=new Int32Array(U+1);et[0]=0;for(var at=D[j.length-1]/U,q=1,Z=0;Z<j.length;Z++)for(;D[Z]>at;)et[q++]=Z,at=q*D[j.length-1]/U;for(et[U]=j.length-1,Z=0;Z<U;Z++){for(var ct=0,ot=et[Z];ot<et[Z+1];ot++)ct+=j[ot];K[Z]=Math.pow(ct,.23)}for(Z=0;Z<K.length;Z++)J+=K[Z];return{specific:K,total:J}}function g(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;for(var D=new Float32Array(S.length),w=0;w<D.length;w++)D[w]=Math.pow(S[w],2);return D}function _(T){var S=T.ampSpectrum,D=T.melFilterBank,w=T.bufferSize;if(typeof S!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof D!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var N=g({ampSpectrum:S}),U=D.length,K=Array(U),J=new Float32Array(U),j=0;j<J.length;j++){K[j]=new Float32Array(w/2),J[j]=0;for(var et=0;et<w/2;et++)K[j][et]=D[j][et]*N[et],J[j]+=K[j][et];J[j]=Math.log(J[j]+1)}return Array.prototype.slice.call(J)}function d(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var p=null,E=d(function(T,S){var D=T.length;return S=S||2,p&&p[D]||function(w){(p=p||{})[w]=new Array(w*w);for(var N=Math.PI/w,U=0;U<w;U++)for(var K=0;K<w;K++)p[w][K+U*w]=Math.cos(N*(K+.5)*U)}(D),T.map(function(){return 0}).map(function(w,N){return S*T.reduce(function(U,K,J,j){return U+K*p[D][J+N*D]},0)})}),M=Object.freeze({__proto__:null,amplitudeSpectrum:function(T){return T.ampSpectrum},buffer:function(T){return T.signal},chroma:function(T){var S=T.ampSpectrum,D=T.chromaFilterBank;if(typeof S!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof D!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var w=D.map(function(U,K){return S.reduce(function(J,j,et){return J+j*U[et]},0)}),N=Math.max.apply(Math,w);return N?w.map(function(U){return U/N}):w},complexSpectrum:function(T){return T.complexSpectrum},energy:function(T){var S=T.signal;if(typeof S!="object")throw new TypeError;for(var D=0,w=0;w<S.length;w++)D+=Math.pow(Math.abs(S[w]),2);return D},loudness:m,melBands:_,mfcc:function(T){var S=T.ampSpectrum,D=T.melFilterBank,w=T.numberOfMFCCCoefficients,N=T.bufferSize,U=Math.min(40,Math.max(1,w||13));if(D.length<U)throw new Error("Insufficient filter bank for requested number of coefficients");var K=_({ampSpectrum:S,melFilterBank:D,bufferSize:N});return E(K).slice(0,U)},perceptualSharpness:function(T){for(var S=m({ampSpectrum:T.ampSpectrum,barkScale:T.barkScale}),D=S.specific,w=0,N=0;N<D.length;N++)w+=N<15?(N+1)*D[N+1]:.066*Math.exp(.171*(N+1));return w*=.11/S.total},perceptualSpread:function(T){for(var S=m({ampSpectrum:T.ampSpectrum,barkScale:T.barkScale}),D=0,w=0;w<S.specific.length;w++)S.specific[w]>D&&(D=S.specific[w]);return Math.pow((S.total-D)/S.total,2)},powerSpectrum:g,rms:function(T){var S=T.signal;if(typeof S!="object")throw new TypeError;for(var D=0,w=0;w<S.length;w++)D+=Math.pow(S[w],2);return D/=S.length,D=Math.sqrt(D)},spectralCentroid:function(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;return f(1,S)},spectralCrest:function(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;var D=0,w=-1/0;return S.forEach(function(N){D+=Math.pow(N,2),w=N>w?N:w}),D/=S.length,D=Math.sqrt(D),w/D},spectralFlatness:function(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;for(var D=0,w=0,N=0;N<S.length;N++)D+=Math.log(S[N]),w+=S[N];return Math.exp(D/S.length)*S.length/w},spectralFlux:function(T){var S=T.signal,D=T.previousSignal,w=T.bufferSize;if(typeof S!="object"||typeof D!="object")throw new TypeError;for(var N=0,U=-w/2;U<S.length/2-1;U++)x=Math.abs(S[U])-Math.abs(D[U]),N+=(x+Math.abs(x))/2;return N},spectralKurtosis:function(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;var D=S,w=f(1,D),N=f(2,D),U=f(3,D),K=f(4,D);return(-3*Math.pow(w,4)+6*w*N-4*w*U+K)/Math.pow(Math.sqrt(N-Math.pow(w,2)),4)},spectralRolloff:function(T){var S=T.ampSpectrum,D=T.sampleRate;if(typeof S!="object")throw new TypeError;for(var w=S,N=D/(2*(w.length-1)),U=0,K=0;K<w.length;K++)U+=w[K];for(var J=.99*U,j=w.length-1;U>J&&j>=0;)U-=w[j],--j;return(j+1)*N},spectralSkewness:function(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;var D=f(1,S),w=f(2,S),N=f(3,S);return(2*Math.pow(D,3)-3*D*w+N)/Math.pow(Math.sqrt(w-Math.pow(D,2)),3)},spectralSlope:function(T){var S=T.ampSpectrum,D=T.sampleRate,w=T.bufferSize;if(typeof S!="object")throw new TypeError;for(var N=0,U=0,K=new Float32Array(S.length),J=0,j=0,et=0;et<S.length;et++){N+=S[et];var at=et*D/w;K[et]=at,J+=at*at,U+=at,j+=at*S[et]}return(S.length*j-U*N)/(N*(J-Math.pow(U,2)))},spectralSpread:function(T){var S=T.ampSpectrum;if(typeof S!="object")throw new TypeError;return Math.sqrt(f(2,S)-Math.pow(f(1,S),2))},zcr:function(T){var S=T.signal;if(typeof S!="object")throw new TypeError;for(var D=0,w=1;w<S.length;w++)(S[w-1]>=0&&S[w]<0||S[w-1]<0&&S[w]>=0)&&D++;return D}});function C(T){if(Array.isArray(T)){for(var S=0,D=Array(T.length);S<T.length;S++)D[S]=T[S];return D}return Array.from(T)}var I={},L={},R={bitReverseArray:function(T){if(I[T]===void 0){for(var S=(T-1).toString(2).length,D="0".repeat(S),w={},N=0;N<T;N++){var U=N.toString(2);U=D.substr(U.length)+U,U=[].concat(C(U)).reverse().join(""),w[N]=parseInt(U,2)}I[T]=w}return I[T]},multiply:function(T,S){return{real:T.real*S.real-T.imag*S.imag,imag:T.real*S.imag+T.imag*S.real}},add:function(T,S){return{real:T.real+S.real,imag:T.imag+S.imag}},subtract:function(T,S){return{real:T.real-S.real,imag:T.imag-S.imag}},euler:function(T,S){var D=-2*Math.PI*T/S;return{real:Math.cos(D),imag:Math.sin(D)}},conj:function(T){return T.imag*=-1,T},constructComplexArray:function(T){var S={};S.real=T.real===void 0?T.slice():T.real.slice();var D=S.real.length;return L[D]===void 0&&(L[D]=Array.apply(null,Array(D)).map(Number.prototype.valueOf,0)),S.imag=L[D].slice(),S}},F=function(T){var S={};T.real===void 0||T.imag===void 0?S=R.constructComplexArray(T):(S.real=T.real.slice(),S.imag=T.imag.slice());var D=S.real.length,w=Math.log2(D);if(Math.round(w)!=w)throw new Error("Input size must be a power of 2.");if(S.real.length!=S.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var N=R.bitReverseArray(D),U={real:[],imag:[]},K=0;K<D;K++)U.real[N[K]]=S.real[K],U.imag[N[K]]=S.imag[K];for(var J=0;J<D;J++)S.real[J]=U.real[J],S.imag[J]=U.imag[J];for(var j=1;j<=w;j++)for(var et=Math.pow(2,j),at=0;at<et/2;at++)for(var q=R.euler(at,et),Z=0;Z<D/et;Z++){var ct=et*Z+at,ot=et*Z+at+et/2,vt={real:S.real[ct],imag:S.imag[ct]},Mt={real:S.real[ot],imag:S.imag[ot]},bt=R.multiply(q,Mt),It=R.subtract(vt,bt);S.real[ot]=It.real,S.imag[ot]=It.imag;var At=R.add(bt,vt);S.real[ct]=At.real,S.imag[ct]=At.imag}return S},V=F,v=function(){function T(S,D){var w=this;if(this._m=D,!S.audioContext)throw this._m.errors.noAC;if(S.bufferSize&&!s(S.bufferSize))throw this._m._errors.notPow2;if(!S.source)throw this._m._errors.noSource;this._m.audioContext=S.audioContext,this._m.bufferSize=S.bufferSize||this._m.bufferSize||256,this._m.hopSize=S.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=S.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=S.callback,this._m.windowingFunction=S.windowingFunction||"hanning",this._m.featureExtractors=M,this._m.EXTRACTION_STARTED=S.startImmediately||!1,this._m.channel=typeof S.channel=="number"?S.channel:0,this._m.inputs=S.inputs||1,this._m.outputs=S.outputs||1,this._m.numberOfMFCCCoefficients=S.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=S.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=S.featureExtractors||[],this._m.barkScale=o(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=u(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(S.source),this._m.spn.onaudioprocess=function(N){var U;w._m.inputData!==null&&(w._m.previousInputData=w._m.inputData),w._m.inputData=N.inputBuffer.getChannelData(w._m.channel),w._m.previousInputData?((U=new Float32Array(w._m.previousInputData.length+w._m.inputData.length-w._m.hopSize)).set(w._m.previousInputData.slice(w._m.hopSize)),U.set(w._m.inputData,w._m.previousInputData.length-w._m.hopSize)):U=w._m.inputData;var K=function(J,j,et){if(J.length<j)throw new Error("Buffer is too short for frame length");if(et<1)throw new Error("Hop length cannot be less that 1");if(j<1)throw new Error("Frame length cannot be less that 1");var at=1+Math.floor((J.length-j)/et);return new Array(at).fill(0).map(function(q,Z){return J.slice(Z*et,Z*et+j)})}(U,w._m.bufferSize,w._m.hopSize);K.forEach(function(J){w._m.frame=J;var j=w._m.extract(w._m._featuresToExtract,w._m.frame,w._m.previousFrame);typeof w._m.callback=="function"&&w._m.EXTRACTION_STARTED&&w._m.callback(j),w._m.previousFrame=w._m.frame})}}return T.prototype.start=function(S){this._m._featuresToExtract=S||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},T.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},T.prototype.setSource=function(S){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=S,this._m.source.connect(this._m.spn)},T.prototype.setChannel=function(S){S<=this._m.inputs?this._m.channel=S:console.error("Channel ".concat(S," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(S," when instantiating the MeydaAnalyzer"))},T.prototype.get=function(S){return this._m.inputData?this._m.extract(S||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},T}(),b={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:M,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:a,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(T){return new v(T,Object.assign({},b))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(T,S,D){var w=this;if(!S)throw this._errors.invalidInput;if(typeof S!="object")throw this._errors.invalidInput;if(!T)throw this._errors.featureUndef;if(!s(S.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=o(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=u(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=h(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in S&&S.buffer===void 0?this.signal=l(S):this.signal=S;var N=W(S,this.windowingFunction,this.bufferSize);if(this.signal=N.windowedSignal,this.complexSpectrum=N.complexSpectrum,this.ampSpectrum=N.ampSpectrum,D){var U=W(D,this.windowingFunction,this.bufferSize);this.previousSignal=U.windowedSignal,this.previousComplexSpectrum=U.complexSpectrum,this.previousAmpSpectrum=U.ampSpectrum}var K=function(J){return w.featureExtractors[J]({ampSpectrum:w.ampSpectrum,chromaFilterBank:w.chromaFilterBank,complexSpectrum:w.complexSpectrum,signal:w.signal,bufferSize:w.bufferSize,sampleRate:w.sampleRate,barkScale:w.barkScale,melFilterBank:w.melFilterBank,previousSignal:w.previousSignal,previousAmpSpectrum:w.previousAmpSpectrum,previousComplexSpectrum:w.previousComplexSpectrum,numberOfMFCCCoefficients:w.numberOfMFCCCoefficients,numberOfBarkBands:w.numberOfBarkBands})};if(typeof T=="object")return T.reduce(function(J,j){var et;return Object.assign({},J,((et={})[j]=K(j),et))},{});if(typeof T=="string")return K(T);throw this._errors.invalidFeatureFmt}},W=function(T,S,D){var w={};T.buffer===void 0?w.signal=l(T):w.signal=T,w.windowedSignal=a(w.signal,S),w.complexSpectrum=V(w.windowedSignal),w.ampSpectrum=new Float32Array(D/2);for(var N=0;N<D/2;N++)w.ampSpectrum[N]=Math.sqrt(Math.pow(w.complexSpectrum.real[N],2)+Math.pow(w.complexSpectrum.imag[N],2));return w};return typeof window<"u"&&(window.Meyda=b),b})})(wd);var VM=wd.exports;const HM=kM(VM);var GM="realtime-bpm-processor",WM=200,XM=1,qM=`"use strict";
(() => {
  // src/core/consts.ts
  var realtimeBpmProcessorName = "realtime-bpm-processor";
  var startThreshold = 0.95;
  var minValidThreshold = 0.2;
  var minPeaks = 15;
  var thresholdStep = 0.05;
  var minBpmRange = 90;
  var maxBpmRange = 180;
  var peakSkipDuration = 0.25;
  var maxIntervalComparisons = 10;
  var defaultBufferSize = 4096;
  var defaultStabilizationTime = 2e4;
  var defaultMuteTimeInIndexes = 1e4;

  // src/core/utils.ts
  async function descendingOverThresholds(onThreshold, minValidThreshold2 = minValidThreshold, startThreshold2 = startThreshold, thresholdStep2 = thresholdStep) {
    let threshold = startThreshold2;
    do {
      threshold -= thresholdStep2;
      const shouldExit = await onThreshold(threshold);
      if (shouldExit) {
        break;
      }
    } while (threshold > minValidThreshold2);
  }
  function generateThresholdMap(initialValueFactory, minValidThreshold2 = minValidThreshold, startThreshold2 = startThreshold, thresholdStep2 = thresholdStep) {
    const object = {};
    let threshold = startThreshold2;
    do {
      threshold -= thresholdStep2;
      object[threshold.toString()] = initialValueFactory();
    } while (threshold > minValidThreshold2);
    return object;
  }
  function generateValidPeaksModel(minValidThreshold2 = minValidThreshold, startThreshold2 = startThreshold, thresholdStep2 = thresholdStep) {
    return generateThresholdMap(
      () => [],
      minValidThreshold2,
      startThreshold2,
      thresholdStep2
    );
  }
  function generateNextIndexPeaksModel(minValidThreshold2 = minValidThreshold, startThreshold2 = startThreshold, thresholdStep2 = thresholdStep) {
    return generateThresholdMap(
      () => 0,
      minValidThreshold2,
      startThreshold2,
      thresholdStep2
    );
  }
  function chunkAggregator(bufferSize = defaultBufferSize) {
    const buffer = new Float32Array(bufferSize);
    let bytesWritten = 0;
    return function(pcmData) {
      if (bytesWritten >= bufferSize) {
        bytesWritten = 0;
      }
      const writable = Math.min(pcmData.length, bufferSize - bytesWritten);
      buffer.set(pcmData.subarray(0, writable), bytesWritten);
      bytesWritten += writable;
      const full = bytesWritten >= bufferSize;
      return {
        isBufferFull: full,
        // Full case: return the shared buffer (safe because RealTimeBpmProcessor's
        // analysisInProgress guard prevents a second analyzeChunk from reading
        // the buffer while a new chunk is being written).
        // Partial case: zero-copy view matching the written length.
        buffer: full ? buffer : buffer.subarray(0, bytesWritten),
        bufferSize
      };
    };
  }
  function computeIndexesToSkip(durationSeconds, sampleRate2) {
    return Math.round(durationSeconds * sampleRate2);
  }

  // src/core/peak-detection.ts
  function findPeaksAtThreshold({
    audioSampleRate,
    data,
    threshold,
    offset = 0
  }) {
    if (threshold < 0 || threshold > 1) {
      throw new Error(
        "Invalid threshold: " + threshold + ". Threshold must be between 0 and 1."
      );
    }
    if (audioSampleRate <= 0) {
      throw new Error(
        "Invalid sample rate: " + audioSampleRate + ". Sample rate must be positive."
      );
    }
    const peaks = [];
    const skipForwardIndexes = computeIndexesToSkip(
      peakSkipDuration,
      audioSampleRate
    );
    const { length } = data;
    for (let i = offset; i < length; i += 1) {
      if (data[i] > threshold) {
        peaks.push(i);
        i += skipForwardIndexes - 1;
      }
    }
    return {
      peaks,
      threshold
    };
  }

  // src/core/tempo.ts
  async function computeBpm({
    audioSampleRate,
    data
  }) {
    const minPeaks2 = minPeaks;
    let hasPeaks = false;
    let foundThreshold = minValidThreshold;
    await descendingOverThresholds(async (threshold) => {
      if (hasPeaks) {
        return true;
      }
      if (data[threshold] && data[threshold].length > minPeaks2) {
        hasPeaks = true;
        foundThreshold = threshold;
      }
      return false;
    });
    if (hasPeaks && foundThreshold) {
      const intervals = identifyIntervals(data[foundThreshold]);
      const tempos = groupByTempo({ audioSampleRate, intervalCounts: intervals });
      const candidates = getTopCandidates(tempos);
      const bpmCandidates = {
        bpm: candidates,
        threshold: foundThreshold
      };
      return bpmCandidates;
    }
    return {
      bpm: [],
      threshold: foundThreshold
    };
  }
  function getTopCandidates(candidates, length = 5) {
    return candidates.sort((a, b) => b.count - a.count).slice(0, length);
  }
  function identifyIntervals(peaks) {
    const intervals = [];
    for (let n = 0; n < peaks.length; n++) {
      for (let i = 1; i < maxIntervalComparisons; i++) {
        const peakIndex = n + i;
        if (peakIndex >= peaks.length) {
          break;
        }
        const interval = peaks[peakIndex] - peaks[n];
        const foundInterval = intervals.find(
          (intervalCount) => intervalCount.interval === interval
        );
        if (foundInterval) {
          const index = intervals.indexOf(foundInterval);
          intervals[index] = {
            interval: foundInterval.interval,
            count: foundInterval.count + 1
          };
        } else {
          intervals.push({
            interval,
            count: 1
          });
        }
      }
    }
    return intervals;
  }
  function groupByTempo({
    audioSampleRate,
    intervalCounts
  }) {
    const tempoCounts = [];
    for (const intervalCount of intervalCounts) {
      if (intervalCount.interval === 0) {
        continue;
      }
      const absoluteInterval = Math.abs(intervalCount.interval);
      let theoreticalTempo = 60 / (absoluteInterval / audioSampleRate);
      while (theoreticalTempo < minBpmRange) {
        theoreticalTempo *= 2;
      }
      while (theoreticalTempo > maxBpmRange) {
        theoreticalTempo /= 2;
      }
      theoreticalTempo = Math.round(theoreticalTempo);
      let foundTempo = tempoCounts.find(
        (tempoCount) => tempoCount.tempo === theoreticalTempo
      );
      if (foundTempo) {
        const index = tempoCounts.indexOf(foundTempo);
        tempoCounts[index] = {
          tempo: foundTempo.tempo,
          count: foundTempo.count + intervalCount.count,
          confidence: foundTempo.confidence
        };
        foundTempo = tempoCounts[index];
      }
      if (!foundTempo) {
        const tempo = {
          tempo: theoreticalTempo,
          count: intervalCount.count,
          confidence: 0
        };
        tempoCounts.push(tempo);
      }
    }
    return tempoCounts;
  }

  // src/core/realtime-bpm-analyzer.ts
  var initialValue = {
    minValidThreshold: () => minValidThreshold,
    validPeaks: () => generateValidPeaksModel(),
    nextIndexPeaks: () => generateNextIndexPeaksModel(),
    skipIndexes: () => 1,
    effectiveBufferTime: () => 0
  };
  var RealTimeBpmAnalyzer = class {
    constructor(options = {}) {
      /**
       * Default configuration
       */
      this.options = {
        continuousAnalysis: false,
        stabilizationTime: defaultStabilizationTime,
        muteTimeInIndexes: defaultMuteTimeInIndexes,
        debug: false
      };
      /**
       * Minimum valid threshold, below this level result would be irrelevant.
       */
      this.minValidThreshold = initialValue.minValidThreshold();
      /**
       * Contain all valid peaks
       */
      this.validPeaks = initialValue.validPeaks();
      /**
       * Next index (+muteTimeInIndexes samples, see consts.defaultMuteTimeInIndexes) to take care about peaks
       */
      this.nextIndexPeaks = initialValue.nextIndexPeaks();
      /**
       * Number / Position of chunks
       */
      this.skipIndexes = initialValue.skipIndexes();
      this.effectiveBufferTime = initialValue.effectiveBufferTime();
      /**
       * Computed values
       */
      this.computedStabilizationTimeInSeconds = 0;
      Object.assign(this.options, options);
      this.updateComputedValues();
    }
    /**
     * Update the computed values
     */
    updateComputedValues() {
      this.computedStabilizationTimeInSeconds = this.options.stabilizationTime / 1e3;
    }
    /**
     * Reset BPM computation properties to get a fresh start
     */
    reset() {
      this.minValidThreshold = initialValue.minValidThreshold();
      this.validPeaks = initialValue.validPeaks();
      this.nextIndexPeaks = initialValue.nextIndexPeaks();
      this.skipIndexes = initialValue.skipIndexes();
      this.effectiveBufferTime = initialValue.effectiveBufferTime();
    }
    /**
     * Remve all validPeaks between the minThreshold pass in param to optimize the weight of datas
     * @param minThreshold - Value between 0.9 and 0.2
     */
    async clearValidPeaks(minThreshold) {
      this.minValidThreshold = minThreshold;
      await descendingOverThresholds(async (threshold) => {
        if (threshold < minThreshold && this.validPeaks[threshold] !== void 0) {
          delete this.validPeaks[threshold];
          delete this.nextIndexPeaks[threshold];
        }
        return false;
      });
    }
    /**
     * Attach this function to an audioprocess event on a audio/video node to compute BPM / Tempo in realtime
     * @param options - RealtimeAnalyzeChunkOptions
     * @param options.audioSampleRate - Audio sample rate (44100)
     * @param options.channelData - Channel data
     * @param options.bufferSize - Buffer size (4096)
     * @param options.postMessage - Function to post a message to the processor node
     */
    async analyzeChunk({
      audioSampleRate,
      channelData,
      bufferSize,
      postMessage
    }) {
      if (this.options.debug) {
        postMessage({ type: "analyzeChunk", data: channelData });
      }
      this.effectiveBufferTime += bufferSize;
      const currentMaxIndex = bufferSize * this.skipIndexes;
      const currentMinIndex = currentMaxIndex - bufferSize;
      await this.findPeaks({
        audioSampleRate,
        channelData,
        bufferSize,
        currentMinIndex,
        currentMaxIndex,
        postMessage
      });
      this.skipIndexes++;
      const data = await computeBpm({
        audioSampleRate,
        data: this.validPeaks
      });
      const { threshold } = data;
      postMessage({ type: "bpm", data });
      if (this.minValidThreshold < threshold) {
        postMessage({ type: "bpmStable", data });
        await this.clearValidPeaks(threshold);
      }
      if (this.options.continuousAnalysis && this.effectiveBufferTime / audioSampleRate > this.computedStabilizationTimeInSeconds) {
        this.reset();
        postMessage({ type: "analyzerReset" });
      }
    }
    /**
     * Find the best threshold with enought peaks
     * @param options - Options for finding peaks
     * @param options.audioSampleRate - Sample rate
     * @param options.channelData - Channel data
     * @param options.bufferSize - Buffer size
     * @param options.currentMinIndex - Current minimum index
     * @param options.currentMaxIndex - Current maximum index
     * @param options.postMessage - Function to post a message to the processor node
     */
    async findPeaks({
      audioSampleRate,
      channelData,
      bufferSize,
      currentMinIndex,
      currentMaxIndex,
      postMessage
    }) {
      await descendingOverThresholds(async (threshold) => {
        if (this.nextIndexPeaks[threshold] >= currentMaxIndex) {
          return false;
        }
        const offsetForNextPeak = Math.max(
          0,
          this.nextIndexPeaks[threshold] - currentMinIndex
        );
        const { peaks, threshold: atThreshold } = findPeaksAtThreshold({
          audioSampleRate,
          data: channelData,
          threshold,
          offset: offsetForNextPeak
        });
        if (peaks.length === 0) {
          return false;
        }
        for (const relativeChunkPeak of peaks) {
          const index = currentMinIndex + relativeChunkPeak;
          this.nextIndexPeaks[atThreshold] = index + this.options.muteTimeInIndexes;
          this.validPeaks[atThreshold].push(index);
          if (this.options.debug) {
            postMessage({
              type: "validPeak",
              data: {
                threshold: atThreshold,
                index
              }
            });
          }
        }
        return false;
      }, this.minValidThreshold);
    }
  };

  // src/processor/realtime-bpm-processor.ts
  var RealTimeBpmProcessor = class extends AudioWorkletProcessor {
    constructor(options) {
      super(options);
      this.stopped = false;
      // Guards against re-entrant analyzeChunk calls. process() is invoked every
      // render quantum; without this flag, a slow analysis could have multiple
      // concurrent invocations mutating the analyzer's shared state.
      this.analysisInProgress = false;
      this.aggregate = chunkAggregator();
      this.realTimeBpmAnalyzer = new RealTimeBpmAnalyzer(
        options.processorOptions
      );
      this.port.addEventListener("message", this.onMessage.bind(this));
      this.port.start();
    }
    /**
     * Handle message event
     * @param event Contain event data from main process
     */
    onMessage(event) {
      if (!event?.data) {
        return;
      }
      switch (event.data.type) {
        case "reset": {
          this.realTimeBpmAnalyzer.reset();
          break;
        }
        case "stop": {
          this.stopped = true;
          break;
        }
        default:
      }
    }
    /**
     * Process function to handle chunks of data
     * @param inputs Inputs (the data we need to process)
     * @param _outputs Outputs (not useful for now)
     * @param _parameters Parameters
     * @returns Process ended successfully
     */
    process(inputs, _outputs, _parameters) {
      const currentChunk = inputs[0][0];
      if (this.stopped) {
        return true;
      }
      if (!currentChunk) {
        return true;
      }
      const { isBufferFull, buffer, bufferSize } = this.aggregate(currentChunk);
      if (isBufferFull && !this.analysisInProgress) {
        this.analysisInProgress = true;
        this.realTimeBpmAnalyzer.analyzeChunk({
          audioSampleRate: sampleRate,
          channelData: buffer,
          bufferSize,
          postMessage: (event) => {
            this.port.postMessage(event);
          }
        }).catch((error) => {
          this.port.postMessage({
            type: "error",
            data: {
              message: error instanceof Error ? error.message : "Unknown error during BPM analysis",
              error: error instanceof Error ? error : new Error(String(error))
            }
          });
        }).finally(() => {
          this.analysisInProgress = false;
        });
      }
      return true;
    }
  };
  registerProcessor(realtimeBpmProcessorName, RealTimeBpmProcessor);
  var realtime_bpm_processor_default = {};
})();
//# sourceMappingURL=realtime-bpm-processor.js.map
`,YM=qM,ZM=class extends CustomEvent{constructor(r,t){super(r,{detail:t})}},KM=class extends EventTarget{constructor(r){super(),this.node=r,this.setupMessageHandler()}reset(){this.sendControlMessage({type:"reset"})}stop(){this.sendControlMessage({type:"stop"})}on(r,t){this.addEventListener(r,e=>{t(e.detail)})}once(r,t){const e=n=>{t(n.detail),this.removeEventListener(r,e)};this.addEventListener(r,e)}connect(r,t=0,e=0){if(r instanceof AudioNode)return this.node.connect(r,t,e);this.node.connect(r,t)}disconnect(r,t,e){r===void 0?this.node.disconnect():typeof r=="number"?this.node.disconnect(r):r instanceof AudioNode?t!==void 0&&e!==void 0?this.node.disconnect(r,t,e):t===void 0?this.node.disconnect(r):this.node.disconnect(r,t):r instanceof AudioParam&&(t===void 0?this.node.disconnect(r):this.node.disconnect(r,t))}emit(r,t){this.dispatchEvent(new ZM(r,t))}setupMessageHandler(){this.node.port.onmessage=r=>{const t=r.data;switch(t.type){case"bpm":{this.emit("bpm",t.data);break}case"bpmStable":{this.emit("bpmStable",t.data);break}case"analyzerReset":{this.emit("analyzerReset",void 0);break}case"analyzeChunk":{this.emit("analyzeChunk",t.data);break}case"validPeak":{this.emit("validPeak",t.data);break}case"error":{this.emit("error",t.data);break}}}}sendControlMessage(r){this.node.port.postMessage(r)}get context(){return this.node.context}get numberOfInputs(){return this.node.numberOfInputs}get numberOfOutputs(){return this.node.numberOfOutputs}get channelCount(){return this.node.channelCount}set channelCount(r){this.node.channelCount=r}get channelCountMode(){return this.node.channelCountMode}set channelCountMode(r){this.node.channelCountMode=r}get channelInterpretation(){return this.node.channelInterpretation}set channelInterpretation(r){this.node.channelInterpretation=r}};function $M(r,t){const e=r.createBiquadFilter();return e.type="lowpass",e.frequency.value=WM,e.Q.value=XM,e}async function jM(r,t){const e=await JM(r,GM,t);return await r.resume(),new KM(e)}async function JM(r,t,e){const n=new Blob([YM],{type:"application/javascript"}),i=URL.createObjectURL(n);try{return await r.audioWorklet.addModule(i),new AudioWorkletNode(r,t,{processorOptions:e})}catch(s){throw new Error(`Failed to load realtime-bpm-analyzer worklet: ${s instanceof Error?s.message:String(s)}`,{cause:s})}finally{URL.revokeObjectURL(i)}}const QM=2048,tS=.35,eS=20,nS=150,iS=.6,rS=1.12,sS=.05,aS=.15,oS=1024,lS=4,cS=4,uS=6e3,hS={continuousAnalysis:!0,stabilizationTime:15e3,muteTimeInIndexes:1e4},fS=5,dS=1,tl=(r,t,e)=>Math.max(t,Math.min(e,r));async function pS(r){const t=r.createAnalyser();t.fftSize=QM,t.smoothingTimeConstant=tS;const e=new Uint8Array(t.frequencyBinCount),n=r.sampleRate/2/t.frequencyBinCount;let i=0,s=-10;const a=[];let o=0,l=0,c=0;const u=[[20,80],[80,150],[150,400],[400,1200],[1200,3e3],[3e3,8e3]],h=300,f=new Float32Array(h),m=u.map(()=>new Float32Array(h));let g=0,_=0;function d(U,K){const J=Math.max(0,Math.floor(U/n)),j=Math.min(e.length-1,Math.ceil(K/n));let et=0,at=0;for(let q=J;q<=j;q++)et+=e[q],at++;return at?et/at/255:0}let p=null,E=0,M=0,C=0,I=0,L=r.currentTime;function R(U){const K=r.currentTime,J=Math.max(0,K-L);L=K,E=U.rms||0;const j=Math.min(J/lS,1);M+=(tl(E,0,1)-M)*j,C=U.spectralCentroid||0;const et=tl(C/uS,0,1),at=Math.min(J/cS,1);I+=(et-I)*at}const F=await jM(r,hS),V=$M(r);let v=0,b=!1,W=0,T=r.currentTime;F.on("bpm",({bpm:U})=>{if(!U||!U.length)return;const K=U[0].tempo;Math.abs(K-W)>dS&&(W=K,T=r.currentTime,b=!1),v=K}),F.on("bpmStable",({bpm:U})=>{U&&U.length&&(v=U[0].tempo,W=v,b=!0)});function S(U){U.connect(t),U.connect(V),V.connect(F.node),p?p.setSource(U):(p=HM.createMeydaAnalyzer({audioContext:r,source:U,bufferSize:oS,featureExtractors:["rms","spectralCentroid"],callback:R}),p.start())}function D(U,K){!b&&v>0&&r.currentTime-T>fS&&(b=!0),t.getByteFrequencyData(e),f[g]=K;for(let et=0;et<u.length;et++)m[et][g]=d(u[et][0],u[et][1]);g=(g+1)%h,_=Math.min(_+1,h);const J=d(eS,nS);i+=(J-i)*Math.min(U/iS,1);const j=Math.max(sS,i*rS);if(o=J,l=j,J>j&&K-s>aS){s=K,c++;const et=tl(.35+(J/j-1)*.65,.35,1);for(const at of a)at(et,K)}}function w(){return _<10?null:u.map(([U,K],J)=>{const j=m[J];let et=0,at=1/0,q=-1/0;for(let vt=0;vt<_;vt++){const Mt=j[vt];et+=Mt,Mt<at&&(at=Mt),Mt>q&&(q=Mt)}const Z=et/_;let ct=0;for(let vt=0;vt<_;vt++){const Mt=j[vt]-Z;ct+=Mt*Mt}const ot=Math.sqrt(ct/_);return{band:`${U}-${K}Hz`,mean:+Z.toFixed(3),min:+at.toFixed(3),max:+q.toFixed(3),cv:+(Z>.001?ot/Z:0).toFixed(3)}})}function N(U){return a.push(U),()=>{const K=a.indexOf(U);K>=0&&a.splice(K,1)}}return{connectSource:S,update:D,onBeat:N,getTraceSummary:w,get rms(){return E},get intensity(){return M},get spectralCentroid(){return I},get bpm(){return v},get bpmStable(){return b},get _diag(){return{instant:o,threshold:l,rollingAvg:i,beatFireCount:c}}}}const lc=160,cc=`900 ${lc}px "Orbitron", Impact, "Arial Black", sans-serif`,Cd=new Bt("#0a051b"),es=new Bt("#ff007f"),ii=new Bt("#66ff33"),ao=new Bt("#ffffff"),mS=4e4,Rd="./",_S=Rd+"resource/logo.png",gS=Rd+"resource/logo-green.png",eu=["REBOOT","REUNITE","RESTART","REVOLUTION","REBIRTH","RESONATE","REWIRE","RENEW","RECYCLE","AWAKEN","PULSE","INFINITE","DJ MELLOW","REUNION","REPLAY","REMEMBER","RECONNECT","COLLECT THE DOTS","RECHARGE","SAMSEN45 FOREVER"],vS=document.getElementById("scene"),On=new Jv({canvas:vS,antialias:!0,powerPreference:"high-performance"});On.setPixelRatio(Math.min(window.devicePixelRatio,2));On.setSize(window.innerWidth,window.innerHeight);On.setClearColor(Cd,1);On.toneMapping=Ec;On.toneMappingExposure=1.05;const Gs=new Qv;Gs.fog=new Ic(Cd,.018);const Te=new dn(62,window.innerWidth/window.innerHeight,.1,400);Te.position.set(0,0,46);Te.lookAt(0,0,0);const $i=new Pr;Gs.add($i);const as=new fx(On);as.addPass(new dx(Gs,Te));const nu=new mx;nu.uniforms.damp.value=.6;as.addPass(nu);const os=new Kr(new Lt(window.innerWidth,window.innerHeight),.55,.6,.22),Pd=os.strength;as.addPass(os);as.addPass(new vx);function iu(r="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=.25){const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=s.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);a.addColorStop(0,r),a.addColorStop(e,r),a.addColorStop(1,t),s.fillStyle=a,s.fillRect(0,0,128,128);const o=new Nc(i);return o.colorSpace=ze,o}const xS=iu(),MS=iu("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),SS=iu("rgba(10,5,27,1)","rgba(10,5,27,0)",.52);function Dd(r){const t=document.createElement("canvas").getContext("2d");t.font=cc;const e=lc*.3,n=Math.ceil(t.measureText(r).width)+e*2,i=Math.ceil(lc*1.35),s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");a.font=cc,a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="middle",a.fillText(r,n/2,i/2);const o=new Nc(s);return o.colorSpace=ze,o.userData.aspect=n/i,o}const ee=mS,pn=new Float32Array(ee*3),Br=new Float32Array(ee*3),ru=new Float32Array(ee),uc=new Float32Array(ee),hc=new Float32Array(ee);for(let r=0;r<ee;r++)ru[r]=Math.random(),uc[r]=Math.random(),hc[r]=Math.random();const Ma=new Float32Array(ee*3),Xa=new Float32Array(ee),fc=new Float32Array(ee),dc=new Float32Array(ee),pc=new Float32Array(ee),Ld=new Float32Array(ee),Id=new Float32Array(ee),mc=new Float32Array(ee),Hi=new Float32Array(ee*3),Gi=new Float32Array(ee*3),Si=new Float32Array(ee*3),er=new Float32Array(ee*3),Ud=new Float32Array(ee),Nd=new Float32Array(ee),Fd=new Float32Array(ee),Od=new Float32Array(ee),Ai=new Cn;Ai.setAttribute("position",new an(pn,3));Ai.setAttribute("color",new an(Br,3));const Bd=.34,Fh=1,yS=1.6;let el=1;const _c=new Cf({size:Bd,map:xS,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Es,sizeAttenuation:!0}),qa=new ex(Ai,_c);$i.add(qa);const Jt={x:0,y:0,z:0,t:0,bright:1,spin:1,phase:null,freq:null,aux:0},Sa=new Bt;function zd(r){for(let t=0;t<ee;t++){Jt.x=0,Jt.y=0,Jt.z=0,Jt.t=.5,Jt.bright=1,Jt.spin=1,Jt.phase=null,Jt.freq=null,Jt.aux=0,r.generate(t,ee,Jt,ru[t],uc[t],hc[t]);const e=t*3;Si[e]=Jt.x,Si[e+1]=Jt.y,Si[e+2]=Jt.z;const n=Math.sqrt(Jt.x*Jt.x+Jt.y*Jt.y+Jt.z*Jt.z),i=Math.min(Math.max((n-5)/7,.12),1)*Jt.bright;Sa.copy(es).lerp(ii,Jt.t).multiplyScalar(i),er[e]=Sa.r,er[e+1]=Sa.g,er[e+2]=Sa.b,Ud[t]=Jt.spin,Nd[t]=Jt.phase==null?uc[t]*Math.PI*2:Jt.phase,Fd[t]=Jt.freq==null?.6+hc[t]*1.4:Jt.freq,Od[t]=Jt.aux}}function kd(r){Ma.set(Si),pc.set(Ud),Ld.set(Nd),Id.set(Fd),mc.set(Od);const t=r.spinAxis==="z";for(let e=0;e<ee;e++){const n=e*3,i=Ma[n],s=Ma[n+1],a=Ma[n+2];t?(Xa[e]=Math.sqrt(i*i+s*s),fc[e]=Math.atan2(s,i),dc[e]=a):(Xa[e]=Math.sqrt(i*i+a*a),fc[e]=Math.atan2(a,i),dc[e]=s)}Br.set(er),Ai.attributes.color.needsUpdate=!0,Sc=0,yc=0}const wi=new Pr;Gs.add(wi);const Vd=new no({map:SS,transparent:!0,depthWrite:!1,depthTest:!1,opacity:.85,fog:!1}),su=new Uc(Vd);su.scale.set(34,34,1);su.renderOrder=14;wi.add(su);const oo=new no({map:MS,color:ii.clone(),transparent:!0,depthWrite:!1,depthTest:!1,blending:Es,opacity:.16,fog:!1}),gc=18,lo=new Uc(oo);lo.scale.set(gc,gc,1);lo.renderOrder=15;wi.add(lo);const zr={pink:null,green:null};let Ws="green";function TS(r){const t=Math.round(Math.max(r.width,r.height)*.03),e=document.createElement("canvas");e.width=r.width+t*2,e.height=r.height+t*2;const n=e.getContext("2d");for(let s=0;s<12;s++){const a=s/12*Math.PI*2;n.drawImage(r,t+Math.cos(a)*t,t+Math.sin(a)*t)}n.globalCompositeOperation="source-in",n.fillStyle="rgb(6,3,16)",n.fillRect(0,0,e.width,e.height);const i=new Nc(e);return i.colorSpace=ze,{tex:i,growW:e.width/r.width,growH:e.height/r.height}}function Hd(r,t){r.colorSpace=ze,r.anisotropy=On.capabilities.getMaxAnisotropy();const e=r.image&&r.image.width/r.image.height||1,n=11,i=TS(r.image),s=new _n(new Zr(n*e*i.growW,n*i.growH),new Xr({map:i.tex,transparent:!0,depthWrite:!1,depthTest:!1,blending:_i,opacity:t*.95,fog:!1}));s.renderOrder=19,wi.add(s);const a=new Xr({map:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:_i,opacity:t,fog:!1}),o=new _n(new Zr(n*e,n),a);return o.renderOrder=20,wi.add(o),{mesh:o,back:s}}const Gd=new ax;Gd.load(_S,r=>{zr.pink=Hd(r,Ws==="pink"?1:0)},void 0,()=>console.info("[SAMSEN-45] pink logo missing — continuing without it."));Gd.load(gS,r=>{zr.green=Hd(r,Ws==="green"?1:0)},void 0,()=>console.info("[SAMSEN-45] green logo missing — continuing without it."));function ES(r){Ws=r;const t=zr[r]||zr[r==="pink"?"green":"pink"];for(const i of["pink","green"]){const s=zr[i];if(!s)continue;const a=s===t;oe.to(s.mesh.material,{opacity:a?1:0,duration:1.2,ease:"power2.inOut",overwrite:"auto"}),oe.to(s.back.material,{opacity:a?.95:0,duration:1.2,ease:"power2.inOut",overwrite:"auto"})}const n=(r==="pink"?ii:es).clone().lerp(ao,.25);oe.to(oo.color,{r:n.r,g:n.g,b:n.b,duration:1.2,overwrite:"auto"})}const Ya=new Array(eu.length).fill(null);eu.forEach((r,t)=>{Ya[t]=Dd(r)});document.fonts.load(cc).then(()=>document.fonts.ready).then(()=>{eu.forEach((r,t)=>{Ya[t]=Dd(r)}),au(xn.idx,Ws)});const Cr=new no({transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,color:ii.clone(),fog:!1}),Jn=new Uc(Cr);Jn.renderOrder=13;Jn.visible=!1;Gs.add(Jn);function au(r,t){const e=Ya[r%Ya.length],n=t==="pink"?es:ii;oe.to(Cr,{opacity:0,duration:.5,overwrite:"auto",onComplete:()=>{if(!e){Jn.visible=!1;return}Cr.map=e,Cr.needsUpdate=!0,Cr.color.copy(n).lerp(ao,.3);const i=3.4;Jn.scale.set(i*(e.userData.aspect||3),i,1),Jn.visible=!0,oe.to(Cr,{opacity:.42,duration:1.2})}})}const Oh=document.getElementById("splash"),Bh=document.getElementById("splash-status"),vc=document.getElementById("brand"),bS=document.getElementById("btn-mic"),AS=document.getElementById("btn-file"),Wd=document.getElementById("file-input"),wS=vc.textContent;let Dn=null,fi=null,Fs=null,Za=0,nl=null,ns=!1,zt=null;const Nn={bass:0,mids:0,highs:0},CS=oe.quickTo(Nn,"bass",{duration:.09,ease:"power2.out"}),RS=oe.quickTo(Nn,"mids",{duration:.14,ease:"power2.out"}),PS=oe.quickTo(Nn,"highs",{duration:.1,ease:"power2.out"});let Os=0,Ka=0;async function Xd(){return Dn||(Dn=new(window.AudioContext||window.webkitAudioContext),fi=Dn.createAnalyser(),fi.fftSize=512,fi.smoothingTimeConstant=.35,Fs=new Uint8Array(fi.frequencyBinCount),Za=Dn.sampleRate/2/fi.frequencyBinCount,zt=await pS(Dn),FS(zt)),Dn.resume()}function il(r,t){const e=Math.max(0,Math.floor(r/Za)),n=Math.min(Fs.length-1,Math.ceil(t/Za));let i=0,s=0;for(let a=e;a<=n;a++)i+=Fs[a],s++;return s?i/s/255:0}function qd(r){if(nl)try{nl.disconnect()}catch{}nl=r,r.connect(fi),zt&&zt.connectSource(r)}async function DS(){try{Bs("Requesting microphone…"),await Xd();const r=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1}}),t=Dn.createMediaStreamSource(r);qd(t),Yd("Microphone live · feed the void.")}catch(r){Bs("Mic unavailable — try “Load Audio File”. ("+(r.name||r)+")","error")}}async function LS(r){try{Bs("Decoding “"+r.name+"”…"),await Xd();const t=await r.arrayBuffer(),e=await Dn.decodeAudioData(t),n=Dn.createBufferSource();n.buffer=e,n.loop=!0,qd(n),n.connect(Dn.destination),n.start(0),Yd("Now playing · "+r.name)}catch(t){Bs("Could not decode that file. Try another. ("+(t.name||t)+")","error")}}function Yd(r){Bs(r,"ok"),ns=!0,xn.lastSwitch=rr.elapsedTime,oe.to(Oh,{duration:.9,ease:"power2.inOut",onStart:()=>Oh.classList.add("hidden")}),oe.fromTo(Te.position,{z:90},{z:ir[xn.idx].camZ,duration:2.4,ease:"expo.out"})}function Bs(r,t=""){Bh.textContent=r,Bh.className="splash__status"+(t?" "+t:"")}bS.addEventListener("click",DS);AS.addEventListener("click",()=>Wd.click());Wd.addEventListener("change",r=>{const t=r.target.files&&r.target.files[0];t&&LS(t)});const ou={pulse:0},lu={pulse:0},Zd={mix:0};let Ts=-10,Kd=-10,Wi=0,xc=.6,zh=-10;function IS(r,t){if(!t)return!0;const e=(r-Ts)/t,n=Math.round(e);return n>=1&&Math.abs(e-n)<.18}function US(r){if(!ns||!zt||!zt.bpm||!zt.bpmStable)return;const t=60/zt.bpm;if(!(r-Kd>t*4)&&!(Os<.08)&&!(Nn.bass<.12)&&(Wi<=0&&(Wi=(Ts>0?Ts:r)+t),r>=Wi))for(r-Wi<.08&&($d(xc*.9,r),Ts=r);Wi<=r;)Wi+=t}let cu=ii.clone(),$a=0;function NS(r,t,e){const n=rr.elapsedTime;Kd=n,oe.to(ou,{keyframes:[{pulse:1,duration:.028,ease:"power4.out"},{pulse:0,duration:.3,ease:"power2.out"}],overwrite:"auto"}),$a=Math.min($a+3*r,6),t&&(Ts=n,e&&(Wi=n+e),$d(r,n))}function FS(r){r.onBeat((t,e)=>{xc+=(t-xc)*.3;const n=r.bpm?60/r.bpm:0;NS(t,IS(e,n),n)})}function $d(r,t){if(Ka<.65)return;const e=zt&&zt.bpm?60/zt.bpm*.45:.2;t-zh<e||(zh=t,oe.to(lu,{keyframes:[{pulse:1,duration:.028,ease:"power4.out"},{pulse:0,duration:.32,ease:"power2.out"}],overwrite:"auto"}),oe.to(os,{strength:Pd+.3*r,duration:.055,ease:"power4.out",yoyo:!0,repeat:1,overwrite:"auto"}),oe.to(Zd,{mix:.6,duration:.07,ease:"power1.inOut",yoyo:!0,repeat:1,overwrite:"auto"}),oe.fromTo(wi.rotation,{z:0},{z:(Math.random()<.5?-1:1)*.045*r,duration:.06,ease:"power3.out",yoyo:!0,repeat:1,overwrite:"auto"}),oe.to(Te.position,{z:"-=2.2",duration:.08,ease:"power3.out",yoyo:!0,repeat:1,overwrite:!1}),xn.onKick(r))}const An={active:!1,mix:0},ja={ramp:1};let Mc=null;const OS=16,xn={idx:0,bag:[],lastSwitch:0,silentFor:0,beats:0,captionTimer:null,next(){if(this.bag.length===0){this.bag=ir.map((r,t)=>t).filter(r=>r!==this.idx);for(let r=this.bag.length-1;r>0;r--){const t=Math.random()*(r+1)|0;[this.bag[r],this.bag[t]]=[this.bag[t],this.bag[r]]}}return this.bag.pop()},dwell(r){return r-this.lastSwitch},onKick(){!ns||An.active||(this.beats++,this.beats>=OS&&this.dwell(rr.elapsedTime)>4&&this.switch("4-bars"))},update(r,t){!ns||An.active||(Os<.035?this.silentFor+=r:(this.silentFor>=2&&this.dwell(t)>6&&this.switch("song"),this.silentFor=0),this.dwell(t)>60&&this.switch("timer"))},switch(r,t=null){if(An.active)return;const e=t??this.next(),n=ir[e];this.idx=e,this.lastSwitch=rr.elapsedTime,this.silentFor=0,this.beats=0,BS(n);const i=n.hue==="pink"?"green":"pink";ES(i),au(e,i),cu=(n.hue==="pink"?es:ii).clone(),this.caption(n.name),console.info(`[SAMSEN-45] style -> ${n.name} (${r})`)},caption(r){vc.textContent=r.toUpperCase(),this.captionTimer&&this.captionTimer.kill(),this.captionTimer=oe.delayedCall(3,()=>{vc.textContent=wS})}};function BS(r){zd(r),Hi.set(pn),Gi.set(Br),An.active=!0,An.mix=0,ja.ramp=0,Mc=oe.to(An,{mix:1,duration:1.65,ease:"power3.inOut",overwrite:"auto",onComplete:()=>{An.active=!1,kd(r),oe.to(ja,{ramp:1,duration:.7,ease:"power1.out",overwrite:"auto"})}}),oe.to(qa.rotation,{x:r.tiltX,z:r.tiltZ,duration:1.65,ease:"power2.inOut",overwrite:"auto"}),ns&&oe.to(Te.position,{z:r.camZ,duration:2,ease:"power2.inOut",overwrite:"auto"}),oe.to(os,{strength:Pd+.55,duration:.82,ease:"power2.in",yoyo:!0,repeat:1,overwrite:"auto"})}function zS(r){const t=ir[r];xn.idx=r,zd(t),kd(t),pn.set(Si),Ai.attributes.position.needsUpdate=!0,qa.rotation.x=t.tiltX,qa.rotation.z=t.tiltZ,Te.position.z=t.camZ;const e=t.hue==="pink"?"green":"pink";Ws=e,au(r,e),cu=(t.hue==="pink"?es:ii).clone(),oo.color.copy(e==="pink"?ii:es).lerp(ao,.25)}window.addEventListener("keydown",r=>{r.key==="ArrowRight"&&xn.switch("manual")});window.SAMSEN={next:r=>xn.switch("manual",typeof r=="number"?r:null),skip:()=>{Mc&&Mc.progress(1)},fx:{afterimage:nu,bloom:os,world:$i,logoGroup:wi,kickState:ou,orbState:lu},styles:ir.map(r=>r.name),audio:Nn,audioAnalysis:{onBeat:r=>zt?zt.onBeat(r):()=>{},get intensity(){return zt?zt.intensity:0},get rms(){return zt?zt.rms:0},get spectralCentroid(){return zt?zt.spectralCentroid:0},get bpm(){return zt?zt.bpm:0},get bpmStable(){return zt?zt.bpmStable:!1},get _diag(){return zt?zt._diag:null},traceSummary:()=>zt?zt.getTraceSummary():null},debug:()=>({active:An.active,mix:+An.mix.toFixed(3),ramp:+ja.ramp.toFixed(3),idx:xn.idx,beats:xn.beats,t:+rr.elapsedTime.toFixed(1),gsapTime:+oe.ticker.time.toFixed(1),bpm:zt?+zt.bpm.toFixed(1):0,bpmStable:zt?zt.bpmStable:!1,intensity:zt?+zt.intensity.toFixed(3):0,spectralCentroid:zt?+zt.spectralCentroid.toFixed(3):0,musicActivity:+Ka.toFixed(3),energyRaw:+Os.toFixed(3),diag:zt?zt._diag:null})};let kh=null;function jd(){const r=window.innerWidth,t=window.innerHeight;Te.aspect=r/t,Te.updateProjectionMatrix(),On.setPixelRatio(Math.min(window.devicePixelRatio,2)),On.setSize(r,t),as.setSize(r,t),os.setSize(r,t)}window.addEventListener("resize",()=>{clearTimeout(kh),kh=setTimeout(jd,150)});const rr=new Rf;let Sc=0,yc=0,Vh=0;const ya=[0,0,0];function kS(r,t){if(!ns||!fi)return;fi.getByteFrequencyData(Fs);const e=il(0,150),n=il(150,2e3),i=il(2e3,Za*Fs.length);Os=(e+n+i)/3,Ka+=((Os>.1?1:0)-Ka)*Math.min(t/1.2,1),CS(e),RS(n),PS(i),zt&&zt.update(t,r)}function VS(){const r=An.mix,t=Math.sin(r*Math.PI)*7;for(let e=0;e<ee;e++){const n=e*3;let i=Hi[n]+(Si[n]-Hi[n])*r,s=Hi[n+1]+(Si[n+1]-Hi[n+1])*r,a=Hi[n+2]+(Si[n+2]-Hi[n+2])*r;const o=Math.sqrt(i*i+s*s+a*a)+1e-4,l=t*ru[e]/o;pn[n]=i+i*l,pn[n+1]=s+s*l,pn[n+2]=a+a*l,Br[n]=Gi[n]+(er[n]-Gi[n])*r,Br[n+1]=Gi[n+1]+(er[n+1]-Gi[n+1])*r,Br[n+2]=Gi[n+2]+(er[n+2]-Gi[n+2])*r}Ai.attributes.position.needsUpdate=!0,Ai.attributes.color.needsUpdate=!0}function HS(r,t){const e=ir[xn.idx],{bass:n,mids:i}=Nn,s=ou.pulse,a=e.spinSpeed*(.05+n*.45+s*1.5+$a)*r;Sc+=a,$a*=Math.pow(.02,r),e.flow&&(yc+=e.flow.speed*(.3+n*.5+s*1.7)*r);const o=1+s*.2+n*.03,l=e.turbAmp*(.35+n*1.3+s*3.6+i*.5)*ja.ramp;Vh+=r*(.4+n*.9+s*1.6);const c=Vh*e.turbFreq,u=e.spinAxis==="z",h=e.flow?e.flow.min:0,f=e.flow?e.flow.max-e.flow.min:0;ya[0]=Nn.bass,ya[1]=Nn.mids,ya[2]=Nn.highs;for(let d=0;d<ee;d++){const p=d*3,E=fc[d]+Sc*pc[d],M=Id[d],C=Ld[d],I=Math.sin(c*M+C)*l*(.25+Xa[d]*.02),L=Xa[d]*o+I;let R=dc[d],F=Math.cos(c*M*.7+C*1.3)*l*.5;if(e.flow){const V=(R-h+yc*(.6+.4*Math.abs(pc[d])))%f;R=h+(V<0?V+f:V)}if(e.eq){const V=mc[d]|0;R=-7+(mc[d]-V)/.9*(2+ya[V]*16),F=0}u?(pn[p]=Math.cos(E)*L,pn[p+1]=Math.sin(E)*L,pn[p+2]=R+F):(pn[p]=Math.cos(E)*L,pn[p+1]=R+F,pn[p+2]=Math.sin(E)*L)}Ai.attributes.position.needsUpdate=!0,_c.color.copy(ao).lerp(cu,Zd.mix*.85);const m=ir[xn.idx].sizeScale||1,g=Math.max(0,Math.min(1,(Te.aspect-Fh)/(yS-Fh))),_=1+(m-1)*g;el+=(_-el)*Math.min(r*3,1),_c.size=(Bd+n*.1+s*.24)*el,u?($i.rotation.y*=.98,$i.rotation.z*=.98):($i.rotation.y+=r*.05,$i.rotation.z=Math.sin(t*.1)*.06)}function GS(){const{bass:r,mids:t}=Nn;On.toneMappingExposure=Math.max(1.05-r*.22-t*.1,.78);const e=lu.pulse,n=1+r*.2+e*.45;wi.scale.setScalar(n);const i=gc*(1+r*.25+e*.55);lo.scale.set(i,i,1),oo.opacity=.12+r*.12+e*.2,Vd.opacity=Math.min(.88+r*.12,1);for(const s of["pink","green"]){const a=zr[s];a&&(a.mesh.quaternion.copy(Te.quaternion),a.back.quaternion.copy(Te.quaternion))}}function WS(r){if(!Jn.visible)return;const t=r*.12;Jn.position.set(Math.cos(t)*24,9+Math.sin(r*.4)*2,Math.sin(t)*24),Jn.material.rotation=Math.sin(r*.5)*.04}const rl=new H;function XS(r){rl.set(Math.sin(r*.13)*6,Math.cos(r*.17)*3,Te.position.z),Te.position.x+=(rl.x-Te.position.x)*.02,Te.position.y+=(rl.y-Te.position.y)*.02,Te.lookAt(0,0,0)}function Jd(){requestAnimationFrame(Jd);const r=Math.min(rr.getDelta(),.05),t=rr.elapsedTime;kS(t,r),US(t),xn.update(r,t),An.active?VS():HS(r,t),GS(),WS(t),XS(t),as.render()}zS(0);jd();Jd();console.info("[SAMSEN-45] 16 styles loaded:",window.SAMSEN.styles.join(" · "),`
Auto-switching: every 4 bars of beats / new-song / 60s fallback. Manual: ArrowRight or SAMSEN.next(i).`);
