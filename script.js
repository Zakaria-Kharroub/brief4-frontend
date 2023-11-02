// alert("hello")
// FAQ function
const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq=>{
        faq.addEventListener("click",() =>{
            faq.classList.toggle("active");
        })
})

// popUp function

function togglePopup(){
    document.getElementById("pop").classList.toggle("active");
    document.getElementById("theMain").classList.toggle("active");
}