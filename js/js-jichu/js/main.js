//jquery
$(document).ready(function () {
    var boxjq = $('#box'); //jq获取
    console.log(boxjq);

    $('#btn').on('click', function (event) {
        var span = $('<span class="error">你点击了按钮</span>');
        console.log(span);
        boxjq.append(span)
    })

    $('#hover').hover(function () {
        $(this).text('鼠标放进来了')
    },function () {
        $(this).text('鼠标拿走了')
    })

    $('#inp').on('focus',function () {
        $('#hover-index').text('获取焦点');
    })
    $('#inp').on('blur',function () {
        $('#hover-index').text('失去焦点');
    })
})

//javascript
window.onload = function () {
    var boxjs = document.getElementById('box'); //js获取
    console.log(boxjs);
}
