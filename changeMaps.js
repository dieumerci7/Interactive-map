let curYear = 1989
let curNation = "ukr"
let popupActive = false

$("body").click(function(){
    if (!popupActive) return;
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
    // let popupHeight = $('.popup').height()
    // $('.popup-content').height(popupHeight)
    //$('.popup-content').css('vertical-align', 'middle')

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
}

function hideAll() {
    let ids2001 = ['#arm2001', '#aze2001', '#bel2001', '#bul2001', '#cri2001',
        '#gag2001', '#geo2001', '#ger2001', '#gre2001', '#hun2001',
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
    let ids1927 = ['#arm1927', '#bel1927', '#bul1927', '#cri1927', '#czs1927',
        '#ger1927', '#gre1927', '#hun1927', '#jew1927', '#lat1927', '#lit1927',
        '#mol1927', '#pol1927', '#gyp1927', '#rus1927', '#tat1927', '#ukr1927']
    for (let i = 0; i < ids1927.length; i++) {
        $(ids1927[i]).hide()
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
    let years = ['2001', '1989', '1979', '1970', '1959', '1927', '1910']
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
    setYearStylesToNormal();
    curYear = parseInt(id)
    showNationsByYear(curYear)
    document.getElementById(id).style.fontWeight = "bold"
    $("#" + id).css("text-decoration", "underline")
    $("#" + id).css("text-decoration-color", "#00b68b")
    $("#" + id).css("text-decoration-thickness", "2.5px")
    // document.getElementById(id).style.color = "white";
    rerenderMap();
    let fileWithCurYearInfo = "InfoMarkups/" + curYear.toString() + "_Info.html";
    $(".popup").load(fileWithCurYearInfo);
    setTimeout(
        controlPopupHeight, 500);
    // $('#hiddenText').html("This is sample text for year " + curYear.toString() + '. A hell lot of text:-)');
}

function nationChange(id) {
    setNationFontWeightsToNormal()
    curNation = id
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
                'ger', 'gre', 'hun', 'mol', 'pol', 'gyp', 'rom', 'rus', 'slo',
                'tat', 'ukr']
            for (let i = 0; i < ids2001.length; i++) {
                $('#' + ids2001[i]).show()
            }
            break;
        case 1927:
            let ids1927 = ['arm', 'bel', 'bul', 'cri', 'czs', 'ger', 'gre', 'hun',
                'jew', 'lat', 'lit', 'mol', 'pol', 'gyp', 'rus', 'tat', 'ukr'];
            for (let i = 0; i < ids1927.length; i++) {
                $('#' + ids1927[i]).show()
            }
    }
}

function rerenderMap() {
    hideAll()
    if (curYear === 2001) {
        switch (curNation) {
            case 'arm':
                $('#arm2001').show()
                map_a5ab95940eebb9a5730e32c125d85ca4.invalidateSize()
                break;
            case 'aze':
                $('#aze2001').show()
                map_fa9666b6dfadfd662e54386c9989f043.invalidateSize()
                break;
            case 'bel':
                $('#bel2001').show()
                map_4ea74f22a7da31f0d14c536a01d15dec.invalidateSize()
                break;
            case 'bul':
                $('#bul2001').show()
                map_3a6397e3a98848ec570e01c3b956270f.invalidateSize()
                break;
            case 'cri':
                $('#cri2001').show()
                map_59c0854e716b73b2ee9a0c90500d08b3.invalidateSize()
                break;
            case 'gag':
                $('#gag2001').show()
                map_74362a66daee557de731efeb2e554597.invalidateSize()
                break;
            case 'geo':
                $('#geo2001').show()
                map_37ed2f64604ca8667073fccaebcac14a.invalidateSize()
                break;
            case 'ger':
                $('#ger2001').show()
                map_479b95009cb71d04f6e3d82b654f5e84.invalidateSize()
                break;
            case 'gre':
                $('#gre2001').show()
                map_f0c1ae40893416c370cac472c880f2c7.invalidateSize()
                break;
            case 'hun':
                $('#hun2001').show()
                map_3c636e096f088a205f2e47a02c3731ce.invalidateSize()
                break;
            case 'mol':
                $('#mol2001').show()
                map_84f98d0c7d2da47ec13a512a94a63a94.invalidateSize()
                break;
            case 'pol':
                $('#pol2001').show()
                map_565b1615c382beff77e44b316152f76f.invalidateSize()
                break;
            case 'gyp':
                $('#gyp2001').show()
                map_92f3dcbd1ba04c7b5e2068a71e84343c.invalidateSize()
                break;
            case 'rom':
                $('#rom2001').show()
                map_6fed0a58599c310da555f6e9a00a3e96.invalidateSize()
                break;
            case 'rus':
                $('#rus2001').show()
                map_f0cdb18409c29119d6b32fc965b674a4.invalidateSize()
                break;
            case 'slo':
                $('#slo2001').show()
                map_d26e2d0deec24ca7aa55131332df3f33.invalidateSize()
                break;
            case 'tat':
                $('#tat2001').show()
                map_93e2098b257bd00da1b0f2b949b7444c.invalidateSize()
                break;
            default:
                $('#ukr2001').show()
                map_336388c1c0594ab2c66af6afa12197f5.invalidateSize()
        }
    }
    else if(curYear === 1989) {
        switch (curNation) {
            case "alb":
                $('#alb1989').show()
                map_1f4ba356da92d43a9220fd85760b090f.invalidateSize()
                break;
            case "arm":
                $('#arm1989').show()
                map_239a22e53127770fb5b6682766918d30.invalidateSize()
                break;
            case "aze":
                $('#aze1989').show()
                map_df2a6176d499aa134fc28b261f6ea801.invalidateSize()
                break;
            case "bel":
                $('#bel1989').show()
                map_36de4db921e43ea044bf933d3a88fa7a.invalidateSize()
                break;
            case "bul":
                $('#bul1989').show()
                map_34b601f1ffa5219db9bc66bc6854b3f0.invalidateSize()
                break;
            case "chu":
                $('#chu1989').show()
                map_c17eb3baae8dc699d3b817c82392733d.invalidateSize()
                break;
            case "cri":
                $('#cri1989').show()
                map_3cba70bdd44c50b94caec562d23bfbd8.invalidateSize()
                break;
            case "cze":
                $('#cze1989').show()
                map_fc59c617949d2360965cd4b839afdfb0.invalidateSize()
                break;
            case "gag":
                $('#gag1989').show()
                map_dce332e1dac76c9001c69d8c5abeea93.invalidateSize()
                break;
            case "geo":
                $('#geo1989').show()
                map_8dc79fa8fed703948ffa958057e385cd.invalidateSize()
                break;
            case "ger":
                $('#ger1989').show()
                map_f7165220cf95dc57858bf298caece42a.invalidateSize()
                break;
            case "gre":
                $('#gre1989').show()
                map_1243632302a7976e83d6409c8a074a3d.invalidateSize()
                break;
            case "hun":
                $('#hun1989').show()
                map_7089f9d230eea61840f905a6f3fecaeb.invalidateSize()
                break;
            case "jew":
                $('#jew1989').show()
                map_815e1f7d1630ecb1884f2ebf88e1015f.invalidateSize()
                break;
            case "kor":
                $('#kor1989').show()
                map_20f768dcfd0a541a3c730f1eb338c75d.invalidateSize()
                break;
            case "mar":
                $('#mar1989').show()
                map_83ec59278df7a5bc6bbea91977f1010f.invalidateSize()
                break;
            case "mol":
                $('#mol1989').show()
                map_b3b92d332fd1ddbc6454caf6bbffc272.invalidateSize()
                break;
            case "mor":
                $('#mor1989').show()
                map_1b1a584089d863b8e31af50101600816.invalidateSize()
                break;
            case "pol":
                $('#pol1989').show()
                map_77a1ace154eea2b77fc663e699b7c238.invalidateSize()
                break;
            case "gyp":
                $('#gyp1989').show()
                map_312efb7b3ae06c38f697d449652289ed.invalidateSize()
                break;
            case "rom":
                $('#rom1989').show()
                map_3b12d21f0f322d0f4462a7d6af756fe3.invalidateSize()
                break;
            case "rus":
                $('#rus1989').show()
                map_dd0e055d359805c36e147bec9e5ee4bc.invalidateSize()
                break;
            case "slo":
                $('#slo1989').show()
                map_dc0de8315f5391356feaf50f6b2e7952.invalidateSize()
                break;
            case "tat":
                $('#tat1989').show()
                map_fea83e164123b2dde9b3dd0e14c796a1.invalidateSize()
                break;
            // case "ukr":
            //     $('#ukr1989').show()
            //     map_4ac3969c1e5f64e7053a3ebbb7adc1b0.invalidateSize()
            //     break;
            case "uzb":
                $('#uzb1989').show()
                map_ad24f5885eb2e4a5cb77da985295a24b.invalidateSize()
                break;
            default:
                $('#ukr1989').show()
                map_2488a2de6718fb7e218b7db2b9343d6d.invalidateSize()
                break;
        }
    }
    else if (curYear == 1979) {
        switch (curNation) {
            case 'bel':
                $('#bel1979').show()
                map_8afb1c09649c9b93fcefacf80c5f7fe8.invalidateSize()
                break;
            case 'bul':
                $('#bul1979').show()
                map_bddc1284f6e9f0b62dda5ad4133db380.invalidateSize()
                break;
            case 'gag':
                $('#gag1979').show()
                map_6e2e2fc8d229db7beb0915d87512042f.invalidateSize()
                break;
            case 'gre':
                $('#gre1979').show()
                map_2a9554514281a5b02f75a098c91a38c1.invalidateSize()
                break;
            case 'hun':
                $('#hun1979').show()
                map_ed75934111e17ddc954e1baf0c255566.invalidateSize()
                break;
            case 'jew':
                $('#jew1979').show()
                map_cc78b752cae911b620643519f73b4e6a.invalidateSize()
                break;
            case 'kar':
                $('#kar1979').show()
                map_6d5e0d9965784fdc0b5002bbe8d67a06.invalidateSize()
                break;
            case 'mol':
                $('#mol1979').show()
                map_23f6d1963523b4ac6c8cc433f10527c0.invalidateSize()
                break;
            case 'pol':
                $('#pol1979').show()
                map_5b890f5a698e4da63c9f66a7aa56833e.invalidateSize()
                break;
            case 'rom':
                $('#rom1979').show()
                map_c70fb34fea15ecbf9f198774c9251f6d.invalidateSize()
                break;
            case 'rus':
                $('#rus1979').show()
                map_97f831903a5a974a18a71a7fe7138997.invalidateSize()
                break;
            case 'tat':
                $('#tat1979').show()
                map_68268081a730661151eb03ce83fc34af.invalidateSize()
                break;
            default:
                $('#ukr1979').show()
                map_fde3c1c833463e5db72d28c1197aadda.invalidateSize();
        }
    }
    else if (curYear == 1970) {
        switch (curNation) {
            case 'arm':
                $('#arm1970').show()
                map_84d7880b62c908cac146c7c2a1a90d52.invalidateSize()
                break;
            case 'bel':
                $('#bel1970').show()
                map_349056249b53c3b10bf2e07df99458e2.invalidateSize()
                break;
            case 'bul':
                $('#bul1970').show()
                map_699e6a02c3b226bd6d6a949501a7de36.invalidateSize()
                break;
            case 'chu':
                $('#chu1970').show()
                map_b918451a95a9496b00b57b858365b16c.invalidateSize()
                break;
            case 'gag':
                $('#gag1970').show()
                map_525b5d458f3d1c958ab45fd472a4c4c0.invalidateSize()
                break;
            case 'gre':
                $('#gre1970').show()
                map_d9236c5efaa2b0b2da4d954147f31425.invalidateSize()
                break;
            case 'hun':
                $('#hun1970').show()
                map_52e71a8672ace0e96b74a72ee34cb2ff.invalidateSize()
                break;
            case 'jew':
                $('#jew1970').show()
                map_0f48893eeca347dd4bdc5911959a19c0.invalidateSize()
                break;
            case 'kar':
                $('#kar1970').show()
                map_12b9cc49a89f351eadbdec0154be24cf.invalidateSize()
                break;
            case 'mol':
                $('#mol1970').show()
                map_4f876c4ad75827163ccede93a2b7f9d0.invalidateSize()
                break;
            case 'mor':
                $('#mor1970').show()
                map_f8a345e1b54999a9da65e406296bfdb1.invalidateSize()
                break;
            case 'pol':
                $('#pol1970').show()
                map_458b2214a9fb3cc67640070e0765755c.invalidateSize()
                break;
            case 'gyp':
                $('#gyp1970').show()
                map_d9bbe96091daf6e8d9c358e7711683f4.invalidateSize()
                break;
            case 'rom':
                $('#rom1970').show()
                map_ad12fa948b60f00374c83d22acac19dd.invalidateSize()
                break;
            case 'rus':
                $('#rus1970').show()
                map_206c25b63f5990cedee8d60889d548a8.invalidateSize()
                break;
            case 'slo':
                $('#slo1970').show()
                map_22216f1858c768ae09afd3126d029112.invalidateSize()
                break;
            case 'tat':
                $('#tat1970').show()
                map_5020149c3b69c165cdac5a3f7f9f290a.invalidateSize()
                break;
            default:
                $('#ukr1970').show()
                map_98564c962727a290441d2607c6d55692.invalidateSize()
        }
    }
    else if (curYear === 1959) {
        switch (curNation) {
            case "bel":
                $('#bel1959').show()
                map_51b5cf96674136b3da45f2ee13554846.invalidateSize()
                break;
            case "bul":
                $('#bul1959').show()
                map_dfb759433018496b0f76e055ee04d68e.invalidateSize()
                break;
            case "gag":
                $('#gag1959').show()
                map_fde02dda9fff7d50500dc1b592598693.invalidateSize()
                break;
            case "gre":
                $('#gre1959').show()
                map_0944a7c3f8e880275fc46914c901602e.invalidateSize()
                break;
            case "hun":
                $('#hun1959').show()
                map_463d72bb95917d782d86aa769af7e044.invalidateSize()
                break;
            case "jew":
                $('#jew1959').show()
                map_4b0be4cd4352d8f95a7cb946b5ecd74f.invalidateSize()
                break;
            case "mol":
                $('#mol1959').show()
                map_e14df29a6bb8277a25811352791d6bfd.invalidateSize()
                break;
            case "pol":
                $('#pol1959').show()
                map_3975fb39d6b586000507c2163c1d28cd.invalidateSize()
                break;
            case "gyp":
                $('#gyp1959').show()
                map_c4307bd7318decb1315cc6591536a277.invalidateSize()
                break;
            case "rom":
                $('#rom1959').show()
                map_d1d68166be98f99b876cbe6471b29cad.invalidateSize()
                break;
            case "rus":
                $('#rus1959').show()
                map_b9d0b1f5375a4b2f5c51d2949726b7f7.invalidateSize()
                break;
            case "slo":
                $('#slo1959').show()
                map_51f12d8010fa28408d3c01a566a7b67e.invalidateSize()
                break;
            case "tat":
                $('#tat1959').show()
                map_116a65eb5bdfe55a25cd3ede0224ea95.invalidateSize()
                break;
            // case "ukr":
            //     $('#ukr1959').show()
            //     map_3712c3e87dff04abff8a461f0e951107.invalidateSize()
            //     break;
            default:
                $('#ukr1959').show()
                map_30f8a4b361a47a620318102a1a1ef893.invalidateSize()
        }
    }
    else if (curYear == 1927) {
        switch (curNation) {
            case "arm":
                $('#arm1927').show()
                map_7390ecc6050c2c86d58273c4d76cabb2.invalidateSize()
                break;
            case "bel":
                $('#bel1927').show()
                map_061749b35ef271a5d44b090621feb28c.invalidateSize()
                break;
            case "bul":
                $('#bul1927').show()
                map_d83dd6ee452fbb54f2ee0cf23d5615a2.invalidateSize()
                break;
            case "cri":
                $('#cri1927').show()
                map_1e3346aa5ed9d0aabc1682838074663e.invalidateSize()
                break;
            case "czs":
                $('#czs1927').show()
                map_5af201dd990c7b20f9049888f3eff779.invalidateSize()
                break;
            case "ger":
                $('#ger1927').show()
                map_7316974ce813a403e535bf68adff022a.invalidateSize()
                break;
            case "gre":
                $('#gre1927').show()
                map_6d953ac2c33e81e7991101310e6994b5.invalidateSize()
                break;
            case "hun":
                $('#hun1927').show()
                map_b7c9ad8b016b44c191b392fb5424a0a4.invalidateSize()
                break;
            case "jew":
                $('#jew1927').show()
                map_0239eb14e8fbf812ff6615bcdf222dcf.invalidateSize()
                break;
            case "lat":
                $('#lat1927').show()
                map_1ed9b6aa021c2bd9f1a04e047943cdd4.invalidateSize()
                break;
            case "lit":
                $('#lit1927').show()
                map_a2cf69216e67e41c71ea90d2c977cf7d.invalidateSize()
                break;
            case "mol":
                $('#mol1927').show()
                map_59396dc08b544d3e418a929e33e9c5fe.invalidateSize()
                break;
            case "pol":
                $('#pol1927').show()
                map_c672b45a9a1fdd798e7656250d8b5359.invalidateSize()
                break;
            case "gyp":
                $('#gyp1927').show()
                map_b93ec8e6bcc9669b3a1e5b13a5ec668d.invalidateSize()
                break;
            case "rus":
                $('#rus1927').show()
                map_97e603fa2e3fad8df8d97bff13fe8f75.invalidateSize()
                break;
            case "tat":
                $('#tat1927').show()
                map_ab1d27a7e80253a0ed016b1700aba24b.invalidateSize()
                break;
            default:
                $('#ukr1927').show()
                map_80a0a8e548c6cc801207dac787e17c3b.invalidateSize()
        }
    }
    else if (curYear == 1910) {
        switch (curNation) {
            case "arm":
                $('#arm1910').show()
                map_4b57ed78aaf85580048547c172039df4.invalidateSize()
                break;
            case "bel":
                $('#bel1910').show()
                map_158dc2d1f44baa16622214faf4b14a8b.invalidateSize()
                break;
            case "bul":
                $('#bul1910').show()
                map_a3bcbaaf643506ad142ad9324785de20.invalidateSize()
                break;
            case "cze":
                $('#cze1910').show()
                map_e7ada59769aba84b2e1ef7fe00504cf3.invalidateSize()
                break;
            case "ger":
                $('#ger1910').show()
                map_d506cf733dd06e4198a7cfe8da8d84be.invalidateSize()
                break;
            case "gre":
                $('#gre1910').show()
                map_ac9cac9a72027dc3ad5a89fb25eae3d9.invalidateSize()
                break;
            case "mol":
                $('#mol1910').show()
                map_e4ab9376bc8aab329cc35f4b8c46f770.invalidateSize()
                break;
            case "pol":
                $('#pol1910').show()
                map_a12773ceab6b6fee8ef25b62265fae37.invalidateSize()
                break;
            case "gyp":
                $('#gyp1910').show()
                map_1b499cc3d05530dcba612943e572d8fb.invalidateSize()
                break;
            case "rus":
                $('#rus1910').show()
                map_820b33d07252cbf77c64535b07f89993.invalidateSize()
                break;
            case "tat":
                $('#tat1910').show()
                map_63e776b154e7088f758ebec3baf327a4.invalidateSize()
                break;
            case "jew":
                $('#jew1910').show()
                map_67ce28b15b4984ee32936e61d79427a5.invalidateSize()
                break;
            default:
                $('#ukr1910').show()
                map_0ac0fe9eaccda7f8b7515cf3e9baa31a.invalidateSize()
        }
    }
}