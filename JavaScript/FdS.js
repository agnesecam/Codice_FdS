/*ONLOAD*/
window.onload = function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        sourceLocation: "XML/Prolusioni1_1-2.xml"
    }, "async")
}

/*SELECT PAGE*/
function select_pages(){
    try {
        var p_selezionata = document.getElementById("select_pages").value;
        var add_p;
        switch (p_selezionata) {
            case '1-2':
                add_p = "1-2";
                break;
            case '3-4':
                add_p = "3-4";
                break;
            case '5-6':
                add_p = "5-6";
                break;
            case '7':
                add_p = "7-8";
                break;
            case '9':
                add_p = "9-10";
                break;
            case '11':
                add_p = "11-12";
                break;
            case '13':
                add_p = "13-14";
                break;
            case '15':
                add_p = "15-16";
                break;
            case '17':
                add_p = "17-18";
                break;
            case '19':
                add_p = "19-20";
                break;
            case '21':
                add_p = "21-22";
                break;
            case '23':
                add_p = "23-24";
                break;
            case '25':
                add_p = "25-26";
                break;
            case '27':
                add_p = "27-28";
                break;
            case '29':
                add_p = '29-30';
                break;   
            default:
                add_p = "1-2";
        }

        file_input_XML = "Prolusioni1_" + add_p + ".xml";
        console.log("Hai selezionato la pagina " + p_selezionata + ". Il file corrispondente è " + file_input_XML);
        SaxonJS.transform({
            stylesheetLocation: "../FdS.sef.json",
            sourceLocation: "XML/" + file_input_XML
        }, "async")

    } catch(e) {
		alert("gestoreSelezionaScan1"+e);
    }
}


//Seleziona fronte
function gestoreSelezionaScan1() {
	try {
        nodoTasto1 = document.getElementById("icona_1");
        nodoTasto2 = document.getElementById("icona_2");
        nodoTasto1.onclick = gestoreSelezionaScan1;
        nodoTasto2.onclick = gestoreSelezionaScan2;
        nodoScan1 = document.getElementById("img-scan1");
        nodoScan2 = document.getElementById("img-scan2");
        nodoScan2.setAttribute("class", "nascondi");
        nodoScan1.removeAttribute("class");
        nodoScan1.setAttribute("class", "immagini_scan");
        nodoScan2.removeAttribute("class");
        nodoScan2.setAttribute("class", "nascondi");
        nodoTasto1.removeAttribute("class");
        nodoTasto1.setAttribute("class", "iconaSelezionata");
        nodoTasto2.removeAttribute("class");
        nodoTasto2.setAttribute("class", "icone_FR");
    } catch(e) {
		alert("gestoreSelezionaScan1"+e);
    }
}
//Seleziona retro
function gestoreSelezionaScan2() {
	try {
        nodoTasto1 = document.getElementById("icona_1");
        nodoTasto2 = document.getElementById("icona_2");
        nodoTasto1.onclick = gestoreSelezionaScan1;
        nodoTasto2.onclick = gestoreSelezionaScan2;
        nodoScan1 = document.getElementById("img-scan1");
        nodoScan2 = document.getElementById("img-scan2");
        nodoScan2.setAttribute("class", "nascondi");

        nodoScan2.removeAttribute("class");
        nodoScan2.setAttribute("class", "immagini_scan");
        nodoScan1.removeAttribute("class");
        nodoScan1.setAttribute("class", "nascondi");
        nodoTasto2.removeAttribute("class");
        nodoTasto2.setAttribute("class", "iconaSelezionata");
        nodoTasto1.removeAttribute("class");
        nodoTasto1.setAttribute("class", "icone_FR");
    } catch(e) {
		alert("gestoreSelezionaScan2"+e);
    }
}