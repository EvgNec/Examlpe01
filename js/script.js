const dom = {
    block: document.querySelector('.cicle-menu'),
    menuBtn: document.querySelector('.cicle-menu__btn')
};

dom.menuBtn.onclick = () => dom.block.classList.toggle('open');