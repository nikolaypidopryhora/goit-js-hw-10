import"./assets/styles-d8e69794.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";let s;const n=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),f=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");n.addEventListener("click",()=>{c.disabled=!0,n.disabled=!0;const t=setInterval(()=>{let a=Date.now(),r=s-a,e=D(r);f.textContent=o(e.days),y.textContent=o(e.hours),p.textContent=o(e.minutes),S.textContent=o(e.seconds),r<1e3&&clearInterval(t)},1e3)});const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){Number(Date.now())>Number(t[0])?(h.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(s=t[0],n.disabled=!1)}};function D(t){const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:i,seconds:l}}function o(t){return t.toString().padStart(2,"0")}m(c,b);
//# sourceMappingURL=commonHelpers.js.map