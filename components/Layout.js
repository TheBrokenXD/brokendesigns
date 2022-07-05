import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Router, router, useRouter } from "next/dist/client/router";
import NProgress from "nprogress";
// recoil
import { useRecoilValue } from "recoil";
// atoms
import { navState } from "../atoms/triggerAtoms";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => { NProgress.start(); });
Router.events.on("routeChangeComplete", () => { NProgress.done(); });
Router.events.on("routeChangeError", () => { NProgress.done(); });

const Layout = ({ children }) => {

  const router = useRouter();

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
        <div ref={contentRef} className="main-content">
          { children }
        </div>
      </>
    );
}
 
export default Layout;