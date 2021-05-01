document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'Fries',
            img: 'img/Fries.jpg'
        },
        {
            name: 'Hamburger',
            img: 'img/Hamburger.jpg'
        },
        {
            name: 'ColorfulIceCream',
            img: 'img/ColorfulIceCream.jpg'
        },
        {
            name: 'MexicanPizza',
            img: 'img/MexicanPizza.jpg'
        },
        {
            name: 'milkshake',
            img: 'img/Milkshake.jpg'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'Fries',
            img: 'img/Fries.jpg'
        },
        {
            name: 'Hamburger',
            img: 'img/Hamburger.jpg'
        },
        {
            name: 'ColorfulIceCream',
            img: 'img/ColorfulIceCream.jpg'
        },
        {
            name: 'MexicanPizza',
            img: 'img/MexicanPizza.jpg'
        },
        {
            name: 'milkshake',
            img: 'img/Milkshake.jpg'
        },
        {
            name: 'Hotdog',
            img: 'img/Hotdog.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/Blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/Blank.jpg')
            cards[optionTwoId].setAttribute('src', 'img/Blank.jpg')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Congratulations! You have found a match')
            cards[optionOneId].setAttribute('src', 'img/White.jpg')
            cards[optionTwoId].setAttribute('src', 'img/White.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/Blank.jpg')
            cards[optionTwoId].setAttribute('src', 'img/Blank.jpg')
            alert('Sorry, That did not match try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You Have Mached them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
