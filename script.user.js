// ==UserScript==
// @name        Hide Reddit Username
// @namespace   https://github.com/kcheng0222
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.0
// @author      kcheng0222
// @description Userscript that hides username on new reddit.
// @supportURL https://github.com/kcheng0222/reddit-hide-username/issues
// @downloadURL https://github.com/kcheng0222/reddit-hide-username/raw/master/script.user.js
// @updateURL https://github.com/kcheng0222/reddit-hide-username/raw/master/script.user.js
// @homepage https://github.com/kcheng0222/reddit-hide-username
// ==/UserScript==

(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    //scriptElement.src = "https://raw.githubusercontent.com/kcheng0222/reddit-hide-username/master/change.js";
    scriptElement.src = "https://pastebin.com/raw/2sAn8ZJj";
  
    window.addEventListener('load', function() {
      document.body.appendChild( scriptElement );
    }, false);
  
})();
