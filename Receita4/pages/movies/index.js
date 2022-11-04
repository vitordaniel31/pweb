import useSWR from 'swr'

export default function Movies(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=9b30f837&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <div>

            { data.Search.map( (m) => <div><a key={m.imdbID} href={"movies/" + m.imdbID}>{m.Title} --- {m.Year}</a></div>  ) }
            <a href="/">Home</a><br/>
        </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

