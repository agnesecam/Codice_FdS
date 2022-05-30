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
    <xsl:mode on-no-match="shallow-copy"/>

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
                <!--SELECT che permette di scegliere l'IDNO del manoscritto da visualizzare-->
                <div id="div_select_idnos">
                    <xsl:text>Selezionare le pagine del manoscritto Ms. fr. 3951/1 da visualizzare: </xsl:text>
                    <xsl:variable name="default" select="1"/><!--Da sostituire con IDNO dei manoscritti disponibili-->
                    <xsl:variable name="idnos" select="1 to 30"/>
                    <select id="select_idnos">
                        <xsl:for-each select="$idnos">
                            <option value="{.}">
                                <xsl:if test=". = $default">
                                    <xsl:attribute name="selected" select="'selected'"/>
                                </xsl:if>
                                <xsl:sequence select="."/>
                            </option>
                        </xsl:for-each>
                    </select>
                    <!--TENTATIVO DI UTILIZZO DI COLLECTION PER TROVARE UNA GESTIONE DEL CARICAMENTO DEI DOCUMENTI XML-->
                    <xsl:variable name="documents" select="collection('XML')"/>
                    <xsl:message>Ho passato la collection: ecco i file al suo interno.</xsl:message>
                    <xsl:message><xsl:copy-of select="$documents"/></xsl:message>
                </div>
            </header>
            </xsl:result-document>
        </xsl:template>


        <!--Pop-up select + caricamento del documento XML in questione-->
        <xsl:template match="h:select" mode="ixsl:onchange">
            <xsl:variable name="idno_selezionato" select="ixsl:get(ixsl:event(), 'target.value')"/>
            <xsl:sequence select="ixsl:call(ixsl:window(),
                    'alert', [concat('Hai scelto di visualizzare il manoscritto  ', $idno_selezionato)])"/>
        </xsl:template>
    </xsl:stylesheet>