import Head from 'next/head'
import Link from 'next/link';

const reel2021 = () => {
    return (
        <>
            <Head>
                <title>Broken - Reel 2021</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Reel 2021" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Reel 2021" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
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
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I began working on this reel in late December. I didn't have much time to complete it since I was preoccupied with my studies. I just had a few days to get started, and I wanted to make a big impression right away at the beginning.`}</p>
                        <img src="/reel/intro.gif" alt="intro" className='mt-4' />
                        <p className='custom-text font-lg fw-md mt-4'>Projects used:</p>
                        <p className='custom-text font-lg mt-2'>Some of the projects were left out since they are not portfolio-worthy.</p>
                    </div>
                    <div className="row gap-2 mt-2">
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/promo3d"><img src="/index-thumbnail/3d-promo.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                            <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/dcoderz"><img src="/index-thumbnail/dcoderz.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                            <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/notifications"><img src="/index-thumbnail/noti.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer custom-misc-hover'>Notifications</span></Link></p>
                            <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/fabiconv2"><img src="/index-thumbnail/fabicon-v2.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv2"><span className='pointer custom-misc-hover'>Fabicon V2</span></Link></p>
                            <p className="custom-sub-text ls-0">My second entry for Fabicon contest.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/fabiconv1"><img src="/index-thumbnail/fabicon-v1.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv1"><span className='pointer custom-misc-hover'>Fabicon V1</span></Link></p>
                            <p className="custom-sub-text ls-0">My first entry for Fabicon contest.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/vincenzo"><img src="/index-thumbnail/vincenzo.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/vincenzo"><span className='pointer custom-misc-hover'>Vincenzo</span></Link></p>
                            <p className="custom-sub-text ls-0">A stream package for Vincenzo.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/jayanth"><img src="/index-thumbnail/jayanth.png" alt="cover" className="thumb-cover br-base" /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/jayanth"><span className='pointer custom-misc-hover'>Jayanth</span></Link></p>
                            <p className="custom-sub-text ls-0">Promo for client Jayanth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default reel2021;