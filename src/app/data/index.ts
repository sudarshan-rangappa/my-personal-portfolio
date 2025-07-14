const redTeamLogs = [
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
];

const redTeamSubTitles = [
  "Curious About Attacks",
  "Trying Tools, Breaking Rules",
  "Offensive Security",
  "Penetration Tester",
  "Red Team Operator",
  "Web App Security Tester",
  "Network Intrusion Expert",
  "Ethical Hacker",
  "Bug Bounty Beginner",
]