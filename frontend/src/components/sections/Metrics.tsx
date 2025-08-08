import React from "react";
import { useEffect } from "react";
const promise =[
    {
        id:1,
        title:"Ethical Raising",
        description:"Every chicken enjoys 8+ hours of daily outdoor grazing across our 5-acre Kiambu farm, resulting in superior texture and flavor."

    },
    {
        id:2,
        title:"Quality Control",
        description:"From weekly salmonella testing to UV-sanitized processing areas, we exceed Kenya Bureau of Standards requirements."

    },
    {
        id:3,
        title:"Farm Fresh Delivery",
        description:"Nairobi customers receive chickens processed the same morning, with our cold-chain logistics maintaining 4°C from farm to doorstep."

    },
]


const metrics =[
    {
        id:1,
        title:"Chickens Raised Monthly",
        description:"Humanely raised with 8+ hours of daily grazing",
        count:5000
    },
    {
        id:2,
        title:"Chickens Raised Monthly",
        description:"Based on 2023 customer surveys",
        count:98
    },
    {
        id:3,
        title:"Hour Farm-to-Table Freshness",
        description:"For Nairobi metro orders",
        count:24
    },
    {
        id:4,
        title:"Years of Trust",
        description:"Serving Kenyan families since 2019",
        count:5
    }
]
const Metrics:React.FC =() =>{
    useEffect(() => {
        const metricNumbers = document.querySelectorAll('.metric-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target as HTMLElement;
                    const target = Number(targetElement.getAttribute('data-count'));
                    const duration = 2000;
                    const start = 0;
                    const increment = target / (duration / 16);
        
                    let current = start;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            clearInterval(timer);
                            current = target;
                            entry.target.textContent = target.toString(); // Ensure final value is exact
                        } else {
                            entry.target.textContent = Math.floor(current).toString();
                        }
                    }, 16);
        
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        metricNumbers.forEach(number => {
            if (number) observer.observe(number);
        });

        // Cleanup function
        return () => {
            metricNumbers.forEach(number => {
                if (number) observer.unobserve(number);
            });
            observer.disconnect();
        };
    }, []);
    return(
        <>
        <div className="gallery-content w-[95%] mx-auto bg-metric p-6 py-8">
            <h3 className="text-green text-3xl font-bold mb-3">Our Farming Promise</h3>
            <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-4">
                {promise.map(item =>(
                    <div key={item.id} className="content-item " data-aos="fade-up">
                        <h4 className="text-orangered text-start font-bold text-xl">{item.title}</h4>
                        <p className="text-start">{item.description}</p>
                    </div>
                ))}
                
            </div>
        </div>
        <div className="gallery-content bg-metric p-6 py-12 mt-10">
        <div className="metrics-section">
            <h3 className="text-black font-bold text-3xl mb-6">Kaura Chicken By The Numbers</h3>
            
            <div className="metrics-grid grid grid-cols-1 lg:grid-cols-4 gap-3 md:grid-cols-2">
                {metrics.map(item =>(
                <div key={item.id} className="metric-card p-6 bg-white rounded-lg shadow-[0_4px_12px_rgba(46,93,35,0.1)]" data-aos="fade-up">
                     <div className="metric-number text-[2.5rem] font-bold text-[#2E5D23] mb-2" data-count={item.count}>0</div>
                     <div className="metric-label font-bold text-xl">{item.title}</div>
                     <div className="metric-desc">{item.description}</div>
                 </div>
                ))}
            </div>
        </div>
        </div>
        </>
    )
}
export default Metrics