export default function Movies({data}){

    return (

        <div>

            { data.Search.map( (m) => <div><a key={m.imdbID} href={"movies2/" + m.imdbID}>{m.Title} --- {m.Year}</a></div>  ) }
            <a href="/">Home</a><br/>
        </div>

    )    

}

export async function getServerSideProps(context){
    const res = await fetch(`https://www.omdbapi.com/?apikey=9b30f837&s=bagdad`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
  }
  

