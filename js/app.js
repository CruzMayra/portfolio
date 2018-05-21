/*---------- función que centraliza al resto de las funciones ----------*/
function loadPage() {
  $('.load-landing').click(hideHome);
 }

 const hideHome = (e) => {
   e.preventDefault();
   $('#home').removeClass('show');
   $('#home').addClass('hide');
   showPortfolio();
 }

 const showPortfolio = () => {
  $('#landing').removeClass('hide');
  $('#landing').addClass('show');
 }

 $(document).ready(loadPage);