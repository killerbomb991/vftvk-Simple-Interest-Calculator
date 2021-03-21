function compute()
{
    p = document.getElementById("principal").value;
    rate = document.getElementById("rate").value
	years = document.getElementById("years").value;
	span = document.getElementById("result").innerHTML;
	result;
	if (p>0)
	{
	year = new Date();
	yea = Number(year.getFullYear()) + Number(years)-1;
	result = ((p*rate)/100)*years;
		
	span = 'If you deposit <mark>' + p + '</mark>, <br/>at an interest rate of <mark>' +rate+ '%.</mark> <br/>You will recieve an amount of <mark>'+ result + '</mark>, <br/>in the year <mark>'+ yea +'</mark>'; 
	document.getElementById("result").innerHTML=span;
	}
	else
	{
		alert("the amount must be greater than zero");
		document.getElementById("principal").focus();
	}
}
   
function updateTextInput(val) 
{
          document.getElementById("rateVal").innerHTML=val+"%"; 
}   