interface CardProps {
    title: string;
    description: string;
    link?: string;
}

export function Card({title, description, link}: CardProps)
{
    return (
        <div className='flex-col rounded bg-gray-900 p-0 justify-around items-center w-64 shadow-lg'>
            <div className='my-5 p-2 border-b-2'>
                <h1 className='text-white text-3xl font-bold'>{title}</h1>
            </div>
            <div className='p-3'>
                <p className='text-white text-lg'>{description}</p>
            </div>
            {link && (
                <div className='m-5'>
                    <a href={link} className='purple-btn'>Github</a>
                </div>
            )}
        </div>
    );
}

interface DeckProps {
    children: React.ReactNode;
}

export function Deck({children}: DeckProps)
{
    return (
        <div className='flex flex-row flex-wrap justify-around w-3/4'>
            {children}
        </div>
    );
}
