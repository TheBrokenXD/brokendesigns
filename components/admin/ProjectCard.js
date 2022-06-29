export default function ProjectCard({ title, description }) {
    return (
        <div>
            <div className="card custom-card-bg h-5 w-5 display-f justify-center align-i-center pointer">
                <div>
                    <p className="custom-text text-center fw-md font-xl">{title}</p>
                    <p className="custom-sub-text text-center pt-1">{description}</p>
                </div>
            </div>
        </div>
    );
}