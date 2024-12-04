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


    // console.log(count); 
    // prints all values in count to console.
    
    totalDieSum.innerHTML = sumOfAllDice(); 
    totalDieSum2.innerHTML = sumOfAllDice(); 
    // totalScore.innerHTML = totalScoreCalc();
    // shows the sum of the individual die in the correct cell

  

    threeOfAKind.innerHTML = (xOfAKind(3) && !xOfAKind(2)) ? sumOfAllDice() : 0;
    fourOfAKind.innerHTML = (xOfAKind(4) && !xOfAKind(3) && !xOfAKind(2)) ? sumOfAllDice() : 0;
    fullHouse.innerHTML = (xOfAKind(3) && xOfAKind(2)) ? 25 : 0;
    yahtzee.innerHTML = (xOfAKind(5) && !xOfAKind(4)) ? 50 : 0;
    kleineStraat.innerHTML = checkStreet(4) ? !checkStreet(5) ? 30 : 0 : 0;
    groteStraat.innerHTML = checkStreet(5) ? 40 : 0;
    pair.innerHTML = xOfAKind(2) ? "een paar!" : "geen paar";
    // prints scores in the corresponding cells


    // console.log(diceTray)
    // console.log(xOfAKind(2));
    // console.log(xOfAKind(3));
    // console.log(xOfAKind(4));
    // console.log(xOfAKind(5));
    // console.log(xOfAKind(2) && xOfAKind(3));
    // console.log(checkStreet(4));
    // console.log(checkStreet(5));   
    console.log(sumOfAllDice());
    console.log(sumOfAllScores());    
    // console.log(totalScoreCalc());
    //purely a check in console. Toggled on and off as needed


    function sumOfAllScores() {
        const sumOfAllScoresArray = Array.from(scoreAmount).map(item => {
            let score = item.innerHTML * 1;
            return isNaN(score) ? 0 : score;  // Handle non-numeric values
        });
    
        let  totalBottomCalc = ((total, value) => total + value);
    
        // console.log(sumOfAllScoresArray);
        
     
        let sum = sumOfAllScoresArray.reduce(totalBottomCalc, 0 );
            
        // console.log(sum);
        
        totalBottom.innerHTML = sum; 
        return sum;
        
    }
    
    
    function sumOfAllDice(){
        return diceTray.reduce((total, value) => total + value, 0);
    } 
    // this will print the total into the correct cell by reducing the array to a single number by adding second value to the first one until there is only one left.
    
    function totalScoreCalc() {
        let sumOfBothScores = (sumOfAllDice() + sumOfAllScores());
        // console.log(sumOfBothScores);
        totalScore.innerHTML = sumOfBothScores;
        return sumOfBothScores;
        
        
    }

    totalScoreCalc();

// 
    // console.log(totalScoreCalc()); 
    
}



function xOfAKind(value){
    for (const key in count) {
        if(count[key] === value) return true;
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











// Here be old and decrepicated code arrrrrr:




// function totalScorePush() {
    
    //     push = totalScoreCalc();
    //     console.log(push);
    //     return push;
        
    //    }
    

// function sumOfAllDice(){
//     return diceTray.reduce((total, value) => total + value, 0);
// } 
// // this will print the total into the correct cell by reducing the array to a single number by adding second value to the first one until there is only one left.


// tableDie2.addEventListener('change', sumOfAllScores) // will calc
// tableDie2.addEventListener('change', totalScoreCalc)


// totalBottom.innerHTML = sumOfAllScores();
    //should show total the amount of the second table

    // if (checkStreet(4) && !checkStreet(5)) {
    //     kleineStraat.innerHTML = 30;
    //     groteStraat.innerHTML = 0;
    // } else if (checkStreet(5) && !checkStreet(4)) {
    //     kleineStraat.innerHTML = 0;
    //     groteStraat.innerHTML = 40;
    // } else {
    //     kleineStraat.innerHTML = 0;
    //     groteStraat.innerHTML = 0;
    // } // this was meant to only print a score in the case of 4 in a row or 5 in a row respectively but it did not want to work. 
    


// checkStreet(4)
// checkStreet(5)

//     diceTray.sort();
//    const sortedDiceTray = new Set(diceTray);  { 
//               console.log([...sortedDiceTray]);
//     }

// (count.some(key => key >= 1 && key <= 5 || key >= 2 && key <= 6)) { return true;

//     for (i = 0; i < sortedDiceTray.length; i++) {
        
            
//         }
 

        // }




// function largeStreet(){



// };

// console.table(count); not needed will return a table with all 0's
// tableDie.addEventListener('change', totalDie); not needed, function called in rollDice
// button.addEventListener('click', totalDie); not needed, function called in rollDice


// if (([num, count]) => count === 2) {
//     console.log("hier zijn 2")
// };
// elseif (([num, count]) => count === 3) {
//     console.log("deze keer zijn het 3")
// };  elseif (([num, count]) => count === 3 && count === 2) {
//     console.log("nu is het een goed gevuld huis")
// };


//         if (occurrences === 2) {
//             console.log("een paar")
//         }
//            else if (occurrences === 3) {
//             console.log("3 stuks")
//            } 
// else {
    
// }

// const threes = () => {
//     for (let i == count * 3) {
//         threeOfAKind.innerHTML = count * 3;

//     }
// }    

// const checkMultiples = () => {

//     let occurrences = diceTrayArray
//     .reduce((acc, value) => (acc[value]=-~acc[value], acc),{});

// console.log(occurrences); // {"1": 1, "3": 1, "5": 2, "6": 4}

    // const diceTrayArray = Array.from(diceTray); //duplicates diceTray for further use

    // console.log(diceTrayArray);  // serves a check to see if the array is properly made with the same values as shown in the table. 




    // const checkMultiples = () => {

    //     let numberOfRepeats = diceTrayArray
    //     .reduce((die, value) => (die[value]=-~die[value], die),{});   //checks for numbers repeating in diceTrayArray
       
    //     let reducedRepeats =
    //         Object.fromEntries(
    //         Object.entries(numberOfRepeats).filter(([num, count]) => count > 1)); // makes it so reducedRepeats only contains numbers which are repeated.
         
         
    //         Object.entries(reducedRepeats).forEach(([num, count]) => {
    //             if (count === 2) {
    //                 console.log("hier zijn 2");
    //                 return itsAPair;
    //             } else if (count === 3) {
    //                 console.log("deze keer zijn het 3");
    //                 return itsThreeOfAKind;
    //             }
    //         });
    //     console.log(reducedRepeats);  // logs the repeating numbers in reducedRepeats as a check
    // } 

    // checkMultiples();
    
    
    // function smallStreet() {
//     let result;
//     for (const key in count) {
//         if (count[key] === 1){ 
        
//         }
            
//         }
//     }
//         if 
    
//     return false;