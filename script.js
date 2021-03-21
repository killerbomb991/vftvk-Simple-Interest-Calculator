function compute()
{
    p = document.getElementById("principal").value;
    rate = document.getElementById("rate").value
	years = document.getElementById("years").value;
	span = document.getElementById("result").innerHTML;
	result;
	year = new Date();
	yea = Number(year.getFullYear()) + Number(years)-1;
	result = ((p*rate)/100)*years;
		
	span = 'If you deposit ' + p + ', <br/>at an interest rate of ' +rate+ '%. <br/>You will recieve an amount of '+ result + ', <br/>in the year '+ yea; 
	document.getElementById("result").innerHTML=span;
}
   
function updateTextInput(val) 
{
          document.getElementById("rateVal").innerHTML=val+"%"; 
}   