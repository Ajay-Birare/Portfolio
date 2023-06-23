
// function ToogleHide(){
//     let btn=document.getElementById("btn0");
//     let list=document.getElementsByClassName("right");
  

//     if(list.style.display =="block"){
//         list.style.display="none";
//         btn.innerHTML="Hide";
//     }
//     else{
//         list.style.display="block";
//         btn.innerHTML="Show";
//         }
// }


//  function toggleHide() {
//       let btn = document.getElementById("btn0");
//       let links = document.getElementById("no");

//       if (links.style.display === "none") {
//         links.style.display = "block";
//         btn.innerHTML = "Hide";
//       } else {
//         links.style.display = "none";
//         btn.innerHTML = "Show";
//       }
//     }


    function Toggle(){
  let see=document.getElementById("see");
  let list=document.getElementById("list");

  if(list.style.display=="block"){
    list.style.display="none";
  }else{
    list.style.display="block";
    // see.style.display="none";
  }
}

// function Toggle(){
//   let see=document.getElementById("see");
//   let list=document.getElementById("list");

//   if(list.style.display=="block"){
//     list.style.display="none";
//   }else{
//     list.style.display="block";
//   }
// }


function darkMode(){
  let contentColor=document.getElementsByClassName("info");
  let body=document.getElementById("body");
  let nav=document.getElementsByClassName("navbar")[0];
  let navlinks=document.getElementsByClassName("navLinks");
  let bgbtn=document.getElementById("bgbtn");

  let light=document.getElementById("light");
  let skill=document.getElementsByClassName("skillName");
  let project=document.getElementsByClassName("projectName");

  // let line=document.getElementsByClassName("right");

  if(body.style.backgroundColor==="white"){
    body.style.backgroundColor="#283845";
    body.style.color="white";
    nav.style.backgroundColor="#283845";

   
    // skill.style.color="black";
    for(let i=0;i<skill.length;i++)
    {
    skill[i].style.color="black";
    }
     for(let i=0;i<project.length;i++)
    {
        project[i].style.color="black";
    }

    
   light.src="images/lighton.png";
    // nav bar items color 
    for(let i=0;i<navlinks.length;i++)
    {
        navlinks[i].style.color="white";
    }

    // content para and head color
    for(let i=0;i<contentColor.length;i++)
    {
     contentColor[i].style.color="white"
    }

    
  }else{
    body.style.backgroundColor="white";
     body.style.color="black";
    nav.style.backgroundColor="white";
    nav.style.color="black";
   light.src="images/lighoff.png";
    // skill.style.color="black";
 for(let i=0;i<5;i++)
    {
          skill[i].style.color="black";

    }
       for(let i=0;i<project.length;i++)
    {
        project[i].style.color="black";
    }
    // navbar items color
  for(let i=0;i<navlinks.length;i++)
    {
        navlinks[i].style.color="black";
    }

    // content para and head color
    for(let i=0;i<contentColor.length;i++)
    {
     contentColor[i].style.color="#3f3f46"
    }
    
  } 
}


