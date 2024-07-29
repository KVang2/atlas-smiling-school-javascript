$(document).ready(function() {
    fetchQuoteData();
});

function fetchQuoteData() {
    $('.loader').show();

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        method: 'GET',
        success: function(data) {
            $('.loader').hide();

            data.forEach(function(quote) {
                var slide = `<div class="carousel-item d-flex flex-row align-items-center justify-content-center pr-4 pl-4 m-0">
                                <img src="${quote.pic_url}" alt="${quote.name}" class="img-fluid">
                               <div class="container">
                                    <p class="quote-text text-white">${quote.text}</p>
                                    <h4 class="quote-text text-white font-weight-bold">${quote.name}</h4>
                                    <span class="quote-text text-white">${quote.title}</span>
                                </div>
                            </div>`;
                $('.carousel-single').append(slide);
            });

            initializeSlickCarousel();
        },
        error: function() {
            $('.loader').hide();
            alert('Failed to load quotes');
        }
    });
}

function initializeSlickCarousel() {
    $('.carousel-single').slick({
        arrows: true,
        prevArrow: '<img src="/images/arrow_white_left.png" class="slick-prev"/>',
        nextArrow: '<img src="/images/arrow_white_right.png" class="slick-next"/>',
        speed: 200,
        slidesToShow: 1,
        adaptiveHeight: true
    });
}
