let collapseColorId = ["heading", "paragraph"]
// let colorInputPair = [
//     ["cardBgColorInput", "cardBgColorTextInput"],
//     ["cardBorderColorInput", "cardBorderColorTextInput"]
// ]

// let data = [
//     ["cardBgColorInput", "--card-bg-color"],
//     ["cardBorderColorInput", ""],
//     ["cardBorderSize", ""],
//     ["cardButtonColorInput", ""],
//     ["cardButtonBorderColorInput", ""],
//     ["activeCardBgColorInput", ""],
//     ["activeCardBorderColorInput", ""],
//     ["activeCardBorderSize", ""],
//     ["activeCardButtonColorInput", ""],
//     ["activeCardButtonBorderColorInput", ""],
//     ["activeCardButtonBorderSize", ""],
// ]



function toggleCollapsed(element) {
    if (element.classList.contains("grid-rows-[auto_0fr]")) {
        element.classList.add("grid-rows-[auto_1fr]")
        element.classList.remove("grid-rows-[auto_0fr]")
    } else {
        element.classList.add("grid-rows-[auto_0fr]")
        element.classList.remove("grid-rows-[auto_1fr]")
    }
}

function collapseAllCard() {
    collapseColorId.forEach((card) => {
        let element = document.getElementById(card)
        element.classList.remove("grid-rows-[auto_1fr]")
        element.classList.add("grid-rows-[auto_0fr]")
    })
}

// function syncPair(id1, id2) {
//     ["input", "keyup", "keydown", "change"].forEach((action) => {
//         document.getElementById(id1).addEventListener(action, (e) => {
//             current = e.target.value;
//             document.getElementById(id2).value = current;
//         });
//         document.getElementById(id2).addEventListener(action, (e) => {
//             current = e.target.value;
//             document.getElementById(id1).value = current;
//         });
//     })
// }

// for (let [id1, id2] of colorInputPair) {
//     syncPair(id1, id2)
// }
let textInput = `
<div class="w-full max-w-xs">
<label class="label">
<span class="label-text">Text</span>
</label>
<input
type="text"
value=""
class="w-full max-w-xs"
/>
</div
`;

function getTextInput(value) {
    let textInput = `
        <div class="w-full max-w-xs">
            <label class="label">Text</label>
            <input type="text" value="${value}" class="w-full max-w-xs" />
        </div>
`;
    return textInput;
}

function getTextArea(value) {
    let textArea = `
        <div class="w-full max-w-xs">
            <label class="label">Text</label>
            <textarea class="w-full max-w-xs">${value}"</textarea>
        </div>
`;
    return textArea;
}

function getColor(value) {
    let color = `
        <div class="w-full max-w-xs relative">
            <label class="label">
                <span class="label-text">Background color:</span>
            </label>
            <input
                type="text"
                value="#ffffff"
                class="p-2 w-full max-w-xs"
            />
            <input
                type="color"
                class="absolute bottom-1.5 right-1 h-8 w-8"
            />
        </div>
`;
    return color;
}
function getBgColor(value) {
    let bgColor = `
        <div class="w-full max-w-xs relative">
            <label class="label">
                <span class="label-text">Background color:</span>
            </label>
            <input
                type="text"
                value="#ffffff"
                class="p-2 w-full max-w-xs"
            />
            <input
                type="color"
                class="absolute bottom-1.5 right-1 h-8 w-8"
            />
        </div>
`;
    return bgColor;
}

function getFontSize(value) {
    let fontSize = `
        <div class="w-full max-w-xs relative">
                    <label class="label">
                      <span class="label-text">Border Size:</span>
                    </label>
                    <input
                      type="number"
                      value="1"
                      placeholder="1"
                      class="w-full max-w-xs"
                    />
                    <div
                      class="absolute bottom-0 right-0 border border-gray-300 bg-gray-200 rounded-e-lg py-2 px-3 h-[42px] flex justify-center items-center"
                    >
                      px
                    </div>
                  </div>
`;
    return fontSize;
}
function getFontWeight(value) {
    let fontWeight = `

        <div class="w-full max-w-xs">
            <label class="label">Text</label>
            <input type="text" value="${value}" class="w-full max-w-xs" />
        </div>
`;
    return fontWeight;
}
function getTextAlign(name, value) {
    let textAlign = `
       <p>Text Alignment:</p>
        <div class="btn-group rounded-lg" >
        <div class="active">
        <label for="${name}"><span class="material-symbols-outlined">
                format_align_left
            </span></label>
            <input type="radio" name="${name}" value="left" checked>
        </div>
        <div>
        <label><span class="material-symbols-outlined">
                format_align_center
            </span></label>
            <input type="radio" name="${name}" value="center">
        </div>
        <div>
        <label><span class="material-symbols-outlined">
                format_align_right
            </span></label>
            <input type="radio" name="${name}" value="right" >
        </div>
        </div>
`;
    return textAlign;
}

let text = [
    "TextInput",
    "Color",
    "BgColor",
    "FontSize",
    "FontWeight",
    "TextAlign",
];
let textArea = [
    "TextArea",
    "color",
    "bgColor",
    "fontSize",
    "fontWeight",
    "textAlign",
];
let card = ["Card", "bgColor", "borderColor", "borderWidth"];
let activeCard = ["Activecard", "bgColor", "borderColor", "borderWidth"];
let button = [
    "Button",
    "bgColor",
    "borderColor",
    "borderWidth",
    "color",
    "fontSize",
    "fontWeight",
    "textAlign",
];
let list = ["List", "icon", "fontSize", "fontWeight", "textAlign"];

let cardHTML = ``;

document.querySelectorAll('[data-edit-type]').forEach((element) => {
    let selfValue = element.innerText
    let name = element.dataset.cardHeading
    cardHTML += `
        <li
            class="menu_accordian grid grid-rows-[auto_0fr] overflow-hidden transition-all duration-200"
            id="${element.dataset.selfId}"
            data-status="close"
          >
            <button class="py-4 px-2 flex justify-between">
              <p class="pointer-events-none">${element.dataset.cardHeading.toUpperCase()}</p>
              <div class="h-6 w-6 pointer-events-none">
                <span class="material-symbols-outlined"> expand_more </span>
              </div>
            </button>
            <div class="menu_content overflow-x-hidden overflow-y-scroll">
              <div class="transition-all duration-150 ease-in-out rounded-lg">
`;


    eval(element.dataset.editType).forEach((item) => {
        if (item == "TextInput") {
            cardHTML += eval("get" + item + `('${selfValue}')`);

        } else if (item == "TextAlign"){
            cardHTML += eval("get" + item + `('${name}', '${selfValue}')`);
        } else {
            cardHTML += eval("get" + item + `('hello');`);

        }
    })
    cardHTML += `</div></div></li>`
    document.getElementById("palette").innerHTML = cardHTML;
})




collapseColorId.forEach((card) => {
    let element = document.querySelector(`#${card}`);
    element.addEventListener("click", () => {
        collapseAllCard(element);
        toggleCollapsed(element);
    })
})



let allRadio = document.querySelectorAll("[data-card-heading]")


allRadio.forEach((radio)=> {
    let elements = document.querySelectorAll(`[name="${radio.dataset.cardHeading}"]`)

    elements.forEach((element)=> {
        element.addEventListener("change", ()=>{
            if(element.checked){

            }
        })
    })
})

