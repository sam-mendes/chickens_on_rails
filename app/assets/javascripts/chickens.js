var chickens_controller = {
	enoughOfChickens: function(partial){
		var children = $("table tbody#chicken-list").children().length,
				form = $("#new_chicken"),
				chikens_container = $("#new-chicken-container");

		if(children > 6) {
			form.fadeOut();
			$(".title").text("Armaria quanta galinha! Chega né?");
		} else {
			if (chikens_container.children().length == 1) {
				chikens_container.append(partial);
			}else{
				form.fadeIn();
			}

			$(".title").text("Precisamos de mais galinhas!");
		}
	},
	hideNoChickensMsg: function(){
		$("h3").hide();	
	}
};