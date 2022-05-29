import Head from 'next/head'
import { useRef } from "react";
// components
import Navbar from '../../components/Navbar';
import Graphic from '../../components/showcase/Graphic';
import Motion from '../../components/showcase/Motion';
import Web from '../../components/showcase/Web';

const works = () => {
    

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

    return (
        <>
            <Head>
                <title>Broken - Works</title>
            </Head>

            <div>
                <Navbar />

                <div className='container'>

                    <div className='card black-bg custom-card-bg-gradient p-3 mt-8'>
                        <div className="display-f">
                            <p className='font-lg custom-text custom-misc-hover'><span className='pointer unselectable' onClick={filterMotion}>Motion design</span></p>
                            <p className='font-lg custom-text custom-misc-hover ml-3'><span className='pointer unselectable' onClick={filterGraphic}>Graphic design</span></p>
                            <p className='font-lg custom-text custom-misc-hover ml-3'><span className='pointer unselectable' onClick={filterWeb}>Web design</span></p>
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
                        <p className='custom-text font-xl fw-md mt-4'>Web Design</p>
                        <Web />
                    </div>
                    
                </div>
            </div>
        </>
    );
}
 
export default works;