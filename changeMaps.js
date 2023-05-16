let curYear = 1989
let curNation = "ukr"
let popupActive = false
let loadedScripts = new Map()

$("body").click(function(event){
    if (!popupActive) return;
    if ($(event.target).closest(".popup").length) {
        console.log("Hey, I'm clicked!!!");
        return;
    }
    $(".overlay, .popup").fadeToggle();
    document.body.classList.remove("stop-scrolling");
    popupActive = false;
})

function controlPopupHeight () {
    let paddTop = parseInt($('.popup-content').css('padding-top'))
    let paddBottom = parseInt($('.popup-content').css('padding-bottom'))
    let popupHeight = $('.popup').height()
    $('.popup-content').height(popupHeight - paddBottom - paddTop)
}

window.addEventListener('load', controlPopupHeight)

window.addEventListener('resize', controlPopupHeight)

$(document).ready
{
    hideAll()
    setYearStylesToNormal()
    setNationFontWeightsToNormal()
    showNationsByYear(curYear)
    $('#ukr1989').show()
    document.getElementById("ukr").style.fontWeight = "bold";
    document.getElementById("ukr").style.color = "white";
    document.getElementById("1989").style.fontWeight = "bold";
    $("#1989").css("text-decoration", "underline")
    $("#1989").css("text-decoration-color", "#00b68b")
    $("#1989").css("text-decoration-thickness", "2.5px")
    $('#hiddenText').html("This is sample text for year " + curYear.toString() + '. A hell lot of text:-)')
    $(".popup").load("InfoMarkups/1989_Info.html");

    // loadedScripts.set('2001', false);
    years = ['2001', '1989', '1979', '1970', '1959', '1931', '1910'];
    nationIds = ['alb', 'arm', 'aze', 'bel', 'bul', 'chu', 'cri', 'cze', 'czs',
    'gag', 'geo', 'ger', 'gre', 'hun', 'jew', 'kor', 'kar', 'lat', 'lit',
    'mar', 'mol', 'mor', 'pol', 'gyp', 'rom', 'rus', 'slo', 'tat', 'ukr',
    'uzb']
    years.forEach(function (year){
        loadedScripts.set(year, new Map());
        nationIds.forEach(function (nation){
            loadedScripts.get(year).set(nation, false)
        })
    })
    loadByYear('1989', curNation)
    // loadedScripts.set('1989', true);
    // loadedScripts.set('1979', false);
    // loadedScripts.set('1970', false);
    // loadedScripts.set('1959', false);
    // loadedScripts.set('1931', false);
    // loadedScripts.set('1910', false);

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        // dropdown[i].addEventListener("click", function() {
        //     this.classList.toggle("active");
        //     var dropdownContent = this.nextElementSibling;
        //     if (dropdownContent.style.display === "block") {
        //         dropdownContent.style.display = "none";
        //     } else {
        //         dropdownContent.style.display = "block";
        //     }
        // });
        dropdown[i].classList.toggle('active');
        var dropdownContent = dropdown[i].nextElementSibling;
        dropdownContent.style.display = 'block';
    }
}

function hideAll() {
    let ids2001 = ['#arm2001', '#aze2001', '#bel2001', '#bul2001', '#cri2001',
        '#gag2001', '#geo2001', '#ger2001', '#gre2001', '#hun2001', '#jew2001',
        '#mol2001', '#pol2001', '#gyp2001', '#rom2001', '#rus2001',
        '#slo2001', '#tat2001', '#ukr2001']
    for (let i = 0; i < ids2001.length; i++) {
        $(ids2001[i]).hide()
    }
    let ids1989 = ['#map-1', '#map-2', '#alb1989', '#arm1989', '#aze1989', '#bel1989', '#bul1989',
        '#chu1989', '#cri1989', '#cze1989', '#gag1989', '#geo1989', '#ger1989', '#gre1989',
        '#ukr1989', '#hun1989', '#jew1989', '#kor1989', '#mar1989', '#mol1989', '#mor1989',
        '#pol1989', '#gyp1989', '#rom1989', '#rus1989', '#slo1989', '#tat1989', '#uzb1989']
    for (let i = 0; i < ids1989.length; i++) {
        $(ids1989[i]).hide()
    }
    let ids1979 = ['#bel1979', '#bul1979', '#gag1979', '#gre1979', '#hun1979', '#jew1979',
        '#kar1979', '#mol1979', '#pol1979', '#rom1979', '#rus1979', '#tat1979', '#ukr1979']
    for (let i = 0; i < ids1979.length; i++) {
        $(ids1979[i]).hide()
    }
    let ids1970 = ['#arm1970', '#bel1970', '#bul1970', '#chu1970', '#gag1970', '#gre1970', '#hun1970',
        '#jew1970', '#kar1970', '#mol1970', '#mor1970', '#pol1970', '#gyp1970', '#rom1970', '#rus1970',
        '#slo1970', '#tat1970', '#ukr1970']
    for (let i = 0; i < ids1970.length; i++) {
        $(ids1970[i]).hide()
    }
    let ids1959 = ['#bel1959', '#bul1959', '#gag1959', '#gre1959', '#hun1959', '#jew1959', '#mol1959',
        '#pol1959', '#gyp1959', '#rom1959', '#rus1959', '#slo1959', '#tat1959', '#ukr1959']
    for (let i = 0; i < ids1959.length; i++) {
        $(ids1959[i]).hide()
    }
    let ids1931 = ['#arm1931', '#bel1931', '#bul1931', '#cri1931', '#czs1931',
        '#ger1931', '#gre1931', '#hun1931', '#jew1931', '#lat1931', '#lit1931',
        '#mol1931', '#pol1931', '#gyp1931', '#rus1931', '#tat1931', '#ukr1931']
    for (let i = 0; i < ids1931.length; i++) {
        $(ids1931[i]).hide()
    }
    let ids1910 = ['#arm1910', '#bel1910', '#bul1910', '#cze1910', '#ger1910', '#gre1910',
        '#mol1910', '#pol1910', '#gyp1910', '#rus1910', '#tat1910', '#jew1910', '#ukr1910']
    for (let i = 0; i < ids1910.length; i++) {
        $(ids1910[i]).hide()
    }
}

$(document).on('click', function(e) {
    let container = $("#nationSidepanel");
    if (!$(e.target).closest(container).length) {
        if(!$(e.target).closest($('.top-bar')).length) {
            if (container.css('width') != '0px') closeNav();
        }
    }

    container = $('#infoSidepanel');
    if (!$(e.target).closest(container).length) {
        if(!$(e.target).closest($('.top-bar')).length) {
            if (container.css('width') != '0px') closeInfoNav();
        }
    }
});

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    let container = document.getElementById("nationSidepanel");
    if (container.style.width === '250px') {
        closeNav();
        return
    }
    else container.style.width = "250px";
}
function infoRequest() {
    jQuery("body").trigger("click");
    if(popupActive) return;
    $(".overlay, .popup").fadeToggle();
    $(".popup").css('display', 'flex');
    document.body.classList.add("stop-scrolling");
    setTimeout(
        function() {
            popupActive = true;
        }, 500);
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("nationSidepanel").style.width = "0";
}
function closeInfoNav() {
    document.getElementById("infoSidepanel").style.width = "0";
}

function setYearStylesToNormal() {
    let years = ['2001', '1989', '1979', '1970', '1959', '1931', '1910']
    for (let i = 0; i < years.length; i++) {
        document.getElementById(years[i]).style.fontWeight = "normal";
        $("#" + years[i]).css("text-decoration", "none")
    }
}

function setNationFontWeightsToNormal() {
    let ids = ['alb', 'arm', 'aze', 'bel', 'bul', 'chu', 'cri', 'cze', 'czs',
        'gag', 'geo', 'ger', 'gre', 'hun', 'jew', 'kor', 'kar', 'lat', 'lit',
        'mar', 'mol', 'mor', 'pol', 'gyp', 'rom', 'rus', 'slo', 'tat', 'ukr',
        'uzb']
    for(let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.fontWeight = "normal";
        document.getElementById(ids[i]).style.color = "#818181";
    }
}

function yearChange(id) {
    loadByYear(id, curNation)
    setYearStylesToNormal();
    curYear = parseInt(id)
    showNationsByYear(curYear)
    document.getElementById(id).style.fontWeight = "bold"
    $("#" + id).css("text-decoration", "underline")
    $("#" + id).css("text-decoration-color", "#00b68b")
    $("#" + id).css("text-decoration-thickness", "2.5px")
    // document.getElementById(id).style.color = "white";
    let fileWithCurYearInfo = "InfoMarkups/" + curYear.toString() + "_Info.html";
    $(".popup").load(fileWithCurYearInfo);

    setTimeout(controlPopupHeight, 500);
    // $('#hiddenText').html("This is sample text for year " + curYear.toString() + '. A hell lot of text:-)');
    rerenderMap();
}

function nationChange(id) {
    setNationFontWeightsToNormal()
    curNation = id
    loadByYear(curYear.toString(), curNation)
    document.getElementById(id).style.fontWeight = "bold";
    document.getElementById(id).style.color = "white";
    rerenderMap()
}

function showNationsByYear(year) {
    let allIds = ['alb', 'arm', 'aze', 'bel', 'bul', 'chu', 'cri', 'cze', 'czs',
        'gag', 'geo', 'ger', 'gre', 'hun', 'jew', 'kor', 'kar', 'lat', 'lit',
        'mar', 'mol', 'mor', 'pol', 'gyp', 'rom', 'rus', 'slo', 'tat', 'ukr',
        'uzb'];
    for (let i = 0; i < allIds.length; i++) {
        $('#' + allIds[i]).hide()
    }
    switch (year) {
        case 1910:
            let ids1910 = ['arm', 'bel', 'bul', 'cze', 'ger', 'gre', 'jew', 'mol', 'pol', 'gyp',
                'rus', 'tat', 'ukr'];
            for (let i = 0; i < ids1910.length; i++) {
                $('#' + ids1910[i]).show()
            }
            break;
        case 1959:
            let ids1959 = ['bel', 'bul', 'gag', 'gre', 'gyp', 'hun', 'jew', 'mol', 'pol', 'rom', 'rus', 'slo',
                'tat', 'ukr'];
            for (let i = 0; i < ids1959.length; i++) {
                $('#' + ids1959[i]).show()
            }
            break;
        case 1970:
            let ids1970 = ['ukr', 'rus', 'jew', 'pol', 'bel', 'tat', 'mol', 'gyp', 'gre', 'bul', 'arm', 'hun',
                'rom', 'slo', 'mor', 'chu', 'kar', 'gag'];
            for (let i = 0; i < ids1970.length; i++) {
                $('#' + ids1970[i]).show()
            }
            break;
        case 1979:
            let ids1979 = ['bel', 'bul', 'gag', 'gre', 'hun', 'jew', 'kar', 'mol', 'pol', 'rom',
                'rus', 'tat', 'ukr'];
            for (let i = 0; i < ids1979.length; i++) {
                $('#' + ids1979[i]).show()
            }
            break;
        case 1989:
            let ids1989 = ['alb', 'arm', 'aze', 'bel', 'bul', 'chu', 'cri', 'cze', 'gag', 'geo', 'ger', 'gre',
                'gyp', 'hun', 'jew', 'kor', 'mar', 'mol', 'pol', 'rom', 'rus', 'slo', 'tat', 'ukr', 'uzb']
            for (let i = 0; i < ids1989.length; i++) {
                $('#' + ids1989[i]).show()
            }
            break;
        case 2001:
            let ids2001 = ['arm', 'aze', 'bel', 'bul', 'cri', 'gag', 'geo',
                'ger', 'gre', 'hun', 'jew', 'mol', 'pol', 'gyp', 'rom', 'rus', 'slo',
                'tat', 'ukr']
            for (let i = 0; i < ids2001.length; i++) {
                $('#' + ids2001[i]).show()
            }
            break;
        case 1931:
            let ids1931 = ['arm', 'bel', 'bul', 'cri', 'czs', 'ger', 'gre', 'hun',
                'jew', 'lat', 'lit', 'mol', 'pol', 'gyp', 'rus', 'tat', 'ukr'];
            for (let i = 0; i < ids1931.length; i++) {
                $('#' + ids1931[i]).show()
            }
    }
}

function rerenderMap() {
    hideAll()
    if (curYear === 2001) {
        switch (curNation) {
            case 'arm':
                $('#arm2001').show()
                map_d3deb3fd9898c2dbbe4ca808ae3510b0.invalidateSize()
                break;
            case 'aze':
                $('#aze2001').show()
                map_61284ec5237c4c5aae3dedd84f84c8b8.invalidateSize()
                break;
            case 'bel':
                $('#bel2001').show()
                map_e40ea4f3d913022a9cc378d0d5f016d1.invalidateSize()
                break;
            case 'bul':
                $('#bul2001').show()
                map_e09a536487ae91499bcc8f1d9f92c1b8.invalidateSize()
                break;
            case 'cri':
                $('#cri2001').show()
                map_7c802ad0fcb734797ed2a93d9d258e57.invalidateSize()
                break;
            case 'gag':
                $('#gag2001').show()
                map_23815b46d933e4b83be64e6b9bf2ff13.invalidateSize()
                break;
            case 'geo':
                $('#geo2001').show()
                map_f6573f9c9e66f6f3b69f5ab8fc3d81f9.invalidateSize()
                break;
            case 'ger':
                $('#ger2001').show()
                map_443bc4255319097bae7e348fa0ebe223.invalidateSize()
                break;
            case 'gre':
                $('#gre2001').show()
                map_5f265895a3c935c19df90b871a6057ba.invalidateSize()
                break;
            case 'hun':
                $('#hun2001').show()
                map_b3cbca5ed24894554fb9554784ce3525.invalidateSize()
                break;
            case 'jew':
                $('#jew2001').show()
                map_1c42f1ec3db97444051b13cfe14beddd.invalidateSize()
                break;
            case 'mol':
                $('#mol2001').show()
                map_db405dcb7e3e717f640bbeac04a7f6e8.invalidateSize()
                break;
            case 'pol':
                $('#pol2001').show()
                map_3307d75fd19d5b2046b3a7b2345e733e.invalidateSize()
                break;
            case 'gyp':
                $('#gyp2001').show()
                map_f4c37b6376d203f18393fd1e93219be3.invalidateSize()
                break;
            case 'rom':
                $('#rom2001').show()
                map_ed655ea60a812dbd0a4ef91a64099790.invalidateSize()
                break;
            case 'rus':
                $('#rus2001').show()
                map_768bce02f9ae4d309aadaed1806ec1f5.invalidateSize()
                break;
            case 'slo':
                $('#slo2001').show()
                map_6c9dc15eb721cb99a64c92c8f5a86922.invalidateSize()
                break;
            case 'tat':
                $('#tat2001').show()
                map_11c0ba9aa54250bf342349496974b5be.invalidateSize()
                break;
            default:
                $('#ukr2001').show()
                map_c578f79cf859db647e73751c203a0ee1.invalidateSize()
        }
    }
    else if(curYear === 1989) {
        switch (curNation) {
            case "alb":
                $('#alb1989').show()
                map_2a78f0accd57b8e45606d9d6cacc5233.invalidateSize()
                break;
            case "arm":
                $('#arm1989').show()
                map_7f00797c7099efb02530ceedec6e4ddd.invalidateSize()
                break;
            case "aze":
                $('#aze1989').show()
                map_66b643703b71b565b87c5f51ac38e1d6.invalidateSize()
                break;
            case "bel":
                $('#bel1989').show()
                map_1de5cc021685b8de68cb5581b41075dc.invalidateSize()
                break;
            case "bul":
                $('#bul1989').show()
                map_f43cc2d3468d4c6c913e2612ff327e08.invalidateSize()
                break;
            case "chu":
                $('#chu1989').show()
                map_33cd1980b057b7ab65d50c04de25b5ba.invalidateSize()
                break;
            case "cri":
                $('#cri1989').show()
                map_eb95a3f644d23dd7f3a5901e75bd39aa.invalidateSize()
                break;
            case "cze":
                $('#cze1989').show()
                map_eb3ad9432e89460360aa7605bc883653.invalidateSize()
                break;
            case "gag":
                $('#gag1989').show()
                map_d887004b7d9855ac8a20303babdb55b8.invalidateSize()
                break;
            case "geo":
                $('#geo1989').show()
                map_2cdf0c6b98501c3ee69a9c9cfce0c111.invalidateSize()
                break;
            case "ger":
                $('#ger1989').show()
                map_4e9eb3e24247371881497935169307e8.invalidateSize()
                break;
            case "gre":
                $('#gre1989').show()
                map_f01030deeb2c5915687d14fd1587ad5c.invalidateSize()
                break;
            case "hun":
                $('#hun1989').show()
                map_7d4bc42111a07ceec13c324f6054298e.invalidateSize()
                break;
            case "jew":
                $('#jew1989').show()
                map_01ca5f1783ed5b197b8b1c61e6c6497e.invalidateSize()
                break;
            case "kor":
                $('#kor1989').show()
                map_8a5dbf6cfce314e3bbad26003b62c930.invalidateSize()
                break;
            case "mar":
                $('#mar1989').show()
                map_eceb16bccd0bebd8c2408c2e7636b0d6.invalidateSize()
                break;
            case "mol":
                $('#mol1989').show()
                map_2e2e5111f97dbc5c32f6e2ad99938b6c.invalidateSize()
                break;
            case "mor":
                $('#mor1989').show()
                map_dcfc578983faab4b7da4f239f7f94ef7.invalidateSize()
                break;
            case "pol":
                $('#pol1989').show()
                map_60de2f4233ad759fd14b59201dea6ad4.invalidateSize()
                break;
            case "gyp":
                $('#gyp1989').show()
                map_69b38b0a3a13b5b6756638110e4ded79.invalidateSize()
                break;
            case "rom":
                $('#rom1989').show()
                map_e4c3715cbf63832f791a17bc4bf825be.invalidateSize()
                break;
            case "rus":
                $('#rus1989').show()
                map_18bea5a9f4082a57441994def17595c6.invalidateSize()
                break;
            case "slo":
                $('#slo1989').show()
                map_5ab6e16ed9e2cec567025824ba999d67.invalidateSize()
                break;
            case "tat":
                $('#tat1989').show()
                map_6d542b3445acbe0f29c3b97aba5888d4.invalidateSize()
                break;
            case "uzb":
                $('#uzb1989').show()
                map_8594fceef1eb276e79d5a9949abbc555.invalidateSize()
                break;
            default:
                $('#ukr1989').show()
                map_1e42cafe77e169de12a2e1db8c03468f.invalidateSize()
                break;
        }
    }
    else if (curYear == 1979) {
        switch (curNation) {
            case 'bel':
                $('#bel1979').show()
                map_0e4dc67731c7bb5b1eea97e901afc3cf.invalidateSize()
                break;
            case 'bul':
                $('#bul1979').show()
                map_02f3629fa96516577868d8b9caf9649a.invalidateSize()
                break;
            case 'gag':
                $('#gag1979').show()
                map_5dfc49507343ff3b3f503e83a302e8e7.invalidateSize()
                break;
            case 'gre':
                $('#gre1979').show()
                map_3607ed7137c8d4c93124010509c859fa.invalidateSize()
                break;
            case 'hun':
                $('#hun1979').show()
                map_72c8478f76f567efa1643339f6bbb7bf.invalidateSize()
                break;
            case 'jew':
                $('#jew1979').show()
                map_07478eb09605ca397045eaf630a9ae02.invalidateSize()
                break;
            case 'kar':
                $('#kar1979').show()
                map_56e68e62f0394061d0b238d0063b1eac.invalidateSize()
                break;
            case 'mol':
                $('#mol1979').show()
                map_07d0cab0c7b59e2eb64422113fce7401.invalidateSize()
                break;
            case 'pol':
                $('#pol1979').show()
                map_2d1588d596a9467f9c713575d4a200fe.invalidateSize()
                break;
            case 'rom':
                $('#rom1979').show()
                map_b92fd30417037ef8c14858136be479a4.invalidateSize()
                break;
            case 'rus':
                $('#rus1979').show()
                map_60ef73c1ebff8217e982d54a3275e899.invalidateSize()
                break;
            case 'tat':
                $('#tat1979').show()
                map_953691034030ff0b793f2420c490ba3d.invalidateSize()
                break;
            default:
                $('#ukr1979').show()
                map_aa87c32bdbfc56802d94a6d60b158f3c.invalidateSize();
        }
    }
    else if (curYear == 1970) {
        switch (curNation) {
            case 'arm':
                $('#arm1970').show()
                map_9221ccdbfcead9316edaeb3adceba96c.invalidateSize()
                break;
            case 'bel':
                $('#bel1970').show()
                map_1cbf1e81b5d51d0d9e26e522c05898e2.invalidateSize()
                break;
            case 'bul':
                $('#bul1970').show()
                map_32441529ac0c61950e5c7038040025ad.invalidateSize()
                break;
            case 'chu':
                $('#chu1970').show()
                map_43bab48387494e8cbf93a61b94111b5e.invalidateSize()
                break;
            case 'gag':
                $('#gag1970').show()
                map_11f116c3daececa5bafba2564f2f1102.invalidateSize()
                break;
            case 'gre':
                $('#gre1970').show()
                map_b06885b06e5962bc630775ab5c4826fb.invalidateSize()
                break;
            case 'hun':
                $('#hun1970').show()
                map_8562a77f6900d576ea7413e3f306973c.invalidateSize()
                break;
            case 'jew':
                $('#jew1970').show()
                map_0c82f3b53dc6098ac4915d39f1681e09.invalidateSize()
                break;
            case 'kar':
                $('#kar1970').show()
                map_a3b7841bc7841d555439f29560d22832.invalidateSize()
                break;
            case 'mol':
                $('#mol1970').show()
                map_daf98e26a594a5d023cc6b35a7014471.invalidateSize()
                break;
            case 'mor':
                $('#mor1970').show()
                map_a53567ddfb98e796a1bb2ef2986d63e8.invalidateSize()
                break;
            case 'pol':
                $('#pol1970').show()
                map_82e1d06311eecd0056fe0f7db1119199.invalidateSize()
                break;
            case 'gyp':
                $('#gyp1970').show()
                map_4037ac3e99b4bb56619e193e92d6a275.invalidateSize()
                break;
            case 'rom':
                $('#rom1970').show()
                map_8b24a8d9dd71c3149461f97012e213b8.invalidateSize()
                break;
            case 'rus':
                $('#rus1970').show()
                map_299d757011b0c73d6186db87b3b923f0.invalidateSize()
                break;
            case 'slo':
                $('#slo1970').show()
                map_9fc701da77ccb1faee62d4d6d764b741.invalidateSize()
                break;
            case 'tat':
                $('#tat1970').show()
                map_d53e17a1f81c86fca794c0585b25d093.invalidateSize()
                break;
            default:
                $('#ukr1970').show()
                map_235636e5646e0bd00a7e96766df97f23.invalidateSize()
        }
    }
    else if (curYear === 1959) {
        switch (curNation) {
            case "bel":
                $('#bel1959').show()
                map_3c2a2fac420b2330fbca7e91b15ebf89.invalidateSize()
                break;
            case "bul":
                $('#bul1959').show()
                map_29b6eefcc112cc42eefb64065fa9edaf.invalidateSize()
                break;
            case "gag":
                $('#gag1959').show()
                map_d911bda13ef78433c157cd9a0ae9257c.invalidateSize()
                break;
            case "gre":
                $('#gre1959').show()
                map_78c182de3b6b94a057edebcfa8688554.invalidateSize()
                break;
            case "hun":
                $('#hun1959').show()
                map_41c87abbfef1628ed5ddd767a648e901.invalidateSize()
                break;
            case "jew":
                $('#jew1959').show()
                map_fa738c668048df37a220d1dc9a79a16a.invalidateSize()
                break;
            case "mol":
                $('#mol1959').show()
                map_70eea7d28a73a5361358ea021989c9f6.invalidateSize()
                break;
            case "pol":
                $('#pol1959').show()
                map_5a4c7fb839fdd1a4125f93c1593043ea.invalidateSize()
                break;
            case "gyp":
                $('#gyp1959').show()
                map_41db3723ad8af0d131f67a60656210e2.invalidateSize()
                break;
            case "rom":
                $('#rom1959').show()
                map_013cdaddfb72729679659d2ba727d7f1.invalidateSize()
                break;
            case "rus":
                $('#rus1959').show()
                map_7e7598b7ecfcb9b0bc0c31bd1290992b.invalidateSize()
                break;
            case "slo":
                $('#slo1959').show()
                map_23c86cac48937b728d87e4842eae1cf2.invalidateSize()
                break;
            case "tat":
                $('#tat1959').show()
                map_d5a5f6032ba47c58bef5e699d9690357.invalidateSize()
                break;
            default:
                $('#ukr1959').show()
                map_c06f9a41fc84eeb4e225657b6fb3780e.invalidateSize()
        }
    }
    else if (curYear === 1931) {
        switch (curNation) {
            case "arm":
                $('#arm1931').show()
                map_3cf9194f8cfb4b5e6867f9948e36c9bc.invalidateSize()
                break;
            case "bel":
                $('#bel1931').show()
                map_be53313588f8adc7542e6538a83e520a.invalidateSize()
                break;
            case "bul":
                $('#bul1931').show()
                map_9cd6e624b2859e6d049c3f4e8a129497.invalidateSize()
                break;
            case "cri":
                $('#cri1931').show()
                map_cf29f7465bf8b5a90e599ca4d09b5bdf.invalidateSize()
                break;
            case "czs":
                $('#czs1931').show()
                map_8abb514f26dc59116218d5f041c227fa.invalidateSize()
                break;
            case "ger":
                $('#ger1931').show()
                map_5fff4eee6c97ea93028aeb7011a204f9.invalidateSize()
                break;
            case "gre":
                $('#gre1931').show()
                map_bbaef37eeadce60471f7f0458817bcde.invalidateSize()
                break;
            case "hun":
                $('#hun1931').show()
                map_e9a8042ab0107fe8c2462c6ca06b2e34.invalidateSize()
                break;
            case "jew":
                $('#jew1931').show()
                map_55293cfc28a39117777ba1a02ecdc3c4.invalidateSize()
                break;
            case "lat":
                $('#lat1931').show()
                map_c060deeeb002fe510b795375950ec65e.invalidateSize()
                break;
            case "lit":
                $('#lit1931').show()
                map_97a3deb88f28571a162b7167e68f4f9b.invalidateSize()
                break;
            case "mol":
                $('#mol1931').show()
                map_b1b6051ddc786f9e702ec63cbe7f46b9.invalidateSize()
                break;
            case "pol":
                $('#pol1931').show()
                map_955a5990893665dcbe87553d0ac5aa4a.invalidateSize()
                break;
            case "gyp":
                $('#gyp1931').show()
                map_f8ff19ae3e4323d0a05333a13da36429.invalidateSize()
                break;
            case "rus":
                $('#rus1931').show()
                map_ba1246e27c15aa05c31676b94d1ff28c.invalidateSize()
                break;
            case "tat":
                $('#tat1931').show()
                map_a608b0c427b7d15c26c76a63a5fd1291.invalidateSize()
                break;
            default:
                $('#ukr1931').show()
                map_5ef298458bd559518a3fbd8f33cb6624.invalidateSize()
        }
    }
    else if (curYear == 1910) {
        switch (curNation) {
            case "arm":
                $('#arm1910').show()
                map_7926a63ccdeee9b05b62337c6bcb2856.invalidateSize()
                break;
            case "bel":
                $('#bel1910').show()
                map_edb70c8cd339d8184fee92498c63147b.invalidateSize()
                break;
            case "bul":
                $('#bul1910').show()
                map_d07929aebd24d16965a45edba5dab2fd.invalidateSize()
                break;
            case "cze":
                $('#cze1910').show()
                map_e4b461a5808974806d76e98c2e094301.invalidateSize()
                break;
            case "ger":
                $('#ger1910').show()
                map_bebd4874e68d9ba41b1566ea720665ef.invalidateSize()
                break;
            case "gre":
                $('#gre1910').show()
                map_af8945cc243864edd85642006a8ead04.invalidateSize()
                break;
            case "mol":
                $('#mol1910').show()
                map_3d612726123f33c96aebffe1e84bd507.invalidateSize()
                break;
            case "pol":
                $('#pol1910').show()
                map_bdffb16c64395960280fc308b9c074a8.invalidateSize()
                break;
            case "gyp":
                $('#gyp1910').show()
                map_522b856229ac790de81399b3ca843f4f.invalidateSize()
                break;
            case "rus":
                $('#rus1910').show()
                map_b315002e82528fa8cb877ad9bca62e0f.invalidateSize()
                break;
            case "tat":
                $('#tat1910').show()
                map_b447e26f370afc0dbaccf2fd6826acb6.invalidateSize()
                break;
            case "jew":
                $('#jew1910').show()
                map_e4ea04fded9f9c0ff637bb2cec20f44b.invalidateSize()
                break;
            default:
                $('#ukr1910').show()
                map_61694fa678eb95225a845742e79b32c2.invalidateSize()
        }
    }
}

function loadByYear(year, nationId){
    let files = []
    switch (year) {
        case '2001':
            if(nationId === 'gyp') {
                if(validateForRequest(year, 'gyp')){
                    requestFileFromServer(year, 'roma');
                }
                return;
            }
            files = ['armenians', 'azerbaijani', 'belarusians', 'bulgarians', 'crimean_tatars',
                'gagauz_people', 'georgians', 'germans', 'greeks', 'hungarians', 'jews', 'moldovans',
                'poles', 'romanians', 'roma', 'russians', 'slovaks', 'tatars', 'ukrainians']
            files.forEach(function (item){
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
        case '1989':
            files = ['albanians', 'armenians', 'azerbaijani', 'belarusians', 'bulgarians',
                'chuvashi', 'crimean_tatars', 'czechs', 'gypsy',
                'gagauzes', 'georgians', 'germans', 'greeks', 'hungarians', 'jews', 'koreans',
                'mari', 'moldovans', 'mordvins',
                'poles', 'romanians', 'russians', 'slovaks', 'tatars', 'ukrainians', 'uzbeks']
            files.forEach(function (item){
                console.log("Slice = " + item.slice(0, 3))
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
        case '1979':
            files = ['belarusians', 'bulgarians', 'gagauzs', 'greeks', 'hungarians',
                'jews', 'karaites', 'moldovans',
                'poles', 'romanians', 'russians', 'tatars', 'ukrainians']
            files.forEach(function (item){
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
        case '1970':
            files = ['armenians', 'belarusians', 'bulgarians', 'chuvashi', 'gagauzes',
                'greeks', 'gypsy', 'hungarians', 'jews', 'karaites', 'moldovans', 'mordvins',
                'poles', 'romanians', 'russians', 'slovaks', 'tatars', 'ukrainians']
            files.forEach(function (item){
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
        case '1959':
            files = ['belarusians', 'bulgarians', 'gagauzes', 'greeks', 'gypsy',
                'hungarians', 'jews', 'moldovans', 'poles', 'romanians', 'russians', 'slovaks',
                'tatars', 'ukrainians']
            files.forEach(function (item){
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
        case '1931':
            if(nationId === 'czs'){
                if(validateForRequest(year, 'czs')){
                    requestFileFromServer(year, 'czechs_and_slovaks');
                }
                return;
            }
            if(nationId === 'gyp') {
                if(validateForRequest(year, 'gyp')){
                    requestFileFromServer(year, 'roma');
                }
                return;
            }
            files = ['armenians', 'belarusians', 'bulgarians', 'crimean_tatars',
                'czechs_and_slovaks', 'germans', 'greeks', 'hungarians', 'jews',
                'latvians', 'lithuanians', 'moldovans', 'poles', 'roma', 'russians',
                'tatars', 'ukrainians']
            files.forEach(function (item){
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
        case '1910':
            files = ['armenians', 'belarusians', 'bulgarians', 'czechs', 'germans', 'greeks',
                'gypsy', 'jews', 'moldovans', 'polish', 'russians', 'tatars', 'ukrainians']
            files.forEach(function (item){
                if (item.slice(0, 3) === nationId) {
                    if (loadedScripts.get(year).get(nationId)) return;
                    loadedScripts.get(year).set(nationId, true);
                    requestFileFromServer(year, item);
                    return;
                }
            })
            if (validateForRequest(year, 'ukr')) {
                requestFileFromServer(year, 'ukrainians');
            }
            return;
            break;
    }

}

function validateForRequest(year, nation) {
    if (loadedScripts.get(year).get(nation)) return false;
    loadedScripts.get(year).set(nation, true);
    return true;
}

function requestFileFromServer(year, nation) {
    let dir = "Maps/maps" + year.toString() + "/" + nation + ".js";
    $.ajax({
        url: dir,
        dataType: "script",
        cache: false,
        success: function() {
            console.log("File loaded and executed.");
        },
        error: function(xhr, status, error) {
            // console.error("Error loading file:", error);
        }
    });
}