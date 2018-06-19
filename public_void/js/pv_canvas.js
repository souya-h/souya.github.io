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
                var dot_size = 2*dotSizeRatio(i,j,w/2,h/2,rad) + 0.3;
                if(dot_size!=0.3){
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

function jump(){
    $(function(){
        var classVal = $("this").attr('class');
        alert(classVal);
        var classVals = classVal.split(' '); // 取得した値を分割
        alert(classVals[1]);
        switch(classVals[1]){
            case "place":
                window.open("https://www.geidai.ac.jp/access/ueno");
                break;
        }
        return false;
    });
}
$(function(){//HTMLを読み込んで、
    $(".box").click(function() {
        var classVal = $(this).attr("class");
        var classVals = classVal.split(' ');
        switch(classVals[1]){
            case "place":
                window.open("https://www.geidai.ac.jp/access/ueno");
                break;
        
            case "artist":
                
            break;
        }
        return false;
    });
});