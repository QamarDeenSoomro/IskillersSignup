var FullName = document.getElementById("FullName");
var FathersName = document.getElementById("FathersName");
var email = document.getElementById("email");
var upass = document.getElementById("upass");
var CNIC = document.getElementById("CNIC");
var MobileNo = document.getElementById("MobileNo");
var courses = document.getElementById("courses");
var qualification = document.getElementById("qualification");
var gender = document.getElementById("gender");
var laptop = document.getElementById("laptop");
var message = document.getElementById("message");
function signup() {
    if (FullName.value === "") {
        message.innerHTML = "Input your name"
        FullName.focus();
    } else if (FathersName.value === "") {
        message.innerHTML = "Input your Father's Name"
        FathersName.focus();
    } else if (email.value === "") {
        message.innerHTML = "Input Your email"
        email.focus();
    } else if (upass.value.length === 0) {
        message.innerHTML = "Input Your Password"
        upass.focus();
    } else if (upass.value.length < 7) {
        message.innerHTML = "Password is not Strong Enough"
        upass.focus();
    } else if (CNIC.value === "") {
        message.innerHTML = "Input your CNIC"
        CNIC.focus();
    } else if (CNIC.value.length != 13) {
        message.innerHTML = "Incorrect CNIC format"
        CNIC.focus();
    } else if (MobileNo.value === "") {
        message.innerHTML = "Input Mobile Number"
        MobileNo.focus();
    } else if (MobileNo.value.length != 11) {
        message.innerHTML = "Incorrect Mobile Number"
        MobileNo.focus();
    } else if (courses.value === "") {
        message.innerHTML = "Select a Course"
        courses.focus();
    } else if (qualification.value === "") {
        message.innerHTML = "Choose your qualification"
        qualification.focus();
    } else if (gender.value === "") {
        message.innerHTML = "Choose your Gender"
        gender.focus();
    }
    else {
        // for (let i = 0; i < laptop.length; i++) {
        //     if (laptop[i].cheked) {

        //     }

        // }
        if (laptop.checked) {


            var UserData = {
                Name: FullName.value,
                FName: FathersName.value,
                Email: email.value,
                UPass: upass.value,
                CNIC: CNIC.value,
                MobileNo: MobileNo.value,
                courses: courses.value,
                qualification: qualification.value,
                gender: gender.value,
                laptop: laptop.value,
            }
            message.innerHTML = "";
            console.log(UserData);
        } else {
            message.innerHTML = "You Must have laptop"
            laptop.focus();
        }
    }
}
function SUChange() {
    var SUform =  document.getElementById("SUform");
    var SIform =  document.getElementById("SIform");
    var SIlink = document.getElementById("login_link");
    var SUlink = document.getElementById("Signup_link");
    var title = document.getElementById("title");
    SUform.style.display="none";
    SIform.style.display="flex";
    SIlink.style.display="none";
    SUlink.style.display="block";
    title.innerHTML="iSkillers SignIn";
}

function SIChange() {
    var title = document.getElementById("title");
    var SUform =  document.getElementById("SUform");
    var SIform =  document.getElementById("SIform");
    var SIlink = document.getElementById("login_link");
    var SUlink = document.getElementById("Signup_link");
    SUform.style.display="flex";
    SIform.style.display="none";
    SIlink.style.display="block";
    SUlink.style.display="none";
    title.innerHTML="iSkillers Signup";
}
function SignIn() {
    var SIemail = document.getElementById("SIemail");
    var SIpass = document.getElementById("SIpass");
    var SImessage = document.getElementById("SImessage");
    if (SIemail.value==="") {
        SImessage.innerHTML="Please Input Email"
    } else if (SIpass.value===""){
        SImessage.innerHTML="Input your password"
    }
     else {
        alert("Login Confirm")
    }

}