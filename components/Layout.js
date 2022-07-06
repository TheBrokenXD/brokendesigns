import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Router, router, useRouter } from "next/dist/client/router";
import NProgress from "nprogress";
// framer-motion
import { motion, AnimatePresence, transform } from "framer-motion";
// recoil
import { useRecoilValue } from "recoil";
// atoms
import { navState } from "../atoms/triggerAtoms";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => { NProgress.start(); });
Router.events.on("routeChangeComplete", () => { NProgress.done(); });
Router.events.on("routeChangeError", () => { NProgress.done(); });

const Layout = ({ children }) => {

  // const router = useRouter();

  const transitionRef = useRef();
	const contentRef = useRef();
	const active = useRecoilValue(navState);

	useEffect(() => {
		if (active === false) {
			contentRef.current.className = "main-content";
		} else {
			contentRef.current.className = "main-content-off";
		}
	})
    
    return (
      <>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{ ease: [0.77, 0, 0.18, 1], duration: 0.5 }} variants={{
            pageInitial: { opacity: 0 },
            pageAnimate: { opacity: 1 },
            pageExit: { opacity: 0 },
          }}>
            <div ref={contentRef} className="main-content">
              { children }
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
}
 
export default Layout;