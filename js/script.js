$(document).ready(function() {
    //navbar toggle
    $('#bars-btn').click(function() {
        $('#bars-btn').toggleClass('bars-cross');
        $('#mobile-nav').toggleClass('show-m-nav');
    });

    //scroll to the anchor
    $.fn.scrollView = function(pos=$(this).offset().top) {
        return this.each(function() {
            $('html, body').animate({
                scrollTop: pos
            }, 600);
        });
    };

    function navsClick(nav) {
        $(nav).children().each(function() {
            $(this).children().on('click', function(event) {
                if (this.hash !== '') {
                    event.preventDefault();
                    var hash = this.hash;
                    console.log(this);
                    $(hash).scrollView();
                }
            })
        });
    }

    navsClick('#desktop-nav');
    navsClick('#mobile-nav');
    $('#nav-title').click(function() {
        $('#global-container').scrollView(0);
    });

});

function initMap() {
    var leeds = {lat: 53.801225, lng: -1.549123};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: leeds
    });
    var marker = new google.maps.Marker ({
        position: leeds,
        map: map,
    });

}
