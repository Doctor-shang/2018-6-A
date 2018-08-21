$(document).ready(function () {
    
    $('#getlist').on('click',function getlist() {
        $.ajax({
            url: './json/list.json',
            type: 'GET',
            success: function (res) {
                // debugger
                if (res && res.code === 10000) {
                    // debugger
                    var list = res.list;
                    var td = '';
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        
                        td +=`<tr><td>${item.name}</td><td>${item.sex}</td><td>${item.age}</td></tr>`;             
                    }
                    $('#list').append(td);      
                }
            },
            error:function () {
                console.log('连个ajax都写不好,吃屎去吧你')
            }
        })
    })

    
    $('#getweather').on('click',function getWeather() {
        $.ajax({
            url: "./json/weather.json",
            type: "GET",
            success: function (res) {
                var data = res.data;
                var weather = `
                    <p>湿度:${data.shidu}<br>
                    pm2.5:${data.pm25}<br>
                    pm1.0:${data.pm10}<br>
                    空气质量:${data.puality}<br>
                    温度:${data.wendu}<br>
                    建议:${data.ganmao}</p>
                `;
                $('#weather').append(weather)
            },
            error: function () {
                console.log('连个ajax都写不好,吃屎去吧你')
            }
        })
    })



})