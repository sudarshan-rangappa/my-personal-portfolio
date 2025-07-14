"use client";
import React, { useState, useEffect } from "react";
import { Shield, Mail, Download, Search, User } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";
import DecryptedText from "../DecryptedText";

const HeroSection = () => {
	const { theme } = useTheme(); // Use global theme instead of prop
	const [typedText, setTypedText] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	const subtitles = [
		"Cybersecurity Enthusiast",
		"Blue Team Specialist",
		"Security Operations Analyst",
		"Threat Hunter",
		"SOC Analyst"
	];

	// Terminal log lines data
	const logLines = [
		"[ALERT] Critical: Unauthenticated RCE attempt on server SRV01 from 10.211.55.3",
		"[INFO] System integrity scan initiated for all endpoints.",
		"[WARN] Multiple (5) failed login attempts for user 'admin' on WEBAPP03.",
		"[INFO] Log analysis pipeline processed 1.2M events in the last hour.",
		"[DEBUG] Executing playbook 'PB-007-PhishingLinkDetected' for alert ID #ALRT-58921.",
		"[INFO] Security patch KB5001234 successfully deployed to 98% of workstations.",
		"[ALERT] High: Anomalous outbound C2 traffic detected from workstation WKSTN-102 (192.168.1.115) to bad.actor.domain:4444",
		"[INFO] Honeypot 'HoneySSH' captured credentials from IP 203.0.113.45 - IOCs logged.",
		"[WARN] Brute force attack (200 attempts/min) on VPN gateway blocked from 172.16.23.12.",
		"[INFO] Daily configuration backup for core routers and firewalls verified successfully.",
		"[DEBUG] SIEM correlation rule 'Suspicious PowerShell Execution' triggered 3 times.",
		"[ALERT] Medium: Potential data exfiltration pattern observed via DNS tunneling from DBSRV01.",
		"[INFO] SOC escalation procedure initiated for critical incident #INC-2025-05-07-003.",
		"[WARN] Unpatched vulnerability CVE-2025-9999 (Severity: High) detected on 3 internal servers.",
		"[INFO] Firewall policy update #FPOL-2025-05-07-B applied globally.",
		"[DEBUG] Endpoint Detection & Response (EDR) agent successfully deployed to 25 new virtual machines.",
		"[ALERT] Low: Known malware signature 'Generic.Trojan.Downloader' quarantined on WKSTN-042.",
		"[INFO] Intrusion Prevention System (IPS) blocked 15 unique attack signatures in the last 24 hours.",
		"[WARN] Unauthorized software 'unknown_p2p_client.exe' detected on user 'j.doe' machine.",
		"[INFO] Security awareness training module completed by 92% of employees this quarter."
	];

	// State for animated log lines
	const [animatedLogs, setAnimatedLogs] = useState<Array<{
		id: number;
		text: string;
		left: string;
		animationDuration: string;
		animationDelay: string;
		color: string;
		lane: number;
	}>>([]);

	// Function to get log color based on content
	const getLogColor = (logText: string) => {
		if (logText.includes('[ALERT]') || logText.includes('[WARN]')) {
			return "#ef4444"; // red-500
		}
		return getComputedStyle(document.documentElement).getPropertyValue('--theme-accent').trim() || "#60a5fa";
	};

	// Function to create animated log lines
	const createLogLines = () => {
		const newLogs = [];
		const lanes = 8; // Number of vertical lanes
		const usedLanes = new Set<number>();

		for (let i = 0; i < 12; i++) { // Reduced to 12 logs for better spacing
			const randomLog = logLines[Math.floor(Math.random() * logLines.length)];

			// Assign to available lane
			let lane: number;
			do {
				lane = Math.floor(Math.random() * lanes);
			} while (usedLanes.has(lane) && usedLanes.size < lanes);

			usedLanes.add(lane);

			const leftPosition = (lane * (100 / lanes)) + (Math.random() * (100 / lanes * 0.8)); // Add some variance within lane

			newLogs.push({
				id: Date.now() + i,
				text: randomLog,
				left: `${Math.min(leftPosition, 85)}%`, // Ensure it doesn't go off screen
				animationDuration: `${12 + Math.random() * 16}s`, // 12-28 seconds
				animationDelay: `${i * 0.8 + Math.random() * 2}s`, // Stagger start times
				color: getLogColor(randomLog),
				lane: lane
			});
		}
		setAnimatedLogs(newLogs);
	};

	// Initialize and update log lines
	useEffect(() => {
		createLogLines();
		const interval = setInterval(createLogLines, 20000);
		return () => clearInterval(interval);
	}, [theme]); // Updated to use theme instead of selectedTheme

	// Typing animation effect
	useEffect(() => {
		let currentIndex = 0;
		let currentText = "";
		let isDeleting = false;
		let subtitleIndex = 0;

		const typeSpeed = 100;
		const deleteSpeed = 50;
		const pauseTime = 2000;

		const type = () => {
			const currentSubtitle = subtitles[subtitleIndex];

			if (isDeleting) {
				currentText = currentSubtitle.substring(0, currentText.length - 1);
			} else {
				currentText = currentSubtitle.substring(0, currentText.length + 1);
			}

			setTypedText(currentText);

			if (!isDeleting && currentText === currentSubtitle) {
				setTimeout(() => {
					isDeleting = true;
					setTimeout(type, deleteSpeed);
				}, pauseTime);
			} else if (isDeleting && currentText === "") {
				isDeleting = false;
				subtitleIndex = (subtitleIndex + 1) % subtitles.length;
				setTimeout(type, typeSpeed);
			} else {
				setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
			}
		};

		type();
	}, []);

	// Fade in animation on mount
	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section
			id="home"
			className={`relative min-h-screen flex items-center py-20 transition-all duration-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}
		>
			{/* Animated Terminal Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-0 bg-black/30"></div>
				{animatedLogs.map((log) => (
					<div
						key={log.id}
						className="absolute top-0 font-mono text-xs opacity-20 whitespace-nowrap animate-terminal-scroll"
						style={{
							left: log.left,
							animationDuration: log.animationDuration,
							animationDelay: log.animationDelay,
							color: log.color,
							transform: 'translateY(-100%)',
							zIndex: log.lane, // Use lane as z-index for layering
							maxWidth: '400px', // Limit max width
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}}
					>
						{log.text}
					</div>
				))}
			</div>

			{/* Main Content */}
			<div className="relative z-10 container mx-auto px-6">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					{/* Hero Text Content */}
					<div className="flex-1 text-center lg:text-left max-w-2xl">
						{/* Terminal-style greeting */}
						<div
							className="inline-block font-mono text-sm bg-black/40 px-4 py-2 rounded-lg mb-6 backdrop-blur-sm border border-white/10"
							style={{ color: 'var(--theme-accent)' }}
						>
							<span className="text-white/70">$</span> whoami
						</div>

						{/* Main title */}
						<div>
							<DecryptedText
								key={`blue-${theme}`}
								className={"text-5xl lg:text-7xl font-bold text-white leading-tight"}
								parentClassName={"text-5xl lg:text-7xl font-bold text-white leading-tight"}
								text={"Sudarshan"}
								speed={200}
								sequential={"true"}
								animateOn={"view"}
							/>
						</div>
						<div>
							<DecryptedText
								key={`red-${theme}`}
								className={"text-4xl lg:text-6xl leading-[1.2]"}
								parentClassName={"text-4xl lg:text-6xl leading-[1.2]"}
								text={"Rangappa"}
								speed={200}
								sequential={"true"}
								animateOn={"view"}
								style={{ color: 'var(--theme-accent)' }}
							/>
						</div>

						{/* Animated subtitle */}
						<h2 className="text-2xl lg:text-3xl font-semibold text-white/90 mb-6 h-12 flex items-center justify-center lg:justify-start">
							<span style={{ color: 'var(--theme-accent)' }}>
								{typedText}
								<span className="animate-pulse">|</span>
							</span>
						</h2>

						{/* Description */}
						<p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
							Building resilient cyber defense environments through hands-on security operations
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
							<a
								href="#projects"
								className="inline-flex items-center gap-3 px-5 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
								style={{
									backgroundColor: 'var(--theme-primary)',
									boxShadow: '0 4px 20px var(--theme-glow)'
								}}
								onMouseEnter={(e) => {
									e.target.style.backgroundColor = 'var(--theme-primary-dark)';
									e.target.style.boxShadow = '0 8px 30px var(--theme-shadow)';
								}}
								onMouseLeave={(e) => {
									e.target.style.backgroundColor = 'var(--theme-primary)';
									e.target.style.boxShadow = '0 4px 20px var(--theme-glow)';
								}}
							>
								<Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
								Explore My Work
							</a>

							<a
								href="#contact"
								className="inline-flex items-center gap-3 px-8 py-4 border-2 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
								style={{
									borderColor: 'var(--theme-primary)',
									color: 'var(--theme-accent)'
								}}
								onMouseEnter={(e) => {
									e.target.style.backgroundColor = 'var(--theme-primary)';
									e.target.style.color = 'white';
								}}
								onMouseLeave={(e) => {
									e.target.style.backgroundColor = 'transparent';
									e.target.style.color = 'var(--theme-accent)';
								}}
							>
								<Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
								Contact Me
							</a>

							<a
								href="Assets/Sudarshan-Rangappa_resume.pdf"
								download
								className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
								aria-label="Download Sudarshan Rangappa's Resume"
								style={{
									backgroundColor: 'var(--theme-primary)',
									boxShadow: '0 4px 20px var(--theme-glow)'
								}}
								onMouseEnter={(e) => {
									e.target.style.backgroundColor = 'var(--theme-primary-dark)';
									e.target.style.boxShadow = '0 8px 30px var(--theme-shadow)';
								}}
								onMouseLeave={(e) => {
									e.target.style.backgroundColor = 'var(--theme-primary)';
									e.target.style.boxShadow = '0 4px 20px var(--theme-glow)';
								}}
							>
								<Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
								Download Resume
							</a>
						</div>

						{/* Seeking Badge */}
						<div
							className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-sm rounded-full border text-white font-medium relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-pulse"
							style={{
								background: `linear-gradient(to right, var(--theme-primary), var(--theme-primary-dark))`,
								borderColor: 'var(--theme-primary-light)',
								boxShadow: '0 4px 15px var(--theme-glow)',
								animation: 'breathe 3s ease-in-out infinite'
							}}
						>
							{/* Animated shimmer effect */}
							<div
								className="absolute inset-0 -top-px -bottom-px -left-px -right-px rounded-full opacity-30"
								style={{
									background: `linear-gradient(90deg, transparent, var(--theme-primary-light), transparent)`,
									animation: 'shimmer 2s linear infinite'
								}}
							></div>

							{/* Pulsing border animation */}
							<div
								className="absolute inset-0 rounded-full border-2 opacity-50"
								style={{
									borderColor: 'var(--theme-primary-light)',
									animation: 'borderPulse 2s ease-in-out infinite'
								}}
							></div>

							{/* Content */}
							<div className="relative z-10 flex items-center gap-3">
								<Search
									className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
									style={{ animation: 'bounce 2s infinite' }}
								/>
								<span className="text-sm font-medium">
									Actively Seeking Cybersecurity Roles
								</span>
							</div>

							{/* Floating dots animation */}
							<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--theme-primary-light)' }}></div>
							<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--theme-primary)' }}></div>
						</div>
					</div>

					{/* Profile Picture */}
					<div className="flex-shrink-0">
						<div className="relative">
							{/* Animated background rings */}
							<div
								className="absolute inset-0 rounded-full animate-pulse"
								style={{
									background: `linear-gradient(to right, var(--theme-primary-light), var(--theme-primary-dark))`,
									opacity: 0.2
								}}
							></div>
							<div
								className="absolute inset-2 rounded-full animate-pulse delay-150"
								style={{
									background: `linear-gradient(to right, var(--theme-primary-light), var(--theme-primary-dark))`,
									opacity: 0.2
								}}
							></div>

							{/* Profile container */}
							<div className="relative aspect-[320/320] w-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-black/20">
								<img src={"https://i.postimg.cc/9frSnHjk/Chat-GPT-Image-Jun-24-2025-08-35-26-PM.png"} className="w-full h-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Custom CSS for terminal scroll animation */}
			<style jsx>{`
        @keyframes terminal-scroll {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        .animate-terminal-scroll {
          animation: terminal-scroll linear infinite;
        }
      `}</style>
	  {/* Custom CSS animations */}
	<style jsx>{`
		@keyframes breathe {
			0%, 100% { 
				transform: scale(1);
				box-shadow: 0 4px 15px var(--theme-glow);
			}
			50% { 
				transform: scale(1.02);
				box-shadow: 0 8px 25px var(--theme-shadow);
			}
		}
		
		@keyframes shimmer {
			0% { transform: translateX(-100%); }
			100% { transform: translateX(100%); }
		}
		
		@keyframes borderPulse {
			0%, 100% { 
				opacity: 0.3;
				transform: scale(1);
			}
			50% { 
				opacity: 0.8;
				transform: scale(1.05);
			}
		}
		
		@keyframes bounce {
			0%, 20%, 53%, 80%, 100% {
				transform: translateY(0) rotate(0deg);
			}
			40%, 43% {
				transform: translateY(-8px) rotate(5deg);
			}
			70% {
				transform: translateY(-4px) rotate(-2deg);
			}
		}
	`}</style>
		</section>
	);
};

export default HeroSection;