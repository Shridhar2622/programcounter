let counter;
counter=0;
document.getElementById("decrease").onclick=function()
{
    counter=counter-1;
    document.getElementById("counter").innerHTML=`${counter}`;
}
document.getElementById("increase").onclick=function()
{
    counter=counter+1;
    document.getElementById("counter").innerHTML=`${counter}`;  
}
document.getElementById("reset").onclick=function()
{
    counter=0;
    document.getElementById("counter").innerHTML=`${counter}`;
}