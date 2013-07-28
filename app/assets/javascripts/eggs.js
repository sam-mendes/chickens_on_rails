var eggs_contoller = {
	form_for_new_egg: function(){
		return $("#new_egg");
	},
	clearForm: function(){
		this.form_for_new_egg().reset();
	}
};

//@ sourceURL=eggs.js