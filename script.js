const counters = document.querySelectorAll('.target');
const speed = 200;

counters.forEach(counter => {

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCounter, 100);
        } else {
            count.innerText = target;
        }

    }
    updateCounter()

})
