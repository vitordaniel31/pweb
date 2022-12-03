import useSWR from 'swr'

import {useState} from 'react'
import { Table, Input, Space, Typography, Spin, Button  } from 'antd';
const { Column } = Table;
import 'antd/dist/antd.css'; 
import { useRouter } from 'next/router';
import { faArrowDown19, faArrowDownAZ, faArrowUp19, faArrowUpAZ, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let onClickSort;
let order = 'ASC';

export default function Index(){
    const [state, setState] = useState({url:'', titleSearchString:'', orderBy: {index: '', order: 'ASC'}});
    const [validate, setValidate] = useState({message: ''});
    const {data, error} = useSWR(`${state.url}/?apiKey=9b30f837&&s=${state.titleSearchString}`, async (u) => {
        if (!state.url || !state.titleSearchString || state.url === '' || state.titleSearchString === '') {
            return {Search:''};  
        }

        const res = await fetch(`${state.url}/?apiKey=9b30f837&&s=${state.titleSearchString}`);
        const json = await res.json();
        return json;
    });

    if(state.orderBy && state.orderBy.index !== '') {
        if (data) {
            data.Search.sort((a, b) => {
                if (state.orderBy.order === 'ASC') {
                    return (a[state.orderBy.index] > b[state.orderBy.index]) ? 1 : -1;
                } else {
                    return (b[state.orderBy.index] > a[state.orderBy.index]) ? 1 : -1;
                }
            });
        }
    }

    onClickSort = (dataIndex) => {
        setState({
            url: 'http://www.omdbapi.com', 
            titleSearchString: state.titleSearchString, 
            orderBy: {index: dataIndex, order: state.orderBy.order === 'ASC' ? 'DESC' : 'ASC'}
        });

        order = state.orderBy.order === 'ASC' ? 'DESC' : 'ASC';
    }

    const onClickHandler = e => {
        e.preventDefault();
        let search = document.getElementById('titleSearchString').value;

        if (search === '') {
            setValidate({message: 'Preencha o campo de pesquisa'});
        } else {
            if (state.url === '') {
                setState({
                    url: 'http://www.omdbapi.com', 
                    titleSearchString: search,
                    orderBy: state.orderBy
                });
            } else {
                setState({
                    url: '', 
                    titleSearchString: state.titleSearchString,
                    orderBy: state.orderBy
                });
            }
            setValidate({message: ''});
        }
    }

    return (
        <div>
            <TheForm message={validate.message}/>
            <TheLink url={state.url} handler={onClickHandler}/>
            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''}/>
        </div>
    )
}

export function TheForm({message}){
    return (
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
                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', padding: 10}}>
                    <p style={{color: 'red'}}>{ message }</p>
                </Space>
            </div>
        </div>
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
        <Table dataSource={dados} columns={columns}/> 
    )
}

const columns = [
    {
        title: () => <>Título <SortIcon dataIndex="Title"/></>, 
        dataIndex: 'Title',
        render: (_, movie) => <a href={"onemovie/" + movie.imdbID}>{movie.Title}</a>,
    },
    {
        title: () => <>Ano <SortIcon dataIndex="Year" type="number"/></>, 
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

export function SortIcon({dataIndex, type="letter"}) {
    return (
        <Button onClick={() => onClickSort(dataIndex)} ghost="true" type="white" shape="circle" icon={<FontAwesomeIcon color='#1890ff' icon={type==='letter' ? (order === 'ASC' ? faArrowDownAZ : faArrowUpAZ) : (order === 'ASC' ? faArrowDown19 : faArrowUp19)} />}/>
    )
}
