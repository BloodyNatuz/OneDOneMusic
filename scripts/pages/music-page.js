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
        function numbAleat(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let url = 'https://api.deezer.com/artist/' + numbAleat(1, 10000);
        console.log(url);

        const request = new Request(url, {
            method: "GET",
            mode: "no-cors",
        });
        console.log(request);

        let res = await fetch(request);
        return await res.json();
    
        // try {
        //     let res = await fetch(request);
        //     return await res.json();
        // } catch (error){
        //     console.log(error);
        // }
    }
    
    async function renderArtist(){
        let artist = await getArtist();

        let artistName = `${artist.name}`
        console.log(artistName);
        let artistId = `${artist.id}`
        
        let text = artistName + " a l'id " + artistId + '.';
        let p = document.createElement("p");
        p.textContent = text;
        main.appendChild(p);

    }
    
    renderArtist();
}