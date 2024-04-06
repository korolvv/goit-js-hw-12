import{i as g,S as y,a as L}from"./assets/vendor-cec502ba.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function w(r){return r.map(t=>`<li class="userItem">
            <a class='link_photo' href="${t.largeImageURL}"
              ><img class="mini_photo" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"
            /></a>
            <ul class="counter">
              <li class="counter_wrapper">
                <h3 class="likes">Likes</h3>
                <p class="likes_amount">${t.likes}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="views">Views</h3>
                <p class="views_amount">${t.views}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="comments">Comments</h3>
                <p class="comments_amount">${t.comments}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="downloads">Downloads</h3>
                <p class="downloads_amount">${t.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}const _=async(r,o)=>{const t={key:"43243729-04275528cc78ca8d3cba6ce95",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await L.get("https://pixabay.com/api/?",{params:t})).data};function m(r,o,t,n,e){_(r,e).then(s=>{if(s.total===0)t.classList.add("hidden"),n.classList.add("hidden"),g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=s.hits,h=w(a);o.insertAdjacentHTML("beforeend",h);const f=new y(".userItem a");t.classList.add("hidden"),n.classList.remove("hidden"),f.refresh()}}).catch(s=>{throw n.classList.add("hidden"),new Error(data.status,s)})}const d=document.querySelector("form"),i=document.querySelector(".userList"),c=document.querySelector(".loader"),l=document.querySelector(".load_more");let u,p=1;d.addEventListener("submit",r=>{r.preventDefault(),c.classList.remove("hidden"),i.innerHTML="",u=d.elements.request.value,m(u,i,c,l,1)});l.addEventListener("click",()=>{p+=1,m(u,i,c,l,p)});
//# sourceMappingURL=commonHelpers.js.map
