var cls = document.querySelectorAll('link[rel="modulepreload"]');
for(var i = 0; i < cls.length; i++) {
   cls[i].removeAttribute('rel');
}