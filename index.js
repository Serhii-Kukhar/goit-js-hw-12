import{a as f,S as m,i as l}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=f.create({baseURL:"https://pixabay.com/api/"}),c=document.querySelector(".loader"),g=document.querySelector(".js-load-button");async function p(s){c.style.display="block";try{const t=await d.get("",{params:{key:"48800941-5fb7e609fca175f45db8152fa",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}});if(t.data.hits.length===0)throw new Error("No images found");return t.data}catch(t){throw console.error("API Error:",t),t}finally{c.style.display="none",g.style.display="block"}}const n={formEl:document.querySelector(".js-image-form"),imageEl:document.querySelector(".js-image-container")};function h(s){const{webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:u}=s;return`
        <li class="gallery-item">
            <a href="${o}" class="gallery-link">
                <img class="image" src="${t}" alt="${a}" class="gallery-img" width="360"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h4 class="info-title">Likes</h4>
                    <p class="info-descr">${e}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Views</h4>
                    <p class="info-descr">${r}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Comments</h4>
                    <p class="info-descr">${i}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Downloads</h4>
                    <p class="info-descr">${u}</p>
                </li>
            </ul>
        </li>
    `}function y(s){return s.map(h).join("")}function b(s){const t=y(s);n.imageEl.insertAdjacentHTML("beforeend",t),new m(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}n.formEl.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.query.value.trim();if(t===""){l.show({title:"Warning!",message:"Please enter a search query.",color:"yellow",position:"topRight",timeout:3e3,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"});return}n.imageEl.innerHTML="",s.target.elements.query.value="";try{const o=await p(t);o&&o.hits&&b(o.hits)}catch{l.show({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}});
//# sourceMappingURL=index.js.map
