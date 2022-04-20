// ?? scroll button in banner
function smoothScroll() {
    window.scrollTo(0, 600);
}

let scrollButton = document.querySelector('.mouseScroll .botn');
if (scrollButton === null);
else {
    scrollButton.addEventListener('click', function () {
        smoothScroll();
    });
}

// ?? giving padding to navbar and footer
let $header = $(".page-header");
let $nav = $(".page-header nav");
let $overlay = $(".overlay");
let $notFooter = $(".not-footer");
let $footer = $("footer.page-footer");

$header.css("paddingBottom", $nav.height());
$notFooter.css("paddingBottom", $footer.height());

// ?? giving values to elements (out of stock, add to cart)
$("html:lang(ar) .outofstock").html("نفذت الكمية");
$("html:lang(en) .outofstock").html("Out Of Stock");

$("html:lang(ar) .card .addtocart input").val("إضافة إلى العربة");
$("html:lang(en) .card .addtocart input").val("Add To Cart");

// ?? stars click
let __slice = [].slice;

(function ($, window) {
    let Starrr;

    Starrr = (function () {
        Starrr.prototype.defaults = {
            rating: void 0,
            numStars: 5,
            change: function (e, value) { }
        };

        function Starrr($el, options) {
            let i, _, _ref,
                _this = this;

            this.options = $.extend({}, this.defaults, options);
            this.$el = $el;
            _ref = this.defaults;
            for (i in _ref) {
                _ = _ref[i];
                if (this.$el.data(i) != null) {
                    this.options[i] = this.$el.data(i);
                }
            }
            this.createStars();
            this.syncRating();
            this.$el.on('mouseover.starrr', 'span', function (e) {
                return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
            });
            this.$el.on('mouseout.starrr', function () {
                return _this.syncRating();
            });
            this.$el.on('click.starrr', 'span', function (e) {
                return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
            });
            this.$el.on('starrr:change', this.options.change);
        }

        Starrr.prototype.createStars = function () {
            let _i, _ref, _results;

            _results = [];
            for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
            }
            return _results;
        };

        Starrr.prototype.setRating = function (rating) {
            if (this.options.rating === rating) {
                rating = void 0;
            }
            this.options.rating = rating;
            this.syncRating();
            return this.$el.trigger('starrr:change', rating);
        };

        Starrr.prototype.syncRating = function (rating) {
            let i, _i, _j, _ref;

            rating || (rating = this.options.rating);
            if (rating) {
                for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                    this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
                }
            }
            if (rating && rating < 5) {
                for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                    this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                }
            }
            if (!rating) {
                return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
            }
        };

        return Starrr;

    })();
    return $.fn.extend({
        starrr: function () {
            let args, option;

            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            return this.each(function () {
                let data;

                data = $(this).data('star-rating');
                if (!data) {
                    $(this).data('star-rating', (data = new Starrr($(this), option)));
                }
                if (typeof option === 'string') {
                    return data[option].apply(data, args);
                }
            });
        }
    });
})(window.jQuery, window);

$(function () {
    return $(".starrr").starrr();
});

$(document).ready(function () {

    $('#stars').on('starrr:change', function (e, value) {
        $('#count').html(value);
    });

    $('#stars-existing').on('starrr:change', function (e, value) {
        $('#count-existing').html(value);
    });
});


// ?? add to  wishlist
$(".wishlist .card .wish i").addClass("clicked");

$(".wish.layer i").click(function () {
    $(this).toggleClass("clicked");
    // $(".card .wish i.clicked").prop("title", "إزالة من قائمة الأماني");
});


$(".card .wish i").prop("title", "إضافة إلى قائمة المفضلة");


// ?? add fade to modals
let modal = document.querySelectorAll(".modal");

for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("fade");
}

// ?? changing error maassege in arabic
$("html:lang(ar) input.form-control").attr("oninvalid", "this.setCustomValidity('إملأ هذا الحقل رجاءًا');");
// returning it to default after typing again
$("input.form-control").attr("onchange", "this.setCustomValidity('');");


let $productCounter = $('input.product-count');

$productCounter.attr("value", "1");
$productCounter.attr("min", "1");


// ?? giving images "loading: lazy" to make ux smoother
$("img").attr("loading", "lazy");

$("input#butlogin").click(function () {
    $('div#error.alert-danger').delay(5000).fadeOut('slow');
});

// ?? password validation

function checkPasswordMatch() {
    let password = $("#password");
    let confirmPassword = $("#confirmPassword");

    if ($(password).val().length < 8) {
        $(password).css({ "border-color": "#f00", "box-shadow": "rgb(210 10 10 / 25%) 0px 0px 0px 0.25rem" });
    }
    if ($(password).val().length >= 8) {
        $(password).css({ "border-color": "#0f0", "box-shadow": "rgb(10 210 10 / 25%) 0px 0px 0px 0.25rem" });
    }

    else if ($(password).val() != $(confirmPassword).val()) {
        $(confirmPassword).css({ "border-color": "#f00", "box-shadow": "rgb(210 10 10 / 25%) 0px 0px 0px 0.25rem" });
    }

    else if ($(password).val() === $(confirmPassword).val() && $(password).val().length >= 8) {
        $(confirmPassword).css({ "border-color": "#0f0", "box-shadow": "rgb(10 210 10 / 25%) 0px 0px 0px 0.25rem" });
        $(password).css({ "border-color": "#0f0", "box-shadow": "rgb(10 210 10 / 25%) 0px 0px 0px 0.25rem" });
    }

    else {
        $(confirmPassword).css({ "border-color": "#0f0", "box-shadow": "rgb(10 210 10 / 25%) 0px 0px 0px 0.25rem" });
        $(password).css({ "border-color": "#0f0", "box-shadow": "rgb(10 210 10 / 25%) 0px 0px 0px 0.25rem" });
    }

    if ($(password).val().length === null || $(confirmPassword).val().length === null) { }
}

$(document).ready(function () {
    $("login").keyup(checkPasswordMatch);
});