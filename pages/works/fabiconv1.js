import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const fabiconv1 = () => {
    return (
        <>
            <Head>
                <title>Broken - Fabicon V1</title>
            </Head>

            <div>
                <div className="card custom-variant-1-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714805366?h=a25c70b809" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-5'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Fabicon V1</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>My first entry for Fabicon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default fabiconv1;