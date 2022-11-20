import useSWR from 'swr'

import { useRouter } from 'next/router'
import { GoBack } from '..';
import { Typography } from 'antd';
import Paragraph from 'antd/lib/skeleton/Paragraph';

export default function Movies(){
    const router = useRouter();
    const { imdbID } = router.query;

    const {data, error} = useSWR("http://www.omdbapi.com/?apikey=9b30f837&i=" + imdbID, fetcher);    

    if (error) return <div>falha na requisição...</div>;

    if (!data) return <div>carregando...</div>;

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

