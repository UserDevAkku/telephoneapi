let wrapper = document.querySelector(".wrapper");
let modes = document.querySelector(".modes")
let get = document.querySelector("#get")
let reset = document.querySelector("#reset")
let next = document.querySelector("#next")
let IMGs = document.querySelector("#IMGs")
let msg = document.querySelector("#msg")
let btns = document.querySelectorAll(".btn")
let save = document.querySelector("#save")
let get_logo = document.getElementById("get_logo");
let next_logo = document.getElementById("next_logo");
let reset_logo = document.getElementById("reset_logo");
let save_logo = document.getElementById("save_logo");
let white = document.getElementById("white");
let darkred = document.getElementById("darkred");
let palemintgreen = document.getElementById("palemintgreen");
let tealblue = document.getElementById("tealblue");
let lightyellow = document.getElementById("lightyellow");
let brightcyan = document.getElementById("brightcyan");
let searchbar = document.querySelector(".search_bar")
let colorPicker = document.querySelector(".colorPicker")
let codes = document.querySelector(".codes")
let msgs=document.querySelector(".msgs")
let Hint=document.querySelector(".Hint")
let CharFinal;
let n = 10;
let i;
let num;
let getPHN;
let showIMG;
let alphaNum;
// Define the country codes as an object
getPHN = () => {
    num = Math.floor(Math.random() * 10)
    searchbar.style.textAlign = "center"
    searchbar.value += num
}
showIMG = () => {
    let Num = Math.floor(Math.random() * 195)
    // Country code  
    let apiUrl = `https://countryflagsapi.netlify.app/flag/${country_code[Num]}.svg`;
    alphaNum = country_code[Num];
    console.log(alphaNum)
    IMGs.style.border = "1px solid white";
    IMGs.style.backgroundImage = `url(${apiUrl})`
    IMGs.style.backgroundPosition = "center"
    IMGs.style.backgroundSize = "cover"
    IMGs.style.objectFit = "cover"
    codes.innerHTML = `${alpha[alphaNum]}`
    msg.innerHTML=`${CountryNames[alphaNum]}`
    msg.style.fontWeight="bolder"
    msg.style.animation="status 1s ease-in-out infinity alternative"
    msg.style.fontSize="12"
    msgs.style.backgroundColor="black"
    Hint.style.boxShadow="0 0 4px 4px white inset"
    msg.style.textTransformation="uppercase"
}

get.addEventListener("click", function () {
    this.disabled = true;
    showIMG();
    if (searchbar.value === "")
        for (i = 0; i < n; i++) {
            getPHN();
        }
})
reset.addEventListener("click", () => {
    if (searchbar.value !== "") {
        searchbar.value = ""
        IMGs.style.backgroundImage = ""
        codes.innerText = ""
        get.disabled = false;
    }
    else {
        alert("Nothing to delete");
    }
})

next.addEventListener("click", () => {
    if ((IMGs.style.display = "block") && (searchbar.value !== "")) {
        searchbar.value = null
        showIMG();
        for (i = 0; i < n; i++) {
            getPHN();
        }

    }

})
//
let G = () => { msg.innerHTML = "Get" }
let N = () => { msg.innerHTML = "Next" }
let C = () => { msg.innerHTML = "Clear" }
let S = () => { msg.innerHTML = "Save" }
//mouseover
get.addEventListener("mouseover", () => {
    G();
})
next.addEventListener("mouseover", () => {
    N();
})
reset.addEventListener("mouseover", () => {
    C();
})
save.addEventListener("mouseover", () => {
    S();
})
searchbar.addEventListener("mouseover", () => {
    msg.innerHTML = "Phone number"
})
IMGs.addEventListener("mouseover", () => {
    msg.innerHTML = "Country flag"
})
codes.addEventListener("mouseover",()=>{
     msg.innerHTML = "dial Country code"
})
//mouseout
get.addEventListener("mouseout", () => {
    msg.innerHTML = ""
})
next.addEventListener("mouseout", () => {
    msg.innerHTML = ""
})
reset.addEventListener("mouseout", () => {
    msg.innerHTML = ""
})
save.addEventListener("mouseout", () => {
    msg.innerHTML = ""
})
searchbar.addEventListener("mouseout", () => {
    msg.innerHTML = ""
})
IMGs.addEventListener("mouseout", () => {
    msg.innerHTML = ""
})
//ColorPicker
colorPicker.addEventListener("mouseover", () => {
    colorPicker.style.display = "none"
    modes.style.display = "block"
})
darkred.addEventListener('mouseover', () => {
    wrapper.style.backgroundColor = "#3D0C6C"; // Dark Purple
    searchbar.style.backgroundColor = "#5C2A9B"; // Lighter Dark Purple
    IMGs.style.backgroundColor = "#5C2A9B"; // Lighter Dark Purple
    codes.style.backgroundColor = "#5C2A9B"; // Lighter Dark Purple
    get_logo.style.color = "#FFDDC1"; // Light Peach
    next_logo.style.color = "#FF6F61"; // Coral
    reset_logo.style.color = "#FFD700"; // Gold
    save_logo.style.color = "#00FFFF"; // Aqua
});

palemintgreen.addEventListener('mouseover', () => {
    wrapper.style.backgroundColor = "#1E90FF"; // Electric Blue
    searchbar.style.backgroundColor = "#63B1FF"; // Lighter Electric Blue
    IMGs.style.backgroundColor = "#63B1FF"; // Lighter Electric Blue
    codes.style.backgroundColor = "#63B1FF"; // Lighter Electric Blue
    get_logo.style.color = "#FFD700"; // Gold
    next_logo.style.color = "#FF6347"; // Tomato
    reset_logo.style.color = "#32CD32"; // Lime Green
    save_logo.style.color = "#FF69B4"; // Hot Pink
});

tealblue.addEventListener('mouseover', () => {
    wrapper.style.backgroundColor = "#39FF14"; // Neon Green
    searchbar.style.backgroundColor = "#6DFF6B"; // Lighter Neon Green
    IMGs.style.backgroundColor = "#6DFF6B"; // Lighter Neon Green
    codes.style.backgroundColor = "#6DFF6B"; // Lighter Neon Green
    get_logo.style.color = "#FF1493"; // Deep Pink
    next_logo.style.color = "#00BFFF"; // Deep Sky Blue
    reset_logo.style.color = "#FF8C00"; // Dark Orange
    save_logo.style.color = "#DAA520"; // Goldenrod
});

lightyellow.addEventListener('mouseover', () => {
    wrapper.style.backgroundColor = "#D1001C"; // Rich Red
    searchbar.style.backgroundColor = "#F36C6C"; // Lighter Rich Red
    IMGs.style.backgroundColor = "#F36C6C"; // Lighter Rich Red
    codes.style.backgroundColor = "#F36C6C"; // Lighter Rich Red
    get_logo.style.color = "#00FFFF"; // Aqua
    next_logo.style.color = "#FF00FF"; // Magenta
    reset_logo.style.color = "#FFFF00"; // Yellow
    save_logo.style.color = "#00FF00"; // Lime
});

brightcyan.addEventListener('mouseover', () => {
    wrapper.style.backgroundColor = "#008B8B"; // Deep Cyan
    searchbar.style.backgroundColor = "#66C0C0"; // Lighter Deep Cyan
    IMGs.style.backgroundColor = "#66C0C0"; // Lighter Deep Cyan
    codes.style.backgroundColor = "#66C0C0"; // Lighter Deep Cyan
    get_logo.style.color = "#FF4500"; // Orange Red
    next_logo.style.color = "#DA70D6"; // Orchid
    reset_logo.style.color = "#32CD32"; // Lime Green
    save_logo.style.color = "#FFD700"; // Gold
});

darkred.addEventListener('mouseout', () => {
    modes.style.display = "none";
    colorPicker.style.display = "block";
});
palemintgreen.addEventListener('mouseout', () => {
    modes.style.display = "none";
    colorPicker.style.display = "block";
});

tealblue.addEventListener('mouseout', () => {
    modes.style.display = "none";
    colorPicker.style.display = "block";
});

lightyellow.addEventListener('mouseout', () => {
    modes.style.display = "none";
    colorPicker.style.display = "block";
});

brightcyan.addEventListener('mouseout', () => {
    modes.style.display = "none";
    colorPicker.style.display = "block";
});






