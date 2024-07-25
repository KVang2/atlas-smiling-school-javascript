// AJAX Request

$(document).ready(function() {
    $('#loader').show();
    fetchCarouselData();
});

function fetchCarouselData() {
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        method: 'GET',
        success: function(data) {
            $('#loader').hide();
            data.forEach(function(quote, index) {
                var activeClass = index === 0 ? ' active' : '';
                var slide = `
                    <div class="carousel-item${activeClass}">
                        <div class="row mx-auto align-items-center">
                            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                <img
                                    src="${quote.pic_url}"
                                    class="d-block align-self-center"
                                    alt="${quote.name}"
                                />
                            </div>
                            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                <div class="quote-text">
                                    <p class="text-white">« ${quote.quote}</p>
                                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                    <span class="text-white">${quote.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                $('.carousel-inner').append(slide);
            });
            initializeCarousel();
        },
        error: function() {
            $('#loader').hide();
            alert('Failed to load');
        }
    });
}

function initializeSlickCarousel() {
    $('.carousel-inner').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-prev"></button>',
        speed:200,
        slidesToShow: 1,
    });
}