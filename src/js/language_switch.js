function loadText(){

    lang = window.location.hash == "#eng" ? "eng" : "fr";

    switch(document.title){
        case "Description": {
            document.getElementById("description").innerHTML = bodyText.description[lang];
            break;
        }
        case  "Tech": {
            document.getElementById("tech_cpp").innerHTML = bodyText.tech_cpp[lang];
            document.getElementById("tech_sfml").innerHTML = bodyText.tech_sfml[lang];
            document.getElementById("tech_js").innerHTML = bodyText.tech_js[lang];
            document.getElementById("tech_p5").innerHTML = bodyText.tech_p5[lang];
            document.getElementById("tech_make").innerHTML = bodyText.tech_make[lang];
            break;
        }
        case "Media": {
            document.getElementById("media_audio").innerHTML = bodyText.media_audio[lang];
            document.getElementById("media_video").innerHTML = bodyText.media_video[lang];
            document.getElementById("media_ytb").innerHTML = bodyText.media_ytb[lang];
            break;
        }
        case "Links": {
            document.getElementById("link_personal").innerHTML = bodyText.link_personal[lang];
            document.getElementById("link_libs").innerHTML = bodyText.link_libs[lang];
        }
    }
}

function loadAnchor(){

    lang = window.location.hash == "#eng" ? "eng" : "fr";

    nav_bar = document.getElementById("nav_bar");
    items = nav_bar.getElementsByTagName("li");
    itemsArr = [];
    for (let i = 0; i<items.length-1; i++){
        itemsArr.push(items.item(i));
    }

    for (let i=0; i<itemsArr.length; i++){
        anchor = items[i].getElementsByTagName("a")[0]; 

        if (anchor.href.indexOf('#') != -1){
            anchor.href = anchor.href.slice(0,anchor.href.indexOf('#'))
        }
        anchor.href += document.location.hash;

        anchor.innerHTML = anchorText[i][lang];

    }
}

function switchLanguage(){
    if (window.location.hash != "#eng") window.location.hash = "#eng";
    else window.location.hash = "#fr";


    loadAnchor();
    loadText();
}
