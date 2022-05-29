const Web = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://broken-lazy-docs.vercel.app/" target="_blank" rel="noreferrer"><img src="web/lazyy.png" alt="cover" className="thumb-cover br-base" /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Lazyycss.</span></p>
                    <p className="custom-sub-text ls-0">A design system for my UI designs.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://client-starpanel.vercel.app/" target="_blank" rel="noreferrer"><img src="web/starpanel.png" alt="cover" className="thumb-cover br-base" /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Starpanel</span></p>
                    <p className="custom-sub-text ls-0">An SMM panel for a client.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="http://allensmarketingbots.tech/" target="_blank" rel="noreferrer"><img src="web/allen.png" alt="cover" className="thumb-cover br-base" /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">{`Allen's Bots`}</span></p>
                    <p className="custom-sub-text ls-0">An E-Commerce site for a client.</p>
                </div>
            </div>
        </>
    );
}
 
export default Web;