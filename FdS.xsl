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
                        <option value="">Seleziona pagina:</option>
                        <xsl:for-each select="$pages">
                            <option value="{.}">
                                <xsl:sequence select="."/>
                            </option>
                        </xsl:for-each>
                    </select>
                </div>
            </header>

            <div id="corpo">
                <div id="div_immagine">
                    <h3>
                        <!--OUTPUT: "Pagine 1-2" "Pagine 20-21" "Pagine 3-4" ovvero pagine codificate nel file contenente la pagina selezionata-->
                        <xsl:value-of select="concat('Pagine ', substring-before(substring-after(document-uri(),'1_'), '.xml'))"/>
                    </h3>
                    <!-- SCAN -->
                    <div id="pulsanti_immagini_lettera" >
                        <input id="icona_1" type="image" class="icone_numeri" alt="Clicca per visualizzare la prima facciata del manoscritto" src="immagini/icona1.png"/>
                        <input id="icona_2" type="image" class="icone_numeri" alt="Clicca per visualizzare la seconda facciata del manoscritto" src="immagini/icona2.png"/>          
                    </div>
                    <xsl:apply-templates select="//tei:facsimile"/>
                    <br/>
                </div>
            </div>


            <footer>
                <div id="footer_respStmt">
                    <p>
                        <b>
                            <xsl:copy-of select="//tei:editionStmt/tei:respStmt[1]/tei:resp"/>:<br/>
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
                            <!--Per avere un elenco di nomi-->
                            <!--<ul>
                                <li> <xsl:copy-of select="."/></li>
                            </ul>-->
                        </xsl:for-each>
                    </p>
                    <p>
                        <b>
                            <xsl:copy-of select="//tei:editionStmt/tei:respStmt[2]/tei:resp"/>:<br/>
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





    <!-- *************************** -->


    <!-- IMMAGINI DEL MANOSCRITTO ORIGINALE DIV -->
    <!-- Immagini delle lettere scannerizzate e map html -->
    <xsl:template match="//tei:facsimile">
        <xsl:for-each select="tei:surface/tei:graphic"> 
            <xsl:variable name="position" select="position()"/>

            <xsl:element name="img">    <!-- Voglio ottenere: <img usemap="#map1" id="imglettera1" src="LL1.1_fronte_recto.jpg" class="immagini_lettera"> -->
                <xsl:attribute name="usemap">
                    <xsl:value-of select="concat('#map',$position)"/>   <!-- usemap="#map1" -->
                </xsl:attribute>
                <xsl:attribute name="id">
                    <xsl:value-of select="concat('img-scan' , $position)"/>  <!-- id="img-scan1" -->
                </xsl:attribute> 
                <xsl:attribute name="src">
                    <xsl:value-of select="concat('immagini/', current()/@url)"/>     <!-- src="p1.png -->
                </xsl:attribute>
                <xsl:attribute name="class">
                    <xsl:text>immagini_scan</xsl:text>
                </xsl:attribute>
    
                <xsl:element name="map">    <!-- <map name="map1"> <area class="LL1.1_fronte_recto_class" id="LL1.1_line_fr-01 shape="rect" coords=".." href="#ID#LL1.1_line_fr-01" onclick="gestoreEvidenzia("#ID#LL1.1_line_fr-01") ... aree ... -->
                    <xsl:attribute name="name">
                        <xsl:value-of select="concat('map',$position)"/>
                    </xsl:attribute>

                    <xsl:for-each select="parent::tei:surface/tei:zone">
                        <xsl:element name="area">   
                            <xsl:attribute name="class">
                                <xsl:value-of select="concat(parent::tei:surface/@xml:id, '_class')"/>  <!-- recupero l'ID del surface padre di zone -->     
                            </xsl:attribute>   
                            <xsl:attribute name="id">
                                <xsl:value-of select="@xml:id"/>       
                            </xsl:attribute>
                            <xsl:attribute name="shape">
                                <xsl:text>rect</xsl:text>
                            </xsl:attribute>
                            <xsl:attribute name="coords">
                                <xsl:value-of select="@ulx"/>,<xsl:value-of select="@uly"/>,<xsl:value-of select="@lrx"/>,<xsl:value-of select="@lry"/>
                            </xsl:attribute>
                            <xsl:attribute name="href"> 
                                <xsl:value-of select="concat('#ID#', @xml:id)"/>    <!-- href="#ID#LL1.1_line_fr-01" -->
                            </xsl:attribute>
                            <xsl:attribute name="onclick">
                                <xsl:value-of select="concat('gestoreEvidenzia( &quot;ID#', @xml:id, '&quot;)' )"/>     <!-- gestoreEvidenzia("#ID#LL1.1_line_fr-01") --> 
                            </xsl:attribute>
                        </xsl:element>
                    </xsl:for-each>
                </xsl:element>
            </xsl:element>
        </xsl:for-each>
    </xsl:template>


</xsl:stylesheet>