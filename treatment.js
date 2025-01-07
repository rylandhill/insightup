function checkDone(){
    if(localStorage.getItem("answer9")!=null){
        document.getElementById("notDone").style.display = "none";
        document.getElementById("treatmentContent").style.display = "block";
        main();
    }else{
        document.getElementById("notDone").style.display="block";
        document.getElementById("treatmentContent").style.display="none";
    }
}

function main(){
    const keyList=["LDL-P","LDL-C","HDL-C","HDL-P Total","Triglyceride","Total Cholesterol","Small LDL-P","LDL Size","LP-IR Score"];
    var ldlLinks=["American Heart Association","split","https://www.heart.org/en/health-topics/cholesterol/hdl-good-ldl-bad-cholesterol-and-triglycerides/lower-your-ldl","split","Mayo Clinic","split","https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/in-depth/reduce-cholesterol/art-20045935#:~:text=Decreasing%20your%20consumption%20of%20saturated,bought%20cookies%2C%20crackers%20and%20cakes."];
    localStorage.setItem("LDL links",ldlLinks);
    var hdlLinks = ["UMass Chan","split","https://www.umassmed.edu/nutrition/Cardiovascular/handouts/raising-hdl/","split","Mayo Clinic","split","https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/in-depth/hdl-cholesterol/art-20046388"];
    localStorage.setItem("HDL links",hdlLinks);
    var trigLinks = ["Mayo Clinic","split","https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/in-depth/triglycerides/art-20048186","split","WebMD","split","https://www.webmd.com/cholesterol-management/ss/slideshow-triglycerides-tips"];
    localStorage.setItem("Triglyceride links",trigLinks);
    var cholLinks = ["Mayo Clinic","split","https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/in-depth/reduce-cholesterol/art-20045935","split","Harvard Health","split","https://www.health.harvard.edu/heart-health/11-foods-that-lower-cholesterol"];
    localStorage.setItem("Total Cholesterol links",cholLinks);
    var smallLinks = ["Medical News Today","split","https://www.medicalnewstoday.com/articles/small-dense-ldl#:~:text=Some%20strategies%20that%20can%20help,reaching%20a%20moderate%20body%20weight","split","Very Well Health","split","https://www.verywellhealth.com/what-is-small-dense-ldl-698072"];
    localStorage.setItem("Small LDL links",smallLinks);
    var sizeLinks = ["Health Central","split","https://www.healthcentral.com/article/your-small-ldl-action-plan","split","Science Direct","split","https://www.sciencedirect.com/science/article/pii/S0002916522004749#:~:text=Nonsystematic%20reviews%20have%20suggested%20that,compared%20with%20higher%2Dcarbohydrate%20diets."];
    localStorage.setItem("LDL Size links",sizeLinks);
    var lpirLinks = ["Rupa Health","split","https://www.rupahealth.com/biomarkers/lp-ir-score","split","Health Matters","split","https://healthmatters.io/understand-blood-test-results/lp"];
    localStorage.setItem("LP links",lpirLinks);
    for (var i=0;i<keyList.length;i++){
        if (localStorage.getItem(keyList[i])!="o"){
            var subhead = '<h3 class="subheader">'+keyList[i]+'</h5>';
            document.getElementById("treatmentContent").innerHTML += subhead;
            var subsubhead = '<h5 class="subsubheader">'+basic(localStorage.getItem(keyList[i]),keyList[i])+'</h5>';
            document.getElementById("treatmentContent").innerHTML += subsubhead;
            var linkList = (localStorage.getItem(keyList[i].split("-")[0]+" links")).split(",split,");
            var link1 = '<h5 class="subsubheader"><a target="_blank" href='+linkList[1]+">"+linkList[0]+"</a></h5>";
            var link2 = '<h5 class="subsubheader"><a target="_blank" href='+linkList[3]+">"+linkList[2]+"</a></h5>";
            document.getElementById("treatmentContent").innerHTML += link1;
            document.getElementById("treatmentContent").innerHTML += link2;
        }
    }
    document.getElementById("treatmentContent").innerHTML += '<h3 class="subheader">Link to Recommended Online Dieticians:</h3>';
    document.getElementById("treatmentContent").innerHTML += '<h5 class="subsubheader"><a target="_blank" href="https://www.topnutritioncoaching.com/">Top Nutrition Coaching</a></h5>'
}

function basic(level,name){
    return "You are "+level+name+", and the below links can help you learn how to get those into healthier ranges.";
}