window.onload = function testOne(){
    SaxonJS.transform({
        stylesheetLocation: "../FdS.sef.json",
        //sourceLocation: "../XML/MP1.xml"
        sourceLocation: "../MP.xml"
    }, "async")}
