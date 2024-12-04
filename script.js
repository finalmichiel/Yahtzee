console.log('Hello World')

const button = document.getElementById('button1');
const dieAmount = document.getElementsByClassName('dieAmount')
const tableDie = document.getElementById('tableDie');
const tableDie2 = document.getElementById('tableDie2');
const totalDieSum = document.getElementById('totalDieSum');
const totalDieSum2 = document.getElementById('totalDieSum2');
const totalScore = document.getElementById('totalScore');
const threeOfAKind = document.getElementById('threeOfAKind');
const pair = document.getElementById('pair');
const fourOfAKind = document.getElementById('fourOfAKind');
const fullHouse = document.getElementById('fullHouse')
const yahtzee = document.getElementById('yahtzee')
const kleineStraat = document.getElementById('kleineStraat')
const groteStraat = document.getElementById('groteStraat')
const totalBottom = document.getElementById('totalBottom')
const scoreAmount = document.getElementsByClassName('scoreAmount')




let diceTray = [0];

let count = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
}

const rollDice = () => {

    diceTray = [];

    for (let index = 0; index < 5; index++) {

        let diceRolled = Math.floor(Math.random() * 6 + 1);

        diceTray.push(diceRolled);

    }
    //rolls dice with 6 sides a number of times, in this instance 5 times


    for (const key in count) {
        count[key] = diceTray.filter(die => die == key).length;

        dieAmount[key - 1].innerHTML = count[key];
    }
    // places the rolled die in an array with which it count the amounts rolled




    totalDieSum.innerHTML = sumOfAllDice();
    totalDieSum2.innerHTML = sumOfAllDice();
    // shows the sum of the individual die in the correct cell



    threeOfAKind.innerHTML = (xOfAKind(3) && !xOfAKind(2)) ? sumOfAllDice() : 0;
    fourOfAKind.innerHTML = (xOfAKind(4) && !xOfAKind(3) && !xOfAKind(2)) ? sumOfAllDice() : 0;
    fullHouse.innerHTML = (xOfAKind(3) && xOfAKind(2)) ? 25 : 0;
    yahtzee.innerHTML = (xOfAKind(5) && !xOfAKind(4)) ? 50 : 0;
    kleineStraat.innerHTML = checkStreet(4) ? !checkStreet(5) ? 30 : 0 : 0;
    groteStraat.innerHTML = checkStreet(5) ? 40 : 0;
    pair.innerHTML = xOfAKind(2) ? "een paar!" : "geen paar";
    // prints scores in the corresponding cells


    function sumOfAllScores() {
        const sumOfAllScoresArray = Array.from(scoreAmount).map(item => {
            let score = item.innerHTML * 1;
            return isNaN(score) ? 0 : score;  // Handle non-numeric values
        });

        let totalBottomCalc = ((total, value) => total + value);




        let sum = sumOfAllScoresArray.reduce(totalBottomCalc, 0);



        totalBottom.innerHTML = sum;
        return sum;

    }


    function sumOfAllDice() {
        return diceTray.reduce((total, value) => total + value, 0);
    }
    // this will print the total into the correct cell by reducing the array to a single number by adding second value to the first one until there is only one left.

    function totalScoreCalc() {
        let sumOfBothScores = (sumOfAllDice() + sumOfAllScores());

        totalScore.innerHTML = sumOfBothScores;
        return sumOfBothScores;


    }

    totalScoreCalc();


}



function xOfAKind(value) {
    for (const key in count) {
        if (count[key] === value) return true;
    }
    return false;
}
// this function checks if the values in count are fully the same number by checking if the later on specified value is returned by one of the count, for example 1 : 2 would return a true for xOfAKind(2).



function checkStreet(value) {
    let counter = 0;

    // Loop through the possible dice values (1 to 6)
    for (let i = 1; i <= 6; i++) {
        // If the count for the current dice value is greater than 0, increment the counter
        if (count[i] > 0) {
            counter++;
        } else {
            counter = 0;  // Reset the counter if there is a break in the sequence
        }


        if (counter === value) {
            return true;
        } // If the counter reaches the required street length (4 or 5), return true
    }

    return false;  // Return false if no street is found
}
// this function loops through the dice values and checks if there is a sequence with out breaks for either 4 or 5 in this program. 





button.addEventListener('click', rollDice) //will check for a click of the button element to start rollDice and all related functions.
