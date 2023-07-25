import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

document.querySelector("img").addEventListener("dblclick", (e) => {
  e.target.style.transform = "scale(1.3)";
});

const p = document.querySelectorAll("p");
const h2 = document.querySelectorAll("h2");

for (let i = 0; i < p.length; i++) {
  p[i].style.color = "white";
  h2[i].addEventListener("click", (e) => {
    p[i].style.color = "black";
  });
}
