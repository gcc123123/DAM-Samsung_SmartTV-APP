alert('Scenehomepage.js loaded');

var wp_index = 0;
var wp_num = 5;
var cate_index = 0;
var cate_num = 3;
var image_suffix = ".jpg";
var poster_url = "images/poster0.jpg";
var hot_movies = {0:"Downton Abbey 2012 Christmas Special",1:"Les Misérables",2:"Life of Pi",
		3:"Frankenweenie",4:"The Hobbit: An Unexpected Journey"};

function Scenehomepage() {

};

Scenehomepage.prototype.initialize = function () {
	alert("Scenehomepage.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#svecImage_bg_title').sfImage({
		src:'images/bg_title.png'
	});
	$('#svecImage_poster').sfImage({
		src:'images/poster0.jpg'
	});
	$('#svecKeyHelp1').sfKeyHelp({
	    'leftright':'Left/Right',
	    'updown': 'Up/Down',
	    'enter': 'Enter',
		'return':'Return'
	});
	$('#svecImage_wp0').sfImage({
		src:'images/bg_list_focus.png'
	});

	$('#svecImage_wp1').sfImage({
		src:'images/bg_list_nor.png'
	});

	$('#svecImage_wp2').sfImage({
		src:'images/bg_list_nor.png'
	});

	$('#svecImage_wp3').sfImage({
		src:'images/bg_list_nor.png'
	});

	$('#svecImage_wp4').sfImage({
		src:'images/bg_list_nor.png'
	});
	$('#svecLabel_list0').sfLabel({
		text:'1.Downton Abbey 2012 Christmas Special'
	});

	$('#svecLabel_list1').sfLabel({
		text:'2.Les Misérables'
	});

	$('#svecLabel_list2').sfLabel({
		text:'3.Life of Pi'
	});

	$('#svecLabel_list3').sfLabel({
		text:'4.Frankenweenie'
	});

	$('#svecLabel_list4').sfLabel({
		text:'5.The Hobbit: An Unexpected Journey'
	});
	$('#svecImage_cate0').sfImage({
		src:'images/title_button.png'
	});
	$('#svecLabel_cate0').sfLabel({
		text:'Weekly Praise'
	});
	$('#svecImage_bg1').sfImage({
		src:'images/bg1.png'
	});
	$('#svecImage_bg_poster').sfImage({
		src:'images/bg_poster.png'
	});
	$('#svecImage_5i7j5yxbsvgbd').sfImage({
		src:'images/icon_movie.png'
	});
	$('#svecImage_5i7j5yxbve5be').sfImage({
		src:'images/title_movie.png'
	});
	$('#svecImage_cate1').sfImage({
		src:'images/title_button.png'
	});
	$('#svecImage_cate2').sfImage({
		src:'images/title_button.png'
	});
	$('#svecLabel_cate1').sfLabel({
		text:'Monthly Praise'
	});
	$('#svecLabel_cate2').sfLabel({
		text:'Newly Release'
	});
	$('#svecImage_heart0').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart1').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart2').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart3').sfImage({
		src:'images/heart_gray.png'
	});
	$('#svecImage_5i7j5z3morabn').sfImage({
		src:'images/heart_gray.png'
	});

	$('#svecImage_heart6').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart7').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart9').sfImage({
		src:'images/heart_gray.png'
	});
	$('#svecImage_heart8').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart5').sfImage({
		src:'images/heart_shine.png'
	});

	$('#svecImage_heart14').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart10').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart13').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart11').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart12').sfImage({
		src:'images/heart_shine.png'
	});

	$('#svecImage_heart19').sfImage({
		src:'images/heart_gray.png'
	});
	$('#svecImage_heart15').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart16').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart17').sfImage({
		src:'images/heart_gray.png'
	});
	$('#svecImage_heart18').sfImage({
		src:'images/heart_gray.png'
	});
	$('#svecImage_heart23').sfImage({
		src:'images/heart_gray.png'
	});
	$('#svecImage_heart20').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart22').sfImage({
		src:'images/heart_shine.png'
	});
	$('#svecImage_heart21').sfImage({
		src:'images/heart_shine.png'
	});
	
	$("#svecImage_cate1").sfImage('hide');
	$("#svecImage_cate2").sfImage('hide');

	$('#svecImage_heart24').sfImage({
		src:'images/heart_gray.png'
	});
};

Scenehomepage.prototype.handleShow = function (data) {
	alert("Scenehomepage.handleShow()");
	// this function will be called when the scene manager show this scene
};

Scenehomepage.prototype.handleHide = function () {
	alert("Scenehomepage.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Scenehomepage.prototype.handleFocus = function () {
	alert("Scenehomepage.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Scenehomepage.prototype.handleBlur = function () {
	alert("Scenehomepage.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenehomepage.prototype.handleKeyDown = function (keyCode) {
	alert("Scenehomepage.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			$("#svecImage_cate" + cate_index).sfImage('hide');
			cate_index--;
			if(cate_index < 0) cate_index = cate_index + cate_num;
			$("#svecImage_cate" + cate_index).sfImage('show');
			break;
		case sf.key.RIGHT:
			$("#svecImage_cate" + cate_index).sfImage('hide');
			cate_index++;
			cate_index = cate_index%cate_num;
			$("#svecImage_cate" + cate_index).sfImage('show');
			break;
		case sf.key.UP:
			$("#svecImage_wp" + wp_index).sfImage("option", "src", "images/bg_list_nor.png");
			wp_index--;
			if(wp_index < 0) wp_index = wp_index + wp_num;
			alert(wp_index);
			$("#svecImage_wp"+wp_index).sfImage("option", "src", "images/bg_list_focus.png");
			poster_url = "images/poster" + wp_index + image_suffix;
			$('#svecImage_poster').sfImage("option", "src", poster_url);
			break;
		case sf.key.DOWN:			
			
			$("#svecImage_wp"+wp_index).sfImage("option", "src", "images/bg_list_nor.png");
			wp_index++;
			wp_index = wp_index%wp_num;
			$("#svecImage_wp"+wp_index).sfImage("option", "src", "images/bg_list_focus.png");
			poster_url = "images/poster" + wp_index + image_suffix;
			$('#svecImage_poster').sfImage("option", "src", poster_url);
			break;
		case sf.key.ENTER:
			sf.scene.hide('homepage');
			sf.scene.show('detail',wp_index);
			sf.scene.focus('detail');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
