"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Code, Award, Wrench, ExternalLink, ArrowRight, ChevronDown } from 'lucide-react';

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabsRef = useRef([]);

    // Sample data - replace with your actual data
    const projects = [
        {
            title: "IntervueAI",
            description: "Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.",
            image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=IntervueAI",
            liveDemo: "https://intervueai-io.vercel.app",
            details: "/project/IntervueAI"
        },
        {
            title: "Blendy",
            description: "A social app where you can connect in real-time, log in with one click, share moments, posts instantly.",
            image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=Blendy",
            liveDemo: "https://blendy-download.vercel.app",
            details: "/project/Blendy"
        },
        {
            title: "WATCHit",
            description: "A video streaming app made for easy, personal entertainment and everything you love to binge.",
            image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=WATCHit",
            liveDemo: "https://watchit-1.onrender.com",
            details: "/project/WATCHit"
        },
        {
            title: "SecureNet Monitor",
            description: "Network monitoring tool for detecting security threats and anomalies in real-time.",
            image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=SecureNet",
            liveDemo: "#",
            details: "/project/SecureNet"
        },
        {
            title: "ThreatHunter Dashboard",
            description: "Interactive dashboard for threat hunting operations with advanced analytics.",
            image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=ThreatHunter",
            liveDemo: "#",
            details: "/project/ThreatHunter"
        },
        {
            title: "SOC Automation Tool",
            description: "Automated incident response system for Security Operations Center workflows.",
            image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=SOC+Tool",
            liveDemo: "#",
            details: "/project/SOC"
        }
    ];

    const certificates = [
        {
            title: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "2024",
            credentialId: "CEH-001-2024",
            description: "Comprehensive ethical hacking and penetration testing certification",
            badge: "https://via.placeholder.com/100x100/1e293b/60a5fa?text=CEH"
        },
        {
            title: "CompTIA Security+",
            issuer: "CompTIA",
            date: "2024",
            credentialId: "COMP001-2024",
            description: "Foundation-level security certification covering core security concepts",
            badge: "https://via.placeholder.com/100x100/1e293b/60a5fa?text=Sec+"
        },
        {
            title: "CISSP",
            issuer: "ISC2",
            date: "2024",
            credentialId: "CISSP-2024",
            description: "Advanced security certification for experienced professionals",
            badge: "https://via.placeholder.com/100x100/1e293b/60a5fa?text=CISSP"
        },
        {
            title: "AWS Security Specialty",
            issuer: "Amazon Web Services",
            date: "2024",
            credentialId: "AWS-SEC-2024",
            description: "Cloud security specialization for AWS environments",
            badge: "https://via.placeholder.com/100x100/1e293b/60a5fa?text=AWS"
        }
    ];

    const techStack = [
        { name: "Python", category: "Programming", level: 90, icon: "🐍" },
        { name: "JavaScript", category: "Programming", level: 85, icon: "🟨" },
        { name: "React", category: "Frontend", level: 80, icon: "⚛️" },
        { name: "Node.js", category: "Backend", level: 75, icon: "🟢" },
        { name: "Wireshark", category: "Security", level: 85, icon: "🦈" },
        { name: "Metasploit", category: "Security", level: 80, icon: "🔴" },
        { name: "Burp Suite", category: "Security", level: 75, icon: "🔍" },
        { name: "Nmap", category: "Security", level: 90, icon: "🗺️" },
        { name: "Splunk", category: "SIEM", level: 70, icon: "📊" },
        { name: "ELK Stack", category: "SIEM", level: 75, icon: "🔍" },
        { name: "Docker", category: "DevOps", level: 80, icon: "🐳" },
        { name: "Linux", category: "OS", level: 85, icon: "🐧" },
        { name: "Kali Linux", category: "Security", level: 90, icon: "🔒" },
        { name: "OSINT", category: "Intelligence", level: 80, icon: "🕵️" },
        { name: "Incident Response", category: "Security", level: 85, icon: "🚨" },
        { name: "Threat Hunting", category: "Security", level: 80, icon: "🎯" }
    ];

    const tabs = [
        { id: 0, name: "Projects", icon: Code },
        { id: 1, name: "Certificates", icon: Award },
        { id: 2, name: "Tools", icon: Wrench }
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

    const ProjectCard = ({ project }) => (
        <div className="group relative w-full transform transition-all duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-xl bg-white/5 dark:bg-slate-900/90 backdrop-blur-lg border border-gray-200/20 dark:border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                        <div className="pt-4 flex items-center justify-between">
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                            >
                                <span className="text-sm font-medium">Live Demo</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href={project.details}
                                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                <span className="text-sm font-medium">Details</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/50 rounded-xl transition-colors duration-300"></div>
            </div>
        </div>
    );

    const CertificateCard = ({ cert }) => (
        <div className="group relative w-full transform transition-all duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-xl bg-white/5 dark:bg-slate-900/90 backdrop-blur-lg border border-gray-200/20 dark:border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-6 z-10">
                    <div className="flex items-start gap-4">
                        <img
                            src={cert.badge}
                            alt={cert.title}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300/80 text-sm mb-2">{cert.issuer}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">Issued: {cert.date}</p>
                            <p className="text-gray-600 dark:text-gray-300/70 text-sm leading-relaxed mb-4">{cert.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">ID: {cert.credentialId}</span>
                                <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors duration-200">
                                    Verify →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const TechStackItem = ({ tech }) => (
        <div className="group relative w-full transform transition-all duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-xl bg-white/5 dark:bg-slate-900/90 backdrop-blur-lg border border-gray-200/20 dark:border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-6 z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className={`relative py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:px-[10%] px-[5%] w-full">
                {/* Header */}
                <div className="text-center pb-10">
                    <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        Portfolio Showcase
                    </h2>
                    <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                        Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                {/* Tabs */}
                <div className="relative mb-12">
                    <div className="bg-white/10 dark:bg-slate-900/50 backdrop-blur-lg border border-gray-200/20 dark:border-white/10 rounded-xl p-1 relative">
                        {/* Animated indicator */}
                        <div
                            className="absolute top-1 bottom-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transition-all duration-300 ease-out"
                            style={indicatorStyle}
                        />
                        
                        <div className="flex relative z-10">
                            {tabs.map((tab, index) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        ref={el => tabsRef.current[index] = el}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 flex items-center cursor-pointer justify-center gap-2 px-6 py-4 rounded-lg transition-all duration-300 ${
                                            activeTab === tab.id
                                                ? 'text-gray-900 dark:text-white shadow-lg'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{tab.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        {/* Projects Tab */}
                        <div className={`transition-all duration-500 ${
                            activeTab === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
                        }`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                {projects.map((project, index) => (
                                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certificates Tab */}
                        <div className={`transition-all duration-500 ${
                            activeTab === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
                        }`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {certificates.map((cert, index) => (
                                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <CertificateCard cert={cert} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack Tab */}
                        <div className={`transition-all duration-500 ${
                            activeTab === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
                        }`}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                                {techStack.map((tech, index) => (
                                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                        <TechStackItem tech={tech} />
                                    </div>
                                ))}
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