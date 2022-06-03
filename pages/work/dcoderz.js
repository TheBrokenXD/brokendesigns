import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const dcoderz = () => {
    return (
        <>
            <Head>
                <title>Broken - Team Dcoderz</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Team Dcoderz" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Team Dcoderz" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714801821?h=179d1a625e?autoplay=1&loop=1" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-2'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Team Dcoderz</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A simple video profile for Dcoderz</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`When the admin of Team Dcoderz reached out to me, I had just installed saber plugin. Even though it's rather old, I decided to give it a go.`}</p>
                        <img src="/dcoderz/saber.gif" alt="saber" className='mt-4 thumb-cover br-base'/>
                        <p className='custom-text font-lg mt-4'>{`I had no idea what I was going to do next. So I looked for some inspiration. Here's what I found:`}</p>
                        <div className='display-f justify-center mt-2'>
                            <a href="https://www.behance.net/gallery/136534649/ESports-Intro-Collection" target="_blank" rel="noreferrer" className='custom-color'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'>Click here</button></a>
                        </div>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <img src="/dcoderz/watermark.png" alt="cover" className="thumb-cover br-base" />
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <img src="/dcoderz/overlay.png" alt="cover" className="thumb-cover br-base" />
                            </div>
                            <div className='col-6-xl col-12-xs'>
                                <img src="/dcoderz/bglogo.png" alt="cover" className='thumb-cover br-base' />
                            </div>
                            <div className='col-6-xl col-12-xs'>
                                <img src="/dcoderz/final.png" alt="cover" className='thumb-cover br-base' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default dcoderz;