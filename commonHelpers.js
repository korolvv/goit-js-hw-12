import{i as p,S as w,a as v}from"./assets/vendor-cec502ba.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function _(o){return o.map(s=>`<li class="userItem">
            <a class='link_photo' href="${s.largeImageURL}"
              ><img class="mini_photo" src="${s.webformatURL}" alt="${s.tags}" title="${s.tags}"
            /></a>
            <ul class="counter">
              <li class="counter_wrapper">
                <h3 class="likes">Likes</h3>
                <p class="likes_amount">${s.likes}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="views">Views</h3>
                <p class="views_amount">${s.views}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="comments">Comments</h3>
                <p class="comments_amount">${s.comments}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="downloads">Downloads</h3>
                <p class="downloads_amount">${s.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}const b=async(o,r)=>{const s={key:"43243729-04275528cc78ca8d3cba6ce95",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await v.get("https://pixabay.com/api/?",{params:s})).data};function h(o,r,s,n,e){b(o,e).then(t=>{const{total:i,totalHits:f,hits:g}=t;if(i===0)s.classList.add("hidden"),n.classList.add("hidden"),p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const y=_(g);r.insertAdjacentHTML("beforeend",y);const L=new w(".userItem a");s.classList.add("hidden"),15*e>f?(p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.classList.add("hidden")):n.classList.remove("hidden"),L.refresh(),e>1&&q()}}).catch(t=>{throw n.classList.add("hidden"),new Error(t)})}function q(){const r=document.querySelector(".userItem").getBoundingClientRect();console.log(window.innerHeight),window.scrollBy({top:r.height*2,behavior:"smooth"})}const m=document.querySelector("form"),l=document.querySelector(".userList"),c=document.querySelector(".loader"),a=document.querySelector(".load_more");let u,d=1;m.addEventListener("submit",o=>{o.preventDefault(),c.classList.remove("hidden"),l.innerHTML="",u=m.elements.request.value,h(u,l,c,a,1)});a.addEventListener("click",()=>{d+=1,d===2&&l.after(c),c.classList.remove("hidden"),a.classList.add("hidden"),h(u,l,c,a,d)});
//# sourceMappingURL=commonHelpers.js.map
