console.log("App running successfully...");

const controls=document.querySelectorAll(".shadow-controls .group .control");
const copyBtn=document.querySelector(".shadow-result .shadow-code .copyBtn");
const codeContent=document.querySelector(".shadow-result .shadow-code .code");
const shadowBox=document.querySelector(".shadow-result .shadow-box");


let xValue=0, yValue=4, spreadValue=7, blurValue=40, opacityValue=0.3, colorValue="#000000";
let insetStatus=false;

const hexToRGBA=(hex)=>{
    let r=parseInt(hex.slice(1,3), 16);
    let g=parseInt(hex.slice(3,5), 16);
    let b=parseInt(hex.slice(5,7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacityValue})`; 
}

const GenerateShadow=()=>{
    if(insetStatus){
       shadowBox.style.boxShadow=`inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
       codeContent.innerHTML=`Box-shadow: <span style="color: rgb(32, 199, 255);"> ${shadowBox.style.boxShadow};</span>`;
    }else{
       shadowBox.style.boxShadow=`${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
       codeContent.innerHTML=`Box-shadow: <span style="color: rgb(32, 199, 255);"> ${shadowBox.style.boxShadow};</span>`;
    }
}

const updateShadow=()=>{
    xValue=document.querySelector("#x-offset").value;
    yValue=document.querySelector("#y-offset").value;
    blurValue=document.querySelector("#blur-shadow").value;
    spreadValue=document.querySelector("#spread-shadow").value;
    opacityValue=document.querySelector("#opacity").value;
    colorValue=hexToRGBA(document.querySelector("#shadow-color").value);
    insetStatus=document.querySelector("#inset").checked;

    GenerateShadow();
}

controls.forEach(control =>{
    control.addEventListener("input", ()=>{
        updateShadow();
    });
});

copyBtn.addEventListener("click", ()=>{
   let code=`box-shadow: ${shadowBox.style.boxShadow};`;
   let finalCode=code;
   navigator.clipboard.writeText(finalCode);
   copyBtn.textContent="copied";

   setTimeout(() => {
     copyBtn.textContent="copy";
   }, 1500);
});

// console.log(shadowBox);