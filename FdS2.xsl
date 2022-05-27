<?xml version="1.0" encoding="utf-8"?> 

<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:ixsl="http://saxonica.com/ns/interactiveXSLT"
    xmlns:h="http://www.w3.org/1999/xhtml"
    xmlns:js="http://saxonica.com/ns/globalJS"
    xmlns:saxon="http://saxon.sf.net/"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.w3.org/1999/xhtml" 
    exclude-result-prefixes="h ixsl js saxon xs" version="3.0">

    <!--<xsl:import href="lib/utils.xsl"/>-->

    <xsl:output method="html" html-version="5" encoding="utf-8" indent="no"/>

    <!--<xsl:mode on-no-match="shallow-copy"/>-->

    <xsl:template name="xsl:initial-template">
        <xsl:call-template name="main"/>
    </xsl:template>

    <xsl:template name="main" match="/">
        <xsl:result-document href="#body" method="ixsl:replace-content">
                <p>Congratulations, your stylesheet ran!!!</p>
        </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>
