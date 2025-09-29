import React, { useEffect, useRef, useState } from "react";
import styles from "./WrapperOne.module.css"; // Sử dụng CSS Module

const data = [
    { num: "99%", text: "AWARDS WINNING" },
    { num: "99%", text: "SATISFIED CLIENTS" },
    { num: "20", text: "CREATIVE PROJECTS" },
    { num: "2999", text: "LINES OF CODE" },
];

const digits = Array.from({ length: 10 }, (_, i) => i);

const DigitColumn = ({ finalDigit, delay }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            setPosition(prev => (prev + 1) % 10);
            current++;
            if (current > 15 + finalDigit + delay / 100) {
                clearInterval(interval);
                setPosition(finalDigit);
            }
        }, 100); // Điều chỉnh tốc độ ở đây

        return () => clearInterval(interval);
    }, [finalDigit, delay]);

    return (
        <div className={styles.digitColumn}>
            <div
                className={styles.digitScroll}
                style={{
                    transform: `translateY(-${position * 1.2}em)`,
                    transition: "transform 0.15s ease-out",
                }}
            >
                {digits.map((d, idx) => (
                    <div key={idx} className={styles.digit}>
                        {d}
                    </div>
                ))}
            </div>
        </div>
    );
};

const AnimatedNumber = ({ number }) => {
    const hasPercent = number.includes("%");
    const cleanNumber = number.replace("%", "");
    const digitsArr = cleanNumber.split("").map(d => parseInt(d));

    return (
        <h1 className={styles.animatedNumber}>
            {digitsArr.map((d, i) => (
                <DigitColumn key={i} finalDigit={d} delay={i * 300} />
            ))}
            {hasPercent && <span className={styles.symbol}>%</span>}
        </h1>
    );
};

export const WrapperOne = ({ className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`${styles.wrapperOne} ${className}`}>
            <div className={styles.container}>
                {isVisible &&
                    data.map((val, index) => (
                        <div className={styles.box} key={index}>
                            <AnimatedNumber number={val.num} />
                            <p className={styles.label}>{val.text}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
};
