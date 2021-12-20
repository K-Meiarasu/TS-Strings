import { StringManipulationService, NumberManipulationService } from "./main-service";
export class StringManipulations implements StringManipulationService {
    constructor(){

    }
    public print(word:string): void
    {
        console.log(word)
        console.log(word.toUpperCase())
        console.log(word.toLowerCase())
        console.log(word[Math.floor(Math.random()*word.length)])
        console.log(word+' '+"Manipulations")
        console.log(word.slice(0,5))
        console.log(word.length)        
    }
    public printWithSpace(sentence:string) : void
    {
        console.log(sentence.split('').join(' '))
    }
    public findVowel(str: string) : void
    {
        var vowels=['a', 'e', 'i', 'o', 'u'];
        var vowels_count=0
        for(let i=0;i<str.length;i++)
        {
            if(vowels.includes(str[i]))
            {
                vowels_count++;
            }
        }
        console.log(vowels_count)
    }
}
export class NumbersManipulations  implements NumberManipulationService {
    findPrime(num: number) : void
    {
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                console.log("Not a prime number");
                return ;
            }
        }
        console.log("Prime number");
        return ;
    }
    findMagic(num: number) : void
    {
        var sum=0;
        while(num.toString().length >1)
        {
            while(num)
            {
                sum+=num%10;
                num=Math.trunc(num/10);
            }
            num=sum;
            sum=0;
        }
        if(num==1)
        {
            console.log("Magic number");
        }
        else
        {
            console.log("Not a magic number");
        }
    }
}
var str="String";
var stringManipulation=new StringManipulations()
stringManipulation.print(str)
stringManipulation.printWithSpace(str)
stringManipulation.findVowel(str)
var n=17;
var NumbersManipulation=new NumbersManipulations()
NumbersManipulation.findPrime(n)
NumbersManipulation.findMagic(n)