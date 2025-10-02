import "./style.css";

document.querySelector("#app").innerHTML = `
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
