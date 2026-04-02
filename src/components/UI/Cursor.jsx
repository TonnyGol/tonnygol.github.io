import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Cursor.module.css';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => window.removeEventListener('mouseover', handleMouseOver);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 800,
                mass: 0.1
            }
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            backgroundColor: "rgba(0, 212, 255, 0.5)",
            border: "1px solid rgba(0, 212, 255, 0.8)",
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 800,
                mass: 0.1
            }
        }
    };

    return (
        <motion.div
            className={styles.cursor}
            variants={variants}
            animate={isHovering ? "hover" : "default"}
        />
    );
};

export default Cursor;
