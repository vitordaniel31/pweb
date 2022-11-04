export default function Principal(){
    return (
       <div>
          <h1>Nova Página</h1>
          <MariaPrea/>
          <Lula/>
       </div>
    )
 }

export function MariaPrea({nome}){
    return (
       <h2>Morreu {nome}...</h2>
    )
}

export function Lula(){
    return (
       <h2>Lula vai dar uma surra em Bolsonaro...</h2>
    )
 }

 
 