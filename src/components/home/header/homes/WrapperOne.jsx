import React, { useEffect, useState, useRef } from 'react';

export const WrapperOne = ({ className }) => {
    const data = [
        { num: "99%", text: "AWARDS WINNING" },
        { num: "99%", text: "SATISFIED CLIENTS" },
        { num: "20", text: "CREATIVE PROJECTS" },
        { num: "2999", text: "LINES OF CODE" },
    ];

    const [counts, setCounts] = useState(data.map(item => ({ ...item, count: 0 })));
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

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCounts(prevCounts => 
                    prevCounts.map((item, index) => {
                        const target = parseInt(data[index].num.replace('%', ''));
                        if (item.text === "LINES OF CODE") {
                            // Increase count by 100 each second for "LINES OF CODE"
                            return { ...item, count: Math.min(item.count + 150, target) };
                        } else if (item.text === "CREATIVE PROJECTS") {
                            return { ...item, count: Math.min(item.count + 1, target) };

                        } else {
                            // Increase by 1 for others
                            if (item.count < target) {
                                return { ...item, count: Math.min(item.count + 5, target) };
                            }
                            return item;
                        }
                    })
                );
            }, 100);

            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <section ref={sectionRef} className={`branding wrapperOne ${className}`}>
            <div className="container grid1">
                {counts.map((val, index) => (
                    <div className="box" key={index}>
                        <h1>{val.count}{val.text === "AWARDS WINNING" || val.text === "SATISFIED CLIENTS" ? '%' : ''}</h1>
                        <p>{val.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
