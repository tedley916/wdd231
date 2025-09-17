const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");
const nearbyImage = document.querySelector("#nearbyImage");

openTahoeButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Welcome to Lake Tahoe!";
    dialogBoxText.setAttribute("class", "center-image");
    nearbyImage.setAttribute("src", "images/tahoe.jpeg");
});

openRenoButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Welcome to Reno!";
    dialogBoxText.setAttribute("class", "center-image");
    nearbyImage.setAttribute("src", "images/reno.png");
});



openSanFranButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Welcome to San Fransisco!";
    dialogBoxText.setAttribute("class", "center-image");
    nearbyImage.setAttribute("src", "images/san-fransisco.png");
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

// lodging
const dialogBoxLodging = document.querySelector("#dialogBoxLodging");

dialogBoxLodging.addEventListener("click", () => {
    dialogBoxLodging.showModal();
    dialogBoxText.innerHTML = "lodging stuff goes here";
    dialogBoxText.setAttribute("class", "center-image");

});

