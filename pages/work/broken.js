import Head from 'next/head'
import Image from 'next/image'
import {useRef, useState, useEffect} from 'react'

const broken = () => {

    const titleRef = useRef(null);
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
                <title>Broken - Stream Package for Vincenzo</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Branding" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Branding" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div className='mt-6'>
                <video src="/img/broken/logo-anim.mp4" width="100%" preload muted="true" autoPlay loop></video>
                <div ref={titleRef} className='md-display-f xs-display-n justify-between mt-6'>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>.</p>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>BROKEN.</p>
                </div>
                <div className='work-container pb-4'>
                    <p className='custom-text font-lg font-f-code text-uppercase mt-6'>who am I?</p>
                    <p className='custom-text font-lg mt-2'>{`Noah here. An 18-year-old motion, graphic, and web designer. I like perfecting things by devoting more time to them.`}</p>
                    <div className='mt-4'>
                        <Image src="/img/broken/logo.png" width={1920} height={1080} className="thumb-cover br-base" alt='branding' />
                    </div>
                    <p className='custom-text font-lg mt-4'>As a visual depiction of the brand name Broken, the logo has broken parts represented by strips.</p>
                    <video src="/img/broken/banner.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-4"></video>
                </div>
            </div>
        </>
    );
}
 
export default broken;