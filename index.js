import{a as p,S as y,i as c}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b=p.create({baseURL:"https://pixabay.com/api/"}),w=document.querySelector(".loader");async function m(t,r=1,s=40){try{const i=await b.get("",{params:{key:"48800941-5fb7e609fca175f45db8152fa",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s}});if(i.data.hits.length===0)throw new Error("No images found");return i.data}catch(i){throw console.error("API Error:",i),i}finally{w.style.display="none"}}const a={formEl:document.querySelector(".js-image-form"),imageEl:document.querySelector(".js-image-container"),loadMoreBtn:document.querySelector(".js-load-button")};function L(t){const{webformatURL:r,largeImageURL:s,tags:i,likes:e,views:o,comments:l,downloads:g}=t;return`
        <li class="gallery-item">
            <a href="${s}" class="gallery-link">
                <img class="image" src="${r}" alt="${i}" class="gallery-img" width="360"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h4 class="info-title">Likes</h4>
                    <p class="info-descr">${e}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Views</h4>
                    <p class="info-descr">${o}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Comments</h4>
                    <p class="info-descr">${l}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Downloads</h4>
                    <p class="info-descr">${g}</p>
                </li>
            </ul>
        </li>
    `}function I(t){return t.map(L).join("")}function h(t){const r=I(t);a.imageEl.insertAdjacentHTML("beforeend",r),new y(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}let u="",n=1;const d=40;let f=0;a.formEl.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements.query.value.trim();if(r===""){c.show({title:"Warning!",message:"Please enter a search query.",color:"yellow",position:"topRight",timeout:3e3,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"});return}r!==u&&(u=r,n=1,a.imageEl.innerHTML="",f=0),t.target.elements.query.value="";try{const s=await m(u,n,d);f=s.totalHits,s.hits.length>0?(h(s.hits),a.loadMoreBtn.style.display="block"):a.loadMoreBtn.style.display="none",n*d>=f&&(a.loadMoreBtn.style.display="none",c.show({title:"Info!",message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"}))}catch{c.show({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{n+=1;try{const t=await m(u,n,d);t.hits.length>0&&h(t.hits),n*d>=f&&(a.loadMoreBtn.style.display="none",c.show({title:"Info!",message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"}))}catch{c.show({title:"Error!",message:"Something went wrong!",color:"red",position:"topRight",timeout:3e3})}});
//# sourceMappingURL=index.js.map
