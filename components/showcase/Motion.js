import Link from 'next/link';
import Image from 'next/image';

const Motion = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/reel2021"><Image src="https://drive.google.com/uc?id=1fLSm5MaymsKi9rT_-kL1LHLdBPr7hlf-" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/reel2021"><span className='pointer custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/promo3d"><Image src="https://drive.google.com/uc?id=1Pij2izB9NsQGfm7H4ZjAaqVSSD97bVsP" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/dcoderz"><Image src="https://drive.google.com/uc?id=1rP1mnfRvKgBMS2XP6jdUm4COpKKIumSH" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/notifications"><Image src="https://drive.google.com/uc?id=10HMGoQij7C1MlnH62irO3qmC_y0QFld1" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer custom-misc-hover'>Notifications</span></Link></p>
                    <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/valentine"><Image src="https://drive.google.com/uc?id=1hHgGz9EXUUxAWq6OwFFuefsWv7vTvvsA" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/valentine"><span className='pointer custom-misc-hover'>Valentine</span></Link></p>
                    <p className="custom-sub-text ls-0">{`A little gif I made for valentine's day.`}</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/soon"><Image src="https://drive.google.com/uc?id=10uoFmUTvPs0gisonOaI-ZwgIN168EaZ_" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/soon"><span className='pointer custom-misc-hover'>Soon</span></Link></p>
                    <p className="custom-sub-text ls-0">Idk i just did something.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/fabiconv2"><Image src="https://drive.google.com/uc?id=10Ar-LvSetRc5-OxSrU07lrauuWE3-zNF" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv2"><span className='pointer custom-misc-hover'>Fabicon V2</span></Link></p>
                    <p className="custom-sub-text ls-0">My second entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/fabiconv1"><Image src="https://drive.google.com/uc?id=1cJxcDCd-8iAvt4Jok2Cnk90_8vf6o0in" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv1"><span className='pointer custom-misc-hover'>Fabicon V1</span></Link></p>
                    <p className="custom-sub-text ls-0">My first entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/vincenzo"><Image src="https://drive.google.com/uc?id=1VwOFTq0FB7pd_iOchbe8b7XZ0wE2g9ne" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/vincenzo"><span className='pointer custom-misc-hover'>Vincenzo</span></Link></p>
                    <p className="custom-sub-text ls-0">A stream package for Vincenzo.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/jayanth"><Image src="https://drive.google.com/uc?id=14E1x_j13qLm8P0jdEgdc82jFWTHGB3-h" width={1080} height={1080} className="thumb-cover br-base" /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/jayanth"><span className='pointer custom-misc-hover'>Jayanth</span></Link></p>
                    <p className="custom-sub-text ls-0">Promo for client Jayanth.</p>
                </div>
            </div>
        </>
    );
}
 
export default Motion;