
var map = document.querySelector('.map'); 
var paths = document.querySelectorAll('.map__image a'); 
var links = document.querySelectorAll('.map__liste a'); 



if (NodeList.prototype.forEach === undefined) {
  NodeList.prototype.forEach = function(callback){
    [].forEach.call(this, callback);
  }
}


var activeArea = function (id){
  map.querySelectorAll('.is-active').forEach(function (item){
  item.classList.remove('is-active');
  })
  if (id !== undefined){
  document.querySelector('#list-' + id).classList.add('is-active');
  document.querySelector('#pays-' + id).classList.add('is-active');
  }
}


paths.forEach(function (path){
  path.addEventListener('mouseenter', function (){
      var id = this.id.replace('pays-', '');
      activeArea(id);


  })
})

links.forEach(function (link){
  link.addEventListener('mouseenter', function (){
    var id = this.id.replace('list-', '');
    activeArea(id);
  })
})



map.addEventListener('mouseover', function(){
  activeArea()
})


