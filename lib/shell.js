    define(['durandal/app', 'knockout'], function (app, ko) {
        return {
            name: ko.observable(),
            sayHello: function() {
                app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
            }
        };
    });