import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`
    //creamos el objeto user
    const user1 = { isFollowing: true, userName: 'midudev' }
    //mandar como objeto a el componenete como promps
    return (
        // <> ó React.Fragment
        //isFollowing={true} o isFollowing
        //mandar funciones como parametros o props
        <section className='App'>
            <TwitterFollowCard
                formatUserName={format}
                isFollowing 
                userName="midudev"
                name="Leonardo David Galindez"
            />
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={false} userName="galiLeonard"
                name="Leonardo David Galindez"
            />
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={true} 
                name="Leonardo David Galindez"
            />

            <TwitterFollowCard formatUserName={format} isFollowing={false} userName="fede">
                <strong>Leonardo David Galindez</strong>
            </TwitterFollowCard>       
        </section>
    )
}