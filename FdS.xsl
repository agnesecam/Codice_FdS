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
                    <h1>
                        <xsl:value-of select="//tei:titleStmt/tei:title[@type='main']" />
                    </h1>
                </div>
                <h2>
                    <xsl:value-of select="//tei:titleStmt/tei:author" />
                </h2>
                <!--SELECT che permette di scegliere la pagina del manoscritto da visualizzare-->
                <div id="div_select_pages">
                    <xsl:copy-of select="//tei:msIdentifier/tei:idno"/>
                    <br/>
                    <xsl:variable name="default" select="6"/>
                    <xsl:variable name="N" select="30"/>
                    <xsl:variable name="pages" select="1 to $N"/>
                    <select id="select_pages" onchange="select_pages()">
                        <option value="">Page to show:</option>
                        <xsl:for-each select="$pages">
                            <option value="{.}">
                                <xsl:sequence select="."/>
                            </option>
                        </xsl:for-each>
                    </select>
                </div>
            </header>

            <footer>
                <div id="footer_respStmt">
                    <p>
                        <b>
                            <xsl:copy-of select="//tei:editionStmt/tei:respStmt[1]/tei:resp"/>:
                        </b>
                        <xsl:for-each select="//tei:editionStmt/tei:respStmt[1]/tei:name">
                            <xsl:choose>
                                <xsl:when test="position() = last()">
                                    <xsl:copy-of select="."/>
                                    <xsl:text>. </xsl:text>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:copy-of select="."/>
                                    <xsl:text>, </xsl:text>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:for-each>
                    </p>
                    <p>
                        <b>
                            <xsl:copy-of select="//tei:editionStmt/tei:respStmt[2]/tei:resp"/>:
                        </b>
                        <xsl:for-each select="//tei:editionStmt/tei:respStmt[2]/tei:name">
                            <xsl:choose>
                                <xsl:when test="position() = last()">
                                    <xsl:copy-of select="."/>
                                    <xsl:text>. </xsl:text>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:copy-of select="."/>
                                    <xsl:text>, </xsl:text>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:for-each>
                    </p>
                </div>
            </footer>
        </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>