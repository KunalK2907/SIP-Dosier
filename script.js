const bar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (h ? (window.scrollY / h) * 100 : 0) + "%";
});

// Replace the temporary NB badge with the Nirmal Bang logo image.
const logoBox = document.querySelector(".nb-logo");
if (logoBox) {
  logoBox.innerHTML = `
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6999b112909672.56033e60a70e9.jpg"
      alt="Nirmal Bang logo"
      referrerpolicy="no-referrer"
      onerror="this.style.display='none'; document.querySelector('.nb-logo').innerHTML='<span class=\"logo-fallback\">NIRMAL BANG</span>';"
    >`;
  Object.assign(logoBox.style, {
    alignSelf: "flex-end",
    marginTop: "30px",
    width: "100%",
    background: "#ffffff",
    padding: "12px 14px",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "78px"
  });
  const logo = logoBox.querySelector("img");
  if (logo) {
    Object.assign(logo.style, {
      display: "block",
      width: "100%",
      maxWidth: "250px",
      height: "auto",
      objectFit: "contain"
    });
  }
}
