const vid = document.querySelector("#videoBG");
window.addEventListener("scroll", (event) => {
  const opacity =
    (window.innerHeight - window.pageYOffset) / window.innerHeight;
  const scale = (window.innerHeight - window.pageYOffset) / window.innerHeight;

  document.documentElement.style.setProperty("--headerOpacity", opacity);
  document.documentElement.style.setProperty("--headerScale", scale);
});
const smallDevice = window.matchMedia("(max-width: 576px)").matches;
if (smallDevice) {
  const img = document.createElement("img");
  img.src = "2.png";
  img.alt = "";
  document.querySelector("header").appendChild(img);
}
