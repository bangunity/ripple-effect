
console.log('                      888      888                                d8b 888    888               888          d8b          ');
console.log('                      888      888                                Y8P 888    888               888          Y8P          ');
console.log('                      888      888                                    888    888               888                       ');
console.log(' .d8888b .d88b.   .d88888  .d88888  .d88b.   .d88b.       .d88b.  888 888888 88888b.  888  888 88888b.      888  .d88b.  ');
console.log('d88P"   d88""88b d88" 888 d88" 888 d88""88b d88""88b     d88P"88b 888 888    888 "88b 888  888 888 "88b     888 d88""88b ');
console.log('888     888  888 888  888 888  888 888  888 888  888     888  888 888 888    888  888 888  888 888  888     888 888  888 ');
console.log('Y88b.   Y88..88P Y88b 888 Y88b 888 Y88..88P Y88..88P d8b Y88b 888 888 Y88b.  888  888 Y88b 888 888 d88P d8b 888 Y88..88P ');
console.log(' "Y8888P "Y88P"   "Y88888  "Y88888  "Y88P"   "Y88P"  Y8P  "Y88888 888  "Y888 888  888  "Y88888 88888P"  Y8P 888  "Y88P"  ');
console.log('                                                              888                                                        ');
console.log('                                                         Y8b d88P                                                        ');
console.log('                                                          "Y88P"                                                         ');   
/**
 * function ripple эффект
 * @param pageX
 * @param pageY
 * @param element
 */
function showRippleLayer(element, pageX, pageY, appendTo, parentZIndex){

    if($('.overlay').length > 0) return false;

    var appendTo = appendTo ? appendTo : 'body';

    var overlay = $('<div/>');
    overlay.addClass('overlay');
    overlay.css({zIndex : '1'}).appendTo($(appendTo));

    var positionElement = parentZIndex ? $(parentZIndex).css('position') : element.css('position');

    if(parentZIndex){
        if(positionElement == 'static') $(parentZIndex).css({position : 'relative'});
        $(parentZIndex).css({zIndex : 50});
    }else{
        if(positionElement == 'static') element.css({position : 'relative'});
        element.css({zIndex : 50});
    }

    var div = $('<div/>');
    div.addClass('ripple-background');
    div.css({
        top: pageY,
        left: pageX
    }).appendTo(overlay);
}

/**
 *  destruct ripple эффект
 * @param element
 */
function hideRippleLayer(element){
    if(element){
        var cssObject = $(element).prop('style');
        cssObject.removeProperty('z-index');
    }
    $('.overlay').remove();
}


$(function(){

    var pageXCoordinate, pageYCoordinate; // координаты мышки

    $(document).mousemove(function(e){
        pageXCoordinate = e.pageX;
        pageYCoordinate = e.pageY;
    });
    /**
     * ripple background
     */
    $(".input").on('click', function(event){
        var offsetX = event.clientX;
        var offsetY = event.clientY;
        //ripple эффект
        showRippleLayer($(this), offsetX, offsetY);
    });

    $(document).on('click', '.overlay', function(){
        hideRippleLayer();
    });

});