(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{207:function(t,e,r){"use strict";r.r(e);r(85),r(55);var o=r(179),s=r.n(o),n={props:["category"],computed:{properties:function(){var t=this;return s.a.filter(function(e){return e.category===t.category})},colors:function(){return this.properties.every(function(t){return"color"===t.type})}}},c=r(0),a=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"properties-table"},[r("thead",[r("tr",[t.colors?r("th"):t._e(),r("th",[t._v("Property Name")]),r("th",[t._v("Description")])])]),r("tbody",t._l(t.properties,function(e){return r("tr",[t.colors?r("td",[r("span",{staticClass:"color-swatch",style:{backgroundColor:e.default}})]):t._e(),r("td",{staticClass:"name"},[r("code",[t._v(t._s(e.name))])]),r("td",{staticClass:"description"},[t._v(t._s(e.description))])])}))])},[],!1,null,null,null);e.default=a.exports}}]);