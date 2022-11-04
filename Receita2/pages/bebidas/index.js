import { MariaPrea } from "../novaPagina.js"

export default function Home(){
    return (
        <div>
            { MariaPrea({nome: 'Maria Preá'}) }
            <h2>
                Tabela de Bebidas!
            </h2>
            <a href="/">Index</a>
            <a href="bebidas">Bebidas</a><br/>
            <a href="novaPagina">Nova Página</a>
        </div>
    )
 }

 
 