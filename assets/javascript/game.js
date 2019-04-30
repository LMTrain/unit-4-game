function initializeReset() {
    computerPick = 0;
    finalNumber = 0;
    hexagonNumber = 0;
    diamondNumber = 0;
    octagonNumber = 0;
    squareNumber = 0;

    // $("#final-number, #computer-pick, #status").empty();
}

var computerPick = 0;
var finalNumber = 0;
var hexagonNumber = 0;
var diamondNumber = 0;
var octagonNumber = 0;
var squareNumber = 0;

hexagonNumber = Math.floor(Math.random() * 13);
diamondNumber = Math.floor(Math.random() * 13);
octagonNumber = Math.floor(Math.random() * 13);
squareNumber = Math.floor(Math.random() * 13);
computerPick = Math.floor(Math.random() * 121);
$("#computer-pick").text(computerPick);
// var randomTwo = Math.floor(Math.random() * 10);
console.log("hexagonNumber = " + hexagonNumber + "  diamondNumber = " + diamondNumber + "  octagonNumber = " + octagonNumber + "  squareNumber = " + squareNumber);
console.log("computerPick = " + computerPick);
$(document).ready(function () {

    $("#random-button-1").on("click", function () {


        console.log("hexagonNumber = " + hexagonNumber);
        finalNumber = finalNumber + hexagonNumber;
        console.log("AFTER CLICK ---" + " hexagonNumber = " + hexagonNumber + "  diamondNumber = " + diamondNumber + "  octagonNumber = " + octagonNumber + "  squareNumber = " + squareNumber);
        $("#final-number").text(finalNumber);

        if (finalNumber === computerPick) {
            $("#status").text("You Won!");
            initializeReset();
        }
        else if (finalNumber > computerPick) {
            $("#status").text("You Lose!");
            initializeReset();
        }


    });
});

$(document).ready(function () {

    $("#random-button-2").on("click", function () {


        console.log("diamondNumber = " + diamondNumber);
        finalNumber = finalNumber + diamondNumber;
        console.log("AFTER CLICK ---" + " hexagonNumber = " + hexagonNumber + "  diamondNumber = " + diamondNumber + "  octagonNumber = " + octagonNumber + "  squareNumber = " + squareNumber);
        $("#final-number").text(finalNumber);

        if (finalNumber === computerPick) {
            $("#status").text("You Won!");
            initializeReset();
        }
        else if (finalNumber > computerPick) {
            $("#status").text("You Lose!");
            initializeReset();
        }

    });
});

$(document).ready(function () {

    $("#random-button-3").on("click", function () {


        console.log("octagonNumber = " + octagonNumber);
        finalNumber = finalNumber + octagonNumber;
        console.log("AFTER CLICK ---" + " hexagonNumber = " + hexagonNumber + "  diamondNumber = " + diamondNumber + "  octagonNumber = " + octagonNumber + "  squareNumber = " + squareNumber);
        $("#final-number").text(finalNumber);

        if (finalNumber === computerPick) {
            $("#status").text("You Won!");
            initializeReset();
        }
        else if (finalNumber > computerPick) {
            $("#status").text("You Lose!");
            initializeReset();
        }

    });
});

$(document).ready(function () {

    $("#random-button-4").on("click", function () {


        console.log("squareNumber = " + squareNumber);
        finalNumber = finalNumber + squareNumber;
        console.log("AFTER CLICK ---" + " hexagonNumber = " + hexagonNumber + "  diamondNumber = " + diamondNumber + "  octagonNumber = " + octagonNumber + "  squareNumber = " + squareNumber);
        $("#final-number").text(finalNumber);

        if (finalNumber === computerPick) {
            $("#status").text("You Won!");
            initializeReset();
        }
        else if (finalNumber > computerPick) {
            $("#status").text("You Lose!");
            initializeReset();
        }

    });
});











// var computerChoices = ["Soul For Real", "Michael Jackson", "Faith Evans", "Salt n Pepa", "K Ci & Jojo", "R. Kelly", "Destiny Child", "Fugees", "Color me Badd", "Shanice", "Lisa Stansfield", "Tony Toni Tone", "Jade", "Keith Sweat", "Aaron Hall", "Johnny Gill", "Jodeci", "Brandy", "Monica", "Usher", "Mary J Blige", "Montell Jordan", "Blackstreet", "Dr. Dre", "Snoop Dogg", "xscape", "Puff Daddy", "Mint Condition", "Jagged Edge", "Jennifer Lopez", "Heavy D", "Tupac", "Jay Z", "Beyonce", "En Vogue", "Sade", "Dru Hill", "Lauryn Hill", "Whitney Houston", "Boyz II Men", "Santana", "Luther Vandross", "Mark Morrison", "Joe", "Babyface", "Tina Turner", "Tevin Campbell", "Tyrese"];
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var computerGuessR = [];
// var wins = 0;
// var losses = 0;
// var guesses = 5;
// document.getElementById("total-wins").textContent = "Wins = " + wins;
// document.getElementById("total-losses").textContent = " Loses = " + losses;