/* Carousel Slider */
        $('.carousel').carousel({
            interval: 5000
        })
        $('#myCarousel').on('slide.bs.carousel', function () {
            $holder = $( "ol li.active" );
            $holder.next( "li" ).addClass("active");
            if($holder.is(':last-child'))
            {
                $holder.removeClass("active");
                $("ol li:first").addClass("active");
            }
            $holder.removeClass("active");
        });

        $('.carousel-indicators ol li').on("click",function(){
            $('.carousel-indicators ol li.active').removeClass("active");
            $(this).addClass("active");
        });


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);


window.onload = function() {
/* Float Box2  TOP Button */
        var box2 = document.getElementById('float_box2');

        setInterval(scroll, 0);
            function scroll(){
            var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                if(top <= 500){
                    box2.style.display = 'none';
                }
                else if(top > 500){
                    box2.style.display = 'block';
                }
            }

/* TOP button */

    document.getElementById('float_box2').onclick = function () {
    var go_top = setInterval(gotop,30);
         function gotop(){
            var Top = document.documentElement.scrollTop|| document.body.scrollTop;
            var speed = Math.floor(-Top / 5);
            document.documentElement.scrollTop=document.body.scrollTop = Top+speed;

            if(Top==0){
                clearInterval(go_top);
            }
         }
    }

/* Asking us button Action */

    document.getElementById('float_box3').onclick = function () {
            document.getElementById('asking_bcg').style.display = 'flex';
            document.getElementById('asking_interface').style.display = 'flex';
    }    
    document.getElementById('contact_us').onclick = function () {
            document.getElementById('asking_bcg').style.display = 'flex';
            document.getElementById('asking_interface').style.display = 'flex';
    }
    document.getElementById('contact_us2').onclick = function () {
            document.getElementById('asking_bcg').style.display = 'flex';
            document.getElementById('asking_interface').style.display = 'flex';
    }
    document.getElementById('exit').onclick = function() {
            document.getElementById('asking_bcg').style.display = 'none';
            document.getElementById('asking_interface').style.display = 'none';
    }

/* Sending Email */
    document.getElementById('send_email').onclick = function(){
       alert("Send successfully\nThanks for your mail,\nWe will do our best to reply within 1 working day.\nThanks.");
       document.getElementById('asking_bcg').style.display = 'none';
       document.getElementById('asking_interface').style.display = 'none';
    }
}