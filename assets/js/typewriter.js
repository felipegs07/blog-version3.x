function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var TypeWriter=function(){function n(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:3e3;_classCallCheck(this,n),this.txtElement=t,this.words=e,this.txt="",this.wordIndex=0,this.wait=parseInt(i,10),this.type(),this.isDeleting=!1}return _createClass(n,[{key:"type",value:function(){var t=this,e=this.wordIndex%this.words.length,i=this.words[e];this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),this.txtElement.innerHTML="".concat(this.txt,"<span></span>");var n=200;this.isDeleting&&(n/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,n=500):(n=this.wait,this.isDeleting=!0),setTimeout(function(){return t.type()},n)}}]),n}();function init(){var t=document.querySelector(".intro__title"),e=JSON.parse(t.getAttribute("data-words")),i=t.getAttribute("data-wait");new TypeWriter(t,e,i)}document.addEventListener("DOMContentLoaded",init);