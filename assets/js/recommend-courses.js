const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('right-btn');

const options = document.querySelectorAll('.option-section');
const carousels = document.querySelectorAll(".carousel");

const pages = document.querySelectorAll(".circle");

let items = carousels[0].querySelectorAll(".courses-section");
const itemLength = items.length;

let currentOption = 0;
let currentItem = 0;

function showItem(indexItem) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - 2 * indexItem)}%)`;
    });
}

function changePage(index) {
    pages.forEach((page, j) => {
        if (j == index)
            page.style.backgroundColor = `#DEE2E6`;
        else
            page.style.backgroundColor = 'white';
    });
}

function changeOption(index) {
    options.forEach((option, i) => {
        if (i == index)
            options[i].classList.add("selected");
        else
            options[i].classList.remove("selected");
    })
}

function prevItem() {
    currentItem = (currentItem - 1 + itemLength) % itemLength;
    showItem(currentItem);
    changePage(currentItem);
}

function nextItem() {
    currentItem = (currentItem + 1) % itemLength;
    showItem(currentItem);
    changePage(currentItem);
}

// Tự động chuyển đổi các mục sau một khoảng thời gian
const interval = 5000; // Khoảng thời gian giữa các chuyển đổi (3 giây)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextItem, interval);
    changePage(currentItem);
    changeOption(currentOption);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

startAutoPlay();

options.forEach(option => {
    option.addEventListener('click', () => {
        const category = option.getAttribute('data-category');
        carousels.forEach((carousel, i) => {
            if (carousel.getAttribute('data-category') === category) {
                carousel.style.display = 'flex';
                carousel.style.opacity = 1;
                items = carousel.querySelectorAll(".courses-section");
                currentOption = i;
                currentItem = 0;
                stopAutoPlay();
                startAutoPlay();
            } else {
                carousel.style.display = 'none';
                carousel.style.opacity = 0;
            }
        });
    });
});

// Xử lý sự kiện khi nhấn nút chọn trang cần xem
pages.forEach((page, i) => {
    page.addEventListener('click', () => {
        currentItem = i;
        showItem(i);
        changePage(i);
        stopAutoPlay();
        startAutoPlay();
    })
});

// Xử lý sự kiện khi nhấn nút prev và next
prevBtn.addEventListener('click', () => {
    prevItem();
    stopAutoPlay();
    startAutoPlay(); // Bắt đầu tự động chuyển đổi lại sau khi nhấn prev
});

nextBtn.addEventListener('click', () => {
    nextItem();
    stopAutoPlay();
    startAutoPlay(); // Bắt đầu tự động chuyển đổi lại sau khi nhấn next
});