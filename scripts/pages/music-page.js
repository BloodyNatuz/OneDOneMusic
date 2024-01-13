// Sélection du body
let body = document.querySelector("body");

export default function pageContent(){
    // Création et importation du main
    let main = document.createElement("main");
    body.appendChild(main);

    // Création et importation de la card
    let card = document.createElement("div");

    // Fetch API
    async function getArtist(){
        function numbAleat(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let url = '/api/artist/' + numbAleat(1, 10000);

        try {
            let res = await fetch(url);
            if (!res.ok) {
                console.error("Error code : " + res.status);
            }
            return await res.json();
        } catch (error) {
            console.error(error);
        }


    }
    
    getArtist().then((data) => {
        console.log(data);
        let artistName = data.name;
        let artistId = data.id;

        let text = artistName + " a l'id " + artistId + '.';
        let p = document.createElement("p");
        p.textContent = text;
        main.appendChild(p);
    });

    async function renderArtist(){
        

        // let artistName = `${artiste.name}`
        // console.log(artistName);
        // let artistId = `${artiste.id}`
        
        // let text = artistName + " a l'id " + artistId + '.';
        // let p = document.createElement("p");
        // p.textContent = text;
        // main.appendChild(p);

    }
    renderArtist();
}