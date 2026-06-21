function toggleMenu() {

    let menu = document.getElementById("sideMenu");

    if (menu.style.right === "0px") {
        menu.style.right = "-280px";
    } else {
        menu.style.right = "0px";
    }
}

function showPage(pageId) {

    document
        .querySelectorAll("#home, .page")
        .forEach(page =>
            page.classList.remove("active")
        );

    document
        .getElementById(pageId)
        .classList.add("active");

    document.getElementById("sideMenu").style.right = "-280px";

    window.scrollTo(0, 0);
}

const bgVideo = document.getElementById("bgVideo");
const blurVideo = document.getElementById("blurVideo");

const videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4"
];

let currentIndex = 0;

function playVideo() {

    bgVideo.src = videos[currentIndex];
    blurVideo.src = videos[currentIndex];

    bgVideo.load();
    blurVideo.load();

    bgVideo.play();
    blurVideo.play();
}

// Start first video
playVideo();

// When current video ends
bgVideo.addEventListener("ended", () => {

    currentIndex = (currentIndex + 1) % videos.length;

    playVideo();

});




