(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{13261:(e,r,a)=>{Promise.resolve().then(a.bind(a,61290))},61290:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>O});var t=a(95155),l=a(12115),n=a(58581),s=a(27112),o=a(86354),d=a(43463),c=a(69795);function i(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,c.QP)((0,d.$)(r))}let u={light:"",dark:".dark"},h=l.createContext(null);function x(){let e=l.useContext(h);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let m=l.forwardRef((e,r)=>{let{id:a,className:s,children:o,config:d,...c}=e,u=l.useId(),x="chart-".concat(a||u.replace(/:/g,""));return(0,t.jsx)(h.Provider,{value:{config:d},children:(0,t.jsxs)("div",{"data-chart":x,ref:r,className:i("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...c,children:[(0,t.jsx)(v,{id:x,config:d}),(0,t.jsx)(n.u,{children:o})]})})});m.displayName="Chart";let v=e=>{let{id:r,config:a}=e,l=Object.entries(a).filter(e=>{let[,r]=e;return r.theme||r.color});return l.length?(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(u).map(e=>{let[a,t]=e;return"\n".concat(t," [data-chart=").concat(r,"] {\n").concat(l.map(e=>{var r;let[t,l]=e,n=(null===(r=l.theme)||void 0===r?void 0:r[a])||l.color;return n?"  --color-".concat(t,": ").concat(n,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},f=s.m,p=l.forwardRef((e,r)=>{let{active:a,payload:n,className:s,indicator:o="dot",hideLabel:d=!1,hideIndicator:c=!1,label:u,labelFormatter:h,labelClassName:m,formatter:v,color:f,nameKey:p,labelKey:g}=e,{config:j}=x(),b=l.useMemo(()=>{var e;if(d||!(null==n?void 0:n.length))return null;let[r]=n,a="".concat(g||r.dataKey||r.name||"value"),l=y(j,r,a),s=g||"string"!=typeof u?null==l?void 0:l.label:(null===(e=j[u])||void 0===e?void 0:e.label)||u;return h?(0,t.jsx)("div",{className:i("font-medium",m),children:h(s,n)}):s?(0,t.jsx)("div",{className:i("font-medium",m),children:s}):null},[u,h,n,d,m,j,g]);if(!a||!(null==n?void 0:n.length))return null;let k=1===n.length&&"dot"!==o;return(0,t.jsxs)("div",{ref:r,className:i("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",s),children:[k?null:b,(0,t.jsx)("div",{className:"grid gap-1.5",children:n.map((e,r)=>{let a="".concat(p||e.name||e.dataKey||"value"),l=y(j,e,a),n=f||e.payload.fill||e.color;return(0,t.jsx)("div",{className:i("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===o&&"items-center"),children:v&&(null==e?void 0:e.value)!==void 0&&e.name?v(e.value,e.name,e,r,e.payload):(0,t.jsxs)(t.Fragment,{children:[(null==l?void 0:l.icon)?(0,t.jsx)(l.icon,{}):!c&&(0,t.jsx)("div",{className:i("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":k&&"dashed"===o}),style:{"--color-bg":n,"--color-border":n}}),(0,t.jsxs)("div",{className:i("flex flex-1 justify-between leading-none",k?"items-end":"items-center"),children:[(0,t.jsxs)("div",{className:"grid gap-1.5",children:[k?b:null,(0,t.jsx)("span",{className:"text-muted-foreground",children:(null==l?void 0:l.label)||e.name})]}),e.value&&(0,t.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});p.displayName="ChartTooltip";let g=o.s,j=l.forwardRef((e,r)=>{let{className:a,hideIcon:l=!1,payload:n,verticalAlign:s="bottom",nameKey:o}=e,{config:d}=x();return(null==n?void 0:n.length)?(0,t.jsx)("div",{ref:r,className:i("flex items-center justify-center gap-4","top"===s?"pb-3":"pt-3",a),children:n.map(e=>{let r="".concat(o||e.dataKey||"value"),a=y(d,e,r);return(0,t.jsxs)("div",{className:i("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==a?void 0:a.icon)&&!l?(0,t.jsx)(a.icon,{}):(0,t.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==a?void 0:a.label]},e.value)})}):null});function y(e,r,a){if("object"!=typeof r||null===r)return;let t="payload"in r&&"object"==typeof r.payload&&null!==r.payload?r.payload:void 0,l=a;return a in r&&"string"==typeof r[a]?l=r[a]:t&&a in t&&"string"==typeof t[a]&&(l=t[a]),l in e?e[l]:e[a]}j.displayName="ChartLegend";var b=a(94973),k=a(15255),N=a(12800),_=a(66963),w=a(16161),C=a(394),D=a(87162);let K={value:{label:"値"}},E=[{day:"Day 1",value:10},{day:"Day 2",value:15},{day:"Day 3",value:8},{day:"Day 4",value:20}],L=[{day:"Day 1",value:2},{day:"Day 2",value:30},{day:"Day 3",value:18},{day:"Day 4",value:10}];function O(){let[e,r]=l.useState("line"),[a,n]=l.useState(!1),s=a?L:E;return(0,t.jsxs)("div",{className:"flex flex-col items-start gap-4 p-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("button",{onClick:()=>n(e=>!e),className:"rounded-md bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600",children:"データ切り替え"}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("label",{className:"flex items-center gap-1",children:[(0,t.jsx)("input",{type:"radio",name:"chartType",value:"line",checked:"line"===e,onChange:e=>r(e.target.value)}),(0,t.jsx)("span",{children:"Line Chart"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-1",children:[(0,t.jsx)("input",{type:"radio",name:"chartType",value:"bar",checked:"bar"===e,onChange:e=>r(e.target.value)}),(0,t.jsx)("span",{children:"Bar Chart"})]})]})]}),(0,t.jsx)(m,{config:K,className:"w-full max-w-xl",children:"line"===e?(0,t.jsxs)(b.b,{data:s,children:[(0,t.jsx)(k.d,{strokeDasharray:"3 3"}),(0,t.jsx)(N.W,{dataKey:"day"}),(0,t.jsx)(_.h,{}),(0,t.jsx)(f,{content:(0,t.jsx)(p,{})}),(0,t.jsx)(g,{content:(0,t.jsx)(j,{})}),(0,t.jsx)(w.N,{dataKey:"value",stroke:"#8884d8",strokeWidth:2,dot:{r:3}})]}):(0,t.jsxs)(C.E,{data:s,children:[(0,t.jsx)(k.d,{strokeDasharray:"3 3"}),(0,t.jsx)(N.W,{dataKey:"day"}),(0,t.jsx)(_.h,{}),(0,t.jsx)(f,{content:(0,t.jsx)(p,{})}),(0,t.jsx)(g,{content:(0,t.jsx)(j,{})}),(0,t.jsx)(D.y,{dataKey:"value",fill:"#82ca9d"})]})})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[206,441,517,358],()=>r(13261)),_N_E=e.O()}]);