$(document).ready(function() {
    fetchCourses();
}

// courses sorting
function fetchCourses {
    $('.loader').show();

    var queryString = 
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/courses',
        method: 'GET',
        success: function(data) {
            console.log(data);
            $('.loader').hide();
}
