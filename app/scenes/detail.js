alert('Scenedetail.js loaded');

var detail_cate_index = 0;
function Scenedetail() {

};

Scenedetail.prototype.initialize = function () {
	alert("Scenedetail.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

	$('#svecImage_detail_iconMovie').sfImage({
		src:'images/icon_movie.png'
	});
	$('#svecLabel_tag7').sfLabel({
		text:'Aka:'
	});
	$('#svecImage_detail_bgposter').sfImage({
		src:'images/bg_poster.png'
	});
	$('#svecLabel_value1').sfLabel({
		text:'XXX'
	});
	$('#svecLabel_detail_cate2').sfLabel({
		text:'Comment'
	});
	$('#svecImage_poster0').sfImage({
		src:'images/poster0.jpg'
	});
	$('#svecLabel_value2').sfLabel({
		text:'XXX'
	});
	$('#svecLabel_tag6').sfLabel({
		text:'Language:'
	});
	$('#svecLabel_tag5').sfLabel({
		text:'Released:'
	});
	$('#svecLabel_tag2').sfLabel({
		text:'Director:'
	});
	$('#svecImage_detail_bg1').sfImage({
		src:'images/bg1.png'
	});
	$('#svecKeyHelp2').sfKeyHelp({
	    'leftright':'Left/Right',
		'return':'Return'
	});
	$('#svecLabel_tag3').sfLabel({
		text:'Starring:'
	});
	$('#svecImage_detail_titleMovie').sfImage({
		src:'images/title_movie.png'
	});
	$('#svecLabel_5i7j7e1lipx3o').sfLabel({
		text:'>'
	});
	$('#svecImage_detail_cate0').sfImage({
		src:'images/title_button.png'
	});
	$('#svecLabel_tag1').sfLabel({
		text:'Writer:'
	});
	$('#svecImage_detail_cate1').sfImage({
		src:'images/title_button.png'
	});
	$('#svecLabel_movieTitle').sfLabel({
		text:'Downton Abbey 2012 Christmas Special'
	});
	$('#svecImage_detail_cate2').sfImage({
		src:'images/title_button.png'
	});
	$('#svecImage_detailt_tb').sfImage({
		src:'images/bg_title.png'
	});
	$('#svecLabel_value4').sfLabel({
		text:'XXX'
	});
	$('#svecLabel_des').sfLabel({
		text:'Detail'
	});
	$('#svecLabel_value3').sfLabel({
		text:'XXX'
	});
	$('#svecLabel_tag4').sfLabel({
		text:'Country/Region:'
	});
	$('#svecLabel_value5').sfLabel({
		text:'XXX'
	});
	$('#svecLabel_detail_cate0').sfLabel({
		text:'Basic Info'
	});

	$('#svecLabel_value6').sfLabel({
		text:'XXX'
	});

	$('#svecLabel_value7').sfLabel({
		text:'XXX'
	});

	$('#svecLabel_detail_cate1').sfLabel({
		text:'Introduction'
	});
	
	$("#svecImage_detail_cate1").sfImage('hide');
	$("#svecImage_detail_cate2").sfImage('hide');
};

Scenedetail.prototype.handleShow = function (data) {
	alert("Scenedetail.handleShow()");
	// this function will be called when the scene manager show this scene
	$('#svecImage_poster0').sfImage("option", "src", "images/poster" + data + image_suffix);
	$('#svecLabel_movieTitle').sfLabel("option", "text", hot_movies[data]);
};

Scenedetail.prototype.handleHide = function () {
	alert("Scenedetail.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Scenedetail.prototype.handleFocus = function () {
	alert("Scenedetail.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Scenedetail.prototype.handleBlur = function () {
	alert("Scenedetail.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenedetail.prototype.handleKeyDown = function (keyCode) {
	alert("Scenedetail.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			$("#svecImage_detail_cate" + detail_cate_index).sfImage('hide');
			detail_cate_index--;
			if(detail_cate_index < 0) detail_cate_index = detail_cate_index + cate_num;
			$("#svecImage_detail_cate" + detail_cate_index).sfImage('show');
			break;
		case sf.key.RIGHT:
			$("#svecImage_detail_cate" + detail_cate_index).sfImage('hide');
			detail_cate_index++;
			detail_cate_index = detail_cate_index%cate_num;
			$("#svecImage_detail_cate" + detail_cate_index).sfImage('show');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			sf.scene.hide('detail');
			sf.scene.show('homepage');
			sf.scene.focus('homepage');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
