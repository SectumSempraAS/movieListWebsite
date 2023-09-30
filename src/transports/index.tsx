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
    year: string
    poster: string
    type: string
}