const About = () => {
    
    const text = '{ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. }'

    return (
        <main className='flex-row col-gap-20 about-container'>            
                <div className="flex-col row-gap-20 about-text">
                    <h1>Hey, I'm Jesse</h1>
                    <p className="indent">{text}</p>
                </div>
                {/* <div className="img-container"></div> */}
                <img src='https://i.imgur.com/9l1PKOx.jpg' alt="" />
        </main>
    )
}

export default About