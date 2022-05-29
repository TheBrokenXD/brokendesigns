import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const promo3d = () => {
    return (
        <>
            <Head>
                <title>Broken - 3D Promo</title>
            </Head>

            <div>
                <Navbar />

                <div className="card custom-variant-1-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/643488053?h=d1a27c5201" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-5'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Broken - Promo</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>{`Basically, this video shows that I'm available for work.`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default promo3d;