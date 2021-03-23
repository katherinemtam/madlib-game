// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const fieldTotal = 11;
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const input4 = document.getElementById("input-4");
const input5 = document.getElementById("input-5");
const input6 = document.getElementById("input-6");
const input7 = document.getElementById("input-7");
const input8 = document.getElementById("input-8");
const input9 = document.getElementById("input-9");
const input10 = document.getElementById("input-10");
const input11 = document.getElementById("input-11");

const button = document.getElementById("button")

const output1 = document.getElementById("output-1");
const output2 = document.getElementById("output-2");
const output3 = document.getElementById("output-3");
const output4 = document.getElementById("output-4");
const output5 = document.getElementById("output-5");
const output6 = document.getElementById("output-6");
const output7 = document.getElementById("output-7");
const output8 = document.getElementById("output-8");
const output9 = document.getElementById("output-9");
const output10 = document.getElementById("output-10");
const output11 = document.getElementById("output-11");

const lyrics = document.getElementById("lyrics");

button.addEventListener("click", () => {
    output1.textContent = input1.value;
    output2.textContent = input2.value;
    output3.textContent = input3.value;
    output4.textContent = input4.value;
    output5.textContent = input5.value;
    output6.textContent = input6.value;
    output7.textContent = input7.value;
    output8.textContent = input8.value;
    output9.textContent = input9.value;
    output10.textContent = input10.value;
    output11.textContent = input11.value;

    if (validateForm()) {
        lyrics.classList.remove("lyrics"); 
    }
});

function validateForm() {
    let emptyArr = [];
    for (let i = 1; i < fieldTotal + 1; i++){
        let inputValue = document.getElementById('input-' + i).value;
        if (inputValue === "") {
            emptyArr.push("Field " + i);
        }
    }

    let errorMsg = 'Please fill in the following missing fields: \n'
    for (let i = 0; i < emptyArr.length; i++){
        errorMsg = errorMsg + emptyArr[i];
        if (i !== emptyArr.length - 1) {
            errorMsg = errorMsg + '\n';
        }
    }

// Shorthand for code in lines 63-67
// for(let fields in emptyArr){
//         errorMsg += emptyArr[fields];
//         if(fields != emptyArr.length - 1) {
//             errorMsg += '\n';
//         }
//     }

    if (emptyArr.length == 0) {
        return true;
    } else {
        alert(errorMsg);
        return false;
    }

    /*
    let input1Value = input1.value;
    let input2Value = input2.value;
    let input3Value = input3.value;
    let input4Value = input4.value;
    let input5Value = input5.value;
    let input6Value = input6.value;
    let input7Value = input7.value;
    let input8Value = input8.value;
    let input9Value = input9.value;
    let input10Value = input10.value;
    let input11Value = input11.value;

    if (input1Value === "" ||
        input2Value === "" ||
        input3Value === "" ||
        input4Value === "" ||
        input5Value === "" ||
        input6Value === "" ||
        input7Value === "" ||
        input8Value === "" ||
        input9Value === "" ||
        input10Value === "" ||
        input11Value === "") {
            alert ("Please fill all inputs below.");
            return false;
        }
        else
            return true;
            */
}



