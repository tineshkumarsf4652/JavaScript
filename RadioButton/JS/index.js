function function1()
{
    var radio1=document.getElementById("radio1");
    var radio2=document.getElementById("radio2");
    if(radio1.checked==true)
    {
        alert("The channel is selected is: "+radio1.value);
    }
    else if(radio2.checked==true)
    {
        alert("The channel is selected is: "+radio2.value);
    }
    else
    {
        alert("No channel is selected");
    }
}