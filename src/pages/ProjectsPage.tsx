export function ProjectsPage()
{
    return (
        <>
            <header className='header'>
                <h1 className='text-5xl text-white font-extrabold'>Projects</h1>
            </header>
            <main className='main'>
                <div className=''>
                    <table className='table-fixed'>
                        <thead className='bg-gray-900'>
                        <tr>
                            <th className='cell'>Name</th>
                            <th className='cell'>Description</th>
                            <th className='cell'>Link</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='cell'>zbiggs.com</td>
                                <td className='cell'>My personal website. I.E. This site.</td>
                                <td className='cell'><a href='https://github.com/Zader000/zbiggs.com' className='purple-btn'>GitHub</a></td>
                            </tr>
                            <tr>
                                <td className='cell'>Etilize Integration</td>
                                <td className='cell'>Created a front-end that would allow the user to search for products that we sell.
                                    It would return all the product info along with the pricing from all our vendors for the given SKU's.
                                    <br/>

                                </td>
                                <td className='cell'><a href='#' className='purple-btn'>N/A</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}