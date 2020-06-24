var doc = document,
View;

function View () {
    var View_r = {
        showIframe: function (iframeWrap, iframeSrc) {
            iframeWrap.innerHTML = '<iframe width="283" height="1484" class="iframe" style="border:none;margin-left:-51px;margin-top:-1176px;" scrolling="no" src="' + iframeSrc + '"></iframe>';     
        },

        showError: function (errorHTML, checkbox) {
            errorHTML.innerHTML = 'Введіть коректні дані';
            checkbox.checked = false;    
            window.scrollTo(0,0);
        }
    };
    View = View_r;
    return View;
}