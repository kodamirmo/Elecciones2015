Template.menu.events({

	'click #menuToggle, .menu-close' : function(e){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	}

});