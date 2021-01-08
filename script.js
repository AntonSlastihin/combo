$(() => {

    const input = $("input[type='date']");
    let date = new Date().toLocaleDateString();
    let time = date.split('.').reverse().join('-');
    input.val(time);
    input.attr('max', time);
    input.on('change', () => {
        getMoney();
    });
    getMoney();
    function getMoney() {
        $.ajax({
            type: "GET",
            url: "money.php",
            data: {date: input.val().split('-').reverse().join('.')},
            // dataType: "xml",
        }).done(function (data){
            let response = JSON.parse(data);
            let body = "<table><tr><th>Валюта</th><th>Курс</th></tr>";
            $.each(response.item, function (index, value){
                body += `<tr><td>${value.title}</td><td>${value.description}</td></tr>`;
            })
            body += "</table>";
            $('#content').html(body)
        });
    }
});

