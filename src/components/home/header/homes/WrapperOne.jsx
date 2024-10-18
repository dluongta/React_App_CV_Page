import React, { useEffect, useState, useRef } from 'react';

export const WrapperOne = ({ className }) => {
    const data = [
        {
            num: "99%",
            text: "AWARDS WINNING",
        },
        {
            num: "99%",
            text: "SATISFIED CLIENTS",
        },
        {
            num: "100",
            text: "CREATIVE PROJECTS",
        },
        {
            num: "2999",
            text: "LINES OF CODE",
        },
    ];

    const [counts, setCounts] = useState(data.map(item => ({ ...item, count: 0 })));
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current); // Stop observing once visible
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Cleanup
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCounts(prevCounts => 
                    prevCounts.map((item, index) => {
                        const target = parseInt(data[index].num.replace('%', '')); // Remove % for counting
                        if (item.count < target) {
                            return { ...item, count: Math.min(item.count + 1, target) }; // Increment until the target
                        }
                        return item;
                    })
                );
            }, 10); // Adjust the speed by changing the interval time

            return () => clearInterval(interval); // Cleanup on unmount
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
}
