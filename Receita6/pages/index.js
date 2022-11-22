import useSWR from 'swr'

import {useState} from 'react'
import { Table, Input, Space, Typography, Spin  } from 'antd';
import 'antd/dist/antd.css'; 
import { useRouter } from 'next/router';

export default function Index(){
    const [state, setState] = useState({url:'', titleSearchString:''});
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString || state.url === '' || state.titleSearchString ==='') {
            return {Search:''};  
        }

        const res = await fetch(`${state.url}/?apiKey=9b30f837&&s=${state.titleSearchString}`);
        const json = await res.json();
        return json;
    })

    const onClickHandler = e => {
        e.preventDefault();
        let search = document.getElementById('titleSearchString').value;
        
        if (state.url === '') {
            setState({url: 'http://www.omdbapi.com', titleSearchString: search});
        } else {
            setState({url: '', titleSearchString: state.titleSearchString});
        }
    }

    return (
        <div>
            <TheForm/>
            <TheLink url={state.url} handler={onClickHandler}/>
            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />
        </div>
    )
}

export function TheForm(){
    return (
        <form>
            <div className="space-align-container">
                <div className="space-align-block">
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', padding: 10}}>
                        <Input
                            id='titleSearchString'
                            name='titleSearchString'
                            placeholder="Pesquise por filmes"
                            size="middle"
                        />
                    </Space>
                </div>
            </div>
        </form>
    )

}

export function TheMovies({data,show}){
    if (!show || !data) return (<div></div>);    

    if (data.Error) {
        return (
            <Error error={data.Error}/>
        )
    }

    if (data.Search === '' ) {
        return <Spin/>
    }

    let dados = data.Search.map((m) => {
        return { 
            ...m,
            key: m.imdbID
        };
    })

    return (
        <Table dataSource={dados} columns={columns} />
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
            <a style={{padding: 10}} onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    );
}

export function GoBack() {
    const router = useRouter();
    return (<a onClick={() => router.back()}>Voltar</a>);
}

export function Error({error}) {
    return (
        <Typography.Title level={1} style={{ margin: 10 }}>
            {error}
        </Typography.Title>
    )
}