import{J as T,c as O,L as Te,s as Qe,d as ce,y as mt,m as a,V as yt,M as wn,N as at,O as xn,P as yn,Q as nt,R as Cn,S as Rn,T as te,E as gt,U as Ve,W as Sn,X as st,Y as xe,Z as Et,h as A,l as B,k as ae,_ as Nt,n as He,B as me,$ as kn,C as X,G as We,a0 as Me,a1 as wt,a2 as Lt,j as Z,i as ze,a3 as At,a4 as et,a5 as Fn,a6 as zn,a7 as Tn,q as xt,a8 as On,a9 as In,aa as Pe,ab as je,ac as Vt,ad as Mn,ae as Pn,af as _n,ag as Ct,ah as be,ai as Bn,aj as $n,ak as Rt,al as En,am as Nn,an as Ln,ao as An,ap as Vn,aq as Dn,ar as jn,as as bt,at as Hn,au as Wn,av as St,aw as Un,ax as kt,H as Kn,ay as qn,az as Gn,aA as Xn,aB as Yn,a as pt,b as De,o as Je,aC as Ft,aD as Zn,aE as Jn,f as oe,u as ee,w as ge,t as Qn,aF as eo,K as zt,g as Tt,r as to}from"./index-CZrCcMXT.js";import{a as Ot,N as no,b as Ie}from"./api-Bb7nEW4V.js";import{u as oo}from"./main-K-25H3ar.js";import{u as Dt,a as lo,N as dt}from"./Input-BwdOzHmS.js";function It(e){return e&-e}class jt{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let i=0;i<n+1;++i)l[i]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:i}=this;for(n+=1;n<=l;)i[n]+=o,n+=It(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*l;for(;n>0;)u+=o[n],n-=It(n);return u}getBound(n){let o=0,l=this.l;for(;l>o;){const i=Math.floor((o+l)/2),u=this.sum(i);if(u>n){l=i;continue}else if(u<n){if(o===i)return this.sum(o+1)<=n?o+1:i;o=i}else return i}return o}}let Ze;function io(){return typeof document>"u"?!1:(Ze===void 0&&("matchMedia"in window?Ze=window.matchMedia("(pointer:coarse)").matches:Ze=!1),Ze)}let ct;function Mt(){return typeof document>"u"?1:(ct===void 0&&(ct="chrome"in window?window.devicePixelRatio:1),ct)}const Ht="VVirtualListXScroll";function ro({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const l=T(0),i=T(0),u=O(()=>{const g=e.value;if(g.length===0)return null;const p=new jt(g.length,0);return g.forEach((S,k)=>{p.add(k,S.width)}),p}),f=Te(()=>{const g=u.value;return g!==null?Math.max(g.getBound(i.value)-1,0):0}),r=g=>{const p=u.value;return p!==null?p.sum(g):0},m=Te(()=>{const g=u.value;return g!==null?Math.min(g.getBound(i.value+l.value)+1,e.value.length-1):0});return Qe(Ht,{startIndexRef:f,endIndexRef:m,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:r}),{listWidthRef:l,scrollLeftRef:i}}const Pt=ce({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:l,renderColRef:i,renderItemWithColsRef:u}=mt(Ht);return{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:u,getLeft:l}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:i,getLeft:u,item:f}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:f,getLeft:u});if(l!=null){const r=[];for(let m=e;m<=n;++m){const g=o[m];r.push(l({column:g,left:u(m),item:f}))}return r}return null}}),ao=at(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[at("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[at("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),so=ce({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=xn();ao.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:yn,ssr:n}),nt(()=>{const{defaultScrollIndex:d,defaultScrollKey:R}=e;d!=null?L({index:d}):R!=null&&L({key:R})});let o=!1,l=!1;Cn(()=>{if(o=!1,!l){l=!0;return}L({top:h.value,left:f.value})}),Rn(()=>{o=!0,l||(l=!0)});const i=Te(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let d=0;return e.columns.forEach(R=>{d+=R.width}),d}),u=O(()=>{const d=new Map,{keyField:R}=e;return e.items.forEach(($,U)=>{d.set($[R],U)}),d}),{scrollLeftRef:f,listWidthRef:r}=ro({columnsRef:te(e,"columns"),renderColRef:te(e,"renderCol"),renderItemWithColsRef:te(e,"renderItemWithCols")}),m=T(null),g=T(void 0),p=new Map,S=O(()=>{const{items:d,itemSize:R,keyField:$}=e,U=new jt(d.length,R);return d.forEach((G,K)=>{const q=G[$],D=p.get(q);D!==void 0&&U.add(K,D)}),U}),k=T(0),h=T(0),x=Te(()=>Math.max(S.value.getBound(h.value-gt(e.paddingTop))-1,0)),P=O(()=>{const{value:d}=g;if(d===void 0)return[];const{items:R,itemSize:$}=e,U=x.value,G=Math.min(U+Math.ceil(d/$+1),R.length-1),K=[];for(let q=U;q<=G;++q)K.push(R[q]);return K}),L=(d,R)=>{if(typeof d=="number"){w(d,R,"auto");return}const{left:$,top:U,index:G,key:K,position:q,behavior:D,debounce:Y=!0}=d;if($!==void 0||U!==void 0)w($,U,D);else if(G!==void 0)W(G,D,Y);else if(K!==void 0){const c=u.value.get(K);c!==void 0&&W(c,D,Y)}else q==="bottom"?w(0,Number.MAX_SAFE_INTEGER,D):q==="top"&&w(0,0,D)};let F,M=null;function W(d,R,$){const{value:U}=S,G=U.sum(d)+gt(e.paddingTop);if(!$)m.value.scrollTo({left:0,top:G,behavior:R});else{F=d,M!==null&&window.clearTimeout(M),M=window.setTimeout(()=>{F=void 0,M=null},16);const{scrollTop:K,offsetHeight:q}=m.value;if(G>K){const D=U.get(d);G+D<=K+q||m.value.scrollTo({left:0,top:G+D-q,behavior:R})}else m.value.scrollTo({left:0,top:G,behavior:R})}}function w(d,R,$){m.value.scrollTo({left:d,top:R,behavior:$})}function y(d,R){var $,U,G;if(o||e.ignoreItemResize||de(R.target))return;const{value:K}=S,q=u.value.get(d),D=K.get(q),Y=(G=(U=($=R.borderBoxSize)===null||$===void 0?void 0:$[0])===null||U===void 0?void 0:U.blockSize)!==null&&G!==void 0?G:R.contentRect.height;if(Y===D)return;Y-e.itemSize===0?p.delete(d):p.set(d,Y-e.itemSize);const b=Y-D;if(b===0)return;K.add(q,b);const j=m.value;if(j!=null){if(F===void 0){const le=K.sum(q);j.scrollTop>le&&j.scrollBy(0,b)}else if(q<F)j.scrollBy(0,b);else if(q===F){const le=K.sum(q);Y+le>j.scrollTop+j.offsetHeight&&j.scrollBy(0,b)}ne()}k.value++}const I=!io();let H=!1;function fe(d){var R;(R=e.onScroll)===null||R===void 0||R.call(e,d),(!I||!H)&&ne()}function he(d){var R;if((R=e.onWheel)===null||R===void 0||R.call(e,d),I){const $=m.value;if($!=null){if(d.deltaX===0&&($.scrollTop===0&&d.deltaY<=0||$.scrollTop+$.offsetHeight>=$.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),$.scrollTop+=d.deltaY/Mt(),$.scrollLeft+=d.deltaX/Mt(),ne(),H=!0,Sn(()=>{H=!1})}}}function se(d){if(o||de(d.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(d.contentRect.height===g.value)return}else if(d.contentRect.height===g.value&&d.contentRect.width===r.value)return;g.value=d.contentRect.height,r.value=d.contentRect.width;const{onResize:R}=e;R!==void 0&&R(d)}function ne(){const{value:d}=m;d!=null&&(h.value=d.scrollTop,f.value=d.scrollLeft)}function de(d){let R=d;for(;R!==null;){if(R.style.display==="none")return!0;R=R.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:u,itemsStyle:O(()=>{const{itemResizable:d}=e,R=Ve(S.value.sum());return k.value,[e.itemsStyle,{boxSizing:"content-box",width:Ve(i.value),height:d?"":R,minHeight:d?R:"",paddingTop:Ve(e.paddingTop),paddingBottom:Ve(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(k.value,{transform:`translateY(${Ve(S.value.sum(x.value))})`})),viewportItems:P,listElRef:m,itemsElRef:T(null),scrollTo:L,handleListResize:se,handleListScroll:fe,handleListWheel:he,handleItemResize:y}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return a(yt,{onResize:this.handleListResize},{default:()=>{var i,u;return a("div",wn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:f,renderItemWithCols:r}=this;return this.viewportItems.map(m=>{const g=m[n],p=o.get(g),S=f!=null?a(Pt,{index:p,item:m}):void 0,k=r!=null?a(Pt,{index:p,item:m}):void 0,h=this.$slots.default({item:m,renderedCols:S,renderedItemWithCols:k,index:p})[0];return e?a(yt,{key:g,onResize:x=>this.handleItemResize(g,x)},{default:()=>h}):(h.key=g,h)})}})]):(u=(i=this.$slots).empty)===null||u===void 0?void 0:u.call(i)])}})}});function Wt(e,n){n&&(nt(()=>{const{value:o}=e;o&&st.registerHandler(o,n)}),xe(e,(o,l)=>{l&&st.unregisterHandler(l)},{deep:!1}),Et(()=>{const{value:o}=e;o&&st.unregisterHandler(o)}))}const co=new WeakSet;function uo(e){co.add(e)}function _t(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ut(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const fo=ce({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ho=ce({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vo=ce({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),go=A("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[B("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ae("+",[B("description",`
 margin-top: 8px;
 `)])]),B("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),B("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),bo=Object.assign(Object.assign({},me.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),po=ce({name:"Empty",props:bo,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:l}=He(e),i=me("Empty","-empty",go,kn,e,n),{localeRef:u}=Dt("Empty"),f=O(()=>{var p,S,k;return(p=e.description)!==null&&p!==void 0?p:(k=(S=l?.value)===null||S===void 0?void 0:S.Empty)===null||k===void 0?void 0:k.description}),r=O(()=>{var p,S;return((S=(p=l?.value)===null||p===void 0?void 0:p.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>a(ho,null))}),m=O(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:S},self:{[X("iconSize",p)]:k,[X("fontSize",p)]:h,textColor:x,iconColor:P,extraTextColor:L}}=i.value;return{"--n-icon-size":k,"--n-font-size":h,"--n-bezier":S,"--n-text-color":x,"--n-icon-color":P,"--n-extra-text-color":L}}),g=o?We("empty",O(()=>{let p="";const{size:S}=e;return p+=S[0],p}),m,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:r,localizedDescription:O(()=>f.value||u.value.description),cssVars:o?void 0:m,themeClass:g?.themeClass,onRender:g?.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o?.(),a("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${n}-empty__icon`},e.icon?e.icon():a(Nt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Bt=ce({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=mt(wt);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:i}}=this,u=l?.(i),f=n?n(i,!1):Me(i[this.labelField],i,!1),r=a("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u?.class]}),f);return i.render?i.render({node:r,option:i}):o?o({node:r,option:i,selected:!1}):r}});function mo(e,n){return a(Lt,{name:"fade-in-scale-up-transition"},{default:()=>e?a(Nt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>a(fo)}):null})}const $t=ce({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:i,renderLabelRef:u,renderOptionRef:f,labelFieldRef:r,valueFieldRef:m,showCheckmarkRef:g,nodePropsRef:p,handleOptionClick:S,handleOptionMouseEnter:k}=mt(wt),h=Te(()=>{const{value:F}=o;return F?e.tmNode.key===F.key:!1});function x(F){const{tmNode:M}=e;M.disabled||S(F,M)}function P(F){const{tmNode:M}=e;M.disabled||k(F,M)}function L(F){const{tmNode:M}=e,{value:W}=h;M.disabled||W||k(F,M)}return{multiple:l,isGrouped:Te(()=>{const{tmNode:F}=e,{parent:M}=F;return M&&M.rawNode.type==="group"}),showCheckmark:g,nodeProps:p,isPending:h,isSelected:Te(()=>{const{value:F}=n,{value:M}=l;if(F===null)return!1;const W=e.tmNode.rawNode[m.value];if(M){const{value:w}=i;return w.has(W)}else return F===W}),labelField:r,renderLabel:u,renderOption:f,handleMouseMove:L,handleMouseEnter:P,handleClick:x}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:i,showCheckmark:u,nodeProps:f,renderOption:r,renderLabel:m,handleClick:g,handleMouseEnter:p,handleMouseMove:S}=this,k=mo(o,e),h=m?[m(n,o),u&&k]:[Me(n[this.labelField],n,o),u&&k],x=f?.(n),P=a("div",Object.assign({},x,{class:[`${e}-base-select-option`,n.class,x?.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:u}],style:[x?.style||"",n.style||""],onClick:ut([g,x?.onClick]),onMouseenter:ut([p,x?.onMouseenter]),onMousemove:ut([S,x?.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},h));return n.render?n.render({node:P,option:n,selected:o}):r?r({node:P,option:n,selected:o}):P}}),wo=A("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[A("scrollbar",`
 max-height: var(--n-height);
 `),A("virtual-list",`
 max-height: var(--n-height);
 `),A("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[B("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),A("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),A("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),B("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),B("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),B("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),A("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),A("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Z("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Z("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),Z("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),Z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),B("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[At({enterScale:"0.5"})])])]),xo=ce({name:"InternalSelectMenu",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=He(e),l=xt("InternalSelectMenu",o,n),i=me("InternalSelectMenu","-internal-select-menu",wo,On,e,te(e,"clsPrefix")),u=T(null),f=T(null),r=T(null),m=O(()=>e.treeMate.getFlattenedNodes()),g=O(()=>In(m.value)),p=T(null);function S(){const{treeMate:c}=e;let b=null;const{value:j}=e;j===null?b=c.getFirstAvailableNode():(e.multiple?b=c.getNode((j||[])[(j||[]).length-1]):b=c.getNode(j),(!b||b.disabled)&&(b=c.getFirstAvailableNode())),R(b||null)}function k(){const{value:c}=p;c&&!e.treeMate.getNode(c.key)&&(p.value=null)}let h;xe(()=>e.show,c=>{c?h=xe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():k(),Vt($)):k()},{immediate:!0}):h?.()},{immediate:!0}),Et(()=>{h?.()});const x=O(()=>gt(i.value.self[X("optionHeight",e.size)])),P=O(()=>Pe(i.value.self[X("padding",e.size)])),L=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),F=O(()=>{const c=m.value;return c&&c.length===0});function M(c){const{onToggle:b}=e;b&&b(c)}function W(c){const{onScroll:b}=e;b&&b(c)}function w(c){var b;(b=r.value)===null||b===void 0||b.sync(),W(c)}function y(){var c;(c=r.value)===null||c===void 0||c.sync()}function I(){const{value:c}=p;return c||null}function H(c,b){b.disabled||R(b,!1)}function fe(c,b){b.disabled||M(b)}function he(c){var b;je(c,"action")||(b=e.onKeyup)===null||b===void 0||b.call(e,c)}function se(c){var b;je(c,"action")||(b=e.onKeydown)===null||b===void 0||b.call(e,c)}function ne(c){var b;(b=e.onMousedown)===null||b===void 0||b.call(e,c),!e.focusable&&c.preventDefault()}function de(){const{value:c}=p;c&&R(c.getNext({loop:!0}),!0)}function d(){const{value:c}=p;c&&R(c.getPrev({loop:!0}),!0)}function R(c,b=!1){p.value=c,b&&$()}function $(){var c,b;const j=p.value;if(!j)return;const le=g.value(j.key);le!==null&&(e.virtualScroll?(c=f.value)===null||c===void 0||c.scrollTo({index:le}):(b=r.value)===null||b===void 0||b.scrollTo({index:le,elSize:x.value}))}function U(c){var b,j;!((b=u.value)===null||b===void 0)&&b.contains(c.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,c))}function G(c){var b,j;!((b=u.value)===null||b===void 0)&&b.contains(c.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,c)}Qe(wt,{handleOptionMouseEnter:H,handleOptionClick:fe,valueSetRef:L,pendingTmNodeRef:p,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),Qe(Mn,u),nt(()=>{const{value:c}=r;c&&c.sync()});const K=O(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:b},self:{height:j,borderRadius:le,color:we,groupHeaderTextColor:ye,actionDividerColor:ve,optionTextColorPressed:ie,optionTextColor:Ce,optionTextColorDisabled:ue,optionTextColorActive:_e,optionOpacityDisabled:Be,optionCheckColor:$e,actionTextColor:Ee,optionColorPending:Se,optionColorActive:ke,loadingColor:Ne,loadingSize:Le,optionColorActivePending:Ae,[X("optionFontSize",c)]:Oe,[X("optionHeight",c)]:Fe,[X("optionPadding",c)]:re}}=i.value;return{"--n-height":j,"--n-action-divider-color":ve,"--n-action-text-color":Ee,"--n-bezier":b,"--n-border-radius":le,"--n-color":we,"--n-option-font-size":Oe,"--n-group-header-text-color":ye,"--n-option-check-color":$e,"--n-option-color-pending":Se,"--n-option-color-active":ke,"--n-option-color-active-pending":Ae,"--n-option-height":Fe,"--n-option-opacity-disabled":Be,"--n-option-text-color":Ce,"--n-option-text-color-active":_e,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":ie,"--n-option-padding":re,"--n-option-padding-left":Pe(re,"left"),"--n-option-padding-right":Pe(re,"right"),"--n-loading-color":Ne,"--n-loading-size":Le}}),{inlineThemeDisabled:q}=e,D=q?We("internal-select-menu",O(()=>e.size[0]),K,e):void 0,Y={selfRef:u,next:de,prev:d,getPendingTmNode:I};return Wt(u,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:l,virtualListRef:f,scrollbarRef:r,itemSize:x,padding:P,flattenedNodes:m,empty:F,virtualListContainer(){const{value:c}=f;return c?.listElRef},virtualListContent(){const{value:c}=f;return c?.itemsElRef},doScroll:W,handleFocusin:U,handleFocusout:G,handleKeyUp:he,handleKeyDown:se,handleMouseDown:ne,handleVirtualListResize:y,handleVirtualListScroll:w,cssVars:q?void 0:K,themeClass:D?.themeClass,onRender:D?.onRender},Y)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:i,onRender:u}=this;return u?.(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,i,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},et(e.header,f=>f&&a("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},f)),this.loading?a("div",{class:`${o}-base-select-menu__loading`},a(Fn,{clsPrefix:o,strokeWidth:20})):this.empty?a("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Tn(e.empty,()=>[a(po,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):a(zn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?a(so,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?a(Bt,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:a($t,{clsPrefix:o,key:f.key,tmNode:f})}):a("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?a(Bt,{key:f.key,clsPrefix:o,tmNode:f}):a($t,{clsPrefix:o,key:f.key,tmNode:f})))}),et(e.action,f=>f&&[a("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),a(vo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Co=A("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),B("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),B("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),B("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),B("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Z("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[B("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),B("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Z("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Z("icon, avatar",[Z("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Z("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Z("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ze("disabled",[ae("&:hover","background-color: var(--n-color-hover-checkable);",[ze("checked","color: var(--n-text-color-hover-checkable);")]),ae("&:active","background-color: var(--n-color-pressed-checkable);",[ze("checked","color: var(--n-text-color-pressed-checkable);")])]),Z("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ze("disabled",[ae("&:hover","background-color: var(--n-color-checked-hover);"),ae("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ro=Object.assign(Object.assign(Object.assign({},me.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),So=Bn("n-tag"),ft=ce({name:"Tag",props:Ro,slots:Object,setup(e){const n=T(null),{mergedBorderedRef:o,mergedClsPrefixRef:l,inlineThemeDisabled:i,mergedRtlRef:u}=He(e),f=me("Tag","-tag",Co,_n,e,l);Qe(So,{roundRef:te(e,"round")});function r(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:x,onUpdateChecked:P,"onUpdate:checked":L}=e;P&&P(!h),L&&L(!h),x&&x(!h)}}function m(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:x}=e;x&&be(x,h)}}const g={setTextContent(h){const{value:x}=n;x&&(x.textContent=h)}},p=xt("Tag",u,l),S=O(()=>{const{type:h,size:x,color:{color:P,textColor:L}={}}=e,{common:{cubicBezierEaseInOut:F},self:{padding:M,closeMargin:W,borderRadius:w,opacityDisabled:y,textColorCheckable:I,textColorHoverCheckable:H,textColorPressedCheckable:fe,textColorChecked:he,colorCheckable:se,colorHoverCheckable:ne,colorPressedCheckable:de,colorChecked:d,colorCheckedHover:R,colorCheckedPressed:$,closeBorderRadius:U,fontWeightStrong:G,[X("colorBordered",h)]:K,[X("closeSize",x)]:q,[X("closeIconSize",x)]:D,[X("fontSize",x)]:Y,[X("height",x)]:c,[X("color",h)]:b,[X("textColor",h)]:j,[X("border",h)]:le,[X("closeIconColor",h)]:we,[X("closeIconColorHover",h)]:ye,[X("closeIconColorPressed",h)]:ve,[X("closeColorHover",h)]:ie,[X("closeColorPressed",h)]:Ce}}=f.value,ue=Pe(W);return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${c} - 8px)`,"--n-bezier":F,"--n-border-radius":w,"--n-border":le,"--n-close-icon-size":D,"--n-close-color-pressed":Ce,"--n-close-color-hover":ie,"--n-close-border-radius":U,"--n-close-icon-color":we,"--n-close-icon-color-hover":ye,"--n-close-icon-color-pressed":ve,"--n-close-icon-color-disabled":we,"--n-close-margin-top":ue.top,"--n-close-margin-right":ue.right,"--n-close-margin-bottom":ue.bottom,"--n-close-margin-left":ue.left,"--n-close-size":q,"--n-color":P||(o.value?K:b),"--n-color-checkable":se,"--n-color-checked":d,"--n-color-checked-hover":R,"--n-color-checked-pressed":$,"--n-color-hover-checkable":ne,"--n-color-pressed-checkable":de,"--n-font-size":Y,"--n-height":c,"--n-opacity-disabled":y,"--n-padding":M,"--n-text-color":L||j,"--n-text-color-checkable":I,"--n-text-color-checked":he,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":fe}}),k=i?We("tag",O(()=>{let h="";const{type:x,size:P,color:{color:L,textColor:F}={}}=e;return h+=x[0],h+=P[0],L&&(h+=`a${Ct(L)}`),F&&(h+=`b${Ct(F)}`),o.value&&(h+="c"),h}),S,e):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:p,mergedClsPrefix:l,contentRef:n,mergedBordered:o,handleClick:r,handleCloseClick:m,cssVars:i?void 0:S,themeClass:k?.themeClass,onRender:k?.onRender})},render(){var e,n;const{mergedClsPrefix:o,rtlEnabled:l,closable:i,color:{borderColor:u}={},round:f,onRender:r,$slots:m}=this;r?.();const g=et(m.avatar,S=>S&&a("div",{class:`${o}-tag__avatar`},S)),p=et(m.icon,S=>S&&a("div",{class:`${o}-tag__icon`},S));return a("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:l,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:g,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||g,a("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&i?a(Pn,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${o}-tag__border`,style:{borderColor:u}}):null)}}),ko=ae([A("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[A("base-loading",`
 color: var(--n-loading-color);
 `),A("base-selection-tags","min-height: var(--n-height);"),B("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),B("state-border",`
 z-index: 1;
 border-color: #0000;
 `),A("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[B("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),A("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[B("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),A("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[B("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),A("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),A("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[A("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[B("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),B("render-label",`
 color: var(--n-text-color);
 `)]),ze("disabled",[ae("&:hover",[B("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[B("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[B("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),A("base-selection-label","background-color: var(--n-color-active);"),A("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[B("arrow",`
 color: var(--n-arrow-color-disabled);
 `),A("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[A("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),B("render-label",`
 color: var(--n-text-color-disabled);
 `)]),A("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),A("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),A("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[B("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),B("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[B("state-border",`border: var(--n-border-${e});`),ze("disabled",[ae("&:hover",[B("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[B("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),A("base-selection-label",`background-color: var(--n-color-active-${e});`),A("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[B("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),A("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),A("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),A("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[B("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Fo=ce({name:"InternalSelection",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=He(e),l=xt("InternalSelection",o,n),i=T(null),u=T(null),f=T(null),r=T(null),m=T(null),g=T(null),p=T(null),S=T(null),k=T(null),h=T(null),x=T(!1),P=T(!1),L=T(!1),F=me("InternalSelection","-internal-selection",ko,Ln,e,te(e,"clsPrefix")),M=O(()=>e.clearable&&!e.disabled&&(L.value||e.active)),W=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Me(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),w=O(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),y=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function I(){var s;const{value:C}=i;if(C){const{value:J}=u;J&&(J.style.width=`${C.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=k.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function H(){const{value:s}=h;s&&(s.style.display="none")}function fe(){const{value:s}=h;s&&(s.style.display="inline-block")}xe(te(e,"active"),s=>{s||H()}),xe(te(e,"pattern"),()=>{e.multiple&&Vt(I)});function he(s){const{onFocus:C}=e;C&&C(s)}function se(s){const{onBlur:C}=e;C&&C(s)}function ne(s){const{onDeleteOption:C}=e;C&&C(s)}function de(s){const{onClear:C}=e;C&&C(s)}function d(s){const{onPatternInput:C}=e;C&&C(s)}function R(s){var C;(!s.relatedTarget||!(!((C=f.value)===null||C===void 0)&&C.contains(s.relatedTarget)))&&he(s)}function $(s){var C;!((C=f.value)===null||C===void 0)&&C.contains(s.relatedTarget)||se(s)}function U(s){de(s)}function G(){L.value=!0}function K(){L.value=!1}function q(s){!e.active||!e.filterable||s.target!==u.value&&s.preventDefault()}function D(s){ne(s)}const Y=T(!1);function c(s){if(s.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:C}=e;C?.length&&D(C[C.length-1])}}let b=null;function j(s){const{value:C}=i;if(C){const J=s.target.value;C.textContent=J,I()}e.ignoreComposition&&Y.value?b=s:d(s)}function le(){Y.value=!0}function we(){Y.value=!1,e.ignoreComposition&&d(b),b=null}function ye(s){var C;P.value=!0,(C=e.onPatternFocus)===null||C===void 0||C.call(e,s)}function ve(s){var C;P.value=!1,(C=e.onPatternBlur)===null||C===void 0||C.call(e,s)}function ie(){var s,C;if(e.filterable)P.value=!1,(s=g.value)===null||s===void 0||s.blur(),(C=u.value)===null||C===void 0||C.blur();else if(e.multiple){const{value:J}=r;J?.blur()}else{const{value:J}=m;J?.blur()}}function Ce(){var s,C,J;e.filterable?(P.value=!1,(s=g.value)===null||s===void 0||s.focus()):e.multiple?(C=r.value)===null||C===void 0||C.focus():(J=m.value)===null||J===void 0||J.focus()}function ue(){const{value:s}=u;s&&(fe(),s.focus())}function _e(){const{value:s}=u;s&&s.blur()}function Be(s){const{value:C}=p;C&&C.setTextContent(`+${s}`)}function $e(){const{value:s}=S;return s}function Ee(){return u.value}let Se=null;function ke(){Se!==null&&window.clearTimeout(Se)}function Ne(){e.active||(ke(),Se=window.setTimeout(()=>{y.value&&(x.value=!0)},100))}function Le(){ke()}function Ae(s){s||(ke(),x.value=!1)}xe(y,s=>{s||(x.value=!1)}),nt(()=>{An(()=>{const s=g.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=P.value?-1:0)})}),Wt(f,e.onResize);const{inlineThemeDisabled:Oe}=e,Fe=O(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:C},self:{fontWeight:J,borderRadius:ot,color:lt,placeholderColor:Ue,textColor:Ke,paddingSingle:qe,paddingMultiple:it,caretColor:rt,colorDisabled:Ge,textColorDisabled:Re,placeholderColorDisabled:t,colorActive:v,boxShadowFocus:z,boxShadowActive:V,boxShadowHover:E,border:_,borderFocus:N,borderHover:Q,borderActive:pe,arrowColor:Kt,arrowColorDisabled:qt,loadingColor:Gt,colorActiveWarning:Xt,boxShadowFocusWarning:Yt,boxShadowActiveWarning:Zt,boxShadowHoverWarning:Jt,borderWarning:Qt,borderFocusWarning:en,borderHoverWarning:tn,borderActiveWarning:nn,colorActiveError:on,boxShadowFocusError:ln,boxShadowActiveError:rn,boxShadowHoverError:an,borderError:sn,borderFocusError:dn,borderHoverError:cn,borderActiveError:un,clearColor:fn,clearColorHover:hn,clearColorPressed:vn,clearSize:gn,arrowSize:bn,[X("height",s)]:pn,[X("fontSize",s)]:mn}}=F.value,Xe=Pe(qe),Ye=Pe(it);return{"--n-bezier":C,"--n-border":_,"--n-border-active":pe,"--n-border-focus":N,"--n-border-hover":Q,"--n-border-radius":ot,"--n-box-shadow-active":V,"--n-box-shadow-focus":z,"--n-box-shadow-hover":E,"--n-caret-color":rt,"--n-color":lt,"--n-color-active":v,"--n-color-disabled":Ge,"--n-font-size":mn,"--n-height":pn,"--n-padding-single-top":Xe.top,"--n-padding-multiple-top":Ye.top,"--n-padding-single-right":Xe.right,"--n-padding-multiple-right":Ye.right,"--n-padding-single-left":Xe.left,"--n-padding-multiple-left":Ye.left,"--n-padding-single-bottom":Xe.bottom,"--n-padding-multiple-bottom":Ye.bottom,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":t,"--n-text-color":Ke,"--n-text-color-disabled":Re,"--n-arrow-color":Kt,"--n-arrow-color-disabled":qt,"--n-loading-color":Gt,"--n-color-active-warning":Xt,"--n-box-shadow-focus-warning":Yt,"--n-box-shadow-active-warning":Zt,"--n-box-shadow-hover-warning":Jt,"--n-border-warning":Qt,"--n-border-focus-warning":en,"--n-border-hover-warning":tn,"--n-border-active-warning":nn,"--n-color-active-error":on,"--n-box-shadow-focus-error":ln,"--n-box-shadow-active-error":rn,"--n-box-shadow-hover-error":an,"--n-border-error":sn,"--n-border-focus-error":dn,"--n-border-hover-error":cn,"--n-border-active-error":un,"--n-clear-size":gn,"--n-clear-color":fn,"--n-clear-color-hover":hn,"--n-clear-color-pressed":vn,"--n-arrow-size":bn,"--n-font-weight":J}}),re=Oe?We("internal-selection",O(()=>e.size[0]),Fe,e):void 0;return{mergedTheme:F,mergedClearable:M,mergedClsPrefix:n,rtlEnabled:l,patternInputFocused:P,filterablePlaceholder:W,label:w,selected:y,showTagsPanel:x,isComposing:Y,counterRef:p,counterWrapperRef:S,patternInputMirrorRef:i,patternInputRef:u,selfRef:f,multipleElRef:r,singleElRef:m,patternInputWrapperRef:g,overflowRef:k,inputTagElRef:h,handleMouseDown:q,handleFocusin:R,handleClear:U,handleMouseEnter:G,handleMouseLeave:K,handleDeleteOption:D,handlePatternKeyDown:c,handlePatternInputInput:j,handlePatternInputBlur:ve,handlePatternInputFocus:ye,handleMouseEnterCounter:Ne,handleMouseLeaveCounter:Le,handleFocusout:$,handleCompositionEnd:we,handleCompositionStart:le,onPopoverUpdateShow:Ae,focus:Ce,focusInput:ue,blur:ie,blurInput:_e,updateCounter:Be,getCounter:$e,getTail:Ee,renderLabel:e.renderLabel,cssVars:Oe?void 0:Fe,themeClass:re?.themeClass,onRender:re?.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:i,maxTagCount:u,bordered:f,clsPrefix:r,ellipsisTagPopoverProps:m,onRender:g,renderTag:p,renderLabel:S}=this;g?.();const k=u==="responsive",h=typeof u=="number",x=k||h,P=a($n,null,{default:()=>a(lo,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,M;return(M=(F=this.$slots).arrow)===null||M===void 0?void 0:M.call(F)}})});let L;if(n){const{labelField:F}=this,M=d=>a("div",{class:`${r}-base-selection-tag-wrapper`,key:d.value},p?p({option:d,handleClose:()=>{this.handleDeleteOption(d)}}):a(ft,{size:o,closable:!d.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(d)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(d,!0):Me(d[F],d,!0)})),W=()=>(h?this.selectedOptions.slice(0,u):this.selectedOptions).map(M),w=i?a("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,y=k?()=>a("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(ft,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let I;if(h){const d=this.selectedOptions.length-u;d>0&&(I=a("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},a(ft,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${d}`})))}const H=k?i?a(Rt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:W,counter:y,tail:()=>w}):a(Rt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:W,counter:y}):h&&I?W().concat(I):W(),fe=x?()=>a("div",{class:`${r}-base-selection-popover`},k?W():this.selectedOptions.map(M)):void 0,he=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},m):null,ne=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},a("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,de=i?a("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},H,k?null:w,P):a("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:l?void 0:0},H,P);L=a(En,null,x?a(Nn,Object.assign({},he,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>de,default:fe}):de,ne)}else if(i){const F=this.pattern||this.isComposing,M=this.active?!F:!this.selected,W=this.active?!1:this.selected;L=a("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:_t(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),W?a("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},a("div",{class:`${r}-base-selection-overlay__wrapper`},p?p({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):null,M?a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,P)}else L=a("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${r}-base-selection-input`,title:_t(this.label),key:"input"},a("div",{class:`${r}-base-selection-input__content`},p?p({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),P);return a("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},L,f?a("div",{class:`${r}-base-selection__border`}):null,f?a("div",{class:`${r}-base-selection__state-border`}):null)}});function tt(e){return e.type==="group"}function Ut(e){return e.type==="ignored"}function ht(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function zo(e,n){return{getIsGroup:tt,getIgnored:Ut,getKey(l){return tt(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function To(e,n,o,l){if(!n)return e;function i(u){if(!Array.isArray(u))return[];const f=[];for(const r of u)if(tt(r)){const m=i(r[l]);m.length&&f.push(Object.assign({},r,{[l]:m}))}else{if(Ut(r))continue;n(o,r)&&f.push(r)}return f}return i(e)}function Oo(e,n,o){const l=new Map;return e.forEach(i=>{tt(i)?i[o].forEach(u=>{l.set(u[n],u)}):l.set(i[n],i)}),l}const Io=ae([A("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),A("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[At({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Mo=Object.assign(Object.assign({},me.props),{to:bt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),vt=ce({name:"Select",props:Mo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:i}=He(e),u=me("Select","-select",Io,Un,e,n),f=T(e.defaultValue),r=te(e,"value"),m=kt(r,f),g=T(!1),p=T(""),S=Kn(e,["items","options"]),k=T([]),h=T([]),x=O(()=>h.value.concat(k.value).concat(S.value)),P=O(()=>{const{filter:t}=e;if(t)return t;const{labelField:v,valueField:z}=e;return(V,E)=>{if(!E)return!1;const _=E[v];if(typeof _=="string")return ht(V,_);const N=E[z];return typeof N=="string"?ht(V,N):typeof N=="number"?ht(V,String(N)):!1}}),L=O(()=>{if(e.remote)return S.value;{const{value:t}=x,{value:v}=p;return!v.length||!e.filterable?t:To(t,P.value,v,e.childrenField)}}),F=O(()=>{const{valueField:t,childrenField:v}=e,z=zo(t,v);return qn(L.value,z)}),M=O(()=>Oo(x.value,e.valueField,e.childrenField)),W=T(!1),w=kt(te(e,"show"),W),y=T(null),I=T(null),H=T(null),{localeRef:fe}=Dt("Select"),he=O(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:fe.value.placeholder}),se=[],ne=T(new Map),de=O(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:v,valueField:z}=e;return V=>({[v]:String(V),[z]:V})}return t===!1?!1:v=>Object.assign(t(v),{value:v})});function d(t){const v=e.remote,{value:z}=ne,{value:V}=M,{value:E}=de,_=[];return t.forEach(N=>{if(V.has(N))_.push(V.get(N));else if(v&&z.has(N))_.push(z.get(N));else if(E){const Q=E(N);Q&&_.push(Q)}}),_}const R=O(()=>{if(e.multiple){const{value:t}=m;return Array.isArray(t)?d(t):[]}return null}),$=O(()=>{const{value:t}=m;return!e.multiple&&!Array.isArray(t)?t===null?null:d([t])[0]||null:null}),U=Gn(e),{mergedSizeRef:G,mergedDisabledRef:K,mergedStatusRef:q}=U;function D(t,v){const{onChange:z,"onUpdate:value":V,onUpdateValue:E}=e,{nTriggerFormChange:_,nTriggerFormInput:N}=U;z&&be(z,t,v),E&&be(E,t,v),V&&be(V,t,v),f.value=t,_(),N()}function Y(t){const{onBlur:v}=e,{nTriggerFormBlur:z}=U;v&&be(v,t),z()}function c(){const{onClear:t}=e;t&&be(t)}function b(t){const{onFocus:v,showOnFocus:z}=e,{nTriggerFormFocus:V}=U;v&&be(v,t),V(),z&&ve()}function j(t){const{onSearch:v}=e;v&&be(v,t)}function le(t){const{onScroll:v}=e;v&&be(v,t)}function we(){var t;const{remote:v,multiple:z}=e;if(v){const{value:V}=ne;if(z){const{valueField:E}=e;(t=R.value)===null||t===void 0||t.forEach(_=>{V.set(_[E],_)})}else{const E=$.value;E&&V.set(E[e.valueField],E)}}}function ye(t){const{onUpdateShow:v,"onUpdate:show":z}=e;v&&be(v,t),z&&be(z,t),W.value=t}function ve(){K.value||(ye(!0),W.value=!0,e.filterable&&qe())}function ie(){ye(!1)}function Ce(){p.value="",h.value=se}const ue=T(!1);function _e(){e.filterable&&(ue.value=!0)}function Be(){e.filterable&&(ue.value=!1,w.value||Ce())}function $e(){K.value||(w.value?e.filterable?qe():ie():ve())}function Ee(t){var v,z;!((z=(v=H.value)===null||v===void 0?void 0:v.selfRef)===null||z===void 0)&&z.contains(t.relatedTarget)||(g.value=!1,Y(t),ie())}function Se(t){b(t),g.value=!0}function ke(){g.value=!0}function Ne(t){var v;!((v=y.value)===null||v===void 0)&&v.$el.contains(t.relatedTarget)||(g.value=!1,Y(t),ie())}function Le(){var t;(t=y.value)===null||t===void 0||t.focus(),ie()}function Ae(t){var v;w.value&&(!((v=y.value)===null||v===void 0)&&v.$el.contains(Yn(t))||ie())}function Oe(t){if(!Array.isArray(t))return[];if(de.value)return Array.from(t);{const{remote:v}=e,{value:z}=M;if(v){const{value:V}=ne;return t.filter(E=>z.has(E)||V.has(E))}else return t.filter(V=>z.has(V))}}function Fe(t){re(t.rawNode)}function re(t){if(K.value)return;const{tag:v,remote:z,clearFilterAfterSelect:V,valueField:E}=e;if(v&&!z){const{value:_}=h,N=_[0]||null;if(N){const Q=k.value;Q.length?Q.push(N):k.value=[N],h.value=se}}if(z&&ne.value.set(t[E],t),e.multiple){const _=Oe(m.value),N=_.findIndex(Q=>Q===t[E]);if(~N){if(_.splice(N,1),v&&!z){const Q=s(t[E]);~Q&&(k.value.splice(Q,1),V&&(p.value=""))}}else _.push(t[E]),V&&(p.value="");D(_,d(_))}else{if(v&&!z){const _=s(t[E]);~_?k.value=[k.value[_]]:k.value=se}Ke(),ie(),D(t[E],t)}}function s(t){return k.value.findIndex(z=>z[e.valueField]===t)}function C(t){w.value||ve();const{value:v}=t.target;p.value=v;const{tag:z,remote:V}=e;if(j(v),z&&!V){if(!v){h.value=se;return}const{onCreate:E}=e,_=E?E(v):{[e.labelField]:v,[e.valueField]:v},{valueField:N,labelField:Q}=e;S.value.some(pe=>pe[N]===_[N]||pe[Q]===_[Q])||k.value.some(pe=>pe[N]===_[N]||pe[Q]===_[Q])?h.value=se:h.value=[_]}}function J(t){t.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&ie(),c(),v?D([],[]):D(null,null)}function ot(t){!je(t,"action")&&!je(t,"empty")&&!je(t,"header")&&t.preventDefault()}function lt(t){le(t)}function Ue(t){var v,z,V,E,_;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((v=y.value)===null||v===void 0)&&v.isComposing)){if(w.value){const N=(z=H.value)===null||z===void 0?void 0:z.getPendingTmNode();N?Fe(N):e.filterable||(ie(),Ke())}else if(ve(),e.tag&&ue.value){const N=h.value[0];if(N){const Q=N[e.valueField],{value:pe}=m;e.multiple&&Array.isArray(pe)&&pe.includes(Q)||re(N)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;w.value&&((V=H.value)===null||V===void 0||V.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;w.value?(E=H.value)===null||E===void 0||E.next():ve();break;case"Escape":w.value&&(uo(t),ie()),(_=y.value)===null||_===void 0||_.focus();break}}function Ke(){var t;(t=y.value)===null||t===void 0||t.focus()}function qe(){var t;(t=y.value)===null||t===void 0||t.focusInput()}function it(){var t;w.value&&((t=I.value)===null||t===void 0||t.syncPosition())}we(),xe(te(e,"options"),we);const rt={focus:()=>{var t;(t=y.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=y.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=y.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=y.value)===null||t===void 0||t.blurInput()}},Ge=O(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),Re=i?We("select",void 0,Ge,e):void 0;return Object.assign(Object.assign({},rt),{mergedStatus:q,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:F,isMounted:Xn(),triggerRef:y,menuRef:H,pattern:p,uncontrolledShow:W,mergedShow:w,adjustedTo:bt(e),uncontrolledValue:f,mergedValue:m,followerRef:I,localizedPlaceholder:he,selectedOption:$,selectedOptions:R,mergedSize:G,mergedDisabled:K,focused:g,activeWithoutMenuOpen:ue,inlineThemeDisabled:i,onTriggerInputFocus:_e,onTriggerInputBlur:Be,handleTriggerOrMenuResize:it,handleMenuFocus:ke,handleMenuBlur:Ne,handleMenuTabOut:Le,handleTriggerClick:$e,handleToggle:Fe,handleDeleteOption:re,handlePatternInput:C,handleClear:J,handleTriggerBlur:Ee,handleTriggerFocus:Se,handleKeydown:Ue,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ae,handleMenuScroll:lt,handleMenuKeydown:Ue,handleMenuMousedown:ot,mergedTheme:u,cssVars:i?void 0:Ge,themeClass:Re?.themeClass,onRender:Re?.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Vn,null,{default:()=>[a(Dn,null,{default:()=>a(Fo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),a(jn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===bt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Hn(a(xo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[Wn,this.mergedShow],[St,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[St,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_o=ce({name:"OpenInNewFilled",render:function(n,o){return Je(),pt("svg",Po,o[0]||(o[0]=[De("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z",fill:"currentColor"},null,-1)]))}}),Bo={class:"p-4"},$o={class:"mt-2"},Eo={key:0},No={class:"mt-4"},jo=ce({__name:"FirmwareView",setup(e){const{data:n,isPending:o}=Ft(Ot.pet.getFirmwares,{}),{data:l,isPending:i}=Ft(Ot.pet.getSources,{}),u=T(0),f=T(null),r=T(""),m=T(""),{selectedSourceId:g}=Zn(oo()),p=[{label:"中国大陆",value:0},{label:"海外版",value:1}],S=O(()=>l.value?l.value.map(w=>({label:w.name,value:w._id})):[]),k=O(()=>n.value?n.value.map(w=>({label:w.name??w.fileName,value:w._id})):[]),h=T([]),x=O(()=>h.value.map(w=>`[${w.time}] SN: ${w.sn} ${w.result}`).join(`

`)),P=w=>{h.value.unshift({id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,time:new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),sn:r.value||"-",result:w})},L=O(()=>{if(!f.value||!g||!r.value)return"";const w=n.value?.find(I=>I._id===f.value),y=l.value?.find(I=>I._id===g.value);return!w||!y?"":u.value===0?`https://gw.pick-fun.com.cn/device/test/mqtt/upgrade?md5=${w.md5}&size=${w.size}&url=${encodeURIComponent(y.baseUrl+w.fileName)}&sn=${r.value}&test-verify=1111`:`https://gw.pick-fun.com/device/test/mqtt/upgrade?md5=${w.md5}&size=${w.size}&url=${encodeURIComponent(y.baseUrl+w.fileName)}&sn=${r.value}&test-verify=1111`}),F=O(()=>{if(!f.value||!g.value)return"";const w=n.value?.find(I=>I._id===f.value),y=l.value?.find(I=>I._id===g.value);return!w||!y?"":`${y.baseUrl}${w.fileName}`});xe(n,()=>{n.value?.find(w=>w._id===f.value)||(f.value=null)}),xe(l,()=>{l.value?.find(w=>w._id===g.value)||(g.value=null)});const M=async w=>{w.preventDefault();try{m.value="升级中...";const I=await(await fetch(L.value,{headers:{"Accept-Language":"zh-CN"}})).json(),H=JSON.stringify(I,null,2);m.value=H,P(I.message)}catch(y){const I=`错误: ${y}`;m.value=I,P(I)}},W=async w=>{w.preventDefault();try{const y=window.open(F.value,"_blank","noopener,noreferrer");if(y){y.focus?.(),m.value="Opened firmware URL in a new window";return}const I=document.createElement("a");I.href=F.value,I.target="_blank",I.rel="noopener noreferrer",document.body.appendChild(I),I.click(),I.remove()}catch(y){m.value=`Error: ${y}`}};return(w,y)=>{const I=to("NIcon");return Je(),pt("div",Bo,[De("div",$o,[ee(o)||ee(i)?(Je(),pt("div",Eo,"Loading...")):(Je(),Jn(ee(no),{key:1,inline:"","label-width":180},{default:ge(()=>[oe(ee(Ie),{path:"md5",label:"SN"},{default:ge(()=>[oe(ee(dt),{value:r.value,"onUpdate:value":y[0]||(y[0]=H=>r.value=H),valueModifiers:{trim:!0},placeholder:"输入序列号"},null,8,["value"])]),_:1}),oe(ee(Ie),{path:"md5",label:"当前版本"},{default:ge(()=>[oe(ee(vt),{value:u.value,"onUpdate:value":y[1]||(y[1]=H=>u.value=H),options:p,style:{"min-width":"180px"},placeholder:"选择版本"},null,8,["value"])]),_:1}),oe(ee(Ie),{path:"size",label:"目标固件版本"},{default:ge(()=>[oe(ee(vt),{value:f.value,"onUpdate:value":y[2]||(y[2]=H=>f.value=H),options:k.value,style:{"min-width":"180px"},placeholder:"选择目标固件版本"},null,8,["value","options"])]),_:1}),oe(ee(Ie),{ref:"rPasswordFormItemRef",first:"",path:"Source",label:"固件存储来源"},{default:ge(()=>[oe(ee(vt),{value:ee(g),"onUpdate:value":y[3]||(y[3]=H=>eo(g)?g.value=H:null),options:S.value,style:{"min-width":"180px"},placeholder:"选择固件存储来源"},null,8,["value","options"])]),_:1},512),oe(ee(Ie),null,{default:ge(()=>[oe(ee(zt),{type:"primary",disabled:!L.value,onClick:M},{default:ge(()=>y[5]||(y[5]=[Tt(" 推送升级包 ")])),_:1},8,["disabled"])]),_:1}),oe(ee(Ie),null,{default:ge(()=>[oe(ee(zt),{disabled:!F.value,onClick:W},{icon:ge(()=>[oe(I,null,{default:ge(()=>[oe(ee(_o))]),_:1})]),default:ge(()=>[y[6]||(y[6]=Tt(" 测试固件下载 "))]),_:1},8,["disabled"])]),_:1})]),_:1})),De("p",null,Qn(L.value),1),oe(ee(dt),{value:m.value,"onUpdate:value":y[4]||(y[4]=H=>m.value=H),type:"textarea",placeholder:"推送结果",readonly:"",autosize:{minRows:8}},null,8,["value"])]),De("div",No,[y[7]||(y[7]=De("h3",null,"升级日志",-1)),oe(ee(dt),{value:x.value,type:"textarea",placeholder:"升级日志",readonly:"",autosize:{minRows:5}},null,8,["value"])])])}}});export{jo as default};
