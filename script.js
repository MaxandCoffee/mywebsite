function sendEmail() {
    $('#send-button').addClass('disabled');
    sendMessage({
        'To': TO_ADDRESS
        , 'Subject': $('#compose-subject').val() + " at " + $('#compose-email').val()
    }, $('#compose-message').val(), composeTidy);
    return false;
}

function sendMessage(headers_obj, message, callback) {
    var email = '';
    for (var header in headers_obj) email += header += ": " + headers_obj[header] + "\r\n";
    email += "\r\n" + message;
    var sendRequest = gapi.client.gmail.users.messages.send({
        'userId': 'me'
        , 'resource': {
            'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
        }
    });
    return sendRequest.execute(callback);
}
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navMobile");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    }
    else {
        x.className = x.className.replace(" w3-show", "");
    }
}
$(window).scroll(function (event) {
    didScroll = true;
});
// Change style of navbar on scroll
window.onscroll = function () {
    changeMenu()
};

function changeMenu() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    }
    else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}
///smooth scrolling/
$(document).on('click', 'nav a', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

///portfolio animation/
$(window).on("orientationchange", function () {
    width = $('.one').width();
    if (isMobileWidth()) {
        $('.descriptionContainer').css({
            'margin-left': 0
        });
        $('.descriptionContainer').width(width);
        $(".one, .two, .three").css({
            "margin-bottom": "16px"
        });
        console.log("true");
    }
    else {
        $('.descriptionContainer').css({
            'margin-left': width + 50
        });
        $('.descriptionContainer').width(width * 3);
        $(".one, .two, .three").css({
            "margin": "auto"
        });
        console.log("false");
    }
});

function isMobileWidth() {
    return $('#mobileIndicator').is(':visible');
    console.log("mobile device");
}
(function () {
    width = $('.one').width();
    if (isMobileWidth()) {
        $('.descriptionContainer').css({
            'margin-left': 0
        });
        $('.descriptionContainer').width(width);
        $(".one, .two, .three").css({
            "margin-bottom": "16px"
        });
    }
    else {
        $('.descriptionContainer').css({
            'margin-left': width + 50
        });
        $('.descriptionContainer').width(width * 3);
        $(".one, .two, .three").css({
            "margin": "auto"
        });
    }
    $('.box').click(function () {
        boxId = $(this).attr("id").substr(1);
        $(this).addClass("activeBox");
        $('.descriptionContainer').delay(300).fadeIn(300);
        $('.description').each(function () {
            descId = $(this).attr("id").substr(1);
            if (descId === boxId) {
                $(this).show();
            }
        });
        $('.box').not(this).slideUp(300);
        $(this).delay(300).animate({
            marginLeft: '0px'
        }, 500);
    });
    $(".backPortfolio").click(function () {
        $(".box").removeClass("activeBox");
        $(".descriptionContainer, .description").fadeOut(300);
        $(".one, .two, .three").slideDown(500);
        if (!isMobileWidth()) {
            $(".one, .two, .three").css({
                "margin": "auto"
            });
        }
    });

    function composeTidy() {
        $('#compose-to').val('');
        $('#compose-subject').val('');
        $('#compose-message').val('');
        $('#send-button').removeClass('disabled');
    }
    //anti-spam
    $('#gform').click(function () {
        if ($('.honeypot').val() != '') {
            $('#send-button').attr('disabled', 'disabled');
            console.log('spammer!');
        }
    });
})();