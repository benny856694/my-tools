import{u as q}from"./use-message-CnpdYefw.js";import{h as y,i as T,j as f,k as m,l as B,d as w,m as x,n as S,p as J,q as G,s as Q,v as X,x as Y,y as R,c as k,z as A,A as Z,B as _,C as ee,D as te,E as re,F as oe,a as N,b as V,o as j,G as z,f as i,w as d,u as c,H as C,g as $,r as ne}from"./index-CQ-Kwe8_.js";import{g as se,N as E}from"./Input-CMe9U4vc.js";const l="0!important",D="-1px!important";function v(e){return f(`${e}-type`,[m("& +",[y("button",{},[f(`${e}-type`,[B("border",{borderLeftWidth:l}),B("state-border",{left:D})])])])])}function b(e){return f(`${e}-type`,[m("& +",[y("button",[f(`${e}-type`,[B("border",{borderTopWidth:l}),B("state-border",{top:D})])])])])}const le=y("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[T("vertical",{flexDirection:"row"},[T("rtl",[y("button",[m("&:first-child:not(:last-child)",`
 margin-right: ${l};
 border-top-right-radius: ${l};
 border-bottom-right-radius: ${l};
 `),m("&:last-child:not(:first-child)",`
 margin-left: ${l};
 border-top-left-radius: ${l};
 border-bottom-left-radius: ${l};
 `),m("&:not(:first-child):not(:last-child)",`
 margin-left: ${l};
 margin-right: ${l};
 border-radius: ${l};
 `),v("default"),f("ghost",[v("primary"),v("info"),v("success"),v("warning"),v("error")])])])]),f("vertical",{flexDirection:"column"},[y("button",[m("&:first-child:not(:last-child)",`
 margin-bottom: ${l};
 margin-left: ${l};
 margin-right: ${l};
 border-bottom-left-radius: ${l};
 border-bottom-right-radius: ${l};
 `),m("&:last-child:not(:first-child)",`
 margin-top: ${l};
 margin-left: ${l};
 margin-right: ${l};
 border-top-left-radius: ${l};
 border-top-right-radius: ${l};
 `),m("&:not(:first-child):not(:last-child)",`
 margin: ${l};
 border-radius: ${l};
 `),b("default"),f("ghost",[b("primary"),b("info"),b("success"),b("warning"),b("error")])])])]),ae={size:{type:String,default:void 0},vertical:Boolean},P=w({name:"ButtonGroup",props:ae,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=S(e);return J("-button-group",le,t),Q(X,e),{rtlEnabled:G("ButtonGroup",r,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return x("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),ie=Object.assign(Object.assign({},R.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),U=w({name:"Flex",props:ie,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=S(e),o=R("Flex","-flex",void 0,ee,e,t);return{rtlEnabled:G("Flex",r,t),mergedClsPrefix:t,margin:k(()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[A("gap",n)]:p}}=o.value,{row:u,col:s}=Z(p);return{horizontal:_(s),vertical:_(u)}})}},render(){const{vertical:e,reverse:t,align:r,inline:o,justify:a,margin:n,wrap:p,mergedClsPrefix:u,rtlEnabled:s}=this,g=Y(se(this),!1);return g.length?x("div",{role:"none",class:[`${u}-flex`,s&&`${u}-flex--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:a,flexWrap:!p||e?"nowrap":"wrap",alignItems:r,gap:`${n.vertical}px ${n.horizontal}px`}},g):null}}),de=y("text",`
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
 `)]),ce=Object.assign(Object.assign({},R.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),ue=w({name:"Text",props:ce,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=S(e),o=R("Typography","-text",de,oe,e,t),a=k(()=>{const{depth:p,type:u}=e,s=u==="default"?p===void 0?"textColor":`textColor${p}Depth`:A("textColor",u),{common:{fontWeightStrong:g,fontFamilyMono:h,cubicBezierEaseInOut:M},self:{codeTextColor:O,codeBorderRadius:H,codeColor:I,codeBorder:W,[s]:K}}=o.value;return{"--n-bezier":M,"--n-text-color":K,"--n-font-weight-strong":g,"--n-font-famliy-mono":h,"--n-code-border-radius":H,"--n-code-text-color":O,"--n-code-color":I,"--n-code-border":W}}),n=r?te("text",k(()=>`${e.type[0]}${e.depth||""}`),a,e):void 0;return{mergedClsPrefix:t,compitableTag:re(e,["as","tag"]),cssVars:r?void 0:a,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e,t,r;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const a=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],n=(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t);return this.code?x("code",{class:a,style:this.cssVars},this.delete?x("del",null,n):n):this.delete?x("del",{class:a,style:this.cssVars},n):x(this.compitableTag||"span",{class:a,style:this.cssVars},n)}}),fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},L=w({name:"CloseRound",render:function(t,r){return j(),N("svg",fe,r[0]||(r[0]=[V("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",fill:"currentColor"},null,-1)]))}}),pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ge=w({name:"ContentCopyRound",render:function(t,r){return j(),N("svg",pe,r[0]||(r[0]=[V("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z",fill:"currentColor"},null,-1)]))}});function F(e){const t=new URL(e),r=t.hostname,o=t.hash?t.hash.substring(1):"";return{hostName:r,name:o}}function me(e){return e.split(/(?=vless:\/\/)/i).map(t=>t.trim()).filter(t=>t!=="")}function he(e,t){const r=new URL(e);return r.hash=`#${t}`,r.toString()}async function ve(e){try{const r=await(await fetch(`https://dns.google/resolve?name=${e}`)).json();if(r.Answer){const o=r.Answer.filter(a=>a.type===1);if(o.length>0)return o.map(a=>a.data)}throw new Error(`no ip found for ${e}`)}catch(t){throw console.error("DNS lookup failed:",t),t}}async function be(e){const{hostName:t}=F(e),r=await ve(t),o=await fetch(`https://ipinfo.io/${r[0]}`,{headers:{authorization:"Bearer 050f46df94330d"}});if(!o.ok)throw new Error("Failed to fetch geolocation data");return(await o.json()).country}async function xe(e){const t=me(e);return(await Promise.all(t.map(async o=>{const{name:a}=F(o),n=await be(o),p=a?`${a}(${n})`:`${n}`;return he(o,p)}))).join(`

`)}const ye={class:"p-4 text-left"},we={class:"flex flex-row gap-2 items-center text-left mb-4"},Re=w({__name:"VlessUrlMod",setup(e){const t=q(),r=z(""),o=z(""),a=z(!1);async function n(){a.value=!0;try{const u=await xe(r.value);o.value=u}catch(u){t.error(`Error occurred during conversion: ${u}`)}finally{a.value=!1}}function p(){navigator.clipboard.writeText(o.value),t.success("Copied to clipboard")}return(u,s)=>{const g=ne("n-icon");return j(),N("div",ye,[V("div",we,[i(c(U),{class:"flex-1",justify:"end"},{default:d(()=>[i(c(P),{size:"tiny"},{default:d(()=>[i(c(C),{type:"error",disabled:r.value?.length==0,onClick:s[0]||(s[0]=h=>r.value="")},{icon:d(()=>[i(g,null,{default:d(()=>[i(c(L))]),_:1})]),default:d(()=>[s[4]||(s[4]=$(" Clear "))]),_:1},8,["disabled"])]),_:1}),i(c(E),{value:r.value,"onUpdate:value":s[1]||(s[1]=h=>r.value=h),type:"textarea",placeholder:"original vless urls, can contain multiple urls. each url starts with vless://",rows:"20"},null,8,["value"])]),_:1}),i(c(C),{disabled:a.value||r.value?.length==0,loading:a.value,type:"primary",onClick:n},{default:d(()=>s[5]||(s[5]=[$("Convert")])),_:1},8,["disabled","loading"]),i(c(U),{class:"flex-1",justify:"end"},{default:d(()=>[i(c(P),{size:"tiny"},{default:d(()=>[i(c(C),{type:"error",disabled:o.value?.length==0,onClick:s[2]||(s[2]=h=>o.value="")},{icon:d(()=>[i(g,null,{default:d(()=>[i(c(L))]),_:1})]),default:d(()=>[s[6]||(s[6]=$(" Clear "))]),_:1},8,["disabled"]),i(c(C),{disabled:o.value?.length==0,onClick:p},{icon:d(()=>[i(g,null,{default:d(()=>[i(c(ge))]),_:1})]),default:d(()=>[s[7]||(s[7]=$(" Copy "))]),_:1},8,["disabled"])]),_:1}),i(c(E),{value:o.value,"onUpdate:value":s[3]||(s[3]=h=>o.value=h),type:"textarea",placeholder:"modified url",rows:"20"},null,8,["value"])]),_:1})]),i(c(ue),{type:"info"},{default:d(()=>s[8]||(s[8]=[$(" This tool looks up the geolocation of the vless server, and append the geolocation to the name of the server. e.g. vless://uuid@ip:port?remarks=server1 will be converted to vless://uuid@ip:port?remarks=server1(US). ")])),_:1})])}}});export{Re as default};
