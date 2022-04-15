var Body = {
  setColor: function (color) {
      // document
      //     .querySelector('body')
      //     .style
      //     .color = color;
      $('body').css('color'. color);
  },
  setBackgroundColor: function (color) {
    $('body').css('color'. color);
      // document
      //     .querySelector('body')
      //     .style
      //     .backgroundColor = color;
  }
}

var Links = {
  setColor: function (color) {
    $('a').css('color', color);
  }
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while (i < alist.length) {
      //     alist[i].style.color = color;
      //     i = i + 1;
      // }
  }
}

function nightDayHandler(self) {
  //var target = document.querySelector('body');
  if (self.value === 'night') {
      //target.style.backgroundColor = 'black';
      //BodySetBackgroudSetColor('black');
      Body.setBackgroundColor('black');
      //target.style.color = 'white';
      //BodySetColor('white');
      Body.setColor('white');
      self.value = 'day'
      //LinksSetColor("powderblue");
      Links.setColor('powderblue');

  } else {
      //target.style.backgroundColor = 'white';
      //BodySetBackgroudSetColor('white');
      Body.setBackgroundColor('white');
      //target.style.color = 'black';
      //BodySetColor('black');
      Body.setColor('black');
      self.value = 'night'
      Links.setColor('blue');
      //LinksSetColor("blue");

  }
}