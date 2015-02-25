
$(document).ready(function(){

	//$("body").height( $(window).height() );
	$("#content li:odd").addClass("odd");
	$("#content li:even").addClass("even");


	$(".copy").hide();	
	$("nav").children().hide();	
	$(".bord").hide();


	$("li").each(function(i) {


		var classname = $(this).attr("class").replace(/\odd/g,'')
		.replace(/\even/g,'')
		.replace(/\new/g,' ')
		.replace(/\alert/g,'')
		.replace(/ /g, '');

		$(this).find( ".head" ).addClass(classname);


		$(this).find( ".head" ).css('background-image', 'url("css/img/img-' + classname + '.png")');

	});



	$("li").first().addClass("new");


	$(".balloon").width( $(".wrapper").width() - $(".head").width() - 110 );
	$(".intro").width( $(".wrapper").width() - $(".head").width() - 100 );






	$('li').click(function() {
		var $menu = $('li .copy');
		if ($menu.is(':visible')) {
			$(".copy").hide();
			$("li .wrapper").css("background-image" , "url('css/img/icon-message.png')");
			$("nav").children().hide();
			$("li").removeClass("active");
			$("li.now").show();
			$(".prophets").show();
			$(".now .intro").show();
			$(".bord").hide();

		}
		else {

			$(this).siblings().hide();
			$(".intro").hide();
			$(this).addClass("active")
			$(this).children().children(".copy").show();
			$(this).children(".wrapper").css("background-image" , "none");	
			$("nav").children().show();	
			$(".bord").show();
			var text = $(this).children().children(".intro").text();
			$("nav p").text(text); 	

			$(this).children().children().children().each(function(i) {
				$(this).fadeOut(0).delay(1000*i).fadeIn(1);
			});	



		}
	});

	$('nav a').click(function() {
		$(".copy").hide();
		$("li .wrapper").css("background-image" , "url('css/img/icon-message.png')");
		$("nav").children().hide();
		$("li").removeClass("active");
		$("li.now").show();
		$(".prophets").show();
		$(".now .intro").show();
		$(".bord").hide();



	});

	$("#content li").each(function(i) {
		$(this).addClass("p"+(i+1));
	});


	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth()+1;
	var curr_year = d.getFullYear();

	if (  curr_date==25 && curr_month==2 ) {
		$("#content li").hide();
	}

	if (  curr_date==26 && curr_month==2 ) {
		$("#content li").hide();
	}

	if (  curr_date==27 && curr_month==2 ) {
		$("#content li").hide();

	}

	if (  curr_date==28 && curr_month==2 ) {
		$("#content li").hide();
		$("#content li.p31").show();
	}

	if (  curr_date==25 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p30").addClass("now").show().nextAll().addClass("now").show();
	}

	if (  curr_date==2 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p29").addClass("now").show().nextAll().addClass("now").show();		
	}

	if (  curr_date==3 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p28").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==4 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p27").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==5 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p26").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==6 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p25").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==7 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p24").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==8 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p23").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==9 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p22").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==10 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p21").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==11 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p20").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==12 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p19").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==13 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p18").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==14 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p17").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==15 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p16").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==16 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p15").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==17 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p14").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==18 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p13").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==19 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p12").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==20 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p11").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==21 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p10").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==22 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p9").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==23 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p8").addClass("now").show().nextAll().addClass("now").show();

	}
	if (  curr_date==24 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p7").addClass("now").show().nextAll().addClass("now").show();

	}
	if (  curr_date==25 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p6").addClass("now").show().nextAll().addClass("now").show();

	}
	if (  curr_date==26 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p5").addClass("now").show().nextAll().addClass("now").show();

	}
	if (  curr_date==27 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p4").addClass("now").show().nextAll().addClass("now").show();

	}
	if (  curr_date==28 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p3").addClass("now").show().nextAll().addClass("now").show();

	}
	if (  curr_date==29 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p2").addClass("now").show().nextAll().addClass("now").show();

	}

	if (  curr_date==30 && curr_month==3 ) {
		$("#content li").hide();
		$("#content li.p1").addClass("now").show().nextAll().addClass("now").show();

	}



	$("#content li.start").show();	





});
