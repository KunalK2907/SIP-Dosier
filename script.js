const bar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (h ? (window.scrollY / h) * 100 : 0) + "%";
});