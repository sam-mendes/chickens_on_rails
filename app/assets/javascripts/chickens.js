var chickens_controller = {
	getChickens: function(){
		var url = "/farm/chickens/custom-list";
		$.getJSON(
				url,
				null,
				(function(response){
					this.updatePen(response);
				}).bind(this)
			);
	},
	countOfChickens: function(){
		return $("tbody#chicken-list").children().length;
	},
	hideNoChickensMsg: function(){
		$("h3").hide();	
	},
	showNoChickensMsg: function(){
		if(this.countOfChickens() == 0){
			$("h3").show();	
		}
	},
	updatePen: function(chickens){
		
		var source   = $("#chickens-template").html(),
				template = Handlebars.compile(source),
				html     = "";

		chickens.forEach(function(chicken){
		 		html += template(chicken);
		});

		$("tbody#chicken-list").children().remove();
		$("tbody#chicken-list").append(html);
		$('.pop_me').popover({
				content: "Cócóóóóóó!",
				trigger: "hover"
		});
	},
	updatePenOnView: function(){
		return this.getChickens();
	}
};

AppController.on("updatePen", chickens_controller.updatePenOnView.bind(chickens_controller));
//@ sourceURL=chicken.js