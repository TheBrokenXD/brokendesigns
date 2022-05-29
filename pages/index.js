import Head from 'next/head'
import Link from 'next/link'
import {useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// components
import Navbar from '../components/Navbar'
import Works from '../components/Works'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

    const titleRef = useRef();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset)
            titleRef.current.style.transform = `translateX(-${window.pageYOffset}px)`
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Head>
                <title>Broken - Portfolio</title>
            </Head>
            
            <div>
                <Navbar />

                <div ref={titleRef} className='md-display-f xs-display-n justify-between mt-8'>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>..</p>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>BROKEN.</p>
                </div>

                <div className='md-display-n xs-display-f justify-center mt-8'>
                    <p className='font-xl-2 custom-text font-f-code ls-0'>BROKEN</p>
                </div>

                <div className="container">
                    <div className='lg-display-b xs-display-n'>
                        <div className="row mt-200-px">
                            <div className="col-6-xl col-8-lg col-10-md">
                                <p className='custom-text font-lg'>{`Hello! I'm`} Broken. Motion {`&`} graphic designer, UI/UX designer and a full stack web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg-display-n md-display-b xs-display-n'>
                        <div className="row mt-8">
                            <div className="col-6-xl col-8-lg col-10-md col-12-xs">
                                <p className='custom-text font-lg'>{`Hello! I'm`} Broken. Motion {`&`} graphic designer, UI/UX designer and a full stack web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className='display-f justify-center'>
                        <div className='md-display-n xs-display-b mt-4'>
                            <p className='custom-text font-md text-center'>{`Hello! I'm Broken.`}</p>
                            <p className='custom-text font-md pt-2 text-center'>Motion, Graphic, Web designer. Full Stack Developer.</p>
                        </div>
                    </div>
                    <div className='card black-bg custom-card-bg-gradient p-3 mt-4 md-display-b xs-display-n'>
                        <div className="display-f lg-justify-start xs-justify-center">
                            <Link href="/works"><p className='font-lg custom-text custom-misc-hover'><span className='pointer unselectable'>Motion design</span></p></Link>
                            <Link href="/works"><p className='font-lg custom-text custom-misc-hover ml-3'><span className='pointer unselectable'>Graphic design</span></p></Link>
                            <Link href="/works"><p className='font-lg custom-text custom-misc-hover ml-3'><span className='pointer unselectable'>Web design</span></p></Link>
                        </div>
                    </div>

                    <Works />

                    <div className="row mt-6 mb-2">
                        <div className="col-6-md col-12-xs">
                            <p className='custom-text lg-font-xl xs-font-lg md-text-left xs-text-center'><a href="mailto:broken.contact.1211@gmail.com" className='custom-text custom-sub-text-hover'><span className='pointer'>Send an email</span><span className="lg-font-lg xs-font-md custom-text pl-2 pointer"><FontAwesomeIcon icon={faLocationArrow} /></span></a></p>
                        </div>
                        <div className="col-6-md col-12-xs">
                            <div className="row ml-1 gap-1 md-display-f xs-display-n">
                                <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://twitter.com/TheBroken_XD' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Twitter</a></p></div>
                                <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://www.instagram.com/thebroken_xd/' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Instagram</a></p></div>
                                <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://discordapp.com/users/846291281746329601' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Discord</a></p></div>
                                <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://github.com/TheBrokenXD' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Github</a></p></div>
                            </div>
                            <div className='xs-display-f md-display-n justify-between mt-3 pl-2 pr-2'>
                                <p className='font-md fw-md'><a href='https://twitter.com/TheBroken_XD' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Twitter</a></p>
                                <p className='font-md fw-md'><a href='https://www.instagram.com/thebroken_xd/' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Instagram</a></p>
                            </div>
                            <div className='xs-display-f md-display-n justify-between mt-2 mb-2 pl-2 pr-2'>
                                <p className='font-md fw-md'><a href='https://discordapp.com/users/846291281746329601' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Discord</a></p>
                                <p className='font-md fw-md'><a href='https://github.com/TheBrokenXD' target="_blank" rel="noreferrer" className='custom-sub-text custom-text-hover'>Github</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
