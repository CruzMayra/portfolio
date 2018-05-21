/*---------- función que centraliza al resto de las funciones ----------*/
function loadPage() {
  $('.load-landing').click(hideHome);
  $('.view-venus').click(viewVenus)
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

 const viewVenus = e => {
   e.preventDefault();
   page('/venus-ecommerce')
 }

 page('/venus-ecommerce', () => {
   $('#content-me').empty();
})

 $(document).ready(loadPage);

 page.start({ hashbang: true })