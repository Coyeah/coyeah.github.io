(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{1022:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ec41aaae65d465ff1e5a3ff84a234e9b/e5610/logo.png","srcSet":"/static/ec41aaae65d465ff1e5a3ff84a234e9b/e5610/logo.png 50w,\\n/static/ec41aaae65d465ff1e5a3ff84a234e9b/e9b55/logo.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/ec41aaae65d465ff1e5a3ff84a234e9b/d4bf4/logo.avif 50w,\\n/static/ec41aaae65d465ff1e5a3ff84a234e9b/ee81f/logo.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/ec41aaae65d465ff1e5a3ff84a234e9b/3faea/logo.webp 50w,\\n/static/ec41aaae65d465ff1e5a3ff84a234e9b/6a679/logo.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),n=a(5444),i=a(9285);t.Z=function(){var e,t=null===(e=(0,n.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"bio"},l.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/logo.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1022)}),(null==t?void 0:t.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,t.name),".",l.createElement("br",null),(null==t?void 0:t.summary)||null))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(5444),i=a(9535),r=a(7198),o=a(3751);t.default=function(e){var t,a=e.data,c=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=a.allMarkdownRemark.nodes;return 0===f.length?l.createElement(r.Z,{location:c,title:s},l.createElement(o.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("p",null,"No blog posts found.")):l.createElement(r.Z,{location:c,title:s},l.createElement(o.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3cde2ef29ddf035e87d8.js.map