const display = document.querySelector("#display h1")


const buttons = document.querySelectorAll("#num")

let currentvalue = "";

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const value = this.innertext;

        if (value === "Ac") {
            currentValue = "";
            display.innertext = "Enter your value"
        }

        else if (value === "C") {
            currentValue = currentValue.slice(0, -1)
            display.innerText = currentValue || "Enter your vaue"
        }
        else if (value === "=")
            try {
                let result = currentValue
                    .replace("X", "*")
                    .replace("÷", "/")

                display.innerText = eval(result);
                currentValue = display.innerText;
            } catch {
                display.innerText = "Error";
                currentValue = "";
            }
    }
else if (value === "√") {
        currentValue = Math.sqrt(Number(currentValue)).toString();
        display.innerText = currentValue;
    }
    else if (value === "%") {

        currentValue = (Number(currentValue) / 100).toString();
        display.innerText = currentValue;
    }

    else {

        currentValue += value;
        display.innerText = currentValue;
    }

});