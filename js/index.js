
function marqueen(){
	var startLeft = $($(".weclcomTxt")[0]).offset().left, txtWidth =$($(".weclcomTxt")[0]).width(), interval;
	interval = window.setInterval(function(){
		var newLeft = $($(".weclcomTxt")[0]).offset().left + 1;				
		if(newLeft > (1000+startLeft)){
			newLeft = startLeft-txtWidth;
		}
		$($(".weclcomTxt")[0]).offset({"left": newLeft});
	},50);
}

function loadMoreNews() {
	$(".loading_more").click(function() {
		var t = $(this), p = t.prev();
		window.setTimeout(function () {
			p.hide();
			t.show();
		},500);
		t.hide();
		p.show();
	})
}
$(document).ready(function(e) {
	marqueen();
	loadMoreNews();
	var fadingslider = $('.fading-slider').unslider({
		animation: 'fade',
		autoplay: true,
		arrows: false
	});

	$('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        fadingslider.data('unslider')[fn]();
    });


    var mydate = new Date();
	var year =mydate.getFullYear();
	var month = mydate.getMonth()+1;
	var day = mydate.getDate();
	var nl = calendar.solar2lunar(year,month,day);
	
    $("#dwv").html(month+'月'+day+'日'+ nl.ncWeek);
    $("#ld").html(nl.IMonthCn + nl.IDayCn);
});
