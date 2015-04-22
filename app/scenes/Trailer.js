alert('SceneTrailer.js loaded');

function SceneTrailer() {

};

SceneTrailer.prototype.initialize = function () {
	alert("SceneTrailer.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneTrailer.prototype.handleShow = function (data) {
	$("#video").html('');
	alert("SceneTrailer.handleShow()");
		
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+'/movie/'+movie_id+'/videos',
		  data: { api_key: api_key },
		  success: function(data){
			  //$("#title").append('<h1>'+data.title+'</h1>');
			  $("#video").append('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+data.results[0].key+'?rel=0&autoplay=1&showinfo=0&controls=0&modestbranding=1" frameborder="0"> </iframe>');
		  }
		});
	// this function will be called when the scene manager show this scene
};

SceneTrailer.prototype.handleHide = function () {
	alert("SceneTrailer.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneTrailer.prototype.handleFocus = function () {
	alert("SceneTrailer.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneTrailer.prototype.handleBlur = function () {
	alert("SceneTrailer.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneTrailer.prototype.handleKeyDown = function (keyCode) {
	alert("SceneTrailer.handleKeyDown(" + keyCode + ")");
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
		case sf.key.RETURN:
			event.preventDefault();
			$("#video").html('');
			sf.scene.hide('Trailer');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};