import Link from 'next/link';
import Image from 'next/image';
// recoil
import { useRecoilState } from 'recoil';
// atoms
import { designState } from "../atoms/triggerAtoms";
// framer motion
import { motion } from 'framer-motion';

const Work = () => {

    const [workState, setWorkState] = useRecoilState(designState);

    const clickOne = () => {
        setWorkState("motion");
    }

    const easing = [0.77, 0, 0.18, 1];

    // variants

    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easing
            }
        }
    }
    
    return (
        <>
            <motion.div initial="initial" animate="animate" className="row gap-2 mt-4">
                <motion.div variants={fadeInUp} className="col-6-lg col-12-xs">
                    <Link href="/work/reel2021"><Image src="/img/thumbnail/motion/reel.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/reel2021"><span className='pointer transition-base custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="col-6-lg col-12-xs">
                    <Link href="/work/promo3d"><Image src="/img/thumbnail/motion/3d-promo.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer transition-base custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="col-6-lg col-12-xs">
                    <Link href="/work/dcoderz"><Image src="/img/thumbnail/motion/dcoderz.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer transition-base custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="col-6-lg col-12-xs">
                    <Link href="/work/notifications"><Image src="/img/thumbnail/motion/noti.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer transition-base custom-misc-hover'>Notifications</span></Link></p>
                    <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                </motion.div>

                <div className='display-f justify-center m-auto mt-4'>
                    <Link href='/work'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2' onClick={clickOne}>View more</button></Link>
                </div>
            </motion.div>
        </>
    );
}
 
export default Work;