const getRandomInt = (start, end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = document.querySelectorAll(".lottery-number-generator__contents__content__generator__content__number")
const button = document.querySelector(".lottery-number-generator__contents__content__generator__button")

numbers.forEach(num => {
    const h1 = document.createElement("h1")
    h1.innerText = "0";
    num.appendChild(h1)
})

button.onclick = () => {
    numbers.forEach((number) => {
        number.removeChild(number.children[0])

        const h1 = document.createElement("h1")

        const randomInt = getRandomInt(1, 99)

        if (randomInt < 10) {
            h1.innerText = "0" + randomInt
        } else {
            h1.innerText = randomInt
        }

        // randomInt < 10 ? h1.innerText = "0" + randomInt : h1.innerText = randomInt

        number.appendChild(h1)
    })
}


// const generateNum = (container) => {
//     container.innerHTML = '';
//
//     const h1 = document.createElement("h1");
//     const random = getRandomInt(1, 99);
//
//
//     const limitedRandom = Math.min(random, 99);
//     h1.innerText = limitedRandom < 10 ? `0${limitedRandom}` : `${limitedRandom}`;
//     container.appendChild(h1);
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//     for (let i = 1; i <= 6; i++) {
//         const containerSelector = `.lottery-number-generator__contents__content__generator__content__number${i}`;
//         const numContainer = document.querySelector(containerSelector);
//
//         // Добавляем обработчик события 'click' для каждого контейнера
//         numContainer.addEventListener('click', function () {
//             generateNum(numContainer);
//         });
//     }
//
//     const generateButton = document.querySelector('.lottery-number-generator__contents__content__generator__button');
//
//     generateButton.addEventListener('click', function () {
//         for (let i = 1; i <= 6; i++) {
//             const containerSelector = `.lottery-number-generator__contents__content__generator__content__number${i}`;
//             const numContainer = document.querySelector(containerSelector);
//             generateNum(numContainer);
//         }
//         generateButton.document.style(onclick, )
//     });
// });
