  $('.input__number__plus').click(function () {
        const input = $(this).closest(".counter").find("input");
        input.val(+input.val() + 1);
    });

    $('.input__number__minus').click(function () {
        const input = $(this).closest(".counter").find("input");
        input.val(+input.val() - 1);
    });