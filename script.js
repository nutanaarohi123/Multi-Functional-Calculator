function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else if(num.length-2=="-")
	{
		document.getElementById("output-value").innerText=num;
	}
	else if(num=="-")
	{
		document.getElementById("output-value").innerText=num;	
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	/*if(num=="-"){
		return "";
	}*/
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
		 var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else if(this.id=="!")
		{
			var f=1;
			var output=reverseNumberFormat(getOutput()).toString();
			for(var i=1;i<=reverseNumberFormat(output);i++){
				f=f*i;
		   }
			var result=f;
			printOutput(result);
			printHistory(output+this.id);
		}
		else if(this.id=="x^2")
		{
			var a=reverseNumberFormat(getOutput()).toString();
			var result=a*a;
			printOutput(result);
			printHistory(a+"^2");
		}
		else if(this.id=="x^3"){
			var b=reverseNumberFormat(getOutput()).toString();
			var result=b*b*b;
			printOutput(result);
			printHistory(b+"^3");
		}
		else if(this.id=="dec")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var result=p/100;
			printOutput(result);
			printHistory(p+"%"+"="+result+" in decimal");
		}
		else if(this.id=="per")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var result=p*100;
			printOutput(result);
			printHistory(p+" in decimal"+"="+result+"%");
		}
		else if(this.id=="°F")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var f=p*9/5+32;
			printOutput(f);
			printHistory(p+"°C "+"= "+f+"°F");
		}
		else if(this.id=="°C")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var f=(p-32)*5/9;
			printOutput(f);
			printHistory(p+"°F "+"= "+f+"°C");
		}
		else if(this.id=="K")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=parseFloat(p)+273.15;
			printOutput(z);
			printHistory(p+"°C "+"= "+z+"K");
		}
		else if(this.id=="1/x")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			printOutput(1/p);
			printHistory("Inverse of "+p+" is "+"1"+"/"+p);

		}
		else if(this.id=="√x")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=Math.sqrt(parseFloat(p));
			printOutput(z);
			printHistory("√"+p+" = "+z);
		}
		else if(this.id=="sin")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=Math.sin(p);
			printOutput(z);
			printHistory(this.id+p+" = "+z);	
		}
		else if(this.id=="cos")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=Math.cos(p);
			printOutput(z);
			printHistory(this.id+p+" = "+z);	
		}
		else if(this.id=="tan")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=Math.tan(p);
			printOutput(z);
			printHistory(this.id+p+" = "+z);	
		}
		else if(this.id=="e^")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=Math.exp(p);
			printOutput(z);
			printHistory(this.id+p+" = "+z);	
		}
		else if(this.id=="log")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			var z=Math.log10(p);
			printOutput(z);
			printHistory(this.id+p+" = "+z);	
		}
		else if(this.id=="ln")
		{
			var p=reverseNumberFormat(getOutput()).toString();
			if(p==2)
			{
			      var z=Math.LN2;
			     printOutput(z);
			      printHistory(this.id+p+" = "+z);	
			}
			else if(p==10)
			{
				  var z=Math.LN10;
				  printOutput(z);
			      printHistory(this.id+p+" = "+z);	
			}
			else{
			      printOutput("");
			      printHistory("Only 2 and 10 input accepted ");	
			}
		} 
		else if(this.id=="(-1)"){
			printOutput("-");
			printHistory("");
		}
		else if(this.id=="e"){
			var p=reverseNumberFormat(getOutput()).toString();
			var z= parseFloat(p)*2.718;
			printOutput(z);
			printHistory("");
		}
		else if(this.id=="abs"){
			var p=reverseNumberFormat(getOutput()).toString();
			var z= Math.abs(p);
			printOutput(z);
			printHistory(this.id+"("+p+")"+" = "+z);
		}
		else if(this.id=="ceil"){
			var p=reverseNumberFormat(getOutput()).toString();
			var z= Math.ceil(p);
			printOutput(z);
			printHistory(this.id+"("+p+")"+" = "+z);
		}
		else if(this.id=="floor"){
			var p=reverseNumberFormat(getOutput()).toString();
			var z= Math.floor(p);
			printOutput(z);
			printHistory(this.id+"("+p+")"+" = "+z);
		}

	
		else {
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
					
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
			    if(this.id=="="){
					
				         var result=eval(history);
				         printOutput(result);
				         printHistory("");
					
				}
				else if(this.id==".")
				{
					output=history[history.length-1]+this.id;
					if(history.length<2){
					printHistory("");
					}else{
					printHistory(history.substr(0, history.length-1));
					}
					document.getElementById("output-value").innerText=output;
					
				}
				else{
				history=history+this.id;
				printHistory(history);
				printOutput("");
				}
				
			
			}
		}
		
	});
}

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=getOutput();
		if(output[output.length-1]==".")
		{
			output=output.substr(output.length-2, 1)+output.substr(output.length-1, 1)+this.id;
			printOutput(output);
		}
		else if(output[output.length-1]=="-"){
			output=output.substr(0,output.length)+this.id;
			printOutput(output);
			printHistory("");
		}
		else{
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	}
	});
}
var d=new Date();
document.getElementById("date").innerHTML=d;
