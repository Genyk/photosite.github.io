$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});



function addImages(category, num){
    var dir = "../images/gallery/"+category+"/";
    var fileextension = ".jpg";
    var i = "1";

    $(function imageloop(){
      $("<img />").attr('src', dir + i + fileextension ).appendTo(".photos")
      .wrapAll('<div class="gallery_product '+'filter '+category+' height'+getRandomInt(1,4) +'"/>');

      if (i==num){
      }
      else{
        i++;
        imageloop();
      };
    });   
  }
  addImages("portrait",2);
  addImages("art_nu",2);
  addImages("reportage",2);
  addImages("wedding",2);

//   
// var photos = document.querySelector('.photos');
//   photos.querySelectorAll('.gallery_product').forEach(function (item) {
//     item.addEventListener('click', function () {        
//         item.classList.toggle('full');        
//     });
// });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }