import { useState } from 'react' //hooks o utilidad

export function TwitterFollowCard({ children, formatUserName, userName = 'unknow' ,initialIsFollowing}) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) //usesState devuelve un array
    
    /*const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]*/

    const imageSrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir'//ternaria if en corto
    const buttonClassName = isFollowing //clave para que react sea dinamico
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleCLick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className="tw-followCard-avatar"
                    src={imageSrc}
                    alt="Image User" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleCLick}>

                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}