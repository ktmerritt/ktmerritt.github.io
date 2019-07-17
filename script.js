//Here we are using the Math.random function to console log a random number. We then multiply it by 5 to round it to a higher number://
console.log(Math.random() * 5);

//In the above example, the Math.random function is not generating a whole number. We can tell the browsaer to generate a whole number using the Math.floor function with the Math.random function://
console.log(Math.floor(Math.random() * 5));

//We may have noticed that we haven't got a value of 5 yet. This is because if we multiply by 5, we won't get anything above 4. To change this, we'll multiply by 6://
console.log(Math.floor(Math.random() * 6));

//Now we will code the logic using what we've already learned://


document.getElementById("guessNumber").onclick = function() {
    var audio = new Audio("francky.mp3")
    audio.play();
    var answer = Math.floor(Math.random() * 6);
    var guess = document.getElementById("userGuess").value;

    if (guess == answer) {
        document.getElementById("result").innerHTML = ("Bien joué, du con!!");
    } else {
        document.getElementById("result").innerHTML = ("Non espèce de con, c'est " + answer + "!!!");
    }
}



