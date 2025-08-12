const links = Array.from(document.querySelectorAll(`.exhibitions__link`))

links.forEach((link) => link.addEventListener(`click`, (evt) => {
  const index = link.href.lastIndexOf(`#`);
    if(index === -1) return;

  evt.preventDefault();

  setTimeout(() => {
    const id = link.href.substring(index);
    const Y = document.querySelector(id).offsetTop + 700;

    window.scrollTo({
      top: Y,
      behavior: 'smooth'
    });
  }, 0)
}));
