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
            case '7-8':
                add_p = "7-8";
                break;
            case '9-10':
                add_p = "9-10";
                break;
            case '11-12':
                add_p = "11-12";
                break;
            case '13-14':
                add_p = "13-14";
                break;
            case '15-16':
                add_p = "15-16";
                break;
            case '17-18':
                add_p = "17-18";
                break;
            case '19-20':
                add_p = "19-20";
                break;
            case '21-22':
                add_p = "21-22";
                break;
            case '23-24':
                add_p = "23-24";
                break;
            case '25-26':
                add_p = "25-26";
                break;
            case '27-28':
                add_p = "27-28";
                break;
            case '29-30':
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

/*
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
*/

//Gestore ABBR/EXPAN
function gestoreAbbr() {
    try {
        nodoTastoAbbr = document.getElementById("icona_abbr_expan");
        nodiAbbreviazioni = document.getElementsByTagName("abbr");
        nodiEspansioni = document.getElementsByClassName("expan");
        nodoValoreValue = nodoTastoAbbr.getAttribute("value");
        //Scorro sia le espansioni che le abbreviazioni con un unico ciclo perché sono a coppie (a nodiEspansioni[3] corrisponde un nodiAbbreviazioni[3])
        for (let i = 0; i < nodiEspansioni.length; i++) {
            //Se i nodiEspansioni hanno l'attributo "style = 'display:none;'" allora lo elimino per renderli visibili (sciogliere le abbreviazioni) 
            //A questo punto, nascondo le abbreviazioni contratte settando l'attributo "style = 'display:none;'"
            if (nodiEspansioni[i].hasAttribute("style")) {
                nodiEspansioni[i].removeAttribute("style");
                nodiAbbreviazioni[i].setAttribute("style", "display:none;")
            }         
            //Se i nodiEspansioni non hanno l'attributo "style = 'display:none;'" allora lo metto per nascondere gli scioglimenti delle abbreviazioni
            //A questo punto, mostro le abbreviazioni contratte eliminando il loro attributo "style = 'display:none;'"            
            else {
                nodiEspansioni[i].setAttribute("style", "display:none;");
                nodiAbbreviazioni[i].removeAttribute("style");
            }
        }
        if (nodoValoreValue == "Contrai le abbreviazioni") {
            nodoTastoAbbr.setAttribute("value", "Sciogli le abbreviazioni");
        }
        else if (nodoValoreValue == "Sciogli le abbreviazioni") {
            nodoTastoAbbr.setAttribute("value", "Contrai le abbreviazioni");
        }
    } catch (e) {
        alert("gestoreAbbr"+e);
    }
}

//Gestori mostra GAP e DEL
function gestoreMostraGap() {
    try {
        nodoTastoGap = document.getElementById("icona_gap");
        nodiGap = document.getElementsByClassName("gap");      
        nodoValoreValue = nodoTastoGap.getAttribute("value");

        for (let i = 0; i < nodiGap.length; i++) {
            //Se i nodi hanno l'attributo "style = 'display:none;'" allora lo elimino
            if (nodiGap[i].hasAttribute("style")) {
                nodiGap[i].removeAttribute("style");
            }         
            //Se i nodi non hanno l'attributo "style = 'display:none;'" allora lo metto
            else {
                nodiGap[i].setAttribute("style", "display:none;");      
            }
        }
        if (nodoValoreValue == "Mostra gap"){
            nodoTastoGap.setAttribute("value", "Nascondi gap");
        }
        else if (nodoValoreValue == "Nascondi gap"){
            nodoTastoGap.setAttribute("value", "Mostra gap");
        }
    } catch (e) {
        alert("gestoreAbbreviazioni"+e);
    }
}
function gestoreMostraDel() {
    try {
        nodoTastoDel = document.getElementById("icona_del");
        nodiDel = document.getElementsByTagName("del");      
        nodoValoreValue = nodoTastoDel.getAttribute("value");

        for (let i = 0; i < nodiDel.length; i++) {
            //Se i nodi hanno l'attributo "style = 'display:none;'" allora lo elimino
            if (nodiDel[i].hasAttribute("style")) {
                nodiDel[i].removeAttribute("style");
            }         
            //Se i nodi non hanno l'attributo "style = 'display:none;'" allora lo metto
            else {
                nodiDel[i].setAttribute("style", "display:none;");      
            }
        }
        if (nodoValoreValue == "Mostra del"){
            nodoTastoDel.setAttribute("value", "Nascondi del");
        }
        else if (nodoValoreValue == "Nascondi del"){
            nodoTastoDel.setAttribute("value", "Mostra del");
        }
    } catch (e) {
        alert("gestoreAbbreviazioni"+e);
    }
}

//Gestori traduzioni FR - IT - EN
function gestoreMostraTrascrizioneFR() {
    try {
        nodoTastoFR = document.getElementById("icona_testo_francese");
        nodoTastoIT = document.getElementById("icona_testo_italiano");
        nodoTastoEN = document.getElementById("icona_testo_inglese");
            
        nodoTraduzioneFR = document.getElementById("box_testo_fr");        
        nodoTraduzioneIT = document.getElementById("box_testo_it");    
        nodoTraduzioneEN = document.getElementById("box_testo_en");        

        //Rimuovo lo "style" dal box_testo_fr e e lo metto nel box_testo_it e nel box_testo_en
        nodoTraduzioneFR.removeAttribute("style");
        nodoTraduzioneIT.setAttribute("style", "display:none;");
        nodoTraduzioneEN.setAttribute("style", "display:none;");

        nodoTastoFR.setAttribute("class", "clicked"); // Per creare ombra del pulsante premuto
        nodoTastoIT.removeAttribute("class");
        nodoTastoEN.removeAttribute("class");
    
    } catch (e) {
        alert("gestoreAbbreviazioni"+e);
    }
}
function gestoreMostraTraduzioneIT() {
    try {
        nodoTastoFR = document.getElementById("icona_testo_francese");
        nodoTastoIT = document.getElementById("icona_testo_italiano");
        nodoTastoEN = document.getElementById("icona_testo_inglese");
            
        nodoTraduzioneFR = document.getElementById("box_testo_fr");        
        nodoTraduzioneIT = document.getElementById("box_testo_it");    
        nodoTraduzioneEN = document.getElementById("box_testo_en");        

        //Rimuovo lo "style" dal box_testo_it e e lo metto nel box_testo_fr e nel box_testo_en
        nodoTraduzioneIT.removeAttribute("style");
        nodoTraduzioneFR.setAttribute("style", "display:none;");
        nodoTraduzioneEN.setAttribute("style", "display:none;");

        nodoTastoIT.setAttribute("class", "clicked"); // Per creare ombra del pulsante premuto
        nodoTastoFR.removeAttribute("class");
        nodoTastoEN.removeAttribute("class");
        
    } catch (e) {
        alert("gestoreAbbreviazioni"+e);
    }
}
function gestoreMostraTraduzioneEN() {
    try {
        nodoTastoFR = document.getElementById("icona_testo_francese");
        nodoTastoIT = document.getElementById("icona_testo_italiano");
        nodoTastoEN = document.getElementById("icona_testo_inglese");
            
        nodoTraduzioneFR = document.getElementById("box_testo_fr");        
        nodoTraduzioneIT = document.getElementById("box_testo_it");    
        nodoTraduzioneEN = document.getElementById("box_testo_en");        

        //Rimuovo lo "style" dal box_testo_en e e lo metto nel box_testo_fr e nel box_testo_it
        nodoTraduzioneEN.removeAttribute("style");
        nodoTraduzioneFR.setAttribute("style", "display:none;");
        nodoTraduzioneIT.setAttribute("style", "display:none;");

        nodoTastoEN.setAttribute("class", "clicked"); // Per creare ombra del pulsante premuto
        nodoTastoIT.removeAttribute("class");
        nodoTastoFR.removeAttribute("class");        
    
    } catch (e) {
        alert("gestoreAbbreviazioni"+e);
    }
}

//Evidenizia zona testo corrispondente al facs
function gestoreEvidenzia(name){  
    //ricevo l'ID della zona cliccata come parametro
    try {
        /* RIGHE NORMALI */
        if (name.substring(0, 20) == "facs_HandPageNumber-") {
            console.log(name.substring(5));
            HandPage_evidenziato = document.getElementById(name.substring(4, 20));
            HandPage_evidenziato.setAttribute("class", "dot_HandPageNumber");
        }/*
        //Se non c'è nessun numero già evidenziato...
        if (document.getElementsByClassName("dot").length == 0) {
             //Evidenzio il numero di riga corrispondente alla <lb> selezionata
            last_number = name.substring(name.indexOf('_lb')+3);
            page = name.substring(6,7);
            lineNumberID = ("line".concat(last_number, "_p", page));
            lineNumber = document.getElementById(lineNumberID);
            lineNumber.setAttribute("class", "dot");
        }
        //Se è stato già evidenziato un numero...
        else {
            document.getElementsByClassName("dot")[0].setAttribute("class", "lineNumber");
            //Evidenzio il numero di riga corrispondente alla <lb> selezionata
            last_number = name.substring(name.indexOf('_lb')+3);
            page = name.substring(6,7);
            lineNumberID = ("line".concat(last_number, "_p", page));
            lineNumber = document.getElementById(lineNumberID);
            lineNumber.setAttribute("class", "dot");
        }*/

        //Adesso devi fare i casi in cui non sia una <lb> quella selezionata ma qualcos'altro
        

    }catch(e) {
        alert("gestoreEvidenzia()"+e);   
    }                                     
}