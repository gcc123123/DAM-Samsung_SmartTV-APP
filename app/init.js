var API = 'http://api.themoviedb.org/3';
var api_key = 'fffcfc6228ea5f968c308ea249b5a9eb';
var session_id = '';
var base_url = 'http://image.tmdb.org/t/p/';
var movie_id = '';
var tipo_url='';
var arr = Array();
var num;

function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	sf.scene.show('Scene1');
	sf.scene.focus('Scene1');
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to distroy your application here
	
}

alert("init.js loaded.");

/*
 * Keynav - jQuery Keyboard Navigation plugin
 *
 * Copyright (c) 2013 Nick Ostrovsky
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.firedev.com/jquery.keynav
 *
 * Version:  0.1
 *
 */

;(function($, window, document, undefined) {

	$.fn.keynav = function(checkNav) {
		var elements = this;
		var matrix;
		var x;
		var y;
		var current = this.filter('.selected');
		var keyNavigationDisabled=false;
		if (current.length == 0) current = this.first();

		current.addClass('selected');

		function update() {
			var i=0;
			var row = Array();
			var j = -1;
			var oldtop = false;
			var m=Array();

			elements.each(function(){
				if (!oldtop) oldtop = this.offsetTop;
				newtop=this.offsetTop;
				if (newtop != oldtop) {
					oldtop=newtop;
					m[i]=row;
					row = Array();
					i++;
					j=0;
					row[j]=this;
				} else {
					j++;
					row[j]=this;
				}
			});
			m[i]=row;
			matrix = m;
			coordinates=findCurrent();
			x=coordinates[0];
			y=coordinates[1];
			return matrix;
		}

		function findCurrent() {
			i=0; j=0; found = false;
			try {
				for (i=0; i<matrix.length; i++) {
					row=matrix[i];
					for (j=0; j<row.length; j++) {
						if (current[0] == row[j]) {
							throw([i,j]);
						}

					}
				}
			}
			catch (arr)
			{
				found = [i,j]
			}
			return(found);
		}

		function setCurrent(i,j) {
			if (i<0) i=(matrix.length-1);
			if (i>=matrix.length) i=0;
			if (j<0) j=(matrix[i].length-1);
			if (j>=matrix[i].length) j=0;
			current.removeClass('selected');
			current = $(matrix[i][j]);
			current.addClass('selected');
			x=i;
			y=j;
		}

		$(window).bind("resize", function(event) {
			update();
		});

		$(document).ready(function() {
			update();
		});


		//*********************   scroll up/down effect global variable and function    ********************//
		var topRow = 0;		// actual visible top row position
		var buttomRow = 1; // actual visible buttom row number 
		var maxRow = max_index_number;//4;    // max number of rows.
		function unhideTitle(title){
			document.getElementById("t"+title).style.display="";
		}
		function hideTitle(title){
			document.getElementById("t"+title).style.display="none";
			/*var title ;
			switch(title){
			case 0:
				//title = $.filter('t0');
				//title.addClass("hide");
				
				//$("#movies.titulo").eq(title).addClass("hide");
			//	document.getElementsByName("t0").style.display="none";
			//	document.getElementsByTagName("t0").style.display="none";
				//document.getElementById("t0").style.display="none";
				
				//$("#movies.titulo").eq(title+1).addClass("hide");
				//$("#movies").$("titulo").eq(title);
				alert("[debug] -------------------------------  hide title " + title);
				break;
			case 1:
				//title = this.filter('.t1');
				break;
			case 2:
				title = this.filter('.selected');
				break;
			case 3:
				title = this.filter('.selected');
				break;
			case 4:
				title = this.filter('.selected');
				break;
			
			}*/
		}
		function hideRow(n){
			//document.getElementById("r0").style.display="none";
			//$("r0").show().hide();
			
			for(i=0; i <6 ; i++){
				$(matrix[n][i]).addClass("hide");
				
			}
			//hideTitle(n);
			//hide title
			document.getElementById("t"+n).style.display="none";
			alert("-----------------hide titile id = t" + n);
			//hide space
			document.getElementById("d"+n).style.display="none";
			document.getElementById("dd"+n).style.display="none";
			alert("hide row" + n);
		}
		function unHideRow(n){
			for(i=0; i <6 ; i++){
				$(matrix[n][i]).removeClass("hide");
			}
			//unhideTitle(n);

			document.getElementById("t"+n).style.display="";
			
			document.getElementById("d"+n).style.display="";
			document.getElementById("dd"+n).style.display="";
			alert("unhide row" + n);
		}
		
		//*********************  end scroll up/down effect global variable and funtion    ********************//
		
		SceneScene1.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene1.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					if( (x-1) >= 0 ){
						//*********************   scroll up effect     ********************//
						if(topRow == x){
							topRow--;
							unHideRow(topRow);
							buttomRow--;
						}
						//*********************** end scroll up effect    ********************//
						setCurrent(x-1,y);
					}
					break;
				case sf.key.DOWN:
					if(x < maxRow){
						//*********************   scroll down effect     ********************//
						if( buttomRow < x+1 ){
							hideRow(topRow);
							topRow++;
							buttomRow++;
						}
						//*********************  end scroll up effect     ********************//
						
						setCurrent(x+1,y);
					}
					break;
				case sf.key.ENTER:
					movie_id = current.attr('href');
					tipo_url = current.attr('tipo_url');
					sf.scene.hide('Scene1');
					sf.scene.show('Scene2');
					sf.scene.focus('Scene2');
					break;
				case sf.key.TOOLS:
					num=Math.floor(Math.random()*12);
					event.preventDefault();
					sf.scene.hide('Scene1');
					sf.scene.show('SceneLogin');
					sf.scene.focus('SceneLogin');
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};

		SceneScene2.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene2.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					sf.scene.hide('Scene2');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.N1:
					puntuar(1*2);
					break;
				case sf.key.N2:
					puntuar(2*2);
					break;
				case sf.key.N3:
					puntuar(3*2);
					break;
				case sf.key.N4:
					puntuar(4*2);
					break;
				case sf.key.N5:
					puntuar(5*2);
					break;
				case sf.key.BLUE:
					if(tipo_url!='Serie'){
					sf.scene.show('Trailer');
					sf.scene.focus('Trailer');
					}
					alert('pulsado boton azul');				
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneTrailer.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene2.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.RETURN:
					$("#video").html('');
					event.preventDefault();
					sf.scene.hide('Trailer');
					sf.scene.show('Scene2');
					sf.scene.focus('Scene2');
					break;
				case sf.key.N1:
					
					break;
				case sf.key.N2:
					
					break;
				case sf.key.N3:
					
					break;
				case sf.key.N4:
					
					break;
				case sf.key.N5:
					
					break;

				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};


		return this;
	}

})(jQuery, window, document);
