import "./style/main.scss";
import "./scripts/components/bg-anim";
import "./scripts/layout/navbar";
import "./scripts/pages/landing";
import "./scripts/layout/footer";

var cls = document.querySelectorAll('link[rel="modulepreload"]');
for(var i = 0; i < cls.length; i++) {
   cls[i].removeAttribute('rel');
}