/*
* layout
* rem ²¼¾Ö 750px = 7.5rem
* */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalcEM = function () {
            var clientWidth = docEl.clientWidth,fontSize = docEl.style.fontSize;
            if (!clientWidth) return;
            var fontRem = 100 * (clientWidth / 640),id = 'rem-'+(Math.random()*10000|0+'');

            if (!docEl.id){
                addCSS('#'+id+'{font-size:'+fontRem+'px !important}');
                docEl.id = id;
            }
            else{
                (docEl.id.indexOf('___')<0)&&(docEl.id = id+'___');
                docEl.style.fontSize = fontRem + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalcEM, false);
    win.addEventListener('DOMContentLoad', recalcEM, false);
    recalcEM();

    function addCSS(cssText){
        var style = document.createElement('style'),
            head = document.head || document.getElementsByTagName('head')[0];
        style.type = 'text/css';
        if(style.styleSheet){ //IE
            var func = function(){
                try{
                    style.styleSheet.cssText = cssText;
                }catch(e){

                }
            };
            if(style.styleSheet.disabled){
                setTimeout(func,10);
            }else{
                func();
            }
        }else{ //w3c
            var textNode = document.createTextNode(cssText);
            style.appendChild(textNode);
        }
        head.appendChild(style);
    }
})(document, window);