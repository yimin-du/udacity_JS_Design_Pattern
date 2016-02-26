// when a cat's name is clicked:
// 1. display its image  2. increment the number of its clicks 3. update message


var model = {
	cats: [
		{name: "cat_need_hair", clickCount: 0, imgSrc: "img/cat_need_hair.jpg"},
		{name: "cat_playing_ball", clickCount: 0, imgSrc: "img/cat_playing_ball.jpg"},
		{name: "cats_in_cups", clickCount: 0, imgSrc: "img/cats_in_cups.jpg"},
		{name: "cats_wedding", clickCount: 0, imgSrc: "img/cats_wedding.jpg"},
		{name: "queen_cat", clickCount: 0, imgSrc: "img/queen_cat.jpg"}
		],
	
	currentCat: null,	
}

var octopus = {
	getCats: function(){
		return model.cats;
	},

	getCurrentCat: function(){
		return model.currentCat;
	},
	setCurrentCat: function(cat){
		model.currentCat = cat;
		},
	
	incrementCurrentCount: function(){
		model.currentCat.clickCount++;
	},

	updateCurrentCat: function(name, count){
		model.currentCat.name = name;
		model.currentCat.clickCount = count;
	},
	
	init: function(){
		model.currentCat = model.cats[0];
		listView.init();
		catView.init();
		adminView.init();
	}
}

//		  			<li id = "queen_cat" class="btn btn-info">Queen Cat</li>

var listView = {
	init: function(){
		this.catList = $('#catList');
		this.render();
	},

	render: function(){
		$(this.catList).empty();
		var cats = octopus.getCats();

		for(var i = 0; i < cats.length; i++){
			var cat = cats[i];

			var elem = document.createElement('li');
			elem.textContent = cat.name;
			elem.setAttribute("class", "btn btn-info");
			$(this.catList).append(elem);


			$(elem).click((function(catCopy){
				return function(){
					octopus.setCurrentCat(catCopy);
					catView.render();
					adminView.render();
				}
			})(cat));

		}
	}	
}

var catView = {
	init: function(){
		this.imgElem = $('#catImg');
		this.messageElem = $('#message');
		$(this.imgElem).click(function(){
			octopus.incrementCurrentCount();
			catView.render();
			adminView.render();
		});

		this.render();
	},

	render: function(){
		var cat = octopus.getCurrentCat();
		$(this.imgElem).attr("src", cat.imgSrc);
		var message = "You clicked " + cat.clickCount + " times on <br>"
					+ cat.name;
		this.messageElem.html(message);
	}
}


var adminView = {
	init: function(){
		adminView.inAdminMode = false;
		adminView.adminElem = $('#admin');
		$(this.adminElem).hide();
		$('#toggleAdminBtn').click(function(){
			if(adminView.inAdminMode){
				adminView.inAdminMode = false;
				$(adminView.adminElem).hide();
				$("#toggleAdminBtn").text("Show Admin");
			}else{
				adminView.inAdminMode = true;
				$('#toggleAdminBtn').text("Hide Admin");
				$(adminView.adminElem).show();

			}
		});

		$('#saveChangeBtn').click(function(){
			var catName = $('#cat-name-input').val();
			var count = parseInt($('#click-count-input').val());

			octopus.updateCurrentCat(catName, count);
			catView.render();
			listView.render();
		});
	},

	render: function(){
		var cat = octopus.getCurrentCat();
		$('#cat-name-input').val(cat.name);
		$('#click-count-input').val(cat.clickCount);
	}
}
	




octopus.init();


