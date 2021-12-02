// Speed control for the gradient, very good
function GradientSpeedControl(){
    var GradientSpeed = document.getElementById("GradientSpeed").value;
    console.log(GradientSpeed);
    document.documentElement.style.setProperty("--global-grad-speed",GradientSpeed+"s")
}