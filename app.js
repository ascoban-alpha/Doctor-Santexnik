
  const toTop = document.getElementById("toTop");
    window.onscroll = () => {
      toTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('scrollToServices').addEventListener('click', function () {
    document.getElementById('services').scrollIntoView({
      behavior: 'smooth'
    });
  });