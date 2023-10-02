import { memo } from "react"
import { ListContainer } from "./styles"
import Skeleton from "../movie-card/skeleton";

const SkeletonListContainer = () => {
    const _skeletonArray = [0,1,2,3,4,5,6,7,8,9];
    return (
        <ListContainer>
            {!!_skeletonArray && (
                _skeletonArray.map((movie, index) => {
                    return (
                        <Skeleton />
                    )
                })
            )}
        </ListContainer>
    )
}

export default memo(SkeletonListContainer)