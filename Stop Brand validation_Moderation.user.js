// ==UserScript==
// @name         Stop Brand TEST
// @match        http://splitter.staging.com.ua/gomer/items/on-moderation/source/*
// @require      https://unpkg.com/sweetalert/dist/sweetalert.min.js
// ==/UserScript==
(function(){

    //Список стоп-брендов
    let stopBrendsNames = ["Hasbro", "Laska", "Le Chat", "LEGO", "Lenor", "Lepin", "Light Stax", "Like.Bike", "Little Live Pets",
                           "Losk", "Magplayer", "Maxmark", "Merrell", "Miqilong", "Motul", "Moulinex", "Nattou", "New Balance", "Noirot",
                           "Nuvita", "Olmo", "Omron", "Oral-B", "Oral-b Braun", "Oribel", "Persil", "Perwoll", "Playmags", "Air Wick",
                           "Alpha Industries", "Amazfit", "Ambassador", "Ambassador Fresh", "Ariel", "Auldey", "Avionaut", "BaByliss", "Bayby",
                           "Becks Plastilin", "Beurer", "Bold", "Braun", "Bref", "BRYZA", "Calgon", "Caterpillar", "Cillit", "Cillit Bang", "Clarks",
                           "Clean", "Columbia", "Cooper&Hunter", "Dahua", "Dash", "Airboss", "Dax", "Dell", "Delonghi", "Diadora", "Dixan", "Dyson", "ECCO",
                           "Ecotec", "Eichhorn", "Epson", "Fairy", "Ferplast", "Fila", "Fischertechnik", "FischerTip", "Franke", "Frosch", "Gala", "Galinka",
                           "Gillette", "Goki", "GoPro", "Heimess", "Hikvision", "Janod", "Lacoste", "Jedo", "Krups", "Kaloo", "Kingston", "HyperX", "Koolsun",
                           "Pop-it-Up", "Protech", "Remington", "Rex", "Rowenta", "Russell Hobbs", "Saeco", "Same Toy", "Samsung", "Scribble Down", "Sequin Art",
                           "Scholl", "Siemens", "Sigikid", "Silan", "Skechers", "Soft Toys", "Somat", "Springfield", "Tangle Teezer", "Tefal", "Tide", "Timberland",
                           "Tiret", "TOMi", "Tosot", "TOTTI Caffe", "Under Armour", "Vanish", "Vans", "Veet", "Vitek", "Vizir", "Women'Secret", "Wonderworld",
                           "Xiaomi", "Zelmer", "Zvezda", "Чорна Карта", "Mono Electric", "Honor", "Nespresso", "Grand Way", "Roda", "Astonish", "Ecosoft", "Filter 1",
                           "Наша Вода", "Mi", "Yi", "1More", "Yeelight", "ZMi", "MiJia", "MiJobs", "KingMi","Adidas", "Nike", "Primigi", "Puma", "Reebok", "UGG", "UGG Australia",
                           "VAGABOND", "Bastion", "Crocs", "Geox", "Gree", "Hoapp", "Ausini", "Bela", "Brick", "Decool", "JVToy", "Lele", "Atlantic", "AmazFit", "HuaMi", "WeLoop", "ZMi"],

        //Список категорий, для исключения валидации
        nameCategories = ['Чехлы для мобильных телефонов (146229)', 'Защитные стекла (4635121)', 'Защитные пленки (4635113)', 'Защитные покрытия (4635129)',
                          'Аккумуляторы для мобильных телефонов (146332)', 'Дисплеи для телефонов (4647798)', 'Тачскрины для телефонов (4647806)', 'Чехлы для планшетов (305219)',
                          'Кабели синхронизации (146539)'],
        //Счетчики
        counter = 0, count = 0;

    //
    const stateProductUsed = 'Б/У', stateProductRefurbished = 'Refurbished',
          checkBoxBtnSelector = document.querySelectorAll("#sync-sources-container > table > tbody > tr > td.skip-export.kv-align-center.kv-align-middle.kv-row-select > input"),
          nameVendorSelector = document.querySelectorAll("#sync-sources-container > table > tbody > tr > td:nth-child(5)"),
          nameItemsSelector = document.querySelectorAll("#sync-sources-container > table > tbody > tr > td:nth-child(4)"),
          nameCategoriesSelector = document.querySelectorAll("#sync-sources-container > table > tbody > tr > td:nth-child(8) > a"),
          bkColorSelectedGoodsSelector = document.querySelectorAll("#sync-sources-container > table > tbody > tr");

    //Оповещение
    function MessageDialog(counter){
        if(counter != 0){
            swal({
                title: "Найдено Стоп-Брендов: " + counter,
                icon: "error",
                text: "Скройте пожалуйста! \n\n Товары уже выделены! \n\n Действия -> Не прошли модерацию",
                buttons: false,
                dangerMode: true,
            })
        }
    }

    //Сравнение названия со списка стоп-брендов с названием бренда в товаре
    function NameComparison (stopBrendsCounter, nameVendorCounter){
        let stopBrends = stopBrendsNames[stopBrendsCounter]; //.replace(/\s*/g,''); - Без учета пробелов
        let nameVendor = nameVendorSelector[nameVendorCounter].innerText; //.innerText.replace(/\s*/g,''); - Без учета пробелов

        if(nameVendor.toUpperCase() == stopBrends.toUpperCase()){
            return true;
        }
    }

    //Проверка состояния товара
    function StateProductValidation(nameCounterSelector){
        if(!((nameItemsSelector[nameCounterSelector].innerText.search(stateProductUsed) != -1) || (nameItemsSelector[nameCounterSelector].innerText.search(stateProductRefurbished) != -1))){
            return true;
        }
    }

    //Исключение категорий для проверки
    function CategoryExclusion(nameCategoriesCounter){
        let nameCategor = nameCategoriesSelector[nameCategoriesCounter].innerText;

        if(nameCategories.indexOf(nameCategor) != -1){
            count++;
        }else if(count == 0){
            return true;
        }
        count = 0;
    }

    //Валидация стоп-брендов
    function StopBrandValidation (){
        for(let j = 0, NamesVendor; NamesVendor = nameVendorSelector[j]; j++){
            for(let i = 0, stopBrends; stopBrends = stopBrendsNames[i]; i++){

                if(NameComparison(i, j)
                   && CategoryExclusion(j)
                   && StateProductValidation(j)){

                    checkBoxBtnSelector[j].click();
                    bkColorSelectedGoodsSelector[j].style.backgroundColor = "#66CDAA";
                    counter++;

                    break;
                }
            }
            MessageDialog(counter)
        }
    }

    

}());
