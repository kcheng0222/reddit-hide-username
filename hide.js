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
    scriptElement.src = "https://raw.githubusercontent.com/kcheng0222/reddit-hide-username/master/script.js";
  
    window.addEventListener('load', function() {
      document.body.appendChild( scriptElement );
    }, false);
  
})();
