import{a as f,S as m,i as l}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=f.create({baseURL:"https://pixabay.com/api/"}),c=document.querySelector(".loader");function g(i){return c.style.display="block",d.get("",{params:{key:"48800941-5fb7e609fca175f45db8152fa",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>{if(t.data.hits.length===0)throw new Error("No images found");return t.data}).catch(t=>{throw console.error("API Error:",t),t}).finally(()=>{c.style.display="none"})}const n={formEl:document.querySelector(".js-image-form"),imageEl:document.querySelector(".js-image-container")};function h(i){const{webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:o,downloads:u}=i;return`
        <li class="gallery-item">
            <a href="${s}" class="gallery-link">
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
                    <p class="info-descr">${o}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Downloads</h4>
                    <p class="info-descr">${u}</p>
                </li>
            </ul>
        </li>
    `}function p(i){return i.map(h).join("")}function y(i){const t=p(i);n.imageEl.insertAdjacentHTML("beforeend",t),new m(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}n.formEl.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements.query.value.trim();if(t===""){l.show({title:"Warning!",message:"Please enter a search query.",color:"yellow",position:"topRight",timeout:3e3,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"});return}n.imageEl.innerHTML="",i.target.elements.query.value="",g(t).then(s=>{s&&s.hits&&y(s.hits)}).catch(s=>{l.show({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})})});
//# sourceMappingURL=index.js.map
