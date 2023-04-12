'use strict';

let username = prompt ('Enter your name');
console.log(username);

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
    alert("Welcome, MR. " + username);

}
else if (gender.toLowerCase() === 'female')
        {
            alert("Welcome, MS. " + username);

        } else {
            alert("Welcome " + username);
        }


    function newQuestions(array) {
        let questionArray=[]
        let questionNum1= prompt(username +' Is this your name?', 'Yes/No')
        let questionNum2= prompt('Are you Ok '+ username+' ?' , 'Yes/No')
        let questionNum3= prompt('Do you need any help?', 'Yes/No')
        questionArray.push(questionNum1,questionNum2,questionNum3)
        for(let i = 0; i<questionArray.length;i++){
            if(questionArray[i] =='yes' || questionArray[i] =='no'){
                console.log(questionArray[i])
            }
             else{
                console.log('invalid')
            }

        }
        return questionArray
    }   
    newQuestions()