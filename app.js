let name = prompt ('Enter your name');
console.log(name);

let gender = prompt ('Enter your gender' , 'The answer should male or female');  

let age = prompt ("Enter your age");
if (age <= 0){
    alert('your age is less than or equal to zero!');
}



let WelcomingMessage= confirm ("Do you want to skip the welcoming message?");

if (WelcomingMessage === true){   

} else if (gender.toLocaleLowerCase() === 'male')
{
    alert("Welcome, MR. " + name);

}
else if (gender.toLocaleLowerCase() === 'female')
        {
            alert("Welcome, MS. " + name);

        } else {
            alert("Welcome " + name);
        }


