function sortByString(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return - 1;
    } else {
        return 0;
    }
}

const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
    {
        id: 1,
        name: 'Cristiano',
        surname: 'Ronaldo',
        club: 'Juventus',
    },
    {
        id: 2,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
    {
        id: 3,
        name: 'Karim',
        surname: 'Benzema',
        club: 'Real Madrid',
    },
    {
        id: 4,
        name: 'Maxi',
        surname: 'Gomez',
        club: 'Valencia',
    },
    {
        id: 5,
        name: 'Quincy',
        surname: 'Promes',
        club: 'Spartak',
    },
];

food.sort((a, b) => sortByString(a, b));

players.sort((a, b) => sortByString(a.surname, b.surname));

console.log(food);
console.log(players);
console.log("Hello")