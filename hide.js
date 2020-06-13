// ==UserScript==
// @name        Hide Reddit Username
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.0
// @author      kcheng0222
// @description 6/13/2020, 2:54:31 PM
// ==/UserScript==

(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://pastebin.com/raw/2sAn8ZJj";
  
    window.addEventListener('load', function() {
      document.body.appendChild( scriptElement );
    }, false);
  
})();
