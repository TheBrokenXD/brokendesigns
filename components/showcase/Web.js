import Image from 'next/image';

const Web = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://broken-lazy-docs.vercel.app/" target="_blank" rel="noreferrer"><Image src="https://drive.google.com/uc?id=1SxHmD5L_5VRIEdxE5RfRDwv4Qo1MvusD" width={1080} height={1080} className="thumb-cover br-base" /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Lazyycss.</span></p>
                    <p className="custom-sub-text ls-0">A design system for my UI designs.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://broken-lazy-docs.vercel.app/" target="_blank" rel="noreferrer"><Image src="https://drive.google.com/uc?id=1xlNf1y8BC8bNq16eVvk3bmns1U0elt9c" width={1080} height={1080} className="thumb-cover br-base" /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Starpanel</span></p>
                    <p className="custom-sub-text ls-0">An SMM panel for a client.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://broken-lazy-docs.vercel.app/" target="_blank" rel="noreferrer"><Image src="https://drive.google.com/uc?id=1Exn7OmbwjS4PpgLOu4U2aF0Shwm1DP2r" width={1080} height={1080} className="thumb-cover br-base" /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">{`Allen's Bots`}</span></p>
                    <p className="custom-sub-text ls-0">An E-Commerce site for a client.</p>
                </div>
            </div>
        </>
    );
}
 
export default Web;