$(document).ready(() => {
    $('#new-burger').click(() => {
        let burger = {
            'burger_name': $(burger-name).val(),
            'devoured': false
        }

        $.post('/api/burger', burger).done(() => {
            location.reload();
        })
    })

    $('.burger-button').click(function() {
        let id = $(this).attr('data-id');
        let name = $(this).attr('data-name');
        let devoured = $(this).attr('data-devoured');

        let newBurger = {
            'burger_name': name,
            'devoured': devoured
        }

        $.ajax(`/api/burger/${id}`, {
            type: 'PUT',
            data: newBurger
        }).done(() => {
            location.reload();
        })
    })
})