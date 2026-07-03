console.log("Piu MakeOver website loaded successfully");

document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener("click", function(event){
    var target = document.querySelector(this.getAttribute("href"));
    if(target){
      event.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
