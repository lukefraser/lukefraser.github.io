  /* GLOBAL NAV DROPDOWN MENU */
  
  $(document).ready(function() {
    
    $(".dropdown").hover(
      function(){
        $(this).children(".sub-menu").slideDown(400);
      },
      function(){
        $(this).children(".sub-menu").slideUp(400);
      }
    );
  });
  
  /* PROFILE PIC GLOW */
  
  $(document).ready(function() {
    
    $("#profile-pic").hover(function() {
        $(this).css('box-shadow', '0px 0px 50px #ff8c00');
      }, function() {
        $(this).css('box-shadow', '0px 0px 50px #fff');
      });
  });