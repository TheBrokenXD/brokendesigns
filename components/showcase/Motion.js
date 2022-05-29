import Link from 'next/link';

const Motion = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xs">
                    <Link href="/works/reel2021"><img src="index-thumbnail/reel.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/reel2021"><span className='pointer custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/promo3d"><img src="index-thumbnail/3d-promo.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/promo3d"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/dcoderz"><img src="index-thumbnail/dcoderz.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/notifications"><img src="index-thumbnail/noti.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/notifications"><span className='pointer custom-misc-hover'>Notifications</span></Link></p>
                    <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/valentine"><img src="index-thumbnail/valentine.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/valentine"><span className='pointer custom-misc-hover'>Valentine</span></Link></p>
                    <p className="custom-sub-text ls-0">{`A little gif I made for valentine's day.`}</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/soon"><img src="index-thumbnail/soon.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/soon"><span className='pointer custom-misc-hover'>Soon</span></Link></p>
                    <p className="custom-sub-text ls-0">Idk i just did something.</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/fabiconv2"><img src="index-thumbnail/fabicon-v2.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/fabiconv2"><span className='pointer custom-misc-hover'>Fabicon V2</span></Link></p>
                    <p className="custom-sub-text ls-0">My second entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/fabiconv1"><img src="index-thumbnail/fabicon-v1.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/fabiconv1"><span className='pointer custom-misc-hover'>Fabicon V1</span></Link></p>
                    <p className="custom-sub-text ls-0">My first entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/vincenzo"><img src="index-thumbnail/vincenzo.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/vincenzo"><span className='pointer custom-misc-hover'>Vincenzo</span></Link></p>
                    <p className="custom-sub-text ls-0">A stream package for Vincenzo.</p>
                </div>
                <div className="col-4-xs">
                    <Link href="/works/jayanth"><img src="index-thumbnail/jayanth.png" alt="cover-1" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/works/jayanth"><span className='pointer custom-misc-hover'>Jayanth</span></Link></p>
                    <p className="custom-sub-text ls-0">Promo for client Jayanth.</p>
                </div>
            </div>
        </>
    );
}
 
export default Motion;