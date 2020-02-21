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
        time: "3:08"

    },

    {
        name: "My Truck",
        src: "my_truck",
        artist: "Breland",
        time: "2:43"
    },

    {
        name: "Rednecker",
        src: "rednecker",
        artist: "Hardy",
        time: "3:22"

    }
]


export default getMusic;
