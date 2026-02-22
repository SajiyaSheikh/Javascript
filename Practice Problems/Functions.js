//Que 1 : Create a function to check if a number is Prime or Not

// function isPrime(num)
// {
//     var count=0;
//     for(var i=1;i<num;i++)
//     {
//         if(num%i==0)
//         {
//             count ++;
//         }
//     }
//     if(count>2)
//     {
//         return(num+" : Not a Prime Number !");
//     }
//     else
//     return(num+" : Prime Number !");
// }

// console.log(isPrime(13));
// console.log(isPrime(20));
// console.log(isPrime(2));

//Que 2 : Use the above function to print the Primes from 2 to a given limit

function isPrime(num)
{
    var count=0;
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
        {
           count++;
        }
    }
    if(count==2)
    {
        return true;
    }
}

var limit=100;
for(var i=2;i<=limit;i++)
{
    var p=isPrime(i);
    if(p)
        console.log("Prime Number :"+i);
}