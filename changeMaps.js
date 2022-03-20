$(document).ready
{
    $('#my-map').append('<img id="theImg" src="Ukraine1.jpg" />')

    $('#dropdown').change(function () {
        let val = $('#dropdown').val()
        if (val === 'ukraine1') {
            $('#theImg').attr('src', 'Ukraine1.jpg')
        } else {
            $('#theImg').attr('src', 'Ukraine2.jpg')
        }
    })
}