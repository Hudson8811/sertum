$(".input-mask").mask("+7 (999) 999-99-99");






$('.banner').owlCarousel({
	
    items: 1,
    loop:false,
	nav:false,
	dots:true,
	navText:false,
	autoplay:false
});


$(document).ready(function(){
	function falidator(item) {
		check = true;
		$(item).find('.required').each(function() {
			if($(this).hasClass('required') && $(this).val() == '') {
				check = false;
				$(this).css('border', '1px red solid' );
			} else {
				$(this).css('border', '1px #000 solid');
			}
		});
		if(check) {
			return true;
		} else {
			return false;
		}
	}
	$(".form0").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({ 
			type: "POST", 
			url: "php/form0.php",
			data: $(".form0").serialize(),
			success: function(html) { 
			
			}
		});
		
		$('#spasibo').arcticmodal();
		$('.form0').trigger("reset");
		setTimeout(function(){$('#spasibo').arcticmodal('close')},2000);
		
		return false;
	});
	
	$(".form2").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({ 
			type: "POST", 
			url: "php/form2.php",
			data: $(".form1").serialize(),
			success: function(html) { 
			
			}
		});
		
		$('#spasibo').arcticmodal();
		$('.form2').trigger("reset");
		setTimeout(function(){$('#spasibo').arcticmodal('close')},2000);
		
		return false;
	});
	
	$(".form1").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({ 
			type: "POST", 
			url: "php/form1.php",
			data: $(".form1").serialize(),
			success: function(html) { 
			
			}
		});
		
		$('#spasibo').arcticmodal();
		$('.form1').trigger("reset");
		setTimeout(function(){$('#spasibo').arcticmodal('close')},2000);
		
		return false;
	});
	
	/**************************/
});

$('.content .tab .top .top_block').click(function() { 
$('.content .tab .top .top_block.activ').removeClass('activ'); 
$(this).addClass('activ'); 
$('.content .tab .bottom .bottom_block').removeClass('activ') 
.eq($(this).index()).addClass('activ'); 
return false; 
});

$('#header .red_line .row_tab .block_tab').click(function() { 
$('#header .red_line .row_tab .block_tab.active').removeClass('active'); 
$(this).addClass('active'); 
$('#header .red_line .top_tab .bottom_row').removeClass('active') 
.eq($(this).index()).addClass('active'); 
return false; 
});

$(document).ready(function(){
	$('body').click(function(e){
        if(!$(e.target).parents('.open').length && !$(e.target).hasClass('open')) {
            $('.open').removeClass('open');
        }
    });
    
    $('.mobile-menu-trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('#header .top_row .left ul').toggleClass('open');
    });
});




