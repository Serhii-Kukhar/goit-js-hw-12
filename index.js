import{a as y,S as w,i as c}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const b="48800941-5fb7e609fca175f45db8152fa",L=y.create({baseURL:"https://pixabay.com/api/"}),d=document.querySelector(".loader");async function h(e,o=1,s=40){d.style.display="block";try{const i=await L.get("",{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:s}});if(i.data.hits.length===0)throw new Error("No images found");return i.data}catch(i){throw console.error("API Error:",i),i}finally{d.style.display="none"}}const n={formEl:document.querySelector(".js-image-form"),imageEl:document.querySelector(".js-image-container"),loadMoreBtn:document.querySelector(".js-load-button")};function I(e){const{webformatURL:o,largeImageURL:s,tags:i,likes:t,views:r,comments:l,downloads:p}=e;return`
        <li class="gallery-item">
            <a href="${s}" class="gallery-link">
                <img class="image" src="${o}" alt="${i}" class="gallery-img" width="360"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h4 class="info-title">Likes</h4>
                    <p class="info-descr">${t}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Views</h4>
                    <p class="info-descr">${r}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Comments</h4>
                    <p class="info-descr">${l}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Downloads</h4>
                    <p class="info-descr">${p}</p>
                </li>
            </ul>
        </li>
    `}function O(e){return e.map(I).join("")}function g(e){const o=O(e);n.imageEl.insertAdjacentHTML("beforeend",o),new w(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}function E(){const e=document.querySelector(".gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2.2,behavior:"smooth"})}}let u="",a=1;const m=40;let f=0;n.formEl.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements.query.value.trim();if(o===""){c.show({title:"Warning!",message:"Please enter a search query.",color:"yellow",position:"topRight",timeout:3e3,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"});return}o!==u&&(u=o,a=1,n.imageEl.innerHTML="",f=0),e.target.elements.query.value="";try{const s=await h(u,a,m);f=s.totalHits,s.hits.length>0?(g(s.hits),n.loadMoreBtn.style.display="block"):n.loadMoreBtn.style.display="none",a*m>=f&&(n.loadMoreBtn.style.display="none",c.show({title:"Info!",message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"}))}catch{c.show({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}});n.loadMoreBtn.addEventListener("click",async()=>{a+=1;try{const e=await h(u,a,m);e.hits.length>0&&g(e.hits),a*m>=f&&(n.loadMoreBtn.style.display="none",c.show({title:"Info!",message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})),E()}catch{c.show({title:"Error!",message:"Something went wrong!",color:"red",position:"topRight",timeout:3e3})}});
//# sourceMappingURL=index.js.map
