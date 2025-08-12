import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
    const [activeTab, setActiveTab] = useState("resume");
    const bgImg = "assets/bg.jpg";
    const resume = "assets/Resume/Vishal_MERN_3yr.pdf";
    const hasDownloaded = useRef(false); // Track if auto-download has happened

    useEffect(() => {
        if (!hasDownloaded.current) {
            setTimeout(() => handleDownload(), 1000); // Delay for 1s to prevent race conditions
            hasDownloaded.current = true;
        }
    }, []);

    const handleDownload = () => {
        // Force direct download
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Vishal_MERN_3yr.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
        }}>
            <div className="container-fluid px-4">
                <div className="row justify-content-center">
                    {/* Left Sidebar - Profile Section - Centered with margins */}
                    <div className="col-lg-3 col-md-4 col-sm-12 mb-4" style={{ marginTop: "100px" }}>
                        <div className="bg-white p-4 rounded-3 shadow profileSection"
                            style={{ 
                                position: "sticky", 
                                top: "30px", 
                                height: "fit-content",
                                zIndex: 1000,
                                marginTop: "20px"
                            }}>
                            <div className="text-center">
                                <div className="position-relative d-inline-block">
                                    <img src="assets/vishalImg.jpg" alt="Profile"
                                        className="border border-3 border-white shadow"
                                        style={{
                                            width: "140px", height: "155px",
                                            objectFit: "cover", marginTop: "-70px",
                                            backgroundColor: "white", borderRadius: '10px'
                                        }} />
                                </div>
                                <h4 className="fw-bold mt-3">Vishal Lengare</h4>
                                <p className="text-muted">Full Stack Developer</p>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-light p-2 rounded mt-3">
                                <div className="mb-3 d-flex align-items-center">
                                    <span className="icon-box">
                                        <i className="ri-mail-fill text-success fs-3"></i>
                                    </span>
                                    <div className="ms-3">
                                        <p className="mb-0 text-muted small">Email</p>
                                        <span className="bold">vishaltechsunset@gmail.com</span>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <span className="icon-box">
                                        <i className="ri-phone-line text-success fs-3"></i>
                                    </span>
                                    <div className="ms-3">
                                        <p className="mb-0 text-muted small">Phone</p>
                                        <span className="bold">+91 8081440364</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="icon-box">
                                        <i className="ri-map-pin-2-line text-success fs-3"></i>
                                    </span>
                                    <div className="ms-3">
                                        <p className="mb-0 text-muted small">Location</p>
                                        <span className="bold">Pune, India</span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleDownload} className="w-100 mt-3 rounded p-2 bg-emerald-400 border-0 text-white">
                                <i className="ri-download-cloud-2-line"></i> Download CV
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Content - Responsive */}
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        {/* Tab Buttons */}
                        <div className="d-flex justify-content-center justify-content-md-end mb-4" style={{ marginTop: "20px" }}>
                            <div className="tab-container shadow-sm">
                                <button className={`tab-button ${activeTab === "resume" ? "active-tab" : ""}`}
                                    onClick={() => setActiveTab("resume")}>
                                    <i className="ri-file-text-line"></i> Resume
                                </button>
                                <button className={`tab-button ${activeTab === "works" ? "active-tab" : ""}`}
                                    onClick={() => setActiveTab("works")}>
                                    <i className="ri-briefcase-line"></i> Works
                                </button>
                                <button className={`tab-button ${activeTab === "contact" ? "active-tab" : ""}`}
                                    onClick={() => setActiveTab("contact")}>
                                    <i className="ri-phone-line"></i> Contact
                                </button>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="bg-white p-4 rounded shadow-sm mb-5" style={{ minHeight: "400px" }}>
                            {activeTab === "resume" && <Resume display={true} />}
                            {activeTab === "works" && <Work />}
                            {activeTab === "contact" && <Contact />}
                        </div>
                    </div>
                </div>
            </div>

            <a href="https://wa.me/918081440364" target="_blank" rel="noopener noreferrer" className="whatsapp-float" style={{textDecoration: 'none'}}>
                <i className="ri-whatsapp-line whatsapp-icon"></i>
            </a>

            <style>{`
                .icon-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    background: #fff;
                    width: 40px;
                    height: 40px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
                }

                .tab-button {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: 500;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .active-tab {
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    transform: translateY(-2px);
                }

                .tab-container {
                    display: flex;
                    background: white;
                    padding: 12px;
                    border-radius: 15px;
                    gap: 10px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .tab-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    padding: 15px 20px;
                    font-size: 16px;
                    font-weight: 600;
                    border: none;
                    background: #f5f5f5;
                    color: #333;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    min-width: 100px;
                }

                .tab-button i {
                    font-size: 20px;
                    margin-bottom: 5px;
                }

                .active-tab {
                    background: linear-gradient(135deg, #ff416c, #ff4b2b);
                    color: white;
                    transform: scale(1.05);
                }

                .content-container {
                    background: white;
                    border-radius: 12px;
                }

                .whatsapp-float {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: 20px;
                    right: 20px;
                    background-color: #25D366;
                    color: white;
                    border-radius: 50%;
                    text-align: center;
                    font-size: 30px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    animation: pulse 1.5s infinite;
                }

                .whatsapp-icon {
                    font-size: 30px;
                }

                .whatsapp-float:hover {
                    background-color: #1ebe5d;
                    transform: scale(1.1);
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .profileSection {
                        position: relative !important;
                        top: 0 !important;
                        margin-bottom: 20px;
                        margin-top: 10px !important;
                    }
                    
                    .tab-container {
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .tab-button {
                        min-width: 80px;
                        padding: 12px 15px;
                        font-size: 14px;
                    }
                    
                    .tab-button i {
                        font-size: 18px;
                    }
                }

                @media (max-width: 576px) {
                    .tab-button {
                        min-width: 70px;
                        padding: 10px 12px;
                        font-size: 12px;
                    }
                    
                    .tab-button i {
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;