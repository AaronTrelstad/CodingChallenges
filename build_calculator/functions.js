let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value
}

function calculate() {
    let stack = []
    let equation = display.value.split("")

    console.log(display.value)

    // Search for / or *
    for (let i = 0; i < equation.length; i++) {
        if (equation[i] == '/' || equation[i] == '*') {
            let result;

            if (equation[i] == '/') {
                result = Number(equation[i-1]) / Number(equation[i+1])
            } else {
                result = Number(equation[i-1]) * Number(equation[i+1])
            }
            
            equation.splice(i-1, 3, result)

            i = -1

            console.log(equation)
        }
    }

    // Search for + or -
    for (let i = 0; i < equation.length; i++) {
        if (equation[i] == '+' || equation[i] == '-') {
            let result

            if (equation[i] == '+') {
                result = Number(equation[i-1]) + Number(equation[i+1])
            } else {
                result = Number(equation[i-1]) - Number(equation[i+1])
            }
            equation.splice(i-1, 3, result)

            i = -1

            console.log(equation)
        }
    }

    display.value = equation[0]

}

function clearDisplay() {
    display.value = ""
}


