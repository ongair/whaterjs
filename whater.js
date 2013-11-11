/**
 * @depends js/isMobile.js
 * @depends js/tinyDOM.js
 */
(function (global) {
    if (!isMobile.any) {
        $.loadCSS("/whaterjs/style.css");
        var url = window.location;
        console.log("Location : ", url);
        $.id("whatsapp").setAttribute("href", "whatsapp://send?text=" + url);
    }
})(this);