const cardArray = [
    {
        name: 'Flamingo',
        img: 'Animals/Flami.png'
    },
    {
        name: 'Dolphin',
        img: 'Animals/Delfi.png'
    },
    {
        name: 'Fox',
        img: 'Animals/Fox.png'
    },
    {
        name: 'Panda',
        img: 'Animals/Panda.png'
    },
    {
        name: 'Tiger',
        img: 'Animals/Tigre.png'
    },
    {
        name: 'Fish',
        img: 'Animals/Vuokko.png'
    },
    {
        name: 'Panther',
        img: 'Animals/Panther.png'
    },
    {
        name: 'Seal',
        img: 'Animals/seal.png'
    },
    {
        name: 'Flamingo',
        img: 'Animals/Flami.png'
    },
    {
        name: 'Dolphin',
        img: 'Animals/Delfi.png'
    },
    {
        name: 'Fox',
        img: 'Animals/Fox.png'
    },
    {
        name: 'Panda',
        img: 'Animals/Panda.png'
    },
    {
        name: 'Tiger',
        img: 'Animals/Tigre.png'
    },
    {
        name: 'Fish',
        img: 'Animals/Vuokko.png'
    },
    {
        name: 'Panther',
        img: 'Animals/Panther.png'
    },
    {
        name: 'Seal',
        img: 'Animals/seal.png'
    }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const alertDisplay = document.querySelector('#alert')
const resultDisplay = document.querySelector('#result')
let chosenCards = []
let chosenCardId = []
let cardsMatch = []

function createCardBoard()
{
    for (let i = 0; i < 16; i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src', 'Animals/LeoPattern.png')
        card.setAttribute('data-i', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createCardBoard()

function checkMatch()
{
    const cards = document.querySelectorAll('img')
    const optionOneId = chosenCardId[0]
    const optionTwoid = chosenCardId[1]
    if (optionTwoid == optionOneId)
    {
        cards[optionOneId].setAttribute('src', 'Animals/LeoPattern.png')
        cards[optionTwoid].setAttribute('src', 'Animals/LeoPattern.png')
        alertDisplay.innerHTML = 'You have clicked the same image'
    }
    if (chosenCards[0] == chosenCards[1])
    {
        alertDisplay.innerHTML = 'You found Match!'
        cards[optionOneId].setAttribute('src', 'Animals/WhiteCard.png')
        cards[optionTwoid].setAttribute('src', 'Animals/WhiteCard.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoid].removeEventListener('click', flipCard)
        cardsMatch.push(chosenCards)

    }
    else
    {
        cards[optionOneId].setAttribute('src', 'Animals/LeoPattern.png')
        cards[optionTwoid].setAttribute('src', 'Animals/LeoPattern.png')
        alertDisplay.innerHTML = 'Sorry try again!'
    }
    resultDisplay.textContent = cardsMatch.length
    chosenCards = []
    chosenCardId = []

    if (cardsMatch.length * 2 == cardArray.length)
    {
        alertDisplay.innerHTML = 'Congratulations you found them all!'
        cards[optionOneId].setAttribute('src', 'Animals/WhiteCard.png')
        cards[optionTwoid].setAttribute('src', 'Animals/WhiteCard.png')
    }



}

function flipCard()
{
    const cardId = this.getAttribute('data-i')
    chosenCards.push(cardArray[cardId].name)
    chosenCardId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (chosenCards.length === 2)
    {
        setTimeout(checkMatch, 500)
    }
}