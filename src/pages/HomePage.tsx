;

export function HomePage()
{
    return(
        <>
            <header className="header">
                <h1 className="text-5xl text-white font-extrabold">Zach Biggs <span className='font-medium text-3xl'>Web Developer</span></h1>
            </header>
            <main className='main'>
                <p className='text-white text-8xl font-bold'>Hello!</p>
                <br/>
                <div className={'w-3/4'}>
                    <p className='text-white text-xl'>
                        I am a software developer with a passion for learning and creating. I love the learn about new technologies and how I can use them to improve my coding skills.
                    </p>
                    <p className='text-white text-xl'>
                        I enjoy doing full stack development. I like making a nice looking clean UI but I also love solving the hard problems of the backend and integrating with other software systems.
                    </p>
                </div>
                <br/>
                <img src='https://zbiggs.com/images/programmer_man2.png' alt='programmer'/>
            </main>
        </>
    );
}