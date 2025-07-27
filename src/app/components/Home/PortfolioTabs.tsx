"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Code, Award, Wrench, ExternalLink, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/app/hooks/useTheme';

const PortfolioTabs = () => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [showAllTools, setShowAllTools] = useState(false);
    
    // Mobile carousel states (keeping for certificates)
    const [currentCertIndex, setCertCertIndex] = useState(0);
    
    const tabsRef = useRef([]);

    // Single project data - replace with your actual project
    const projects = [
    {
        title: "Integrated Cyber Defence Environment",
        description: "Integrated Cyber Defence Environment (ICDE) is a virtualized blue team lab simulating real-world enterprise security using AD, SIEM, SOAR, IDS, honeypots, and vulnerability management tools for proactive threat detection and response.",
        image: "/icde.png",
        githubLink: "https://github.com/sudarshan-rangappa/Integrated-Cyber-Defence-Environment.lab.git",
        category: "LAB"
    }
];


    // Your existing certificates and techStack arrays remain the same
    const certificates = [
        {
            title: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "Jan 2023",
            credentialId: "ECC6238917054",
            description: "Comprehensive ethical hacking and penetration testing certification",
            badge: "/CEH_2E345519D3F7.png",
            verifyLink: "https://drive.google.com/file/d/1GkKMUh5BsZ0s9CIRRPoQTrq6M4IWyooC/view?usp=drive_link"
        },
        {
            title: "Open Source Intelligence",
            issuer: "Basel Institute On Governance",
            date: "June 2025",
            credentialId: "N/A",
            description: "Fundamentals of open-source intelligence gathering and analysis techniques.",
            badge: "/Basel-icon.png",
            verifyLink: "https://drive.google.com/file/d/1q0QfwW1JYuPWSss6OX26-n8HJlgc_c9Y/view?usp=drive_link"
        },
        {
            title: "Fundamentals Of Deep Learning",
            issuer: "NVIDIA",
            date: "Dec 2023",
            credentialId: "N/A",
            description: "Introduction to deep learning concepts, neural networks, and model training using NVIDIA frameworks.",
            badge: "/Nvidia_logo.svg",
            verifyLink: "https://drive.google.com/file/d/1q0QfwW1JYuPWSss6OX26-n8HJlgc_c9Y/view?usp=drive_link"
        },
        {
            title: "Cyber Threat Intelligence 101",
            issuer: "ARCx",
            date: "July 2025",
            credentialId: "N/A",
            description: "Basics of cyber threat intelligence, including threat actor profiling, TTP analysis, and intelligence lifecycle.",
            badge: "/stream_photo_526acdcc_227edd04cfeacc0a75ae2719adf223f0f1fed6e3.webp",
            verifyLink: "https://drive.google.com/file/d/19yc59HfKLml43eWuXXbg-y_uOXn43_yu/view?usp=drive_link"
        }
    ];

    const techStack = [
        { name: "Aircrack-ng", category: "WiFi Security", level: 90, icon: "/aircrack-ng-logo.svg" },
        { name: "Binwalk", category: "Binary Analysis", level: 85, icon: "/binwalk3-logo.svg" },
        { name: "BloodHound", category: "AD Enumeration", level: 80, icon: "/bloodhound-logo.svg" },
        { name: "SQLMap", category: "Database Security", level: 80, icon: "/sqlmap-logo.svg" },
        { name: "Ghidra", category: "Reverse Engineering", level: 75, icon: "/ghidra-logo.svg" },
        { name: "Wireshark", category: "Network Analysis", level: 85, icon: "/wireshark-logo.svg" },
        { name: "Metasploit", category: "Exploitation", level: 80, icon: "/metasploit-framework-logo.svg" },
        { name: "Burp Suite", category: "Web Security", level: 75, icon: "/burpsuite-logo.svg" },
        { name: "Nmap", category: "Network Scanning", level: 90, icon: "/nmap-logo.svg" },
        { name: "Splunk", category: "SIEM", level: 70, icon: "/splunk.svg" },
        { name: "Wazuh", category: "SIEM", level: 75, icon: "/WAZUH.png" },
        { name: "Docker", category: "Containerization", level: 80, icon: "/docker-icon.svg" },
        { name: "Maltego", category: "OSINT", level: 85, icon: "/maltego-logo.svg" },
        { name: "theHarvester", category: "Information Gathering", level: 90, icon: "/theharvester-logo.svg" },
        { name: "Sherlock", category: "OSINT", level: 80, icon: "/sherlock-logo.svg" },
        { name: "Proxychains", category: "Anonymity", level: 85, icon: "/proxychains-ng-logo.svg" },
        { name: "John The Ripper", category: "Password Cracking", level: 80, icon: "/john-the-ripper.svg" },
        { name: "Hydra", category: "Brute Force", level: 80, icon: "/hydra-logo.svg" },
        { name: "HashCat", category: "Password Recovery", level: 80, icon: "/hashcat-logo.svg" },
        { name: "BetterCAP", category: "Network Security", level: 80, icon: "/bettercap-logo.svg" },
        { name: "OpenVAS", category: "Vulnerability Assessment", level: 80, icon: "/openvas.svg" },
        { name: "Nessus", category: "Vulnerability Scanner", level: 80, icon: "/nessus.svg" },
        { name: "Autopsy", category: "Digital Forensics", level: 80, icon: "/autopsy-logo.svg" },
        { name: "Obsidian", category: "Documentation", level: 80, icon: "/2023_Obsidian_logo.svg" }
    ];

    const tabs = [
        { id: 0, name: "Projects", icon: Code },
        { id: 1, name: "Certifications", icon: Award },
        { id: 2, name: "Arsenal", icon: Wrench }
    ];

    useEffect(() => {
        setIsVisible(true);
        updateIndicator();
    }, []);

    useEffect(() => {
        updateIndicator();
    }, [activeTab]);

    const updateIndicator = () => {
        const activeTabElement = tabsRef.current[activeTab];
        if (activeTabElement) {
            const { offsetLeft, offsetWidth } = activeTabElement;
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    };

    // Mobile navigation functions for certificates
    const nextCert = () => {
        setCertCertIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevCert = () => {
        setCertCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 4);
    const displayedTools = showAllTools ? techStack : techStack.slice(0, 9); // 3x3 grid for mobile

    const ProjectCard = ({ project }) => (
    <div className="group relative w-full transform transition-all duration-300 hover:scale-105">
        <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_var(--theme-glow)]">
            <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, var(--theme-primary)/20, var(--theme-accent)/10)` }}
            ></div>
            <div className="relative p-5 z-10">
                <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-mono bg-black/70 text-white">
                        {project.category}
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">
                        {project.title}
                    </h3>
                    {/* Removed line-clamp-2 to show full description */}
                    <p className="text-white/70 text-sm leading-relaxed">
                        {project.description}
                    </p>
                    {/* Centered GitHub button since Live Demo is removed */}
                    <div className="pt-4 flex justify-center">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-105"
                        >
                            <span className="text-sm font-medium">View on GitHub</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


    const CertificateCard = ({ cert }) => {
        const handleVerifyClick = () => {
            if (cert.verifyLink) {
                window.open(cert.verifyLink, '_blank');
            }
        };

        return (
            <div className="group relative w-full transform transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_var(--theme-glow)]">
                    <div 
                        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ background: `linear-gradient(135deg, var(--theme-primary)/20, var(--theme-accent)/10)` }}
                    ></div>
                    <div className="relative p-6 z-10">
                        <div className="flex items-start gap-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                                <img
                                    src={cert.badge}
                                    alt={cert.title}
                                    className="w-12 h-12 object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs">CERT</div>';
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                                <p className="text-white/70 text-sm mb-2">{cert.issuer}</p>
                                <p className="text-white/50 text-xs mb-3">Issued: {cert.date}</p>
                                <p className="text-white/60 text-sm leading-relaxed mb-4">{cert.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/40 font-mono">ID: {cert.credentialId}</span>
                                    <button 
                                        onClick={handleVerifyClick}
                                        className="text-sm font-medium px-3 py-1 rounded transition-all duration-200 hover:scale-105"
                                        style={{ 
                                            color: 'var(--theme-accent)',
                                            backgroundColor: 'var(--theme-primary)/20',
                                            border: `1px solid var(--theme-accent)/30`
                                        }}
                                    >
                                        Verify →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Mobile-optimized tool icon component
    const MobileToolIcon = ({ tech }) => (
        <div className="group relative transform transition-all duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--theme-glow)]">
                <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, var(--theme-primary)/20, var(--theme-accent)/10)` }}
                ></div>
                <div className="relative p-4 z-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                            <Image 
                                src={tech.icon}
                                width={32}
                                height={32}
                                alt={tech.name}
                                className="object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs">${tech.name.charAt(0)}</div>`;
                                }}
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xs font-semibold text-white truncate">{tech.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const TechStackItem = ({ tech }) => (
        <div className="group relative w-full transform transition-all duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--theme-glow)]">
                <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, var(--theme-primary)/20, var(--theme-accent)/10)` }}
                ></div>
                <div className="relative p-4 z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                            <Image 
                                src={tech.icon}
                                width={32}
                                height={32}
                                alt={tech.name}
                                className="object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs">${tech.name.charAt(0)}</div>`;
                                }}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-white truncate">{tech.name}</h3>
                            <p className="text-white/60 text-xs truncate">{tech.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ViewMoreButton = ({ onClick, isExpanded, count, total, type }) => (
        <div className="col-span-full flex justify-center mt-6">
            <button
                onClick={onClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg backdrop-blur-lg border transition-all duration-300 hover:scale-105 active:scale-95 font-medium"
                style={{
                    backgroundColor: 'var(--theme-primary)/20',
                    borderColor: 'var(--theme-accent)/30',
                    color: 'var(--theme-accent)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--theme-primary)/30';
                    e.target.style.borderColor = 'var(--theme-accent)/50';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--theme-primary)/20';
                    e.target.style.borderColor = 'var(--theme-accent)/30';
                }}
            >
                <span>
                    {isExpanded ? `Show Less` : `View More ${type} (${total - count} more)`}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );

    return (
        <section 
            id="projects-section"
            className={`relative py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center pb-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Portfolio <span style={{ color: 'var(--theme-accent)' }}>Showcase</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
                        Explore my journey through projects, certifications, and technical expertise. 
                        Each section represents a milestone in my cybersecurity career path.
                    </p>
                </div>

                {/* Tabs */}
                <div className="relative mb-12">
                    <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-xl p-1 relative overflow-hidden">
                        <div
                            className="absolute top-1 bottom-1 rounded-lg transition-all duration-300 ease-out"
                            style={{
                                ...indicatorStyle,
                                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-accent))`,
                                boxShadow: `0 4px 15px var(--theme-glow)`
                            }}
                        />
                        
                        <div className="flex relative z-10">
                            {tabs.map((tab, index) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        ref={el => tabsRef.current[index] = el}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 flex items-center justify-center gap-2 px-3 md:px-6 py-3 md:py-4 rounded-lg transition-all duration-300 font-medium ${
                                            activeTab === tab.id
                                                ? 'text-white shadow-lg'
                                                : 'text-white/60 hover:text-white/90'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                        <span className="text-sm md:text-base">{tab.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        {/* Projects Tab - Single Project, No Carousel Needed */}
                        <div className={`transition-all duration-500 ${
                            activeTab === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
                        }`}>
                            <div className="flex justify-center mt-8">
                                <div className="w-full max-w-md md:max-w-lg">
                                    <ProjectCard project={projects[0]} />
                                </div>
                            </div>
                        </div>

                        {/* Certificates Tab */}
                        <div className={`transition-all duration-500 ${
                            activeTab === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
                        }`}>
                            {/* Mobile View - Single Certificate Carousel */}
                            <div className="md:hidden mt-8">
                                <div className="relative">
                                    <CertificateCard cert={certificates[currentCertIndex]} />
                                    
                                    {/* Navigation buttons */}
                                    <div className="flex justify-between items-center mt-4">
                                        <button
                                            onClick={prevCert}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-lg border transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: 'var(--theme-primary)/20',
                                                borderColor: 'var(--theme-accent)/30',
                                                color: 'var(--theme-accent)'
                                            }}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Previous
                                        </button>
                                        
                                        <div className="flex gap-2">
                                            {certificates.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                        index === currentCertIndex 
                                                            ? 'bg-white' 
                                                            : 'bg-white/30'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        
                                        <button
                                            onClick={nextCert}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-lg border transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: 'var(--theme-primary)/20',
                                                borderColor: 'var(--theme-accent)/30',
                                                color: 'var(--theme-accent)'
                                            }}
                                        >
                                            Next
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop View - Grid Layout */}
                            <div className="hidden md:grid grid-cols-2 gap-6 mt-8">
                                {displayedCertificates.map((cert, index) => (
                                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <CertificateCard cert={cert} />
                                    </div>
                                ))}
                                {certificates.length > 4 && (
                                    <ViewMoreButton
                                        onClick={() => setShowAllCertificates(!showAllCertificates)}
                                        isExpanded={showAllCertificates}
                                        count={4}
                                        total={certificates.length}
                                        type="Certificates"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Tech Stack Tab */}
                        <div className={`transition-all duration-500 ${
                            activeTab === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
                        }`}>
                            {/* Mobile View - 3x3 Grid with Icons Only */}
                            <div className="md:hidden mt-8">
                                <div className="grid grid-cols-3 gap-4">
                                    {displayedTools.map((tech, index) => (
                                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                            <MobileToolIcon tech={tech} />
                                        </div>
                                    ))}
                                </div>
                                {techStack.length > 9 && (
                                    <ViewMoreButton
                                        onClick={() => setShowAllTools(!showAllTools)}
                                        isExpanded={showAllTools}
                                        count={9}
                                        total={techStack.length}
                                        type="Tools"
                                    />
                                )}
                            </div>

                            {/* Desktop View - Full Info Grid */}
                            <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                                {(showAllTools ? techStack : techStack.slice(0, 16)).map((tech, index) => (
                                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                        <TechStackItem tech={tech} />
                                    </div>
                                ))}
                                {techStack.length > 16 && (
                                    <ViewMoreButton
                                        onClick={() => setShowAllTools(!showAllTools)}
                                        isExpanded={showAllTools}
                                        count={16}
                                        total={techStack.length}
                                        type="Tools"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default PortfolioTabs;
