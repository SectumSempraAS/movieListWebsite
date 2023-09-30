export interface BaseTransport<T> {
    status: number
    data: T
    meta?: {
        resource?: string
    }
}

export interface Rating {
    source: string
    value: string
}

export interface MediaTransport {
    imdbID: string
    Title: string
    Year: string
    Poster: string
    Type: string
    Rated: string
    Runtime: string
    Released: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Ratings: Rating[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: 'True' | 'False'
}

export interface MovieSearchResultTransport {
    Search: MediaTransport[]
    totalResults: number
    Response: 'True' | 'False'
    Error?: string
}