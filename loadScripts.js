export function loadByYear(year){
    if(loadedScripts.get(year)) return;
    loadedScripts.set(year, true)

    let files = []
    switch (year) {

        case '2001':
            files = ['armenians', 'azerbaijani', 'belarusians', 'bulgarians', 'crimean_tatars',
            'gagauz_people', 'georgians', 'germans', 'greeks', 'hungarians', 'moldovans',
            'poles', 'roma', 'romanians', 'russians', 'slovaks', 'tatars', 'ukrainians']
            break;
        case '1989':
            files = ['albanians', 'armenians', 'azerbaijani', 'belarusians', 'bulgarians',
                'chuvashi', 'crimean_tatars', 'czechs', 'gypsy',
                'gagauzes', 'georgians', 'germans', 'greeks', 'hungarians', 'jews', 'koreans',
                'mari', 'moldovans', 'mordvins',
                'poles', 'romanians', 'russians', 'slovaks', 'tatars', 'ukrainians', 'uzbeks']
            break;
        case '1979':
            files = ['belarusians', 'bulgarians', 'gagauzs', 'greeks', 'hungarians',
                'jews', 'karaites', 'moldovans',
                'poles', 'romanians', 'russians', 'tatars', 'ukrainians']
            break;
        case '1970':
            files = ['armenians', 'belarusians', 'bulgarians', 'chuvashi', 'gagauzes',
                'greeks', 'gypsy', 'hungarians', 'jews', 'karaites', 'moldovans', 'mordvins',
                'poles', 'romanians', 'russians', 'slovaks', 'tatars', 'ukrainians']
            break;
        case '1959':
            files = ['belarusians', 'bulgarians', 'gagauzes', 'greeks', 'gypsy',
                'hungarians', 'jews', 'moldovans', 'poles', 'romanians', 'russians', 'slovaks',
                'tatars', 'ukrainians']
            break;
        case '1931':
            files = ['armenians', 'belarusians', 'bulgarians', 'crimean_tatars',
                'czechs_and_slovaks', 'germans', 'greeks', 'hungarians', 'jews',
                'latvians', 'lithuanians', 'moldovans', 'poles', 'roma', 'russians',
                'tatars', 'ukrainians']
            break;
        case '1910':
            files = ['armenians', 'belarusians', 'bulgarians', 'czechs', 'germans', 'greeks',
                'gypsy', 'jews', 'moldovans', 'polish', 'russians', 'tatars', 'ukrainians']
            break;
    }

    for (let i = 0; i < files.length; ++i) {
        let dir = "Maps/maps" + year.toString() + "/" + files[i] + ".js";
        $.getScript(dir)
    }
}