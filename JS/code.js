function nhan(){
    ten = document.getElementById("text1").value;
    email = document.getElementById("text4").value;
    tieude = document.getElementById("text2").value;
    mota = document.getElementById("text3").value;

    console.log(ten);
    console.log(email);console.log(tieude);console.log(mota);
	if(ten == ""){
		document.getElementById("err").style.display = "block";
	}
	if(email == ""){
		document.getElementById("erro").style.display = "block";
	}
	if(mota == ""){
		document.getElementById("error").style.display = "block";
	}
	if(ten != "" && email != "" && mota != ""){
		localStorage.setItem("tenkey", ten);
		localStorage.setItem("mailkey", email);
		localStorage.setItem("tittlekey", tieude);
		localStorage.setItem("motakey", mota);
		document.getElementById("text5").style = "display : block";
		document.getElementById("contact-1").style = "display : none";
	}
    
}


	
function again(){
	document.getElementById("err").style.display = "none";
	document.getElementById("erro").style.display = "none";
	document.getElementById("error").style.display = "none";
			document.getElementById("contact-1").style="display:block";
			document.getElementById("text5").style="display:none";
}
var element = document.getElementsByTagName("section");
var ind = 0;
	myslide(ind);
		function myslide(){
			for(var i=0; i< element.length; i++){
				element[i].style.display = "none";
			}
			if(ind >= element.length){
				ind = 0;
				}
			if(ind <= -1){
				ind = element.length-1;
				}
			element[ind].style.display="block";
			}
		function myclick(n){		
			ind = ind+n;
				myslide();
			}

$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
			if(pos_body>300){
					$('section h1,section p').addClass('hienra2');
			}
			else{
					$('section h1,section p').removeClass('hienra2');
			}
			// if(pos_body>300){
			// 	$('section p').addClass('hienra2');
			// }
			// else{
			// 	$('section p').removeClass('hienra2');
			// }
			if(pos_body>800){
				$('.before').addClass('show');
			}
			else{
				$('.before').removeClass('show');
			}
			if(pos_body>900){
				$('.before2').addClass('show1');
			}
			else{
				$('.before2').removeClass('show1');
			}
			if(pos_body>900){
				$('.before3').addClass('show2');
			}
			else{
				$('.before3').removeClass('show2');
			}
			if(pos_body>1900){
				$('.article-4 h1,.article-4 p').addClass('hienra2');
			}
			else{
				$('.article-4 h1,.article-4 p').removeClass('hienra2');
			}
			if(pos_body>1500){
				$('figure img').addClass('showra');
			}
			else{
				$('figure img').removeClass('showra');
			}
			if(pos_body>4300){
				$('.article-7 img').addClass('show-ra');
			}
			else{
				$('.article-7 img').removeClass('show-ra');
			}
			// if(pos_body>1900){
			// 	$('.article-4 p').addClass('hienra2');
			// }
			// else{
			// 	$('.article-4 p').removeClass('hienra2');
			// }
			if(pos_body>1000){
				 $('.fa-angle-up').addClass('hien-ra');
			}
			else{
				 $('.fa-angle-up').removeClass('hien-ra');
			}
				});
				$('.fa-angle-up').click(function(event) {
					$('html,body').animate({scrollTop: 0},0);
				 });
			 });
			 
var mename = localStorage.getItem("tenkey");

if(mename != null){
	document.getElementById("text5").style = "display : block";
	document.getElementById("contact-1").style = "display : none";
}