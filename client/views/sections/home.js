Template.home.rendered = function(){
	$('.dropdown').dropdown();
};

Template.home.helpers({
  
  estados: function(){
  	return Estado.find();
  },

  municipios: function(){
  	console.log('render municipios');
  	var estado = Session.get('ESTADO');
  	if(estado)
  		return Municipio.find({codigoEstado:estado});
  	return [];
  },

  showMunicipios: function(){
  	console.log('render municipios 2');
  	return Session.get('ESTADO');
  }


});

Template.home.events({

	'change #estadoSelect' : function(e){
		var val = $('#estadoSelect option:selected').val();
		if(val){
			console.log(val);
			Session.set('ESTADO',val);
		}
	}

});