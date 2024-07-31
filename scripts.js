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
            $('.loader').hide();

            data.forEach(function(video) {
                var stars = calculateRatingStars(video);
                var slide = `<div class="row align-items-center mx-auto">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                    <div class="card">
                      <img
                        src="images/thumbnail_4.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                          Diagonal Smile
                        </h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>`;
                $('.carousel-video').append(slide);
            });

            initializeVideoCarousel();
        },
        error: function() {
            $('.loader').hide();
            alert('Failed to load quotes');
        }
    });
}

function initializeVideoCarousel() {
    $('.carousel-video').slick({
        arrows: true,
        prevArrow: '<img src="/images/arrow_white_left.png" class="slick-prev"/>',
        nextArrow: '<img src="/images/arrow_white_right.png" class="slick-next"/>',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
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

