


let form1= document.querySelector(".post form");
let newsBtn = document.querySelector("#newsbtn");
let newsPoster = document.querySelector("#newsposter");

let contact = document.querySelector("#contact");
let cn= document.querySelector("#cn");
let form= document.querySelector("form");
let stat= document.querySelector("#status");
let register= document.querySelectorAll(".cards .register");
let crosscard= document.querySelector("#card i")
let post = document.querySelector(".post")
let cross = document.querySelector(".post i")



newsBtn.addEventListener("click", () => {
    if (newsPoster.style.display === "none" || newsPoster.style.display === "") {
        newsPoster.style.display = "block";
        
    } else {
        newsPoster.style.display = "none";
    }
     
});


cn.addEventListener("click",function(e){
    e.preventDefault()
    contact.scrollIntoView({
        behavior:"smooth"
    })
})
register.forEach(function(btn){
    btn.addEventListener("click",function(){
        post.style.display="block"

    }) 
}) 
cross.addEventListener("click",function(){
        post.style.display="none"
        
}) 
form1.addEventListener("submit",  function(e) {
    e.preventDefault();
})

  form.addEventListener("submit",  function(e) {
    e.preventDefault(); 

    let data = new FormData(form);

    fetch("https://formspree.io/f/mpwvlvgb", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        stat.innerHTML = " Form Submitted Successfully!";
        form.reset();
      } else {
        stat.innerHTML = " Something went wrong!";
      }
    }).catch(error => {
      stat.innerHTML = " Error submitting form!";
    });
  });


  let con = gsap.to("#card form",{
   y:1400,
   duration:1


})
con.pause()





let loader = document.getElementById("loader");
let website = document.getElementById("website");

window.addEventListener("load", function () {

   setTimeout(() => {
    loader.classList.add("hide");
    
  setTimeout(() => {
    loader.style.display = "none";
    website.style.display = "block";
     }, 600);
  }, 2000); // 3 seconds
});
