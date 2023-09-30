import { useEffect, useMemo, useState } from "react"

import { BaseTransport, MediaTransport } from "../../transports";
import topMovieIdsList from "../../idList.json"
import { getMovieDetail } from "../../client";

const getPromiseArray = (topTenMoviesIdList: string[]) => {
    const promiseArray: Promise<BaseTransport<MediaTransport>>[] = [];
    topTenMoviesIdList.forEach((topMovieId) => {
        promiseArray.push(getMovieDetail(topMovieId))
    })
    return promiseArray
}

export const useGetTopMoviesList = (topTenMoviesIdList: string[]) => {
    const [result, setResult] = useState<MediaTransport[]>([]);
    const promiseArray = useMemo(() => getPromiseArray(topTenMoviesIdList), [topTenMoviesIdList])

    useEffect(() => {
        if(result.length === 0) {
            Promise.all(promiseArray)
            .then((response) => {
                response.forEach((res) => {
                    setResult(current => [...current, res.data])
                })
            })
        }
    },[promiseArray, result.length, topTenMoviesIdList])

    return {
        result
    }
}