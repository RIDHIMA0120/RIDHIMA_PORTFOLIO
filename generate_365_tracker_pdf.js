import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 30,
  bufferPages: true
});

const rootPath = path.join(process.cwd(), 'Complete_365_Daywise_Tracker_Ridhima.pdf');
const publicPath = path.join(process.cwd(), 'public', 'Complete_365_Daywise_Tracker_Ridhima.pdf');

const writeStreamRoot = fs.createWriteStream(rootPath);
const writeStreamPublic = fs.createWriteStream(publicPath);

doc.pipe(writeStreamRoot);

// Colors
const primaryColor = '#0f172a';
const accentBlue = '#0284c7';
const accentGreen = '#15803d';
const darkGray = '#334155';
const lightGray = '#64748b';

// Header
doc
  .fillColor(primaryColor)
  .fontSize(16)
  .font('Helvetica-Bold')
  .text('RIDHIMA SRIVASTAVA — 365-DAY MASTER STUDY TRACKER', { align: 'center' });

doc.moveDown(0.2);

doc
  .fillColor(accentBlue)
  .fontSize(9.5)
  .font('Helvetica-Bold')
  .text('2nd Year B.Tech Computer Science (ABES) | Target: October 2027 Cybersecurity Internship', { align: 'center' });

doc.moveDown(0.2);

doc
  .fillColor(lightGray)
  .fontSize(8)
  .font('Helvetica')
  .text('Daily Schedule: 2 Hours DSA (C++) + 1 Hour Cybersecurity (3 Hours Total Daily)', { align: 'center' });

doc.moveDown(0.4);
doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(30, doc.y).lineTo(565, doc.y).stroke();
doc.moveDown(0.4);

function checkPageSpace(heightNeeded = 25) {
  if (doc.y + heightNeeded > 780) {
    doc.addPage();
  }
}

function addMonthHeader(monthTitle) {
  checkPageSpace(35);
  doc
    .fillColor(accentBlue)
    .fontSize(10)
    .font('Helvetica-Bold')
    .text(monthTitle.toUpperCase(), 30, doc.y);
  
  doc.moveDown(0.2);
  doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(30, doc.y).lineTo(565, doc.y).stroke();
  doc.moveDown(0.3);
}

function addDayRow(dayText, dsaTopic, dsaLink, cyberTopic, cyberLink) {
  checkPageSpace(18);

  const startY = doc.y;

  doc.fillColor(primaryColor).fontSize(7.5).font('Helvetica-Bold').text(dayText, 30, startY, { width: 42 });
  
  doc.fillColor(darkGray).fontSize(7).font('Helvetica').text(`${dsaTopic}`, 75, startY, { width: 235 });
  
  doc.fillColor(accentGreen).fontSize(7).font('Helvetica').text(`${cyberTopic}`, 315, startY, { width: 250 });

  doc.moveDown(0.25);
}

// ------------------- FULL 365 DAYS DATA -------------------
const fullScheduleData = [
  // MONTH 1
  { month: 'Month 1: C++ Basics & Network Fundamentals (Days 1 - 30)', days: [
    ['Day 1', 'Video 003: C++ Intro & Input Operators', 'https://learncpp.com/', 'OSI Model Overview: All 7 Layers', 'https://professormesser.com/'],
    ['Day 2', 'Video 004: Conditionals Part 1 (if/else)', 'https://leetcode.com/', 'OSI Model: Layers 1 to 4 (Physical to Transport)', 'https://wireshark.org/'],
    ['Day 3', 'Video 005: Conditionals Part 2 (Nested/Switch)', 'https://geeksforgeeks.org/', 'TCP vs UDP Protocols & Header structures', 'https://tryhackme.com/'],
    ['Day 4', 'Video 006: Loops Part 1 (for/while)', 'https://leetcode.com/', 'IP Addressing: IPv4/IPv6 & Subnetting', 'https://tryhackme.com/'],
    ['Day 5', 'Video 007: Loops Part 2 (Factorial & Prime)', 'https://leetcode.com/', 'MAC Addresses & Address Resolution Protocol (ARP)', 'https://tryhackme.com/'],
    ['Day 6', 'Video 008: Pattern Printing Part 1', 'https://takeuforward.org/', 'Port Numbers & Common Services (21, 22, 80, 443)', 'https://tryhackme.com/'],
    ['Day 7', 'Video 009: Pattern Printing Part 2', 'https://takeuforward.org/', 'Domain Name System (DNS) Resolution Steps', 'https://tryhackme.com/'],
    ['Day 8', 'Video 010: Fundamentals Live Session', 'https://leetcode.com/', 'Wireshark Overview & Interface Setup', 'https://wireshark.org/'],
    ['Day 9', 'Video 011: Functions & Pass by Value/Ref', 'https://learncpp.com/', 'Wireshark Packet Capture: Inspect HTTP traffic', 'https://wireshark.org/'],
    ['Day 10', 'Video 012: Pointers & Memory Addresses', 'https://learncpp.com/', 'Wireshark Display Filters (http, ip.src)', 'https://wireshark.org/'],
    ['Day 11', 'Video 013: 1D Arrays Part 1 (Traversal)', 'https://leetcode.com/', 'Information Security CIA Triad Overview', 'https://tryhackme.com/'],
    ['Day 12', 'Video 014: 1D Arrays Part 2 (Vectors)', 'https://leetcode.com/', 'Confidentiality & Symmetric Encryption', 'https://cryptohack.org/'],
    ['Day 13', 'Video 015: 1D Arrays Part 3 (Two Pointers)', 'https://leetcode.com/', 'Integrity & Cryptographic Hashing Concepts', 'https://cryptohack.org/'],
    ['Day 14', 'LeetCode #1: Two Sum & #26: Duplicates', 'https://leetcode.com/', 'Availability & DDoS Attack Vectors', 'https://tryhackme.com/'],
    ['Day 15', 'LeetCode #121: Best Time to Buy/Sell Stock', 'https://leetcode.com/', 'TryHackMe: Pre-Security Room 1 (Networks)', 'https://tryhackme.com/'],
    ['Day 16', 'Video 016: 2D Arrays Part 1 (Matrices)', 'https://leetcode.com/', 'TryHackMe: Pre-Security Room 2 (Web Works)', 'https://tryhackme.com/'],
    ['Day 17', 'Video 017: 2D Arrays Part 2 (Transpose)', 'https://leetcode.com/', 'HTTP Request Methods (GET, POST, PUT, DELETE)', 'https://portswigger.net/'],
    ['Day 18', 'Video 018: 2D Arrays Part 3 (Spiral Order)', 'https://leetcode.com/', 'HTTP Response Status Codes (200, 301, 404, 500)', 'https://portswigger.net/'],
    ['Day 19', 'Video 019: Strings Part 1 (std::string)', 'https://leetcode.com/', 'Cookies, Sessions & LocalStorage Security', 'https://portswigger.net/'],
    ['Day 20', 'Video 020: Strings Part 2 (Valid Anagrams)', 'https://leetcode.com/', 'TryHackMe: Pre-Security Room 3 (Web Apps)', 'https://tryhackme.com/'],
    ['Day 21', 'Video 021: 2D Arrays Live Class', 'https://takeuforward.org/', 'OWASP Top 10 Security Overview', 'https://owasp.org/'],
    ['Day 22', 'Video 022: Time Complexity (Big-O)', 'https://geeksforgeeks.org/', 'OWASP #1: Broken Access Control Overview', 'https://portswigger.net/'],
    ['Day 23', 'Video 023: Space Complexity Analysis', 'https://geeksforgeeks.org/', 'OWASP #2: Cryptographic Failures Overview', 'https://owasp.org/'],
    ['Day 24', 'Video 024: Bubble Sorting O(N^2)', 'https://leetcode.com/', 'OWASP #3: Injection Attacks Overview', 'https://portswigger.net/'],
    ['Day 25', 'Video 025: Selection & Insertion Sort', 'https://leetcode.com/', 'SQL Injection (SQLi) Theory & Syntax', 'https://portswigger.net/'],
    ['Day 26', 'Video 026: Complexity Live Session', 'https://takeuforward.org/', 'PortSwigger Academy: SQL Injection Lab 1', 'https://portswigger.net/'],
    ['Day 27', 'Video 027: Problems on Sorting', 'https://leetcode.com/', 'PortSwigger Academy: SQL Injection Lab 2', 'https://portswigger.net/'],
    ['Day 28', 'Video 028: Searching Part 1 (Binary Search)', 'https://leetcode.com/', 'Cross-Site Scripting (XSS) Overview', 'https://portswigger.net/'],
    ['Day 29', 'Video 029: Searching Part 2 (Lower/Upper)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 1', 'https://portswigger.net/'],
    ['Day 30', 'Video 030: Searching Part 3 (Answer Space)', 'https://leetcode.com/', 'Month 1 Review & TryHackMe Room Completion', 'https://tryhackme.com/']
  ]},

  // MONTH 2
  { month: 'Month 2: Recursion, Advanced Sorting & OWASP Security (Days 31 - 60)', days: [
    ['Day 31', 'Video 031: Recursion Part 1 (Base Cases)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 2', 'https://portswigger.net/'],
    ['Day 32', 'Video 032: Recursion Part 2 (Fibonacci)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 3', 'https://portswigger.net/'],
    ['Day 33', 'Video 033: Recursion Part 3 (Print Subsets)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 4', 'https://portswigger.net/'],
    ['Day 34', 'Video 034: Sorting Live Session', 'https://takeuforward.org/', 'Cross-Site Request Forgery (CSRF)', 'https://portswigger.net/'],
    ['Day 35', 'Video 035: Recursion Part 4 (Backtracking)', 'https://leetcode.com/', 'PortSwigger Academy: CSRF Lab 1', 'https://portswigger.net/'],
    ['Day 36', 'Video 036: Advance Sorting 1 (Merge Sort)', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 1', 'https://tryhackme.com/'],
    ['Day 37', 'Video 037: Advance Sorting 2 (Quick Sort)', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 2', 'https://tryhackme.com/'],
    ['Day 38', 'Video 038: Recursion Live Session', 'https://takeuforward.org/', 'TryHackMe: Web Fundamentals Room 3', 'https://tryhackme.com/'],
    ['Day 39', 'Video 039: Advance Sorting 3 (Cyclic Sort)', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 4', 'https://tryhackme.com/'],
    ['Day 40', 'Video 040: Special Algos 1 (Prefix Sum)', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 5', 'https://tryhackme.com/'],
    ['Day 41', 'Video 041: Special Algos 2 (Sliding Window)', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 6', 'https://tryhackme.com/'],
    ['Day 42', 'Video 042: Special Algos 3 (Sieve)', 'https://leetcode.com/', 'Deloitte Cyber Job Simulation Task 1', 'https://theforage.com/'],
    ['Day 43', 'Video 072: Greedy Algorithms Part 2', 'https://leetcode.com/', 'Deloitte Cyber Job Simulation Task 2', 'https://theforage.com/'],
    ['Day 44', 'Video 073: Greedy Algorithms Part 3', 'https://leetcode.com/', 'Deloitte Cyber Job Simulation Task 3', 'https://theforage.com/'],
    ['Day 45', 'Video 074: DP 1 Part 1 (Memoization)', 'https://leetcode.com/', 'OverTheWire: Bandit Level 0 to Level 2', 'https://overthewire.org/'],
    ['Day 46', 'Video 075: DP 1 Part 2 (Tabulation)', 'https://leetcode.com/', 'OverTheWire: Bandit Level 3 to Level 5', 'https://overthewire.org/'],
    ['Day 47', 'Video 076: DP 1 Part 3 (1D DP)', 'https://leetcode.com/', 'OverTheWire: Bandit Level 6 to Level 8', 'https://overthewire.org/'],
    ['Day 48', 'LeetCode #53: Maximum Subarray', 'https://leetcode.com/', 'OverTheWire: Bandit Level 9 to Level 10', 'https://overthewire.org/'],
    ['Day 49', 'LeetCode #15: 3Sum (Two Pointers)', 'https://leetcode.com/', 'Linux User Management (useradd, usermod)', 'https://overthewire.org/'],
    ['Day 50', 'LeetCode #11: Container With Most Water', 'https://leetcode.com/', 'Linux Group Permissions (chmod, chown)', 'https://overthewire.org/'],
    ['Day 51', 'LeetCode #42: Trapping Rain Water', 'https://leetcode.com/', 'Linux File System Hierarchy (/etc, /var)', 'https://overthewire.org/'],
    ['Day 52', 'LeetCode #3: Longest Substring', 'https://leetcode.com/', 'Shell Scripting Basics: Bash Variables', 'https://overthewire.org/'],
    ['Day 53', 'LeetCode #76: Minimum Window Substring', 'https://leetcode.com/', 'Shell Scripting: Automated Log Search', 'https://overthewire.org/'],
    ['Day 54', 'LeetCode #56: Merge Intervals', 'https://leetcode.com/', 'Command Line Recon (whois, dig, nslookup)', 'https://tryhackme.com/'],
    ['Day 55', 'LeetCode #49: Group Anagrams', 'https://leetcode.com/', 'Passive Information Gathering Concepts', 'https://tryhackme.com/'],
    ['Day 56', 'Striver\'s Sheet: Arrays Medium Part 1', 'https://takeuforward.org/', 'Active Information Gathering Concepts', 'https://tryhackme.com/'],
    ['Day 57', 'Striver\'s Sheet: Arrays Medium Part 2', 'https://takeuforward.org/', 'PortSwigger Auth Vulnerabilities 1', 'https://portswigger.net/'],
    ['Day 58', 'Striver\'s Sheet: Two Pointers Problems', 'https://takeuforward.org/', 'PortSwigger Auth Vulnerabilities 2', 'https://portswigger.net/'],
    ['Day 59', 'Striver\'s Sheet: Sliding Window Problems', 'https://takeuforward.org/', 'Month 2 Security Review & Lab Docs', 'https://tryhackme.com/'],
    ['Day 60', 'Month 2 DSA Revision & Code Clean Up', 'https://leetcode.com/', 'Month 2 Cybersecurity Assessment', 'https://tryhackme.com/']
  ]},

  // MONTH 3
  { month: 'Month 3: Linked Lists, Stacks, Queues & Linux Security (Days 61 - 90)', days: [
    ['Day 61', 'Singly Linked List: Struct Node & Head', 'https://geeksforgeeks.org/', 'OverTheWire: Bandit Level 11 (Base64)', 'https://overthewire.org/'],
    ['Day 62', 'Singly Linked List: Insertion Methods', 'https://geeksforgeeks.org/', 'OverTheWire: Bandit Level 12 (HexDump)', 'https://overthewire.org/'],
    ['Day 63', 'Singly Linked List: Deletion Methods', 'https://geeksforgeeks.org/', 'OverTheWire: Bandit Level 13 (SSH Keys)', 'https://overthewire.org/'],
    ['Day 64', 'LeetCode #206: Reverse a Linked List', 'https://leetcode.com/', 'OverTheWire: Bandit Level 14 (Netcat)', 'https://overthewire.org/'],
    ['Day 65', 'LeetCode #876: Middle of Linked List', 'https://leetcode.com/', 'OverTheWire: Bandit Level 15 (SSL Netcat)', 'https://overthewire.org/'],
    ['Day 66', 'LeetCode #141: Cycle Detection (Floyd\'s)', 'https://leetcode.com/', 'OverTheWire: Bandit Level 16 (Port Scan)', 'https://overthewire.org/'],
    ['Day 67', 'LeetCode #142: Linked List Cycle II', 'https://leetcode.com/', 'OverTheWire: Bandit Level 17 (Diff Keys)', 'https://overthewire.org/'],
    ['Day 68', 'LeetCode #21: Merge Two Sorted Lists', 'https://leetcode.com/', 'OverTheWire: Bandit Level 18 (Shell Bypass)', 'https://overthewire.org/'],
    ['Day 69', 'Doubly Linked List Implementation', 'https://geeksforgeeks.org/', 'OverTheWire: Bandit Level 19 (SetUID)', 'https://overthewire.org/'],
    ['Day 70', 'Circular Linked List Implementation', 'https://geeksforgeeks.org/', 'OverTheWire: Bandit Level 20 (Sockets)', 'https://overthewire.org/'],
    ['Day 71', 'Stacks: Array & Linked List Build', 'https://geeksforgeeks.org/', 'Linux Process Management (ps, htop, kill)', 'https://tryhackme.com/'],
    ['Day 72', 'Stacks: C++ STL (std::stack)', 'https://cppreference.com/', 'Linux Signals (SIGINT, SIGTERM, SIGKILL)', 'https://tryhackme.com/'],
    ['Day 73', 'LeetCode #20: Valid Parentheses', 'https://leetcode.com/', 'Linux Service Management (systemctl)', 'https://tryhackme.com/'],
    ['Day 74', 'LeetCode #155: Min Stack Design O(1)', 'https://leetcode.com/', 'Linux System Logs (journalctl -u)', 'https://tryhackme.com/'],
    ['Day 75', 'Infix, Prefix & Postfix Expressions', 'https://geeksforgeeks.org/', 'Linux Auth Logs (/var/log/auth.log)', 'https://tryhackme.com/'],
    ['Day 76', 'Postfix Expression Evaluation Stack', 'https://geeksforgeeks.org/', 'TryHackMe: Linux Fundamentals Part 1', 'https://tryhackme.com/'],
    ['Day 77', 'Monotonic Stack: Next Greater Element I', 'https://leetcode.com/', 'TryHackMe: Linux Fundamentals Part 1', 'https://tryhackme.com/'],
    ['Day 78', 'Monotonic Stack: Next Greater Element II', 'https://leetcode.com/', 'TryHackMe: Linux Fundamentals Part 2', 'https://tryhackme.com/'],
    ['Day 79', 'LeetCode #739: Daily Temperatures', 'https://leetcode.com/', 'TryHackMe: Linux Fundamentals Part 2', 'https://tryhackme.com/'],
    ['Day 80', 'LeetCode #84: Largest Histogram Area', 'https://leetcode.com/', 'TryHackMe: Linux Fundamentals Part 3', 'https://tryhackme.com/'],
    ['Day 81', 'Queues: Array & Linked List Build', 'https://geeksforgeeks.org/', 'TryHackMe: Linux Fundamentals Part 3', 'https://tryhackme.com/'],
    ['Day 82', 'C++ Queue STL (std::queue)', 'https://cppreference.com/', 'Cron Security: Insecure Cron Permissions', 'https://tryhackme.com/'],
    ['Day 83', 'Double Ended Queue (std::deque)', 'https://cppreference.com/', 'SUID / SGID Insecure Executables', 'https://tryhackme.com/'],
    ['Day 84', 'LeetCode #225: Implement Stack via Queue', 'https://leetcode.com/', 'SUID Privilege Escalation Fundamentals', 'https://tryhackme.com/'],
    ['Day 85', 'LeetCode #232: Implement Queue via Stack', 'https://leetcode.com/', 'Linux Firewall Basics (ufw, iptables)', 'https://tryhackme.com/'],
    ['Day 86', 'LeetCode #239: Sliding Window Max', 'https://leetcode.com/', 'Port Forwarding & SSH Tunnelling', 'https://tryhackme.com/'],
    ['Day 87', 'Linked List & Stack Revision', 'https://takeuforward.org/', 'Network Access Control Lists (NACLs)', 'https://tryhackme.com/'],
    ['Day 88', 'Striver\'s Sheet: Linked List Mediums', 'https://takeuforward.org/', 'TryHackMe: Passive Reconnaissance Room', 'https://tryhackme.com/'],
    ['Day 89', 'Striver\'s Sheet: Stack & Queue Mediums', 'https://takeuforward.org/', 'TryHackMe: Active Reconnaissance Room', 'https://tryhackme.com/'],
    ['Day 90', 'Month 3 Revision & Code Submission', 'https://leetcode.com/', 'Month 3 Security Assessment', 'https://tryhackme.com/']
  ]},

  // MONTH 4 TO 12 HIGHLIGHTS SUMMARY IN PDF
  { month: 'Month 4 to Month 12 Complete Daily Milestones Roadmap', days: [
    ['Days 91-120', 'Month 4: Binary Search 1D/2D & Answer Space (LeetCode #33, #875, #1011)', 'https://leetcode.com/', 'Nmap Network Reconnaissance (-sS, -sV, NSE Scripts)', 'https://nmap.org/'],
    ['Days 121-150', 'Month 5: Hash Maps, Binary Trees, BST & Trie (LeetCode #1, #98, #208)', 'https://leetcode.com/', 'Cryptography: AES-256, RSA, SHA-256 (CryptoHack)', 'https://cryptohack.org/'],
    ['Days 151-180', 'Month 6: Graph BFS/DFS, Dijkstra, Topological Sort (LeetCode #200, #207)', 'https://leetcode.com/', 'SIEM Log Monitoring, Splunk SPL & SOC Level 1', 'https://tryhackme.com/'],
    ['Days 181-210', 'Month 7: 1D & 2D Dynamic Programming (LeetCode #70, #198, #322, #72)', 'https://leetcode.com/', 'Vulnerability Scanners: Nessus & OpenVAS Auditing', 'https://openvas.org/'],
    ['Days 211-240', 'Month 8: Advanced LeetCode Sprint (Arrays, Trees, Graphs, DP)', 'https://leetcode.com/', 'Web Pentesting with Burp Suite (PortSwigger Labs)', 'https://portswigger.net/'],
    ['Days 241-270', 'Month 9: Portfolio Project 1 — C++ Encrypted File Vault CLI Tool', 'https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO', 'OpenSSL C++ Integration & AES-256 Security Audit', 'https://openssl.org/'],
    ['Days 271-300', 'Month 10: Portfolio Project 2 — C++ / Python Network Packet Sniffer', 'https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO', 'Packet Parsing (IP/TCP) & SYN Flood Anomaly Detection', 'https://scapy.net/'],
    ['Days 301-330', 'Month 11: LeetCode Top 150 Interview Questions Sprint', 'https://leetcode.com/', 'CompTIA Security+ SY0-701 & Google Cyber Certificate', 'https://professormesser.com/'],
    ['Days 331-365', 'Month 12: Resume PDF Launch & October 2027 Internship Hiring Sprint', 'https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO', 'Daily Applications to 5 Cyber Analyst & SOC Intern Roles', 'https://linkedin.com/']
  ]}
];

fullScheduleData.forEach(section => {
  addMonthHeader(section.month);
  section.days.forEach(row => {
    addDayRow(row[0], row[1], row[2], row[3], row[4]);
  });
});

doc.end();

writeStreamRoot.on('finish', () => {
  fs.copyFileSync(rootPath, publicPath);
  console.log('PDF successfully generated and saved at:');
  console.log('1.', rootPath);
  console.log('2.', publicPath);
});
