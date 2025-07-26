"use client";
import React, { useState, useEffect } from "react";
import { Shield, Mail, Download, Search, User } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";
import DecryptedText from "../DecryptedText";

const HeroSection = () => {
	const { theme } = useTheme();
	const [typedText, setTypedText] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [animateddLogs, setAnimateddLogs] = useState<Array<{
		id: number;
		text: string;
		left: string;
		animationDuration: string;
		animationDelay: string;
		color: string;
		lane: number;
	}>>([]);

	// Theme-specific subtitles
	const themeSubtitles = {
		blue: [
			"Cybersecurity Enthusiast",
			"Blue Team Specialist", 
			"Security Operations Analyst",
			"Threat Hunter",
			"SOC Analyst",
			"Incident Response Expert",
			"SIEM Analyst",
			"Vulnerability Assessment Specialist"
		],
		red: [
			"Penetration Tester",
			"Red Team Operator",
			"Ethical Hacker",
			"Security Researcher",
			"Exploit Developer",
			"OSINT Specialist",
			"Social Engineer",
			"Offensive Security Professional"
		]
	};
	
	const getCurrentSubtitles = () => {
		return themeSubtitles[theme] || themeSubtitles.blue; // fallback to blue if theme not found
	};

	// Theme-specific log lines
	const themeLogLines = {
		blue: [
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
		],
		red: [
			"[RECON] Subdomain enumeration found 8 subdomains for target corp.internaldomain.com.",
			"[RECON] Port scan on 192.168.33.10 revealed open ports: 80, 135, 445, 5985 (WinRM).",
			"[EXPLOIT] Successfully triggered EternalBlue (CVE-2017-0144) on target 192.168.33.22 - SYSTEM shell obtained.",
			"[PRIVESC] Escalated privileges via unquoted service path on APP-SRV02 - elevated to NT AUTHORITY\\SYSTEM.",
			"[LATERAL] Harvested credentials for user 'svc_backup' via LSASS memory dump using Mimikatz.",
			"[MOVE] Used PsExec to pivot from SRV02 to DB-SERVER01 (192.168.33.35) with domain admin privileges.",
			"[C2] Established reverse HTTPS shell to C2 at 10.0.0.5:443 using Cobalt Strike Beacon.",
			"[PERSISTENCE] Deployed registry-based startup script on WKSTN-07 for long-term persistence.",
			"[BYPASS] AMSI bypass script executed successfully - payload execution undetected by AV.",
			"[ENUM] Queried LDAP for active directory users and groups from DC01 - 137 accounts enumerated.",
			"[DATAEXFIL] Compressed and exfiltrated HR share (1.2GB) via DNS tunneling to attacker-server.com.",
			"[DEFENSE-EVASION] Cleared Windows Event Logs using wevtutil on 3 compromised hosts.",
			"[CLEANUP] Removed all payloads and artifacts from C:\\Temp and cleared shimcache.",
			"[SOC-MOCK] Injected fake security alerts into SIEM to divert SOC analyst attention.",
			"[PERSISTENCE] Created scheduled task 'WindowsUpdateChecker' to maintain access every 2 hours.",
			"[DISCOVERY] Netstat output reveals open RDP from internal to 192.168.33.50 – potential lateral path.",
			"[EXPLOIT] Exploited vulnerable Jenkins endpoint at http://ci.corp.com/script for RCE.",
			"[C2] SSH tunnel established from target's DMZ machine to C2 server at 45.123.76.21:22.",
			"[DECEPTION] Deployed decoy document 'Q3_salary_plans.xlsx.lnk' with embedded macro payload.",
			"[ESCALATION] Successfully added user 'pentestsvc' to 'Domain Admins' group via misconfigured GPO."
		]
	};

	const getCurrentLogLines = () => {
		return themeLogLines[theme] || themeLogLines.blue; // fallback to blue if theme not found
	};

	const getLogColor = (logText: string, currentTheme: string) => {
		// Red theme - all logs in green (hacker terminal style)
		if (currentTheme === 'red') {
			return "#22c55e"; // green-500 - classic hacker green
		}
		
		// Blue theme - severity-based coloring
		if (logText.includes('[ALERT]')) {
			if (logText.includes('Critical') || logText.includes('High:')) {
				return "#ef4444"; // red-500 - Critical/High
			} else if (logText.includes('Medium:')) {
				return "#f59e0b"; // amber-500 - Medium
			} else if (logText.includes('Low:')) {
				return "#eab308"; // yellow-500 - Low
			}
			return "#ef4444"; // default red for generic alerts
		}
		
		if (logText.includes('[WARN]')) {
			return "#f59e0b"; // amber-500 - Warning
		}
		
		if (logText.includes('[INFO]')) {
			return "#9ca3af"; // gray-400 - Info
		}
		
		if (logText.includes('[DEBUG]')) {
			return "#6b7280"; // gray-500 - Debug
		}
		
		// Fallback to theme accent color
		return getComputedStyle(document.documentElement).getPropertyValue('--theme-accent').trim() || "#60a5fa";
	};

	const createLogLines = () => {
		const currentLogLines = getCurrentLogLines(); // Get theme-specific logs
		const newLogs = [];
		const lanes = 8; // Number of vertical lanes
		const usedLanes = new Set<number>();

		for (let i = 0; i < 12; i++) {
			const randomLog = currentLogLines[Math.floor(Math.random() * currentLogLines.length)];

			// Assign to available lane
			let lane: number;
			do {
				lane = Math.floor(Math.random() * lanes);
			} while (usedLanes.has(lane) && usedLanes.size < lanes);

			usedLanes.add(lane);

			const leftPosition = (lane * (100 / lanes)) + (Math.random() * (100 / lanes * 0.8));

			newLogs.push({
				id: Date.now() + i,
				text: randomLog,
				left: `${Math.min(leftPosition, 85)}%`,
				animationDuration: `${12 + Math.random() * 16}s`,
				animationDelay: `${i * 0.8 + Math.random() * 2}s`,
				color: getLogColor(randomLog, theme), // Pass theme to getLogColor
				lane: lane
			});
		}
		setAnimateddLogs(newLogs);
	};

	// Initialize and update log lines
	useEffect(() => {
		createLogLines();
		const interval = setInterval(createLogLines, 20000);
		return () => clearInterval(interval);
	}, [theme]);

	// Typing animation effect
	useEffect(() => {
		let currentText = "";
		let isDeleting = false;
		let subtitleIndex = 0;
		let timeoutId: NodeJS.Timeout | null = null;
		let isActive = true;

		const typeSpeed = 100;
		const deleteSpeed = 50;
		const pauseTime = 2000;

		const type = () => {
			if (!isActive) return; // Stop if component unmounted or theme changed

			const currentSubtitles = getCurrentSubtitles();
			const currentSubtitle = currentSubtitles[subtitleIndex];

			if (isDeleting) {
				currentText = currentSubtitle.substring(0, currentText.length - 1);
			} else {
				currentText = currentSubtitle.substring(0, currentText.length + 1);
			}

			setTypedText(currentText);

			if (!isDeleting && currentText === currentSubtitle) {
				timeoutId = setTimeout(() => {
					if (!isActive) return;
					isDeleting = true;
					timeoutId = setTimeout(() => {
						if (isActive) type();
					}, deleteSpeed);
				}, pauseTime);
			} else if (isDeleting && currentText === "") {
				isDeleting = false;
				subtitleIndex = (subtitleIndex + 1) % currentSubtitles.length;
				timeoutId = setTimeout(() => {
					if (isActive) type();
				}, typeSpeed);
			} else {
				timeoutId = setTimeout(() => {
					if (isActive) type();
				}, isDeleting ? deleteSpeed : typeSpeed);
			}
		};

		// Clear any existing text and start fresh
		setTypedText("");
		type();

		// Cleanup function
		return () => {
			isActive = false;
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [theme]);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section
			id="home"
			className={`relative min-h-screen flex items-center py-20 transition-all duration-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
		>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-0 bg-black/30"></div>
				{animateddLogs.map((log) => (
					<div
						key={log.id}
						className="absolute top-0 font-mono text-xs opacity-20 whitespace-nowrap animate-terminal-scroll"
						style={{
							left: log.left,
							animationDuration: log.animationDuration,
							animationDelay: log.animationDelay,
							color: log.color,
							transform: 'translateY(-100%)',
							zIndex: log.lane,
							maxWidth: '400px',
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}}
					>
						{log.text}
					</div>
				))}
			</div>
			<div className="relative z-10 container mx-auto px-6">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div className="flex-1 text-center lg:text-left max-w-2xl">
						<div
							className="inline-block font-mono text-sm bg-black/40 px-4 py-2 rounded-lg mb-6 backdrop-blur-sm border border-white/10"
							style={{ color: 'var(--theme-accent)' }}
						>
							<span className="text-white/70">$</span> whoami
						</div>
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
						<h2 className="text-2xl lg:text-3xl font-semibold text-white/90 mb-6 h-12 flex items-center justify-center lg:justify-start">
							<span style={{ color: 'var(--theme-accent)' }}>
								{typedText}
								<span className="animate-pulse">|</span>
							</span>
						</h2>
						<p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
							Building resilient cyber defense environments through hands-on security operations
						</p>
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
						<div
							className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-sm rounded-full border text-white font-medium relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-pulse"
							style={{
								background: `linear-gradient(to right, var(--theme-primary), var(--theme-primary-dark))`,
								borderColor: 'var(--theme-primary-light)',
								boxShadow: '0 4px 15px var(--theme-glow)',
								animation: 'breathe 3s ease-in-out infinite'
							}}
						>
							<div
								className="absolute inset-0 -top-px -bottom-px -left-px -right-px rounded-full opacity-30"
								style={{
									background: `linear-gradient(90deg, transparent, var(--theme-primary-light), transparent)`,
									animation: 'shimmer 2s linear infinite'
								}}
							></div>
							<div
								className="absolute inset-0 rounded-full border-2 opacity-50"
								style={{
									borderColor: 'var(--theme-primary-light)',
									animation: 'borderPulse 2s ease-in-out infinite'
								}}
							></div>
							<div className="relative z-10 flex items-center gap-3">
								<Search
									className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
									style={{ animation: 'bounce 2s infinite' }}
								/>
								<span className="text-sm font-medium">
									Actively Seeking Cybersecurity Roles
								</span>
							</div>
							<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--theme-primary-light)' }}></div>
							<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--theme-primary)' }}></div>
						</div>
					</div>
					<div className="flex-shrink-0">
						<div className="relative">
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
							<div className="relative aspect-[320/320] w-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-black/20">
								<img src={"https://i.postimg.cc/9frSnHjk/Chat-GPT-Image-Jun-24-2025-08-35-26-PM.png"} className="w-full h-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</div>
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