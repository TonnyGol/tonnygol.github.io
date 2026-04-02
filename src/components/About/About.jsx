import styles from './About.module.css';
import { personalInfo } from '../../data/projects';

const About = () => {
    const highlights = [
        { icon: '🎓', title: 'CS Student', description: 'Third-year Computer Science student at Ashkelon Academic College' },
        { icon: '💻', title: 'Backend Focus', description: 'Building robust, scalable server-side applications with Java & Spring Boot' },
        { icon: '🔧', title: 'Full Stack', description: 'React + Vite frontend with REST API backend integration' },
        { icon: '🤖', title: 'ML & Vision', description: 'Experience with TensorFlow and OpenCV for computer vision projects' }
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>About Me</span>
                    <h2 className={styles.title}>
                        Turning <span className={styles.highlight}>ideas</span> into reality
                    </h2>
                </div>

                <div className={styles.content}>
                    <p className={styles.text}>
                        Hey! I'm {personalInfo.name.split(' ')[0]}, a {personalInfo.title} and {personalInfo.summary.charAt(0).toLowerCase() + personalInfo.summary.slice(1)}
                    </p>
                    <p className={styles.text}>
                        My journey in tech started with the "{personalInfo.education[1].program}" and has evolved through
                        my time as a {personalInfo.military[0].role} in the {personalInfo.military[0].unit} and my {personalInfo.education[0].degree.toLowerCase()} studies.
                        I've built booking platforms, bots, desktop games, and explored machine learning.
                    </p>

                    <div className={styles.highlights}>
                        {highlights.map((item, index) => (
                            <div key={index} className={styles.highlightCard}>
                                <span className={styles.highlightIcon}>{item.icon}</span>
                                <h3 className={styles.highlightTitle}>{item.title}</h3>
                                <p className={styles.highlightDesc}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <a href="#contact" className={styles.ctaButton}>
                            <span>Let's Connect</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
