//conditional statement
//1. if(to check single condition)
//2. if-else(to check two conditions)
//3. if-else-if(to check multiple conditions)
//4. Ternary operator(to check single condition)

let age=20;
if(age>=18){
    console.log("You are an adult")
}
console.log("-------------------------------")

let temp = 45;
if(temp > 30){
    console.log("It's too hot ouside")
}
else{
    console.log("It's not too hot outside")
}
console.log("-------------------------------")

let marks = 80;
if (marks >=90){
    console.log('A+')
}
else if (marks >=80 ){
    console.log('A')
}
else if (marks >=70){
    console.log('B')
}
else {
    console.log('C');
    };

    console.log("-------------------------------")


    let a = 20;
    let result = (a >= 18) ? "You are eligible to vote." : "You are not eligibl eto vote."
    console.log(result)
    console.log("-------------------------------")

    //even odd
    let num = 13;
    if(num%2==0){
        console.log("Even no")
    }
    else{
        console.log("Odd number");
    }
    
    console.log("-------------------------------")

    //greatest no.
    var ab = 12;
    var bc = 10;
    var ac = 15;

    if (ab>bc>ac){
        console.log("ab is greatest" , ab)
    }
    else if(bc>ac>ab){
        console.log("bc is greatest" ,bc)
    }
    else {
        console.log("ac is greatest" ,ac)
    }
    


