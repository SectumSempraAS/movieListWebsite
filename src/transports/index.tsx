export interface BaseTransport<T> {
    status: number
    data: T
    meta?: {
        resource?: string
    }
}

export interface MediaTransport {
    imdbID: string
    Title: string
    Year: string
    Poster: string
    Type: string
}

export interface MovieSearchResultTransport {
    Search: MediaTransport[]
    totalResults: number
    Response: 'True' | 'False'
    Error?: string
}