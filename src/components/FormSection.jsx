import React, { useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { BsCurrencyDollar, BsGeoAlt, BsGlobe } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

const FormSection = () => {
    const inputRefs = {
        statement: useRef(null),
        contract: useRef(null),
        agreement: useRef(null),
        additionalDoc: useRef(null),
    };

    const handleUploadClick = (ref) => {
        if (ref.current) ref.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) alert(`File uploaded: ${file.name}`);
    };

    const renderInputField = (label, placeholder, type = "text", defaultValue = "") => (
        <div>
            <label className="block text-gray-500 text-xs mb-1">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs pr-10"
                />
                {type === "number" && (
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 font-bold text-xs text-gray-700">
                        USD
                    </span>
                )}
            </div>
        </div>
    );

    const renderUploadBox = (label, refKey, buttonLabel = "Upload Document") => (
        <div
            className="border border-dashed border-blue-400 rounded h-28 bg-gray-100 p-3 flex flex-col justify-center items-center text-center cursor-pointer"
            onClick={() => handleUploadClick(inputRefs[refKey])}
        >
            <FiUpload className="text-blue-500 text-2xl mb-2" />
            <p className="text-xs text-gray-600 mb-1">{label}</p>
            <p className="text-xs text-gray-400">or</p>
            <button className="text-blue-500 font-semibold text-xs">{buttonLabel}</button>
            <input
                type="file"
                ref={inputRefs[refKey]}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );

    return (
        <div className="bg-zinc-50 md:p-10 lg:p-18 rounded-3xl shadow-md max-w-screen-xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                File your Claim
                <span className="text-gray-500 text-sm ml-2">(Approx 5 Minutes)</span>
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Claim Value Section */}
                <div className="space-y-4">
                    <label className="flex items-center text-sm font-bold text-gray-700">
                        <BsCurrencyDollar className="text-blue-400 mr-2 text-2xl" />
                        Claim Value
                    </label>
                    {renderInputField("Contract Value", "", "number", "100000")}
                    {renderInputField("Claim Value", "", "number", "150000")}
                    <p className="text-xs text-orange-500 mt-1 font-medium">150% of Contract Value</p>
                </div>

                {/* Place Section */}
                <div className="space-y-4">
                    <label className="flex items-center text-sm font-bold text-gray-700">
                        <BsGeoAlt className="text-blue-400 mr-2 text-2xl" />
                        Place
                    </label>
                    <input
                        type="text"
                        placeholder="Select the Place for proceedings"
                        className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs"
                    />
                    <div className="text-xs text-gray-500">
                        Is the place for the proceedings mentioned in the agreement?
                        <div className="flex space-x-2 mt-2">
                            {["Yes", "No"].map((option) => (
                                <label className="inline-flex items-center" key={option}>
                                    <input
                                        type="radio"
                                        name="place"
                                        className="form-radio text-blue-500"
                                    />
                                    <span className="ml-1">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Language Section */}
                <div className="space-y-4">
                    <label className="flex items-center text-sm font-bold text-gray-700">
                        <BsGlobe className="text-blue-400 mr-2 text-2xl" />
                        Language
                    </label>
                    <input
                        type="text"
                        placeholder="Select the Language for proceedings"
                        className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs"
                    />
                    <div className="text-xs text-gray-500">
                        Is the language for the proceedings mentioned in the agreement?
                        <div className="flex space-x-2 mt-2">
                            {["Yes", "No"].map((option) => (
                                <label className="inline-flex items-center" key={option}>
                                    <input
                                        type="radio"
                                        name="language"
                                        className="form-radio text-blue-500"
                                    />
                                    <span className="ml-1">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-gray-300 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderUploadBox("Write your Statement Here", "statement", "Upload a PDF")}
                <div className="space-y-4">
                    <label className="flex items-center text-sm font-bold text-gray-700">
                        <HiOutlineDocumentText className="text-blue-400 mr-2 text-2xl" />
                        Agreement under Disputes
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {renderUploadBox("Upload Contract", "contract")}
                        {renderUploadBox("Upload Agreement", "agreement")}
                    </div>
                </div>
                <div className="space-y-4">
                    <label className="flex items-center text-sm font-bold text-gray-700">
                        <HiOutlineDocumentText className="text-blue-400 mr-2 text-2xl" />
                        Additional Documentation
                    </label>
                    <div className="flex items-center space-x-3">
                        {renderUploadBox("", "additionalDoc")}
                        <button className="w-12 h-12 border border-gray-300 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-blue-500 text-lg font-bold">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;
