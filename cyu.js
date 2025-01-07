document.getElementById("submitButton").addEventListener("click",cyuDone);
function cyuDone(){
    var answer1List = document.getElementsByName("LDLmeasure");
    var answer1;
    for (var i=0;i<answer1List.length;i++){
        if (answer1List[i].checked){
            answer1 = answer1List[i];
        }
    }
    var answer2List = document.getElementsByName("category");
    var answer2;
    for (var i=0;i<answer2List.length;i++){
        if (answer2List[i].checked){
            answer2 = answer2List[i];
        }
    }
    var answer3List = document.getElementsByName("HDLC");
    var answer3;
    for (var i=0;i<answer3List.length;i++){
        if (answer3List[i].checked){
            answer3 = answer3List[i];
        }
    }
    var answer4List = document.getElementsByName("graph");
    var answer4;
    for (var i=0;i<answer1List.length;i++){
        if (answer4List[i].checked){
            answer4 = answer4List[i];
        }
    }
    var answer5List = document.getElementsByName("next");
    var answer5;
    for (var i=0;i<answer5List.length;i++){
        if (answer5List[i].checked){
            answer5 = answer5List[i];
        }
    }
    var score=0;
    var rightAns = document.getElementsByClassName("correct");
    if (answer1!=undefined&&answer2!=undefined&&answer3!=undefined&&answer5!=undefined){
    for (var i=0;i<rightAns.length;i++){
        rightAns[i].style.color = "green";
    }
    }
    if (answer1.value!="The number of LDL particles"){
        answer1.previousElementSibling.style.color = "red";
    }else{
        score++;
    }
    if (answer2.value!="Low"){
        answer2.previousElementSibling.style.color = "red";
    }else{
        score++;
    }
    if (answer3.value!="The amount of high-density lipoprotein (good) cholesterol in your blood"){
        answer3.previousElementSibling.style.color = "red";
    }else{
        score++;
    }
    if (answer4.value!="Low risk as LDL levels have decreased to the low range"){
        answer4.previousElementSibling.style.color = "red";
    }else{
        score++;
    }
    if (answer5.value!="Contact a doctor to discuss your results, ask questions, or request your next blood test"){
        answer5.previousElementSibling.style.color = "red";
    }else{
        score++;
    }
    document.getElementById("score").innerHTML=score.toString()+"/5";
}