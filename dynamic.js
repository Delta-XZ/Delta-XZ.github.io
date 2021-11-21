// too lazy to type this whole thing :)
function RemByID(id){
    document.getElementById(id).remove();
}
function DisplayMenu(){
    const menu = document.getElementById("p-config-menu");
    menu.style.visibility = "visible";
}
function GradientSpeedControl(){
    var GradientSpeed = document.getElementById("GradientSpeed").value;
    console.log(GradientSpeed)
    document.getElementById("top-gradient-thing").style.animationDuration = String(GradientSpeed+"s");
}
// stolen from StackOverflow, I don't know anything about JS
function CheckCommand(){
    var userInput = document.getElementById("TTY-submit");
    if((userInput.value=="onetapv2.dll")){
        document.getElementById("Access").innerHTML= "Successfully injected to running process index.html";
        RemByID("TTY-submit");
        RemByID("SubmitCommand");
        DisplayMenu();
    }
    else{
        document.getElementById("Access").innerHTML="DLL couldn't be found...";
    }

}