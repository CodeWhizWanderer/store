import{n as a,o as e,c as s,a as t,w as d,F as c,r as l,i,e as o,b as r,d as p,t as u,f as m}from"./index-f54e5077.js";import{h as A}from"./head.9b358ed5.js";import{p as f}from"./data.63bf8fcf.js";import{_ as n}from"./star.fbfb97e4.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./Search.4313868b.js";const w=h({components:{head:A},data:()=>({productsList:[]}),mounted(){this.getProductData()},methods:{getProductData(){const a=f.productLists.filter((a=>a.collect)).map((a=>({pid:a.pid,name:a.name,image:a.image,price:a.price,score:a.score})));this.productsList=a},goDetail(e){a({url:"/pages/detail/detail?pid="+encodeURIComponent(e)})}}},[["render",function(a,A,f,h,w,I){const S=l("head"),x=i,C=m;return e(),s(c,null,[t(S),t(x,{class:"favorite-container"},{default:d((()=>[t(x,{class:"title"},{default:d((()=>[o(" 收藏列表 ")])),_:1}),t(x,{class:"product-list"},{default:d((()=>[(e(!0),s(c,null,r(w.productsList,((a,s)=>(e(),p(x,{class:"product",onClick:e=>I.goDetail(a.pid),key:s},{default:d((()=>[t(x,{class:"product-img"},{default:d((()=>[t(C,{src:a.image,mode:"aspectFit"},null,8,["src"])])),_:2},1024),t(x,{class:"product-detail"},{default:d((()=>[t(x,{class:"product-detail-name"},{default:d((()=>[t(x,{class:"product-name"},{default:d((()=>[o(u(a.name),1)])),_:2},1024),t(x,{class:"product-collect"},{default:d((()=>[t(C,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABMCAYAAAAx3tSzAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALsSURBVHic7Zy/TttQFId/xzClSxQZ5A1ThQo6ZcIjzsZLVKI7eQbIM6QvUPESbDhjmJiaqqmaZItECix4PR2wU+eC/+baJFf3m+zrm5vz6ZxrJZKPCTmxm4euYRguADDzSTDs5l2nAF70hJm7ADD5/dN7a3IclGXSx0+fLwM5N8/iFeIxczeLfKJwIHohLawKIKLun18/LmOvvzW4iaICsRnfEgcUkAUAm4jOGuYuPf6996IXljKsiOwSzNyOZnohbDcPXSK6eZeoSmY8Gi48Fwf7B0c3yHEX7rTmAIBj6xkA4Fi+rPheMZjVFse3sw+4ndWWxtKI3sgIyF7KoWSndZ8v4pIYzGr4dreTST6U3gaWfkC8iWP5uDqdSgpTHo7lwzmdYjCr4cv1XqbPGHbz0EVKKZ+vSUbjcCx/UX1xhBW8VW+YNhGdxU28Op2Wuj9l8RIj4TahvOsNs28QUezedSx/I2RD0u4thmG4RtKE4w2SDUlLUIrws9RgqiApScx8YmB9/wGVQmKGN2n/hqRVZaKwimhh1dHCqqOFVUcLq44WVh0trDpaWHW0sOpoYdXRwqqjhVVHC6uOFlYdLaw6Wlh1tLDqaGHV0cKq8y7CvYxPwJbBdpVf1rvbQe/ODM5MOJaP89Z9pY9HVSK8LPqfwayGwfVepeKlCseJilQpXopwVlGRKsSlChcVFSlTXIqwLFGRMsRXEi5LVESmeCHhVUWJqFukeVOGeC5hGaLRRsigOewCFYpnEpYtGhK0yHlVitP+wRHHXey05qWIxlFUPMSxfBxbflLMXqJwUfKKiqwqnoBHeXsOk1hVVES2ODO3DSLqr7oQEXXHoyHJlAVe9vh4NGwzcxvCOwCKQgBQtKxlZzSNFTPujUfD9hYANMxdyrNIkNG22H1dNk8P88nTw/x7vWH2icgGYGf9LDN/fXqYT3I1TFed0TSyZjzaJf7qpQfCKyy8cI+vk6hI0CGLiLwXnPfXOW6NRgL/APtndwTOGi+rAAAAAElFTkSuQmCC",mode:"widthFix"})])),_:1})])),_:2},1024),t(x,{class:"product-detail-price"},{default:d((()=>[o(" $"+u(a.price),1)])),_:2},1024),t(x,{class:"product-detail-score"},{default:d((()=>[t(C,{src:n,mode:"widthFix"}),o(u(a.score),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})],64)}],["__scopeId","data-v-a1397d77"]]);export{w as default};
