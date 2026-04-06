import { useState } from 'react';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';
import { Reveal } from '../UI/Reveal';

const Projects = () => {
    // Null means show all projects grid
    const [activeProjectId, setActiveProjectId] = useState(null);
    const [fullScreenVideo, setFullScreenVideo] = useState(false);

    const activeProject = activeProjectId ? projects.find(p => p.id === activeProjectId) : null;

    const isDriveLink = (url) => url && url.includes('drive.google.com');

    // Convert Drive uc or standard links to preview links
    const getDrivePreviewLink = (url) => {
        if (!url) return '';
        const idMatch = url.match(/id=([^&]+)/) || url.match(/\/d\/([^\/]+)/);
        const videoId = idMatch ? idMatch[1] : null;
        return videoId ? `https://drive.google.com/file/d/${videoId}/preview` : url;
    };

    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Portfolio</span>
                    <h2 className={styles.title}>
                        Featured <span className={styles.highlight}>Projects</span>
                    </h2>
                    <p className={styles.subtitle}>
                        {activeProject
                            ? "Detailed interactive walkthrough of the project."
                            : "Click on a project to view its details and visual walkthroughs."}
                    </p>
                </div>

                {!activeProject ? (
                    /* Projects Grid View */
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <Reveal key={project.id} width="100%">
                                <article
                                    className={`${styles.card} ${project.featured ? styles.featured : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => setActiveProjectId(project.id)}
                                >
                                    {project.video && (
                                        <div className={styles.cardVideoPreview}>
                                            {isDriveLink(project.video) ? (
                                                <iframe
                                                    src={getDrivePreviewLink(project.video)}
                                                    title={`${project.title} Preview`}
                                                    className={styles.cardPreviewIframe}
                                                    allow="autoplay"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <video
                                                    src={project.video}
                                                    className={styles.cardPreviewVideo}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            )}
                                        </div>
                                    )}
                                    <div className={styles.cardContent}>
                                        <span className={styles.category}>{project.category}</span>
                                        <h3 className={styles.gridCardTitle}>
                                            <span style={{ marginRight: '10px' }}>{project.emoji || '🚀'}</span>
                                            {project.title}
                                        </h3>
                                        <p className={styles.gridCardDesc}>{project.description.slice(0, 110)}...</p>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.viewMoreText}>Click to View Details →</span>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    /* Active Project View */
                    <Reveal key={activeProject.id} width="100%">
                        <div className={styles.detailHeader}>
                            <button onClick={() => setActiveProjectId(null)} className={styles.backBtn}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Back to Projects
                            </button>
                        </div>

                        <div className={styles.projectLayout}>
                            <div className={styles.projectInfo}>
                                <span className={styles.activeCategory}>{activeProject.category}</span>
                                <h3 className={styles.cardTitle}>{activeProject.title}</h3>
                                <p className={styles.cardDesc}>{activeProject.description}</p>

                                <div className={styles.techStack} style={{ marginTop: '24px', marginBottom: '32px' }}>
                                    {activeProject.technologies.map((tech) => (
                                        <span key={tech} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>

                                <div className={styles.cardLinks}>
                                    {activeProject.githubUrl && (
                                        <a href={activeProject.githubUrl} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Github
                                        </a>
                                    )}
                                    {activeProject.liveUrl && (
                                        <a href={activeProject.liveUrl} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className={styles.projectVisual}>
                                {activeProject.video ? (
                                    isDriveLink(activeProject.video) ? (
                                        <>
                                            <div className={styles.iframeContainer} style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                                                <iframe
                                                    src={getDrivePreviewLink(activeProject.video)}
                                                    title={`${activeProject.title} Demo`}
                                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                                    allow="autoplay; fullscreen"
                                                    allowFullScreen
                                                />
                                            </div>
                                            <button
                                                className={styles.expandBtn}
                                                style={{ zIndex: 10 }}
                                                onClick={() => setFullScreenVideo(true)}
                                                aria-label="Expand video"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                                </svg>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <video
                                                src={activeProject.video}
                                                className={styles.projectVideo}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                onClick={() => setFullScreenVideo(true)}
                                                style={{ cursor: 'pointer' }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML += `<div class="${styles.imagePlaceholder}"><span>Video goes here.<br/>Upload to: <b>public${activeProject.video}</b></span></div>`;
                                                }}
                                            />
                                            <button className={styles.expandBtn} onClick={() => setFullScreenVideo(true)} aria-label="Expand video">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                                </svg>
                                            </button>
                                        </>
                                    )
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        <span>Video goes here. Please upload a video (.mp4).</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Reveal>
                )}
            </div>

            {/* Full Screen Video Modal */}
            {fullScreenVideo && activeProject?.video && (
                <div className={styles.videoModal} onClick={() => setFullScreenVideo(false)}>
                    <button className={styles.closeModalBtn} onClick={() => setFullScreenVideo(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        {isDriveLink(activeProject.video) ? (
                            <iframe
                                src={getDrivePreviewLink(activeProject.video)}
                                title={`${activeProject.title} Demo Fullscreen`}
                                className={styles.fullScreenVideo}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            <video
                                src={activeProject.video}
                                className={styles.fullScreenVideo}
                                autoPlay
                                loop
                                controls
                                playsInline
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
