import useSWR from 'swr'

import {useState} from 'react'
import { Table, Input, Space  } from 'antd';
import 'antd/dist/antd.css'; 
import { useRouter } from 'next/router';

const { Search } = Input;

export default function Index(){
    const [url, setUrl] = useState('https://www.omdbapi.com/?apikey=9b30f837&s=bagdad');
    const {data, error} = useSWR(url, theFetcher);

    const onClickHandler = (e) => {
        e.preventDefault();

        if (url === '') setUrl('https://www.omdbapi.com/?apikey=9b30f837&s=bagdad');
        else setUrl('');
    }

    return (
        <div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
        </div>
    )
}

async function theFetcher(url) {
    if (url === null || url === '') return {Search:''};

    const res = await fetch(url);
    const json = await res.json();

    return json;

}

export function TheMovies({data,show}){
    if (!show) return (<div></div>);    

    if (data.error) return (<div>falha na requisição</div>);

    if (data.Search === '' ) return (<div>carregando...</div>);

    let dados = data.Search.map((m) => {
        return { 
            ...m,
            key: m.imdbID
        };
    })

    const onSearch = () => {
        document.getElementById("form-pesquisar").submit();
    }

    return (
        <div className="space-align-container">
            <div className="space-align-block">
                <Space direction="horizontal" style={{width: '100%', justifyContent: 'end'}}>
                    <form action='/searchmovie/[key]' id="form-pesquisar" style={{marginBottom: "10px"}}>
                        <Search
                            name='key'
                            placeholder="Pesquise por filmes"
                            allowClear
                            enterButton="Pesquisar"
                            onSearch={onSearch}
                            size="small"
                        />
                    </form>
                </Space>
            </div>
            <Table dataSource={dados} columns={columns} />
        </div>
    )
}

const columns = [
    {
        title: 'Título',
        dataIndex: 'Title',
        render: (_, movie) => <a href={"onemovie/" + movie.imdbID}>{movie.Title}</a>,
    },
    {
        title: 'Ano',
        dataIndex: 'Year',
    },
];

export function TheLink({url, handler}){    
    return (
        <div>
            <a href="/movies.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    );
}

export function GoBack() {
    const router = useRouter();
    return (<a onClick={() => router.back()}>Voltar</a>);
}