function generalInfoRequest() {
    document.body.classList.add("stop-scrolling");
    $('#general-info').show();
}

function infoCloseIconPressed() {
    document.body.classList.remove("stop-scrolling");
    $('#general-info').hide();
}