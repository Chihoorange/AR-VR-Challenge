
var imageSets = {
	blue: {
		img1: '#blue1',
		img2: '#blue2',
		img3: '#blue3',
		img4: '#blue4',
		img5: '#blue5',
		img6: '#blue6',
		img7: '#blue7'
	},
	white: {
		img1: '#white1',
		img2: '#white2',
		img3: '#white3',
		img4: '#white4',
		img5: '#white5',
		img6: '#white6',
		img7: '#white7'
	}
}

AFRAME.registerComponent('set-color', {
  schema: {default:''},

  init: function () {
    var sky = document.querySelector('a-sky');
    var color = this.data

    this.el.addEventListener('click', function(e) {
        sky.emit('fadeout');

        setTimeout(function () {
          sky.setAttribute('color', color);
          document.querySelector('#mainPic1').setAttribute('src', imageSets[color].img1)
          document.querySelector('#rightPic1').setAttribute('src', imageSets[color].img2)
          document.querySelector('#rightPic2').setAttribute('src', imageSets[color].img3)
          document.querySelector('#rightPic3').setAttribute('src', imageSets[color].img4)
          document.querySelector('#leftPic1').setAttribute('src', imageSets[color].img5)
          document.querySelector('#leftPic2').setAttribute('src', imageSets[color].img6)
          document.querySelector('#leftPic3').setAttribute('src', imageSets[color].img7)

        }, 1000);
        
        setTimeout(function () {
          sky.emit('fadein');
        }, 1000);
        
      });
    }
  });