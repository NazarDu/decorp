var doc = document,
    View;

function View () {
    var View_r = {
        showShopModalWindow: function() {
            doc.getElementsByClassName('shop__modal_window')[0].style.display = "block";
            doc.body.style.overflow = "hidden";
            Collage();
        },
        closeShopMadalWidow: function() {
            doc.getElementsByClassName('shop__modal_window')[0].style.display = "none";
            doc.body.style.overflowY = "scroll";
        },
        showModalBuy: function() {
            doc.getElementsByClassName('goods_modal_window')[0].style.display = "block";            
        },
        closeModalBuy: function() {
            doc.getElementsByClassName('goods_modal_window')[0].style.display = "none";                        
        }
    };
    View = View_r;
    return View;
}