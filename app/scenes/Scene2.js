alert('SceneScene2.js loaded');

function SceneScene2() {

};

SceneScene2.prototype.initialize = function () {
	alert("SceneScene2.initialize()");

	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene2.prototype.handleShow = function (data) {
	$("#cover").html('');
	$("#title").html('');
	$("#title").html('');
	$("#sinopsis").html('');
	alert("SceneScene2.handleShow()");
	// this function will be called when the scene manager show this scene
	if(tipo_url!='Serie'){
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/movie/'+movie_id,
	  data: { api_key: api_key , language: 'es'},
	  success: function(data){
	  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
	  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
	  	$("#title").append('<h1>'+data.title+'</h1>');
	  	$("#title").append('<h2>'+data.release_date+' '+'(Puntuación: '+data.vote_average/2+'/5)'+'</h2>');
	  	$("#title").append('<h2>'+data.tagline+'</h2>');
	  	$("#sinopsis").append(data.overview);
	  	$("#col-xs-12 botazul").append('prueba');}
	  	
	});	
	}else{
		$.ajax({
			  type: "GET",
			  crossDomain: true,
			  async: true,
			  dataType: "json",
			  url: API+'/tv/'+movie_id,
			  data: { api_key: api_key, language: 'es' },
			  success: function(data){
			  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
			  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
			  	$("#title").append('<h1>'+data.name+'</h1>');
			  	$("#title").append('<h2>'+data.first_air_date+' '+'(Puntuación: '+data.vote_average/2+'/5)'+'</h2>');
			  	$("#sinopsis").append(data.overview);	
			  								  }
			});	
			
	}
	//$("#col-xs-12 botazul").css('display','none');
};

SceneScene2.prototype.handleHide = function () {
	alert("SceneScene2.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#cover").html('');
	$("#title").html('');
	$("#title").html('');
	$("#sinopsis").html('');	
};

SceneScene2.prototype.handleFocus = function () {
	alert("SceneScene2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene2.prototype.handleBlur = function () {
	alert("SceneScene2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

function puntuar (puntuacion) {
	$.ajax({
	  type: "POST",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/movie/'+id+'/rating',
	  data: { api_key: api_key, session_id: session_id, value: puntuacion },
	  success: function(data){
	  	console.log(data);
	  }
	});
};