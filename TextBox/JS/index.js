function function1()
{
    var str1=document.getElementById("text1").value;
    var str2=document.getElementById("text2").value;
    if(str1==str2)
    {
        document.write("<h3>Username and password are same</h3>");
    }
    else{
        document.write("<h3>Username and password are not same</h3>");
    }
}