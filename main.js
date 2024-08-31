const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/redapple.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/redapple.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else { 
    localStorage.setItem("name", myName);
    myHeading.textContent = `Apples are Cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")){
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Apples are cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}


