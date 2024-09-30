export function TwitterFollowCard({ children,formatUserName, userName='unknow', name, isFollowing }) {
    const imageSrc = `https://unavatar.io/${userName}`; 
    return(
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
                <button className='tw-followCard-button'>
                    Seguir 
                </button>
            </aside>
        </article>
    )
}