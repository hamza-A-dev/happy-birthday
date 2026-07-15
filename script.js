function setAppHeight() {
    document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
    );
}

setAppHeight();

window.addEventListener("resize", setAppHeight);

// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

            showHero();

            setTimeout(() => {

                startTyping();

            }, 900);

            // startTyping(); // 👈 Loader khatam hone ke baad typing start

        }, 800);

    }, 2500);

});


// ==========================
// BUTTON CLICK
// ==========================

const celebrateBtn = document.getElementById("celebrateBtn");



celebrateBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        setTimeout(() => {
            music.pause();
        }, 150000);

    }

    firework(window.innerWidth / 2, window.innerHeight / 2);

    firework(window.innerWidth - 250, 220);

    firework(250, 200);

    firework(window.innerWidth / 2, 150);
});


// ==========================
// FLOATING STARS
// ==========================

for (let i = 0; i < 60; i++) {

    const star = document.createElement("span");

    star.classList.add("small-star");

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.animationDuration = (2 + Math.random() * 5) + "s";

    document.body.appendChild(star);

}

// =============================
// COUNTDOWN
// =============================

const targetDate = new Date("July 16, 2026 12:00:00:AM").getTime();
console.log(new Date(targetDate));
let birthdayStarted = false;

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    // 🎉 Countdown Finished
    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        if (!birthdayStarted) {

            birthdayStarted = true;

            birthdayMode();

        }

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

}, 1000);


// =============================
// MUSIC
// =============================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

}

// =====================
// AOS
// =====================

AOS.init({

    duration: 1200,

    once: false

});

// ==========================
// BLOW CANDLES
// ==========================

const blowBtn = document.getElementById("blowBtn");

const candles = document.querySelectorAll(".candle");

blowBtn.onclick = () => {

    candles.forEach(candle => {

        candle.classList.add("flameOff");

    });

    blowBtn.innerHTML = "🎉 Wish Made";

    confetti();

    confetti({

        particleCount: 250,

        spread: 180,

        origin: { y: .6 }

    });

    showBirthdayPopup();

    birthdaySong.play();
    setTimeout(() => {
        birthdaySong.pause();
    }, 10000);
}

// ==========================
// CONFETTI
// ==========================

function confetti() {

    const colors = ["red", "yellow", "cyan", "lime", "orange", "pink", "white"];

    for (let i = 0; i < 40; i++) {

        let paper = document.createElement("div");

        paper.className = "paper";

        paper.style.left = Math.random() * 100 + "vw";

        paper.style.background = colors[Math.floor(Math.random() * colors.length)];

        paper.style.animationDuration = (2 + Math.random() * 2) + "s";

        document.getElementById("confetti").appendChild(paper);

        setTimeout(() => {

            paper.remove();

        }, 3500);

    }

}

// ==========================
// PHOTO SLIDESHOW
// ==========================

const images = [

    "assets/images/img1_compressed.jpg",

    "assets/images/img2_compressed.jpg",

    "assets/images/img3_compressed.jpg",

    "assets/images/img4_compressed.jpg",

    "assets/images/img5_compressed.jpg",

    "assets/images/img6_compressed.jpg",

    "assets/images/img7_compressed.jpg"

];

let current = 0;

const slide = document.getElementById("slideImage");

setInterval(() => {

    current++;

    if (current >= images.length) {

        current = 0;

    }

    slide.src = images[current];

}, 2500);

// ==========================
// PHOTO MODAL
// ==========================

const cards = document.querySelectorAll(".card img");

const modal = document.getElementById("photoModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.getElementById("closeModal");

cards.forEach(img => {

    img.addEventListener("click", () => {

        cameraFlash();

        modal.style.display = "flex";

        modalImage.src = img.src;

    });

});

if (closeModal) {

    closeModal.onclick = () => {

        modal.style.display = "none";

    };

}

if (modal) {

    modal.onclick = () => {

        modal.style.display = "none";

    };

}

// Slideshow image click

const slideImage = document.getElementById("slideImage");

slideImage.addEventListener("click", () => {

    modal.style.display = "flex";

    modalImage.src = slideImage.src;

});

// ==========================
// FLOATING BALLOONS
// ==========================

const balloonBox = document.getElementById("balloons");
console.log(balloonBox);

const balloonColors = [
    "#ff4d6d",
    "#ffd93d",
    "#6bcBef",
    "#b517ff",
    "#4ade80",
    "#ffffff"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animationDuration =
        (14 + Math.random() * 6) + "s";

    balloonBox.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 10000);

}

let balloonInterval;

function startBalloons() {

    balloonInterval = setInterval(createBalloon, 1800);
    setTimeout(() => {
        balloonBox.remove();
    }, 55000);
}
// ==========================
// CURSOR GLOW
// ==========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ==========================
// TYPING EFFECT
// ==========================

const text = "Happy Birthday To Me 🎂";

const typing = document.getElementById("typing");

let index = 0;

function startTyping() {

    typing.textContent = "";
    index = 0;

    function typeText() {

        if (index < text.length) {

            typing.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 160);

        } else {

            // Glow Effect
            // typing.style.animation = "heroGlow 8s infinite";

            // Button Animation
            const btn = document.getElementById("celebrateBtn");

            if (btn) {

                btn.style.opacity = "0";
                btn.style.transform = "translateY(20px)";
                btn.style.transition = ".8s";

                setTimeout(() => {

                    btn.style.opacity = "1";
                    btn.style.transform = "translateY(0)";

                }, 300);

            }

            // Scroll Indicator
            const indicator = document.querySelector(".scroll-indicator");

            if (indicator) {

                setTimeout(() => {

                    indicator.classList.add("show");

                }, 500);

            }

        }

    }

    typeText();

}

function showHero() {

    const hero = document.querySelector(".hero-content");

    hero.classList.add("show");

}

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    heroImage.classList.add("animate");

}

// ==========================
// REAL FIREWORKS
// ==========================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const particles = [];

function firework(x, y) {

    for (let i = 0; i < 40; i++) {

        particles.push({

            x: x,

            y: y,

            dx: (Math.random() - 0.5) * 10,

            dy: (Math.random() - 0.5) * 10,

            life: 45,

            color: `hsl(${Math.random() * 360},100%,60%)`

        });

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        ctx.beginPath();

        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);

        ctx.fillStyle = p.color;

        ctx.fill();

        p.x += p.dx;

        p.y += p.dy;

        p.dy += 0.03;

        p.life--;

        if (p.life <= 0) {

            particles.splice(index, 1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

// ==========================
// SPECIAL BIRTHDAY MODE
// ==========================

// ======================================================
// BIRTHDAY MODE V4 (CINEMATIC)
// ======================================================

// ======================================================
// BIRTHDAY MODE V4 (CINEMATIC)
// ======================================================

function birthdayMode() {

    console.log("🎂 Birthday Mode Started");
    const intro = document.getElementById("rocketIntro");
    const rocket = document.getElementById("rocket");
    const boom = document.getElementById("boomSound");
    const birthdaySong = document.getElementById("birthdaySong");
    startBalloons();


    // ==========================
    // ROCKET INTRO
    // ==========================

    intro.style.display = "flex";

    rocket.classList.remove("launch");
    void rocket.offsetWidth; // Restart animation
    rocket.classList.add("launch");

    // Rocket Sound
    boom.currentTime = 0;

    boom.play()
    // .then(() => {
    //     console.log("✅ Boom Sound Started");
    // })
    // .catch((err) => {
    //     console.error("❌ Boom Error:", err);
    // });
    // ==========================
    // AFTER 4 SECONDS (BOOM)
    // ==========================

    setTimeout(() => {

        // Hide Rocket Screen
        intro.style.display = "none";

        // ==========================
        // FLASH EFFECT
        // ==========================

        const flash = document.createElement("div");

        flash.style.position = "fixed";
        flash.style.top = "0";
        flash.style.left = "0";
        flash.style.width = "100%";
        flash.style.height = "100%";
        flash.style.background = "white";
        flash.style.opacity = "1";
        flash.style.pointerEvents = "none";
        flash.style.zIndex = "999999";
        flash.style.transition = ".6s";

        document.body.appendChild(flash);

        setTimeout(() => {

            flash.style.opacity = "0";

            setTimeout(() => {

                flash.remove();

            }, 600);

        }, 80);

        // ==========================
        // FIREWORKS
        // ==========================

        const positions = [

            [window.innerWidth / 2, 180],

            [220, 220],

            [window.innerWidth - 220, 220]

        ];

        positions.forEach((pos, index) => {

            setTimeout(() => {

                firework(pos[0], pos[1]);

            }, index * 300);

        });

        // ==========================
        // CONFETTI
        // ==========================

        if (typeof confetti === "function") {

            confetti();

        }

        if (birthdaySong) {

            birthdaySong.currentTime = 0;

            birthdaySong.play()
            setTimeout(() => {

                birthdaySong.pause();
                birthdaySong.currentTime = 0;

            }, 30000);

        }

        // ==========================
        // MESSAGE
        // ==========================

        if (msg) {

            msg.classList.add("show");

            setTimeout(() => {

                msg.classList.remove("show");

            }, 7000);

        }

    }, 4000);

    setTimeout(() => {

        showGiftBox();

    }, 14000);

}

//==========================================
// PREMIUM GIFT BOX
//==========================================

const giftOverlay = document.getElementById("giftOverlay");
const giftBox = document.getElementById("giftBox");
const giftLid = document.querySelector(".giftLid");
const piano = document.getElementById("piano");

let giftOpened = false;

function showGiftBox() {

    giftOverlay.style.display = "flex";

    setTimeout(() => {

        document
            .querySelector(".spotlight")
            .classList.add("show");

    }, 400);

    setTimeout(() => {

        giftBox.classList.add("show");

    }, 900);

}

giftBox.addEventListener("click", () => {

    if (giftOpened) return;

    giftOpened = true;

    // 🎀 Ribbon + Lid Open Animation
    giftBox.classList.add("open");

    // Glow Effect
    document.querySelector(".giftGlow").style.animation = "none";
    document.querySelector(".giftGlow").style.transform = "translate(-50%,-50%) scale(2)";
    document.querySelector(".giftGlow").style.opacity = "1";

    // 0.8 sec baad sab effects start honge
    setTimeout(() => {

        // Golden Light
        const light = document.createElement("div");

        light.id = "giftLight";

        giftOverlay.appendChild(light);

        // Fireworks
        firework(window.innerWidth / 2, 220);

        setTimeout(() => {

            firework(250, 250);

        }, 300);

        setTimeout(() => {

            firework(window.innerWidth - 250, 250);

        }, 600);

        // Confetti
        if (typeof confetti === "function") {

            confetti();

        }

        // Letter Show
        setTimeout(() => {

            showLetter();

        }, 1800);

    }, 800);

});

//==================================
// LETTER SYSTEM
//==================================

function showLetter() {

    const letter = document.getElementById("birthdayLetter");
    const text = document.getElementById("letterText");
    const skip = document.getElementById("skipTyping");
    const popupContinueBtn = document.getElementById("popupContinueBtn");
    letter.classList.add("show");

    // 🎹 Piano Start

    if (piano) {

        piano.currentTime = 0;

        piano.volume = 0.25;

        piano.play().catch(() => { });

    }

    createFlyingPhotos();

    continueBtn.style.display = "none";
    skip.style.display = "inline-block";

    const message =
        `Happy Birthday! ❤️

Wishing you endless happiness, beautiful memories,
success, laughter and a life filled with love.

May every dream you have become reality.

Have the most wonderful birthday ever. 🎂✨`;

    text.innerHTML = "";

    let i = 0;
    let finished = false;

    function type() {

        if (finished) return;

        if (i < message.length) {

            text.innerHTML += message.charAt(i);

            i++;

            setTimeout(type, 35);

        } else {

            finished = true;

            skip.style.display = "none";

            continueBtn.style.display = "inline-block";

        }

    }

    type();

    skip.onclick = () => {

        finished = true;

        text.innerHTML = message;

        skip.style.display = "none";

        continueBtn.style.display = "inline-block";

    };

}

document.getElementById("continueBtn").onclick = () => {

    // 🎹 Stop Piano

    if (piano) {

        piano.pause();

        piano.currentTime = 0;

    }

    document.getElementById("birthdayLetter").classList.remove("show");

    document.getElementById("giftOverlay").style.display = "none";

};

//==================================
// FLYING PHOTOS
//==================================

function createFlyingPhotos() {

    const images = [

        "assets/images/img1_compressed.jpg",
        "assets/images/img2_compressed.jpg",
        "assets/images/img3_compressed.jpg",
        "assets/images/img4_compressed.jpg",
        "assets/images/img5_compressed.jpg",
        "assets/images/img6_compressed.jpg"

    ];

    images.forEach((src, index) => {

        const img = document.createElement("img");

        img.src = src;

        const size = 152;

        img.className = "flyingPhoto";

        const positions = [10, 23, 36, 49, 62, 75];

        img.style.left = positions[index] + "%";

        img.style.animationDelay = (index * .25) + "s";

        document.body.appendChild(img);

        setTimeout(() => {

            img.remove();

        }, 8000);

    });

}

function cameraFlash() {

    const flash = document.createElement("div");

    flash.style.position = "fixed";

    flash.style.inset = "0";

    flash.style.background = "white";

    flash.style.opacity = ".95";

    flash.style.pointerEvents = "none";

    flash.style.zIndex = "999999";

    flash.style.transition = ".25s";

    document.body.appendChild(flash);

    setTimeout(() => {

        flash.style.opacity = "0";

        setTimeout(() => {

            flash.remove();

        }, 250);

    }, 50);

}

const birthdayPopup = document.getElementById("birthdayPopup");

const continueBtn = document.getElementById("continueBtn");

function showBirthdayPopup() {

    birthdayPopup.classList.add("show");

}

popupContinueBtn.onclick = () => {

    birthdayPopup.classList.remove("show");

}

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

document.addEventListener("click", (e) => {

    const ripple = document.createElement("div");

    ripple.className = "ripple";

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 700);

});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    }

    else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const shootingStars = document.getElementById("shootingStars");

function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "%";

    star.style.left = (60 + Math.random() * 40) + "%";

    shootingStars.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(createShootingStar, 5000);

const fireflies = document.getElementById("fireflies");

for (let i = 0; i < 25; i++) {

    const firefly = document.createElement("span");

    firefly.className = "firefly";

    firefly.style.left = Math.random() * 100 + "%";

    firefly.style.top = Math.random() * 100 + "%";

    firefly.style.animationDuration =

        (8 + Math.random() * 8) + "s," +

        (1 + Math.random() * 2) + "s";

    firefly.style.animationDelay =

        Math.random() * 5 + "s";

    firefly.style.opacity = Math.random();

    fireflies.appendChild(firefly);

}
