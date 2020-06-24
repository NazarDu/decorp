var doc = document,
Controller;

function Controller () {
    var Controller_r = {
        nextStep: function() {
            var rtext = doc.getElementsByClassName('input_Description')[0];  
            var description = Modal.TxttoHtml(rtext);
            return description;
        },

        iframe: function() {
            var hash        = '%23',
                none        = '';

            var ID          = doc.getElementsByClassName('input_ID')[0],
                name        = doc.getElementsByClassName('input_Name')[0],
                description = Controller.nextStep(),
                price       = doc.getElementsByClassName('input_Price')[0],
                photo1      = doc.getElementsByClassName('input_Photo')[0],
                photo2      = doc.getElementsByClassName('input_Photo')[1].value || hash,
                photo3      = doc.getElementsByClassName('input_Photo')[2].value || hash,
                errorHTML   = doc.getElementsByClassName('message')[0],
                checkbox    = doc.getElementById('next_Step'),
                send        = doc.getElementsByClassName('send')[0];

            var iframeWrap  = doc.getElementsByClassName('iframe-wrap')[0],
                iframeSrc   = Modal.dataValidation(ID, name, description, price, photo1, photo2, photo3, none, errorHTML, checkbox, send);

            View.showIframe(iframeWrap, iframeSrc);            
        },
        hideIframe: function () {
            iframeWrap = doc.getElementsByClassName('iframe-wrap');
            View.hideIframe(iframeWrap)
        }
    };
    Controller = Controller_r;
    return Controller;
}