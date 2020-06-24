var doc = document,
    description;

var app = {

    init: function () {
        View();
        Modal();
        Controller();
        this.main();
        this.events();
    },

    main: function () {

    },

    events: function () {
        doc.getElementById('next_Step').addEventListener('click', Controller.nextStep);   
        doc.getElementById('next_Step').addEventListener('click', Controller.iframe);
    }

};
app.init();
