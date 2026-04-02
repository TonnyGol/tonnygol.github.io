import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import HeroLaptop from './HeroLaptop';
import { personalInfo } from '../../data/projects';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const roles = [personalInfo.title, 'Backend Engineer', 'CS Student', 'Problem Solver'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayText(currentRole.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentRole.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.tagline}>
                        <span className={styles.wave}>👋</span>
                        <span>Hey there, I'm</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.name}>{personalInfo.name}</span>
                    </h1>

                    <div className={styles.roleWrapper}>
                        <span className={styles.rolePrefix}>I'm a </span>
                        <span className={styles.role}>
                            {displayText}
                            <span className={styles.cursor}>|</span>
                        </span>
                    </div>

                    <p className={styles.description}>
                        {personalInfo.summary}
                    </p>

                    <div className={styles.buttons}>
                        <a href="#projects" className={styles.primaryBtn}>
                            <span>View My Work</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                        <a href="#contact" className={styles.secondaryBtn}>
                            <span>Get In Touch</span>
                        </a>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>4+</span>
                            <span className={styles.statLabel}>Projects Built</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Technologies</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>4+</span>
                            <span className={styles.statLabel}>Years Coding</span>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <HeroLaptop />
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
