import {Form, redirect} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ContactPage() {
    return (
        <>
            <header className='header'>
                <h1 className='text-5xl text-white font-extrabold'>Contact</h1>
            </header>
            <main className={'main'}>
                <Form method={'POST'}>
                    <div className={'control-group'}>
                        <label htmlFor={'name'} className={'form-label'}>Name</label>
                        <input type={'text'} name={'name'} id={'name'} className={'form-control'} required/>
                    </div>
                    <div className={'control-group'}>
                        <label htmlFor={'email'} className={'form-label'}>Email</label>
                        <input type={'email'} name={'email'} id={'email'} className={'form-control'} required/>
                    </div>
                    <div className={'control-group'}>
                        <label htmlFor={'message'} className={'form-label'}>Message</label>
                        <textarea maxLength={1000} name={'message'} id={'message'} className={'form-control'} required/>
                    </div>
                    <br/>
                    <button type={'submit'} className={'link'}>Submit</button>
                </Form>
            </main>
        </>
    )
}

export default ContactPage;

export async function ContactPageSubmitAction({request, params}:any) {
    const data = await request.formData();
    const formData = {
        Name: data.get('name'),
        Email: data.get('email'),
        Message: data.get('message')
    }
    const response = await axios.post('https://zbiggs.com/api/3350/contactSubmission.php?apiCode=abcd1234', JSON.stringify(formData), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 200) {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A855F7'
        }).then(() => {
            return redirect('/');
        });
        return redirect('/');
    }
    else {
        Swal.fire({
            title: 'Error!',
            text: 'There was an error sending your message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A855F7'
        }).then(() => {
            return redirect('/contact');
        });
        return redirect('/contact');
    }
}
