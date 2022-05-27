function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        sourceLocation: "../XML/MarcaturaProlusioni.xml"
    }, "async")
    /*SaxonJS.transform({
        stylesheetLocation: "FdStext.sef.json",
        sourceLocation: "MarcaturaProlusioni.xml"
    }, "async")*/
}

/*
window.onload = function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "FdS.sef.json",
        sourceLocation: "MarcaturaProlusioni.xml"
    }, "async")
    /*SaxonJS.transform({
        stylesheetLocation: "FdStext.sef.json",
        sourceLocation: "MarcaturaProlusioni.xml"
    }, "async")
}
*/