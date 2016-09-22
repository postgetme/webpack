require('expose?$!expose?jQuery!jquery')
require('bootstrap')
require('font-awesome/css/font-awesome.min.css')
require('bootstrap/dist/css/bootstrap.css')

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/*
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?197f3f74517e9c1d6b604d04a5ed5f4d";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
*/
