let anchorSelector = 'a[href^="#"]';
$(anchorSelector).on('click', function (e) {
   e.preventDefault();
   let destination = $(this.hash);
   let scrollPosition = destination.offset().top;
   let animationDuration = 700;
   $('html, body').animate({
       scrollTop: scrollPosition
   }, animationDuration);
});

var mobileChangedQuery = window.matchMedia('(max-width:768px)')

function handleMobileChange(e)
{
  if(e.matches)
  {
    console.log("mobile size");
  }
}
