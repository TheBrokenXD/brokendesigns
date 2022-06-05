import Link from 'next/link';
import Image from 'next/image';

const Work = () => {
    return (
        <>
            <div className="row gap-2 mt-4">
                <div className="col-6-lg col-12-md">
                    <Link href="/work/reel2021"><Image src="https://drive.google.com/uc?id=1fLSm5MaymsKi9rT_-kL1LHLdBPr7hlf-" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/reel2021"><span className='pointer custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </div>
                <div className="col-6-lg col-12-md">
                    <Link href="/work/promo3d"><Image src="https://drive.google.com/uc?id=1Pij2izB9NsQGfm7H4ZjAaqVSSD97bVsP" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </div>
                <div className="col-6-lg col-12-md">
                    <Link href="/work/dcoderz"><Image src="https://drive.google.com/uc?id=1rP1mnfRvKgBMS2XP6jdUm4COpKKIumSH" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </div>
                <div className="col-6-lg col-12-md">
                    <Link href="/work/notifications"><Image src="https://drive.google.com/uc?id=10HMGoQij7C1MlnH62irO3qmC_y0QFld1" width={1080} height={1080} className="thumb-cover br-base" /></Link>
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
 
export default Work;