disintegrate.init()

document.getElementById('img1').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img2').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img3').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img4').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img5').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img6').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img7').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
})

document.getElementById('img8').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)

    e.target.remove()
    document.getElementById("garbage").style.display = "block";
    document.getElementById("heading").style.display = "none";
    document.body.style.backgroundColor = "#000"
    var audio = new Audio("theme.mp3");
    audio.play();

})

document.getElementById('snap').addEventListener('click', e => {


    var x_1 = document.querySelectorAll(".img");

    for (var i = 0; i < 8; i++) {
        const disObj = disintegrate.getDisObj(x_1[i])
        disintegrate.createSimultaneousParticles(disObj)
    }
    for (var i = 0; i < 8; i++) {


        x_1[i].remove()
    }

    document.getElementById("garbage").style.display = "block";
    document.getElementById("heading").style.display = "none";
    document.body.style.backgroundColor = "#000"
    var audio = new Audio("theme.mp3");
    audio.play();



});


const thanosSnap = function() {
    this.name = 'ThanosSnap'
    this.animationDuration = 2000
    this.size = 4
    this.speedX = Math.random()
    this.speedY = Math.random() * -1
    this.first = true
    this.draw = (ctx, percentComplete) => {
        if (this.first) {
            this.startX += (Math.random() - 2) * 50
            this.startY += (Math.random() - 2) * 50
            this.first = false
        }
        ctx.beginPath()
        ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
        const r = this.rgbArray[0]
        const g = this.rgbArray[1]
        const b = this.rgbArray[2]
        const a = 1 - percentComplete
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        ctx.fill()
        this.speedX *= 1.50
        this.speedY *= 1.50
        this.size *= 0.95
        this.startX += this.speedX
        this.startY += this.speedY
    }
}

disintegrate.addParticleType(thanosSnap);