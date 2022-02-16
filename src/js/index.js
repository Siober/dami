$(function(){
    $.ajax({
        url:'../../interface/getitems.php',
        type:'get',
        dataType:'json'
    }).then(res=>{
        
        let template='';
        res.forEach(elm=>{
            template+=``;
            let pic=JSON.parse(elm.picture);
        })
    })
})