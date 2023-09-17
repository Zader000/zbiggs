import {SideBar} from "../components/SideBar";

function NotFoundPage() {
    return (
        <>
            <SideBar/>
            <main className='main'>
                <h1 className='text-white text-8xl font-bold'>404</h1>
                <br/>
                <p className='text-white text-xl'>
                    oops! Page not found
                </p>
            </main>
        </>
    )
}
export default NotFoundPage;