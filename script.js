let newsBtn = document.querySelector("#newsbtn");
let newsPoster = document.querySelector("#newsposter");

let contact = document.querySelector("#contact");
let cn= document.querySelector("#cn");
let form= document.querySelector("form");
let stat= document.querySelector("#status");


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
        stat.innerHTML = "✅ Form Submitted Successfully!";
        form.reset();
      } else {
        stat.innerHTML = "❌ Something went wrong!";
      }
    }).catch(error => {
      stat.innerHTML = "❌ Error submitting form!";
    });
  });

