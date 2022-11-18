import useSWR from 'swr'

import { useRouter } from 'next/router'

export default function Movies(){
    const router = useRouter();
    const { imdbID } = router.query;

    const {data, error} = useSWR("https://www.omdbapi.com/?apikey=9b30f837&i=" + imdbID, fetcher);    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
            <div>
                <img src={data.Poster}></img><br/>
                {data.Title} --- {data.Year}
            </div>
            <a href='./'>Movies</a>
        </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

