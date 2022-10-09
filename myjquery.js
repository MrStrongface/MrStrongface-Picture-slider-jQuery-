$('.small a').click(function(e){
    if($('.big img').attr('src')!==$(this).attr('href')){
      $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(500);
    };
      e.preventDefault(); 
});

$('.button').click(function(){
    $('.gallery').slideToggle(500);
    if($('.button').text()=='-'){
        $('.button').text('+')
    } else{
        $('.button').text('-');
    };
    
         
});
$('.small a img').click(function(){
    $('.small a img').fadeTo(300, 1).css({
        'border': 'none'
    });
    
    $(this).fadeTo(300, 0.6).css({
        'border': '2px dotted red'
    });
});



