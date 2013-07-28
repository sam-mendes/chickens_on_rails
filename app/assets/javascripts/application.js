// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.ui.all
//= require jquery_ujs
//= require bootstrap
//= require handlebars
//= require Chart
//= require application
//= require chickens
//= require eggs

// require_tree .

// extending jQuery

(function(jQuery) {
  jQuery.eventEmitter = {
    _JQInit: function() {
      this._JQ = jQuery(this);
    },
    emit: function(evt, data) {
      !this._JQ && this._JQInit();
      this._JQ.trigger(evt, data);
    },
    once: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.one(evt, handler);
    },
    on: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.bind(evt, handler);
    },
    off: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.unbind(evt, handler);
    }
  };

  jQuery.fn.reset = function (){
   $(this).each (function(){
      this.reset();
   });
	};

	var json_functions = {};

	["get","post","delete","put"].forEach(function(element){
		json_functions[element+"JSON"] = function(url, data, sucessCallback, errorCallback){
				$.ajax({
					type: element,
					url: url,
					data: data,
					dataType: "json",
					success: sucessCallback,
					error: errorCallback
				});
		};
	});

	jQuery.extend(json_functions);

	}(jQuery));

	jQuery.extend(App.prototype, jQuery.eventEmitter);

	function toogleActiveClasses(){
		$("li a").click(function(){
			$("li[class='active']").removeClass("active");
			$(this).parent().addClass("active");
		});
}

$(document).ready(function(){
	
	toogleActiveClasses();

	$("a[name='a-chickens']").click(function(){
		$("#home-image").slideUp();
	});

	$("#farm_dashboard").click(function(event){
		event.preventDefault();
		// clear main content
		$("#main").children().remove();
		$("#main").append("<h2> Produção das galinhas! </h2>");
		$("#main").append('<canvas id="chart" width="800" height="400"></canvas>');


		var	url = this.pathname,
				innerData = [],
				labels = [];

		$.getJSON(
				url,
				null,
				function(response){
					console.log(response);

					data = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							data : [65,59,90,81,56,55,40]
						},
					]
				}
				response.forEach(function(chicken){
					labels.push(chicken.name);
					innerData.push(chicken.eggs.length);
				});
				
				data.labels = labels;
				data.datasets[0].data = innerData;
				var ctx = $("#chart").get(0).getContext("2d"),
						doughnut = new Chart(ctx).Bar(data);
				}
			);
		
	});

});

function App(){
	this.main_container = function() {
			return $("#main-content");
	};
	this.appendToFormContainer = function(partial){
		this.main_container().children().remove();
		this.main_container().append(partial);
	};
}

var AppController = new App();

