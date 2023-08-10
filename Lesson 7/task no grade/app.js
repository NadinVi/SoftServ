const dinoQuadro = document.getElementById("dino_quadro");
const dinoTank = document.getElementById("dino_tank");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dinoQuadro.classList != "jump") {
        dinoQuadro.classList.add("jump")
    }
    setTimeout( function() {
        dinoQuadro.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let dinoQuadroTop = parseInt(window.getComputedStyle(dinoQuadro).getPropertyValue("top"));
    let dinoTankLeft = parseInt(window.getComputedStyle(dinoTank).getPropertyValue("left"));
        if(dinoTankLeft < 50 && dinoTankLeft > 0 && dinoQuadroTop >= 130) {
            console.log("Collision detected!");
            alert("GAME OVER!")
        }
}, 100);

