$(document).ready(function() {
    fetchQuoteData();
    fetchVideoData();
});

// Function for quote
function fetchQuoteData() {
    // Loading
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

// Fetching video data
function fetchVideoData() {
    // Loading
    $('.loader').show();

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/popular-tutorials',
        method: 'GET',
        success: function(data) {
            console.log(data);
            $('.loader').hide();

            data.forEach(function(video) {
                var stars = RatingStars(video);
                var slide = `
                    <div class="card">
                        <img src="${video.thumb_url}" class="card-img-top" alt="Video thumbnail">
                        <div class="card-img-overlay text-center">
                            <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${video.title}</h5>
                            <p class="card-text text-muted">Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.</p>
                            <div class="creator d-flex align-items-center">
                                <img src="${video.author_pic_url}" alt="Creator" width="30px" class="rounded-circle">
                                <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                            </div>
                            <div class="info pt-3 d-flex justify-content-between">
                                <div class="rating">${stars}</div>
                                <span class="main-color">8 min</span>
                            </div>
                        </div>
                    </div>`;
                $('.carousel-video').append(slide);
            });

            initializeVideoCarousel();
        },
        error: function() {
            $('.loader').hide();
            alert('Failed to load video');
        }
    });
}

function RatingStars(rating) {
    let stars = '';
    for (let i =0; i < 5; i++) {
        if (i < rating) {
            stars += '<img src="images/star_on.png" alt="star-on" width="15px"/>';
        } else {
            stars += '<img src="images/star_off.png" alt="star-off" width="15px"/>';
        }
    }
    return stars;
}

function initializeVideoCarousel() {
    $('.carousel-video').slick({
        infinite: true,
        prevArrow: '<img src="/images/arrow_black_left.png" class="video-prev"/>',
        nextArrow: '<img src="/images/arrow_black_right.png" class="video-next"/>',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

