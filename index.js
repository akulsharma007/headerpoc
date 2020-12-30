window.prevPos = window.pageYOffset;

window.onscroll = throttle(function() {
    var currPos = window.pageYOffset;
      var header = document.getElementById("header")
      if (window.prevPos - currPos >= 0) {
        if(header.style.top!=="0")
            header.style.top = "0";
      } else {
        if(header.style.top!=="-100px")
            header.style.top = "-100px";
      }
      window.prevPos = currPos;
},100);

function throttle(func, timeFrame) {
    var lastTime = 0;
    return function () {
        var now = Date.now();
        if (now - lastTime >= timeFrame) {
            func();
            lastTime = now;
        }
    };
  }