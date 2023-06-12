let script = document.createElement("script");
script.src = "https://cdn.tailwindcss.com";
document.head.appendChild(script);

let cookie1 = document.getElementById("cookie1");
cookie1.classList.add("fixed", "bottom-5", "w-full");
let banner = document.createElement("div");
banner.setAttribute("style", "background-color: var(--bannerBg)");
banner.classList.add(
  "banner",
  "mx-auto",
  "w-11/12",
  "bg-bannerBg",
  "shadow-lg",
  "p-5",
  "rounded-xl"
);

banner.innerHTML = `<div class="grid grid-cols-8 gap-2">
        <div class="col-span-8 lg:col-span-6 flex items-center">
          <p class="text-textColor" style="color: var(--textColor)">
            We use cookie to improve your experience on our site. By using our
            site you consent cookies.&nbsp;
            <a href="" class="underline">Learn more </a>
          </p>
        </div>
        <div
          class="col-span-8 lg:col-span-2 flex justify-start lg:justify-end items-center gap-2"
        >
          <button
            class="border flex justify-center items-center px-8 py-2 rounded-lg hover:opacity-90"
            style="
              background-color: var(--acceptBg);
              border-color: var(--acceptBg);
              color: var(--acceptText);
            "
          >
            Accept
          </button>
          <button
            style="
              background-color: transparent;
              border-color: var(--acceptBg);
              color: var(--acceptBg);
            "
            class="flex justify-center items-center px-8 py-2 rounded-lg hover:opacity-90 border"
          >
            Reject
          </button>
        </div>
      </div>`;

let variables = ["--bannerBg", "--textColor", "--acceptBg", "--acceptText"];

let value = ["c6f1cc", "797979", "38693f", "ffffff"];

variables.forEach((attr, i) => {
  document.documentElement.style.setProperty(attr, `#${value[i]}`);
  console.log(value[i]);
});

cookie1.appendChild(banner);
