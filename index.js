
function BillingValidation(){
   // placeonerror();
    var cardvalue=document.getElementById("cardid").value;
    var cardholdervalue=document.getElementById("cardholderid").value;
    var cvvvalue=document.getElementById("cvvid").value;
    var firstvalue=document.getElementById("firstid").value;
    var lastvalue=document.getElementById("lastid").value;
    var addressvalue=document.getElementById("addressid").value;
    var cityvalue=document.getElementById("cityid").value;
    var postalvalue=document.getElementById("postalid").value
    var numbervalue=document.getElementById("numberid").value;
    var captchavalue=document.getElementById("code").value;
   // var checkboxvalue=document.getElementById("checkboxid")
  var manditory=""
 manditory += checkcard(cardvalue);
 manditory += checkcardholder(cardholdervalue);
 manditory += checkcvv(cvvvalue);
 manditory += checkfirst(firstvalue);
 manditory += checklast(lastvalue);
 manditory += checkaddress(addressvalue);
 manditory += checkcity(cityvalue)
 manditory += checkpost(postalvalue);
 manditory += checknumber(numbervalue);
 manditory += checkcaptcha(captchavalue);
 FormatCreditcard();
 // placeonerror();
 if(manditory){
alert(manditory)
 }
 else{
    alert("completed")
 }
  refresh()
}

function FormatCreditcard(){
    var CreditInput=document.getElementById("cardid")
    var value=CreditInput.value
    var ForamtValue=""
    for(var i=0;i<=value.length;i++){
        if(i>0&&i%4==0){
            ForamtValue += '';
        }
        ForamtValue +=value[i]
    }
    CreditInput.value=ForamtValue
}
function checkcard(cardvalue){

     if(cardvalue==""){
     //   document.getElementById("carderror").innerHTML="value is empty"
        return"value is empty.\n"
    }

    else if(!/^\d{12}$/.test(cardvalue)){
       return "card length should be 16.\n"
    }
return""
}
const monthdropdown=document.getElementById("expirymonth")
for(let i=1;i<=12;i++){
    const option=document.createElement('option')//i<10?'0'+i:''+i
    option.value=i
    option.text=i
    monthdropdown.add(option);
}
const yeardropdown=document.getElementById("expiryyear")
const currentyear=new Date().getFullYear();
for (let i=0;i<=10;i++){
    const option=document.createElement("option");
    const year = currentyear +i;
    option.value=year;
    option.text=year;
    yeardropdown.add(option)
}
function checkcardholder(cardholdervalue){
    if(cardholdervalue==""){
return "Cardholder name is empty.\n"
    }

   else if(!/^[A-Za-z]*$/.test(cardholdervalue)){
        return "The cardholder value should be only string.\n"
    }
    return""

}
function checkcvv(cvvvalue){
    if(cvvvalue==""){
     return "Cvv value is empty.\n"
    }
    else if(!/^\d{3}$/gm.test(cvvvalue)){
        return"Give correct cvv value.\n"
    }
  return""
}
function checkfirst(firstvalue){
    if(firstvalue==""){
        return"firstname value is empty.\n"

    }
    else if(!/^[A-Za-z]*$/.test(firstvalue)){
        return"The name should contain only character.\n"
    }
   return""
}
function checklast(lastvalue){
    if(lastvalue==""){
        return"The Lastname value is empty.\n"
    }
   else if(!/^[A-Za-z]*$/.test(lastvalue)){
        return"The should contain only character.\n"
    }
   return""
}
function checkaddress(addressvalue){
    if(addressvalue==""){
      return"The address is empty.\n"  
    }
   
    return""
}
const countryvalue=document.getElementById("countryid")
country=["Australia","America","canada","japan","India","Uk"]
for(let i=0;i<=country.length;i++){
    option=document.createElement("option");
   option.value += country[i];
  option.text +=country[i]
    countryvalue.add(option)
}
function checkcity(cityvalue){
    if(cityvalue==""){
        return"The city is empty.\n"
    }
   else if(!/^[A-Za-z]*$/.test(cityvalue)){
        return"Enter valid city name.\n"
    }
   return""
}
function checkpost(postvalue){
    if(postvalue==""){
        return"The Postvalue is empty.\n"
    }
   else if(!/^([a-zA-Z0-9]{6})$/.test(postvalue)){
        return"The postvalue contain only 6 digits.\n"
    }
    return""
}
function checknumber(numbervalue){
    if(numbervalue==""){
        return"The number is empty.\n"
    }
   else if(!/^\d{10}$/.test(numbervalue)){
        return"The number should contain 10 number.\n"
    }
 

}
function checkcaptcha(captchavalue){
    if(captchavalue==""){
        return"The captcha is empty.\n"
    }
    
   else if(captchavalue!==document.getElementById("captcha").innerHTML){
        return"The captcha is wrong.\n"
  }
  return""
}

function codegenerate(length) {
    var code = ""
    var random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i <= length; i++) {
        const randomind = Math.floor(Math.random() * random.length)
        code += random[randomind]
    }
    return code;
}
function displaycap() {
    const captchaelem = document.getElementById("captcha")
    captchaelem.textContent = codegenerate(4);
}
function refresh() {
    displaycap();
}
displaycap()


