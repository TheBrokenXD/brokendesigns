import Head from 'next/head'
import Image from 'next/image';

const valentine = () => {
    return (
        <>
            <Head>
                <title>Broken - Valentine</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Valentine" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Valentine" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
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
                            <p className='custom-text'>{`Something that I made for Valentine's Day.`}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I wanted to make something special for Valentine's Day. This year, I was completely consumed by my studies, and I had a math exam on February 14th.`}</p>
                        <p className='custom-text font-lg mt-2'>Breakdown:</p>
                        <div className="row gap-2 mt-4">
                            {/* <div className="col-6-lg col-12-md">
                                <Image src="https://drive.google.com/uc?id=19WOqTWsVdAgPHXoL4AAks0n60rNU8oVy" width={1920} height={1080} />
                                <p className="custom-text">vfdsgrs.</p>
                            </div>
                            <div className="col-6-lg col-12-md">
                                <Image src="https://drive.google.com/uc?id=1VKsSAdLk75mkIlRMKb4onVwv4cWtAz-d" width={1920} height={1080} />
                                <p className="custom-text">A what</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default valentine;