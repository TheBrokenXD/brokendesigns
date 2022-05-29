const Graphic = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xs">
                    <img src="graphic/brand.png" alt="cover-1" className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Broken - Brand</span></p>
                    <p className="custom-sub-text ls-0">Brand Identity for myself.</p>
                </div>
                <div className="col-4-xs">
                    <img src="graphic/noah.png" alt="cover-1" className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Noah - Identity</span></p>
                    <p className="custom-sub-text ls-0">Personal Identity for myself.</p>
                </div>
            </div>
        </>
    );
}
 
export default Graphic;