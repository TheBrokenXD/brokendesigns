import Link from 'next/link';

const Motion = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/reel2021"><img src="index-thumbnail/reel.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/reel2021"><span className='pointer custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/promo3d"><img src="index-thumbnail/3d-promo.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/dcoderz"><img src="index-thumbnail/dcoderz.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/notifications"><img src="index-thumbnail/noti.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer custom-misc-hover'>Notifications</span></Link></p>
                    <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/valentine"><img src="index-thumbnail/valentine.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/valentine"><span className='pointer custom-misc-hover'>Valentine</span></Link></p>
                    <p className="custom-sub-text ls-0">{`A little gif I made for valentine's day.`}</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/soon"><img src="index-thumbnail/soon.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/soon"><span className='pointer custom-misc-hover'>Soon</span></Link></p>
                    <p className="custom-sub-text ls-0">Idk i just did something.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/fabiconv2"><img src="index-thumbnail/fabicon-v2.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv2"><span className='pointer custom-misc-hover'>Fabicon V2</span></Link></p>
                    <p className="custom-sub-text ls-0">My second entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/fabiconv1"><img src="index-thumbnail/fabicon-v1.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv1"><span className='pointer custom-misc-hover'>Fabicon V1</span></Link></p>
                    <p className="custom-sub-text ls-0">My first entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/vincenzo"><img src="index-thumbnail/vincenzo.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/vincenzo"><span className='pointer custom-misc-hover'>Vincenzo</span></Link></p>
                    <p className="custom-sub-text ls-0">A stream package for Vincenzo.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/jayanth"><img src="index-thumbnail/jayanth.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/jayanth"><span className='pointer custom-misc-hover'>Jayanth</span></Link></p>
                    <p className="custom-sub-text ls-0">Promo for client Jayanth.</p>
                </div>
            </div>
        </>
    );
}
 
export default Motion;