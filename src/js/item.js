


    $(function () {
        // 获得商品id
        // 商品id在url的search部分
    
        let id = location.search.split('=')[1];






        $.ajax({
        url: '../interface/getitem.php',
        type: 'get',
        data: { id },
        dataType: 'json'
        }).then(res => {
        
            let pic = JSON.parse(res.picture);
            let name=$('.name')
            let title=$('.title12')
            let pice1=$('.pice1')
            let pice=$('.pice')
            let pricurt=$('.pricurt1')
            console.log(res.id)
            name.html(res.name);
            title.html(res.title);
            pice1.html(res.price+"元");
            pice.html(res.price+"元");
            pricurt.attr("src","./"+pic[0].src);
            

    $('#additem').on('click',function(){
        addItem(res.id,1);
    });
    }).catch(xhr => {
        console.log(xhr.status);
    });

});

function addItem(id,num){
    let product={id,num};
    let shop =cookie.get('shop');

    if(shop){
        shop=JSON.parse(shop);

        if(shop.some(el=>el.id==id)){
            let index=shop.findIndex(elm=>elm.id==id);
            let count = parseInt(shop[index].num);
            count+=parseInt(num);
            shop[index].num=count;
        }else{
            shop.push(product);
        }


    }else{
        shop=[];
        shop.push(product);
    }
    console.log(shop);
    cookie.set('shop',JSON.stringify(shop));
}