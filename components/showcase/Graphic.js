import Image from 'next/image';

const Graphic = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Image src="/img/thumbnail/graphic/brand.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Broken - Brand</span></p>
                    <p className="custom-sub-text ls-0">Brand Identity for myself.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Image src="/img/thumbnail/graphic/noah.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Noah - Identity</span></p>
                    <p className="custom-sub-text ls-0">Personal Identity for myself.</p>
                </div>
            </div>
        </>
    );
}
 
export default Graphic;