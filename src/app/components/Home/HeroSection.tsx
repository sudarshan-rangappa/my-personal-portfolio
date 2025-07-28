"use client";
import React, { useState, useEffect } from "react";
import { Shield, Mail, Download, Search } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";
import DecryptedText from "../DecryptedText";

interface AnimatedLog {
    id: number;
    text: string;
    left: string;
    animationDuration: string;
    animationDelay: string;
    color: string;
    lane: number;
    createdAt?: number;
}

type ThemeType = 'blue' | 'red';

const HeroSection = () => {
    // Handle potential undefined theme context
    const themeHook = useTheme() as { theme?: string } | undefined;
    const theme = themeHook?.theme || 'blue'; // Fallback to 'blue' if theme is undefined
    const [typedText, setTypedText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [animateddLogs, setAnimateddLogs] = useState<AnimatedLog[]>([]);

    // Theme-specific subtitles
    const themeSubtitles: Record<ThemeType, string[]> = {
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

    // Theme-specific taglines for decrypt animation
    const themeTaglines: Record<ThemeType, string> = {
        blue: "Securing enterprise environments with advanced SIEM and SOC operations",
        red: "Exposing vulnerabilities through ethical hacking and penetration testing"
    };
    
    const getCurrentSubtitles = (): string[] => {
        return themeSubtitles[theme as ThemeType] || themeSubtitles.blue;
    };

    const getCurrentTagline = (): string => {
        return themeTaglines[theme as ThemeType] || themeTaglines.blue;
    };

    // Theme-specific log lines
    const themeLogLines: Record<ThemeType, string[]> = {
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
            "root@kali:~# nmap -sS -A 192.168.1.0/24",
            "root@kali:~# nmap -p- --min-rate=1000 -T4 target.corp.com",
            "root@kali:~# burpsuite -config config.json",
            "root@kali:~# gobuster dir -u http://target.corp.com -w /usr/share/wordlists/common.txt",
            "root@kali:~# nikto -h http://192.168.1.50",
            "root@kali:~# sqlmap -u \"http://target.corp.com/login.php\" --dbs",
            "root@kali:~# wfuzz -c -z file,/usr/share/seclists/common.txt -u http://target.corp.com/FUZZ",
            "root@kali:~# msfconsole -q",
            "msf6 > use exploit/windows/smb/ms17_010_eternalblue",
            "msf6 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS 192.168.1.50",
            "meterpreter > hashdump",
            "meterpreter > getuid",
            "meterpreter > sysinfo",
            "root@kali:~# bloodhound-python -u admin -p password -ns 192.168.1.10 -d domain.local",
            "root@kali:~# impacket-secretsdump CORP/administrator@192.168.1.50",
            "root@kali:~# crackmapexec smb 192.168.1.0/24 -u admin -p password123",
            "root@kali:~# evil-winrm -i 192.168.1.55 -u administrator -p password123",
            "root@kali:~# john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt",
            "root@kali:~# hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.50",
            "root@kali:~# hashcat -m 0 -a 3 hash.txt ?a?a?a?a",
            "root@kali:~# aircrack-ng -w wordlist.txt -b 00:14:6C:7E:40:80 wlan0",
            "root@kali:~# maltego -t target.domain.com",
            "root@kali:~# theharvester -d target.com -b google",
            "root@kali:~# sherlock Rangappa",
            "root@kali:~# subfinder -d target.corp.com | httpx -silent",
            "root@kali:~# bettercap -X -T 192.168.1.1",
            "root@kali:~# responder -I eth0 -wrf",
            "root@kali:~# proxychains nmap -sT -Pn 192.168.1.1",   
            "root@kali:~# binwalk firmware.bin",
            "root@kali:~# ghidra",  
            "root@kali:~# enum4linux -a 192.168.1.50",
            "root@kali:~# searchsploit apache 2.4.6"
        ]
    };

    const getCurrentLogLines = (): string[] => {
        return themeLogLines[theme as ThemeType] || themeLogLines.blue;
    };

    const getLogColor = (logText: string, currentTheme: string): string => {
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
        const rootStyles = getComputedStyle(document.documentElement);
        return rootStyles.getPropertyValue('--theme-accent').trim() || "#60a5fa";
    };

    const createLogLines = () => {
        const currentLogLines = getCurrentLogLines();
        const lanes = 12; // Increase lanes for better distribution
        
        // Get currently active lanes to avoid collision
        const activeLanes = new Set(animateddLogs.map(log => log.lane));
        
        // Create fewer logs at once to prevent crowding
        const newLogsCount = 2; // Reduced from 3-4 to 2
        const newLogs: AnimatedLog[] = [];
        
        for (let i = 0; i < newLogsCount; i++) {
            const randomLog = currentLogLines[Math.floor(Math.random() * currentLogLines.length)];
            
            // Find an available lane more effectively
            let lane: number;
            let attempts = 0;
            do {
                lane = Math.floor(Math.random() * lanes);
                attempts++;
            } while (activeLanes.has(lane) && attempts < 50); // Increased attempts
            
            // If we can't find a free lane, use a random one with offset
            if (attempts >= 50) {
                lane = Math.floor(Math.random() * lanes);
            }
            
            activeLanes.add(lane); // Mark this lane as used
            
            // Better positioning with proper spacing
            const laneWidth = 100 / lanes;
            const leftPosition = (lane * laneWidth) + (Math.random() * laneWidth * 0.7);
            const animationDuration = 20 + Math.random() * 15; // 20-35 seconds
            
            newLogs.push({
                id: Date.now() + i + Math.random() * 1000, // More unique IDs
                text: randomLog,
                left: `${Math.min(leftPosition, 85)}%`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${i * 1.5}s`, // Longer delay between logs
                color: getLogColor(randomLog, theme),
                lane: lane,
                createdAt: Date.now()
            });
        }
        
        setAnimateddLogs(prevLogs => {
            const currentTime = Date.now();
            // Remove logs older than 60 seconds
            const filteredLogs = prevLogs.filter(log => 
                currentTime - (log.createdAt || 0) < 60000
            );
            return [...filteredLogs, ...newLogs];
        });
    };

    // Initialize and update log lines
    useEffect(() => {
        // Clear existing logs when theme changes
        setAnimateddLogs([]);
        
        // Initial burst of logs for new theme
        createLogLines();
        
        // Create logs more frequently for continuous stream
        const interval = setInterval(createLogLines, 3000); // Every 3 seconds
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

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget as HTMLAnchorElement;
        if (target.dataset.variant === 'primary') {
            target.style.backgroundColor = 'var(--theme-primary-dark)';
            target.style.boxShadow = '0 8px 30px var(--theme-shadow)';
        } else if (target.dataset.variant === 'secondary') {
            target.style.backgroundColor = 'var(--theme-primary)';
            target.style.color = 'white';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget as HTMLAnchorElement;
        if (target.dataset.variant === 'primary') {
            target.style.backgroundColor = 'var(--theme-primary)';
            target.style.boxShadow = '0 4px 20px var(--theme-glow)';
        } else if (target.dataset.variant === 'secondary') {
            target.style.backgroundColor = 'transparent';
            target.style.color = 'var(--theme-accent)';
        }
    };

    const renderColoredTerminalText = (text: string): React.ReactNode => {
        if (theme !== 'red') {
            return text;
        }

        // Kali Linux terminal coloring
        if (text.startsWith('root@kali:~#')) {
            return (
                <>
                    <span style={{ color: '#ff6b6b' }}>root</span>
                    <span style={{ color: '#ffffff' }}>@</span>
                    <span style={{ color: '#4ecdc4' }}>kali</span>
                    <span style={{ color: '#ffffff' }}>:</span>
                    <span style={{ color: '#ffe66d' }}>~</span>
                    <span style={{ color: '#00ff41' }}># </span>
                    <span style={{ color: '#ffffff' }}>
                        {text.replace('root@kali:~# ', '')}
                    </span>
                </>
            );
        } else if (text.startsWith('msf6 >')) {
            return (
                <>
                    <span style={{ color: '#ff6b6b' }}>msf6</span>
                    <span style={{ color: '#00ff41' }}> {'>'} </span>
                    <span style={{ color: '#ffffff' }}>
                        {text.replace('msf6 > ', '')}
                    </span>
                </>
            );
        } else if (text.startsWith('msf6 exploit')) {
            const exploitMatch = text.split('exploit(')[1]?.split(')')[0] || '';
            const command = text.split('> ')[1] || '';
            return (
                <>
                    <span style={{ color: '#ff6b6b' }}>msf6</span>
                    <span style={{ color: '#ffffff' }}> </span>
                    <span style={{ color: '#f59e0b' }}>exploit</span>
                    <span style={{ color: '#00ff41' }}>(</span>
                    <span style={{ color: '#4ecdc4' }}>{exploitMatch}</span>
                    <span style={{ color: '#00ff41' }}>{')'}) {'>'} </span>
                    <span style={{ color: '#ffffff' }}>{command}</span>
                </>
            );
        } else if (text.startsWith('meterpreter >')) {
            return (
                <>
                    <span style={{ color: '#ff6b6b' }}>meterpreter</span>
                    <span style={{ color: '#00ff41' }}> {'>'} </span>
                    <span style={{ color: '#ffffff' }}>
                        {text.replace('meterpreter > ', '')}
                    </span>
                </>
            );
        } else {
            return <span style={{ color: '#00ff41' }}>{text}</span>;
        }
    };

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
                            zIndex: Math.floor(Math.random() * 10) + 1,
                            maxWidth: '500px',
                            minWidth: '300px',
                            overflow: 'visible',
                            textOverflow: 'clip',
                            fontSize: '11px',
                            lineHeight: '1.2',
                            paddingRight: '20px'
                        }}
                    >
                        {theme === 'red' ? renderColoredTerminalText(log.text) : (
                            <span style={{ color: log.color }}>{log.text}</span>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="relative z-10 lg:container mx-auto">
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
                                key={`name-blue-${theme}`}
                                className={"text-5xl lg:text-7xl font-bold text-white leading-tight"}
                                parentClassName={"text-5xl lg:text-7xl font-bold text-white leading-tight"}
                                text={"Sudarshan"}
                                speed={200}
                                sequential={true}
                                animateOn={"view"}
                            />
                        </div>
                        <div>
                            <DecryptedText
                                key={`name-red-${theme}`}
                                className={"text-4xl lg:text-6xl leading-[1.2]"}
                                parentClassName={"text-4xl lg:text-6xl leading-[1.2]"}
                                text={"Rangappa"}
                                speed={200}
                                sequential={true}
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
                        
                        {/* DecryptedText for theme-specific taglines */}
                        <div className="mb-8">
                            <DecryptedText
                                key={`tagline-${theme}`}
                                className={"text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"}
                                parentClassName={"text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"}
                                text={getCurrentTagline()}
                                speed={20}
                                sequential={true}
								revealDirection = 'center'
                                animateOn={"view"}
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <a
                                href="#projects-section"
                                data-variant="primary"
                                className="inline-flex items-center gap-3 px-5 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                style={{
                                    backgroundColor: 'var(--theme-primary)',
                                    boxShadow: '0 4px 20px var(--theme-glow)'
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Explore My Work
                            </a>

                            <a
                                href="#contact-section"
                                data-variant="secondary"
                                className="inline-flex items-center gap-3 px-8 py-4 border-2 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
                                style={{
                                    borderColor: 'var(--theme-primary)',
                                    color: 'var(--theme-accent)'
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Contact Me
                            </a>

                            <a
                                href="Assets/Sudarshan-Rangappa_resume.pdf"
                                download
                                data-variant="primary"
                                className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                aria-label="Download Sudarshan Rangappa's Resume"
                                style={{
                                    backgroundColor: 'var(--theme-primary)',
                                    boxShadow: '0 4px 20px var(--theme-glow)'
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
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
                                <img 
                                    src={"https://i.postimg.cc/9frSnHjk/Chat-GPT-Image-Jun-24-2025-08-35-26-PM.png"} 
                                    alt="Sudarshan Rangappa profile"
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes terminal-scroll {
                    0% {
                        transform: translateY(-50px);
                        opacity: 0;
                    }
                    5% {
                        opacity: 0.15;
                    }
                    10% {
                        opacity: 0.2;
                    }
                    85% {
                        opacity: 0.2;
                    }
                    95% {
                        opacity: 0.1;
                    }
                    100% {
                        transform: translateY(calc(100vh + 50px));
                        opacity: 0;
                    }
                }
                
                .animate-terminal-scroll {
                    animation: terminal-scroll linear infinite;
                    will-change: transform, opacity;
                }

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
