$('.xz').click(function(){

    $(this).siblings().removeClass('active');
    $(this).addClass('active');
})
window.onscroll=function(){
    let gohome=document.querySelector('.gogo');
    if(document.documentElement.scrollTop>=500){
        
        gohome.style.display='flex';

    }else{
        gohome.style.display='none';
    }
}

let qiehuan=1;
$('.rightbuttom').click(function(){
    qiehuan+=1;



    if(qiehuan>$('.jindutiao').children().length){
        qiehuan=1;
    }
    $('.qiehuan').attr("src","./img/xiaoai"+qiehuan+".jpg");
    $(".jindutiao span:nth-child("+qiehuan+")").siblings().removeClass('active');
    $(".jindutiao span:nth-child("+qiehuan+")").addClass('active');
})

$('.leftbuttom').click(function(){
    qiehuan-=1;
    
    if(qiehuan<=0){
        qiehuan=3;
    }
    $('.qiehuan').attr("src","./img/xiaoai"+qiehuan+".jpg");
    $(".jindutiao span:nth-child("+qiehuan+")").siblings().removeClass('active');
    $(".jindutiao span:nth-child("+qiehuan+")").addClass('active');
})

let pic;
window.onload=function(){

    loadpic();

}
$('.qiehuan').mouseover (function(){
    clearInterval(pic);
})
$('.qiehuan').mouseout (function(){
    loadpic();
})


function loadpic(){
    pic=setInterval(function(){
        qiehuan+=1;
        if(qiehuan>$('.jindutiao').children().length){
            qiehuan=1;
        }
        $('.qiehuan').attr("src","./img/xiaoai"+qiehuan+".jpg");
        $(".jindutiao span:nth-child("+qiehuan+")").siblings().removeClass('active');
        $(".jindutiao span:nth-child("+qiehuan+")").addClass('active');

    }, 1000);
}