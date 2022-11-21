class Playlist {
    constructor(id, {
        name, genre, tracks
    }){
        this.id = id
        this.name = name
        this.genre = genre
        this.tracks = tracks
    }
}

const playlistholder = {}

class Track {
    constructor(id, {
        name, artist, genre, bpm, key, format
    }){
        this.id = id
        this.name = name
        this.artist = artist
        this.genre = genre
        this.bpm = bpm
        this.key = key
        this.format = format
    }
}

const trackholder = {}

const resolver = {
    getPlaylist: ({id}) => {
        return new Playlist(id, playlistholder[id])
    },

    getTrack: ({id}) => {
        return new Track(id, trackholder[id])
    },
    getAllPlaylists: () => {
        console.log(playlistholder)
        //return playlistholder.map()
    },
    getAllTracks: () => {
        console.log(trackholder)
        //return trackholder.map()
    },
    createPlaylist: ({input}) => {
        playlistholder[input.id] = input
        return new Playlist(input.id, input)
    },
    createTrack: ({input}) => {
        trackholder[input.id] = input
        return new Track(input.id, input)
    }
}

export default resolver