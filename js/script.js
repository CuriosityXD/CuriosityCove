$(function() {
    var term = $('body').terminal({
        help: function() {
            term.typing('echo', 1, helpTxt.innerHTML, function() {  });
        },
        banner: function() {
            this.echo(intro.innerHTML);
        },
        whois: function() {
            term.typing('echo', 1, whoisTxt.innerHTML, function() {  });
        }
    }, {
        greetings: intro.innerHTML
    });
});
