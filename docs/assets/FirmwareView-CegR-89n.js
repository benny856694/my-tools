import{J as T,c as O,L as Te,s as Je,d as ce,y as pt,m as a,V as yt,M as wn,N as rt,O as yn,P as xn,Q as tt,R as Cn,S as Rn,T as J,E as ht,U as Ve,W as Sn,X as at,Y as ye,Z as Et,h as N,l as P,k as ae,_ as Nt,n as je,B as me,$ as kn,C as q,G as He,a0 as Me,a1 as mt,a2 as Lt,j as X,i as ze,a3 as At,a4 as Qe,a5 as Fn,a6 as zn,a7 as Tn,q as wt,a8 as On,a9 as In,aa as Pe,ab as De,ac as Vt,ad as Mn,ae as Pn,af as _n,ag as xt,ah as be,ai as Bn,aj as $n,ak as Ct,al as En,am as Nn,an as Ln,ao as An,ap as Vn,aq as Dn,ar as jn,as as vt,at as Hn,au as Wn,av as Rt,aw as Un,ax as St,H as Kn,ay as qn,az as Gn,aA as Xn,aB as Yn,a as gt,b as bt,o as Ze,aC as kt,aD as Zn,aE as Jn,f as re,u as ee,w as ge,t as Qn,aF as eo,K as Ft,g as zt,r as to}from"./index-CgiPAuAw.js";import{a as Tt,N as no,b as Ie}from"./api-BTZncdjx.js";import{u as oo}from"./main-Dvb1KviM.js";import{u as Dt,a as lo,N as Ot}from"./Input-C_PwWI9J.js";function It(e){return e&-e}class jt{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let i=0;i<n+1;++i)l[i]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:i}=this;for(n+=1;n<=l;)i[n]+=o,n+=It(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*l;for(;n>0;)u+=o[n],n-=It(n);return u}getBound(n){let o=0,l=this.l;for(;l>o;){const i=Math.floor((o+l)/2),u=this.sum(i);if(u>n){l=i;continue}else if(u<n){if(o===i)return this.sum(o+1)<=n?o+1:i;o=i}else return i}return o}}let Ye;function io(){return typeof document>"u"?!1:(Ye===void 0&&("matchMedia"in window?Ye=window.matchMedia("(pointer:coarse)").matches:Ye=!1),Ye)}let st;function Mt(){return typeof document>"u"?1:(st===void 0&&(st="chrome"in window?window.devicePixelRatio:1),st)}const Ht="VVirtualListXScroll";function ro({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const l=T(0),i=T(0),u=O(()=>{const g=e.value;if(g.length===0)return null;const w=new jt(g.length,0);return g.forEach((S,k)=>{w.add(k,S.width)}),w}),f=Te(()=>{const g=u.value;return g!==null?Math.max(g.getBound(i.value)-1,0):0}),r=g=>{const w=u.value;return w!==null?w.sum(g):0},y=Te(()=>{const g=u.value;return g!==null?Math.min(g.getBound(i.value+l.value)+1,e.value.length-1):0});return Je(Ht,{startIndexRef:f,endIndexRef:y,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:r}),{listWidthRef:l,scrollLeftRef:i}}const Pt=ce({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:l,renderColRef:i,renderItemWithColsRef:u}=pt(Ht);return{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:u,getLeft:l}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:i,getLeft:u,item:f}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:f,getLeft:u});if(l!=null){const r=[];for(let y=e;y<=n;++y){const g=o[y];r.push(l({column:g,left:u(y),item:f}))}return r}return null}}),ao=rt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[rt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[rt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),so=ce({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=yn();ao.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:xn,ssr:n}),tt(()=>{const{defaultScrollIndex:d,defaultScrollKey:R}=e;d!=null?A({index:d}):R!=null&&A({key:R})});let o=!1,l=!1;Cn(()=>{if(o=!1,!l){l=!0;return}A({top:h.value,left:f.value})}),Rn(()=>{o=!0,l||(l=!0)});const i=Te(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let d=0;return e.columns.forEach(R=>{d+=R.width}),d}),u=O(()=>{const d=new Map,{keyField:R}=e;return e.items.forEach((B,j)=>{d.set(B[R],j)}),d}),{scrollLeftRef:f,listWidthRef:r}=ro({columnsRef:J(e,"columns"),renderColRef:J(e,"renderCol"),renderItemWithColsRef:J(e,"renderItemWithCols")}),y=T(null),g=T(void 0),w=new Map,S=O(()=>{const{items:d,itemSize:R,keyField:B}=e,j=new jt(d.length,R);return d.forEach((K,H)=>{const W=K[B],V=w.get(W);V!==void 0&&j.add(H,V)}),j}),k=T(0),h=T(0),x=Te(()=>Math.max(S.value.getBound(h.value-ht(e.paddingTop))-1,0)),_=O(()=>{const{value:d}=g;if(d===void 0)return[];const{items:R,itemSize:B}=e,j=x.value,K=Math.min(j+Math.ceil(d/B+1),R.length-1),H=[];for(let W=j;W<=K;++W)H.push(R[W]);return H}),A=(d,R)=>{if(typeof d=="number"){I(d,R,"auto");return}const{left:B,top:j,index:K,key:H,position:W,behavior:V,debounce:G=!0}=d;if(B!==void 0||j!==void 0)I(B,j,V);else if(K!==void 0)F(K,V,G);else if(H!==void 0){const c=u.value.get(H);c!==void 0&&F(c,V,G)}else W==="bottom"?I(0,Number.MAX_SAFE_INTEGER,V):W==="top"&&I(0,0,V)};let m,b=null;function F(d,R,B){const{value:j}=S,K=j.sum(d)+ht(e.paddingTop);if(!B)y.value.scrollTo({left:0,top:K,behavior:R});else{m=d,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{m=void 0,b=null},16);const{scrollTop:H,offsetHeight:W}=y.value;if(K>H){const V=j.get(d);K+V<=H+W||y.value.scrollTo({left:0,top:K+V-W,behavior:R})}else y.value.scrollTo({left:0,top:K,behavior:R})}}function I(d,R,B){y.value.scrollTo({left:d,top:R,behavior:B})}function U(d,R){var B,j,K;if(o||e.ignoreItemResize||de(R.target))return;const{value:H}=S,W=u.value.get(d),V=H.get(W),G=(K=(j=(B=R.borderBoxSize)===null||B===void 0?void 0:B[0])===null||j===void 0?void 0:j.blockSize)!==null&&K!==void 0?K:R.contentRect.height;if(G===V)return;G-e.itemSize===0?w.delete(d):w.set(d,G-e.itemSize);const p=G-V;if(p===0)return;H.add(W,p);const D=y.value;if(D!=null){if(m===void 0){const oe=H.sum(W);D.scrollTop>oe&&D.scrollBy(0,p)}else if(W<m)D.scrollBy(0,p);else if(W===m){const oe=H.sum(W);G+oe>D.scrollTop+D.offsetHeight&&D.scrollBy(0,p)}ne()}k.value++}const te=!io();let Q=!1;function fe(d){var R;(R=e.onScroll)===null||R===void 0||R.call(e,d),(!te||!Q)&&ne()}function he(d){var R;if((R=e.onWheel)===null||R===void 0||R.call(e,d),te){const B=y.value;if(B!=null){if(d.deltaX===0&&(B.scrollTop===0&&d.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),B.scrollTop+=d.deltaY/Mt(),B.scrollLeft+=d.deltaX/Mt(),ne(),Q=!0,Sn(()=>{Q=!1})}}}function se(d){if(o||de(d.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(d.contentRect.height===g.value)return}else if(d.contentRect.height===g.value&&d.contentRect.width===r.value)return;g.value=d.contentRect.height,r.value=d.contentRect.width;const{onResize:R}=e;R!==void 0&&R(d)}function ne(){const{value:d}=y;d!=null&&(h.value=d.scrollTop,f.value=d.scrollLeft)}function de(d){let R=d;for(;R!==null;){if(R.style.display==="none")return!0;R=R.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:u,itemsStyle:O(()=>{const{itemResizable:d}=e,R=Ve(S.value.sum());return k.value,[e.itemsStyle,{boxSizing:"content-box",width:Ve(i.value),height:d?"":R,minHeight:d?R:"",paddingTop:Ve(e.paddingTop),paddingBottom:Ve(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(k.value,{transform:`translateY(${Ve(S.value.sum(x.value))})`})),viewportItems:_,listElRef:y,itemsElRef:T(null),scrollTo:A,handleListResize:se,handleListScroll:fe,handleListWheel:he,handleItemResize:U}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return a(yt,{onResize:this.handleListResize},{default:()=>{var i,u;return a("div",wn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:f,renderItemWithCols:r}=this;return this.viewportItems.map(y=>{const g=y[n],w=o.get(g),S=f!=null?a(Pt,{index:w,item:y}):void 0,k=r!=null?a(Pt,{index:w,item:y}):void 0,h=this.$slots.default({item:y,renderedCols:S,renderedItemWithCols:k,index:w})[0];return e?a(yt,{key:g,onResize:x=>this.handleItemResize(g,x)},{default:()=>h}):(h.key=g,h)})}})]):(u=(i=this.$slots).empty)===null||u===void 0?void 0:u.call(i)])}})}});function Wt(e,n){n&&(tt(()=>{const{value:o}=e;o&&at.registerHandler(o,n)}),ye(e,(o,l)=>{l&&at.unregisterHandler(l)},{deep:!1}),Et(()=>{const{value:o}=e;o&&at.unregisterHandler(o)}))}const co=new WeakSet;function uo(e){co.add(e)}function _t(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function dt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const fo=ce({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ho=ce({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vo=ce({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),go=N("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[P("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ae("+",[P("description",`
 margin-top: 8px;
 `)])]),P("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),P("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),bo=Object.assign(Object.assign({},me.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),po=ce({name:"Empty",props:bo,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:l}=je(e),i=me("Empty","-empty",go,kn,e,n),{localeRef:u}=Dt("Empty"),f=O(()=>{var w,S,k;return(w=e.description)!==null&&w!==void 0?w:(k=(S=l?.value)===null||S===void 0?void 0:S.Empty)===null||k===void 0?void 0:k.description}),r=O(()=>{var w,S;return((S=(w=l?.value)===null||w===void 0?void 0:w.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>a(ho,null))}),y=O(()=>{const{size:w}=e,{common:{cubicBezierEaseInOut:S},self:{[q("iconSize",w)]:k,[q("fontSize",w)]:h,textColor:x,iconColor:_,extraTextColor:A}}=i.value;return{"--n-icon-size":k,"--n-font-size":h,"--n-bezier":S,"--n-text-color":x,"--n-icon-color":_,"--n-extra-text-color":A}}),g=o?He("empty",O(()=>{let w="";const{size:S}=e;return w+=S[0],w}),y,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:r,localizedDescription:O(()=>f.value||u.value.description),cssVars:o?void 0:y,themeClass:g?.themeClass,onRender:g?.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o?.(),a("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${n}-empty__icon`},e.icon?e.icon():a(Nt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Bt=ce({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=pt(mt);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:i}}=this,u=l?.(i),f=n?n(i,!1):Me(i[this.labelField],i,!1),r=a("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u?.class]}),f);return i.render?i.render({node:r,option:i}):o?o({node:r,option:i,selected:!1}):r}});function mo(e,n){return a(Lt,{name:"fade-in-scale-up-transition"},{default:()=>e?a(Nt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>a(fo)}):null})}const $t=ce({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:i,renderLabelRef:u,renderOptionRef:f,labelFieldRef:r,valueFieldRef:y,showCheckmarkRef:g,nodePropsRef:w,handleOptionClick:S,handleOptionMouseEnter:k}=pt(mt),h=Te(()=>{const{value:m}=o;return m?e.tmNode.key===m.key:!1});function x(m){const{tmNode:b}=e;b.disabled||S(m,b)}function _(m){const{tmNode:b}=e;b.disabled||k(m,b)}function A(m){const{tmNode:b}=e,{value:F}=h;b.disabled||F||k(m,b)}return{multiple:l,isGrouped:Te(()=>{const{tmNode:m}=e,{parent:b}=m;return b&&b.rawNode.type==="group"}),showCheckmark:g,nodeProps:w,isPending:h,isSelected:Te(()=>{const{value:m}=n,{value:b}=l;if(m===null)return!1;const F=e.tmNode.rawNode[y.value];if(b){const{value:I}=i;return I.has(F)}else return m===F}),labelField:r,renderLabel:u,renderOption:f,handleMouseMove:A,handleMouseEnter:_,handleClick:x}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:i,showCheckmark:u,nodeProps:f,renderOption:r,renderLabel:y,handleClick:g,handleMouseEnter:w,handleMouseMove:S}=this,k=mo(o,e),h=y?[y(n,o),u&&k]:[Me(n[this.labelField],n,o),u&&k],x=f?.(n),_=a("div",Object.assign({},x,{class:[`${e}-base-select-option`,n.class,x?.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:u}],style:[x?.style||"",n.style||""],onClick:dt([g,x?.onClick]),onMouseenter:dt([w,x?.onMouseenter]),onMousemove:dt([S,x?.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},h));return n.render?n.render({node:_,option:n,selected:o}):r?r({node:_,option:n,selected:o}):_}}),wo=N("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[N("scrollbar",`
 max-height: var(--n-height);
 `),N("virtual-list",`
 max-height: var(--n-height);
 `),N("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[P("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),N("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),N("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),P("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),P("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),P("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),P("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),N("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),N("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[X("show-checkmark",`
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
 `),X("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),X("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),X("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),X("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),X("disabled",`
 cursor: not-allowed;
 `,[ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),X("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),P("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[At({enterScale:"0.5"})])])]),yo=ce({name:"InternalSelectMenu",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=je(e),l=wt("InternalSelectMenu",o,n),i=me("InternalSelectMenu","-internal-select-menu",wo,On,e,J(e,"clsPrefix")),u=T(null),f=T(null),r=T(null),y=O(()=>e.treeMate.getFlattenedNodes()),g=O(()=>In(y.value)),w=T(null);function S(){const{treeMate:c}=e;let p=null;const{value:D}=e;D===null?p=c.getFirstAvailableNode():(e.multiple?p=c.getNode((D||[])[(D||[]).length-1]):p=c.getNode(D),(!p||p.disabled)&&(p=c.getFirstAvailableNode())),R(p||null)}function k(){const{value:c}=w;c&&!e.treeMate.getNode(c.key)&&(w.value=null)}let h;ye(()=>e.show,c=>{c?h=ye(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():k(),Vt(B)):k()},{immediate:!0}):h?.()},{immediate:!0}),Et(()=>{h?.()});const x=O(()=>ht(i.value.self[q("optionHeight",e.size)])),_=O(()=>Pe(i.value.self[q("padding",e.size)])),A=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),m=O(()=>{const c=y.value;return c&&c.length===0});function b(c){const{onToggle:p}=e;p&&p(c)}function F(c){const{onScroll:p}=e;p&&p(c)}function I(c){var p;(p=r.value)===null||p===void 0||p.sync(),F(c)}function U(){var c;(c=r.value)===null||c===void 0||c.sync()}function te(){const{value:c}=w;return c||null}function Q(c,p){p.disabled||R(p,!1)}function fe(c,p){p.disabled||b(p)}function he(c){var p;De(c,"action")||(p=e.onKeyup)===null||p===void 0||p.call(e,c)}function se(c){var p;De(c,"action")||(p=e.onKeydown)===null||p===void 0||p.call(e,c)}function ne(c){var p;(p=e.onMousedown)===null||p===void 0||p.call(e,c),!e.focusable&&c.preventDefault()}function de(){const{value:c}=w;c&&R(c.getNext({loop:!0}),!0)}function d(){const{value:c}=w;c&&R(c.getPrev({loop:!0}),!0)}function R(c,p=!1){w.value=c,p&&B()}function B(){var c,p;const D=w.value;if(!D)return;const oe=g.value(D.key);oe!==null&&(e.virtualScroll?(c=f.value)===null||c===void 0||c.scrollTo({index:oe}):(p=r.value)===null||p===void 0||p.scrollTo({index:oe,elSize:x.value}))}function j(c){var p,D;!((p=u.value)===null||p===void 0)&&p.contains(c.target)&&((D=e.onFocus)===null||D===void 0||D.call(e,c))}function K(c){var p,D;!((p=u.value)===null||p===void 0)&&p.contains(c.relatedTarget)||(D=e.onBlur)===null||D===void 0||D.call(e,c)}Je(mt,{handleOptionMouseEnter:Q,handleOptionClick:fe,valueSetRef:A,pendingTmNodeRef:w,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),Je(Mn,u),tt(()=>{const{value:c}=r;c&&c.sync()});const H=O(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:p},self:{height:D,borderRadius:oe,color:we,groupHeaderTextColor:xe,actionDividerColor:ve,optionTextColorPressed:le,optionTextColor:Ce,optionTextColorDisabled:ue,optionTextColorActive:_e,optionOpacityDisabled:Be,optionCheckColor:$e,actionTextColor:Ee,optionColorPending:Se,optionColorActive:ke,loadingColor:Ne,loadingSize:Le,optionColorActivePending:Ae,[q("optionFontSize",c)]:Oe,[q("optionHeight",c)]:Fe,[q("optionPadding",c)]:ie}}=i.value;return{"--n-height":D,"--n-action-divider-color":ve,"--n-action-text-color":Ee,"--n-bezier":p,"--n-border-radius":oe,"--n-color":we,"--n-option-font-size":Oe,"--n-group-header-text-color":xe,"--n-option-check-color":$e,"--n-option-color-pending":Se,"--n-option-color-active":ke,"--n-option-color-active-pending":Ae,"--n-option-height":Fe,"--n-option-opacity-disabled":Be,"--n-option-text-color":Ce,"--n-option-text-color-active":_e,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":le,"--n-option-padding":ie,"--n-option-padding-left":Pe(ie,"left"),"--n-option-padding-right":Pe(ie,"right"),"--n-loading-color":Ne,"--n-loading-size":Le}}),{inlineThemeDisabled:W}=e,V=W?He("internal-select-menu",O(()=>e.size[0]),H,e):void 0,G={selfRef:u,next:de,prev:d,getPendingTmNode:te};return Wt(u,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:l,virtualListRef:f,scrollbarRef:r,itemSize:x,padding:_,flattenedNodes:y,empty:m,virtualListContainer(){const{value:c}=f;return c?.listElRef},virtualListContent(){const{value:c}=f;return c?.itemsElRef},doScroll:F,handleFocusin:j,handleFocusout:K,handleKeyUp:he,handleKeyDown:se,handleMouseDown:ne,handleVirtualListResize:U,handleVirtualListScroll:I,cssVars:W?void 0:H,themeClass:V?.themeClass,onRender:V?.onRender},G)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:i,onRender:u}=this;return u?.(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,i,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Qe(e.header,f=>f&&a("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},f)),this.loading?a("div",{class:`${o}-base-select-menu__loading`},a(Fn,{clsPrefix:o,strokeWidth:20})):this.empty?a("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Tn(e.empty,()=>[a(po,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):a(zn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?a(so,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?a(Bt,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:a($t,{clsPrefix:o,key:f.key,tmNode:f})}):a("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?a(Bt,{key:f.key,clsPrefix:o,tmNode:f}):a($t,{clsPrefix:o,key:f.key,tmNode:f})))}),Qe(e.action,f=>f&&[a("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),a(vo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),xo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Co=N("tag",`
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
`,[X("strong",`
 font-weight: var(--n-font-weight-strong);
 `),P("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),P("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),P("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),P("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[P("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),P("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),X("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),X("icon, avatar",[X("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),X("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),X("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ze("disabled",[ae("&:hover","background-color: var(--n-color-hover-checkable);",[ze("checked","color: var(--n-text-color-hover-checkable);")]),ae("&:active","background-color: var(--n-color-pressed-checkable);",[ze("checked","color: var(--n-text-color-pressed-checkable);")])]),X("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ze("disabled",[ae("&:hover","background-color: var(--n-color-checked-hover);"),ae("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ro=Object.assign(Object.assign(Object.assign({},me.props),xo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),So=Bn("n-tag"),ct=ce({name:"Tag",props:Ro,slots:Object,setup(e){const n=T(null),{mergedBorderedRef:o,mergedClsPrefixRef:l,inlineThemeDisabled:i,mergedRtlRef:u}=je(e),f=me("Tag","-tag",Co,_n,e,l);Je(So,{roundRef:J(e,"round")});function r(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:x,onUpdateChecked:_,"onUpdate:checked":A}=e;_&&_(!h),A&&A(!h),x&&x(!h)}}function y(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:x}=e;x&&be(x,h)}}const g={setTextContent(h){const{value:x}=n;x&&(x.textContent=h)}},w=wt("Tag",u,l),S=O(()=>{const{type:h,size:x,color:{color:_,textColor:A}={}}=e,{common:{cubicBezierEaseInOut:m},self:{padding:b,closeMargin:F,borderRadius:I,opacityDisabled:U,textColorCheckable:te,textColorHoverCheckable:Q,textColorPressedCheckable:fe,textColorChecked:he,colorCheckable:se,colorHoverCheckable:ne,colorPressedCheckable:de,colorChecked:d,colorCheckedHover:R,colorCheckedPressed:B,closeBorderRadius:j,fontWeightStrong:K,[q("colorBordered",h)]:H,[q("closeSize",x)]:W,[q("closeIconSize",x)]:V,[q("fontSize",x)]:G,[q("height",x)]:c,[q("color",h)]:p,[q("textColor",h)]:D,[q("border",h)]:oe,[q("closeIconColor",h)]:we,[q("closeIconColorHover",h)]:xe,[q("closeIconColorPressed",h)]:ve,[q("closeColorHover",h)]:le,[q("closeColorPressed",h)]:Ce}}=f.value,ue=Pe(F);return{"--n-font-weight-strong":K,"--n-avatar-size-override":`calc(${c} - 8px)`,"--n-bezier":m,"--n-border-radius":I,"--n-border":oe,"--n-close-icon-size":V,"--n-close-color-pressed":Ce,"--n-close-color-hover":le,"--n-close-border-radius":j,"--n-close-icon-color":we,"--n-close-icon-color-hover":xe,"--n-close-icon-color-pressed":ve,"--n-close-icon-color-disabled":we,"--n-close-margin-top":ue.top,"--n-close-margin-right":ue.right,"--n-close-margin-bottom":ue.bottom,"--n-close-margin-left":ue.left,"--n-close-size":W,"--n-color":_||(o.value?H:p),"--n-color-checkable":se,"--n-color-checked":d,"--n-color-checked-hover":R,"--n-color-checked-pressed":B,"--n-color-hover-checkable":ne,"--n-color-pressed-checkable":de,"--n-font-size":G,"--n-height":c,"--n-opacity-disabled":U,"--n-padding":b,"--n-text-color":A||D,"--n-text-color-checkable":te,"--n-text-color-checked":he,"--n-text-color-hover-checkable":Q,"--n-text-color-pressed-checkable":fe}}),k=i?He("tag",O(()=>{let h="";const{type:x,size:_,color:{color:A,textColor:m}={}}=e;return h+=x[0],h+=_[0],A&&(h+=`a${xt(A)}`),m&&(h+=`b${xt(m)}`),o.value&&(h+="c"),h}),S,e):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:w,mergedClsPrefix:l,contentRef:n,mergedBordered:o,handleClick:r,handleCloseClick:y,cssVars:i?void 0:S,themeClass:k?.themeClass,onRender:k?.onRender})},render(){var e,n;const{mergedClsPrefix:o,rtlEnabled:l,closable:i,color:{borderColor:u}={},round:f,onRender:r,$slots:y}=this;r?.();const g=Qe(y.avatar,S=>S&&a("div",{class:`${o}-tag__avatar`},S)),w=Qe(y.icon,S=>S&&a("div",{class:`${o}-tag__icon`},S));return a("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:l,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:g,[`${o}-tag--icon`]:w,[`${o}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},w||g,a("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&i?a(Pn,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${o}-tag__border`,style:{borderColor:u}}):null)}}),ko=ae([N("base-selection",`
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
 `,[N("base-loading",`
 color: var(--n-loading-color);
 `),N("base-selection-tags","min-height: var(--n-height);"),P("border, state-border",`
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
 `),P("state-border",`
 z-index: 1;
 border-color: #0000;
 `),N("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[P("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),N("base-selection-overlay",`
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
 `,[P("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),N("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[P("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),N("base-selection-tags",`
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
 `),N("base-selection-label",`
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
 `,[N("base-selection-input",`
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
 `,[P("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),P("render-label",`
 color: var(--n-text-color);
 `)]),ze("disabled",[ae("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),X("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),X("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),N("base-selection-label","background-color: var(--n-color-active);"),N("base-selection-tags","background-color: var(--n-color-active);")])]),X("disabled","cursor: not-allowed;",[P("arrow",`
 color: var(--n-arrow-color-disabled);
 `),N("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[N("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),P("render-label",`
 color: var(--n-text-color-disabled);
 `)]),N("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),N("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),N("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[P("input",`
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
 `),P("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>X(`${e}-status`,[P("state-border",`border: var(--n-border-${e});`),ze("disabled",[ae("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),X("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),N("base-selection-label",`background-color: var(--n-color-active-${e});`),N("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),X("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),N("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),N("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),N("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[P("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Fo=ce({name:"InternalSelection",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=je(e),l=wt("InternalSelection",o,n),i=T(null),u=T(null),f=T(null),r=T(null),y=T(null),g=T(null),w=T(null),S=T(null),k=T(null),h=T(null),x=T(!1),_=T(!1),A=T(!1),m=me("InternalSelection","-internal-selection",ko,Ln,e,J(e,"clsPrefix")),b=O(()=>e.clearable&&!e.disabled&&(A.value||e.active)),F=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Me(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),I=O(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),U=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function te(){var s;const{value:C}=i;if(C){const{value:Y}=u;Y&&(Y.style.width=`${C.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=k.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function Q(){const{value:s}=h;s&&(s.style.display="none")}function fe(){const{value:s}=h;s&&(s.style.display="inline-block")}ye(J(e,"active"),s=>{s||Q()}),ye(J(e,"pattern"),()=>{e.multiple&&Vt(te)});function he(s){const{onFocus:C}=e;C&&C(s)}function se(s){const{onBlur:C}=e;C&&C(s)}function ne(s){const{onDeleteOption:C}=e;C&&C(s)}function de(s){const{onClear:C}=e;C&&C(s)}function d(s){const{onPatternInput:C}=e;C&&C(s)}function R(s){var C;(!s.relatedTarget||!(!((C=f.value)===null||C===void 0)&&C.contains(s.relatedTarget)))&&he(s)}function B(s){var C;!((C=f.value)===null||C===void 0)&&C.contains(s.relatedTarget)||se(s)}function j(s){de(s)}function K(){A.value=!0}function H(){A.value=!1}function W(s){!e.active||!e.filterable||s.target!==u.value&&s.preventDefault()}function V(s){ne(s)}const G=T(!1);function c(s){if(s.key==="Backspace"&&!G.value&&!e.pattern.length){const{selectedOptions:C}=e;C?.length&&V(C[C.length-1])}}let p=null;function D(s){const{value:C}=i;if(C){const Y=s.target.value;C.textContent=Y,te()}e.ignoreComposition&&G.value?p=s:d(s)}function oe(){G.value=!0}function we(){G.value=!1,e.ignoreComposition&&d(p),p=null}function xe(s){var C;_.value=!0,(C=e.onPatternFocus)===null||C===void 0||C.call(e,s)}function ve(s){var C;_.value=!1,(C=e.onPatternBlur)===null||C===void 0||C.call(e,s)}function le(){var s,C;if(e.filterable)_.value=!1,(s=g.value)===null||s===void 0||s.blur(),(C=u.value)===null||C===void 0||C.blur();else if(e.multiple){const{value:Y}=r;Y?.blur()}else{const{value:Y}=y;Y?.blur()}}function Ce(){var s,C,Y;e.filterable?(_.value=!1,(s=g.value)===null||s===void 0||s.focus()):e.multiple?(C=r.value)===null||C===void 0||C.focus():(Y=y.value)===null||Y===void 0||Y.focus()}function ue(){const{value:s}=u;s&&(fe(),s.focus())}function _e(){const{value:s}=u;s&&s.blur()}function Be(s){const{value:C}=w;C&&C.setTextContent(`+${s}`)}function $e(){const{value:s}=S;return s}function Ee(){return u.value}let Se=null;function ke(){Se!==null&&window.clearTimeout(Se)}function Ne(){e.active||(ke(),Se=window.setTimeout(()=>{U.value&&(x.value=!0)},100))}function Le(){ke()}function Ae(s){s||(ke(),x.value=!1)}ye(U,s=>{s||(x.value=!1)}),tt(()=>{An(()=>{const s=g.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=_.value?-1:0)})}),Wt(f,e.onResize);const{inlineThemeDisabled:Oe}=e,Fe=O(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:C},self:{fontWeight:Y,borderRadius:nt,color:ot,placeholderColor:We,textColor:Ue,paddingSingle:Ke,paddingMultiple:lt,caretColor:it,colorDisabled:qe,textColorDisabled:Re,placeholderColorDisabled:t,colorActive:v,boxShadowFocus:z,boxShadowActive:L,boxShadowHover:$,border:M,borderFocus:E,borderHover:Z,borderActive:pe,arrowColor:Kt,arrowColorDisabled:qt,loadingColor:Gt,colorActiveWarning:Xt,boxShadowFocusWarning:Yt,boxShadowActiveWarning:Zt,boxShadowHoverWarning:Jt,borderWarning:Qt,borderFocusWarning:en,borderHoverWarning:tn,borderActiveWarning:nn,colorActiveError:on,boxShadowFocusError:ln,boxShadowActiveError:rn,boxShadowHoverError:an,borderError:sn,borderFocusError:dn,borderHoverError:cn,borderActiveError:un,clearColor:fn,clearColorHover:hn,clearColorPressed:vn,clearSize:gn,arrowSize:bn,[q("height",s)]:pn,[q("fontSize",s)]:mn}}=m.value,Ge=Pe(Ke),Xe=Pe(lt);return{"--n-bezier":C,"--n-border":M,"--n-border-active":pe,"--n-border-focus":E,"--n-border-hover":Z,"--n-border-radius":nt,"--n-box-shadow-active":L,"--n-box-shadow-focus":z,"--n-box-shadow-hover":$,"--n-caret-color":it,"--n-color":ot,"--n-color-active":v,"--n-color-disabled":qe,"--n-font-size":mn,"--n-height":pn,"--n-padding-single-top":Ge.top,"--n-padding-multiple-top":Xe.top,"--n-padding-single-right":Ge.right,"--n-padding-multiple-right":Xe.right,"--n-padding-single-left":Ge.left,"--n-padding-multiple-left":Xe.left,"--n-padding-single-bottom":Ge.bottom,"--n-padding-multiple-bottom":Xe.bottom,"--n-placeholder-color":We,"--n-placeholder-color-disabled":t,"--n-text-color":Ue,"--n-text-color-disabled":Re,"--n-arrow-color":Kt,"--n-arrow-color-disabled":qt,"--n-loading-color":Gt,"--n-color-active-warning":Xt,"--n-box-shadow-focus-warning":Yt,"--n-box-shadow-active-warning":Zt,"--n-box-shadow-hover-warning":Jt,"--n-border-warning":Qt,"--n-border-focus-warning":en,"--n-border-hover-warning":tn,"--n-border-active-warning":nn,"--n-color-active-error":on,"--n-box-shadow-focus-error":ln,"--n-box-shadow-active-error":rn,"--n-box-shadow-hover-error":an,"--n-border-error":sn,"--n-border-focus-error":dn,"--n-border-hover-error":cn,"--n-border-active-error":un,"--n-clear-size":gn,"--n-clear-color":fn,"--n-clear-color-hover":hn,"--n-clear-color-pressed":vn,"--n-arrow-size":bn,"--n-font-weight":Y}}),ie=Oe?He("internal-selection",O(()=>e.size[0]),Fe,e):void 0;return{mergedTheme:m,mergedClearable:b,mergedClsPrefix:n,rtlEnabled:l,patternInputFocused:_,filterablePlaceholder:F,label:I,selected:U,showTagsPanel:x,isComposing:G,counterRef:w,counterWrapperRef:S,patternInputMirrorRef:i,patternInputRef:u,selfRef:f,multipleElRef:r,singleElRef:y,patternInputWrapperRef:g,overflowRef:k,inputTagElRef:h,handleMouseDown:W,handleFocusin:R,handleClear:j,handleMouseEnter:K,handleMouseLeave:H,handleDeleteOption:V,handlePatternKeyDown:c,handlePatternInputInput:D,handlePatternInputBlur:ve,handlePatternInputFocus:xe,handleMouseEnterCounter:Ne,handleMouseLeaveCounter:Le,handleFocusout:B,handleCompositionEnd:we,handleCompositionStart:oe,onPopoverUpdateShow:Ae,focus:Ce,focusInput:ue,blur:le,blurInput:_e,updateCounter:Be,getCounter:$e,getTail:Ee,renderLabel:e.renderLabel,cssVars:Oe?void 0:Fe,themeClass:ie?.themeClass,onRender:ie?.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:i,maxTagCount:u,bordered:f,clsPrefix:r,ellipsisTagPopoverProps:y,onRender:g,renderTag:w,renderLabel:S}=this;g?.();const k=u==="responsive",h=typeof u=="number",x=k||h,_=a($n,null,{default:()=>a(lo,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var m,b;return(b=(m=this.$slots).arrow)===null||b===void 0?void 0:b.call(m)}})});let A;if(n){const{labelField:m}=this,b=d=>a("div",{class:`${r}-base-selection-tag-wrapper`,key:d.value},w?w({option:d,handleClose:()=>{this.handleDeleteOption(d)}}):a(ct,{size:o,closable:!d.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(d)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(d,!0):Me(d[m],d,!0)})),F=()=>(h?this.selectedOptions.slice(0,u):this.selectedOptions).map(b),I=i?a("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,U=k?()=>a("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(ct,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let te;if(h){const d=this.selectedOptions.length-u;d>0&&(te=a("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},a(ct,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${d}`})))}const Q=k?i?a(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:U,tail:()=>I}):a(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:U}):h&&te?F().concat(te):F(),fe=x?()=>a("div",{class:`${r}-base-selection-popover`},k?F():this.selectedOptions.map(b)):void 0,he=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},y):null,ne=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},a("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,de=i?a("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},Q,k?null:I,_):a("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:l?void 0:0},Q,_);A=a(En,null,x?a(Nn,Object.assign({},he,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>de,default:fe}):de,ne)}else if(i){const m=this.pattern||this.isComposing,b=this.active?!m:!this.selected,F=this.active?!1:this.selected;A=a("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:_t(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),F?a("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},a("div",{class:`${r}-base-selection-overlay__wrapper`},w?w({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):null,b?a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else A=a("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${r}-base-selection-input`,title:_t(this.label),key:"input"},a("div",{class:`${r}-base-selection-input__content`},w?w({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),_);return a("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},A,f?a("div",{class:`${r}-base-selection__border`}):null,f?a("div",{class:`${r}-base-selection__state-border`}):null)}});function et(e){return e.type==="group"}function Ut(e){return e.type==="ignored"}function ut(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function zo(e,n){return{getIsGroup:et,getIgnored:Ut,getKey(l){return et(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function To(e,n,o,l){if(!n)return e;function i(u){if(!Array.isArray(u))return[];const f=[];for(const r of u)if(et(r)){const y=i(r[l]);y.length&&f.push(Object.assign({},r,{[l]:y}))}else{if(Ut(r))continue;n(o,r)&&f.push(r)}return f}return i(e)}function Oo(e,n,o){const l=new Map;return e.forEach(i=>{et(i)?i[o].forEach(u=>{l.set(u[n],u)}):l.set(i[n],i)}),l}const Io=ae([N("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),N("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[At({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Mo=Object.assign(Object.assign({},me.props),{to:vt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ft=ce({name:"Select",props:Mo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:i}=je(e),u=me("Select","-select",Io,Un,e,n),f=T(e.defaultValue),r=J(e,"value"),y=St(r,f),g=T(!1),w=T(""),S=Kn(e,["items","options"]),k=T([]),h=T([]),x=O(()=>h.value.concat(k.value).concat(S.value)),_=O(()=>{const{filter:t}=e;if(t)return t;const{labelField:v,valueField:z}=e;return(L,$)=>{if(!$)return!1;const M=$[v];if(typeof M=="string")return ut(L,M);const E=$[z];return typeof E=="string"?ut(L,E):typeof E=="number"?ut(L,String(E)):!1}}),A=O(()=>{if(e.remote)return S.value;{const{value:t}=x,{value:v}=w;return!v.length||!e.filterable?t:To(t,_.value,v,e.childrenField)}}),m=O(()=>{const{valueField:t,childrenField:v}=e,z=zo(t,v);return qn(A.value,z)}),b=O(()=>Oo(x.value,e.valueField,e.childrenField)),F=T(!1),I=St(J(e,"show"),F),U=T(null),te=T(null),Q=T(null),{localeRef:fe}=Dt("Select"),he=O(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:fe.value.placeholder}),se=[],ne=T(new Map),de=O(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:v,valueField:z}=e;return L=>({[v]:String(L),[z]:L})}return t===!1?!1:v=>Object.assign(t(v),{value:v})});function d(t){const v=e.remote,{value:z}=ne,{value:L}=b,{value:$}=de,M=[];return t.forEach(E=>{if(L.has(E))M.push(L.get(E));else if(v&&z.has(E))M.push(z.get(E));else if($){const Z=$(E);Z&&M.push(Z)}}),M}const R=O(()=>{if(e.multiple){const{value:t}=y;return Array.isArray(t)?d(t):[]}return null}),B=O(()=>{const{value:t}=y;return!e.multiple&&!Array.isArray(t)?t===null?null:d([t])[0]||null:null}),j=Gn(e),{mergedSizeRef:K,mergedDisabledRef:H,mergedStatusRef:W}=j;function V(t,v){const{onChange:z,"onUpdate:value":L,onUpdateValue:$}=e,{nTriggerFormChange:M,nTriggerFormInput:E}=j;z&&be(z,t,v),$&&be($,t,v),L&&be(L,t,v),f.value=t,M(),E()}function G(t){const{onBlur:v}=e,{nTriggerFormBlur:z}=j;v&&be(v,t),z()}function c(){const{onClear:t}=e;t&&be(t)}function p(t){const{onFocus:v,showOnFocus:z}=e,{nTriggerFormFocus:L}=j;v&&be(v,t),L(),z&&ve()}function D(t){const{onSearch:v}=e;v&&be(v,t)}function oe(t){const{onScroll:v}=e;v&&be(v,t)}function we(){var t;const{remote:v,multiple:z}=e;if(v){const{value:L}=ne;if(z){const{valueField:$}=e;(t=R.value)===null||t===void 0||t.forEach(M=>{L.set(M[$],M)})}else{const $=B.value;$&&L.set($[e.valueField],$)}}}function xe(t){const{onUpdateShow:v,"onUpdate:show":z}=e;v&&be(v,t),z&&be(z,t),F.value=t}function ve(){H.value||(xe(!0),F.value=!0,e.filterable&&Ke())}function le(){xe(!1)}function Ce(){w.value="",h.value=se}const ue=T(!1);function _e(){e.filterable&&(ue.value=!0)}function Be(){e.filterable&&(ue.value=!1,I.value||Ce())}function $e(){H.value||(I.value?e.filterable?Ke():le():ve())}function Ee(t){var v,z;!((z=(v=Q.value)===null||v===void 0?void 0:v.selfRef)===null||z===void 0)&&z.contains(t.relatedTarget)||(g.value=!1,G(t),le())}function Se(t){p(t),g.value=!0}function ke(){g.value=!0}function Ne(t){var v;!((v=U.value)===null||v===void 0)&&v.$el.contains(t.relatedTarget)||(g.value=!1,G(t),le())}function Le(){var t;(t=U.value)===null||t===void 0||t.focus(),le()}function Ae(t){var v;I.value&&(!((v=U.value)===null||v===void 0)&&v.$el.contains(Yn(t))||le())}function Oe(t){if(!Array.isArray(t))return[];if(de.value)return Array.from(t);{const{remote:v}=e,{value:z}=b;if(v){const{value:L}=ne;return t.filter($=>z.has($)||L.has($))}else return t.filter(L=>z.has(L))}}function Fe(t){ie(t.rawNode)}function ie(t){if(H.value)return;const{tag:v,remote:z,clearFilterAfterSelect:L,valueField:$}=e;if(v&&!z){const{value:M}=h,E=M[0]||null;if(E){const Z=k.value;Z.length?Z.push(E):k.value=[E],h.value=se}}if(z&&ne.value.set(t[$],t),e.multiple){const M=Oe(y.value),E=M.findIndex(Z=>Z===t[$]);if(~E){if(M.splice(E,1),v&&!z){const Z=s(t[$]);~Z&&(k.value.splice(Z,1),L&&(w.value=""))}}else M.push(t[$]),L&&(w.value="");V(M,d(M))}else{if(v&&!z){const M=s(t[$]);~M?k.value=[k.value[M]]:k.value=se}Ue(),le(),V(t[$],t)}}function s(t){return k.value.findIndex(z=>z[e.valueField]===t)}function C(t){I.value||ve();const{value:v}=t.target;w.value=v;const{tag:z,remote:L}=e;if(D(v),z&&!L){if(!v){h.value=se;return}const{onCreate:$}=e,M=$?$(v):{[e.labelField]:v,[e.valueField]:v},{valueField:E,labelField:Z}=e;S.value.some(pe=>pe[E]===M[E]||pe[Z]===M[Z])||k.value.some(pe=>pe[E]===M[E]||pe[Z]===M[Z])?h.value=se:h.value=[M]}}function Y(t){t.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&le(),c(),v?V([],[]):V(null,null)}function nt(t){!De(t,"action")&&!De(t,"empty")&&!De(t,"header")&&t.preventDefault()}function ot(t){oe(t)}function We(t){var v,z,L,$,M;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((v=U.value)===null||v===void 0)&&v.isComposing)){if(I.value){const E=(z=Q.value)===null||z===void 0?void 0:z.getPendingTmNode();E?Fe(E):e.filterable||(le(),Ue())}else if(ve(),e.tag&&ue.value){const E=h.value[0];if(E){const Z=E[e.valueField],{value:pe}=y;e.multiple&&Array.isArray(pe)&&pe.includes(Z)||ie(E)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;I.value&&((L=Q.value)===null||L===void 0||L.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;I.value?($=Q.value)===null||$===void 0||$.next():ve();break;case"Escape":I.value&&(uo(t),le()),(M=U.value)===null||M===void 0||M.focus();break}}function Ue(){var t;(t=U.value)===null||t===void 0||t.focus()}function Ke(){var t;(t=U.value)===null||t===void 0||t.focusInput()}function lt(){var t;I.value&&((t=te.value)===null||t===void 0||t.syncPosition())}we(),ye(J(e,"options"),we);const it={focus:()=>{var t;(t=U.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=U.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=U.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=U.value)===null||t===void 0||t.blurInput()}},qe=O(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),Re=i?He("select",void 0,qe,e):void 0;return Object.assign(Object.assign({},it),{mergedStatus:W,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:m,isMounted:Xn(),triggerRef:U,menuRef:Q,pattern:w,uncontrolledShow:F,mergedShow:I,adjustedTo:vt(e),uncontrolledValue:f,mergedValue:y,followerRef:te,localizedPlaceholder:he,selectedOption:B,selectedOptions:R,mergedSize:K,mergedDisabled:H,focused:g,activeWithoutMenuOpen:ue,inlineThemeDisabled:i,onTriggerInputFocus:_e,onTriggerInputBlur:Be,handleTriggerOrMenuResize:lt,handleMenuFocus:ke,handleMenuBlur:Ne,handleMenuTabOut:Le,handleTriggerClick:$e,handleToggle:Fe,handleDeleteOption:ie,handlePatternInput:C,handleClear:Y,handleTriggerBlur:Ee,handleTriggerFocus:Se,handleKeydown:We,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ae,handleMenuScroll:ot,handleMenuKeydown:We,handleMenuMousedown:nt,mergedTheme:u,cssVars:i?void 0:qe,themeClass:Re?.themeClass,onRender:Re?.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Vn,null,{default:()=>[a(Dn,null,{default:()=>a(Fo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),a(jn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===vt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Hn(a(yo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[Wn,this.mergedShow],[Rt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Rt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_o=ce({name:"OpenInNewFilled",render:function(n,o){return Ze(),gt("svg",Po,o[0]||(o[0]=[bt("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z",fill:"currentColor"},null,-1)]))}}),Bo={class:"p-4"},$o={class:"mt-2"},Eo={key:0},Do=ce({__name:"FirmwareView",setup(e){const{data:n,isPending:o}=kt(Tt.pet.getFirmwares,{}),{data:l,isPending:i}=kt(Tt.pet.getSources,{}),u=T(0),f=T(null),r=T(""),y=T(""),{selectedSourceId:g}=Zn(oo()),w=[{label:"中国大陆",value:0},{label:"海外版",value:1}],S=O(()=>l.value?l.value.map(m=>({label:m.name,value:m._id})):[]),k=O(()=>n.value?n.value.map(m=>({label:m.name??m.fileName,value:m._id})):[]),h=O(()=>{if(!f.value||!g||!r.value)return"";const m=n.value?.find(F=>F._id===f.value),b=l.value?.find(F=>F._id===g.value);return!m||!b?"":u.value===0?`https://gw.pick-fun.com.cn/device/test/mqtt/upgrade?md5=${m.md5}&size=${m.size}&url=${encodeURIComponent(b.baseUrl+m.fileName)}&sn=${r.value}&test-verify=1111`:`https://gw.pick-fun.com/device/test/mqtt/upgrade?md5=${m.md5}&size=${m.size}&url=${encodeURIComponent(b.baseUrl+m.fileName)}&sn=${r.value}&test-verify=1111`}),x=O(()=>{if(!f.value||!g.value)return"";const m=n.value?.find(F=>F._id===f.value),b=l.value?.find(F=>F._id===g.value);return!m||!b?"":`${b.baseUrl}${m.fileName}`});ye(n,()=>{n.value?.find(m=>m._id===f.value)||(f.value=null)}),ye(l,()=>{l.value?.find(m=>m._id===g.value)||(g.value=null)});const _=async m=>{m.preventDefault();try{y.value="升级中...";const F=await(await fetch(h.value,{headers:{"Accept-Language":"zh-CN"}})).json();y.value=JSON.stringify(F,null,2)}catch(b){y.value=`错误: ${b}`}},A=async m=>{m.preventDefault();try{const b=window.open(x.value,"_blank","noopener,noreferrer");if(b){b.focus?.(),y.value="Opened firmware URL in a new window";return}const F=document.createElement("a");F.href=x.value,F.target="_blank",F.rel="noopener noreferrer",document.body.appendChild(F),F.click(),F.remove()}catch(b){y.value=`Error: ${b}`}};return(m,b)=>{const F=to("NIcon");return Ze(),gt("div",Bo,[bt("div",$o,[ee(o)||ee(i)?(Ze(),gt("div",Eo,"Loading...")):(Ze(),Jn(ee(no),{key:1,inline:"","label-width":180},{default:ge(()=>[re(ee(Ie),{path:"md5",label:"SN"},{default:ge(()=>[re(ee(Ot),{value:r.value,"onUpdate:value":b[0]||(b[0]=I=>r.value=I),valueModifiers:{trim:!0},placeholder:"输入序列号"},null,8,["value"])]),_:1}),re(ee(Ie),{path:"md5",label:"当前版本"},{default:ge(()=>[re(ee(ft),{value:u.value,"onUpdate:value":b[1]||(b[1]=I=>u.value=I),options:w,style:{"min-width":"180px"},placeholder:"选择版本"},null,8,["value"])]),_:1}),re(ee(Ie),{path:"size",label:"目标固件版本"},{default:ge(()=>[re(ee(ft),{value:f.value,"onUpdate:value":b[2]||(b[2]=I=>f.value=I),options:k.value,style:{"min-width":"180px"},placeholder:"选择目标固件版本"},null,8,["value","options"])]),_:1}),re(ee(Ie),{ref:"rPasswordFormItemRef",first:"",path:"Source",label:"固件存储来源"},{default:ge(()=>[re(ee(ft),{value:ee(g),"onUpdate:value":b[3]||(b[3]=I=>eo(g)?g.value=I:null),options:S.value,style:{"min-width":"180px"},placeholder:"选择固件存储来源"},null,8,["value","options"])]),_:1},512),re(ee(Ie),null,{default:ge(()=>[re(ee(Ft),{type:"primary",disabled:!h.value,onClick:_},{default:ge(()=>b[5]||(b[5]=[zt(" 推送升级包 ")])),_:1},8,["disabled"])]),_:1}),re(ee(Ie),null,{default:ge(()=>[re(ee(Ft),{disabled:!x.value,onClick:A},{icon:ge(()=>[re(F,null,{default:ge(()=>[re(ee(_o))]),_:1})]),default:ge(()=>[b[6]||(b[6]=zt(" 测试固件下载 "))]),_:1},8,["disabled"])]),_:1})]),_:1})),bt("p",null,Qn(h.value),1),re(ee(Ot),{value:y.value,"onUpdate:value":b[4]||(b[4]=I=>y.value=I),type:"textarea",placeholder:"推送结果",readonly:"",autosize:{minRows:5}},null,8,["value"])])])}}});export{Do as default};
