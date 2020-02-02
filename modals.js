(function() {
    var i;
    var x;
    var dots;
    var captionText;
    var slideIndex = 1;
    var modal1 = false;
    var modal2 = false;
    var modal3 = false;
 
 
    //Modal LightBox
    $('.openModal').on('click', function(){
        modalImage = $(this).attr('id');
        if (modalImage === "modal1-image") {
            modal1 = true;
            modal2 = false;
        }
        else if (modalImage === "modal2-image") {
            modal1 = false;
            modal2 = true;
        } else if (modalImage === "modal3-image") {
            modal1 = false;
            modal2 = false;
            modal3 = true;
        }
        
        modalOpen();
    });
    
    function modalOpen(){
        if (modal1) {
            document.getElementById('myModal1').style.display = "block";
            document.getElementById('myModal2').style.display = "none";
            document.getElementById('myModal3').style.display = "none";
            x = document.getElementsByClassName("mySlides");
            dots = document.getElementsByClassName("smSlide");
            captionText = document.getElementById("caption");
        } else if (modal2){
            document.getElementById('myModal1').style.display = "none";
            document.getElementById('myModal2').style.display = "block";
            document.getElementById('myModal3').style.display = "none";
            x = document.getElementsByClassName("mySlides2");
            dots = document.getElementsByClassName("smSlide2");
            captionText = document.getElementsByClassName("caption2");            
        } else if (modal3){
            document.getElementById('myModal1').style.display = "none";
            document.getElementById('myModal2').style.display = "none";
            document.getElementById('myModal3').style.display = "block";
            x = document.getElementsByClassName("mySlides3");
            dots = document.getElementsByClassName("smSlide3");
            captionText = document.getElementsByClassName("caption3");            
        }
        
        $('.next').on('click', function(){
            plusDivs(1);
        });
        
        $('.prev').on('click', function(){
            plusDivs(-1);
        });
        
        $(dots).on('click', function(){
            if(modal1){
                num =  $( ".smSlide" ).index(this);
            }else if(modal2){
                num =  $( ".smSlide2" ).index(this);
            }else if(modal3){
                num =  $( ".smSlide3" ).index(this);
            }
            currentDiv(num);
        });
        
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function currentDiv(n) {
            showDivs(slideIndex = n + 1);
        }

        function showDivs(n) {
            if (n > x.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = x.length
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
            }
            x[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " w3-opacity-off";
            $(captionText).text(dots[slideIndex - 1].alt);
        }
    };
    
    $('.closeModal').on('click', function() {
        document.getElementById('myModal1').style.display = "none";
        document.getElementById('myModal2').style.display = "none";
        document.getElementById('myModal3').style.display = "none";
    });

})();