const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
    container.classList.add("hl")
);
left.addEventListener("mouseleave", () =>
    container.classList.remove("hl")
);
right.addEventListener("mouseenter", () =>
    container.classList.add("hr")
);
right.addEventListener("mouseleave", () =>
    container.classList.remove("hr")
);
