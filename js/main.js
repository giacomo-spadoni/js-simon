const section = document.getElementById('section')
const numbers = []
const playerNumbers = []

for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100) + 1
    numbers.push(number)
    const newDiv = document.createElement('div')
    newDiv.textContent = numbers[i]
    section.append(newDiv)
}

setTimeout(function () {
    section.classList.add('hidden')
}, 4 * 1000)

setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        let playerNumber = prompt('inserisci il tuo numero')
        playerNumbers.push(playerNumber)
    }
    console.log(playerNumbers)
    for (let i = 0; i < 5; i++) {
        const element = parseInt(playerNumbers[i]); 43
        if (numbers.includes(element)) {
            alert('hai beccato il numero ' + element)
        }
    }
}, 3 * 1000)

