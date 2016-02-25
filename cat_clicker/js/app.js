// when a cat's name is clicked:
// 1. display its image  2. increment the number of its clicks 3. update message

var numClickCat1 = 0, numClickCat2 = 0, numClickCat3 = 0, numClickCat4 = 0, numClickCat5 = 0;

var cats = $('li');

for(var i = 0; i < cats.length; i++) {
	$(cats[i]).click(function(){
		var id =  $(this).attr('id');
		var imgPath = 'img/' + id + '.jpg';
		$('img').attr('src', imgPath);
		var numClicks;
		var catName = $(this).text();

		switch(id) {
			case "cat_need_hair":
				numClicks = ++numClickCat1;
				break;
			case "cat_playing_ball":
				numClicks = ++numClickCat2;
				break;
			case "cats_in_cups":
				numClicks = ++numClickCat3;
				break;
			case "cats_wedding":
				numClicks = ++numClickCat4;
				break;
			case "queen_cat":
				numClicks = ++numClickCat5;
				break;
		}

		// update messge
		var message = "You clicked " + numClicks + " times on <br>"
					+ catName;
		$('#message').html(message);
	});
}


