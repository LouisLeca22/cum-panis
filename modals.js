var modalinks = document.querySelectorAll('.modal-open');

modalinks.forEach(function(link){
    link.onclick = function(e){
    e.preventDefault();
    var modal = link.getAttribute("data-modal");
    document.getElementById(modal).style.display= "block";
    window.addEventListener("keydown", function (e){
    if (e.key === "Escape" || e.key ==="Esc"){
        document.getElementById(modal).style.display="none";
      }
    });
  }
})


var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
    var modal = btn.closest(".modal").style.display ="none";
    }
})



window.onclick = function (e){
  if(e.target.className === "modal"){
    e.target.style.display = "none";
  }
};

