$(document).ready(function() {
    /* Открытие информации при клике на #more */
    $('a[href="#more"]').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().children('.more').toggle();
    });

    /* Валидация форм */
    $("#form1").validate({
        messages: {
            // Первая форма
            field_43096795: {
                required: 'Введите свое имя'
            },
            field_43096796: {
                required: 'Введите свой контактный телефон'
            },
            field_43102995: {
                required: 'Выберите свой район'
            },
            field_43096794: {
                required: 'Введите свой E-mail',
                email: 'Введите корректный E-Mail адрес'
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form) {
            var params = jQuery.param({
                name: $('#field_43096795').val(),
                email: $('#field_43096794').val(),
                phone: $('#field_43096796').val()
            });

            $(form).find('button').button('loading');

            $.post('https://podio.com/webforms/5537565/434647', $(form).serialize()).always(function() {
                window.location.href = "card.php?"+params;
                $(form).find('button').button('reset');
            });
        }
    });

    $("#form2").validate({
        messages: {
            field_43550356: {
                required: 'Введите свое имя'
            },
            field_43550358: {
                required: 'Введите свой контактный телефон'
            },
            field_43550359: {
                required: 'Выберите свой район'
            },
            field_43550357: {
                required: 'Введите свой E-mail',
                email: 'Введите корректный E-Mail адрес'
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form) {
            var params = jQuery.param({
                name: $('#field_43550356').val(),
                email: $('#field_43550357').val(),
                phone: $('#field_43550358').val()
            });

            $(form).find('button').button('loading');

            $.post('https://podio.com/webforms/5594624/439028', $(form).serialize()).always(function() {
                window.location.href = "card.php?"+params;
                $(form).find('button').button('reset');
            });
        }
    });
});