let name = prompt ('Enter your name');
console.log(name);

let gender = prompt ('Enter your gender' , 'The answer should male or female');  
if (gender.toLowerCase() === 'male'){
console.log('male');
}else if (gender.toLowerCase() === 'female'){
console.log('female'); 
}
// }else{
// prompt ('please Reenter your gender!!')
// }



let age = prompt ("Enter your age");
if(age>0){
console.log(age);
}else if (age <= 0){
    alert('your age is less than or equal to zero!');
}



let WelcomingMessage= confirm ("Do you want to skip the welcoming message?");

if (WelcomingMessage === true){   

} else if (gender.toLowerCase() === 'male')
{
    alert("Welcome, MR. " + name);

}
else if (gender.toLowerCase() === 'female')
        {
            alert("Welcome, MS. " + name);

        } else {
            alert("Welcome " + name);
        }




