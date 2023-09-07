import{c as s}from"/build/_shared/chunk-MV3Y6IQI.js";import{g as u,l as d}from"/build/_shared/chunk-SH7JW3YP.js";import{b as i}from"/build/_shared/chunk-GDLBX7ER.js";import{c as o}from"/build/_shared/chunk-Q3IECNXJ.js";var l=o(i());function a({detail:t}){return t.url?(0,l.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.name}):(0,l.jsx)("span",{children:t.name})}var r=o(i());function p({attribution:t}){let n=null;switch(t.type){case"icon":n=(0,r.jsx)("img",{src:t.preview.url,className:"mr-2 h-10",width:"40px",height:"40px",alt:t.work.name});break;default:throw new Error(`Unknown attribution type "${t.type}". Cannot render preview.`)}return(0,r.jsxs)("div",{className:"workshop-card flex flex-col rounded-md border border-solid border-gray-200 bg-white p-6 drop-shadow-md",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[n,(0,r.jsx)("h2",{className:"text-xl",children:t.work.name})]}),(0,r.jsx)("div",{className:" flex justify-between py-2"}),(0,r.jsxs)("p",{className:"pt-3 pb-6 text-gray-900",children:[(0,r.jsx)(a,{detail:t.work}),"\xA0by\xA0",(0,r.jsx)(a,{detail:t.creator}),"\xA0is licensed under\xA0",(0,r.jsx)(a,{detail:t.license})]})]})}var e=o(i());function m(){let{attributions:t}=d(),n=t.map((c,b)=>(0,e.jsx)(p,{attribution:c},b));return(0,e.jsxs)(s,{children:[(0,e.jsxs)("div",{className:"m-3 rounded-lg bg-t-green py-10 px-5 text-gray-900 drop-shadow-md md:container md:mx-auto md:py-14",children:[(0,e.jsx)("h1",{className:"mb-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl",children:"Attributions"}),(0,e.jsx)("p",{className:"max-w-2xl text-base",children:"Here you can find attributions for assets used for our workshops and the platform itself."})]}),(0,e.jsx)("div",{className:"m-3 py-9 md:container md:mx-auto",children:(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:n})})]})}function x(){return(0,e.jsx)(s,{children:(0,e.jsx)("div",{className:"error-container container my-10 mx-auto",children:(0,e.jsx)("p",{className:"mx-4 text-xl md:mx-0",children:"Something unexpected went wrong. Sorry about that."})})})}function f(){if(u().status===404)return(0,e.jsx)(s,{children:(0,e.jsx)("div",{className:"error-container container my-10 mx-auto",children:(0,e.jsx)("p",{className:"mx-4 text-xl font-semibold md:mx-0",children:"Could not load attributions"})})})}export{f as CatchBoundary,x as ErrorBoundary,m as default};
