let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a')

window.onscroll= () =>{
    sections.forEach(sec =>{
        let top = window.screenY;
        let offset= sec.offsetTop -150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if (top >= offset && top < offset+height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav ul li a[href=' + id + ']').classList.add(active)
            })
        }
    })
}

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Form submission with EmailJS
    
function sendMail(){
    const form = document.getElementById("contact-form");
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("text_message").value
    }
    emailjs.send("service_mn9mj5h", "template_6pavm1g", params).then(function (res){
        console.log(res.status);
        alert("Your message has been sent successfully!");
        form.reset(); // Reset the form
    }).catch(function(err) {
        console.error("Failed to send email:", err);
        alert("Failed to send your message. Please try again later.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Resume download
    const resumeButton = document.getElementById("download-resume");
    resumeButton.addEventListener("click", function (e) {
        const link = document.createElement("a");
        link.href = "assets/resume.pdf";
        link.download = "Resume.pdf";
        link.click();
    });
});
