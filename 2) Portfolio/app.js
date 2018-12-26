var pDescription = $('.show-capabilities p');

pDescription.each(function (index, value) {

    if ($(pDescription[index]).css('height') > '80px') {
        $(pDescription[index]).css('font-size', '14px');
    }
});

var allQuotes = $('.show-quotes ul li');
var currentQuote = 0;

function changeQuote() {

    $(allQuotes[currentQuote]).fadeOut(500, 'swing', function(){
        if (currentQuote === allQuotes.length - 1) {
            currentQuote = 0;
        } else {
            currentQuote++;
        }

        $(allQuotes[currentQuote]).fadeIn(500);
    });
}

var quoteTimer = setInterval(changeQuote, 3000);