$('#home-btn').on('click',function()
{
    $('.home-div').css('display','block');
    $('.responsive-timeline').css('display','none');
    $('.contact-div').css('display','none');
    $('.projects-div').css('display','none');
});

$('#about-btn').on('click',function()
{
    $('.home-div').css('display','none');
    $('.responsive-timeline').css('display','block');
    $('.contact-div').css('display','none');
    $('.projects-div').css('display','none');
});

$('#projects-btn').on('click',function()
{
    $('.home-div').css('display','none');
    $('.responsive-timeline').css('display','none');
    $('.contact-div').css('display','none');
    $('.projects-div').css('display','block');
});

$('#contact-btn').on('click',function()
{
   /*  $('.home-div').css('display','none');
    $('.responsive-timeline').css('display','none');
    $('.contact-div').css('display','block');
    $('.projects-div').css('display','none'); */
    $( ".contact-div" ).addClass("show-contact-div");
    $( ".contact-div" ).show('slow');

});

$('#left-home-btn').on('click',function()
{
    $('.home-div').css('display','block');
    $('.responsive-timeline').css('display','none');
    $('.contact-div').css('display','none');
    $('.projects-div').css('display','none');
});

$('#left-about-btn').on('click',function()
{
    $('.home-div').css('display','none');
    $('.responsive-timeline').css('display','block');
    $('.contact-div').css('display','none');
    $('.projects-div').css('display','none');
});

$('#left-projects-btn').on('click',function()
{
    $('.home-div').css('display','none');
    $('.responsive-timeline').css('display','none');
   // $('.contact-div').css('display','none');
    $('.projects-div').css('display','block');
});


$('.project-imgs').on('click',function()
{
    ["ethereum","landmark_recogniton","morris_game","maze","word_puzzle"].forEach(project=>{
        if(project!==this.id)
            $('.project-description .'+project).css('display','none');
        else
            $('.project-description .'+project).css('display','block');
    });
});


$('#close_button').on('click',function() {
    $('.contact-div').hide('slow');
});

$('#right-github-btn').on('click',function() {
    window.location("https://github.com/sspanda92/");
});


var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1} 
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; 
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";   
            dots[slideIndex-1].className += " active";
        }
