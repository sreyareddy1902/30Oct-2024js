

/*----example1
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    {
        document.write(i+"<br>")
    }
}
-----*/

/*--example2
let sum=0
for(let i=1;i<=10;i++)
    {
        if(i%2==0)
        {
            sum=sum+i
        }
    }
    document.write(sum)
----*/

/*---example3
for(let i=1;i<=10;i++)
    {
        if(i%2!==0)
        {
            document.write(i+"<br>")
        }
    }
----*/

/*----example4
let product=1
for(let i=1;i<=10;i++)
    {
        if(i%2!==0)
        {
           product=product*i
        }
    }
    document.write("product of natural numbers 1 to 10 with odd values:"+product)
-----*/

/*---example5
let n=5412
let sum=0
while(n>0)
{
    let r=n%10
    sum=sum+r
    n=Math.floor(n/10)
}
document.write(sum)
----*/

/*----example6
let n=5412934
let sum=0
while(n!=0)
{
    let r=n%10
    if(r%2==0)
    {
        sum=sum+r
    }
    n=Math.floor(n/10)
}
document.write(sum)
----*/

/*---example7
let n=3
let fc=0
for(let i=1;i<=n;i++) //1<=3 ,2<=3 ,3<=3 ,4<=3
{
    if(n%i==0) //3%1==0 ,3%2==0 ,3%3==0
    {
        fc++ //fc=1 ,fc=2
    }
}
if(fc==2) //2==2
{
 
    document.write(n+" is a prime number") //3 is a prime number
}
else
{
    document.write(n+" is not a prime number")
}
-----*/

/*---example8
let n=543
let rev=0
let temp=n //temp=543
while(n!=0) //543!=0 ,54!=0 ,5!=0 ,0!=0
{
    let r=n%10 //r=3 ,r=4 ,r=5
    rev=rev*10+r //3 ,rev=34 ,rev=345
    n=Math.floor(n/10) //n=54 ,n=5 ,n=0
}
if(rev==temp) //345==543
{
    document.write(temp+"is a palindrome")
}
else
{
    document.write(temp+"is not a palindrome")
}
----*/

/*---example9
let n=121,temp=n
let sum=0,product=1
while(n!=0)
{
    let r=n%10
    sum=sum+r
    product=product*r
    n=Math.floor(n/10)
}
if(sum==product)
{
    document.write(temp+" is a spy number")
}
else
{
    document.write(temp+" is not  a spy number")
}
----*/

/*---example10
let n=24
let sum=0
for(let i=1;i<=n/2;i++)
{
    if(n%i==0)
    {
        sum=sum+i
    }
}
if(sum==n)
{
    document.write(n +" is a perfect number")
}
else
{
    document.write(n +" is  not a perfect number")
}
-----*/
