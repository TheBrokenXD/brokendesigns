import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';
import Graphic from '../../components/showcase/Graphic';
import Motion from '../../components/showcase/motion';
import Web from '../../components/showcase/Web';

const works = () => {
    return (
        <>
            <Head>
                <title>Broken - Works</title>
            </Head>

            <div>
                <Navbar />

                <div className='container'>

                    <p className='custom-text font-xl fw-md mt-8'>Motion design</p>
                    <Motion />

                    <p className='custom-text font-xl fw-md mt-4'>Graphic design</p>
                    <Graphic />

                    <p className='custom-text font-xl fw-md mt-4'>Web Design</p>
                    <Web />
                    
                </div>
            </div>
        </>
    );
}
 
export default works;