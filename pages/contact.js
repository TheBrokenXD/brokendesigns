import Head from 'next/head'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
// components
import Navbar from '../components/Navbar';

const Contact = () => {

    const toastRef = useRef();

    const [details, setDetails] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const submitForm = (e) => {
        if (details.email === '' || details.subject === '' || details.message === '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if (details.email.indexOf('@') === -1) {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please enter a valid email";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            e.preventDefault();
            toastRef.current.className = "toast custom-color-bg";
            toastRef.current.children[0].innerHTML = "Message sent successfully";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-color-bg"
            }, 2000)

            const text = `Hillow Hillow! You got a new client! Yay! ${details.email} says ${details.subject}. Message: ${details.message}, Date: ${new Date().toLocaleDateString()}, Time: ${new Date().toLocaleTimeString()}`;
            
            const url = "https://api.telegram.org/bot5577721582:AAFJRI9RgGZc0wym9iuNW6lPKwUpR22zK8U/sendMessage?chat_id=@broken_jarvis&text=" + text;
            fetch(url).then(res => res.json())
        }
    }

    return (
        <>
            <Head>
                <title>Broken - Contact</title>
            </Head>

            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md custom-text'>Error! please check your code</p>
            </div>

            <div>
                <Navbar />

                <div className="row justify-center align-i-center h-screen">
                    <div className="col-11-xs">

                        <div className='card custom-card-bg-gradient justify-between br-md p-3'>
                            <div className="row">

                                <div className="col-9-xl column justify-center form-border-right">
                                    <form>
                                        <div className="row gap-1">
                                            <div className="col-6-xs">
                                                <div className="column">
                                                    <label className='custom-sub-text fw-md' htmlFor="email">Email</label>
                                                    <input type="email" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base' placeholder='Enter your email' id='email' onChange={ (e) => { setDetails({ ...details, email: e.target.value }) } }/>
                                                </div>
                                            </div>
                                            <div className="col-6-xs">
                                                <div className="column">
                                                    <label className='custom-sub-text fw-md' htmlFor="subject">Subject</label>
                                                    <input type="text" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base' placeholder='Brief your subject' id='subject' onChange={ (e) => { setDetails({ ...details, subject: e.target.value }) } }/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column mt-2">
                                            <label className='custom-sub-text fw-md'>Message</label>
                                            <input type="text" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base h-137-px' onChange={ (e) => { setDetails({ ...details, message: e.target.value }) } }/>
                                        </div>
                                        <div className="display-f justify-between align-i-center mt-3">
                                            <p className="font-lg custom-sub-text">I will reach out to you soon!</p>
                                            <button className="custom-btn-rounded custom-text pl-6 pr-6 pt-2 pb-2" onClick={submitForm}>Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3-xs column align-i-end justify-center display-f">
                                    <p className='font-xl fw-bold custom-text'>Contact</p>
                                    <p className='custom-sub-text pt-2 display-f align-i-center'>See my works <Link href="/works"><button className='custom-btn-rounded ml-2 shadow-base custom-text'>Works</button></Link></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Contact;