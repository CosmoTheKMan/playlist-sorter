import { buildSchema } from 'graphql'

const schema = buildSchema(`

    type Playlist {
        id: ID
        name: String
        genre: Genre
        tracks: [Track]
    }

    type Track {
        id: ID
        name: String
        artist: String
        genre: Genre
        bpm: Int
        key: Key
        format: Format
    }

    enum Key {
        Abm_1A
        B_1B
        Ebm_2A
        Gb_2B
        Bbm_3A
        Db_3B
        Fm_4A
        Ab_4B
        Cm_5A
        Eb_5B
        Gm_6A
        Bb_6B
        Dm_7A
        F_7B
        Am_8A
        C_8B
        Em_9A
        G_9B
        Bm_10A
        D_10B
        Gbm_11A
        A_11B
        Dbm_12A
        E_12B
    }

    enum Genre {
        Acid_Techno
        Hard_Techno
        Psy_Trance
        EBM
        Gothic_Rock
        Tech_House
    }

    enum Format {
        DIGITAL
        VINYL
        CD
    }

    type Query {
        getPlaylist(id: ID): Playlist
        getTrack(id: ID): Track
        getAllTracks: [Track]
        getAllPlaylists: [Playlist]

    }

    input PlaylistInput {
        id: ID!
        name: String!
        genre: Genre!
        tracks: [TrackInput]!
    }

    input TrackInput {
        id: ID!
        name: String!
        artist: String!
        genre: Genre!
        bpm: Int!
        key: Key
        format: Format!
    }

    type Mutation {
        createPlaylist(input: PlaylistInput): Playlist
        createTrack(input: TrackInput): Track
    }

`)

export default schema