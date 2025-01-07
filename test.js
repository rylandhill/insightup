document.addEventListener("keyup",function(){
    localStorage.setItem("answer1",document.getElementById("q1").value);
    localStorage.setItem("answer2",document.getElementById("q2").value);
    localStorage.setItem("answer3",document.getElementById("q3").value);
    localStorage.setItem("answer4",document.getElementById("q4").value);
    localStorage.setItem("answer5",document.getElementById("q5").value);
    localStorage.setItem("answer6",document.getElementById("q6").value);
    localStorage.setItem("answer7",document.getElementById("q7").value);
    localStorage.setItem("answer8",document.getElementById("q8").value);
    localStorage.setItem("answer9",document.getElementById("q9").value);
    var gender = document.getElementsByName("q10");
    for (let i=0;i<gender.length;i++){
        if(gender[i].checked){
            localStorage.setItem("gender",gender[i].value);
        }
    }
});


function main(){
    if(localStorage.getItem("answer9")!=null){
    document.getElementById("notDone").style.display = "none";
    document.getElementById("resultContent").style.display = "block";
    var ldlP = ["LDL-P"];
    var ldlC = ["LDL-C"];
    var hdlC = ["HDL-C"];
    var hdlP = ["HDL-P Total"];
    var trig = ["Triglyceride"];
    var chol = ["Total Cholesterol"];
    var smldl = ["Small LDL-P"];
    var ldlS = ["LDL Size"];
    var lpir = ["LP-IR Score"];
    var valList = [ldlP,ldlC,hdlC,hdlP,trig,chol,smldl,ldlS,lpir];
    for (let i=1;i<10;i++){
        if(i!=4&&i!=8){
            var currentVal = parseInt(localStorage.getItem("answer"+i.toString()).replace(/,/g,''),10);
        }else{
            var currentVal = parseFloat(localStorage.getItem("answer"+i.toString()),10);
        }
        var gender = localStorage.getItem("gender");
        if (i==1){
            if(currentVal<1100){
                document.getElementById("a1").innerHTML="You are within the optimal range for LDL-P.";
                valList[i-1].push("o");
            }else if(currentVal<1400){
                document.getElementById("a1").innerHTML="You are slightly above the optimal range for LDL-P, please refer to the treatment tab for information on how to lower LDL-P.";
                valList[i-1].push("slightly above the optimal range for ");
            }else if(currentVal<1800){
                document.getElementById("a1").innerHTML="You are nearing high levels of LDL-P, please refer to the treatment tab for information on how to lower LDL-P.";
                valList[i-1].push("nearing high levels of ");
            }else if(currentVal<2100){
                document.getElementById("a1").innerHTML="You are at high levels of LDL-P, please refer to the treatment tab for information on how to lower this as well as medical specialists you may want to speak to.";
                valList[i-1].push("at high levels of ");
            }else if(currentVal>=2100){
                document.getElementById("a1").innerHTML="You have very high levels of LDL-P, please refer to the treatment tab for information on how to lower this and to see medical specialists to help";
                valList[i-1].push("at very high levels of ");
            }else{
                document.getElementById("a1").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas"
            }
        }else if(i==2){
            if(currentVal<100){
                document.getElementById("a2").innerHTML="You are within the optimal range for LDL-C.";
                valList[i-1].push("o");
            }else if(currentVal<130){
                document.getElementById("a2").innerHTML="You are slightly above the optimal range for LDL-C, please refer to the treatment tab for information on how to lower LDL-C.";
                valList[i-1].push("slightly above the optimal range for ");
            }else if(currentVal<160){
                document.getElementById("a2").innerHTML="You are nearing high levels of LDL-C, please refer to the treatment tab for information on how to lower LDL-C.";
                valList[i-1].push("nearing high levels of ");
            }else if(currentVal<190){
                document.getElementById("a2").innerHTML="You are at high levels of LDL-C, please refer to the treatment tab for information on how to lower this as well as medical specialists you may want to speak to.";
                valList[i-1].push("at high levels of ");
            }else if(currentVal>=190){
                document.getElementById("a2").innerHTML="You have very high levels of LDL-C, please refer to the treatment tab for information on how to lower this and to see medical specialists to help";
                valList[i-1].push("at very high levels of ");
            }else{
                document.getElementById("a2").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==3){
            if((currentVal<40&&gender=="Male")||(currentVal<50&&gender=="Female")){
                document.getElementById("a3").innerHTML="You have low levels of HDL-C and could be at risk for cardiovascular diseases, please refer to the treatment tab for information on how to increase HDL levels";
                valList[i-1].push("at low levels of ");
            }else if(currentVal<60){
                document.getElementById("a3").innerHTML="Your levels of HDL-C are below the desireable level, please refer to the treatment tab for information on how to increase this";
                valList[i-1].push("below the desireable level of ");
            }else if(currentVal>=60){
                document.getElementById("a3").innerHTML="Your levels of HDL-C are within the desireable level";
                valList[i-1].push("o");
            }else{
                document.getElementById("a3").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==4){
            if(currentVal<30.5){
                document.getElementById("a4").innerHTML="You have low levels of HDL-P, please refer to the treatment page to learn how to increase this";
                valList[i-1].push("at low levels of ");
            }else if(currentVal>30.5){
                document.getElementById("a4").innerHTML="You are within the optimal range for HDL-P";
                valList[i-1].push("o");
            }else{
                document.getElementById("a4").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==5){
            if(currentVal<150){
                document.getElementById("a5").innerHTML="You are within the optimal range for triglycerides"
                valList[i-1].push("o");
            }else if(currentVal<200){
                document.getElementById("a5").innerHTML="You have borderline high amounts of triglycerides, please refer to our treatment page for information on reducing them";
                valList[i-1].push("at borderline high amounts of ");
            }else if(currentVal<300){
                document.getElementById("a5").innerHTML="You have high amounts of triglycerides, please refer to our treatment page for information on reducing them";
                valList[i-1].push("at high amounts of ");
            }else if(currentVal>=300){
                document.getElementById("a5").innerHTML="You have very high amounts of triglycerides, please refer to our treatment page for information on reducing them";
                valList[i-1].push("at very high amounts of ");
            }else{
                document.getElementById("a5").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==6){
            if(currentVal>=240){
                document.getElementById("a6").innerHTML="You have very high levels of cholesterol and could be at risk for cardiovascular diseases, please refer to the treatment tab for information on how to reduce cholesterol levels";
                valList[i-1].push("at very high levels of ");
            }else if(currentVal>=200){
                document.getElementById("a6").innerHTML="Your levels of cholesterol are above the desireable level, please refer to the treatment tab for information on how to increase this";
                valList[i-1].push("above the desireable level of ");
            }else if(currentVal<200){
                document.getElementById("a6").innerHTML="Your levels of cholesterol are within the desireable level";
                valList[i-1].push("o");
            }else{
                document.getElementById("a5").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==7){
            if(currentVal<=527){
                document.getElementById("a7").innerHTML="Your small LDL-P levels are within the optimal range";
                valList[i-1].push("o");
            }else if(currentVal>527){
                document.getElementById("a7").innerHTML="Your small LDL-P levels are above the optimal range, please refer to the treatment page for information on how to decrease this";
                valList[i-1].push("above the optimal range of ");
            }else{
                document.getElementById("a7").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==8){
            if(currentVal<=20.5){
                document.getElementById("a8").innerHTML="Your LDL size is below the optimal range, please refer to to our treatment page for information on how to increase this";
                valList[i-1].push("below the optimal range of ");
            }else if(currentVal>20.5){
                document.getElementById("a8").innerHTML="Your LDL size is within the optimal range";
                valList[i-1].push("o");
            }else{
                document.getElementById("a8").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }else if(i==9){
            if(currentVal<=45){
                document.getElementById("a9").innerHTML="Your LP-IR score is within the optimal range";
                valList[i-1].push("o");
            }else if(currentVal>45){
                document.getElementById("a9").innerHTML="Your LP-IR score is above the optimal range, please refer to our treatment page for information on how to reduce this";
                valList[i-1].push("above the optimal range for ");
            }else{
                document.getElementById("a9").innerHTML="You entered an invalid character(s). Please make sure to only put numbers with no commas";
            }
        }
    }
    for (var j=0;j<valList.length;j++){
        localStorage.setItem(valList[j][0],valList[j][1]);
    }
}else{
    document.getElementById("notDone").style.display = "block";
    document.getElementById("resultContent").style.display = "none";
}
}

function textToHex(text){
    var result = []
    if (text!=null){
    for (i=0;i<text.length;i++){
        result.push(text.charCodeAt(i).toString(16));
    }
    }
    return result.join("");
}
function hexToText(hex){
    var result = [];
    for (i=0;i<hex.length;i+=2){
        result.push(String.fromCharCode(parseInt(hex[i]+hex[i+1],16)));
    }
    return result.join("")
}