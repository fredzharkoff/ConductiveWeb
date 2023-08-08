document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector(".navLinkStyle");
    link.addEventListener("mousemove", animateLightning);
  });
  
  function animateLightning(event) {
    let lightning = document.getElementsByClassName("navLinkStyle");
    
    // If the <style> element for the lightning effect doesn't exist, create it.
    if (!lightning) {
      lightning = document.createElement("style");
      lightning.className = "navLinkStyle";
      document.head.appendChild(lightning);
    }
  
    const { offsetX, offsetY } = event;
    const lightningCSS = `
      .navLinkStyle::before {
        background-position: ${offsetX}px ${offsetY}px;
      }
    `;
  
    // Update the CSS of the <style> element with the new lightning position.
    lightning.innerHTML = lightningCSS;
  }


  function barMenu() {
    var x = document.getElementById("navCont");
    if (x.className === "container-fluid") {
      x.className += " responsive";
    } else {
      x.className = "container-fluid";
    }
  } 

  var videoLocation = getElementById('vid')

  if(window.innerWidth <992){
    videoLocation.removeAttribute("autoplay");
        };


        var videoLocation2 = getElementsByClassName('lightning')

  if(window.innerWidth <992){
    videoLocation2.removeAttribute("autoplay");
        };

        var videoLocation3 = getElementsByClassName('floatingTxt')

  if(window.innerWidth <992){
    videoLocation3.removeAttribute("autoplay");
        };