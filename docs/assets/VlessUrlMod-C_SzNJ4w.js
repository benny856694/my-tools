import{h as y,i as E,j as f,k as m,l as B,d as w,m as x,n as S,p as q,q as A,s as J,v as Q,x as X,y as Y,z as Z,A as ee,B as R,c as k,C as G,D as te,E as T,F as oe,G as re,H as ne,I as se,a as N,b as j,o as V,J as z,f as i,w as d,u,K as C,g as $,r as le}from"./index-CgiPAuAw.js";import{N as _}from"./Input-C_PwWI9J.js";function ae(e,t="default",o=[]){const s=e.$slots[t];return s===void 0?o:s()}const a="0!important",D="-1px!important";function v(e){return f(`${e}-type`,[m("& +",[y("button",{},[f(`${e}-type`,[B("border",{borderLeftWidth:a}),B("state-border",{left:D})])])])])}function b(e){return f(`${e}-type`,[m("& +",[y("button",[f(`${e}-type`,[B("border",{borderTopWidth:a}),B("state-border",{top:D})])])])])}const ie=y("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[E("vertical",{flexDirection:"row"},[E("rtl",[y("button",[m("&:first-child:not(:last-child)",`
 margin-right: ${a};
 border-top-right-radius: ${a};
 border-bottom-right-radius: ${a};
 `),m("&:last-child:not(:first-child)",`
 margin-left: ${a};
 border-top-left-radius: ${a};
 border-bottom-left-radius: ${a};
 `),m("&:not(:first-child):not(:last-child)",`
 margin-left: ${a};
 margin-right: ${a};
 border-radius: ${a};
 `),v("default"),f("ghost",[v("primary"),v("info"),v("success"),v("warning"),v("error")])])])]),f("vertical",{flexDirection:"column"},[y("button",[m("&:first-child:not(:last-child)",`
 margin-bottom: ${a};
 margin-left: ${a};
 margin-right: ${a};
 border-bottom-left-radius: ${a};
 border-bottom-right-radius: ${a};
 `),m("&:last-child:not(:first-child)",`
 margin-top: ${a};
 margin-left: ${a};
 margin-right: ${a};
 border-top-left-radius: ${a};
 border-top-right-radius: ${a};
 `),m("&:not(:first-child):not(:last-child)",`
 margin: ${a};
 border-radius: ${a};
 `),b("default"),f("ghost",[b("primary"),b("info"),b("success"),b("warning"),b("error")])])])]),de={size:{type:String,default:void 0},vertical:Boolean},U=w({name:"ButtonGroup",props:de,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=S(e);return q("-button-group",ie,t),J(Q,e),{rtlEnabled:A("ButtonGroup",o,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return x("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});function ue(){const e=Y(Z,null);return e===null&&X("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const ce=Object.assign(Object.assign({},R.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),P=w({name:"Flex",props:ce,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=S(e),r=R("Flex","-flex",void 0,oe,e,t);return{rtlEnabled:A("Flex",o,t),mergedClsPrefix:t,margin:k(()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[G("gap",n)]:p}}=r.value,{row:c,col:l}=te(p);return{horizontal:T(l),vertical:T(c)}})}},render(){const{vertical:e,reverse:t,align:o,inline:r,justify:s,margin:n,wrap:p,mergedClsPrefix:c,rtlEnabled:l}=this,g=ee(ae(this),!1);return g.length?x("div",{role:"none",class:[`${c}-flex`,l&&`${c}-flex--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:s,flexWrap:!p||e?"nowrap":"wrap",alignItems:o,gap:`${n.vertical}px ${n.horizontal}px`}},g):null}}),fe=y("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[f("strong",`
 font-weight: var(--n-font-weight-strong);
 `),f("italic",{fontStyle:"italic"}),f("underline",{textDecoration:"underline"}),f("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),pe=Object.assign(Object.assign({},R.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),ge=w({name:"Text",props:pe,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=S(e),r=R("Typography","-text",fe,se,e,t),s=k(()=>{const{depth:p,type:c}=e,l=c==="default"?p===void 0?"textColor":`textColor${p}Depth`:G("textColor",c),{common:{fontWeightStrong:g,fontFamilyMono:h,cubicBezierEaseInOut:I},self:{codeTextColor:M,codeBorderRadius:O,codeColor:H,codeBorder:K,[l]:W}}=r.value;return{"--n-bezier":I,"--n-text-color":W,"--n-font-weight-strong":g,"--n-font-famliy-mono":h,"--n-code-border-radius":O,"--n-code-text-color":M,"--n-code-color":H,"--n-code-border":K}}),n=o?re("text",k(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:t,compitableTag:ne(e,["as","tag"]),cssVars:o?void 0:s,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e,t,o;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],n=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?x("code",{class:s,style:this.cssVars},this.delete?x("del",null,n):n):this.delete?x("del",{class:s,style:this.cssVars},n):x(this.compitableTag||"span",{class:s,style:this.cssVars},n)}}),me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},L=w({name:"CloseRound",render:function(t,o){return V(),N("svg",me,o[0]||(o[0]=[j("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",fill:"currentColor"},null,-1)]))}}),he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ve=w({name:"ContentCopyRound",render:function(t,o){return V(),N("svg",he,o[0]||(o[0]=[j("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z",fill:"currentColor"},null,-1)]))}});function F(e){const t=new URL(e),o=t.hostname,r=t.hash?t.hash.substring(1):"";return{hostName:o,name:r}}function be(e){return e.split(/(?=vless:\/\/)/i).map(t=>t.trim()).filter(t=>t!=="")}function xe(e,t){const o=new URL(e);return o.hash=`#${t}`,o.toString()}async function ye(e){try{const o=await(await fetch(`https://dns.google/resolve?name=${e}`)).json();if(o.Answer){const r=o.Answer.filter(s=>s.type===1);if(r.length>0)return r.map(s=>s.data)}throw new Error(`no ip found for ${e}`)}catch(t){throw console.error("DNS lookup failed:",t),t}}async function we(e){const{hostName:t}=F(e),o=await ye(t),r=await fetch(`https://ipinfo.io/${o[0]}`,{headers:{authorization:"Bearer 050f46df94330d"}});if(!r.ok)throw new Error("Failed to fetch geolocation data");return(await r.json()).country}async function $e(e){const t=be(e);return(await Promise.all(t.map(async r=>{const{name:s}=F(r),n=await we(r),p=s?`${s}(${n})`:`${n}`;return xe(r,p)}))).join(`

`)}const Ce={class:"p-4 text-left"},Be={class:"flex flex-row gap-2 items-center text-left mb-4"},ke=w({__name:"VlessUrlMod",setup(e){const t=ue(),o=z(""),r=z(""),s=z(!1);async function n(){s.value=!0;try{const c=await $e(o.value);r.value=c}catch(c){t.error(`Error occurred during conversion: ${c}`)}finally{s.value=!1}}function p(){navigator.clipboard.writeText(r.value),t.success("Copied to clipboard")}return(c,l)=>{const g=le("n-icon");return V(),N("div",Ce,[j("div",Be,[i(u(P),{class:"flex-1",justify:"end"},{default:d(()=>[i(u(U),{size:"tiny"},{default:d(()=>[i(u(C),{type:"error",disabled:o.value?.length==0,onClick:l[0]||(l[0]=h=>o.value="")},{icon:d(()=>[i(g,null,{default:d(()=>[i(u(L))]),_:1})]),default:d(()=>[l[4]||(l[4]=$(" Clear "))]),_:1},8,["disabled"])]),_:1}),i(u(_),{value:o.value,"onUpdate:value":l[1]||(l[1]=h=>o.value=h),type:"textarea",placeholder:"original vless urls, can contain multiple urls. each url starts with vless://",rows:"20"},null,8,["value"])]),_:1}),i(u(C),{disabled:s.value||o.value?.length==0,loading:s.value,type:"primary",onClick:n},{default:d(()=>l[5]||(l[5]=[$("Convert")])),_:1},8,["disabled","loading"]),i(u(P),{class:"flex-1",justify:"end"},{default:d(()=>[i(u(U),{size:"tiny"},{default:d(()=>[i(u(C),{type:"error",disabled:r.value?.length==0,onClick:l[2]||(l[2]=h=>r.value="")},{icon:d(()=>[i(g,null,{default:d(()=>[i(u(L))]),_:1})]),default:d(()=>[l[6]||(l[6]=$(" Clear "))]),_:1},8,["disabled"]),i(u(C),{disabled:r.value?.length==0,onClick:p},{icon:d(()=>[i(g,null,{default:d(()=>[i(u(ve))]),_:1})]),default:d(()=>[l[7]||(l[7]=$(" Copy "))]),_:1},8,["disabled"])]),_:1}),i(u(_),{value:r.value,"onUpdate:value":l[3]||(l[3]=h=>r.value=h),type:"textarea",placeholder:"modified url",rows:"20"},null,8,["value"])]),_:1})]),i(u(ge),{type:"info"},{default:d(()=>l[8]||(l[8]=[$(" This tool looks up the geolocation of the vless server, and append the geolocation to the name of the server. e.g. vless://uuid@ip:port?remarks=server1 will be converted to vless://uuid@ip:port?remarks=server1(US). ")])),_:1})])}}});export{ke as default};
