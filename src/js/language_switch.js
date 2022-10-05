function loadText(){

    lang = window.location.hash == "#eng" ? "ang" : "fr";
    switch(document.title){
        case "description":
            document.getElementById("description").innerHTML = text.description[lang];
            break;
    }
}

function switchLanguage(){
    if (window.location.hash != "#eng") window.location.hash = "#eng";
    else window.location.hash = "";

    nav_bar = document.getElementById("nav_bar");
    items = nav_bar.getElementsByTagName("li");
    items.pop();

    items.forEach(item => {
        anchor = item.getElementsByTagName("a")[0];
    });
    
    loadText();
}

const text = {
    description: {
        fr:
        `<b>Description:</b><br>
        Dungeon game est un jeux 2D en vue de haut que je commencé pour le
        plaisir et qui est devenue mon projet final pour mon cours de proggramation. <br> <br>
        <b>Plateforme:</b><br>
        Linux et Windows<br> <br>
        <b>Input:</b><br>
        Clavier et souris<br><br>
        <b>Temps de jeux:</b><br>
        15 minutes<br><br>
        <b>Espace requis:</b><br>
        5 Mb<br><br>
        <b>Prix:</b><br>
        Gratuit<br><br>
        <b>Langue:</b><br>
        Anglais<br><br> `,
        ang:
        `<b>Description:</b><br>
        Dungeon game is a game 2D en vue de haut que je commencé pour le
        plaisir et qui est devenue mon projet final pour mon cours de proggramation. <br> <br>
        <b>Plateforme:</b><br>
        Linux et Windows<br> <br>
        <b>Input:</b><br>
        Clavier et souris<br><br>
        <b>Temps de jeux:</b><br>
        15 minutes<br><br>
        <b>Espace requis:</b><br>
        5 Mb<br><br>
        <b>Prix:</b><br>
        Gratuit<br><br>
        <b>Langue:</b><br>
        Anglais<br><br> `
    }

}