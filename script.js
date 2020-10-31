

    // Assignment Code

   // selecting the button from HTML
    var generateBtn = document.querySelector("#generate");

    //  four array to satisfy the user requests

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperhCharacter = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
    var spicialCharacter = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","#","$","@","<", "=",">","%", ","]
    var number = ["0","1","2","3","4","5","6","7","8","9"]

  // two public functions to generate random array value 

    function randomInt(item){
    return Math.floor(Math.random()*Math.floor(item))
    }

    function random (choices){
    var index = randomInt(choices.length)
    return choices[index]

    } 

 
   // one function to genetat the password

    function generatePassword(){

    // if statement to make sure the length not less than 8 and 
    // more than
    
        var lenght = prompt("Choose a password length from 8 to 128.  ")
        var generatedPasswordAll = [];
        while(lenght < 8 || lenght > 128){
        alert('Invalid input');
         lenght = prompt("Choose a password length from 8 to 128. ")
    } 

    // four confirms 

    var lowerCaseQuestion = confirm('Do you want to include lower case characters?');
    var upperCaseQuestion = confirm('do you want to include upper Case characters?');
    var SpecialCharacterQuestion = confirm('do you want to include spicial Characters?');
    var numberQuestion = confirm('do you want to include numbers?');
    
     // numbers

    if (numberQuestion){
       
        generatedPasswordAll =  generatedPasswordAll.concat(number);
             
     
     //lower case
 
     }if (lowerCaseQuestion){
       
       generatedPasswordAll =  generatedPasswordAll.concat(lowerCase);
            
    
    //upper case

    }if (upperCaseQuestion){
         
       generatedPasswordAll  =  generatedPasswordAll.concat(upperhCharacter);
            


    // spicial character

    } if (SpecialCharacterQuestion){
    
        generatedPasswordAll =  generatedPasswordAll.concat(spicialCharacter);
    }

     var finalPassword = "";

     // looping over the array that has all user choicess 

   for(let i = 0 ; i< lenght; i++){
       finalPassword = finalPassword + random(generatedPasswordAll)
       

   }
   
         return finalPassword
    }

   // 

    function writePassword() {
    
    var password =  generatePassword();
    
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);




    




