var doc = document,
    Modal;

function Modal () {
    var Modal_r = {
        TxttoHtml: function(k) {
            var y = k.value, r = '', a;

            a = y.replace(/\s\s/g, '-----');
            a = a.split('-----');

            for (var z = 0; z < a.length; z++) {
                if(a[z].length > 0) {
                    r += "%3Cp%3E" + a[z] + "%3C/p%3E\n\n";
                }
            };
            return r;
        },

        dataValidation: function (ID, name, description, price, photo1, photo2, photo3, none, errorHtml, checkbox, send) {
            if ( ID.value.length && name.value.length && description.length && price.value.length && photo1.value.length >= 1) {
                var iframeSrc = Modal.doIframeSrc(ID, name, description, price, photo1, photo2, photo3);
                send.style.display = 'none';
                return iframeSrc;
            } else {
                View.showError(errorHtml, checkbox);
                return none; 
            }
        },

        doIframeSrc: function(ID, name, description, price, photo1, photo2, photo3) {
            var iframeLink        = 'https://docs.google.com/forms/d/e/1FAIpQLSdiVIE11smYmfu0wpmgf6YF-x5INUK7AfkYuLH2qYxyEXSsHA/viewform?usp=pp_url&entry.1936329952=ID&entry.1777231345=Name&entry.793236922=Description&entry.499154866=1&entry.2003543018=Photo+1&entry.1057008734=Photo+2&entry.958590329=Photo+3',
                iframeFormDomen   = 'https://docs.google.com/forms/d/e/',
                iframeFormID      = '1FAIpQLSdiVIE11smYmfu0wpmgf6YF-x5INUK7AfkYuLH2qYxyEXSsHA',
                iframeFormQuery   = '/viewform?usp=pp_url',
                iframeID          = '&entry.1936329952=' + ID.value,
                iframeName        = '&entry.1777231345=' + name.value,
                iframeDescription = '&entry.793236922='  + description,
                iframePrice       = '&entry.499154866='  + price.value,
                iframePhoto1      = '&entry.2003543018=' + photo1.value,
                iframePhoto2      = '&entry.1057008734=' + photo2,
                iframePhoto3      = '&entry.958590329='  + photo3; 

            var iframeSrc         = iframeFormDomen + iframeFormID + iframeFormQuery + 
                                    iframeID + iframeName + iframeDescription + iframePrice + 
                                    iframePhoto1 + iframePhoto2 + iframePhoto3;

            return iframeSrc;
        }
    };
    Modal = Modal_r;
    return Modal;
}