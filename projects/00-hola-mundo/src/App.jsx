import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react' //hooks o utilidad
export function App() {
    const format = (userName) => `@${userName}`
    //creamos el objeto user
    const user1 = { initialIsFollowing: true, userName: 'midudev' }
    //mandar como objeto a el componenete como promps
    /*const [nombre, setName] = useState('midudev')
    console.log('nombre', nombre)*/

    const users = [
        {
            userName: 'midudev',
            name: 'Leonardo David Galindez',
            isFollowing: true
        }
        ,
        {
            userName: 'fede',
            name: 'Federico Fernan',
            isFollowing: false
        }
        ,
        {
            userName: 'Juan',
            name: 'Juan Fernan',
            isFollowing: true
        }
        ,
        {
            userName: 'Ricardo',
            name: 'Ricardo Fernan',
            isFollowing: false
        }
    ]

    return (

        // <> ó React.Fragment
        //isFollowing={true} o isFollowing
        //mandar funciones como parametros o props

        //render
        <section className='App'>

            {//llaves porque lo que devuelve el mapero de usuarios es lo que queremos renderizar
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            formatUserName={format} 
                            userName={userName} 
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            {/*<TwitterFollowCard
                formatUserName={format}
                initialIsFollowing={true}
                userName="midudev"
                name="Leonardo David Galindez"
            />
            {/*comentario en el render
            <TwitterFollowCard
                formatUserName={format}
                initialIsFollowing={false}
                userName="gali"
                name="fede"
            />
            <TwitterFollowCard
                formatUserName={format}
                initialIsFollowing={true}
                name="julio"
            />

            <TwitterFollowCard
                formatUserName={format}
                initialIsFollowing={false}
                userName="fede">

                <strong>Leonardo David Galindez</strong>
            </TwitterFollowCard>
                
            {/*<button onClick={() => setName('leonardo')}>
                Cambio Nombre
            </button>*/}

        </section>
    )
}