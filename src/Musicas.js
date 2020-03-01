const getMusic = id => {
    const music = playlist[id];

    if (music) {
        return music;
    }
    return playlist[0];
}


export const getAllMusics = () => {
    return playlist;
}



export const getPlaylistLength = () => {
    return playlist.length
};


const playlist = [
    {
        name: "Liberdade Provisória",
        src: "liberdade_provisoria",
        artist: "Henrique e Juliano",
        duration: 182
        // "03:02"

    },

    {
        name: "My Truck",
        src: "my_truck",
        artist: "Breland",
        duration: 163
        // "02:43"
    },

    {
        name: "Rednecker",
        src: "rednecker",
        artist: "Hardy",
        duration: 202
        // "03:22"


    },
    {
        name: "WUBBA LUBBA DUB DUB",
        src: "wubba_lubba_dub_dub",
        artist: "Rick",
        duration: 1
    }
]


export default getMusic;
