$(function () {
    let shop = cookie.get('shop');

    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        url: '../interface/shop.php',
        data: { idList },
        type: 'get',
        dataType: 'json'
    }).then(res => {
        let template = '';
        console.log(template);
        res.forEach(el => {
            let picture = JSON.parse(el.picture);
            
            let current = shop.filter(elm => elm.id == el.id);

            template += `<li class="item">
        <div>
          <input type="checkbox">
        </div>
        <div>
          <img src="./${picture[0].src}" alt="">
        </div>
        <div>
          ${el.title}
        </div>
        <div>
          <input type="number" value="${current[0].num}" max="100" min="1">
        </div>
        <div>
          单价: ￥ ${parseFloat(el.price).toFixed(2)}
        </div>
        <div>
          总价: ￥ ${(el.price * current[0].num).toFixed(2)}
        </div>
        <div>
          <a href="javascript:;" class="removeitem" data-id="${el.id}">删除</a>
        </div>
      </li>`
        });
        console.log(template);
        $('.box1').remove();
        $('.list').html(template);

        $('.list .removeitem').on('click', function () {
            let result = shop.filter(el => el.id != $(this).attr('data-id'));
            cookie.set('shop', JSON.stringify(result));
            location.reload();
        });

    }).catch(xhr => {
        console.log(xhr.status);
    });
});