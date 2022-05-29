import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const valentine = () => {
    return (
        <>
            <Head>
                <title>Broken - Valentine</title>
            </Head>

            <div>
                <Navbar />

                <div className="card custom-variant-1-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714803999?h=63406cbd03?autoplay=1&loop=1&autopause=0" width="1080" height="1080" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-5'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Valentine</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A thing that I made for Valentines day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default valentine;