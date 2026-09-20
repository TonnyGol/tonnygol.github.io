import { useState } from 'react';
import { skills } from '../../data/projects';
import styles from './Skills.module.css';

const Skills = () => {
    const categories = [
        { key: 'languages', label: 'Languages', icon: '💻' },
        { key: 'backend', label: 'Backend', icon: '⚙️' },
        { key: 'frontend', label: 'Frontend', icon: '🎨' },
        { key: 'devops', label: 'DevOps', icon: '🚀' },
        { key: 'other', label: 'Other', icon: '🔧' }
    ];

    const [activeCategory, setActiveCategory] = useState('languages');

    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Skills & Tools</span>
                    <h2 className={styles.title}>
                        Technologies I <span className={styles.highlight}>work with</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Here's a snapshot of my technical toolkit — the languages, frameworks,
                        and tools I use to bring projects to life.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className={styles.tabs}>
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            className={`${styles.tab} ${activeCategory === category.key ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category.key)}
                        >
                            <span className={styles.tabIcon}>{category.icon}</span>
                            <span className={styles.tabLabel}>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className={styles.skillsGrid}>
                    {skills[activeCategory]?.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={styles.skillCard}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className={styles.skillInfo}>
                                <span className={styles.skillName}>{skill.name}</span>
                                <span className={styles.skillLevel}>{skill.level}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: `${skill.level}%`,
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Icons */}
                <div className={styles.techStack}>
                    <span className={styles.techLabel}>Quick glance:</span>
                    <div className={styles.techIcons}>
                        {[
                            { name: 'Java', color: '#f89820' },
                            { name: 'React', color: '#61dafb' },
                            { name: 'Docker', color: '#2496ed' },
                            { name: 'Python', color: '#3776ab' },
                            { name: 'Spring', color: '#6db33f' },
                            { name: 'Git', color: '#f05032' },
                            // Duplicate for seamless loop
                            { name: 'Java', color: '#f89820' },
                            { name: 'React', color: '#61dafb' },
                            { name: 'Docker', color: '#2496ed' },
                            { name: 'Python', color: '#3776ab' },
                            { name: 'Spring', color: '#6db33f' },
                            { name: 'Git', color: '#f05032' },
                        ].map((tech, index) => (
                            <span
                                key={`${tech.name}-${index}`}
                                className={styles.techBadge}
                                style={{ '--badge-color': tech.color }}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
