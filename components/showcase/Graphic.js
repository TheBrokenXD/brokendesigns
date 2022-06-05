import Image from 'next/image';

const Graphic = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Image src="https://drive.google.com/uc?id=1XboBl8Wrh1lqvhCtCsyLSmF4J8hxiRtD" width={1080} height={1080} className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Broken - Brand</span></p>
                    <p className="custom-sub-text ls-0">Brand Identity for myself.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Image src="https://drive.google.com/uc?id=1hXmRfsNKOk27LsUH4KuVTt7VlpCYjmpZ" width={1080} height={1080} className="thumb-cover br-base" />
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer custom-misc-hover">Noah - Identity</span></p>
                    <p className="custom-sub-text ls-0">Personal Identity for myself.</p>
                </div>
            </div>
        </>
    );
}
 
export default Graphic;