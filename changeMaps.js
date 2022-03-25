$(document).ready
{
    $('#map-2').hide()

    $('#dropdown').change(function () {
        let val = $('#dropdown').val()
        if (val === 'ukraine1') {
            $('#map-2').hide()
            $('#map-1').show()
        } else {
            $('#map-1').hide()
            $('#map-2').show()
            map_6e8f012e06914307afc3680b4ca6e7f0.invalidateSize()
        }
    })
}