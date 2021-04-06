document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});
/*const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
/* 
scrollTo() {
let element = document.getElementById(«app»),
isSafari = window.safari !== undefined,
is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);

if (isSafari || is_ios) {
document.body.scrollTop = 0;
} else {
element.scrollIntoView({behavior: «smooth», block: «start», inline: «nearest»});
}
}