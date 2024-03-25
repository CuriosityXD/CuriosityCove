$(function() {
    $('body').terminal({
        help: function() {
            this.echo('\n"whois      who am I?')
            this.echo('"help"      shows this menu')
            this.echo('"banner"    shows start banner')
            this.echo('"clear"     clears the terminal\n')
        },
        banner: function() {
            this.echo(intro.innerHTML)
        },
        whois: function() {
            this.echo('\n' + whoisTxt.innerHTML + '\n')
        }
    }, {
        greetings: intro.innerHTML
    });
});