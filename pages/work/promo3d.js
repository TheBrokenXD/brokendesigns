import Head from 'next/head'
import Image from 'next/image'

const promo3d = () => {
    return (
        <>
            <Head>
                <title>Broken - 3D Promo</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - 3D Promo" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - 3D Promo" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/643488053?h=d1a27c5201" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-2'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Broken - Promo</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>{`Basically, this video shows that I'm available for work.`}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I'd been bored for a long time and wanted to do more 3D exploration. Blender was lagging so badly on my PC that I had to resort to After Effects. I started it off by making my room in 3D.`}</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-4-xl col-6-lg col-12-xs">
                                <Image src="/img/3d-promo/room-3d.jpg" width={1920} height={1080} className="thumb-cover br-base" alt='room' />
                            </div>
                            <div className="col-4-xl col-6-lg col-12-xs">
                                <Image src="/img/3d-promo/room-upleft.jpg" width={1920} height={1080} className="thumb-cover br-base" alt='room' />
                            </div>
                            <div className="col-4-xl col-6-lg col-12-xs">
                                <Image src="/img/3d-promo/room-upright.jpg" width={1920} height={1080} className="thumb-cover br-base" alt='room' />
                            </div>
                        </div>
                        <p className='custom-text font-lg mt-2'>It took me so long to get the hang of it. I used match-cut for the transitions as I was clumsy. I took inspiration from these:</p>
                        <div className='display-f justify-around mt-2'>
                            <button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'><a href="https://youtu.be/u85tOgsJhVM" target="_blank" rel="noreferrer" className='custom-color'><span className='custom-text'>Click here</span></a></button>
                            <button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'><a href="https://youtu.be/EFdAOiNXUKY" target="_blank" rel="noreferrer" className='custom-color'><span className='custom-text'>Click here</span></a></button>
                        </div>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/3d-promo/match-cut-1.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/3d-promo/match-cut-2.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className='col-12-xs'>
                                <video src="/img/3d-promo/ui.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                        </div>
                        <p className='font-lg custom-text mt-2'>After I finished them, I felt a lack of imagination. I had lost motivation after working on this for three months and was going to abandon the project. However, several people advised me not to scrape it and to take a break instead. I took a break and after that I made a phone model.</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/3d-promo/phone.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/3d-promo/phone-end.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                        </div>
                        <p className='custom-text font-lg mt-2'>This piece was a lot of fun to work on and quite satisfying.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default promo3d;