import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

// Helper function to build 365 days of detailed daywise data with exact links
function generateAll365Days() {
  const days = [];

  for (let d = 1; d <= 365; d++) {
    let monthNum = Math.ceil(d / 30.416);
    if (monthNum > 12) monthNum = 12;

    let dsaTopic = '';
    let dsaLink = '';
    let cyberTopic = '';
    let cyberLink = '';

    if (d <= 30) {
      // Month 1
      if (d === 1) { dsaTopic = 'Video 003: C++ Intro & I/O Operators'; dsaLink = 'https://www.learncpp.com/cpp-tutorial/cpp-introduction/'; cyberTopic = 'OSI Model Overview: All 7 Layers'; cyberLink = 'https://www.professormesser.com/networkplus/n10-008/n10-008-training-course/'; }
      else if (d === 2) { dsaTopic = 'Video 004: Conditionals Part 1 (if/else)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'OSI Model: Layers 1 to 4'; cyberLink = 'https://www.wireshark.org/docs/wsug_html_chunked/'; }
      else if (d === 3) { dsaTopic = 'Video 005: Conditionals Part 2 (Nested/Switch)'; dsaLink = 'https://www.geeksforgeeks.org/c-plus-plus/'; cyberTopic = 'TCP vs UDP Protocols & Header Structures'; cyberLink = 'https://tryhackme.com/path/outline/network-fundamentals'; }
      else if (d === 4) { dsaTopic = 'Video 006: Loops Part 1 (for/while)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'IP Addressing: IPv4/IPv6 & Subnetting'; cyberLink = 'https://tryhackme.com/path/outline/network-fundamentals'; }
      else if (d === 5) { dsaTopic = 'Video 007: Loops Part 2 (Factorial & Prime)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'MAC Addresses & ARP Protocol'; cyberLink = 'https://tryhackme.com/path/outline/network-fundamentals'; }
      else if (d === 6) { dsaTopic = 'Video 008: Pattern Printing Part 1'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'Port Numbers & Common Services (21,22,80,443)'; cyberLink = 'https://tryhackme.com/path/outline/network-fundamentals'; }
      else if (d === 7) { dsaTopic = 'Video 009: Pattern Printing Part 2'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'DNS Resolution Process Steps'; cyberLink = 'https://tryhackme.com/path/outline/network-fundamentals'; }
      else if (d === 8) { dsaTopic = 'Video 010: Fundamentals Live Session'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Wireshark Overview & Interface Setup'; cyberLink = 'https://www.wireshark.org/docs/wsug_html_chunked/'; }
      else if (d === 9) { dsaTopic = 'Video 011: Functions & Pass by Value/Ref'; dsaLink = 'https://www.learncpp.com/'; cyberTopic = 'Wireshark Packet Capture: Inspect HTTP'; cyberLink = 'https://www.wireshark.org/docs/wsug_html_chunked/'; }
      else if (d === 10) { dsaTopic = 'Video 012: Pointers & Memory Addresses'; dsaLink = 'https://www.learncpp.com/'; cyberTopic = 'Wireshark Display Filters (http, ip.src)'; cyberLink = 'https://www.wireshark.org/docs/wsug_html_chunked/'; }
      else if (d === 11) { dsaTopic = 'Video 013: 1D Arrays Part 1 (Traversal)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'InfoSec CIA Triad Overview'; cyberLink = 'https://tryhackme.com/path/outline/pre-security'; }
      else if (d === 12) { dsaTopic = 'Video 014: 1D Arrays Part 2 (Vectors)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Confidentiality & Symmetric Encryption'; cyberLink = 'https://cryptohack.org/courses/symmetric/'; }
      else if (d === 13) { dsaTopic = 'Video 015: 1D Arrays Part 3 (Two Pointers)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Integrity & Cryptographic Hashing'; cyberLink = 'https://cryptohack.org/courses/hashes/'; }
      else if (d === 14) { dsaTopic = 'LeetCode #1: Two Sum & #26: Duplicates'; dsaLink = 'https://leetcode.com/problems/two-sum/'; cyberTopic = 'Availability & DDoS Attack Vectors'; cyberLink = 'https://tryhackme.com/path/outline/pre-security'; }
      else if (d === 15) { dsaTopic = 'LeetCode #121: Best Time to Buy/Sell Stock'; dsaLink = 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'; cyberTopic = 'TryHackMe Pre-Security Room 1 (Networks)'; cyberLink = 'https://tryhackme.com/path/outline/pre-security'; }
      else if (d === 16) { dsaTopic = 'Video 016: 2D Arrays Part 1 (Matrices)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'TryHackMe Pre-Security Room 2 (Web Works)'; cyberLink = 'https://tryhackme.com/path/outline/pre-security'; }
      else if (d === 17) { dsaTopic = 'Video 017: 2D Arrays Part 2 (Transpose)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'HTTP Request Methods (GET, POST, PUT)'; cyberLink = 'https://portswigger.net/web-security'; }
      else if (d === 18) { dsaTopic = 'Video 018: 2D Arrays Part 3 (Spiral Order)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'HTTP Response Status Codes (200, 404)'; cyberLink = 'https://portswigger.net/web-security'; }
      else if (d === 19) { dsaTopic = 'Video 019: Strings Part 1 (std::string)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Cookies, Sessions & LocalStorage Security'; cyberLink = 'https://portswigger.net/web-security'; }
      else if (d === 20) { dsaTopic = 'Video 020: Strings Part 2 (Valid Anagrams)'; dsaLink = 'https://leetcode.com/problems/valid-anagram/'; cyberTopic = 'TryHackMe Pre-Security Room 3 (Web Apps)'; cyberLink = 'https://tryhackme.com/path/outline/pre-security'; }
      else if (d === 21) { dsaTopic = 'Video 021: 2D Arrays Live Class'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'OWASP Top 10 Security Overview'; cyberLink = 'https://owasp.org/www-project-top-ten/'; }
      else if (d === 22) { dsaTopic = 'Video 022: Time Complexity (Big-O)'; dsaLink = 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/'; cyberTopic = 'OWASP #1: Broken Access Control'; cyberLink = 'https://portswigger.net/web-security/access-control'; }
      else if (d === 23) { dsaTopic = 'Video 023: Space Complexity Analysis'; dsaLink = 'https://www.geeksforgeeks.org/g-fact-86/'; cyberTopic = 'OWASP #2: Cryptographic Failures'; cyberLink = 'https://owasp.org/www-project-top-ten/'; }
      else if (d === 24) { dsaTopic = 'Video 024: Bubble Sorting O(N^2)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'OWASP #3: Injection Attacks Overview'; cyberLink = 'https://portswigger.net/web-security/sql-injection'; }
      else if (d === 25) { dsaTopic = 'Video 025: Selection & Insertion Sort'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'SQL Injection (SQLi) Theory & Syntax'; cyberLink = 'https://portswigger.net/web-security/sql-injection'; }
      else if (d === 26) { dsaTopic = 'Video 026: Complexity Live Session'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'PortSwigger Academy: SQL Injection Lab 1'; cyberLink = 'https://portswigger.net/web-security/sql-injection'; }
      else if (d === 27) { dsaTopic = 'Video 027: Problems on Sorting'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'PortSwigger Academy: SQL Injection Lab 2'; cyberLink = 'https://portswigger.net/web-security/sql-injection'; }
      else if (d === 28) { dsaTopic = 'Video 028: Searching Part 1 (Binary Search)'; dsaLink = 'https://leetcode.com/explore/learn/card/binary-search/'; cyberTopic = 'Cross-Site Scripting (XSS) Overview'; cyberLink = 'https://portswigger.net/web-security/cross-site-scripting'; }
      else if (d === 29) { dsaTopic = 'Video 029: Searching Part 2 (Lower/Upper)'; dsaLink = 'https://leetcode.com/explore/learn/card/binary-search/'; cyberTopic = 'PortSwigger Academy: XSS Lab 1'; cyberLink = 'https://portswigger.net/web-security/cross-site-scripting'; }
      else if (d === 30) { dsaTopic = 'Video 030: Searching Part 3 (Answer Space)'; dsaLink = 'https://leetcode.com/explore/learn/card/binary-search/'; cyberTopic = 'Month 1 Security Review & TryHackMe Room'; cyberLink = 'https://tryhackme.com/'; }
    } else if (d <= 60) {
      // Month 2
      const dayOffset = d - 30;
      if (dayOffset === 1) { dsaTopic = 'Video 031: Recursion Part 1 (Base Cases)'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'PortSwigger Academy: XSS Lab 2'; cyberLink = 'https://portswigger.net/web-security/cross-site-scripting'; }
      else if (dayOffset === 2) { dsaTopic = 'Video 032: Recursion Part 2 (Fibonacci)'; dsaLink = 'https://leetcode.com/problems/fibonacci-number/'; cyberTopic = 'PortSwigger Academy: XSS Lab 3'; cyberLink = 'https://portswigger.net/web-security/cross-site-scripting'; }
      else if (dayOffset === 3) { dsaTopic = 'Video 033: Recursion Part 3 (Subsets)'; dsaLink = 'https://leetcode.com/problems/subsets/'; cyberTopic = 'PortSwigger Academy: XSS Lab 4'; cyberLink = 'https://portswigger.net/web-security/cross-site-scripting'; }
      else if (dayOffset === 4) { dsaTopic = 'Video 034: Sorting Live Session Review'; dsaLink = 'https://takeuforward.org/'; cyberTopic = 'Cross-Site Request Forgery (CSRF)'; cyberLink = 'https://portswigger.net/web-security/csrf'; }
      else if (dayOffset === 5) { dsaTopic = 'Video 035: Recursion Part 4 (Backtracking)'; dsaLink = 'https://leetcode.com/problems/permutations/'; cyberTopic = 'PortSwigger Academy: CSRF Lab 1'; cyberLink = 'https://portswigger.net/web-security/csrf'; }
      else if (dayOffset === 6) { dsaTopic = 'Video 036: Merge Sort O(N log N)'; dsaLink = 'https://leetcode.com/problems/sort-an-array/'; cyberTopic = 'TryHackMe: Web Fundamentals Room 1'; cyberLink = 'https://tryhackme.com/path/outline/web-fundamentals'; }
      else if (dayOffset === 7) { dsaTopic = 'Video 037: Quick Sort & Partitioning'; dsaLink = 'https://leetcode.com/problems/sort-an-array/'; cyberTopic = 'TryHackMe: Web Fundamentals Room 2'; cyberLink = 'https://tryhackme.com/path/outline/web-fundamentals'; }
      else if (dayOffset === 8) { dsaTopic = 'Video 038: Recursion Live Session'; dsaLink = 'https://takeuforward.org/'; cyberTopic = 'TryHackMe: Web Fundamentals Room 3'; cyberLink = 'https://tryhackme.com/path/outline/web-fundamentals'; }
      else if (dayOffset === 9) { dsaTopic = 'Video 039: Cyclic Sort Pattern'; dsaLink = 'https://leetcode.com/problems/missing-number/'; cyberTopic = 'TryHackMe: Web Fundamentals Room 4'; cyberLink = 'https://tryhackme.com/path/outline/web-fundamentals'; }
      else if (dayOffset === 10) { dsaTopic = 'Video 040: Special Algos 1 (Prefix Sum)'; dsaLink = 'https://leetcode.com/problems/range-sum-query-immutable/'; cyberTopic = 'TryHackMe: Web Fundamentals Room 5'; cyberLink = 'https://tryhackme.com/path/outline/web-fundamentals'; }
      else if (dayOffset === 11) { dsaTopic = 'Video 041: Special Algos 2 (Sliding Window)'; dsaLink = 'https://leetcode.com/problems/max-consecutive-ones-iii/'; cyberTopic = 'TryHackMe: Web Fundamentals Room 6'; cyberLink = 'https://tryhackme.com/path/outline/web-fundamentals'; }
      else if (dayOffset === 12) { dsaTopic = 'Video 042: Special Algos 3 (Sieve)'; dsaLink = 'https://leetcode.com/problems/count-primes/'; cyberTopic = 'Deloitte Cyber Job Sim Task 1 Review'; cyberLink = 'https://www.theforage.com/'; }
      else if (dayOffset === 13) { dsaTopic = 'Video 072: Greedy Algorithms Part 2'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Deloitte Cyber Job Sim Task 2 Review'; cyberLink = 'https://www.theforage.com/'; }
      else if (dayOffset === 14) { dsaTopic = 'Video 073: Greedy Algorithms Part 3'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Deloitte Cyber Job Sim Task 3 Review'; cyberLink = 'https://www.theforage.com/'; }
      else if (dayOffset === 15) { dsaTopic = 'Video 074: DP 1 Part 1 (Memoization)'; dsaLink = 'https://leetcode.com/explore/learn/card/dynamic-programming/'; cyberTopic = 'OverTheWire: Bandit Level 0 to 2'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 16) { dsaTopic = 'Video 075: DP 1 Part 2 (Tabulation)'; dsaLink = 'https://leetcode.com/explore/learn/card/dynamic-programming/'; cyberTopic = 'OverTheWire: Bandit Level 3 to 5'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 17) { dsaTopic = 'Video 076: DP 1 Part 3 (1D DP)'; dsaLink = 'https://leetcode.com/explore/learn/card/dynamic-programming/'; cyberTopic = 'OverTheWire: Bandit Level 6 to 8'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 18) { dsaTopic = 'LeetCode #53: Maximum Subarray'; dsaLink = 'https://leetcode.com/problems/maximum-subarray/'; cyberTopic = 'OverTheWire: Bandit Level 9 to 10'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 19) { dsaTopic = 'LeetCode #15: 3Sum (Two Pointers)'; dsaLink = 'https://leetcode.com/problems/3sum/'; cyberTopic = 'Linux User Management (useradd)'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 20) { dsaTopic = 'LeetCode #11: Container With Most Water'; dsaLink = 'https://leetcode.com/problems/container-with-most-water/'; cyberTopic = 'Linux Group Permissions (chmod)'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 21) { dsaTopic = 'LeetCode #42: Trapping Rain Water'; dsaLink = 'https://leetcode.com/problems/trapping-rain-water/'; cyberTopic = 'Linux File System Hierarchy (/var)'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 22) { dsaTopic = 'LeetCode #3: Longest Substring'; dsaLink = 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'; cyberTopic = 'Shell Scripting Basics: Bash Variables'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 23) { dsaTopic = 'LeetCode #76: Minimum Window Substring'; dsaLink = 'https://leetcode.com/problems/minimum-window-substring/'; cyberTopic = 'Shell Scripting: Log Search script'; cyberLink = 'https://overthewire.org/wargames/bandit/'; }
      else if (dayOffset === 24) { dsaTopic = 'LeetCode #56: Merge Intervals'; dsaLink = 'https://leetcode.com/problems/merge-intervals/'; cyberTopic = 'Recon Tools: whois, dig, nslookup'; cyberLink = 'https://tryhackme.com/'; }
      else if (dayOffset === 25) { dsaTopic = 'LeetCode #49: Group Anagrams'; dsaLink = 'https://leetcode.com/problems/group-anagrams/'; cyberTopic = 'Passive Information Gathering'; cyberLink = 'https://tryhackme.com/'; }
      else if (dayOffset === 26) { dsaTopic = 'Striver\'s Sheet: Arrays Medium 1'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'Active Information Gathering'; cyberLink = 'https://tryhackme.com/'; }
      else if (dayOffset === 27) { dsaTopic = 'Striver\'s Sheet: Arrays Medium 2'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'PortSwigger Auth Vulnerabilities 1'; cyberLink = 'https://portswigger.net/web-security/authentication'; }
      else if (dayOffset === 28) { dsaTopic = 'Striver\'s Sheet: Two Pointers'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'PortSwigger Auth Vulnerabilities 2'; cyberLink = 'https://portswigger.net/web-security/authentication'; }
      else if (dayOffset === 29) { dsaTopic = 'Striver\'s Sheet: Sliding Window'; dsaLink = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'; cyberTopic = 'Month 2 Security Review & THM'; cyberLink = 'https://tryhackme.com/'; }
      else { dsaTopic = 'Month 2 DSA Revision & Code Clean Up'; dsaLink = 'https://leetcode.com/problemset/all/'; cyberTopic = 'Month 2 Cybersecurity Assessment'; cyberLink = 'https://tryhackme.com/'; }
    } else if (d <= 90) {
      // Month 3
      const dayOffset = d - 60;
      if (dayOffset <= 10) {
        dsaTopic = `Singly Linked List: Concept & Node Structure (Day ${dayOffset})`;
        dsaLink = 'https://leetcode.com/problems/reverse-linked-list/';
        cyberTopic = `OverTheWire: Bandit Level ${10 + dayOffset} (Linux CLI)`;
        cyberLink = 'https://overthewire.org/wargames/bandit/';
      } else if (dayOffset <= 20) {
        dsaTopic = `Stacks & Monotonic Patterns: LeetCode #20, #155 (Day ${dayOffset})`;
        dsaLink = 'https://leetcode.com/problems/valid-parentheses/';
        cyberTopic = `Linux Process & Log Analysis (/var/log/auth.log) (Day ${dayOffset})`;
        cyberLink = 'https://tryhackme.com/path/outline/pre-security';
      } else {
        dsaTopic = `Queues & Sliding Window Max: LeetCode #239 (Day ${dayOffset})`;
        dsaLink = 'https://leetcode.com/problems/sliding-window-maximum/';
        cyberTopic = `TryHackMe: Linux Fundamentals Part 1-3 (Day ${dayOffset})`;
        cyberLink = 'https://tryhackme.com/path/outline/pre-security';
      }
    } else if (d <= 120) {
      // Month 4
      const dayOffset = d - 90;
      dsaTopic = `Binary Search 1D/2D & Answer Space: LeetCode #${33 + (dayOffset % 10)} (Day ${d})`;
      dsaLink = 'https://leetcode.com/explore/learn/card/binary-search/';
      cyberTopic = `Nmap Scanning & Network Recon (-sS, -sV, NSE) (Day ${d})`;
      cyberLink = 'https://nmap.org/book/man.html';
    } else if (d <= 150) {
      // Month 5
      const dayOffset = d - 120;
      dsaTopic = `Hash Maps, BST & Trie Implementation: LeetCode #${98 + (dayOffset % 10)} (Day ${d})`;
      dsaLink = 'https://leetcode.com/problems/implement-trie-prefix-tree/';
      cyberTopic = `Cryptography: AES-256, RSA & SHA-256 (Day ${d})`;
      cyberLink = 'https://cryptohack.org/courses/symmetric/';
    } else if (d <= 180) {
      // Month 6
      const dayOffset = d - 150;
      dsaTopic = `Graph BFS/DFS & Shortest Path: LeetCode #${200 + (dayOffset % 10)} (Day ${d})`;
      dsaLink = 'https://leetcode.com/problems/number-of-islands/';
      cyberTopic = `SIEM Log Analysis, Splunk & SOC Level 1 (Day ${d})`;
      cyberLink = 'https://tryhackme.com/path/outline/soclevel1';
    } else if (d <= 210) {
      // Month 7
      const dayOffset = d - 180;
      dsaTopic = `1D/2D Dynamic Programming: LeetCode #${70 + (dayOffset % 10)} (Day ${d})`;
      dsaLink = 'https://leetcode.com/explore/learn/card/dynamic-programming/';
      cyberTopic = `Vulnerability Scanners: Nessus & OpenVAS Auditing (Day ${d})`;
      cyberLink = 'https://www.openvas.org/';
    } else if (d <= 240) {
      // Month 8
      const dayOffset = d - 210;
      dsaTopic = `Advanced LeetCode Medium/Hard Problem Sprint (Day ${d})`;
      dsaLink = 'https://leetcode.com/problemset/all/';
      cyberTopic = `Web Pentesting with Burp Suite (Day ${d})`;
      cyberLink = 'https://portswigger.net/web-security/burp';
    } else if (d <= 270) {
      // Month 9
      const dayOffset = d - 240;
      dsaTopic = `Portfolio Project 1: C++ Encrypted File Vault CLI Tool (Day ${d})`;
      dsaLink = 'https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO';
      cyberTopic = `OpenSSL C++ API & AES-256 Security Audit (Day ${d})`;
      cyberLink = 'https://www.openssl.org/docs/';
    } else if (d <= 300) {
      // Month 10
      const dayOffset = d - 270;
      dsaTopic = `Portfolio Project 2: C++ / Python Packet Sniffer (Day ${d})`;
      dsaLink = 'https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO';
      cyberTopic = `Packet Parsing & SYN Flood Anomaly Detection (Day ${d})`;
      cyberLink = 'https://scapy.net/';
    } else if (d <= 330) {
      // Month 11
      const dayOffset = d - 300;
      dsaTopic = `LeetCode Top 150 Interview Questions Sprint (Day ${d})`;
      dsaLink = 'https://leetcode.com/studyplan/top-interview-150/';
      cyberTopic = `CompTIA Security+ SY0-701 & Google Cyber Cert (Day ${d})`;
      cyberLink = 'https://www.professormesser.com/security-plus/sy0-701/';
    } else {
      // Month 12
      const dayOffset = d - 330;
      dsaTopic = `Resume PDF Launch & Coding Assessment Practice (Day ${d})`;
      dsaLink = 'https://github.com/RIDHIMA0120/RIDHIMA_PORTFOLIO';
      cyberTopic = `Daily Applications to 5 Cyber & SOC Intern Roles (Day ${d})`;
      cyberLink = 'https://www.linkedin.com/jobs/';
    }

    days.push({
      day: `Day ${d}`,
      dayNum: d,
      monthNum,
      dsaTopic,
      dsaLink,
      cyberTopic,
      cyberLink
    });
  }

  return days;
}

const all365Data = generateAll365Days();

// 1. GENERATE MARKDOWN FILE WITH EXPLICIT CLICKABLE LINKS FOR ALL 365 DAYS
function generateMarkdownTracker() {
  let mdContent = `# 🗓️ Complete 365-Day Daywise Master Tracker (With Direct Links)
### Target: Securing a Cybersecurity Internship by October 2027

A complete day-by-day learning schedule created for **Ridhima Srivastava** (2nd Year B.Tech CS at ABES Engineering College) balancing **2 Hours of DSA (in C++)** and **1 Hour of Cybersecurity** for all 365 days, with direct access links for every topic and a downloadable PDF.

---

## 📄 Download PDF & Quick Links
- 📥 **Download 365-Day PDF Tracker**: [Complete_365_Daywise_Tracker_Ridhima.pdf](file:///d:/private/public/Complete_365_Daywise_Tracker_Ridhima.pdf)
- 📁 **Your Local Video Folder**: [file:///d:/private/dsaraghavvideos/](file:///d:/private/dsaraghavvideos/)
- 🌐 **Live Website Tracker**: [http://127.0.0.1:3000/#dsa-video-tracker](http://127.0.0.1:3000/#dsa-video-tracker)

---
`;

  for (let m = 1; m <= 12; m++) {
    mdContent += `\n## 🗓️ MONTH ${m} DAYWISE SCHEDULE\n\n`;
    mdContent += `| Day | 🧠 DSA Syllabus (2 Hours) & Direct Link | 🛡️ Cybersecurity Syllabus (1 Hour) & Direct Link |\n`;
    mdContent += `| :--- | :--- | :--- |\n`;

    const monthDays = all365Data.filter(item => item.monthNum === m);
    monthDays.forEach(item => {
      mdContent += `| **${item.day}** | ${item.dsaTopic} 🔗 [Access Topic](${item.dsaLink}) | ${item.cyberTopic} 🔗 [Access Topic](${item.cyberLink}) |\n`;
    });
  }

  const mdPath = path.join(process.cwd(), 'Complete_365_Daywise_Tracker_All_12_Months.md');
  const artifactPath = 'C:\\Users\\ridhi\\.gemini\\antigravity\\brain\\8e46dc07-82b8-4fe8-b7a5-016a81185ee4\\Complete_365_Daywise_Tracker_All_12_Months.md';

  fs.writeFileSync(mdPath, mdContent);
  fs.writeFileSync(artifactPath, mdContent);
  console.log('Markdown tracker with clickable links written to:', mdPath);
}

// 2. GENERATE PDF FILE WITH ACTIVE CLICKABLE PDF HYPERLINKS FOR ALL 365 DAYS
function generatePDFTracker() {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 30,
    bufferPages: true
  });

  const rootPath = path.join(process.cwd(), 'Complete_365_Daywise_Tracker_Ridhima.pdf');
  const publicPath = path.join(process.cwd(), 'public', 'Complete_365_Daywise_Tracker_Ridhima.pdf');

  const writeStreamRoot = fs.createWriteStream(rootPath);
  doc.pipe(writeStreamRoot);

  const primaryColor = '#0f172a';
  const accentBlue = '#0284c7';
  const accentGreen = '#15803d';
  const darkGray = '#334155';
  const lightGray = '#64748b';

  // Title Page
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
    .text('Daily Schedule: 2 Hours DSA (C++) + 1 Hour Cybersecurity (Every Topic Clickable Below)', { align: 'center' });

  doc.moveDown(0.4);
  doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(30, doc.y).lineTo(565, doc.y).stroke();
  doc.moveDown(0.4);

  function checkPageSpace(heightNeeded = 22) {
    if (doc.y + heightNeeded > 780) {
      doc.addPage();
    }
  }

  function addMonthHeader(monthNum) {
    checkPageSpace(32);
    doc
      .fillColor(accentBlue)
      .fontSize(10)
      .font('Helvetica-Bold')
      .text(`MONTH ${monthNum} DAYWISE SCHEDULE (DAYS ${((monthNum-1)*30)+1} TO ${monthNum === 12 ? 365 : monthNum*30})`, 30, doc.y);
    
    doc.moveDown(0.2);
    doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(30, doc.y).lineTo(565, doc.y).stroke();
    doc.moveDown(0.3);
  }

  let currentMonth = 0;

  all365Data.forEach(item => {
    if (item.monthNum !== currentMonth) {
      currentMonth = item.monthNum;
      addMonthHeader(currentMonth);
    }

    checkPageSpace(18);
    const startY = doc.y;

    // Day
    doc.fillColor(primaryColor).fontSize(7).font('Helvetica-Bold').text(item.day, 30, startY, { width: 40 });

    // DSA Topic Clickable Link
    doc.fillColor(accentBlue).fontSize(6.5).font('Helvetica').text(`${item.dsaTopic} 🔗`, 72, startY, { width: 235, link: item.dsaLink, underline: true });

    // Cyber Topic Clickable Link
    doc.fillColor(accentGreen).fontSize(6.5).font('Helvetica').text(`${item.cyberTopic} 🔗`, 312, startY, { width: 250, link: item.cyberLink, underline: true });

    doc.moveDown(0.22);
  });

  doc.end();

  writeStreamRoot.on('finish', () => {
    fs.copyFileSync(rootPath, publicPath);
    console.log('Clickable PDF tracker generated at:');
    console.log('1.', rootPath);
    console.log('2.', publicPath);
  });
}

generateMarkdownTracker();
generatePDFTracker();
