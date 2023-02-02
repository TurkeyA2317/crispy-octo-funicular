var l = document.URL;

function shareFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${l}`)
}

function shareTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=${l}`)
}

function shareLinkedin() {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${l}`)
}

function shareTelegram() {
    window.open(`https://t.me/share?url=${l}&text=Check%20out!`)
}

function shareBlogger() {
    window.open(`https://www.blogger.com/blog-this.g?u=${l}&n=Crispy%20Octo%20Funicular&t=Share%20with%20World!`)
}