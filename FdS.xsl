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
                <!--SELECT che permete di scegliere l'IDNO del manoscritto da visualizzare-->
                <xsl:variable name="default" select="6"/>
                <xsl:variable name="idnos" select="1, 2, 4, 6, 8"/>
                <select id="select_idnos">                   <!--x-base mi serve per fare le proporzioni delle nuove quantità nel template r. 49-->
                    <xsl:for-each select="$idnos">
                        <option value="{.}">
                            <xsl:if test=". = $default">
                                <xsl:attribute name="selected" select="'selected'"/>
                            </xsl:if>
                            <xsl:sequence select="."/>
                        </option>
                    </xsl:for-each>
                </select>
            </header>
        </xsl:result-document>
    </xsl:template>


    <!--Pop-up select-->
    <xsl:template match="h:select" mode="ixsl:onchange">
        <xsl:message>Arrivo fin qui!</xsl:message>
        <xsl:variable name="idno_selezionato" select="ixsl:get(ixsl:event(), 'target.value')"/>
        <xsl:sequence select="ixsl:call(ixsl:window(),
                    'alert', [concat('Visualizzazione di ', $idno_selezionato)])"/>
    </xsl:template>
</xsl:stylesheet>