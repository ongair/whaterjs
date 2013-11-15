/**
 * @depends js/isMobile.js
 * @depends js/tinyDOM.js
 */
(function (global) {
    if (isMobile.any) {
        $.loadCSS("/whaterjs/style.css");
        var url = window.location;
        // console.log("Location : ", url);
        if (isMobile.android) {
        	$.id("whatsapp").setAttribute("href", "com.whatsapp://send?text=" + url);
        }
        else {
        	$.id("whatsapp").setAttribute("href", "whatsapp://send?text=" + url);
        }        
    }
})(this);