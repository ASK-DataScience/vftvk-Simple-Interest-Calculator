
//Compute Interest and display information
function compute()
{
    var principalInput = document.getElementById("principal").value;
    var principal = parseInt(document.getElementById("principal").value);
    if (principalInput=="" || principal==0 || principal<0){
        alert("Enter a positive number.");
        document.getElementById("result").innerHTML=""
        document.getElementById("principal").focus();
    } 
    else {
        var rate = parseFloat(document.getElementById("rate").value);
        var years = parseInt(document.getElementById("years").value);
        
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);

        //document.getElementById("result").innerText = "Done!";

        document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rate+"%</mark>,<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark><br>"
    }
}

//Update the rate value
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}

//Check that the principal is a positive number
function checkPrincipal(){
    var principal = parseInt(document.getElementById("principal").value);
    if (principal==0 || principal<0) {
        alert("Enter a positive number.")
    }
}
        
