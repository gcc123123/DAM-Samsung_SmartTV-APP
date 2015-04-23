alert('SceneScene1.js loaded');

function SceneScene1() {

};	
var max_index_number = 0;
SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);
	
	alert(API+"/discover/movie?api_key="+api_key);
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/movie/now_playing?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	//$("#movies").append('<div id="r0" style="display:none;">');
		  	$("#movies").append('<div id="t'+max_max_index_number_number+'"><h1 class=titulo> PELICULAS ACTUALES </h1></div>');
		  	for (var i = 0; i < 6; i++) {
		  		if(i == 0) $("#movies").append('<div  id="d'+max_index_number+'"  class="row">');
		  		if(i == 5) $("#movies").append('</div>');
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		arr[i]=data.results[i].id;
		  	}
	  		$("#movies").append('<div id="dd'+max_index_number+'" class="row"></div>');
		  	max_index_number++;
	  		//$("#movies").append('</div>');
		  	//$('#movies div.col-xs-2').keynav();
		  	alert($("#movies"));
		  },
		  error: function(){
		  	alert('error');
		  }
	});
		
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/movie/popular?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	alert('-------------------------------------success now_playing');
		  	$("#movies").append('<div id="t'+max_index_number+'"><h1 class=titulo> PELICULAS POPULARES </div></div>');
		  	
		  	for (var i = 0; i < 6; i++) {
		  		if(i == 0) $("#movies").append('<div  id="d'+max_index_number+'" class="row">');
		  		if(i == 5) $("#movies").append('</div>');
		  		
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}	
			//$('#movies div.col-xs-2').keynav();

	  		$("#movies").append('<div id="dd'+max_index_number+'" class="row"></div>');
	  		max_index_number++;
		  },
		  error: function(){
		  	alert('error');
		  }
	});
	
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/movie/top_rated?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	//$("#movies").append('<div class="row"></div>');
		  	$("#movies").append('<div id="t'+max_index_number+'"><h1 class=titulo> PELICULAS MAS VALORADAS </h1></div></div>');
		  	for (var i = 0; i < 6; i++) {
		  		if(i == 0) $("#movies").append('<div id="d'+max_index_number+'" class="row">');
		  		if(i == 5) $("#movies").append('</div>');
		  		
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}	
	  		$("#movies").append('<div id="dd'+max_index_number+'" class="row"></div>');
	  		max_index_number++;
		  //	$('#movies div.col-xs-2').keynav();
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/tv/popular?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	//$("#movies").append('<div class="row"></div>');
		  	$("#movies").append('<div id="t'+max_index_number+'"></div><h1 class=titulo> SERIES POPULARES </h1></div>');
		  	for (var i = 0; i < 6; i++) {
		  		if(i == 0) $("#movies").append('<div id="d'+max_index_number+'" class="row">');
		  		if(i == 5) $("#movies").append('</div>');
		  		
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}	
	  		$("#movies").append('<div id="dd'+max_index_number+'" class="row"></div>');
		  //	$('#movies div.col-xs-2').keynav();
	  		max_index_number++;
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/tv/top_rated?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	//$("#movies").append('<div class="row"></div>');
		  	$("#movies").append('<div id="t'+max_index_number+'"></div><h1 class=titulo> SERIES MAS VALORADOS </h1></div>');
		  	for (var i = 0; i < 6; i++) {
		  		if(i == 0) $("#movies").append('<div id="d'+max_index_number+'" class="row">');
		  		if(i == 5) $("#movies").append('</div>');
		  		
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}	
	  		$("#movies").append('<div id="dd'+max_index_number+'" class="row"></div>');
		  	$('#movies div.col-xs-2').keynav();
		  	max_index_number++;
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/person/popular?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	//$("#movies").append('<div class="row"></div>');
		  	$("#movies").append('<div id="t'+max_index_number+'"></div><h1 class=titulo> ACTORES POPULARES </h1></div>');
		  	for (var i = 0; i < 6; i++) {
		  		if(i == 0) $("#movies").append('<div id="d'+max_index_number+'" class="row">');
		  		if(i == 5) $("#movies").append('</div>');
		  		
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w92'+data.results[i].poster_path+'"/></div>');
		  	}	
	  		$("#movies").append('<div id="dd'+max_index_number+'" class="row"></div>');
		  	$('#movies div.col-xs-2').keynav();
		  	max_index_number++;
		  },
		  error: function(){
		  	alert('error');
		  }
		});

};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};
