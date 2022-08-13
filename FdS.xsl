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
                    <xsl:variable name="pages" select="'1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14', '15-16', '17-18', '19-20', '21-22', '23-24', '25-26', '27-28', '29-30'"/>
                    <select id="select_pages" onchange="select_pages()">
                        <option value="">Pagine da visualizzare:</option>
                        <xsl:for-each select="$pages">
                            <option value="{.}">
                                <xsl:sequence select="."/>
                            </option>
                        </xsl:for-each>
                    </select>
                </div>
            </header>

            <div id="corpo">
                <div id="div_immagine_testo">
                    <h2 id="titolo_div_immagine">
                        <!--OUTPUT: "Pagine 1-2" "Pagine 20-21" "Pagine 3-4" ovvero pagine codificate nel file contenente la pagina selezionata-->
                        <xsl:value-of select="concat('Pagine ', substring-before(substring-after(document-uri(),'1_'), '.xml'))"/>
                    </h2>
                    <div id="box_icone_formattazione">
                        <input id="icona_abbreviazioni" type="button" class="clicked" alt="Clicca per visualizzare le abbreviazioni fedelmente" src="immagini/iconaAbbreviazioni.png" onclick="gestoreMostraAbbreviazioni()" value="Mostra parole abbreviate"/>
                        <input id="icona_expan" type="button" class="" alt="Clicca per sciogliere le abbreviazioni" src="immagini/iconaExpan.png" onclick="gestoreMostraExpan()" value="Sciogli le abbreviazioni"/>          
                    </div>
                    <!-- SCAN -->
                    <!--Elimino la possibilità di visualizzare soltanto il fronte o soltanto il retro-->      
                    <!--<div id="pulsanti_immagini_lettera" >                       
                        <input id="icona_1" type="button" class="icone_FR" alt="Clicca per visualizzare la prima facciata del manoscritto" src="immagini/icona1.png" onclick="gestoreSelezionaScan1()" value="Fronte"/>
                        <input id="icona_2" type="button" class="icone_FR" alt="Clicca per visualizzare la seconda facciata del manoscritto" src="immagini/icona2.png" onclick="gestoreSelezionaScan2()" value="Retro"/>          
                    </div>-->
                    <div id="box_img">
                        <h3>Manoscritto</h3>
                        <xsl:apply-templates select="//tei:facsimile"/>
                    </div>
                    <div id="box_testo_fr">
                        <h3>Trascrizione</h3>
                        <div id="box_testo_fronte">
                            <xsl:apply-templates select="//tei:group[@xml:id='fr_Prolusioni']/tei:text[1]/tei:body/tei:ab[1]"/>
                            <xsl:apply-templates select="//tei:body/tei:div[1]"/>
                        </div>
                        <br/>
                        <div id="box_testo_retro">
                            <xsl:apply-templates select="//tei:body/tei:div[2]"/>
                        </div>
                    </div>                    
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

            <xsl:element name="img">    <!-- Voglio ottenere: <img usemap="#map1" id="img-scan1" src="immagini/ms_fr_03951_01_1_p001.jpg" class="immagini_scan"> -->
                <xsl:attribute name="usemap">
                    <xsl:value-of select="concat('#map',$position)"/>   <!-- usemap="#map1" -->
                </xsl:attribute>
                <xsl:attribute name="id">
                    <xsl:value-of select="concat('img-scan' , $position)"/>  <!-- id="img-scan1" -->
                </xsl:attribute> 
                <xsl:attribute name="src">
                    <xsl:value-of select="concat('immagini/', current()/@url)"/>     <!-- src="immagini/ms_fr_03951_01_1_p001.jpg-->
                </xsl:attribute>
                <xsl:attribute name="class">
                    <xsl:text>immagini_scan</xsl:text>
                </xsl:attribute>
    
                <xsl:element name="map">    <!-- <map name="map1"> <area class="scan_p1_class" id="facs_Pericope1" shape="rect" coords=".." href="#ID#facs_Pericope1" onclick="gestoreEvidenzia("ID#facs_Pericope1") ... aree ... -->
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

    <xsl:template match="//tei:lb">
        <br/>
        <xsl:element name="span">
            <xsl:attribute name="class">lineNumber</xsl:attribute>
            <xsl:attribute name="id">
            <xsl:value-of select="concat('line', substring(@xml:id, 6, 1), '_', @n)" />
            </xsl:attribute>
            <xsl:value-of select="@n" />
        </xsl:element>
    </xsl:template>

    <!--GAP ?-->
    <xsl:template match="//tei:gap">
        <span class="gap">?</span>
    </xsl:template>

    <!--DEL-->
    <xsl:template match="tei:del">
        <del><xsl:apply-templates /></del>
    </xsl:template>

    <!--ABBR-->
    <xsl:template match="//tei:abbr">
        <xsl:element name="abbr">
            <xsl:value-of select="current()" />
        </xsl:element>
    </xsl:template>

    <!--EXPAN-->
    <xsl:template match="//tei:expan">
        <xsl:element name="span">            
            <xsl:attribute name="class">expan</xsl:attribute>
            <xsl:attribute name="style">display:none;</xsl:attribute>
            <xsl:value-of select="current()" />
        </xsl:element>
    </xsl:template>

    <!--ADD place=above-->
    <xsl:template match="//tei:add[@place='above']">
        <sup><xsl:apply-templates /></sup>
    </xsl:template>

    <!--ADD place=below-->
    <xsl:template match="//tei:add[@place='above']">
        <sub><xsl:apply-templates /></sub>
    </xsl:template>

    <xsl:template match="//tei:add">
        <ins><xsl:apply-templates/></ins>
    </xsl:template>

    <!--FOREIGN-->
    <xsl:template match="//tei:foreign | tei:hi[@rend='italic']">
        <i><xsl:apply-templates /></i>
    </xsl:template>

    <!--HI-->
    <xsl:template match="//tei:hi[@rend = 'bold']">
        <strong><xsl:apply-templates /></strong>
    </xsl:template>

    <!--UNDERLINE-->
    <xsl:template match="//tei:hi[@rend = 'underline']">
        <u><xsl:apply-templates /></u>
    </xsl:template>

</xsl:stylesheet>