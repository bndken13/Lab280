function toggleBulb()
{
	document.getElementById("l1").src="images/turnoff.png";
	document.getElementById("l2").src="images/turnoff.png";
}	

function toggleButton()
{
	document.getElementById("button1").style.color = "green";
	document.getElementById("button2").style.color = "blue";
	document.getElementById("button3").style.color = "yellow";
	document.getElementById("h1").style.fontFamily = 'Verdana, sans-serif';
}	

function toggleNav()
{
	document.getElementById("mainnav").style.width = "800px";
	document.getElementById("mainnav").style.opacity = "0.75";
}

function checkInput()
{
	var input1 = document.getElementById("inputA").value;
	var input2 = document.getElementById("inputB").value;
	var input3 = document.getElementById("inputC").value;
	
	if (input1 == null || input2 == null || input3 == null || input1 == "" || input2 == "" || input3 == ""){
		alert("Inputs could not be blank");
	} else if (isNaN(input1) || isNaN(input2) || isNaN(input3)){
		alert("Inputs should be numbers");
	} else {
		if (input1 * input2 > input3)
			alert(input1 + " * " + input2 + " > " + input3 + " is true!");
		else
			alert(input1 + " * " + input2 + " > " + input3 + " is false!");
	}
	
}

function checkSquare()
{
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	var input3 = document.getElementById("input3").value;
	var input4 = document.getElementById("input4").value;
	var input5 = document.getElementById("input5").value;
	var input6 = document.getElementById("input6").value;
	var input7 = document.getElementById("input7").value;
	var input8 = document.getElementById("input8").value;
	var input9 = document.getElementById("input9").value;
	var answer;
	
	if (input1 == null || input2 == null || input3 == null || input4 == "" || input5 == "" ||input6 == "" ||input7 == "" ||input8 == "" ||input9 == "" || input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "" || input6 == "" || input7 == "" || input8 == "" || input9 == ""){
		alert("Inputs could not be blank");
	} else if (isNaN(input1) || isNaN(input2) || isNaN(input3) || isNaN(input4) || isNaN(input5) || isNaN(input6) || isNaN(input7) || isNaN(input8) || isNaN(input9)){
		alert("Inputs should be numbers");
	} else {
		//var rowSum[0] = input1+input2+input3;
		var rowSum1 = input4+input5+input6;
		var rowSum2 = input7+input8+input9;
		
		var rowSum2 = input1+input4+input7;
		var rowSum3 = input2+input5+input8;
		var rowSum4 = input3+input6+input9;
		
		var rowSum5 = input1+input5+input9;
		var rowSum6 =input3+input5+input7;
		
		if (rowSum1 == rowSum2 || rowSum1 == rowSum3 ||rowSum1 == rowSum4 ||rowSum1 == rowSum5 ||rowSum1 == rowSum6){
			var changeResult = document.getElementById("result");
			changeResult.innerHTML = changeResult.innerHTML + " " + rowSum1;
		} else {
			alert("Try Again");
		}
			
		
	}
}

