function fn(){
    var winw = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winw/7.5 + "px";
 }
 fn();
 window.onresize=fn;