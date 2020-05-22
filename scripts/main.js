
AFRAME.registerComponent('set-sky', {
  schema: {default:''},

  init: function () {
    var sky = document.querySelector('a-sky');
    var color = this.data

    this.el.addEventListener('click', function(e) {
        sky.emit('fadeout');

        setTimeout(function () {
          sky.setAttribute('color', color);
        }, 1000);
        
        setTimeout(function () {
          sky.emit('fadein');
        }, 1000);
        
      });
    }
  });

var rotationSpeed = 0.001;
var mainPic1 = document.getElementById('mainPic1');

function spin(){
	mainPic1.object3D.rotation.x += rotationSpeed;
	mainPic1.object3D.rotation.y += rotationSpeed;
	mainPic1.object3D.rotation.z += rotationSpeed/2;
	console.log(mainPic1.object3D.rotation);
}
setInterval(spin, 10);

mainPic1.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});

mainPic1.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	shrink();
	console.log('left');
});

mainPic1.addEventListener('click', function(){ // uses a fuse
	grow();
	console.log('grew');
});


function grow(){
	mainPic1.object3D.scale.x = 1.5;
	mainPic1.object3D.scale.y = 1.5;
	mainPic1.object3D.scale.z = 1.5;
	//console.log(myOtherBox.object3D.scale);
}

function shrink(){
	mainPic1.object3D.scale.x = 1;
	mainPic1.object3D.scale.y = 1;
	mainPic1.object3D.scale.z = 1;
	//console.log(myOtherBox.object3D.scale);
}
