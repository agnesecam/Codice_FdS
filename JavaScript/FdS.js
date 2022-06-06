window.onload = function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        //sourceLocation: "../XML/MP1.xml"
        sourceLocation: "../MP.xml"
    }, "async")}

function select_pages(){
    var p_selezionata = document.getElementById("select_pages").value;
    var add_p;
    switch (p_selezionata) {
        case '1':
        case '2':
            add_p = "1-2";
            break;
        case '3':
        case '4':
            add_p = "3-4";
            break;
        case '5':
        case '6':
            add_p = "5-6";
            break;
        case '7':
        case '8':
            add_p = "7-8";
            break;
        case '9':
        case '10':
            add_p = "9-10";
            break;
        case '11':
        case '12':
            add_p = "11-12";
            break;
        case '13':
        case '14':
            add_p = "13-14";
            break;
        case '15':
        case '16':
            add_p = "15-16";
            break;
        case '17':
        case '18':
            add_p = "17-18";
            break;
        case '19':
        case '20':
            add_p = "19-20";
            break;
        case '21':
        case '22':
            add_p = "21-22";
            break;
        case '23':
        case '24':
            add_p = "23-24";
            break;
        case '25':
        case '26':
            add_p = "25-26";
            break;
        case '27':
        case '28':
            add_p = "27-28";
            break;
        case '29':
        case '30':
            add_p = '29-30';
            break;   
        default:
            add_p = "1-2";
    }
    console.log("Hai selezionato la pagina " + p_selezionata + ". Il file corrispondente è MP" + add_p + ".xml");
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        sourceLocation: "../XML/MP1.xml"
    }, "async")}