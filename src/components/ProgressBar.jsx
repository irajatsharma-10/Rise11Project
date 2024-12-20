import React from "react";
import { FiCheck } from "react-icons/fi";

const ProgressBar = ({ currentStep = 4 }) => {
    const steps = [
        { title: "Preliminary", step: 1 },
        { title: "Your Details", step: 2 },
        { title: "KYC", step: 3 },
        { title: "Parties", step: 4 },
        { title: "Claim", step: 5, time: "(Approx 5 Min)" },
        { title: "Review", step: 6, time: "(Approx 5 Min)" },
        { title: "Payment", step: 7, time: "(Approx 5 Min)" }
    ];

    return (
            <div className="relative flex items-center my-3 w-full">

                {/* Base Line for Grey and Connector Lines */}
                <div className="absolute top-1/2 -translate-y-1/2 left-16 w-[50%] h-1 bg-gray-300"></div>

                {steps.map((item, index) => (
                    <div key={item.step} className="relative flex-1 text-center">

                        {/* Title Above the Circle */}
                        <div
                            className={`absolute left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 z-20 text-nowrap
                                ${item.step <= 4 ? "top-[-1.5rem]" : "top-[-0.1rem]"}`}
                        >
                            {item.title}
                        </div>

                        {/* Circle Container */}
                        <div
                            className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center relative z-30 ${currentStep >= item.step
                                ? "bg-blue-500 text-white" // Blue circle with checkmark for currentStep >= item.step
                                : "border-2 border-gray-300 text-gray-400 bg-white mt-5" // Empty circle for steps ahead
                                }`}
                            style={{
                                position: "relative",
                                transform: "translateX(-50%)", // Center the circle horizontally
                                zIndex: 30,
                            }}
                        >
                            {currentStep >= item.step &&
                                <FiCheck className="text-white text-sm" /> // Checkmark for completed steps
                            }
                        </div>

                        {/* Time Text (if available) */}
                        {item.time && (
                            <div className="mt-1 text-xs text-gray-500">
                                {item.time}
                            </div>
                        )}

                        {/* Progress Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 left-1/2 w-full h-1 ${currentStep > item.step + 1
                                    ? "bg-blue-500" // Solid blue for completed steps
                                    : currentStep === item.step + 1
                                        ? "border-t-4 border-dashed border-blue-500" // Dotted line for current step
                                        : "bg-gray-300" // Grey line for steps ahead
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>
    );
};

export default ProgressBar;
