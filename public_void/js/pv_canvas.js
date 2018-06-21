function drawTop() {
    var w = $('.pv_back').width();
    var h = $('.pv_back').height();
    $('#pv_top').attr('width', w);
    $('#pv_top').attr('height', h);
    var minlen = w;
    if(minlen > h){
        minlen = h;
    }

    //描画コンテキストの取得
    var canvas = document.getElementById('pv_top');
    if (canvas.getContext) {
        
        var context = canvas.getContext('2d');
        var width = window.innerWidth;
        var rad = minlen*0.8/2;
        //色を指定する
        context.beginPath();
        context.strokeStyle = 'rgb(0,0,0)';
        context.fillStyle = 'rgb(255,255,255)';
        context.arc(w/2,h/2,rad,0,Math.PI*2,false);
        context.fill();
        context.fillStyle = 'rgb(0,0,0)';
        var dotw_s = w/2-rad;
        var doth_s = h/2-rad;
        for(var i=dotw_s; i<dotw_s+minlen*0.8; i+=5){
            for(var j=doth_s; j<doth_s+minlen*0.8; j+=5){
                context.beginPath();
                var dot_size = 2*dotSizeRatio(i,j,w/2,h/2,rad) + 0.4;
                if(dot_size!=0.4){
                    context.arc(i,j,dot_size,0,Math.PI*2,true);
                    context.fill();
                }
            }
        }
        context.beginPath();
        if(w>639){
            context.font="60px sans-serif";
            context.strokeText("public void exhibition();", w/25,h/9);
        }
        else{
            context.font="50px sans-serif";
            context.rotate(Math.PI / 2);
            context.strokeText("public void exhibition();", h/15, - w*7/10);
        }
        
    }
}
function dotSizeRatio(x1,y1,x2,y2,rad){
    var dist = distCulc(x1,y1,x2,y2);
    var ratio = Math.sqrt(dist/(rad**2.));
    if(ratio>1.){
        ratio = 0.;
    }
    else{
        ratio = 1. - ratio;
    }
    return ratio;
}
function distCulc(x1,y1,x2,y2){
    return (x2-x1)**2+(y2-y1)**2;
}

$(function(){
    $(".box").click(function() {
        var classVal = $(this).attr("class");
        var classVals = classVal.split(' ');
        if($(this).find("a").attr("target")=="_blank"){
            window.open($(this).find("a").attr("href"), '_blank');
        //}else{
        //    window.location=$(this).find("a").attr("href");
        }
    });
});

$(function(){
    // 「.modal」をクリック
    $('.modal-toggle').click(function(){

        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');

        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');
        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-id');
        // モーダルコンテンツの表示位置を設定
        modalResize();
         // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-content').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;
            if(y<h*0.1){
                y=h*0.1;
            }
            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y + 'px'});
            var modalHeight = $(modal).height();
            var docHeight = $('.body').height();
            var backHeight = modalHeight + h*0.2;
            if(backHeight<docHeight){
                backHeight = docHeight;
            }
            if(backHeight<h){
                backHeight=h;
            }
            $('.modal-overlay').css({'height': backHeight + 'px'});
        }

    });
});


