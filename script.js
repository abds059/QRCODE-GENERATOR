let input = document.getElementById("input-text");
let btn = document.getElementById("btn");
let content = document.querySelector(".content");
let QR_image = document.querySelector(".content img");

let Base_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQRcode(){
    let text = input.value.trim();

    if(text != ""){
        let src = Base_URL + encodeURIComponent(text);

        QR_image.style.display = "none";

        QR_image.onload = () =>{
            QR_image.style.display = "block";
            content.style.display = "block";
        }

        QR_image.src = src;
    }
    else{
        input.placeholder = "Please enter text!";
        input.value = "";

        setTimeout(() => {
            input.placeholder = "Enter text"; 
        }, 2000);
        
        content.style.display = "none";
    }

}

btn.addEventListener("click", generateQRcode);
btn.addEventListener("touchstart", generateQRcode);