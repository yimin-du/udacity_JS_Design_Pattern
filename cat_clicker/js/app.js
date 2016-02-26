// when a cat's name is clicked:
// 1. display its image  2. increment the number of its clicks 3. update message


var model = {
	cats: [],
	catsNames: ["cat_need_hair", "cat_playing_ball", "cats_in_cups", "cats_wedding", "queen_cat"],
	getImgPath: function(imgName){
		return 'img/' + imgName + '.jpg';
	},
	init: function(){
		this.curCatIdx = 0;
		for(var i = 0; i < this.catsNames.length; i++){
			this.cats.push({
				path: this.getImgPath(this.catsNames[i]),
				clickCount: 0
			});
		}
	},
	getCurrentCat: function(){
		return this.cats[this.curCatIdx];
	},
	incrementCurrentCount: function(){
		this.cats[this.curCatIdx].clickCount++;
	}
}

var octopus = {
	updateCurrentCat: function(catName){
		model.curCatIdx = model.catsNames.indexOf(catName);
	},

	updateCount: function(catName){
		model.incrementCurrentCount();
	},

	render: function(catName){
		var cat = model.getCurrentCat();
		$('img').attr('src', cat.imgPath);
		var message = "You clicked " + cat.clickCount + " times on <br>"
					+ catName;
		$('#message').html(message);
	},


	init: function(){
		model.init();
		$('img').click(function(){
			octopus.updateCount();
			octopus.render();
		});

		var catsList = $('li');
		for(var i = 0; i < catsList.length; i++){
			$(catsList[i]).click(function(){
				var catName = $(this).attr('id');
				octopus.updateCurrentCat(catName);
				octopus.render(catName);
			});
		}
	}
}

octopus.init();


