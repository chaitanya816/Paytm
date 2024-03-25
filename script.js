const hover=document.querySelector(".menu2");
hover.addEventListener("mouseover", () => {

    hover.onmouseover = () => {
        hover.style.height="40px";
        hover.style.backgroundColor="rgb(218, 232, 247)";
   
        document.querySelector(".list").style.visibility="visible";
    };

    hover.onmouseout=()=>{
        hover.style.height="80px";
        hover.style.backgroundColor="aliceblue";
        hover.style.border="0px";
        document.querySelector(".list").style.visibility="hidden";

    }
});

const hover_2=document.querySelector(".menu3");
hover_2.addEventListener("mouseover", () => {

    hover_2.onmouseover = () => {
        hover_2.style.height="40px";
        hover_2.style.backgroundColor="rgb(218, 232, 247)";
        document.querySelector(".list_1").style.visibility="visible";
        document.querySelector(".list_1").style.position="absolute";
    };

    hover_2.onmouseout=()=>{
        hover_2.style.height="80px";
        hover_2.style.backgroundColor="aliceblue";
        hover_2.style.border="0px";
        document.querySelector(".list_1").style.visibility="hidden";

    }
});

const hover_3=document.querySelector(".menu5");
hover_3.addEventListener("mouseover", () => {

    hover_3.onmouseover = () => {
        hover_3.style.height="40px";
        hover_3.style.backgroundColor="rgb(218, 232, 247)";
        document.querySelector(".list_2").style.visibility="visible";
        document.querySelector(".list_2").style.position="absolute";
    };

    hover_3.onmouseout=()=>{
        hover_3.style.height="80px";
        hover_3.style.backgroundColor="aliceblue";
        hover_3.style.border="0px";
        document.querySelector(".list_2").style.visibility="hidden";

    }
});
const hover_4=document.querySelector(".list_1");
hover_4.addEventListener("mouseover", () => {

    hover_4.onmouseover = () => {
        document.querySelector(".list_1").style.visibility="visible";
        document.querySelector(".list_1").style.position="absolute";
    };

    hover_4.onmouseout=()=>{
        document.querySelector(".list_1").style.visibility="hidden";

    }
});

const hover_5=document.querySelector(".list_2");
hover_5.addEventListener("mouseover", () => {

    hover_5.onmouseover = () => {
        document.querySelector(".list_2").style.visibility="visible";
        document.querySelector(".list_2").style.position="absolute";
    };

    hover_5.onmouseout=()=>{
        document.querySelector(".list_2").style.visibility="hidden";

    }
});
