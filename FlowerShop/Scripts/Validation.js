
function ValidateCardNumber() {
    var cardNumber = (document.getElementById("cardNumber")).value;
    var regularExp = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (cardNumber.match(regularExp))
    {
        document.getElementById("ValidateCardNumberKey").style.display="none"; 
        document.getElementById("ValidateCardNumberValue").style.display="none"; 
    }
    else
    {
      document.getElementById("ValidateCardNumberKey").style.display="block";
      document.getElementById("ValidateCardNumberValue").style.display="block";  
    }
}
function ValidateSecurityCode() {
    var securityCode = (document.getElementById("securityNumber")).value;
    var regularExp = /^[0-9]{3}$/;
    if (securityCode.match(regularExp))
    {
        document.getElementById("ValidateSecurityCodeKey").style.display="none";
        document.getElementById("ValidateSecurityCodeValue").style.display="none";  
    }
    else
    {
      document.getElementById("ValidateSecurityCodeKey").style.display="block"; 
      document.getElementById("ValidateSecurityCodeValue").style.display="block"; 
    }
}
function ValidateCardHolderName() {
    var name = (document.getElementById("cardHoldersName")).value;
    var regularExp = /^[a-zA-Z]+((['/,. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (name.match(regularExp))
    {
        document.getElementById("ValidateCardholderNameKay").style.display="none";
        document.getElementById("ValidateCardholderNameValue").style.display="none"; 
    }
    else if(name.length===0){
                document.getElementById("ValidateCardholderNameValue").style.display="block";  
    }
    else
    {
       document.getElementById("ValidateCardholderNameKay").style.display="block";
        document.getElementById("ValidateCardholderNameValue").style.display="block";  
    }
}
function ValidateAddress1() {
    var address1 = (document.getElementById("address1")).value;
    var regularExp = /^[0-9a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (address1.match(regularExp))
    {
        document.getElementById("ValidateAddress1Key").style.display="none"; 
        document.getElementById("ValidateAddress1Value").style.display="none"; 
    }
    else
    {
      document.getElementById("ValidateAddress1Key").style.display="block"; 
        document.getElementById("ValidateAddress1Value").style.display="block";
    }
}
function ValidateAddress2() {
    var address2 = (document.getElementById("address2")).value;
    var regularExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
   if (address2.match(regularExp))
    {
        document.getElementById("ValidateAddress2Key").style.display="none"; 
        document.getElementById("ValidateAddress2Value").style.display="none";
    }
    else
    {
      document.getElementById("ValidateAddress2Key").style.display="block"; 
        document.getElementById("ValidateAddress2Value").style.display="block";
    }
}
function ValidateAddress3() {
    var address3 = (document.getElementById("address3")).value;
    var regularExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (address3.match(regularExp))
    {
        document.getElementById("ValidateAddress3Key").style.display="none"; 
        document.getElementById("ValidateAddress3Value").style.display="none";
    }
    else
    {
      document.getElementById("ValidateAddress3Key").style.display="block"; 
        document.getElementById("ValidateAddress3Value").style.display="block";
    }
}
function ValidateTown() {
    var town = (document.getElementById("city")).value;
    var regularExp = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (town.match(regularExp))
    {
        document.getElementById("ValidateTownKey").style.display="none";
        document.getElementById("ValidateTownValue").style.display="none";  
    }
    else
    {
       document.getElementById("ValidateTownKey").style.display="block";
       document.getElementById("ValidateTownValue").style.display="block";  
    }
}
function ValidateRegion() {
    var region = (document.getElementById("region")).value;
    var regularExp = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    flag++;
    if (region.match(regularExp))
    {
        document.getElementById("ValidateRegionKey").style.display="none";
        document.getElementById("ValidateRegionValue").style.display="none"; 
    }
    else
    {
     document.getElementById("ValidateRegionKey").style.display="block";
        document.getElementById("ValidateRegionValue").style.display="block"; 
    }
}
function ValidatePincode() {
    var pincode = (document.getElementById("pincode")).value;
    var regularExp = /^(?:6[0-9]{5})$/;
    if (pincode.match(regularExp))
    {
        document.getElementById("ValidatePincodeKey").style.display="none"; 
        document.getElementById("ValidatePincodeValue").style.display="none"; 
    }
    else
    {
      document.getElementById("ValidatePincodeKey").style.display="block"; 
        document.getElementById("ValidatePincodeValue").style.display="block"; 
    }
}
function ValidateTelephone() {
    var telephone = (document.getElementById("telephone")).value;
    var regularExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (telephone.match(regularExp))
    {
        document.getElementById("ValidateTelephoneKey").style.display="none";
        document.getElementById("ValidateTelephoneValue").style.display="none";  
    }
    else
    {
        document.getElementById("ValidateTelephoneKey").style.display="block";
        document.getElementById("ValidateTelephoneValue").style.display="block"; 
    }
}
function ValidateEmail() {
    var email = (document.getElementById("email")).value;
    var regularExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regularExp))
    {
        document.getElementById("ValidateEmailKey").style.display="none"; 
        document.getElementById("ValidateEmailValue").style.display="none"; 
    }
    else
    {
        document.getElementById("ValidateEmailKey").style.display="block"; 
        document.getElementById("ValidateEmailValue").style.display="block";  
    }
}
function ValidateFax() {
    var fax = (document.getElementById("fax")).value;
    var regularExp = /^\+?[0-9]{6,}$/;
    if (fax.match(regularExp))
    {
        document.getElementById("ValidateFaxKey").style.display="none"; 
        document.getElementById("ValidateFaxValue").style.display="none"; 
    }
    else
    {
        document.getElementById("ValidateFaxKey").style.display="block"; 
        document.getElementById("ValidateFaxValue").style.display="block";
    }
}
function submit(){
    var cardNumber = (document.getElementById("cardNumber")).value.length;
    var securityCode = (document.getElementById("securityNumber")).value.length;
    var name = (document.getElementById("cardHoldersName")).value.length;
    var address1 = (document.getElementById("address1")).value.length;
    var pincode = (document.getElementById("pincode")).length;
    var email = (document.getElementById("email")).value.length;
    var town = (document.getElementById("city")).value.length;
    if(cardNumber>0&&securityCode>0&&name>0&&address1>0&&pincode>0&&email>0&&town>0)
    {
      alert("Successfull")
    }
    else{
        ValidateCardNumber();
        ValidateSecurityCode()
        ValidateCardHolderName();
        ValidatePincode();
        ValidateEmail();
        ValidateAddress1();
        ValidateTown();
     }
 }