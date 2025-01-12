function cb(ie) {
    const overlay = document.getElementById('zaza')

    if (ie) {
        console.log(`url(${ie.src})`)
        overlay.style.backgroundImage = `url(${ie.src})`
        overlay.style.opacity = '0.4'
    }
    else {
        overlay.style.opacity = '0'

    }
}