function validate()
{
    var user=document.getElementById("uname");
    var pass=document.getElementById("pass");
    if(user.value.trim()=="" || pass.value.trim()=="")
    {
        alert("No blank values allowed");
        return false;
    }
    else
    {
        return true;
    }
}