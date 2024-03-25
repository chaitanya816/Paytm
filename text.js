let mode = "color";
const plus = document.querySelector(".hello");
plus.addEventListener("click", () => {

    if (mode === "color") {
        mode = "bw";

        plus.onclick = () => {
            document.getElementById("transform0").style.transform = "rotate(45deg)";
            document.querySelector(".hello1").style.marginTop = "75px";
            document.querySelector(".faq_plus1").style.marginTop = "75px";
            document.querySelector(".ansFaq1").style.visibility = "visible";
            document.getElementById("transform2").style.transform = "rotate(0deg)";
            document.querySelector(".ansFaq3").style.visibility = "hidden";
            document.getElementById("transform1").style.transform = "rotate(0deg)";
            document.querySelector(".hello2").style.marginTop = "10px";
            document.querySelector(".faq_plus2").style.marginTop = "10px";
            document.querySelector(".ansFaq2").style.visibility = "hidden";
                }
    }

    else if (mode === "bw") {

        mode = "color";

        plus.onclick = () => {
            document.getElementById("transform0").style.transform = "rotate(0deg)";
            document.querySelector(".hello1").style.marginTop = "10px";
            document.querySelector(".faq_plus1").style.marginTop = "10px";
            document.querySelector(".ansFaq1").style.visibility = "hidden";

        }
    }
});
let mode1 = "color";
const plus1 = document.querySelector(".hello1");
plus1.addEventListener("click", () => {

    if (mode1 === "color") {
        mode1 = "bw";

        plus1.onclick = () => {
            
            document.getElementById("transform1").style.transform = "rotate(45deg)";
            document.querySelector(".hello2").style.marginTop = "75px";
            document.querySelector(".faq_plus2").style.marginTop = "75px";
            document.querySelector(".ansFaq2").style.visibility = "visible";
            document.getElementById("transform0").style.transform = "rotate(0deg)";
            document.querySelector(".hello1").style.marginTop = "10px";
            document.querySelector(".faq_plus1").style.marginTop = "10px";
            document.querySelector(".ansFaq1").style.visibility = "hidden";
            document.getElementById("transform2").style.transform = "rotate(0deg)";
            document.querySelector(".ansFaq3").style.visibility = "hidden";
        }
    }

    else if (mode1 === "bw") {

        mode1 = "color";

        plus1.onclick = () => {

            document.getElementById("transform1").style.transform = "rotate(0deg)";
            document.querySelector(".hello2").style.marginTop = "10px";
            document.querySelector(".faq_plus2").style.marginTop = "10px";
            document.querySelector(".ansFaq2").style.visibility = "hidden";
        }
    }
});

let mode2 = "color";
const plus2 = document.querySelector(".hello2");
plus2.addEventListener("click", () => {

    if (mode2 === "color") {
        mode2 = "bw";

        plus2.onclick = () => {
            document.getElementById("transform2").style.transform = "rotate(45deg)";
            document.querySelector(".ansFaq3").style.visibility = "visible";
            document.getElementById("transform1").style.transform = "rotate(0deg)";
            document.querySelector(".hello2").style.marginTop = "10px";
            document.querySelector(".faq_plus2").style.marginTop = "10px";
            document.querySelector(".ansFaq2").style.visibility = "hidden";
        }
    }

    else if (mode2 === "bw") {

        mode2 = "color";

        plus2.onclick = () => {
            document.getElementById("transform2").style.transform = "rotate(0deg)";
            document.querySelector(".ansFaq3").style.visibility = "hidden";

        
        }
    }
});

let wid;
const hello=document.body.style.width="wid";

if (wid<=500) {

    prompt("not capable");
    
}