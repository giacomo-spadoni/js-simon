const section = document.getElementById('section')
const numbers = []

for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100) + 1
    numbers.push(number)
    const newDiv = document.createElement('div')
    newDiv.textContent = numbers[i]
    section.append(newDiv)
}

