var directionsDisplay;
var displayPath;

import loadGoogleMapsAPI from 'load-google-maps-api';

let opt = {
    key: "AIzaSyALJXJGHtsniEtVTbzDj3H6j6hQUKV2cvA",
    language: "en",
    libraries: ["places"]
};

var orginBefore = false;
var destBefore = false;

function initMap() {
    loadGoogleMapsAPI(opt).then((googleMaps) => {
        var origin_place_id = null;
        var destination_place_id = null;
        var travel_mode = 'WALKING';
        var map = new google.maps.Map(document.getElementById('map'), {
            mapTypeControl: false,
            center: {
                lat: 42.331447,
                lng: -83.047632
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 13,
            styles : [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#596a80"},{"visibility":"on"}]}]
        });
        var originInput = document.getElementById('#origin-input');
        var destInput = document.getElementById('#destination-input');
        //var searchBox = new google.maps.places.searchBox(originInput);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(originInput);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(destInput);

        var iconBase = 'http://i.imgur.com/yeMqffk.png';
        var myLatlng = [
      		new google.maps.LatLng(42.3575, -83.0701),
      		new google.maps.LatLng(42.3575, -83.0701),
      		new google.maps.LatLng(42.4148, -82.9171),
      		new google.maps.LatLng(42.4404, -83.0758),
      		new google.maps.LatLng(42.4312, -83.161),
      		new google.maps.LatLng(42.4337, -83.2077),
      		new google.maps.LatLng(42.3868, -83.2314),
      		new google.maps.LatLng(42.3846, -83.2071),
      		new google.maps.LatLng(42.3662, -82.9525),
      		new google.maps.LatLng(42.4331, -83.2176),
      		new google.maps.LatLng(42.3778, -83.0559),
      		new google.maps.LatLng(42.4466, -83.1196),
      		new google.maps.LatLng(42.4057, -83.1918),
      		new google.maps.LatLng(42.3379, -83.0443),
      		new google.maps.LatLng(42.4096, -83.2103),
      		new google.maps.LatLng(42.3644, -83.0077),
      		new google.maps.LatLng(42.393, -83.2455),
      		new google.maps.LatLng(42.3415, -83.01),
      		new google.maps.LatLng(42.3494, -83.0346),
      		new google.maps.LatLng(42.3488, -82.999),
      		new google.maps.LatLng(42.4269, -82.9387),
      		new google.maps.LatLng(42.4139, -83.2428),
      		new google.maps.LatLng(42.3509, -83.2014),
      		new google.maps.LatLng(42.4351, -83.1439),
      		new google.maps.LatLng(42.4091, -83.2159),
      		new google.maps.LatLng(42.3838, -82.9647),
      		new google.maps.LatLng(42.3678, -83.0845),
      		new google.maps.LatLng(42.4003, -83.0004),
      		new google.maps.LatLng(42.3092, -83.132),
      		new google.maps.LatLng(42.4344, -83.0113),
      		new google.maps.LatLng(42.3764, -83.2016),
      		new google.maps.LatLng(42.3527, -83.1781),
      		new google.maps.LatLng(42.376, -82.9692),
      		new google.maps.LatLng(42.4297, -83.2281),
      		new google.maps.LatLng(42.4158, -83.2081),
      		new google.maps.LatLng(42.3496, -83.0522),
      		new google.maps.LatLng(42.4005, -83.199),
      		new google.maps.LatLng(42.4165, -83.192),
      		new google.maps.LatLng(42.4332, -83.255),
      		new google.maps.LatLng(42.3609, -83.2135),
      		new google.maps.LatLng(42.4466, -82.9551),
      		new google.maps.LatLng(42.3544, -83.0657),
      		new google.maps.LatLng(42.3725, -83.1985),
      		new google.maps.LatLng(42.3528, -83.1276),
      		new google.maps.LatLng(42.3514, -83.0449),
      		new google.maps.LatLng(42.3702, -83.231),
      		new google.maps.LatLng(42.3141, -83.1197),
      		new google.maps.LatLng(42.3532, -83.1626),
      		new google.maps.LatLng(42.4078, -82.9295),
      		new google.maps.LatLng(42.4106, -82.9577),
      		new google.maps.LatLng(42.429, -83.2727),
      		new google.maps.LatLng(42.415, -83.2434),
      		new google.maps.LatLng(42.4407, -82.9495),
      		new google.maps.LatLng(42.4466, -82.9966),
      		new google.maps.LatLng(42.4308, -82.9546),
      		new google.maps.LatLng(42.4387, -83.0162),
      		new google.maps.LatLng(42.3722, -83.2083),
      		new google.maps.LatLng(42.355, -83.0556),
      		new google.maps.LatLng(42.4019, -83.189),
      		new google.maps.LatLng(42.3924, -83.2422),
      		new google.maps.LatLng(42.4223, -83.1667),
      		new google.maps.LatLng(42.3386, -83.0467),
      		new google.maps.LatLng(42.3097, -83.1333),
      		new google.maps.LatLng(42.3351, -83.0823),
      		new google.maps.LatLng(42.4266, -83.0606),
      		new google.maps.LatLng(42.3689, -83.0603),
      		new google.maps.LatLng(42.4065, -83.1491),
      		new google.maps.LatLng(42.417, -83.1597),
      		new google.maps.LatLng(42.4296, -82.981),
      		new google.maps.LatLng(42.3826, -83.256),
      		new google.maps.LatLng(42.267, -83.1945),
      		new google.maps.LatLng(42.3703, -83.2322),
      		new google.maps.LatLng(42.3807, -83.268),
      		new google.maps.LatLng(42.3554, -83.2213),
      		new google.maps.LatLng(42.337, -83.0527),
      		new google.maps.LatLng(42.3762, -83.1624),
      		new google.maps.LatLng(42.3781, -83.1668),
      		new google.maps.LatLng(42.3545, -83.0627),
      		new google.maps.LatLng(42.4499, -82.9638),
      		new google.maps.LatLng(42.327, -83.0888),
      		new google.maps.LatLng(42.3766, -83.0162),
      		new google.maps.LatLng(42.3099, -83.1335),
      		new google.maps.LatLng(42.4362, -83.1713),
      		new google.maps.LatLng(42.4439, -83.0208),
      		new google.maps.LatLng(42.3927, -83.1896),
      		new google.maps.LatLng(42.386, -83.2303),
      		new google.maps.LatLng(42.435, -83.1068),
      		new google.maps.LatLng(42.3399, -83.2035),
      		new google.maps.LatLng(42.3593, -83.1764),
      		new google.maps.LatLng(42.3592, -83.1764),
      		new google.maps.LatLng(42.4295, -83.1706),
      		new google.maps.LatLng(42.4238, -83.0433),
      		new google.maps.LatLng(42.3858, -83.276),
      		new google.maps.LatLng(42.4205, -83.1496),
      		new google.maps.LatLng(42.3589, -83.1035),
      		new google.maps.LatLng(42.3551, -83.2218),
      		new google.maps.LatLng(42.4304, -83.2087),
      		new google.maps.LatLng(42.4332, -83.2819),
      		new google.maps.LatLng(42.332, -83.1341),
      		new google.maps.LatLng(42.3863, -83.0094),
      		new google.maps.LatLng(42.3599, -83.0027),
      		new google.maps.LatLng(42.3894, -83.196),
      		new google.maps.LatLng(42.3718, -83.2157),
      		new google.maps.LatLng(42.3805, -83.2647),
      		new google.maps.LatLng(42.36, -83.0298),
      		new google.maps.LatLng(42.346, -83.1355),
      		new google.maps.LatLng(42.4165, -83.1328),
      		new google.maps.LatLng(42.4304, -83.2108),
      		new google.maps.LatLng(42.378, -82.9787),
      		new google.maps.LatLng(42.4133, -82.9559),
      		new google.maps.LatLng(42.4172, -83.1527),
      		new google.maps.LatLng(42.2162, -83.2261),
      new google.maps.LatLng(42.4148, -82.9171),
      new google.maps.LatLng(42.4404, -83.0758),
      new google.maps.LatLng(42.4312, -83.161),
      new google.maps.LatLng(42.4337, -83.2077),
      new google.maps.LatLng(42.3868, -83.2314),
      new google.maps.LatLng(42.3846, -83.2071),
      new google.maps.LatLng(42.3662, -82.9525),
      new google.maps.LatLng(42.4331, -83.2176),
      new google.maps.LatLng(42.3778, -83.0559),
      new google.maps.LatLng(42.4466, -83.1196),
      new google.maps.LatLng(42.4057, -83.1918),
      new google.maps.LatLng(42.3379, -83.0443),
      new google.maps.LatLng(42.4096, -83.2103),
      new google.maps.LatLng(42.3644, -83.0077),
      new google.maps.LatLng(42.393, -83.2455),
      new google.maps.LatLng(42.3415, -83.01),
      new google.maps.LatLng(42.3494, -83.0346),
      new google.maps.LatLng(42.3488, -82.999),
      new google.maps.LatLng(42.4269, -82.9387),
      new google.maps.LatLng(42.4139, -83.2428),
      new google.maps.LatLng(42.3509, -83.2014),
      new google.maps.LatLng(42.4351, -83.1439),
      new google.maps.LatLng(42.4091, -83.2159),
      new google.maps.LatLng(42.3838, -82.9647),
      new google.maps.LatLng(42.3678, -83.0845),
      new google.maps.LatLng(42.4003, -83.0004),
      new google.maps.LatLng(42.3092, -83.132),
      new google.maps.LatLng(42.4344, -83.0113),
      new google.maps.LatLng(42.3764, -83.2016),
      new google.maps.LatLng(42.3527, -83.1781),
      new google.maps.LatLng(42.376, -82.9692),
      new google.maps.LatLng(42.4297, -83.2281),
      new google.maps.LatLng(42.4158, -83.2081),
      new google.maps.LatLng(42.3496, -83.0522),
      new google.maps.LatLng(42.4005, -83.199),
      new google.maps.LatLng(42.4165, -83.192),
      new google.maps.LatLng(42.4332, -83.255),
      new google.maps.LatLng(42.3609, -83.2135),
      new google.maps.LatLng(42.4466, -82.9551),
      new google.maps.LatLng(42.3544, -83.0657),
      new google.maps.LatLng(42.3725, -83.1985),
      new google.maps.LatLng(42.3528, -83.1276),
      new google.maps.LatLng(42.3514, -83.0449),
      new google.maps.LatLng(42.3702, -83.231),
      new google.maps.LatLng(42.3141, -83.1197),
      new google.maps.LatLng(42.3532, -83.1626),
      new google.maps.LatLng(42.4078, -82.9295),
      new google.maps.LatLng(42.4106, -82.9577),
      new google.maps.LatLng(42.429, -83.2727),
      new google.maps.LatLng(42.415, -83.2434),
      new google.maps.LatLng(42.4407, -82.9495),
      new google.maps.LatLng(42.4466, -82.9966),
      new google.maps.LatLng(42.4308, -82.9546),
      new google.maps.LatLng(42.4387, -83.0162),
      new google.maps.LatLng(42.3722, -83.2083),
      new google.maps.LatLng(42.355, -83.0556),
      new google.maps.LatLng(42.4019, -83.189),
      new google.maps.LatLng(42.3924, -83.2422),
      new google.maps.LatLng(42.4223, -83.1667),
      new google.maps.LatLng(42.3386, -83.0467),
      new google.maps.LatLng(42.3097, -83.1333),
      new google.maps.LatLng(42.3351, -83.0823),
      new google.maps.LatLng(42.4266, -83.0606),
      new google.maps.LatLng(42.3689, -83.0603),
      new google.maps.LatLng(42.4065, -83.1491),
      new google.maps.LatLng(42.417, -83.1597),
      new google.maps.LatLng(42.4296, -82.981),
      new google.maps.LatLng(42.3826, -83.256),
      new google.maps.LatLng(42.267, -83.1945),
      new google.maps.LatLng(42.3703, -83.2322),
      new google.maps.LatLng(42.3807, -83.268),
      new google.maps.LatLng(42.3554, -83.2213),
      new google.maps.LatLng(42.337, -83.0527),
      new google.maps.LatLng(42.3762, -83.1624),
      new google.maps.LatLng(42.3781, -83.1668),
      new google.maps.LatLng(42.3545, -83.0627),
      new google.maps.LatLng(42.4499, -82.9638),
      new google.maps.LatLng(42.327, -83.0888),
      new google.maps.LatLng(42.3766, -83.0162),
      new google.maps.LatLng(42.3099, -83.1335),
      new google.maps.LatLng(42.4362, -83.1713),
      new google.maps.LatLng(42.4439, -83.0208),
      new google.maps.LatLng(42.3927, -83.1896),
      new google.maps.LatLng(42.386, -83.2303),
      new google.maps.LatLng(42.435, -83.1068),
      new google.maps.LatLng(42.3399, -83.2035),
      new google.maps.LatLng(42.3593, -83.1764),
      new google.maps.LatLng(42.3592, -83.1764),
      new google.maps.LatLng(42.4295, -83.1706),
      new google.maps.LatLng(42.4238, -83.0433),
      new google.maps.LatLng(42.3858, -83.276),
      new google.maps.LatLng(42.4205, -83.1496),
      new google.maps.LatLng(42.3589, -83.1035),
      new google.maps.LatLng(42.3551, -83.2218),
      new google.maps.LatLng(42.4304, -83.2087),
      new google.maps.LatLng(42.4332, -83.2819),
      new google.maps.LatLng(42.332, -83.1341),
      new google.maps.LatLng(42.3863, -83.0094),
      new google.maps.LatLng(42.3599, -83.0027),
      new google.maps.LatLng(42.3894, -83.196),
      new google.maps.LatLng(42.3718, -83.2157),
      new google.maps.LatLng(42.3805, -83.2647),
      new google.maps.LatLng(42.36, -83.0298),
      new google.maps.LatLng(42.346, -83.1355),
      new google.maps.LatLng(42.4165, -83.1328),
      new google.maps.LatLng(42.4304, -83.2108),
      new google.maps.LatLng(42.378, -82.9787),
      new google.maps.LatLng(42.4133, -82.9559),
      new google.maps.LatLng(42.4172, -83.1527),
      new google.maps.LatLng(42.2162, -83.2261),
      new google.maps.LatLng(42.4236, -83.0434),
      new google.maps.LatLng(42.3509, -83.0259),
      new google.maps.LatLng(42.4345, -83.0045),
      new google.maps.LatLng(42.4415, -83.0923),
      new google.maps.LatLng(42.3571, -83.0672),
      new google.maps.LatLng(42.373, -82.944),
      new google.maps.LatLng(42.3853, -83.2226),
      new google.maps.LatLng(42.3995, -83.1886),
      new google.maps.LatLng(42.4183, -83.2347),
      new google.maps.LatLng(42.3258, -83.1444),
      new google.maps.LatLng(42.399, -83.189),
      new google.maps.LatLng(42.4015, -83.1924),
      new google.maps.LatLng(42.3729, -83.0982),
      new google.maps.LatLng(42.4218, -83.2382),
      new google.maps.LatLng(42.4049, -83.2216),
      new google.maps.LatLng(42.3599, -82.9472),
      new google.maps.LatLng(42.4314, -83.1986),
      new google.maps.LatLng(42.4029, -83.2425),
      new google.maps.LatLng(42.3197, -83.0898),
      new google.maps.LatLng(42.4388, -83.2131),
      new google.maps.LatLng(42.4294, -83.0683),
      new google.maps.LatLng(42.429, -83.1647),
      new google.maps.LatLng(42.4434, -83.1921),
      new google.maps.LatLng(42.3275, -83.1137),
      new google.maps.LatLng(42.3636, -83.0567),
      new google.maps.LatLng(42.379, -83.1321),
      new google.maps.LatLng(42.3762, -83.0164),
      new google.maps.LatLng(42.3292, -83.1277),
      new google.maps.LatLng(42.4192, -83.2788),
      new google.maps.LatLng(42.3836, -82.9642),
      new google.maps.LatLng(42.4245, -83.2132),
      new google.maps.LatLng(42.3648, -83.0639),
      new google.maps.LatLng(42.4016, -82.9479),
      new google.maps.LatLng(42.4159, -83.2496),
      new google.maps.LatLng(42.3883, -82.9646),
      new google.maps.LatLng(42.3445, -83.1433),
      new google.maps.LatLng(42.4046, -82.9647),
      new google.maps.LatLng(42.365, -83.0639),
      new google.maps.LatLng(42.3572, -83.178),
      new google.maps.LatLng(42.3394, -83.2265),
      new google.maps.LatLng(42.3703, -82.9538),
      new google.maps.LatLng(42.369, -83.1153),
      new google.maps.LatLng(42.4393, -82.959),
      new google.maps.LatLng(42.4288, -83.1733),
      new google.maps.LatLng(42.4198, -83.1124),
      new google.maps.LatLng(42.378, -83.0349),
      new google.maps.LatLng(42.3304, -83.1307),
      new google.maps.LatLng(42.332, -83.0463),
      new google.maps.LatLng(42.4183, -83.0457),
      new google.maps.LatLng(42.3463, -83.0381),
      new google.maps.LatLng(42.3725, -83.0959),
      new google.maps.LatLng(42.3603, -83.1124),
      new google.maps.LatLng(42.3992, -83.2319),
      new google.maps.LatLng(42.3859, -83.2241),
      new google.maps.LatLng(42.3287, -83.132),
      new google.maps.LatLng(42.339, -83.2273),
      new google.maps.LatLng(42.2674, -83.2351),
      new google.maps.LatLng(42.4139, -82.9549),
      new google.maps.LatLng(42.3937, -82.9411),
      new google.maps.LatLng(42.3321, -83.0474),
      new google.maps.LatLng(42.3575, -83.1191),
      new google.maps.LatLng(42.3631, -83.0104),
      new google.maps.LatLng(42.4237, -83.1033),
      new google.maps.LatLng(42.449, -82.9678),
      new google.maps.LatLng(42.4293, -83.1757),
      new google.maps.LatLng(42.4269, -83.0788),
      new google.maps.LatLng(42.3332, -83.0969),
      new google.maps.LatLng(42.4096, -83.0023),
      new google.maps.LatLng(42.3307, -83.0506),
      new google.maps.LatLng(42.3374, -83.2327),
      new google.maps.LatLng(42.4091, -82.9859),
      new google.maps.LatLng(42.3819, -83.2639),
      new google.maps.LatLng(42.4089, -83.1948),
      new google.maps.LatLng(42.3514, -83.0725),
      new google.maps.LatLng(42.3664, -83.0679),
      new google.maps.LatLng(42.4172, -83.1283),
      new google.maps.LatLng(42.4276, -83.1913),
      new google.maps.LatLng(42.3339, -83.2248),
      new google.maps.LatLng(42.4302, -83.2198),
      new google.maps.LatLng(42.3839, -83.0306),
      new google.maps.LatLng(42.4368, -83.062),
      new google.maps.LatLng(42.4102, -83.1832),
      new google.maps.LatLng(42.4289, -83.1712),
      new google.maps.LatLng(42.4325, -83.0926),
      new google.maps.LatLng(42.3825, -83.0121),
      new google.maps.LatLng(42.4198, -83.182),
      new google.maps.LatLng(42.3287, -83.1003),
      new google.maps.LatLng(42.3624, -83.2313),
      new google.maps.LatLng(42.4122, -83.1833),
      new google.maps.LatLng(42.3897, -83.1208),
      new google.maps.LatLng(42.4346, -83.0784),
      new google.maps.LatLng(42.342, -83.0232),
      new google.maps.LatLng(42.3718, -83.2264),
      new google.maps.LatLng(42.3067, -83.132),
      new google.maps.LatLng(42.3245, -83.1156),
      new google.maps.LatLng(42.413, -83.2747),
      new google.maps.LatLng(42.4045, -83.1946),
      new google.maps.LatLng(42.3693, -83.1982),
      new google.maps.LatLng(42.3646, -83.244),
      new google.maps.LatLng(42.4143, -83.1697),
      new google.maps.LatLng(42.3576, -83.0701),
      new google.maps.LatLng(42.3333, -83.1372),
      new google.maps.LatLng(42.348, -83.0008),
      new google.maps.LatLng(42.3597, -83.2061),
      new google.maps.LatLng(42.4155, -83.2529),
      new google.maps.LatLng(42.3144, -83.099),
      new google.maps.LatLng(42.4099, -83.1381),
      new google.maps.LatLng(42.3522, -83.1654),
      new google.maps.LatLng(42.418, -83.2064),
      new google.maps.LatLng(42.3797, -83.0706),
      new google.maps.LatLng(42.3652, -83.1663),
      new google.maps.LatLng(42.3934, -83.2018),
      new google.maps.LatLng(42.3677, -83.0847),
      new google.maps.LatLng(42.3417, -83.0531),
      new google.maps.LatLng(42.3545, -83.2238),
      new google.maps.LatLng(42.3524, -83.1605),
      new google.maps.LatLng(42.3928, -83.1221),
      new google.maps.LatLng(42.3649, -83.1948),
      new google.maps.LatLng(42.3429, -83.0695),
      new google.maps.LatLng(42.3585, -82.9461),
      new google.maps.LatLng(42.3501, -83.2343),
      new google.maps.LatLng(42.3365, -83.0664),
      new google.maps.LatLng(42.3893, -83.1453),
      new google.maps.LatLng(42.4162, -83.2042),
      new google.maps.LatLng(42.3478, -83.0281),
      new google.maps.LatLng(42.3793, -83.0702),
      new google.maps.LatLng(42.4147, -82.9582),
      new google.maps.LatLng(42.4176, -83.1354),
      new google.maps.LatLng(42.3989, -82.9842),
      new google.maps.LatLng(42.3436, -83.0742),
      new google.maps.LatLng(42.3439, -83.0744),
      new google.maps.LatLng(42.3512, -83.0585),
      new google.maps.LatLng(42.3471, -83.0618),
      new google.maps.LatLng(42.3611, -83.2337),
      new google.maps.LatLng(42.3726, -83.1878),
      new google.maps.LatLng(42.3578, -83.2223),
      new google.maps.LatLng(42.4221, -82.9188),
      new google.maps.LatLng(42.4171, -83.1593),
      new google.maps.LatLng(42.3442, -83.0652),
      new google.maps.LatLng(42.3874, -83.1353),
      new google.maps.LatLng(42.4487, -83.0053),
      new google.maps.LatLng(42.4, -83.1857),
      new google.maps.LatLng(42.4041, -83.1583),
      new google.maps.LatLng(42.3465, -83.048),
      new google.maps.LatLng(42.3325, -83.0646),
      new google.maps.LatLng(42.3345, -83.0451),
      new google.maps.LatLng(42.3415, -83.114),
      new google.maps.LatLng(42.3741, -83.0794),
      new google.maps.LatLng(42.4241, -83.1465),
      new google.maps.LatLng(42.3615, -83.0211),
      new google.maps.LatLng(42.3732, -83.2073),
      new google.maps.LatLng(42.3365, -83.2074),
      new google.maps.LatLng(42.3654, -83.1942),
      new google.maps.LatLng(42.3902, -83.201),
      new google.maps.LatLng(42.3251, -83.1182),
      new google.maps.LatLng(42.4112, -83.153),
      new google.maps.LatLng(42.4403, -83.086),
      new google.maps.LatLng(42.4092, -82.9778),
      new google.maps.LatLng(42.3763, -83.0992),
      new google.maps.LatLng(42.3362, -83.0369),
      new google.maps.LatLng(42.3779, -83.0351),
      new google.maps.LatLng(42.4416, -83.187),
      new google.maps.LatLng(42.4293, -83.2742),
      new google.maps.LatLng(42.3528, -83.0614),
      new google.maps.LatLng(42.3526, -83.0614),
      new google.maps.LatLng(42.4446, -83.029),
      new google.maps.LatLng(42.3593, -83.1291),
      new google.maps.LatLng(42.3618, -83.0694),
      new google.maps.LatLng(42.3564, -83.2453),
      new google.maps.LatLng(42.3327, -83.1077),
      new google.maps.LatLng(42.3192, -83.1032),
      new google.maps.LatLng(42.3492, -83.1336),
      new google.maps.LatLng(42.3952, -83.1591),
      new google.maps.LatLng(42.4196, -83.1622),
      new google.maps.LatLng(42.3687, -83.0429),
      new google.maps.LatLng(42.3495, -83.0346),
      new google.maps.LatLng(42.3804, -82.9437),
      new google.maps.LatLng(42.349, -83.0341),
      new google.maps.LatLng(42.411, -83.1833),
      new google.maps.LatLng(42.3589, -83.2338),
      new google.maps.LatLng(42.3192, -83.1073),
      new google.maps.LatLng(42.4225, -83.1042),
      new google.maps.LatLng(42.3801, -83.2693),
      new google.maps.LatLng(42.4188, -82.9476),
      new google.maps.LatLng(42.3585, -83.1676),
      new google.maps.LatLng(42.3636, -83.0379),
      new google.maps.LatLng(42.3892, -82.9772),
      new google.maps.LatLng(42.3072, -83.1389),
      new google.maps.LatLng(42.3431, -83.234),
      new google.maps.LatLng(42.3587, -83.1866),
      new google.maps.LatLng(42.3341, -83.0399),
      new google.maps.LatLng(42.4338, -83.2309),
      new google.maps.LatLng(42.4213, -83.1836),
      new google.maps.LatLng(42.369, -83.1325),
      new google.maps.LatLng(42.3546, -83.2348),
      new google.maps.LatLng(42.4458, -83.1617),
      new google.maps.LatLng(42.3723, -83.2212),
      new google.maps.LatLng(42.3568, -83.1497),
      new google.maps.LatLng(42.3331, -83.1244),
      new google.maps.LatLng(42.3685, -83.1932),
      new google.maps.LatLng(42.4353, -83.0003),
      new google.maps.LatLng(42.3463, -83.061),
      new google.maps.LatLng(42.3993, -83.2152),
      new google.maps.LatLng(42.3928, -82.9658),
      new google.maps.LatLng(42.4275, -83.239),
      new google.maps.LatLng(42.3547, -83.0714),
      new google.maps.LatLng(42.3765, -82.9575),
      new google.maps.LatLng(42.4001, -83.0006),
      new google.maps.LatLng(42.4396, -83.0984),
      new google.maps.LatLng(42.3333, -83.1369),
      new google.maps.LatLng(42.4169, -83.1488),
      new google.maps.LatLng(42.3891, -83.2072),
      new google.maps.LatLng(42.3507, -83.0748),
      new google.maps.LatLng(42.3448, -83.1328),
      new google.maps.LatLng(42.4322, -83.0497),
      new google.maps.LatLng(42.3649, -83.086),
      new google.maps.LatLng(42.391, -83.2028),
      new google.maps.LatLng(42.4345, -83.0312),
      new google.maps.LatLng(42.3937, -82.9468),
      new google.maps.LatLng(42.3422, -83.2319),
      new google.maps.LatLng(42.3542, -83.2078),
      new google.maps.LatLng(42.4112, -83.1894),
      new google.maps.LatLng(42.3588, -83.1035),
      new google.maps.LatLng(42.3647, -83.2447),
      new google.maps.LatLng(42.4227, -83.2577),
      new google.maps.LatLng(42.3311, -83.1356),
      new google.maps.LatLng(42.333, -83.0968),
      new google.maps.LatLng(42.4005, -83.2533),
      new google.maps.LatLng(42.3854, -83.2031),
      new google.maps.LatLng(42.3347, -83.0466),
      new google.maps.LatLng(42.3653, -83.1972),
      new google.maps.LatLng(42.4132, -83.1865),
      new google.maps.LatLng(42.3503, -83.2357),
      new google.maps.LatLng(42.444, -83.1572),
      new google.maps.LatLng(42.4329, -83.2481),
      new google.maps.LatLng(42.3413, -83.0075),
      new google.maps.LatLng(42.4379, -83.0857),
      new google.maps.LatLng(42.3602, -83.2032),
      new google.maps.LatLng(42.3565, -83.072),
      new google.maps.LatLng(42.4465, -83.0379),
      new google.maps.LatLng(42.4074, -82.9441),
      new google.maps.LatLng(42.4137, -82.9409),
      new google.maps.LatLng(42.3794, -83.1589),
      new google.maps.LatLng(42.388, -83.1953),
      new google.maps.LatLng(42.333, -83.1335),
      new google.maps.LatLng(42.3979, -83.2372),
      new google.maps.LatLng(42.4008, -83.1939),
      new google.maps.LatLng(42.3553, -83.1639),
      new google.maps.LatLng(42.3807, -83.0906),
      new google.maps.LatLng(42.4475, -82.9688),
      new google.maps.LatLng(42.4027, -82.939),
      new google.maps.LatLng(42.3115, -83.0926),
      new google.maps.LatLng(42.3897, -83.1236),
      new google.maps.LatLng(42.4242, -83.0732),
      new google.maps.LatLng(42.375, -82.9984),
      new google.maps.LatLng(42.3718, -83.1094),
      new google.maps.LatLng(42.4377, -83.0879),
      new google.maps.LatLng(42.4415, -83.2097),
      new google.maps.LatLng(42.399, -83.2572),
      new google.maps.LatLng(42.4136, -82.945),
      new google.maps.LatLng(42.3637, -83.1246),
      new google.maps.LatLng(42.324, -83.0907),
      new google.maps.LatLng(42.4022, -83.1747),
      new google.maps.LatLng(42.3493, -83.0533),
      new google.maps.LatLng(42.3241, -83.081),
      new google.maps.LatLng(42.4347, -83.1209),
      new google.maps.LatLng(42.3482, -83.0886),
      new google.maps.LatLng(42.4431, -82.9477),
      new google.maps.LatLng(42.3965, -83.2175),
      new google.maps.LatLng(42.3822, -83.0747),
      new google.maps.LatLng(42.3612, -83.1358),
      new google.maps.LatLng(42.4186, -83.2651),
      new google.maps.LatLng(42.425, -82.9358),
      new google.maps.LatLng(42.4401, -83.185),
      new google.maps.LatLng(42.4215, -82.9333),
      new google.maps.LatLng(42.4392, -83.0067),
      new google.maps.LatLng(42.3511, -83.071),
      new google.maps.LatLng(42.403, -83.2306),
      new google.maps.LatLng(42.3978, -83.1756),
      new google.maps.LatLng(42.4251, -83.1951),
      new google.maps.LatLng(42.4168, -83.1768),
      new google.maps.LatLng(42.4035, -83.1652),
      new google.maps.LatLng(42.3454, -83.0564),
      new google.maps.LatLng(42.3568, -83.0668),
      new google.maps.LatLng(42.3201, -83.0934),
      new google.maps.LatLng(42.3787, -83.1982),
      new google.maps.LatLng(42.3489, -83.0652),
      new google.maps.LatLng(42.356, -83.0693),
      new google.maps.LatLng(42.3613, -83.1796),
      new google.maps.LatLng(42.3432, -83.223),
      new google.maps.LatLng(42.428, -83.1744),
      new google.maps.LatLng(42.3802, -83.1927),
      new google.maps.LatLng(42.4329, -83.2821),
      new google.maps.LatLng(42.3506, -83.0432),
      new google.maps.LatLng(42.4015, -83.2216),
      new google.maps.LatLng(42.3579, -83.0879),
      new google.maps.LatLng(42.3801, -83.2093),
      new google.maps.LatLng(42.4443, -82.9902),
      new google.maps.LatLng(42.4182, -82.9492),
      new google.maps.LatLng(42.4399, -83.1381),
      new google.maps.LatLng(42.4058, -82.9353),
      new google.maps.LatLng(42.3398, -83.0282),
      new google.maps.LatLng(42.3417, -83.2038),
      new google.maps.LatLng(42.3416, -83.2039),
      new google.maps.LatLng(42.3734, -83.1644),
      new google.maps.LatLng(42.4331, -82.9886),
      new google.maps.LatLng(42.3684, -83.1718),
      new google.maps.LatLng(42.3681, -83.172),
      new google.maps.LatLng(42.3729, -83.1444),
      new google.maps.LatLng(42.3504, -83.0582),
      new google.maps.LatLng(42.3319, -83.0636),
      new google.maps.LatLng(42.3317, -83.0481),
      new google.maps.LatLng(42.4453, -83.172),
      new google.maps.LatLng(42.3316, -83.0638),
      new google.maps.LatLng(42.4119, -83.1785),
      new google.maps.LatLng(42.4239, -82.9632),
      new google.maps.LatLng(42.4409, -82.9494),
      new google.maps.LatLng(42.4198, -82.9273),
      new google.maps.LatLng(42.4344, -82.993),
      new google.maps.LatLng(42.3717, -83.11),
      new google.maps.LatLng(42.3391, -83.0673),
      new google.maps.LatLng(42.4481, -82.993),
      new google.maps.LatLng(42.3841, -83.0877),
      new google.maps.LatLng(42.3916, -83.1733),
      new google.maps.LatLng(42.4019, -82.93),
      new google.maps.LatLng(42.3229, -83.1316),
      new google.maps.LatLng(42.3907, -82.9717),
      new google.maps.LatLng(42.3568, -83.0534),
      new google.maps.LatLng(42.354, -83.2626),
      new google.maps.LatLng(42.3563, -83.0522),
      new google.maps.LatLng(42.3823, -83.2623),
      new google.maps.LatLng(42.3903, -83.1201),
      new google.maps.LatLng(42.4307, -83.0554),
      new google.maps.LatLng(42.3356, -83.22),
      new google.maps.LatLng(42.4107, -83.1475),
      new google.maps.LatLng(42.4104, -83.1475),
      new google.maps.LatLng(42.4103, -83.1472),
      new google.maps.LatLng(42.4105, -83.1475),
      new google.maps.LatLng(42.4203, -82.9396),
      new google.maps.LatLng(42.4351, -83.2762),
      new google.maps.LatLng(42.3731, -83.1084),
      new google.maps.LatLng(42.4086, -82.9949),
      new google.maps.LatLng(42.3369, -83.0421),
      new google.maps.LatLng(42.415, -82.9501),
      new google.maps.LatLng(42.3955, -83.0418),
      new google.maps.LatLng(42.3536, -83.1865),
      new google.maps.LatLng(42.3776, -83.1631),
      new google.maps.LatLng(42.3619, -83.1212),
      new google.maps.LatLng(42.3619, -83.0933),
      new google.maps.LatLng(42.3618, -83.0931),
      new google.maps.LatLng(42.351, -83.2363),
      new google.maps.LatLng(42.3597, -83.0628),
      new google.maps.LatLng(42.4117, -82.9571),
      new google.maps.LatLng(42.3823, -83.0761),
      new google.maps.LatLng(42.3545, -83.06),
      new google.maps.LatLng(42.339, -83.0299),
      new google.maps.LatLng(42.3434, -82.9773),
      new google.maps.LatLng(42.4406, -82.9488),
      new google.maps.LatLng(42.3392, -83.0291),
      new google.maps.LatLng(42.4266, -82.9855),
      new google.maps.LatLng(42.4295, -83.0678),
      new google.maps.LatLng(42.4197, -83.1821),
      new google.maps.LatLng(42.336, -83.0465),
      new google.maps.LatLng(42.4452, -82.9529),
      new google.maps.LatLng(42.4098, -83.1704),
      new google.maps.LatLng(42.366, -83.2021),
      new google.maps.LatLng(42.4079, -82.9297),
      new google.maps.LatLng(42.4332, -83.052),
      new google.maps.LatLng(42.3867, -83.025),
      new google.maps.LatLng(42.3648, -83.2448),
      new google.maps.LatLng(42.3755, -83.0202),
      new google.maps.LatLng(42.429, -83.2582),
      new google.maps.LatLng(42.3755, -83.0199),
      new google.maps.LatLng(42.367, -83.0658),
      new google.maps.LatLng(42.3312, -83.1273),
      new google.maps.LatLng(42.3926, -82.9835),
      new google.maps.LatLng(42.3647, -83.0693),
      new google.maps.LatLng(42.3533, -83.0744),
      new google.maps.LatLng(42.3728, -83.1878),
      new google.maps.LatLng(42.3892, -82.9682),
      new google.maps.LatLng(42.3514, -83.0671),
      new google.maps.LatLng(42.3484, -83.0561),
      new google.maps.LatLng(42.3415, -83.2135),
      new google.maps.LatLng(42.3687, -83.1866),
      new google.maps.LatLng(42.3593, -83.0364),
      new google.maps.LatLng(42.4432, -83.1519),
      new google.maps.LatLng(42.4127, -83.1854),
      new google.maps.LatLng(42.3635, -83.2256),
      new google.maps.LatLng(42.3141, -83.1188),
      new google.maps.LatLng(42.4236, -83.0432),
      new google.maps.LatLng(42.4388, -83.0002),
      new google.maps.LatLng(42.3497, -83.1237),
      new google.maps.LatLng(42.4471, -83.0812),
      new google.maps.LatLng(42.3589, -83.1913),
      new google.maps.LatLng(42.4197, -83.1089),
      new google.maps.LatLng(42.429, -83.2313),
      new google.maps.LatLng(42.4236, -82.9385),
      new google.maps.LatLng(42.3989, -83.1251),
      new google.maps.LatLng(42.413, -83.1529),
      new google.maps.LatLng(42.3068, -83.1031),
      new google.maps.LatLng(42.3488, -83.2328),
      new google.maps.LatLng(42.3566, -83.2287),
      new google.maps.LatLng(42.4097, -83.2241),
      new google.maps.LatLng(42.4143, -83.285),
      new google.maps.LatLng(42.4166, -83.1894),
      new google.maps.LatLng(42.3718, -83.2314),
      new google.maps.LatLng(42.3718, -83.2312),
      new google.maps.LatLng(42.3721, -83.2311),
      new google.maps.LatLng(42.4253, -83.0517),
      new google.maps.LatLng(42.4048, -83.1686),
      new google.maps.LatLng(42.3889, -83.2649),
      new google.maps.LatLng(42.4052, -83.2358),
      new google.maps.LatLng(42.3678, -83.0754),
      new google.maps.LatLng(42.343, -83.077),
      new google.maps.LatLng(42.3674, -83.0847),
      new google.maps.LatLng(42.377, -83.2086),
      new google.maps.LatLng(42.4115, -82.9605),
      new google.maps.LatLng(42.3499, -83.0504),
      new google.maps.LatLng(42.2903, -83.1233),
      new google.maps.LatLng(42.4266, -83.0239),
      new google.maps.LatLng(42.4453, -83.1701),
      new google.maps.LatLng(42.4285, -82.9786),
      new google.maps.LatLng(42.4087, -82.9808),
      new google.maps.LatLng(42.3756, -82.9395),
      new google.maps.LatLng(42.4136, -83.2102),
      new google.maps.LatLng(42.3525, -83.0616),
      new google.maps.LatLng(42.3562, -83.1693),
      new google.maps.LatLng(42.4288, -83.0781),
      new google.maps.LatLng(42.4331, -83.1298),
      new google.maps.LatLng(42.4088, -83.0568),
      new google.maps.LatLng(42.41, -82.9599),
      new google.maps.LatLng(42.3882, -83.1686),
      new google.maps.LatLng(42.3882, -83.1687),
      new google.maps.LatLng(42.4222, -83.0047),
      new google.maps.LatLng(42.3879, -83.178),
      new google.maps.LatLng(42.3875, -83.1781),
      new google.maps.LatLng(42.361, -82.9826),
      new google.maps.LatLng(42.4289, -82.9573),
      new google.maps.LatLng(42.4086, -83.2358),
      new google.maps.LatLng(42.3978, -82.9283),
      new google.maps.LatLng(42.4181, -82.9322),
      new google.maps.LatLng(42.3478, -83.1977),
      new google.maps.LatLng(42.3349, -83.0425),
      new google.maps.LatLng(42.3406, -83.0847),
      new google.maps.LatLng(42.3996, -83.224),
      new google.maps.LatLng(42.4386, -83.0163),
      new google.maps.LatLng(42.4299, -83.2285),
      new google.maps.LatLng(42.3405, -83.0243),
      new google.maps.LatLng(42.438, -83.1883),
      new google.maps.LatLng(42.3394, -83.1046),
      new google.maps.LatLng(42.3822, -83.0259),
      new google.maps.LatLng(42.3841, -82.9923),
      new google.maps.LatLng(42.4327, -83.275),
      new google.maps.LatLng(42.3627, -83.1747),
      new google.maps.LatLng(42.3749, -83.0039),
      new google.maps.LatLng(42.4258, -82.9546),
      new google.maps.LatLng(42.3646, -83.1973),
      new google.maps.LatLng(42.4421, -83.2867),
      new google.maps.LatLng(42.3923, -82.9365),
      new google.maps.LatLng(42.35, -83.0297),
      new google.maps.LatLng(42.3562, -83),
      new google.maps.LatLng(42.4045, -82.9403),
      new google.maps.LatLng(42.4037, -82.9708),
      new google.maps.LatLng(42.3768, -82.9409),
      new google.maps.LatLng(42.3382, -83.0542),
      new google.maps.LatLng(42.3487, -83.0225),
      new google.maps.LatLng(42.4081, -83.2454),
      new google.maps.LatLng(42.3566, -83.064),
      new google.maps.LatLng(42.3078, -83.136),
      new google.maps.LatLng(42.4431, -83.2589),
      new google.maps.LatLng(42.4499, -82.9678),
      new google.maps.LatLng(42.3565, -83.0721),
      new google.maps.LatLng(42.3798, -83.0987),
      new google.maps.LatLng(42.3824, -83.0742),
      new google.maps.LatLng(42.4306, -83.1887),
      new google.maps.LatLng(42.3857, -83.1801),
      new google.maps.LatLng(42.3829, -83.2272),
      new google.maps.LatLng(42.4056, -83.2369),
      new google.maps.LatLng(42.4258, -82.9491),
      new google.maps.LatLng(42.4102, -83.1253),
      new google.maps.LatLng(42.3876, -83.1932),
      new google.maps.LatLng(42.4274, -83.1595),
      new google.maps.LatLng(42.4198, -83.0137),
      new google.maps.LatLng(42.3552, -83.0499),
      new google.maps.LatLng(42.4352, -83.0226),
      new google.maps.LatLng(42.4293, -83.2462),
      new google.maps.LatLng(42.444, -83.1413)
      ];

        console.log("custom", typeof myLatlng, myLatlng);
        console.log("my sex", typeof getPoints(), myLatlng);
        var a = [
          [new google.maps.LatLng(42.35, -83.0297)],
          [new google.maps.LatLng(42.3562, -83)]
        ];
        var marker;
        var image = {
          url: 'http://i.imgur.com/5hFICRf.png',
          scaledSize: new google.maps.Size(24, 24),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0)
        }

        for(var i=0; i<myLatlng.length; i++) {
           marker = new google.maps.Marker({
              position: myLatlng[i],
              map: map,
              icon: image
          });
        };



        /*

        var gradient = [
            'rgba(255, 0, 0, 0)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 100, 1)',
            'rgba(255, 0, 50, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(223, 0, 0, 1)',
            'rgba(200, 0, 0, 1)',
            'rgba(200, 0, 0, 1)',
            'rgba(210, 0, 0, 1)',
            'rgba(220, 0, 0, 1)',
            'rgba(230, 0, 0, 1)',
            'rgba(240, 0, 0, 1)',
            'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
        heatmap.set('radius', heatmap.get('radius') ? null : 5);
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.8);
*/
        displayPath = [];

        var directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(map);
        var origin_input = document.getElementById('origin-input');
        var destination_input = document.getElementById('destination-input');

        var origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
        var destination_autocomplete = new google.maps.places.Autocomplete(destination_input);

        origin_autocomplete.bindTo('bounds', map);
        destination_autocomplete.bindTo('bounds', map);

        origin_autocomplete.addListener('place_changed', function() {
          var place = getPlaceAndCheck(origin_autocomplete);
          origin_place_id = place.place_id;

              expandViewportToFitPlace(map, place);
              displayPath = [];

              if (!orginBefore) {orginBefore = true;}
              else {
                appendDirections([origin_place_id, destination_place_id]);
                route(origin_place_id, destination_place_id, travel_mode,
                  directionsService, directionsDisplay, displayPath);
                }
            }
        );

        destination_autocomplete.addListener('place_changed', function() {
          var place = getPlaceAndCheck(destination_autocomplete);
          destination_place_id = place.place_id;

          if(!destBefore) {
            destBefore = true;
          }

            expandViewportToFitPlace(map, place);
            appendPanel();
            appendDirections([origin_place_id, destination_place_id]);

            displayPath = [];
            route(origin_place_id, destination_place_id, travel_mode,
                directionsService, directionsDisplay, displayPath);
              }
        )
    })
}

function route(origin_place_id, destination_place_id, travel_mode,
    directionsService, directionsDisplay, displayPath) {
    console.log("trying to change the route!");
    if (isPlaceValid) console.log("I got that valid places ~!");

    var request = {
        origin: {'placeId': origin_place_id},
        destination: {'placeId': destination_place_id},
        travelMode: travel_mode,
        provideRouteAlternatives: true
    };

    directionsService.route(request, function(response, status) {
        if (status == "OK") {
            console.log("success to load route!", response.routes);

            var len = response.routes.length;
            for (var i = 0; i < len; i++) {
                var changedResponse = jQuery.extend(true, {}, response);
                changedResponse.routes[0] = response.routes[i];
                console.log("these are routes", changedResponse.routes[0]);
                displayPath.push(changedResponse);
            }
            directionsDisplay.setDirections(displayPath[0]);
        } else {
            console.log(('Directions request failed due to ' + status));
        }
    });
}



function getPlaceAndCheck(autocomplete) {
  if(isGeometryValid) console.log("Geometry is valid.");
  else console.log("Geometry is not valid for this place.")
  return autocomplete.getPlace();
}

function isGeometryValid(place) {
  return place.geometry ? true : false ;
}

function appendPanel() {
    if (!$('#panel').length) {
        $('header').after($("<div id='panel'></div>"));
        $('#panel').animateCss('fadeIn');
        $('#map').css('height', '100%').css('height', '-=165px');
      }
}

function appendDirections(placeId) {
  console.log(placeId);
  if($('#panel').length > 1) {
    $('.way-wrapper').remove();
  }
  $('.way-wrapper').remove();
    $.post('/danger', {
            data: placeId
        })
        .done(function(data) {
            console.log("아 씨발 에이아이피 받아온다 이기야~");
            var total = 0;
            var danger = data.data[0];
            var routeInfo = data.data[1];

            var via = [];
            var dur = [];
            for (var i = 0; i < routeInfo.routes.length; i++) {
                via.push(routeInfo.routes[i].summary);
                dur.push(routeInfo.routes[i].legs[0].duration.text);
                $('#panel').append($('<div class="way-wrapper"><div class="way_info"><h1 class="way_via">via ' + via[i] + '</h1>' + '<h1 class="way_min">' + dur[i] + '</h1></div></div>'));
            }
            $('.way-wrapper').click(function(e) {
                e.preventDefault();
                switchDirection($(this).index());
            });

            for (var i = 0; i < danger.length; i++) {
                total += danger[i];
            }

            $('.way-wrapper').each(function(i) {
                $(this).append($('<div class="danger"><img src="'+ require('./alarm.png') + '"class="icon" title="danger"/><span class="dangerRate" title="This shows how dangerous the route is">' + danger[i] + '%</span></div>'));
                var num = $('.dangerRate').text().replace("%", "");
                if (parseInt(num) >= 70) {
                    if (i == 0) $('.dangerRate').first().addClass('red');
                    else if (i == 1) $('.dangerRate').last().addClass('red');
                }
            })
            $('.icon').tipsy({gravity: 's'});
            $('.dangerRate').addClass('red');
        })
        .fail(function(xhr, status, err) {
            console.log(err);
        })
}

function isPlaceValid(origin, dest) {
    return origin || dest ? true : false;
}

function expandViewportToFitPlace(map, place) {
    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
    }
}

function switchDirection(n) {
    console.log(displayPath, displayPath[n]);
    directionsDisplay.setDirections(displayPath[n]);
}

initMap();
console.log("finish initMap")
window.switchDirection = switchDirection;
window.initMap = initMap;
