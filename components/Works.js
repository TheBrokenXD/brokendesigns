import Link from 'next/link';

const Works = () => {
    return (
        <>
            <div className="row gap-2 mt-4">
                <div className="col-6-lg col-12-md">
                    <Link href="/work/reel2021"><img src="index-thumbnail/reel.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/reel2021"><span className='pointer custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </div>
                <div className="col-6-lg col-12-md">
                    <Link href="/work/promo3d"><img src="index-thumbnail/3d-promo.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </div>
                <div className="col-6-lg col-12-md">
                    <Link href="/work/dcoderz"><img src="index-thumbnail/dcoderz.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </div>
                <div className="col-6-lg col-12-md">
                    <Link href="/work/notifications"><img src="index-thumbnail/noti.png" alt="cover" className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer custom-misc-hover'>Notifications</span></Link></p>
                    <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                </div>

                <div className='display-f justify-center m-auto mt-4'>
                    <Link href='/work'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'>View more</button></Link>
                </div>
            </div>
        </>
    );
}
 
export default Works;