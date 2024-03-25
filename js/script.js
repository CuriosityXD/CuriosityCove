$(function() {
    $('body').terminal({
        hello: function(what) {
            this.echo('Hello [[gb;#fff;]person], ' + what +
                '. Wellcome to this terminal.');
        }
    }, {
        greetings: intro.innerHTML
    });
});