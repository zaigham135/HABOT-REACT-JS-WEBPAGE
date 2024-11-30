import React from "react";

const Section5 = () => {
    const steps = [
        {
            icon: "👤",  // You can replace these with actual icons
            title: "Select Your Role and Sign Up",
            bgColor: "#E8FBFF"
        },
        {
            icon: "📝",
            title: "Buyers Post Your Requirements",
            bgColor: "white"
        },
        {
            icon: "🔍",
            title: "Review, Select, and Contact the Best Suppliers",
            bgColor: "#E8FBFF"
        },
        {
            icon: "📋",
            title: "Suppliers Complete your profile and get notified for opportunities",
            bgColor: "white"
        },
        {
            icon: "✍️",
            title: "Contact to Buyers and Share your Quote for the service",
            bgColor: "#E8FBFF"
        },
        {
            icon: "🤝",
            title: "Both the Parties can Connect and Make Business Leave a Feedback",
            bgColor: "white"
        }
    ];

    return (
        <div className="section5-wrapper">
            <div className="section5-container">
                <div className="section5-header">
                    <h2>How it works?</h2>
                    <p>
                        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
                        potential buyers, and build successful business relationships, sharing valuable feedback.
                    </p>
                </div>
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="step-card"
                            style={{ backgroundColor: step.bgColor }}
                        >
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section5;
