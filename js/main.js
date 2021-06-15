let btn = document.getElementById("button1");
let output = document.getElementById("outputext");

let number = (Math.floor(Math.random() * 100));


btn.addEventListener("click", () => {

    let input = parseInt(document.getElementById("userinput").value);
    //console.log(typeof number);
    // alert(input);
    alert(number);
    if (input < 1 || input > 100) {
        alert("Please Guess a number between 1-100");
    } else if (input == number) {
        output.innerHTML = `You guessed right, your number was ${number}`;
    } else if (input < number) {
        output.innerHTML = "You guessed too low";
    } else if (input > number) {
        output.innerHTML = "You Guessed too high";
    }

})