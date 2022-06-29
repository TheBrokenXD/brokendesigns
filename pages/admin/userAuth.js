import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from "react";
// firebase
import { useAuth } from '../../context/AuthContext';

const userAuth = () => {

    const toastRef = useRef();
    const router = useRouter();
    const { user, signIn } = useAuth()
    
    const [details, setDetails] = useState({
        email: '',
        password: ''
    });

    // sign in with email and password
    const Login = async (e) => {
        e.preventDefault();

        if(details.email == '' || details.password == '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            try {
                await signIn(details.email, details.password)
                router.push('/admin/userAuth')
            } catch (err) {
                toastRef.current.className = "toast custom-error-bg";
                toastRef.current.children[0].innerHTML = err.message
                setTimeout(() => {
                    toastRef.current.className = "toast-hidden custom-error-bg"
                }, 2000)
            }
        }
    }

    useEffect(() => {
        if (user) {
            router.push('/admin')
        }
    }, [router, user])

    return (
        <>
            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md custom-text'>Error! please check your code</p>
            </div>

            <div className='row justify-center align-i-center h-screen'>
                <div className="col-11-xs">

                    <div className='card custom-card-bg-gradient justify-between br-md md-p-3 xs-p-2 md-mt-0 xs-mt-8'>
                        <div className="row">

                            <div className="col-9-xl col-12-xs column justify-center form-border-right">
                                <form>
                                    <div className="row">
                                        <div className="col-12-xs">
                                            <div className="column">
                                                <label className='custom-sub-text fw-md' htmlFor="email">Email</label>
                                                <input type="email" required autoComplete='none' className='mt-1 input-t custom-card-bg custom-sub-text shadow-base' placeholder='Enter your email' id='email' onChange={ (e) => { setDetails({ ...details, email: e.target.value }) } }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column mt-2">
                                        <label className='custom-sub-text fw-md'>Password</label>
                                        <input type="password" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base' placeholder='Enter your password' id='pass' onChange={ (e) => { setDetails({ ...details, password: e.target.value }) } }/>
                                    </div>
                                    <div className="md-display-f xs-display-b justify-between align-i-center mt-3">
                                        <p className="md-font-lg xs-font-md md-text-left xs-text-center custom-sub-text">Only for admins!</p>
                                        <div className='md-display-b xs-display-f justify-center'>
                                            <button className="custom-btn-rounded custom-text pl-6 pr-6 pt-2 pb-2 md-mt-0 xs-mt-2" onClick={Login}>Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-3-xs column align-i-end justify-center xl-display-f xs-display-n">
                                <p className='font-xl fw-bold custom-text'>Admin</p>
                                <p className='custom-sub-text pt-2 display-f align-i-center'>Not an admin? <Link href="/"><button className='custom-btn-rounded ml-2 shadow-base custom-text'>Home</button></Link></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default userAuth;