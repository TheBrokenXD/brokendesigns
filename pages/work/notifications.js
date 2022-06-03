import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const notifications = () => {
    return (
        <>
            <Head>
                <title>Broken - Notifications</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Notifications" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Notifications" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714802398?h=5afbabfb67" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-2'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Notifications</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>Turn on your notifications!!</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I'd wanted to take school of motion classes for a long time. Unfortunately, neither time nor money were on my side. I had a desire to recreate one of the student projects.`}</p>
                        <div className='display-f justify-center mt-2'>
                            <a href="https://www.schoolofmotion.com/courses/advanced-motion-methods" target="_blank" rel="noreferrer" className='custom-color'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'>Click here</button></a>
                        </div>
                        <p className='custom-text font-lg mt-4'>{`I recreated everything within After Effects. These were my inspirations.`}</p>
                        <div className='display-f justify-around mt-2'>
                            <a href="https://vimeo.com/318703026" target="_blank" rel="noreferrer" className='custom-color'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'>Click here</button></a>
                            <a href="https://youtu.be/hVm7cqs_EB0" target="_blank" rel="noreferrer" className='custom-color'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'>Click here</button></a>
                        </div>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <img src="/notifications/1.png" alt="notifications" className='thumb-cover br-base' />
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <img src="/notifications/2.png" alt="notifications" className='thumb-cover br-base' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default notifications;