import useSWR from 'swr'

import Router, { useRouter } from 'next/router'
import { Error, GoBack } from '..';
import { Spin, Typography } from 'antd';

export default function Movies({data}){
    const router = useRouter();

    if (router.isFallback) {
        return <Spin/>
    }

    if (!data.imdbID) {
        return (
            <>
                <Error error={"Movie not found!"}/>
                <GoBack/>
            </>
        )
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

export async function getStaticPaths(){
    return {
        paths: [
            {params: {imdbID: "tt0095801"}},
            {params: {imdbID: "tt0033152"}},
            {params: {imdbID: "tt0015400"}},
            {params: {imdbID: "tt0041149"}},
            {params: {imdbID: "tt0044388"}},
            {params: {imdbID: "tt0098746"}},
            {params: {imdbID: "tt0046322"}},
            {params: {imdbID: "tt0046497"}},
            {params: {imdbID: "tt0044389"}}
        ],
        fallback: true 
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=9b30f837&i=${params.imdbID}`);

    const data = await res.json();

    return {
      props: {
        data
      }
    };
}

