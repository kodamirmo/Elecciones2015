Template.layout.events({

	'click #menuToggle' : function(e){

		console.log('Click');

		$('.sidebar').sidebar('toggle');
	}

});