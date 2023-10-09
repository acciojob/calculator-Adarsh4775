//your code here
const input = document.createElement("input");
input.id="input";
input.setAttribute("type","text");
document.body.appendChild(input);

let buttons = document.querySelectorAll("button");
let currentInput = " ";

function UpdateInput(){
	input.value = currentInput;
}

for(let i=0; i<=9; i++)
	{
		document.getElementById(`block${i}`).addEventListener("click",() =>{
			currentInput += i;
			UpdateInput();
		});
	}

document.getElementById("dot").addEventListener("click",() =>{
	if(!currentInput.includes("."))
	{
		currentInput += ".";
		UpdateInput();
	}
});

const operators = ["plus","minus","multiply","divide"];
operators.forEach((operator)=>
	             document.getElementById(operator).addEventListener("click", ()=>{
					     currentInput += operator === "plus" ? "+" : operator === "minus" ? "-" : operator === "multiply" ? "*" : "/";
      UpdateInput();
						 });
	                 )

document.getElementById("clr").addEventListener("click", () =>{
	            currentInput=" ";
	            UpdateInput();
});

document.getElementById("ans").addEventListener("click", () =>{
	try 
		{
			const result = eval(currentInput);
			input.value = result === Infinity ? Infinity : isNaN(result) ? "NaN" : result;
			currentInput = result.toString();
		}
	catch (error) {
		input.value="error";
		currentInput = " ";
	}
});

document.getElementById("clear").addEventListener("click", () =>{
	       currentInput = currentInput.slice(0, -1);
	UpdateInput();
});




















