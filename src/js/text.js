const anchorText = [
    {fr: "Principal", eng: "Main"},
    {fr: "Information", eng: "Description"},
    {fr: "Tech", eng: "Tech"},
    {fr: "Editeur", eng: "Editor"},
    {fr: "Media", eng: "Media"},
    {fr: "Liens", eng: "Links"}
];

const bodyText = {

    //description.html
    description: {
        fr:
        `<b>Description:</b><br>
        Dungeon game est un jeux 2D en vue de haut que j'ai commencé pour le
        plaisir et qui est devenue mon projet final pour mon cours de proggramation. <br> <br>
        <b>Plateforme:</b><br>
        Linux et Windows<br> <br>
        <b>Périfériques:</b><br>
        Clavier et souris<br><br>
        <b>Temps de jeux:</b><br>
        15 minutes<br><br>
        <b>Espace requis:</b><br>
        5 Mb<br><br>
        <b>Prix:</b><br>
        Gratuit<br><br>
        <b>Langue:</b><br>
        Anglais<br><br> `,
        eng:
        `<b>Description:</b><br>
        Dungeon game is a 2D Dungeon crawler that I started for fun and that later 
        became my final project for my programming class. <br> <br>
        <b>Plateforme:</b><br>
        Linux and Windows<br> <br>
        <b>Inputs:</b><br>
        Mouse and Keybord<br><br>
        <b>Play time:</b><br>
        15 minutes<br><br>
        <b>Disk space required:</b><br>
        5 Mb<br><br>
        <b>Price:</b><br>
        Free<br><br>
        <b>Language:</b><br>
        English<br><br> `
    },

    //tech.html
    tech_cpp: {
        fr:
        `J'ai chosis c++ comme langauage pour mon jeux pour plusieurs raison. J'avais déjà experimanter avec du Javascript pour 
        faire des petits jeux mais pour ce projet je voulais quelque chose de puissant tout en restant orienté object.`,
        eng:
        `I chose c++ as the language for my games for several reasons. I had already experimented with JavaScript to
        make small games but for this project I wanted something powerful while remaining object-oriented.`
    },
    tech_sfml: {
        fr:
        `Pour la librairie graphique en c++, j'ai choisi sfml principalement pour la compatibilitée avec linux et windows. Aussi la documentations 
        est très biens écrit et elle inclues beaucoup de fonctionnalitée de haut niveaux comme la fontion sf::intersects qui dit si deux rectangles sont en collision.`,
        eng:
        `For the c++ graphics library, I chose sfml mainly for compatibility with linux and windows. Also the documentation
        is very well written and it includes a lot of high level functionality like the sf::intersects function which tells if two rectangles have a collision.`
    },
    tech_js: {
        fr:
        `Pour l'édteur de tuiles de niveaux présent sur ce site j'ai chosis JavaScript car la performance n'étais pas un avantage et 
        je voulais revenire a la proggramation de jeux le plus vite possible. J'ai aussi choisi JavaScript pour les froms HTML qui rendais 
        la tache de parametrer l'éditeur beaucoup plus facile et rapide à implémenter.`,
        eng:
        `For the level tile editor present on this site I chose JavaScript because the performance was not an advantage and
        I wanted to get back to programming the game as soon as possible. I also chose JavaScript for the HTML froms which rendered
        the task of parameterizing the editor much easier and quicker to implement.`
    },
    tech_p5: {
        fr:
        ``,
        eng:
        ``
    },
    tech_make: {
        fr:
        ``,
        eng:
        ``
    },

    //video.html
    media_audio: {
        fr:
        `Musique de fond:`,
        eng:
        `Background music:`
    },
    media_video: {
        fr:
        `Demo du jeux:`,
        eng:
        `Game demo:`
    },
    media_ytb: {
        fr:
        `Vidéo tutorielle pour SFML:`,
        eng:
        `Tutorial for SFML:`
    },

    //links.html
    link_personal: {
        fr:
        `Mon code:`,
        eng:
        `My code:`
    },
    link_libs: {
        fr:
        `Libraries utilisées:`,
        eng:
        `Used libraries:`
    }
};
