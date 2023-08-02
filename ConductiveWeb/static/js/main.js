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