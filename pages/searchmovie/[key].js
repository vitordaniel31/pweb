import useSWR from 'swr'
import { useRouter } from 'next/router'

import { Table } from 'antd';
import 'antd/dist/antd.css'; 
import { GoBack } from '..';
    
export default function Movie(){
    const router = useRouter();
    const { key } = router.query;

    const {data, error} = useSWR("https://www.omdbapi.com/?apikey=9b30f837&s=" + key, fetcher);    

    return (
        <div>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} }/>
        </div>
    )
}

export function TheMovies({data}){
    const router = useRouter();

    if (data.Error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    if (data.Search === '' ) return (<div>carregando...</div>);
    
    let dados = Array.isArray(data.Search) ? data.Search.map( (m) => {
            return { 
                ...m,
                key: m.imdbID
            };
        }) : () => {
            data.Title = <a href={"onemovie/" + m.imdbID}>{m.Title}</a>; 
            return {
                ...data,
                key: data.imdbID
            }     
        }

    return (
        <>
            <GoBack/>
            <Table dataSource={dados} columns={columns} />
        </>
    )
}

const columns = [
    {
        title: 'Título',
        dataIndex: 'Title',
        render: (_, movie) => <a href={"../onemovie/" + movie.imdbID}>{movie.Title}</a>,
    },
    {
        title: 'Ano',
        dataIndex: 'Year',
    },
];


async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}