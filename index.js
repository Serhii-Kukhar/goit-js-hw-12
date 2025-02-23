import{a as b,S as L,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const I="48800941-5fb7e609fca175f45db8152fa",E=b.create({baseURL:"https://pixabay.com/api/"}),m=document.querySelector(".loader");async function g(e,o=1,s=40){m.style.display="block";try{const i=await E.get("",{params:{key:I,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:s}});if(i.data.hits.length===0)throw new Error("No images found");return i.data}catch(i){throw console.error("API Error:",i),i}finally{m.style.display="none"}}const a={formEl:document.querySelector(".js-image-form"),imageEl:document.querySelector(".js-image-container"),loadMoreBtn:document.querySelector(".js-load-button")};function M(e){const{webformatURL:o,largeImageURL:s,tags:i,likes:t,views:r,comments:l,downloads:w}=e;return`
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
                    <p class="info-descr">${w}</p>
                </li>
            </ul>
        </li>
    `}function O(e){return e.map(M).join("")}function h(e){const o=O(e);a.imageEl.insertAdjacentHTML("beforeend",o),new L(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}function q(){const e=document.querySelector(".gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2.2,behavior:"smooth"})}}function p(){d.show({title:"Info!",message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}function B(){d.show({title:"Warning!",message:"Please enter a search query.",color:"yellow",position:"topRight",timeout:3e3,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}function y(){d.show({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3,maxWidth:300,progressBar:!0,close:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight"})}let c="",n=1;const f=40;let u=0;a.formEl.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements.query.value.trim();if(o===""){B();return}o!==c&&(c=o,n=1,a.imageEl.innerHTML="",u=0),e.target.elements.query.value="";try{const s=await g(c,n,f);u=s.totalHits,s.hits.length>0?(h(s.hits),a.loadMoreBtn.style.display="block"):a.loadMoreBtn.style.display="none",n*f>=u&&(a.loadMoreBtn.style.display="none",p())}catch{y()}e.target.reset()});a.loadMoreBtn.addEventListener("click",async()=>{n+=1;try{const e=await g(c,n,f);e.hits.length>0&&h(e.hits),n*f>=u&&(a.loadMoreBtn.style.display="none",p()),q()}catch{y()}});
//# sourceMappingURL=index.js.map
