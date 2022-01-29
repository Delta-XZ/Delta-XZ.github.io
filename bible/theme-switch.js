function changeTheme(){
    // Return of the querySelector, shoutout my 9th grade web gallery :)
    // And even after what has it been, 1 year as of today, still no use for getElementByID();
    let body_class = document.querySelector("body");
     if (body_class.classList == "light-theme"){
         body_class.className="dark-theme"
     }
     else if (body_class.classList == "dark-theme"){
        body_class.className="light-theme"
    }
}
// Sorry for coding in satans language but I have no other choice