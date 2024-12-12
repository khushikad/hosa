

user = localStorage.getItem("question1");
document.getElementById("user").innerHTML = "Is there a lump? "+ user;

follow = localStorage.getItem("follow");
document.getElementById("follow").innerHTML = "How severe is the pain? "+ follow + "/10";


question2 = localStorage.getItem("question2");
document.getElementById("question2").innerHTML = "Is there a pink/red/white patch? "+ question2;

question3 = localStorage.getItem("question3");
document.getElementById("question3").innerHTML = "Is there a lesion without any injury? "+ question3;

question4 = localStorage.getItem("question4");
document.getElementById("question4").innerHTML = "Is there growth and how big is it? "+ question4;

question5 = localStorage.getItem("question5");
document.getElementById("question5").innerHTML = "Is it translucent and shiny and are visible blood vessels ? "+ question5;


question6 = localStorage.getItem("question6");
document.getElementById("question6").innerHTML = "Is there patch of skin that crusts and oozes ? "+ question6;

question7 = localStorage.getItem("question7");
document.getElementById("question7").innerHTML = "Have you experienced any of the following: fatigue, weight loss, loss of appetite, trouble breathing, cough, bone pain, headaches, seizures, swelling of the liver ? "+ question7;

question8 = localStorage.getItem("question8");
document.getElementById("question8").innerHTML = "Is there patch of skin that crusts and oozes ? "+ question8;

question9 = localStorage.getItem("question9");
document.getElementById("question9").innerHTML = "Is there patch of skin that crusts and oozes ? "+ question9;


/////////////////////////

// if((user=="yes") && ((follow=="1")||(follow=="2")||(follow=="3"))){
    
//     if(question2=="yes"){
       
//          if(question3=="yes"){
//             document.getElementById("stage").innerHTML = "Stage 0-1";
    
//         }
//         else{
//             document.getElementById("stage").innerHTML = "Possibly Stage 0-1";
//         }

//     }
//     else{
//         document.getElementById("stage").innerHTML = "Possibly Stage 0-1";
//     }
    
//     if(question4=="less than 2cm"){
//         document.getElementById("stage").innerHTML = "Stage 0-1";
//        }
//        else{
//            document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 
           
    
//        }
//        if(question5=="yes"){
//            document.getElementById("stage").innerHTML = "Stage 0-1";
//        }
//        else{
//            document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 
           
    
//        }

//        if(question6=="yes"){
//            document.getElementById("stage").innerHTML = "Stage 0-1";
//        }
//        else{
//            document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 
           
    
//        }
    
// }


//  /////////////////////////



// if((user=="yes") && ((follow=="4")||(follow=="5"))){
//     if(question2=="yes"){

       
//     } 
//      document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 

//         if(question3=="yes"){
//             document.getElementById("stage").innerHTML = "Stage 2";
    
//         }
//         else{
//             document.getElementById("stage").innerHTML = "Possibly Stage 2";
//         }

//     }
//     else{
//         document.getElementById("stage").innerHTML = "Possibly Stage 2";
//     }


//     if(question6=="yes"){
//         document.getElementById("stage").innerHTML = "Stage 0-1";
//         }
//         else{
//             document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 
//         }
//     if(question4=="2cm"){
//   document.getElementById("stage").innerHTML = "Stage 2";
//     }
//     else{
//         document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 
        
 
//     }

//    if(question5=="yes"){
//     document.getElementById("stage").innerHTML = "Stage 0-1";
// }
// else{
//     document.getElementById("stage").innerHTML = "Probably not Stage 0-1"; 
// }



// /////////////////////////


// if((user=="yes") && ((follow=="6")||(follow=="7"))){
//     if(question2=="yes"){
        
        

//         if(question3=="yes"){
//             document.getElementById("stage").innerHTML = "Stage 3";
    
//         }
//         else{
//             document.getElementById("stage").innerHTML = "Possibly Stage 3";
//         }

//     }
//     else{
//         document.getElementById("stage").innerHTML = "Possibly Stage 3";
//     }
//     if(question5=="yes"){
//         document.getElementById("stage").innerHTML = "Stage 0-1";
//     }
//     else{
//         document.getElementById("stage").innerHTML = "Probably not Stage 3"; 

//         if(question4=="more than 2cm"){
//             document.getElementById("stage").innerHTML = "Stage 3";
//        }else{
//            document.getElementById("stage").innerHTML = "Probably not Stage 3"; 
           
    
//        }
// }




// /////////////////////////



// if((user=="yes" )&& ((follow=="8")||(follow=="9")||(follow=="10"))){
//     if(question2=="yes"){
//         if(question4=="more than 2cm"){
//           document.getElementById("stage").innerHTML = "Stage 4";
//         }

//        if(question5=="yes"){
//         document.getElementById("stage").innerHTML = "Stage 4";
//     }
       
//         if(question3=="yes"){
//             document.getElementById("stage").innerHTML = "Stage 4";
    
//         }
//         else{
//             document.getElementById("stage").innerHTML = "Possibly Stage 4";
//         }

//     }
//     else{
//         document.getElementById("stage").innerHTML = "Possibly Stage 4";
//     }
// }
// }






















if (user === "yes") {
    if ((follow=="1")||(follow== "2")||(follow== "3")) {
        // Handle Stage 0-1 conditions
        if (question3 === "yes") {
            document.getElementById("stage").innerHTML  = "Stage 0-1";
        } else {
            document.getElementById("stage").innerHTML = "Possibly Stage 0-1";
        }
        if (question4 === "less than 2cm") {
            document.getElementById("stage").innerHTML = "Stage 0-1";
        } else {
            document.getElementById("stage").innerHTML= "Probably not Stage 0-1";
        }
        if (question5 == "yes" || question6 == "yes") {
            document.getElementById("stage").innerHTML = "Stage 0-1";
        }
        else{
            document.getElementById("stage").innerHTML = "Probably not Stage 0-1";
        }
    } else if ((follow=="3")||(follow== "4")) {
        // Handle Stage 2 conditions
        if (question3 === "yes") {
            document.getElementById("stage").innerHTML = "Stage 2";
        } else {
            document.getElementById("stage").innerHTML = "Possibly Stage 2";
        }
        if (question4 === "2cm") {
            document.getElementById("stage").innerHTML = "Stage 2";
        }
        if (question5 == "yes" || question6 == "yes") {
            document.getElementById("stage").innerHTML = "Stage 0-1";
        }
        else{
            document.getElementById("stage").innerHTML = "Probably not Stage 0-1";
        }
    } else if ((follow=="5")||(follow== "6")) {
        // Handle Stage 3 conditions
        if (question3 === "yes") {
            document.getElementById("stage").innerHTML = "Stage 3";
        } else {
            document.getElementById("stage").innerHTML = "Possibly Stage 3";
        }
        if (question4 === "more than 2cm") {
            document.getElementById("stage").innerHTML = "Stage 3";
        }
        if (question5 == "yes" || question6 == "yes") {
            document.getElementById("stage").innerHTML = "Stage 0-1";
        }
        else{
            document.getElementById("stage").innerHTML = "Probably not Stage 0-1";
        }
    } else if ((follow=="7")||(follow== "8")||(follow== "9")) {
        // Handle Stage 4 conditions
        if (question3 === "yes") {
            document.getElementById("stage").innerHTML = "Stage 4";
        } else {
            document.getElementById("stage").innerHTML = "Possibly Stage 4";
        }
        if (question4 === "more than 2cm") {
            document.getElementById("stage").innerHTML = "Stage 4";
        }
        if (question5 == "yes" || question6 == "yes") {
            document.getElementById("stage").innerHTML = "Stage 0-1";
        }
        else{
            document.getElementById("stage").innerHTML = "Probably not Stage 0-1";
        }
    }
}
