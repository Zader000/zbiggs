import {Card, Deck} from "../components/Card";

export function ProjectsPage()
{
    return (
        <>
            <header className='header'>
                <h1 className='text-5xl text-white font-extrabold'>Projects</h1>
            </header>
            <main className='main'>
                <Deck>
                    <Card title={'zbiggs.com'} description={'My personal website. I.E. This site. Written in React with Tailwind CSS.'}
                          link={'https://github.com/Zader000/zbiggs'} linkText={'GitHub'}/>
                    <Card title={'Etilize Integration'} description={'Created a front-end that would allow the user to ' +
                        'search for products that we sell. It returns all the product info along with the pricing from all our vendors for the given SKU\'s.'}/>
                    <Card title={'Salesforce eSignature'} description={'React app for customers to sign quotes. ' +
                        'The app is embedded in Salesforce and uses Salesforce\'s API to get quote information and update the quote with the signature.'}/>
                </Deck>
                <br/>
                <Deck>
                    <Card title={'Woo Commerce Integration'} description={'Created a RESTful API to handle webhooks from ' +
                        'Woo Commerce. For submitted orders, the API would then create an Opportunity in Salesforce and a Quote in Microsoft Dynamics GP.'}/>
                    <Card title={'Baked By Al'} description={'A website for a local baker. The site is built with Django. ' +
                        'Allows customers to view a gallery of cakes and place an order. The admin can do CRUD operations for product and orders in the admin panel'}
                          link={'https://github.com/Zader000/BakedByAl'} linkText={'GitHub'}/>
                    <Card title={'Lease Docs Generator'} description={'Used Apex and Visualforce to generate a pdf of a ' +
                        'lease document and attach that pdf to the customer\'s account in Salesforce.'}/>
                </Deck>
            </main>
        </>
    );
}