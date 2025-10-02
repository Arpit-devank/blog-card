(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="min-h-screen bg-Yellow flex flex-col items-center justify-center font-figtree">

    <div class="bg-White border w-[290px] p-4 rounded-xl shadow-3xl">
    <img src="assets/images/illustration-article.svg" class="rounded-md">

    <h1 class="bg-Yellow px-4 py-1 my-3 rounded-md inline-block font-bold text-sm">Learning</h1>
    <h2 class="font-medium text-sm">Published 21 Dec 2023</h2>

    <div class="my-3 font-extrabold text-lg"> HTML & CSS foundations </div>
    <p class="text-gray-400 text-sm">
    These languages are the backbone of every website, defining structure, content, and presentation.
    </p>
    <div class="flex gap-4 my-4 items-center">
    <img class="size-8" src="assets/images/image-avatar.webp">
    <div class="font-bold">Greg Hooper</div>
    </div>
    </div>
  </div>
`;
