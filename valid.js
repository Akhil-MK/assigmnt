function validateForm(){  
var name=document.form1.name.value;   
var num=document.form1.mobile.value;
var dob=document.form1.dob.value;
var email=document.form1.email.value;
var gender=document.form1.gender.value;
var mark=document.form1.mark.value; 
var x=document.form1.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (name==null || name==""){  
  alert("Name can't be blank");  
  document.form1.name.focus();
  return false;  
}

if (dob==null || dob==""){  
  alert("Date of Birth can't be blank");  
  document.form1.dob.focus();
  return false;  
}


if (num==null || num==""){  
  alert("Phone can't be Empty");  
  document.form1.mobile.focus();
  return false;  
}


if (isNaN(num)){  
 alert("Enter Numeric value only");  
 document.form1.mobile.focus();
  return false;  
}else if (num.length!=10) {
	alert("Enter a valid number");
	document.form1.mobile.focus();
	return false;
}

if (email==null || email==""){  
  alert("Email can't be Empty"); 
  document.form1.email.focus(); 
  return false;  
}
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address ");
  document.form1.email.focus();  
  return false;  
  }  


if (gender==null || gender==""){  
  alert("Provide a gender"); 
 document.form1.gender[0].focus();
  return false;  
}

if (mark==null || mark==""){  
  alert("Mark can't be Empty");  
  document.form1.mark.focus();
  return false;  
}
if (isNaN(mark)){  
 alert("Enter Numeric value only");  
 document.form1.mark.focus();
  return false;  
}

else{
alert("Submited Successfully")  
  return true;  
  }  

}