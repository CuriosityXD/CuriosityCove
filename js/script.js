$(function() {
    var term = $('body').terminal({
        help: function() {
            this.echo('\n"whois"     who am I?');
            this.echo('"help"      shows this menu');
            this.echo('"banner"    shows start banner');
            this.echo('"clear"     clears the terminal\n');
        },
        banner: function() {
            var self = this;
            this.pause();
            var content = intro.innerHTML;
            typed_message(self, content, 0.1, function() {
                self.echo(''); 
                self.resume();
            });
        },
        whois: function() {
            var self = this;
            this.pause();
            var content = whoisTxt.innerHTML;
            typed_message(self, content, 0.1, function() {
                self.echo(''); 
                self.resume();
            });
        }
    }, {
        greetings: intro.innerHTML
    });

    var anim = false;

    function typed(finish_typing) {
        return function(term, message, delay, finished, classname) {
            anim = true;
            var prompt = term.get_prompt();
            var c = 0;
            if (message && message.length > 0) {
                term.set_prompt('');
                var interval = setInterval(function() {
                    if (c < message.length) {
                        term.insert(message[c++]);
                    } else {
                        clearInterval(interval);
                        setTimeout(function() {
                            finish_typing(term, message, prompt, classname);
                            anim = false;
                            finished && finished();
                        }, delay);
                    }
                }, delay);
            }
        };
    }

    var typed_message = typed(function(term, message, prompt, classname) {
        if (typeof classname === "undefined") { classname = "default"; }
        term.set_command('');
        term.echo(message, { finalize: function(div) { div.addClass(classname); } });
        term.set_prompt(prompt);
    });
});
