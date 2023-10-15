const Header = () => {
    return (
        <div className="header">
            <div className='text'>
                <h1>Yorben Verhoest</h1>
                <h2>Full stack developer</h2>
            </div>
            <figure>
                <img src={require('../library/images/header.png')} alt='profile'/>
            </figure>
        </div>
    )
}

export default Header