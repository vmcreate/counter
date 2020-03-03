const counters = document.querySelectorAll('.target');
const speed = 100;

counters.forEach(counter => {

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);

        if (count < target) {

            counter.innerText = count + inc;
            setTimeout(updateCounter, 100);
            counter.style.color = getRandomColor();
        } else {
            count.innerText = target;
        }

    }
    updateCounter()

})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

