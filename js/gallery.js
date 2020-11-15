$(document).ready(function () {

  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
      // $(this).removeClass("btn");


    }

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");
  });
});



$.get("direader.php","img", function(data) {
  console.log(data); //"data" contains whatever someScript.php returned
  $(".photos").append(data);

});



// function addImages(category, num){
//     var dir = "../images/gallery/"+category+"/";
//     var fileextension = ".jpg";
//     var i = "1";

//     $(function imageloop(){
//       $.get(dir+i+fileextension).fail(function() { 
//         console.log("error dir "+category+" file "+i);
//         return;
//       });
//       if(category=="video")
//       {
//         $("<video />").attr('src', dir + i + ".mp4" ).addClass("content").appendTo(".photos")
//         .wrapAll('<div class="gallery_product '+'filter '+category+' height'+getRandomInt(1,6) +'"/>');
//       }
//       else
//       {
//       $("<img />").attr('src', dir + i + fileextension ).addClass("content").appendTo(".photos")
//       .wrapAll('<div class="gallery_product '+'filter '+category+' height'+getRandomInt(1,6) +'"/>').attr("loading","lazy");
//             // if ( img == null ) {
//             //   console.log("error")
//             // }
//       }


//   //     $.get(dir+i+fileextension, function(status) {  
//   //       console.log("File request status: "+status); 
//   //    });
//   //    if (request.status === 404) {
//   //     console.log("file"+ url + " doesn't exist");
//   // } 

//       // img = dir+i+fileextension;
//       // img.onerror = function() { console.log('Error'+i); };
//       if (i==num){
//       }
//       else{
//         i++;
//         imageloop();
//       };


//     });   
//   }
/*--------------------getimgs
function addImages(category) {

  var dir = "images/gallery/"+category+"/";
  var fileextension = ".jpg";
  var i = 1;
  function imgloop(n) {
    // ,async: false
    $.ajax({url:dir + n + fileextension}).fail(function() {
      console.log("fail dir " + dir + " file " + n);
      n=-1;
      console.log("n="+n);
    }).done(function(){
      // $("<img />").attr('src', dir + i + fileextension ).addClass("content").appendTo(".photos")
      // .wrapAll('<div class="gallery_product '+'filter '+category+' height'+getRandomInt(1,6) +'"/>').attr("loading","lazy");
    console.log("Done, show "+n);
  });
  console.log("return n = "+n);
  return n;
  }
  while (i < 10) {
    console.log("i in while = " + i);
    console.log("imgloop = "+imgloop(i));

    if(imgloop(i)=="-1")
    {
      console.log("return");
      return;
    }
    i++;
  }
}


addImages("lookbook");
getimgs----------------------*/ 

// function addvideo(num){
//   var dir = "../images/gallery/video/";
//   var fileextension = ".mp4";
//   var i = "1";

//   $(function vidloop(){
//     $("<video />").attr('src', dir + i + fileextension ).appendTo(".photos")
//     .wrapAll('<div class="gallery_product '+'filter video height'+getRandomInt(1,6) +'"/>');

//     if (i==num){
//     }
//     else{
//       i++;
//       vidloop();
//     };
//   });   
// }


// addImages("portrait",2);
// addImages("art_nu",2);
// addImages("reportage",2);
// addImages("wedding",5);
// addImages("lookbook",5);
// addImages("video",1);


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

// lazyload
//   var observer = new IntersectionObserver(
//     (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio > 0.0) {
//                 img = entry.target;
//                 if (!img.hasAttribute('src')) {
//                     alert('will load the image!!!');
//                     img.setAttribute('src', img.dataset.src);
//                 }
//             }
//         });
//     },
//     {}
// )
// for (let img of document.getElementsByTagName('img')) {
//     observer.observe(img);
// }


// $(document).ready(function() {
// $(".photos img").click(function (e) {        
//   $(this).toggleClass('full');
// });
// });

// open content
$(document).ready(function () {
  $(".content").click(function (e) {
    var tagname = this.tagName;
    if (tagname == "VIDEO") {
      var show = tagname + ' controls="controls"';
    }
    else {
      var show = tagname;
    }
    var cont = '<div class="full"><div class="bg"><' + show + ' src="' + $(this).attr("src") + '" /> </div></div>';
    $("body").append(cont);
    $(".full " + tagname).click(function () {
      if (tagname == "VIDEO") {
        $('.full VIDEO').get(0).load();
      }
      $('.full').remove();
    });
  });
});