

let headingTextArray = ["Nathan Scattini", "Web Developer", "Baloon Animal Enthusiast"];
let splitArray =  headingTextArray.map( i => i.split(""));
let secondArray = [];
let arrayMarker = 0;
let stringBuild = "";
let loopCount1 = 0;
let delay = 0;
let loopCount2 = splitArray[arrayMarker].length -1
let typeText = document.getElementById("type_text");
let bouncing_arrow = document.getElementById("bouncing_arrow");
let landing = document.querySelector(".landing");
let headingSVG = document.getElementById("header-svg");
let headingPath = document.getElementById("heading_path")
let loopTimer;
let arrowSwitch = false;
let color = "blue"
let random_interval;
let startFinish = ["0", "1000"];
let gridList = document.querySelector(".portfolio-nav");
let portfolioGrid = document.querySelector(".portfolio-grid");

///////Heading Typed/////
setInterval(function(){

    if(loopCount2 < 0){
        arrayMarker == splitArray.length -1 ? arrayMarker = 0 : arrayMarker++;
        stringBuild = ""
        typeText.innerHTML = "";
        loopCount1 = 0;
        console.log(arrayMarker)
        loopCount2 = splitArray[arrayMarker].length -1;
        secondArray = [];
        delay = 0;
    }

    if(loopCount1 == splitArray[arrayMarker].length){
        if(delay < 50){
            delay++
        }
        else{
            typeText.innerHTML = secondArray[loopCount2];
            loopCount2--;
        }
        }
    else{
        typeText.innerHTML += splitArray[arrayMarker][loopCount1];
        stringBuild += splitArray[arrayMarker][loopCount1];
        secondArray.push(stringBuild);
        loopCount1++;
        
    }

}, 50);

/////Bouncing Arrow/////
setInterval(function(){
    if(arrowSwitch){
        bouncing_arrow.style.bottom = "9%";
        arrowSwitch = false;
        console.log(arrowSwitch);
    }
    else{
        bouncing_arrow.style.bottom = "10%";
        arrowSwitch = true;
        console.log(arrowSwitch);
    }
}, 1000);


///////change background///////




setInterval(()=>{
  let wallSwitch = Math.random();
  random_interval = Math.floor(Math.random() * 5000);
  console.log(random_interval);
  document.getElementById("svg").style.stroke = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})` 
  if(wallSwitch < .5){
   document.getElementById("svg").innerHTML = `<path class='clickedPath' d='M${Math.floor(Math.random()*1000)} ${startFinish[Math.floor(Math.random()*2)]}L${Math.floor(Math.random()*1000)} ${Math.floor(Math.random()*1000)} L${startFinish[Math.floor(Math.random()*2)]} ${Math.floor(Math.random()*1000)}'></path>`;
  }
  else if(wallSwitch > .5){
     document.getElementById("svg").innerHTML = `<path class='clickedPath' d='M${startFinish[Math.floor(Math.random()*2)]} ${Math.floor(Math.random()*1000)}L${Math.floor(Math.random()*1000)} ${Math.floor(Math.random()*1000)} L${Math.floor(Math.random()*1000)} ${startFinish[Math.floor(Math.random()*2)]} '></path>`;
    

  }
 }, 4000)


//////////////////////////// grid /////////////////////////////////

function arangeGrid(e){
    let gridArray = portfolioGrid.childNodes
    let selectorThing = portfolioGrid.childNodes[1].getAttribute("selector")
    console.log(e.getAttribute("selector"));
    console.log(selectorThing);
    for(let i = 1; i < gridArray.length; i += 2){
        console.log(e.getAttribute("selector"))
        if(e.getAttribute("selector")=== "all-selector"){
            portfolioGrid.childNodes[i].style.position = "relative"
            portfolioGrid.childNodes[i].style.display = "flex"
            portfolioGrid.childNodes[i].style.left = "0"
        }
        else if(!(portfolioGrid.childNodes[i].getAttribute("selector") === (e.getAttribute("selector")))){
            portfolioGrid.childNodes[i].style.left = "100vw"
            portfolioGrid.childNodes[i].style.position = "absolute"
        }
        else{
            portfolioGrid.childNodes[i].style.left = "0"
            portfolioGrid.childNodes[i].style.position = "relative"
            portfolioGrid.childNodes[i].style.display = "flex"
        }
    }
}