export default function Movies({data}){
    return (
        <div>
            <center>
                <div>
                    <img src={data.Poster}></img><br/>
                    {data.Title} --- {data.Year}<br/>
                    {data.Plot}
                </div>
            </center><br/>
            <a href='./'>Movies2</a>
        </div>
    )    

}

export async function getServerSideProps(context){
    const { imdbID } = context.query;
    const res = await fetch("https://www.omdbapi.com/?apikey=9b30f837&i=" + imdbID)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

