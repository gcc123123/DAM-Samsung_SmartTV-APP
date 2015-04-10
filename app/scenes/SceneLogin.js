alert('SceneSceneLogin.js loaded');

function SceneSceneLogin() {

};

SceneSceneLogin.prototype.initialize = function () {
	alert("SceneSceneLogin.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#username').sfTextInput({
		text:'LOGIN',
		maxlength:10
	});
	$('#password').sfTextInput({
		text:'PASSWORD',
		maxlength:10
	});
};

SceneSceneLogin.prototype.handleShow = function (data) {
	alert("SceneSceneLogin.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneLogin.prototype.handleHide = function () {
	alert("SceneSceneLogin.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneLogin.prototype.handleFocus = function () {
	alert("SceneSceneLogin.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneLogin.prototype.handleBlur = function () {
	alert("SceneSceneLogin.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneLogin.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneLogin.handleKeyDown(" + keyCode + ")");
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
