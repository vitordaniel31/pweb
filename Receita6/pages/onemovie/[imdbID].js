import useSWR from 'swr'

import { useRouter } from 'next/router'
import { Error, GoBack } from '..';
import { Spin, Typography } from 'antd';

export default function Movies(){
    const router = useRouter();
    const { imdbID } = router.query;

    const {data, error} = useSWR("https://www.omdbapi.com/?apikey=9b30f837&i=" + imdbID, fetcher);    

    if (error) {
        return (
            <>
                <Error error={error}/>
                <GoBack/>
            </>
        )
    }

    if (!data || data.Search === '') {
        return <Spin/>
    }

    return (
        <div style={{marginTop: "20px"}}>
            <center>
                <div>
                    <img src={data.Poster}></img><br/>
                    <Typography.Title level={1} style={{ margin: 10 }}>
                        {data.Title} --- {data.Year}
                    </Typography.Title>
                    <Typography.Title level={5} style={{ margin: 10 }}>
                        {data.Plot}
                    </Typography.Title>
                </div>
                <GoBack/>
            </center>
        </div>

    )    

}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

