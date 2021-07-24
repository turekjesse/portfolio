const About = () => {
    
    const text = 'I am a Software Engineer based in Brooklyn, NY with 5 years of prior experience in eCommerce and a life-long passion for building, fixing, and tinkering with things. My knack for mechanics paired with my meticulous attention to detail and creative problem solving skills were the driving forces that lead me to learn to code.'

    return (
        <main className='flex-row col-gap-20 about-container'>            
                <div className="flex-col row-gap-20 about-text">
                    <h1>Hey, I'm Jesse</h1>
                    <p className="indent">{text}</p>
                </div>
                <img src='https://i.imgur.com/9l1PKOx.jpg' alt="" />
        </main>
    )
}

export default About