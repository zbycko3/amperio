var AdCarouselTracking={getParameterByName:function(e,a){a=a.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)").exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},track:function(e){if(e=decodeURIComponent(e),adC=this.getParameterByName(e,"adCarousel"),""!=adC&&"undefined"!=adC&&null!=adC){var a=adC,r=2592e3;r*=1e3;var t=new Date,n=t.getTime();t.setTime(n+r);r=t.toUTCString();document.cookie="adCarouselTemplateId="+a+"; expires="+r+"; path=/"}}};