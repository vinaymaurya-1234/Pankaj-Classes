import "./Intropage.css";
import { useEffect } from "react";

function Intropage() {
    useEffect(() => {
        const handleScroll = () => {
            const textSection = document.querySelector('.career-section');
            const sectionPosition = textSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                textSection.classList.add('active');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="career-section slide-up">
                <h2>
                    Not sure which stream to choose? <br /> <span>We’re here to guide you!</span>
                </h2>
                <p>Explore our Science and Commerce classes to kickstart your academic journey.</p>

                <div className="career-cards">
                    <div className="card" onClick={() => window.location.href = '/courses'}>
                        <img src="/sci.png" alt="Science Classes" />
                        <div className="card-content">
                            <p>I want to study <span className="bold">Science</span></p>
                            <span className="arrow">➜</span>
                        </div>
                    </div>

                    <div className="card" onClick={() => window.location.href = '/courses'}>
                        <img src="/comm2.png" alt="Commerce Classes" />
                        <div className="card-content">
                            <p>I want to study <span className="bold">Commerce</span></p>
                            <span className="arrow">➜</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intropage;
