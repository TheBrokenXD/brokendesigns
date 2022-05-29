import Head from 'next/head'
import { useRef } from "react";
// components
import Navbar from '../../components/Navbar';
import Graphic from '../../components/showcase/Graphic';
import Motion from '../../components/showcase/Motion';
import Web from '../../components/showcase/Web';

const Works = () => {
    
    const selectRef = useRef(null);
    
    const motion = useRef(null);
    const graphic = useRef(null);
    const web = useRef(null);

    const filterMotion = (e) => {
        graphic.current.classList.add('hidden');
        web.current.classList.add('hidden');
        motion.current.classList.remove('hidden');
    }

    const filterGraphic = (e) => {
        motion.current.classList.add('hidden');
        web.current.classList.add('hidden');
        graphic.current.classList.remove('hidden');
    }

    const filterWeb = (e) => {
        motion.current.classList.add('hidden');
        graphic.current.classList.add('hidden');
        web.current.classList.remove('hidden');
    }

    const selectChange = (e) => {
        if(e.target.value === '1') {
            filterMotion();
        } else if(e.target.value === '2') {
            filterGraphic();
        } else if(e.target.value === '3') {
            filterWeb();
        }
    }

    return (
        <>
            <Head>
                <title>Broken - Works</title>
                <meta name="description" content="Hey! I'm Broken. An enthusiastic self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Works" />
                <meta property="og:description" content="Hey! I'm Broken. An enthusiastic self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Works" />
                <meta name="twitter:description" content="Hey! I'm Broken. An enthusiastic self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className='container'>

                    <div className='card black-bg custom-card-bg-gradient md-p-3 xs-p-1 mt-8'>
                        <div className="md-display-f xs-display-n">
                            <p className='font-lg custom-text custom-misc-hover'><span className='pointer unselectable' onClick={filterMotion}>Motion design</span></p>
                            <p className='font-lg custom-text custom-misc-hover ml-3'><span className='pointer unselectable' onClick={filterGraphic}>Graphic design</span></p>
                            <p className='font-lg custom-text custom-misc-hover ml-3'><span className='pointer unselectable' onClick={filterWeb}>Web design</span></p>
                        </div>
                        <div className='md-display-n xs-display-f justify-center'>
                            <form>
                                <select ref={selectRef} required className="input-t custom-card-bg custom-sub-text shadow-base" id="category" onChange={selectChange}>
                                    <option value="1">Motion design</option>
                                    <option value="2">Graphic design</option>
                                    <option value="3">Web design</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div ref={motion} className='motion'>
                        <p className='custom-text font-xl fw-md mt-4'>Motion design</p>
                        <Motion />
                    </div>

                    <div ref={graphic} className='graphic hidden'>
                        <p className='custom-text font-xl fw-md mt-4'>Graphic design</p>
                        <Graphic />
                    </div>

                    <div ref={web} className='web hidden'>
                        <p className='custom-text font-xl fw-md mt-4'>Web design</p>
                        <Web />
                    </div>
                    
                </div>
            </div>
        </>
    );
}
 
export default Works;