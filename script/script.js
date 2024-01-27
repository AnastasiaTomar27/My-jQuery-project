$(document).ready(function(){
    //Valitse kaikki p-tägit ja muuta teksti punaiseksi
    $("p").css("color", "red");
    //$("p").css({color: "red"});

    //Poista kaikki alt-attribuutit kuvilta
    //Piilota kaikki <img> elementit:
    //Muuta kuvien leveydeksi 50%
    //Lisää kaikille kuville punainen 3px dashed kehys
    $("section img").removeAttr("alt")
            //.hide()
            .width("50%")
            .css("border", "3px dashed red");

    //  Piilota header alla oleva div-elementit
    $("header div").hide("slow");

    //Lisää luokka selected kaikille listaelementeille
    $("li").addClass("selected");
    
    //Muuta banner-title -luokan teksti: "Osaamme Web-suunnittelun"
    $(".banner-title").text("Osaamme Web-suunnittelun");
    
    //Lisää contact-methods valikkoon uusi jäsen (About us)
    $("#contact-methods").append("<li>About us</>");
    var firstH3 = $("h3:first").clone();
   
    // Kopioi ensimmäinen <h3> elementti ja lisää se loppuun
    $("body").append(firstH3);

    //Muuta kaikkien <h2> elementtien tekstin värin siniseksi, kun ne ovat hiiren päällä
    $("h2").hover(function(){
        $(this).css("color", "blue");
    });

    //Aseta kaikkien linkkien target-attribuutti "_blank":ksi
    $("a").attr("target", "_blank");

    //Näytä tai piilota navi "What our clients say" -napin painalluksella
    $("section h2").click(function(){
        $(".clientsDiv").toggle();
    });

    //Lisää <span>Otsikko</span> jokaisen otsikon eteen
    $("h1, h2, h3").wrapInner("<span>Otsikko: </span>");
    
    //Muuta kaikkien linkkien fonttikokoa 2 pikseliä suuremmaksi
    $("a").css("font-size", "+=2px");

    //Näytä alert-viesti, kun Home-linkkiä painetaan
    $("header li:first").click(function(){
        alert("Home clicked!");
    });

    //Lisää luokka active headerin viimeiselle <li> elementille
    $("header li:last").addClass("active");

    //Muuta li-elementtien p-lapsielementin tekstinväriksi vihreä, kun hiiri on sen päällä
    $("li").mouseover(function() {
        $(this).children("p").css("color", "green");
    });

    // Näytä alert-ikkuna, kun dokumentti on ladannut loppuun
    alert("Document ready!");

    //Lisää animaatio <div> elementille, kun sitä osoitetaan
    $("div").hover(function() {
        $(this).animate({fontSize: "24px"}, "slow");
    });

    $("#bye  img").on("mouseenter", () => {
        $("#bye img").attr("src", "images/kuva1.jpg");
        
        }).on("mouseleave", () => {
        $("#bye  img").attr("src", "images/kuva2.png");

    });


});