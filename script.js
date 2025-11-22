const items = document.querySelectorAll(".item");
const nextBtn = document.querySelectorAll(".arrows button")[1];
const prevBtn = document.querySelectorAll(".arrows button")[0];
let currentIndex = 0;

function showCar(index, direction) {

    const current = items[currentIndex];
    const next = items[index];

    // remove classes antigas
    items.forEach(i => {
        i.classList.remove("active", "animate-in", "animate-out");
    });

    // animação de saída
    current.classList.add("animate-out");

    // animação de entrada
    setTimeout(() => {
        next.classList.add("active", "animate-in");
    }, 100); // pequena espera para suavizar

    currentIndex = index;
}

nextBtn.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= items.length) nextIndex = 0;
    showCar(nextIndex, "next");
});

prevBtn.addEventListener("click", () => {
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) nextIndex = items.length - 1;
    showCar(nextIndex, "prev");
});

function showCar(index) {
    const current = items[currentIndex];
    const next = items[index];

    items.forEach(i => {
        i.classList.remove("active", "animate-in");
    });

    // remove animação antiga do carro atual
    current.classList.remove("animate-in");

    // ativa animação de entrada no próximo carro
    next.classList.add("active");
    next.classList.add("animate-in");

    currentIndex = index;
}
