window.onload = function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        sourceLocation: "../XML/MarcaturaProlusioni.xml"
    }, "async")}
