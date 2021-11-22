//  self invoking-function - discover category
(() => {

    const card_links_slideshow = document.querySelector(".card-links-slideshow-container");

    const card_links_slides_holder = document.querySelector(".card-links-slides-holder");

    const card_links_slides = document.querySelectorAll(".card-links-slide");
    const card_links_nextbtn = document.getElementById("card-links-nextbtn");
    const card_links_prevbtn = document.getElementById("card-links-prevbtn");


    const slide_width = card_links_slideshow.clientWidth;
    let slideIndx = 0;

    console.log(slide_width);

    card_links_slides_holder.style.transform = "translateX(" + (-slideIndx * slide_width) + "px)";

    card_links_nextbtn.addEventListener("click", next_slide);
    card_links_prevbtn.addEventListener("click", prev_slide);

    function next_slide() {

        card_links_slides_holder.style.transition = "transform 0.5s ease";

        slideIndx++;

        if (slideIndx > card_links_slides.length - 1) {
            slideIndx = 0;
        }

        card_links_slides_holder.style.transform = "translateX(" + (-slideIndx * slide_width) + "px)";

    }

    function prev_slide() {

        card_links_slides_holder.style.transition = "transform 0.5s ease";

        slideIndx--;

        if (slideIndx < 0) {
            slideIndx = card_links_slides.length - 1;
        }

        card_links_slides_holder.style.transform = "translateX(" + (-slideIndx * slide_width) + "px)";
    }

})();

//  self invoking-function - Appointments category
(() => {

    const appointment_cards = document.querySelector(".appointment-cards");

    const appointment_cards_slides_holder = document.querySelector(".appointment-cards-slides-holder");

    const appointment_cards_slide = document.querySelectorAll(".appointment-cards-slide");
    const appointment_cards_nextbtn = document.getElementById("appointment-cards-nextbtn");
    const appointment_cards_prevbtn = document.getElementById("appointment-cards-prevbtn");


    const slide_width = appointment_cards.clientWidth;
    let slideIndx = 0;

    console.log(slide_width);

    appointment_cards_slides_holder.style.transform = "translateX(" + (-slideIndx * slide_width) + "px)";

    appointment_cards_nextbtn.addEventListener("click", next_slide);
    appointment_cards_prevbtn.addEventListener("click", prev_slide);

    function next_slide() {

        appointment_cards_slides_holder.style.transition = "transform 0.5s ease";

        slideIndx++;

        if (slideIndx > appointment_cards_slide.length - 1) {
            slideIndx = 0;
        }

        appointment_cards_slides_holder.style.transform = "translateX(" + (-slideIndx * slide_width) + "px)";

    }

    function prev_slide() {

        appointment_cards_slides_holder.style.transition = "transform 0.5s ease";

        slideIndx--;

        if (slideIndx < 0) {
            slideIndx = appointment_cards_slide.length - 1;
        }

        appointment_cards_slides_holder.style.transform = "translateX(" + (-slideIndx * slide_width) + "px)";
    }

})();