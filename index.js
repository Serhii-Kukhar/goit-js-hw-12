import{a as w,S as b,i as f}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const E="48800941-5fb7e609fca175f45db8152fa",L=w.create({baseURL:"https://pixabay.com/api/"});async function m(e,o=1,i=40){try{const a=await L.get("",{params:{key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:i}});if(a.data.hits.length===0)throw new Error("No images found");return a.data}catch(a){throw console.error("API Error:",a),a}}const r={formEl:document.querySelector(".js-image-form"),imageEl:document.querySelector(".js-image-container"),loadMoreBtn:document.querySelector(".js-load-button"),loaderEl:document.querySelector(".loader")};function I(e){const{webformatURL:o,largeImageURL:i,tags:a,likes:t,views:s,comments:l,downloads:p}=e;return`
        <li class="gallery-item">
            <a href="${i}" class="gallery-link">
                <img class="image" src="${o}" alt="${a}" class="gallery-img" width="360"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h4 class="info-title">Likes</h4>
                    <p class="info-descr">${t}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Views</h4>
                    <p class="info-descr">${s}</p>
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
    `}function M(e){return e.map(I).join("")}function g(e){const o=M(e);r.imageEl.insertAdjacentHTML("beforeend",o),new b(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}function B(){const e=document.querySelector(".gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2.2,behavior:"smooth"})}}function h(){f.show({title:"Info!",message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}function O(){f.show({title:"Warning!",message:"Please enter a search query.",color:"yellow",position:"topRight",timeout:3e3,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}function y(){f.show({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}let c="",n=1;const d=40;let u=0;r.formEl.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements.query.value.trim();if(o===""){O();return}o!==c&&(c=o,n=1,r.imageEl.innerHTML="",u=0),r.loaderEl.style.display="block",e.target.elements.query.value="";try{const i=await m(c,n,d);u=i.totalHits,i.hits.length>0?(g(i.hits),r.loadMoreBtn.style.display="block"):r.loadMoreBtn.style.display="none",n*d>=u&&(r.loadMoreBtn.style.display="none",h())}catch{r.loadMoreBtn.style.display="none",y()}finally{r.loaderEl.style.display="none"}e.target.reset()});r.loadMoreBtn.addEventListener("click",async()=>{n+=1,r.loaderEl.style.display="block";try{const e=await m(c,n,d);e.hits.length>0&&g(e.hits),n*d>=u&&(r.loadMoreBtn.style.display="none",h()),B()}catch{r.loadMoreBtn.style.display="none",y()}finally{r.loaderEl.style.display="none"}});
//# sourceMappingURL=index.js.map
