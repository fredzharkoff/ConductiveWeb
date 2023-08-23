function barMenu() {
    var x = document.getElementById("navCont");
    if (x.className === "container-fluid") {
      x.className += " responsive";
    } else {
      x.className = "container-fluid";
    }
  } 

