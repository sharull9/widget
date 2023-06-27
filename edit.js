// let collapseColorId = ["cardTextEditPanel", "cardEditPanel", "activeCardEditPanel"]
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


// collapseColorId.forEach((card) => {
//     let element = document.getElementById(card)
//     element.addEventListener("click", () => {
//         collapseAllCard(element);
//         toggleCollapsed(element);
//     })
// })

// function toggleCollapsed(element) {
//     if (element.classList.contains("grid-rows-[auto_0fr]")) {
//         element.classList.add("grid-rows-[auto_1fr]")
//         element.classList.remove("grid-rows-[auto_0fr]")
//     } else {
//         element.classList.add("grid-rows-[auto_0fr]")
//         element.classList.remove("grid-rows-[auto_1fr]")
//     }
// }

// function collapseAllCard() {
//     collapseColorId.forEach((card) => {
//         let element = document.getElementById(card)
//         element.classList.remove("grid-rows-[auto_1fr]")
//         element.classList.add("grid-rows-[auto_0fr]")
//     })
// }

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
<li class="">
<div class="w-full max-w-xs">
<label class="label">
<span class="label-text">Text</span>
</label>
<input
type="text"
value=""
class="w-full max-w-xs"
/>
</div>
</li>
`;

function getTextInput(value){
    let textInput = `
<li class="">
<div class="w-full max-w-xs">
<label class="label">
<span class="label-text">Text</span>
</label>
<input
type="text"
value="${value}"
class="w-full max-w-xs"
/>
</div>
</li>
`;

return textInput;
}

let text = ["TextInput", "color", "bgColor", "fontSize", "fontWeight", "textAlign"];
let card = ["TextInput", "color", "bgColor", "fontSize", "fontWeight", "textAlign"];

let cardHTML = "";
text.forEach((item)=> {
    cardHTML += eval("get" + item+"('India');");
    console.log(cardHTML)
});

