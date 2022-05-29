const Web = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xs">
                    <img src="web/lazyy.png" alt="cover-1" className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Lazyycss.</span></p>
                    <p className="custom-sub-text ls-0">A design system for my UI designs.</p>
                </div>
                <div className="col-4-xs">
                    <img src="web/starpanel.png" alt="cover-1" className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Starpanel</span></p>
                    <p className="custom-sub-text ls-0">An SMM panel for a client.</p>
                </div>
                <div className="col-4-xs">
                    <img src="web/allen.png" alt="cover-1" className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">{`Allen's Bots`}</span></p>
                    <p className="custom-sub-text ls-0">An E-Commerce site for a client.</p>
                </div>
            </div>
        </>
    );
}
 
export default Web;