import {useRef, useState} from 'react';
import Link from 'next/link';
import Lottie from "lottie-react";
import { Router, useRouter } from "next/router";
// assets
import Data from "../public/data.json";

const Navbar = () => {

    const router = useRouter()

    const lottieRef = useRef();
    const lottieData = useRef();

    const handleClick = () => {
        if(lottieData.current.className == "sidebar") {
            lottieData.current.className = 'sidebar-toggled';
            lottieRef.current.setDirection(1);
            lottieRef.current.playSegments(1, 21, true);
        } else {
            lottieData.current.className = "sidebar";
            lottieRef.current.setDirection(-1);
            lottieRef.current.play();
        }
    }
    
    const closeFunc = () => {
        lottieData.current.className = "sidebar";
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
    }

    return (
        <>
            <div className="nav">

                <div className="nav-content">
                    <Link href="/"><img src="/vector.svg" alt="logo" className='custom-text font-lg pointer svg unselectable'/></Link>
                    <div className="display-f align-i-center">
                        <div className="nav-burger">
                            <div className="lottie" onClick={handleClick} >
                                <Lottie lottieRef={lottieRef} animationData={Data} loop={false} autoplay={false} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div ref={lottieData} className="sidebar">
                    <ul>
                        <li><Link href="/"><a className='lg-font-xl xs-font-lg custom-text unselectable' onClick={closeFunc}>Home</a></Link></li>
                        <li><Link href="/works"><a className='lg-font-xl xs-font-lg custom-text unselectable' onClick={closeFunc}>Works</a></Link></li>
                        <li><Link href="/contact"><a className='lg-font-xl xs-font-lg custom-text unselectable' onClick={closeFunc}>Contact</a></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;