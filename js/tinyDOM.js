/**
 * TinyDOM
 */

//Copyright 2011 Sam Carr under the MIT License
//See LICENSE for details.
(function () {
  //Root, or window.
  var root = this
  var $ = function () {}  

  //Currently Broken
  $.loadCSS = function (url) {
    var sheet = document.createElement("link")
    sheet.setAttribute("rel", "stylesheet")
    sheet.setAttribute("type", "text/css")
    sheet.setAttribute("href", url)
    document.head.appendChild(sheet)
  }

  $.id = function (a) {
    return document.getElementById(a)
  }

  $.head = document.head

  $.body = document.body

  //buildSugar renamed HtmlSugar
  $.HS = function (c) {
    function f(a, b) {
      c.push([])
      return d(a, b)
    }
    function d(a, b) {
      b = "" + (b || "")
      a && e("<", a, ">")
      b && e(b)
      a && e("</", a.split(" ")[0], ">")
      return d
    }
    d.toString = function () {
      return c.pop().join("")
    }

    function e() {
      c[c.length - 1].push(c.join.call(arguments, ""))
    }
    return f
  }([])

  //Always will replace tinyDOM
  root['tinyDOM'] = $
  if (!root['$']) root['$'] = $
})(this);
