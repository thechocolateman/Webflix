export default function Banner (){
    return(
        <section className="hero__banner">
            <div className="wrapper">
            <div className="detail__container">
                <h1>Orange Is The New Black</h1>
                <p>
                A crime she committed in her youthful past sends Piper Chapman to a women's prison, where she trades her comfortable New York life for one of unexpec...
                </p>
                <div className="action-btns">
                <button className='play-btn'>Play</button>
                <button className='more-info-btn secondary'>More Info</button>
                </div>
            </div>
            {/* <img className='hero__img' src="" /> */}
            </div>
            <div className="banner__shadow"></div>
      </section>
    )
}