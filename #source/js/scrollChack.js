//---------------------------------scroll bar-----------------------------------    
document.addEventListener("DOMContentLoaded", blockHeight);
window.addEventListener("resize", blockHeight)

function blockHeight() {
    let pageHeight = document.documentElement.clientHeight
    let pageWidth = document.documentElement.clientWidth
    let pageScrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    let contentBlock = document.querySelector(".top__content")
    let contentBlockBottom = document.querySelector(".bottom__content")

    if (pageScrollHeight > pageHeight && pageWidth > 950) {
        contentBlock.classList.add("topContent")
        let topContent = document.querySelector(".topContent")
        let heightB = pageHeight - contentBlockBottom.offsetHeight - 200;

        topContent.style.setProperty('--topContentHeight', heightB + 'px')

    } else {
        contentBlock.classList.remove("topContent")
    }
}