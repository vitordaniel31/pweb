import useSWR from 'swr'

import { useRouter } from 'next/router'

export default function Location(){
    const router = useRouter();
    const { imdbID } = router.query;

    const {data, error} = useSWR("https://extreme-ip-lookup.com/json/?key=bUGSZs7LZXoyY5hTMie7", fetcher);   
    
    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
            {Object.keys(data).map(v => (
                <div>
                    <p><b>{v}: </b>{data[v]}</p>
                </div>    
            ))}
            <a href='/'>Home</a>
        </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

