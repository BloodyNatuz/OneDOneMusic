// Sélection du body
let body = document.querySelector("body");

export default function pageContent(){
    // Création et importation du main
    let main = document.createElement("main");
    body.appendChild(main);

    // Création et importation de la card
    let card = document.createElement("div");
        // Fetch API
        for (let numb = 1; numb < 11; numb++) {

            async function getArtist(){
            let url = '/api/artist/' + numb;

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
                let artistName = data.name;
                let artistId = data.id;
                let artistNbAlbum = data.nb_album;
                let trackUrl = '/api/artist/' + artistId + "/top?limit=10"
                
                // Fetch the tracklist
                async function getTracks(){
                    try {
                        let res = await fetch(trackUrl);
                        if (!res.ok) {
                            console.error("Error code : " + res.status);
                        }
                        return await res.json();
                    } catch (error) {
                        console.error(error);
                    }
                }

                getTracks().then((data) =>{
                    let theDatas = data.data;
                    theDatas.forEach(theData => {
                        let trackTitle = theData.title;
                        let trackId = theData.id;
                        let trackDuration = theData.duration;

                        var textForTracks = document.createElement("p");
                        textForTracks.innerText = `
                        --------"tracks": [
                        ----------------{
                        --------------------"id": "${trackId}",
                        --------------------"titre": "${trackTitle}",
                        --------------------"duree": "${trackDuration}"
                        ----------------}
                        --------],
                        `
                        main.appendChild(textForTracks);
                    });
                })

                
                let textData = document.createElement("p");
                let dataDebutStructure = `
                ----{
                --------"name": "${artistName}",
                --------"id": "${artistId}",
                --------"nb_album": "${artistNbAlbum}",
                `;
                let dataFinStructure = `
                ----},
                `


                let truc = dataDebutStructure + dataFinStructure
                textData.innerText = truc;

                main.appendChild(textData);

            });

            console.log(numb);
        }
}