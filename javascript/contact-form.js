/* CLEAR PLACEHOLDERS */
  
  $(document).ready(function() {
    
    $('.input').each(function()
    {
        if ($(this).attr('placeholder') && $(this).attr('placeholder') !='') {
            $(this).attr( 'data-placeholder', $(this).attr('placeholder') );
        }
    });
  
    $('.input').focus(function()
    {
        if ($(this).attr('data-placeholder') && $(this).attr('data-placeholder') !='') {
            $(this).attr('placeholder', '');
        }
    });
  
    $('.input').blur(function()
    {
        if ($(this).attr('data-placeholder') && $(this).attr('data-placeholder') !='') {
            $(this).attr('placeholder', $(this).attr('data-placeholder'));
        }
    });
  });
