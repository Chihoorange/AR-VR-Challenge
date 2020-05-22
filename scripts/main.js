
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
