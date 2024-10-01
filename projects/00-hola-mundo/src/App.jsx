import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react' //hooks o utilidad
export function App() {
    const format = (userName) => `@${userName}`
    //creamos el objeto user
    const user1 = { isFollowing: true, userName: 'midudev' }
    //mandar como objeto a el componenete como promps
    const [nombre, setName] = useState('midudev')
    console.log('nombre', nombre)

    return (

        // <> ó React.Fragment
        //isFollowing={true} o isFollowing
        //mandar funciones como parametros o props
        
        //render
        <section className='App'>
            <TwitterFollowCard
                formatUserName={format}
                isFollowing
                userName="midudev"
                name="Leonardo David Galindez"
            />
            {/*comentario en el render*/}
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={false} userName={nombre}
                name={nombre}
            />
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={true}
                name={nombre}
            />

            <TwitterFollowCard formatUserName={format} isFollowing={false} userName="fede">
                <strong>Leonardo David Galindez</strong>
            </TwitterFollowCard>

            <button onClick={() => setName('leonardo')}>
                Cambio Nombre
            </button>

        </section>
    )
}