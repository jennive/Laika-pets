$(document).ready(function(){
/*rotate and deploy search */
    
    $('#search-icon').click(function(){
      $(this).toggleClass('fa-times');
      $('#search-box').toggleClass('active');
    });
  /*rotate hamburger menu*/
    
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#search-icon').removeClass('fa-times');
      $('#search-box').removeClass('active');
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      /*sticky header*/
      
      if($(window).scrollTop() > 0){
        $('header').addClass('sticky');
      }else{
        $('header').removeClass('sticky');
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });

  //dates json

  const card = document.createElement('#products card');

function updateProducts(){
    fetch('db_products.json')
        .then(respuesta => respuesta.json()) //format info .json
        .then(products => {
            products.forEach.call(product => {
                const card = document.createElement('card');
                card.classList='card';
                card.innerHTML += `
                    
                    <div>${product.nombre}
                    <h4>${product.precio}</h4>
                    <h4>${product.laika.member}</h4>
                    </div>
                `;
                tabla.appendChild(row);                
            });
        }) // show info
        .catch(error => console.log('Hubo un error : ' + error.message))
}

updateProducts();
