var card = $('.photo');
function select(myFriend) {
	for (var i = 0; i < card.length; i++) {
		var thisCaption = card.eq(i).find('.caption');
		if (thisCaption.html() == myFriend) {
			turn(card[i])
		}
	}
}
$(function () {
	$('.select-click').on('click', function() {
		var serchMes = $('.select-input').val();
		select(serchMes)
		return false;
	});
})