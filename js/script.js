$(function() {
    $(".carousel").carousel();
});

$(function() {
    var template = $("#form-info").html();

    var formInfo = {
        name: "ЧУДОВИЧ АЛЛА АНДРЕЕВНА",
        img: "img/photo_01.jpg",
        text: "На данный момент пребываю в декрете, работаю фотографом!",
        why: "Хочу учить фронтенд, потому-что:",
        whyList: ["Хочу получать много денег",
            "Мечтаю стать творцом чего-то эдакого!",
            "Просто хочу"
        ],
        phone: "Мой контактный телефон:",
        number: "+380688839963",
        page: "Мой профиль Вконтакте:",
        vk: "https://vk.com/alla.chudo",
        feedback: "Мой фидбек:",
        answer: "Если кому-то нужны новые фото, обращайтесь!"
    };

    var content = tmpl(template, {
        data: formInfo
    });

    $("body").append(content);

});
