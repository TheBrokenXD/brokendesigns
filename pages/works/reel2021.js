import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const reel2021 = () => {
    return (
        <>
            <Head>
                <title>Broken - Reel 2021</title>
            </Head>

            <div>
                <Navbar />

                <div className="card custom-variant-1-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/661701340?h=66450442bc" width="1152" height="648" frameborder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-5'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>2021 Reel</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A showcase of my motion design in 2021.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default reel2021;