/* 
    A rock, paper, scissors game by Bamdad Fard and Andrei Robu.
*/

function ropasco(myChoice, yourChoice) {
    let weapons = ["paper", "rock", "scissors"]
    
    if (yourChoice === myChoice){ // Draw condition 
        return weapons[yourChoice] + " vs " + weapons[myChoice] + ", Draw";
    } else {
        if (myChoice == (yourChoice - 1)%3) { // I win, player loses
            return weapons[yourChoice] + " vs " + weapons[myChoice] + ", I win"
        } 
    } // And if I don't win: 
    return weapons[yourChoice] + " vs " + weapons[myChoice] + ", You win"; 
} 

function myChooser() { // This has been placed outside for redundancy and symmetry.
    return Math.floor(Math.random() * 3);
}
console.log(ropasco(myChooser(),2));