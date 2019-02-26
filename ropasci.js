function ropasci(myChoice, yourChoice) {
    const WEAPONS = ["paper", "rock", "scissors"]; // The options!
    let choices = WEAPONS[yourChoice] + " vs " + WEAPONS[myChoice]; // So we don't have to repeat code. 

    return (yourChoice == myChoice) ? choices + ", draw!" : // If same weapon > Draw! 
        (myChoice == (yourChoice - 1)%3) ? choices + ", I win!" : // I beat you! 
        choices + ", you win!"; // And if it isn't a draw and you haven't won...
} 

function myChooser() { // This has been placed outside for redundancy and symmetry.
    return Math.floor(Math.random() * 3);
}
console.log(ropasci(myChooser(),2));