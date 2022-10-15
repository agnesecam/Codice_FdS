/*ONLOAD*/
window.onload = function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        sourceLocation: "XML/Prolusioni1_27_included.xml"
    }, "async")
}

/*SELECT PAGE*/
function select_pages(){
    try {
        var p_selezionata = document.getElementById("select_pages").value;
        var add_p;
        switch (p_selezionata) {
            case '1':
                add_p = "1";
                break;
            case '2':
                    add_p = "2";
                    break;
            case '3':
                add_p = "3";
                break;
            case '4':
                add_p = "4";
                break;
            case '5':
                add_p = "5";
                break;
            case '6':
                add_p = "6";
                break;
            case '7':
                add_p = "7";
                break;
            case '8':
                add_p = "8";
                break;            
            case '9':
                add_p = "9";
                break;
            case '10':
                add_p = "10";
                break;
            case '11':
                add_p = "11";
                break;
            case '12':
                add_p = "12";
                break;
            case '13':
                add_p = "13";
                break;
            case '14':
                add_p = "14";
                break;
            case '15':
                add_p = "15";
                break;
            case '16':
                add_p = "16";
                break;
            case '17':
                add_p = '17';
                break;   
            case '18':
                add_p = "18";
                break;
            case '19':
                add_p = "19";
                break;
            case '20':
                add_p = "20";
                break;
            case '21':
                add_p = "21";
                break;
            case '22':
                add_p = "22";
                break;
            case '23':
                add_p = "23";
                break;
            case '24':
                add_p = "24";
                break;
            case '25':
                add_p = "25";            
            case '26':
                add_p = "26";
                break;
            case '27':
                add_p = "27";
                break;
            case '28':
                add_p = "28";            
            case '29':
                add_p = "29";
                break;
            case '30':
                add_p = "30";
            default:
                add_p = "1";
        }

        file_input_XML = "Prolusioni1_" + add_p + "_included.xml";
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
        nodiHovertext = document.getElementsByClassName("hovertext");
        nodoValoreValue = nodoTastoAbbr.getAttribute("value");

        //Scorro sia le espansioni che le abbreviazioni con un unico ciclo perché sono a coppie (a nodiEspansioni[3] corrisponde un nodiAbbreviazioni[3])
        for (let i = 0; i < nodiEspansioni.length; i++) {
            //Se i nodiEspansioni hanno l'attributo "style = 'display:none;'" allora lo elimino per renderli visibili (sciogliere le abbreviazioni) 
            //A questo punto, nascondo le abbreviazioni contratte settando l'attributo "style = 'display:none;'"
            if (nodiEspansioni[i].hasAttribute("style")) {
                nodiEspansioni[i].removeAttribute("style");
                nodiAbbreviazioni[i].setAttribute("style", "display:none;");
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
        alert("gestoreMostraGap"+e);
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
        alert("gestoreMostraDel"+e);
    }
}

//Gestore SIC/CORR
function gestoreSicCorr() {
    try {        
        nodoTastoSic = document.getElementById("icona_sic_corr");
        nodiSic = document.getElementsByTagName("sic");
        nodiCorr = document.getElementsByTagName("corr");
        nodiHovertext = document.getElementsByClassName("hovertext");
        nodoValoreValue = nodoTastoSic.getAttribute("value");
        //Scorro sia le correzioni che gli errori con un unico ciclo perché sono a coppie (a nodiCorr[3] corrisponde un nodiSic[3])
        for (let i = 0; i < nodiSic.length; i++) {
            //Se i nodiCorr hanno l'attributo "style = 'display:none;'" allora lo elimino per renderli visibili (sciogliere le abbreviazioni) 
            //A questo punto, nascondo le abbreviazioni contratte settando l'attributo "style = 'display:none;'"           
            if (nodiCorr[i].hasAttribute("style")) {     
                nodiCorr[i].removeAttribute("style");
                nodiSic[i].setAttribute("style", "display:none;");     
            }         
            //Se i nodiCorr non hanno l'attributo "style = 'display:none;'" allora lo metto per nascondere gli scioglimenti delle abbreviazioni
            //A questo punto, mostro le abbreviazioni contratte eliminando il loro attributo "style = 'display:none;'"            
            else {
                nodiCorr[i].setAttribute("style", "display:none;");
                nodiSic[i].removeAttribute("style");
            }
        }
        if (nodoValoreValue == "Ometti le correzioni") {
            nodoTastoSic.setAttribute("value", "Mostra le correzioni");
        }
        else if (nodoValoreValue == "Mostra le correzioni") {
            nodoTastoSic.setAttribute("value", "Ometti le correzioni");
        }
    } catch (e) {
        alert("gestoreSicCorr"+e);
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
        alert("gestoreMostraTrascrizioneFR"+e);
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
        alert("gestoreMostraTraduzioneIT"+e);
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
        alert("gestoreMostraTraduzioneEN"+e);
    }
}

//Evidenizia zona testo corrispondente al facs
function gestoreEvidenzia(name){  
    //ricevo l'ID della zona cliccata come parametro
    try {
        //Se non c'è nessun numero evidenziato, e se non c'è nemmeno nessuna riga evidenziata
        if (document.getElementsByClassName("dot").length == 0) {
            console.log(name);
            /*HandPageNumber*/
            if (name.substring(0, 20) == "facs_HandPageNumber-") {
                HandPageNumber = name.substring(5);
                element = document.getElementById(HandPageNumber);
                console.log(HandPageNumber);
                element.setAttribute("class", "dot");
            /*PrintPageNumber*/
            } else if (name.substring(0, 21) == "facs_PrintPageNumber-") {
                PrintPageNumber = name.substring(5);
                element = document.getElementById(PrintPageNumber);
                element.setAttribute("class", "dot");
            /* Righe normali */
            } else {
                //Evidenzio il numero di riga corrispondente alla <lb> selezionata
                

                last_number = name.substring(name.indexOf('_lb')+3);
                console.log(last_number);
                page = name.substring(
                    name.indexOf("p") + 1, 
                    name.lastIndexOf("_")
                );
                console.log(page);
                lineNumberID = ("line".concat(last_number, "_p", page));
                lineNumber = document.getElementById(lineNumberID);
                lineNumber.setAttribute("class", "dot");

            }
        //Se è stata già evidenziata una riga o un numero di pagina
        } else {
            elementoEvidenziato = document.getElementsByClassName("dot")[0];
            elementoEvidenziato.removeAttribute("class");
            if (elementoEvidenziato.getAttribute("type") != "pageNum") {
                //Se l'elemento evidenziato è un numero di riga e non di pagina, e quindi ha una formattazione in base alla classe
                elementoEvidenziato.setAttribute("class", "lineNumber");
            }
            /*HandPageNumber*/
            if (name.substring(0, 20) == "facs_HandPageNumber-") {
                HandPageNumber = name.substring(5);
                element = document.getElementById(HandPageNumber);
                element.setAttribute("class", "dot");
            /*PrintPageNumber*/
            } else if (name.substring(0, 21) == "facs_PrintPageNumber-") {
                PrintPageNumber = name.substring(5);
                element = document.getElementById(PrintPageNumber);
                element.setAttribute("class", "dot");
            /* Righe normali */
            } else {
                //Evidenzio il numero di riga corrispondente alla <lb> selezionata
                last_number = name.substring(name.indexOf('_lb')+3);
                page = name.substring(
                    name.indexOf("p") + 1, 
                    name.lastIndexOf("_")
                );
                lineNumberID = ("line".concat(last_number, "_p", page));
                lineNumber = document.getElementById(lineNumberID);
                lineNumber.setAttribute("class", "dot");
            }
        }       

    }catch(e) {
        alert("gestoreEvidenzia()"+e);   
    }                                     
}
