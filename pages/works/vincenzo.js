import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const vincenzo = () => {
    return (
        <>
            <Head>
                <title>Broken - Stream Package for Vincenzo</title>
            </Head>

            <div>
                <Navbar />

                <div className="card custom-variant-1-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714805569?h=c4425210e9" width="1152" height="648" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-5'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Vincezo Stream Package</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A fan made stream package for Vincenzo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default vincenzo;