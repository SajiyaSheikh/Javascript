// Que 1 : find sum of all even numbers up to given number n?
// n=20

var n=4;
var sum=0;
for(var i=0;i<=n;i++)
{
    if(i%2==0)
    {
        sum=sum+i;
    }
}
console.log("Sum : "+sum);


// Que 2 : Derive value of x which floor of 32/N
//if x=0 print Too Low 
// if x=infinity print -1
// else print the value of x
var N=0
var x= Math.floor(32/N); // floor --> if x=3.444, floor of x=3
if(N==0)
{
    console.log(-1);
}
else if(x==0)
{
    console.log("Too Low");
}
else
{
    console.log(x);
}