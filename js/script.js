$(document).ready(function() {
    $('#bars-btn').click(function() {
        $('#bars-btn').toggleClass('bars-cross');
        $('#mobile-nav').toggleClass('show-m-nav');
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
