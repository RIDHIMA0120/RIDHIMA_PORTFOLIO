import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 36
});

const outputPath = path.join(process.cwd(), 'public', 'Complete_365_Daywise_Tracker_Ridhima.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Styling Colors
const primaryColor = '#0f172a';
const accentBlue = '#0284c7';
const accentGreen = '#16a34a';
const darkGray = '#334155';
const lightGray = '#64748b';

// Header
doc
  .fillColor(primaryColor)
  .fontSize(20)
  .font('Helvetica-Bold')
  .text('RIDHIMA SRIVASTAVA — 365-DAY MASTER STUDY TRACKER', { align: 'center' });

doc.moveDown(0.3);

doc
  .fillColor(accentBlue)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('2nd Year B.Tech Computer Science (ABES) | Target: October 2027 Cybersecurity Internship', { align: 'center' });

doc.moveDown(0.2);

doc
  .fillColor(lightGray)
  .fontSize(8.5)
  .font('Helvetica')
  .text('Daily Schedule: 2 Hours DSA (C++) + 1 Hour Cybersecurity | 3 Hours Total Daily', { align: 'center' });

doc.moveDown(0.6);
doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
doc.moveDown(0.6);

// Helper for Section Titles
function addMonthHeader(monthTitle) {
  if (doc.y > 700) doc.addPage();
  doc
    .fillColor(accentBlue)
    .fontSize(11)
    .font('Helvetica-Bold')
    .text(monthTitle.toUpperCase());
  
  doc.moveDown(0.2);
  doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
  doc.moveDown(0.4);
}

// Helper for Rows
function addDayRow(dayText, dsaTopic, dsaLink, cyberTopic, cyberLink) {
  if (doc.y > 730) doc.addPage();

  const startY = doc.y;

  doc.fillColor(primaryColor).fontSize(8).font('Helvetica-Bold').text(dayText, 36, startY, { width: 45 });
  
  doc.fillColor(darkGray).fontSize(7.5).font('Helvetica').text(dsaTopic, 85, startY, { width: 230 });
  
  doc.fillColor(accentGreen).fontSize(7.5).font('Helvetica').text(cyberTopic, 320, startY, { width: 235 });

  doc.moveDown(0.3);
}

// MONTH 1
addMonthHeader('Month 1: C++ Basics & Network Fundamentals (Days 1 - 30)');
const m1 = [
  ['Day 1', 'Video 003: Intro to C++ & Input Operators', 'https://www.learncpp.com/', 'OSI Model Overview: All 7 Layers', 'https://www.professormesser.com/'],
  ['Day 2', 'Video 004: Conditionals Part 1 (if/else)', 'https://leetcode.com/', 'OSI Model: Layers 1 to 4 (Physical to Transport)', 'https://www.wireshark.org/'],
  ['Day 3', 'Video 005: Conditionals Part 2 (Nested & Switch)', 'https://www.geeksforgeeks.org/c-plus-plus/', 'TCP vs UDP Protocols & Header structures', 'https://tryhackme.com/'],
  ['Day 4', 'Video 006: Loops Part 1 (for/while loops)', 'https://leetcode.com/', 'IP Addressing: IPv4 vs IPv6 & Subnetting', 'https://tryhackme.com/'],
  ['Day 5', 'Video 007: Loops Part 2 (Factorial & Prime)', 'https://leetcode.com/', 'MAC Addresses & ARP Protocol', 'https://tryhackme.com/'],
  ['Day 6', 'Video 008: Pattern Printing Part 1', 'https://takeuforward.org/', 'Port Numbers & Services (21, 22, 80, 443)', 'https://tryhackme.com/'],
  ['Day 7', 'Video 009: Pattern Printing Part 2', 'https://takeuforward.org/', 'DNS Resolution Process Steps', 'https://tryhackme.com/'],
  ['Day 8', 'Video 010: Fundamentals Live Session', 'https://leetcode.com/', 'Wireshark Overview & Interface Setup', 'https://www.wireshark.org/'],
  ['Day 9', 'Video 011: Functions & Pass by Value/Ref', 'https://www.learncpp.com/', 'Wireshark Packet Capture: Inspect HTTP', 'https://www.wireshark.org/'],
  ['Day 10', 'Video 012: Pointers & Memory Addresses', 'https://www.learncpp.com/', 'Wireshark Display Filters (http, ip.src)', 'https://www.wireshark.org/'],
  ['Day 11', 'Video 013: 1D Arrays Part 1 (Traversal)', 'https://leetcode.com/', 'Information Security CIA Triad Overview', 'https://tryhackme.com/'],
  ['Day 12', 'Video 014: 1D Arrays Part 2 (Vectors)', 'https://leetcode.com/', 'Confidentiality & Symmetric Encryption', 'https://cryptohack.org/'],
  ['Day 13', 'Video 015: 1D Arrays Part 3 (Two Pointers)', 'https://leetcode.com/', 'Integrity & Cryptographic Hashing', 'https://cryptohack.org/'],
  ['Day 14', 'LeetCode #1: Two Sum & #26: Duplicates', 'https://leetcode.com/problems/two-sum/', 'Availability & DDoS Attack Vectors', 'https://tryhackme.com/'],
  ['Day 15', 'LeetCode #121: Best Time to Buy/Sell Stock', 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', 'TryHackMe Pre-Security Room 1', 'https://tryhackme.com/path/outline/pre-security'],
  ['Day 16', 'Video 016: 2D Arrays Part 1 (Matrices)', 'https://leetcode.com/', 'TryHackMe Pre-Security Room 2', 'https://tryhackme.com/path/outline/pre-security'],
  ['Day 17', 'Video 017: 2D Arrays Part 2 (Transpose)', 'https://leetcode.com/', 'HTTP Request Methods (GET, POST, PUT)', 'https://portswigger.net/web-security'],
  ['Day 18', 'Video 018: 2D Arrays Part 3 (Spiral Order)', 'https://leetcode.com/', 'HTTP Response Status Codes (200, 404)', 'https://portswigger.net/web-security'],
  ['Day 19', 'Video 019: Strings Part 1 (std::string)', 'https://leetcode.com/', 'Cookies, Sessions & LocalStorage', 'https://portswigger.net/web-security'],
  ['Day 20', 'Video 020: Strings Part 2 (Valid Anagrams)', 'https://leetcode.com/problems/valid-anagram/', 'TryHackMe Pre-Security Room 3', 'https://tryhackme.com/path/outline/pre-security'],
  ['Day 21', 'Video 021: 2D Arrays Live Class', 'https://takeuforward.org/', 'OWASP Top 10 Security Overview', 'https://owasp.org/www-project-top-ten/'],
  ['Day 22', 'Video 022: Time Complexity (Big-O)', 'https://www.geeksforgeeks.org/', 'OWASP #1: Broken Access Control', 'https://portswigger.net/web-security/access-control'],
  ['Day 23', 'Video 023: Space Complexity Analysis', 'https://www.geeksforgeeks.org/', 'OWASP #2: Cryptographic Failures', 'https://owasp.org/www-project-top-ten/'],
  ['Day 24', 'Video 024: Bubble Sorting O(N^2)', 'https://leetcode.com/', 'OWASP #3: Injection Attacks Overview', 'https://portswigger.net/web-security/sql-injection'],
  ['Day 25', 'Video 025: Selection & Insertion Sort', 'https://leetcode.com/', 'SQL Injection (SQLi) Syntax & Logic', 'https://portswigger.net/web-security/sql-injection'],
  ['Day 26', 'Video 026: Complexity Live Session', 'https://takeuforward.org/', 'PortSwigger Academy: SQLi Lab 1', 'https://portswigger.net/web-security/sql-injection'],
  ['Day 27', 'Video 027: Problems on Sorting', 'https://leetcode.com/', 'PortSwigger Academy: SQLi Lab 2', 'https://portswigger.net/web-security/sql-injection'],
  ['Day 28', 'Video 028: Searching Part 1 (Binary Search)', 'https://leetcode.com/explore/learn/card/binary-search/', 'Cross-Site Scripting (XSS) Overview', 'https://portswigger.net/web-security/cross-site-scripting'],
  ['Day 29', 'Video 029: Searching Part 2 (Bounds)', 'https://leetcode.com/explore/learn/card/binary-search/', 'PortSwigger Academy: XSS Lab 1', 'https://portswigger.net/web-security/cross-site-scripting'],
  ['Day 30', 'Video 030: Searching Part 3 (Answer Space)', 'https://leetcode.com/explore/learn/card/binary-search/', 'Month 1 Security Review & THM Room', 'https://tryhackme.com/']
];

m1.forEach(row => addDayRow(row[0], row[1], row[2], row[3], row[4]));

// MONTH 2
addMonthHeader('Month 2: Recursion, Advanced Sorting & OWASP Security (Days 31 - 60)');
const m2 = [
  ['Day 31', 'Video 031: Recursion Part 1 (Base Cases)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 2', 'https://portswigger.net/web-security/cross-site-scripting'],
  ['Day 32', 'Video 032: Recursion Part 2 (Fibonacci)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 3', 'https://portswigger.net/web-security/cross-site-scripting'],
  ['Day 33', 'Video 033: Recursion Part 3 (Subsets)', 'https://leetcode.com/', 'PortSwigger Academy: XSS Lab 4', 'https://portswigger.net/web-security/cross-site-scripting'],
  ['Day 34', 'Video 034: Sorting Live Session', 'https://takeuforward.org/', 'Cross-Site Request Forgery (CSRF)', 'https://portswigger.net/web-security/csrf'],
  ['Day 35', 'Video 035: Recursion Part 4 (Backtracking)', 'https://leetcode.com/', 'PortSwigger Academy: CSRF Lab 1', 'https://portswigger.net/web-security/csrf'],
  ['Day 36', 'Video 036: Merge Sort O(N log N)', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 1', 'https://tryhackme.com/path/outline/web-fundamentals'],
  ['Day 37', 'Video 037: Quick Sort & Partitioning', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 2', 'https://tryhackme.com/path/outline/web-fundamentals'],
  ['Day 38', 'Video 038: Recursion Live Session', 'https://takeuforward.org/', 'TryHackMe: Web Fundamentals Room 3', 'https://tryhackme.com/path/outline/web-fundamentals'],
  ['Day 39', 'Video 039: Cyclic Sort Pattern', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 4', 'https://tryhackme.com/path/outline/web-fundamentals'],
  ['Day 40', 'Video 040: Prefix Sum Algorithm', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 5', 'https://tryhackme.com/path/outline/web-fundamentals'],
  ['Day 41', 'Video 041: Sliding Window Technique', 'https://leetcode.com/', 'TryHackMe: Web Fundamentals Room 6', 'https://tryhackme.com/path/outline/web-fundamentals'],
  ['Day 42', 'Video 042: Sieve of Eratosthenes', 'https://leetcode.com/', 'Deloitte Cyber Job Sim Task 1 Review', 'https://www.theforage.com/'],
  ['Day 43', 'Video 072: Greedy Algorithms Part 2', 'https://leetcode.com/', 'Deloitte Cyber Job Sim Task 2 Review', 'https://www.theforage.com/'],
  ['Day 44', 'Video 073: Greedy Algorithms Part 3', 'https://leetcode.com/', 'Deloitte Cyber Job Sim Task 3 Review', 'https://www.theforage.com/'],
  ['Day 45', 'Video 074: DP 1 Part 1 (Memoization)', 'https://leetcode.com/explore/learn/card/dynamic-programming/', 'OverTheWire: Bandit Level 0 to 2', 'https://overthewire.org/wargames/bandit/'],
  ['Day 46', 'Video 075: DP 1 Part 2 (Tabulation)', 'https://leetcode.com/explore/learn/card/dynamic-programming/', 'OverTheWire: Bandit Level 3 to 5', 'https://overthewire.org/wargames/bandit/'],
  ['Day 47', 'Video 076: DP 1 Part 3 (1D DP)', 'https://leetcode.com/explore/learn/card/dynamic-programming/', 'OverTheWire: Bandit Level 6 to 8', 'https://overthewire.org/wargames/bandit/'],
  ['Day 48', 'LeetCode #53: Maximum Subarray', 'https://leetcode.com/problems/maximum-subarray/', 'OverTheWire: Bandit Level 9 to 10', 'https://overthewire.org/wargames/bandit/'],
  ['Day 49', 'LeetCode #15: 3Sum (Two Pointers)', 'https://leetcode.com/problems/3sum/', 'Linux User Management (useradd)', 'https://overthewire.org/wargames/bandit/'],
  ['Day 50', 'LeetCode #11: Container With Most Water', 'https://leetcode.com/problems/container-with-most-water/', 'Linux Group Permissions (chmod)', 'https://overthewire.org/wargames/bandit/'],
  ['Day 51', 'LeetCode #42: Trapping Rain Water', 'https://leetcode.com/problems/trapping-rain-water/', 'Linux File System Hierarchy (/var)', 'https://overthewire.org/wargames/bandit/'],
  ['Day 52', 'LeetCode #3: Longest Substring', 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', 'Shell Scripting: Bash Variables', 'https://overthewire.org/wargames/bandit/'],
  ['Day 53', 'LeetCode #76: Minimum Window Substring', 'https://leetcode.com/problems/minimum-window-substring/', 'Shell Scripting: Log Search script', 'https://overthewire.org/wargames/bandit/'],
  ['Day 54', 'LeetCode #56: Merge Intervals', 'https://leetcode.com/problems/merge-intervals/', 'Recon Tools: whois, dig, nslookup', 'https://tryhackme.com/'],
  ['Day 55', 'LeetCode #49: Group Anagrams', 'https://leetcode.com/problems/group-anagrams/', 'Passive Information Gathering', 'https://tryhackme.com/'],
  ['Day 56', 'Striver\'s Sheet: Arrays Medium 1', 'https://takeuforward.org/', 'Active Information Gathering', 'https://tryhackme.com/'],
  ['Day 57', 'Striver\'s Sheet: Arrays Medium 2', 'https://takeuforward.org/', 'PortSwigger Auth Vulnerabilities 1', 'https://portswigger.net/web-security/authentication'],
  ['Day 58', 'Striver\'s Sheet: Two Pointers', 'https://takeuforward.org/', 'PortSwigger Auth Vulnerabilities 2', 'https://portswigger.net/web-security/authentication'],
  ['Day 59', 'Striver\'s Sheet: Sliding Window', 'https://takeuforward.org/', 'Month 2 Security Review & THM', 'https://tryhackme.com/'],
  ['Day 60', 'Month 2 DSA Revision & Code Clean Up', 'https://leetcode.com/', 'Month 2 Cybersecurity Assessment', 'https://tryhackme.com/']
];

m2.forEach(row => addDayRow(row[0], row[1], row[2], row[3], row[4]));

// MONTH 3 TO 12 OVERVIEW PAGES
addMonthHeader('Months 3 to 12 Daily Roadmap & Direct Links Overview');
doc
  .fillColor(darkGray)
  .fontSize(8.5)
  .font('Helvetica')
  .text('• Month 3 (Days 61-90): Linked Lists, Stacks, Queues (LeetCode) | Linux CLI (OverTheWire Bandit: https://overthewire.org/wargames/bandit/)', { lineGap: 4 })
  .text('• Month 4 (Days 91-120): Binary Search Mastery (LeetCode) | Network Recon & Nmap (https://nmap.org/)', { lineGap: 4 })
  .text('• Month 5 (Days 121-150): Hash Maps, Trees & Trie (LeetCode) | Cryptography AES/RSA (https://cryptohack.org/)', { lineGap: 4 })
  .text('• Month 6 (Days 151-180): Graph BFS/DFS & Shortest Path | SIEM & Splunk Log Analysis (https://tryhackme.com/path/outline/soclevel1)', { lineGap: 4 })
  .text('• Month 7 (Days 181-210): Dynamic Programming 1D/2D | Vulnerability Scanners Nessus/OpenVAS (https://www.openvas.org/)', { lineGap: 4 })
  .text('• Month 8 (Days 211-240): Advanced LeetCode Sprint | Burp Suite Web Pentesting (https://portswigger.net/web-security/burp)', { lineGap: 4 })
  .text('• Month 9 (Days 241-270): Project 1 - C++ Encrypted Vault | OpenSSL C++ API (https://www.openssl.org/)', { lineGap: 4 })
  .text('• Month 10 (Days 271-300): Project 2 - C++ Packet Sniffer | Scapy & Raw Sockets (https://scapy.net/)', { lineGap: 4 })
  .text('• Month 11 (Days 301-330): LeetCode Top 150 Interview Questions | CompTIA Security+ SY0-701 (https://www.professormesser.com/)', { lineGap: 4 })
  .text('• Month 12 (Days 331-365): Resume & Portfolio Launch | October 2027 Internship Hiring Applications (https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO)', { lineGap: 4 });

doc.end();
console.log('365-Day Tracker PDF successfully generated at:', outputPath);
