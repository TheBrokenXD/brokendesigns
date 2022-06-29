import { useAuth } from "../../context/AuthContext";
import { Router, useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// components
import ProjectCard from "../../components/admin/ProjectCard";
// firebase
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const dashboard = () => {

    const { user, logout } = useAuth()
    const router = useRouter()

    if (!user) {
        router.push('/admin/userAuth')
    }

    const modalRef = useRef();

    const openRef = () => {
        modalRef.current.classList.remove("display-n");
        setTimeout(() => {
            modalRef.current.className = "new-modal";
        }, 100);
    }

    const closeRef = () => {
        modalRef.current.className = "new-modal-hidden";
        setTimeout(() => {
            modalRef.current.className = "new-modal-hidden display-n";
        }, 640);
    }

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "projects"), (querySnapshot) => {
            const projects = querySnapshot.docs.map((doc) => { 
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProjects(projects)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const [details, setDetails] = useState({
        title: "",
        description: "",
    });

    const toastRef = useRef();

    const addProject = (e) => {
        e.preventDefault();
        
        if (details.title === '' || details.description === '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            const collectionRef = doc(collection(db, "projects"));
            setDoc(collectionRef, {
                title: details.title,
                description: details.description
            }) .then(() => {
                toastRef.current.className = "toast custom-color-bg";
                toastRef.current.children[0].innerHTML = "Project added successfully"
                modalRef.current.className = "new-modal-hidden";
                setTimeout(() => {
                    modalRef.current.className = "new-modal-hidden display-n";
                }, 640);
                setTimeout(() => {
                    toastRef.current.className = "toast-hidden custom-color-bg";
                }, 2000)
            })
        }
    }

    return (
        <>

            <div ref={modalRef} className="new-modal-hidden display-n">
                <div className="new-modal-content card black-bg custom-card-bg-gradient base-shadow">
                    <form>
                        <div className="column">
                            <div className="display-f justify-between align-i-center">
                                <label htmlFor="title" className="custom-text font-lg">Title:</label>
                                <span className="float-right font-xl pointer custom-text" onClick={closeRef}>&times;</span>
                            </div>
                            <input type="text" id="title" className="input-t custom-card-bg custom-text" onChange={ (e) => { setDetails({ ...details, title: e.target.value, }) } } />
                        </div>
                        <div className="column mt-2">
                            <label htmlFor="title" className="custom-text font-lg">Description:</label>
                            <input type="text" id="title" className="input-t custom-card-bg custom-text mt-2" onChange={ (e) => { setDetails({ ...details, description: e.target.value, }) } } />
                        </div>
                        <div className="display-f align-i-center justify-between mt-2">
                            <p className="custom-sub-text font-lg">Good Luck!</p>
                            <button className="custom-btn custom-text" onClick={addProject}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md custom-text'>Error! please check your code</p>
            </div>
        
            <div className="row justify-center mb-3">
                <div className="col-11-xs">

                    <div className='mt-6'>
                        <div className="display-f justify-between align-i-center">
                            <p className="custom-text font-lg fw-bold">Admin Panel</p>
                            <button className="custom-btn-rounded custom-text pl-6 pr-6 pt-2 pb-2" onClick={ () => {
                                logout()
                                router.push('/admin/userAuth')
                            }}>Log Out</button>
                        </div>

                        <div className="mt-2 display-f">
                            <div className="card custom-card-bg h-5 w-5 display-f justify-center align-i-center pointer" onClick={openRef}>
                                <div>
                                    <p className="custom-text text-center fw-md font-xl-2">+</p>
                                    <p className="custom-text fw-md text-center pt-1">New Project</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="custom-text font-lg fw-md">Existing Projects</p>
                            <div className="row gap-2">
                                {projects.map((project) => {
                                    return (
                                        <ProjectCard key={project.id} title={project.title} description={project.description} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default dashboard;