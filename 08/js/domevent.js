    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false);
    pic.addEventListener("mouseout", orignPic, false);
    
		function changePic() {			
			pic.src = "images/boy.png";
    }
    function orignPic() {
      pic.src = "images/girl.png";
    }