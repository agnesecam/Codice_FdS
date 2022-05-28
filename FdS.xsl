<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:ixsl="http://saxonica.com/ns/interactiveXSLT"
    xmlns:h="http://www.w3.org/1999/xhtml"
    xmlns:js="http://saxonica.com/ns/globalJS"
    xmlns:saxon="http://saxon.sf.net/"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.w3.org/1999/xhtml" exclude-result-prefixes="h ixsl js saxon xs" version="3.0">

    <xsl:output method="html" html-version="5" encoding="utf-8" indent="no"/>

    <!--INITIAL TEMPLATE-->
    <xsl:template name="xsl:initial-template">
        <xsl:call-template name="main"/>
    </xsl:template>

    <!--MAIN TEMPLATE-->
    <xsl:template name="main" match="/">
        <xsl:result-document href="#body" method="ixsl:replace-content">
                <header>
                    <div>
                        <h1 class="fr">
                            <xsl:value-of select="//tei:titleStmt/tei:title[@type='main']" />
                        </h1>
                    </div>
                    <h2>
                        <xsl:value-of select="//tei:titleStmt/tei:author" />
                    </h2>
                    <h2>
                    <!--Select per selezionare quale documento mostrare-->
                        <!--Soluzione1:
                            gli idno sono in una tabella o in una lista, collegati al proprio file in qualche modo
                            selezionando un certo idno dalla select carico il file XML relativo
                        -->
                    <select name="select_idno" id="select_idno" class="select_idno">
                        <option value="$IDNO[$i]">$IDNO[i]</option>
                        <option value="$IDNO[$i]">$IDNO[i]</option>
                        <option value="$IDNO[$i]">$IDNO[i]</option>
                        <option value="$IDNO[$i]">$IDNO[i]</option>                    
                    </select>
                    
                    </h2>
                </header>
        </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>