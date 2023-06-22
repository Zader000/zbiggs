interface ResumePageProps {
    children: React.ReactNode;
}

export function ResumePage({children}: ResumePageProps)
{
    return(
        <>
            <header className="header">
                <h1 className="text-5xl text-white font-extrabold">Resume</h1>
            </header>
            <main className='main'>
                <iframe title='Resume' style={{width: '750px', height: '800px'}} src="https://drive.google.com/file/d/1hgpf16amUmm_2lJKvHL8jodPLtIrYSdpqba1ZH3chJA/preview?usp=embed_googleplus" allowFullScreen></iframe>
                <br/>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
}