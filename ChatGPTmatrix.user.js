// ==UserScript==
// @name         ChatGPT Matrix Style
// @namespace    https://github.com/lvwzhen/ChatGPT-Matrix-Style
// @version      0.1
// @description  Make ChatGPT like the Matrix.
// @author       Agentcobra
// @match        https://chat.openai.com/*
// @resource    ChatGPT-Matrix-Style https://raw.githubusercontent.com/lvwzhen/ChatGPT-Matrix-Style/main/style.css
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("ChatGPT-Matrix-Style"));
})();