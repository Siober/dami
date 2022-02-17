$(function () {
    $.ajax({
        url: '../interface/getitems.php',
        type: 'get',
        // dataType: 'json'
    }).then(res => {
        res=JSON.parse(res)
        let template = '';

        res.forEach(elm => {

            let pic = JSON.parse(elm.picture);
            console.log(pic);

            template += `<a href="./item.html?id=${elm.id}">
                            <img src="./${pic[0].src}" alt="">
                            <p>${elm.name}</p>
                            <p>${elm.title1}</p>
                            <p>${elm.price}元起</p>
                        </a>`;
        });
        // console.log(template);
        $('.right>.box1').html(template);


    }).catch(xhr => {
        console.log(xhr.status);
    });

    $('.shopping').on('click',function(){

        window.location.href="../src/shop.html";
    })
});

