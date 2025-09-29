import React, { useEffect, useRef, useState } from "react";
import styles from "./WrapperOne.module.css"; // CSS Module

// ➤ Hàm random từ min đến max
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ➤ Dữ liệu
const data = [
    { num: "99%", text: "AWARDS WINNING" },
    { num: "99%", text: "SATISFIED CLIENTS" },
    { num: "20", text: "CREATIVE PROJECTS" },
    { num: "2999", text: "LINES OF CODE" },
];

// ➤ Các chữ số từ 0 đến 9
const digits = Array.from({ length: 10 }, (_, i) => i);

// ➤ Cột chữ số cuộn
const DigitColumn = ({ finalDigit, delay, stopOrder }) => {
    const [position, setPosition] = useState(random(0, 9));
    const intervalRef = useRef(null);
    const totalSteps = useRef(random(15, 25) + stopOrder * 5); // số bước nhiều hơn với các số đứng sau

    useEffect(() => {
        let count = 0;

        intervalRef.current = setInterval(() => {
            setPosition(prev => (prev + 1) % 10);
            count++;

            if (count >= totalSteps.current) {
                clearInterval(intervalRef.current);
                setPosition(finalDigit);
            }
        }, 80 + stopOrder * 10); // delay tăng dần theo stopOrder

        return () => clearInterval(intervalRef.current);
    }, [finalDigit, stopOrder]);

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

// ➤ Component hiển thị số hoàn chỉnh
const AnimatedNumber = ({ number }) => {
    const hasPercent = number.includes("%");
    const cleanNumber = number.replace("%", "");
    const digitsArr = cleanNumber.split("").map(d => parseInt(d));

    return (
        <h1 className={styles.animatedNumber}>
            {digitsArr.map((d, i) => (
                <DigitColumn key={i} finalDigit={d} stopOrder={i} />
            ))}
            {hasPercent && <span className={styles.symbol}>%</span>}
        </h1>
    );
};

// ➤ Component chính
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
