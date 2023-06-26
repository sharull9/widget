
document.head.innerHTML += `
<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border: 1px solid #adb5bd;
        transition: 0.4s;
        border-radius: 30px;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 20px;
        left: 0.27em;
        bottom: 0.25em;
        background-color: #adb5bd;
        transition: 0.4s;
      }
      input:checked + .slider {
        background-color: var(--main-color);
        border: 1px solid var(--main-color);
      }
      input:focus + .slider {
        box-shadow: 0 0 1px var(--main-color);
      }
      input:checked + .slider:before {
        transform: translateX(1.4em);
        background-color: #fff;
      }
    </style>
    <style type="text/tailwindcss">
      :root {
        --main-color: #202c46;
        --secondary-color: #c7d2fe;
        --body-color: #ffffff;
        --card-color: #ffffff;
        --active-card: #ffffff;
        --border-width: 1px;
        --active-border-width: 2px;
        --heading-color: #000000;
        --paragraph-color: #464646;
        --price-color: #4f46e5;
        --icon: #202c46;
      }
      body {
        font-family: "Inter", sans-serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--heading-color) !important;
      }
      li,
      p {
        color: var(--paragraph-color) !important;
      }
      .tag {
        color: var(--main-color) !important;
      }
      .material-symbols-outlined {
        color: var(--icon);
      }
      @layer base {
        .card {
          @apply p-7 border bg-card rounded-xl transition-all duration-200 ease-in-out hover:shadow-lg;
          border-width: var(--border-width) !important;
        }
        .btn {
          @apply py-2 text-center text-base w-full rounded-xl transition-all duration-200 ease-in-out bg-lightBlue text-main hover:shadow-md;
        }
        .card-active {
          @apply border-main lg:scale-110;
          border-width: var(--active-border-width) !important;
          background-color: var(--active-card) !important;
        }
        .card-active .btn {
          @apply bg-main text-lightBlue hover:shadow-md;
        }
        .price {
          color: var(--price-color);
        }
        .discount {
          @apply transition-all duration-200 ease-in-out opacity-0 scale-0;
        }
      }
    </style>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              main: "var(--main-color)",
              lightBlue: "var(--secondary-color)",
              shadow: "var(--shadow-color)",
              body: "var(--body-color)",
              card: "var(--card-color)",
              activeCard: "var(--active-card)",
              activeBorder: "var(--active-card-border)",
              activeBorderWidth: "var(--active-border-width)",
            },
          },
        },
      };
    </script>
`

document.getElementById("price_widget_layout_1").innerHTML = `
<div class="md:p-5 md:text-center p-4">
      <div class="md:w-3/4 lg:w-1/2 mx-auto mb-2">
        <p class="text-base tag">Pricing</p>
      </div>
      <div class="md:w-3/4 lg:w-1/2 mx-auto mb-4">
        <h1 class="text-4xl font-bold">Choose the right plan for you</h1>
        <p class="text-xl pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis, veniam? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis, veniam?
        </p>
      </div>
    </div>
    <div class="py-5 flex justify-center items-center gap-4">
      <span>Monthly</span>
      <label class="switch">
        <input id="switchData" type="checkbox" />
        <span class="slider"></span>
      </label>
      <span>Anually</span>
    </div>
    <div
      id="msg"
      class="opacity-0 scale-0 transition-all duration-200 ease-in-out pb-2"
    >
      <p class="text-center">
        Save
        <span class="bg-main rounded-full text-white px-2 py-1">10%</span>
        on yearly
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 px-4 gap-7 lg:max-w-7xl mx-auto"
    >
      <div class="card relative">
        <h2 class="text-base font-bold">Basic</h2>
        <div>
          <p class="text-sm">
            The essentials to provide your best work for clients.
          </p>
        </div>
        <div class="mt-5">
          <p class="text-base">
            <span>$</span>
            <span class="price text-5xl font-bold leading-none">15</span>
            <span>/month</span>
          </p>
        </div>
        <div class="my-5">
          <button class="btn">Buy plan</button>
        </div>
        <ul class="list-disc list-inside grid gap-2">
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            5 products
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Up to 1,000 subscribers
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Basic analytics
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            48-hour support response time
          </li>
        </ul>
      </div>
      <div class="card card-active relative">
        <h2 class="text-base font-bold">Basic</h2>
        <div>
          <p class="text-sm">
            The essentials to provide your best work for clients.
          </p>
        </div>
        <div class="mt-5">
          <p class="text-base">
            <span>$</span>
            <span class="price text-5xl font-bold leading-none">15</span>
            <span>/month</span>
          </p>
        </div>
        <div class="my-5">
          <button class="btn">Buy plan</button>
        </div>
        <ul class="list-disc list-inside grid gap-2">
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            5 products
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Up to 1,000 subscribers
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Basic analytics
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            48-hour support response time
          </li>
        </ul>
      </div>
      <div class="card relative">
        <h2 class="text-base font-bold">Basic</h2>
        <div>
          <p class="text-sm">
            The essentials to provide your best work for clients.
          </p>
        </div>
        <div class="mt-5">
          <p class="text-base">
            <span>$</span>
            <span class="price text-5xl font-bold leading-none">15</span>
            <span>/month</span>
          </p>
        </div>
        <div class="my-5">
          <button class="btn">Buy plan</button>
        </div>
        <ul class="list-disc list-inside grid gap-2">
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            5 products
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Up to 1,000 subscribers
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Basic analytics
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            48-hour support response time
          </li>
        </ul>
      </div>
      <div class="card relative">
        <h2 class="text-base font-bold">Basic</h2>
        <div>
          <p class="text-sm">
            The essentials to provide your best work for clients.
          </p>
        </div>
        <div class="mt-5">
          <p class="text-base">
            <span>$</span>
            <span class="price text-5xl font-bold leading-none">15</span>
            <span>/month</span>
          </p>
        </div>
        <div class="my-5">
          <button class="btn">Buy plan</button>
        </div>
        <ul class="list-disc list-inside grid gap-2">
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            5 products
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Up to 1,000 subscribers
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            Basic analytics
          </li>
          <li class="flex">
            <span class="material-symbols-outlined"> arrow_right </span>
            48-hour support response time
          </li>
        </ul>
      </div>
    </div>
`;

let btn = document.getElementById("switchData");
let cardPrice = document.querySelectorAll(".price");
let msg = document.querySelector("#msg");
let active = document.getElementsByClassName("card-active");
let percentValue = 10;
let currentValue = [];

// adding event for checkbox
btn.addEventListener("change", updateValue);

// creating array with the default price
document.querySelectorAll(".price").forEach((el) => {
    currentValue.push(el.innerText);
});

// updating value based on input checbox
function updateValue() {
    if (btn.checked) {
        cardPrice.forEach((el, i) => {
            let yearlyValue = currentValue[i] * 12;
            let per = (yearlyValue * percentValue) / 100;
            let price = yearlyValue - per;
            el.innerText = price;
        });
        setTimeout(() => {
            msg.classList.add("opacity-100", "scale-100");
            msg.classList.remove("opacity-0", "scale-0");
        }, 100);
    } else {
        cardPrice.forEach((el, i) => {
            el.innerText = currentValue[i];
        });
        setTimeout(() => {
            msg.classList.remove("opacity-100", "scale-100");
            msg.classList.add("opacity-0", "scale-0");
        }, 100);
    }
}