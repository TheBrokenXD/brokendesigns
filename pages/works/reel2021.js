import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const reel2021 = () => {
    return (
        <>
            <Head>
                <title>Broken - Reel 2021</title>
                <meta name="description" content="Hey! I'm Broken. An enthusiastic self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Reel 2021" />
                <meta property="og:description" content="Hey! I'm Broken. An enthusiastic self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Reel 2021" />
                <meta name="twitter:description" content="Hey! I'm Broken. An enthusiastic self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card custom-variant-1-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/661701340?h=66450442bc" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
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