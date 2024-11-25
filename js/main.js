function searchUser() {
	var name = $('.user').val();
	$.get('engine4.php?name=' + name, function(data){
		if(data) {
			if(data['error_code']) {
				$('.result').text(data['error_text']);
			} else {
				var user = 'User: ' + data['username'] + '<br>';
				user += 'Id: ' + data['id'] + '<br>';
				user += '<img src="' + data['img'] + '">';
				$('.result').html(user);
			}
		}
	}, 'json');
}