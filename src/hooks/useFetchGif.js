import { useEffect, useState } from "react"
import { getFetchGifs } from "../helpers/GetFetchGifs";

//CUSTOM HOOK
export const useFetchGif = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading:true
    });

    useEffect(() => {

        getFetchGifs(category)
            .then(imgs => {

                setstate({
                    data: imgs,
                    loading:false
                });

            });

    }, [category])

    return state; //state = {data: [], loading:true}
}
