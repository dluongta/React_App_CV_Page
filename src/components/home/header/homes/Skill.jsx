import React, { useState, useEffect, useRef } from 'react';

export const Skill = ({ className }) => {
    // 👇 Custom hook dùng để phát hiện khi phần tử vào vùng nhìn thấy (in-view)
    const useInView = () => {
        const ref = useRef(null);
        const [inView, setInView] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                },
                { threshold: 0.3 }
            );

            if (ref.current) observer.observe(ref.current);
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        }, []);

        return [ref, inView];
    };

    const Progress = ({ done, title }) => {
        const [ref, inView] = useInView();
        const [style, setStyle] = useState({
            width: '0%',
            opacity: 0,
        });

        useEffect(() => {
            if (inView) {
                setStyle({
                    width: `${done}%`,
                    opacity: 1,
                });
            }
        }, [inView, done]);

        return (
            <div className="progress" ref={ref}>
                <div className="progress-done" style={style}>
                    <span>{title}</span>
                    <span>{done}%</span>
                </div>
            </div>
        );
    };


    const data = [
        {
            title: "Every Day is a New Challenge",
            para: "I am a programmer who skilled at Web Developer, Android Developer.",
            para1: "I also learning about Artificial Intelligence And Hardware.",
        },
    ];

    return (
        <section className={`skill ${className}`}>
            <div className="container">
                <div className="heading">
                    <h3>WHY CHOOSE ME</h3>
                    <h1>Some of my skills</h1>
                </div>

                <div className="content flex">
                    <div className="left topMargin">
                        <Progress done="80" title="HTML" />
                        <Progress done="90" title="CSS" />
                        <Progress done="90" title="JAVASCRIPT" />
                        <Progress done="80" title="REACT JS" />
                    </div>

                    <div className="right mtop">
                        {data.map((val, index) => (
                            <div key={index}>
                                <h1>{val.title}</h1>
                                <p>{val.para}</p>
                                <p>{val.para1}</p>
                                <button className="primary-btn btn-led">
                                    Contact Me
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="timeline-section">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>2021 - Bắt đầu học HTML/CSS</h4>
                                <p>Nắm vững kiến thức nền tảng về cấu trúc và thiết kế web.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>2022 - Học JavaScript</h4>
                                <p>Phát triển kỹ năng logic và làm việc với hoạt động, hiệu ứng.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>2023 - React JS & API</h4>
                                <p>Xây dựng ứng dụng và làm việc với REST API.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>2024 - Nâng cao & AI</h4>
                                <p>Bắt đầu tìm hiểu về trí tuệ nhân tạo, kết hợp phần mềm và phần cứng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
