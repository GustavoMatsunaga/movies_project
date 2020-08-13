var modal = document.querySelector(".modal-overlay")
var trailers = document.querySelectorAll(".trailer");
var xClose = document.querySelector(".close-image")
var iframe = document.querySelector("iframe");

trailers.forEach(trailer => {
    trailer.addEventListener("click", () => {
        const trailerId = trailer.getAttribute("id")
        modal.classList.add("active");
        iframe.src = `https://www.youtube.com/embed/${trailerId}`
    })
});

xClose.addEventListener("click", () => {
    modal.classList.remove("active");
    iframe.src = ""
})
