import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 40
});

const outputPath = path.join(process.cwd(), 'public', 'Ridhima_Srivastava_Resume.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Colors
const primaryColor = '#0f172a';
const accentColor = '#0284c7';
const darkGray = '#334155';
const lightGray = '#64748b';

// Header
doc
  .fillColor(primaryColor)
  .fontSize(22)
  .font('Helvetica-Bold')
  .text('RIDHIMA SRIVASTAVA', { align: 'left' });

doc.moveDown(0.2);

doc
  .fillColor(accentColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('Cybersecurity Analyst | Threat Analysis · InfoSec · C++ (DSA) · Web Security | Ghaziabad, UP, India');

doc.moveDown(0.2);

doc
  .fillColor(lightGray)
  .fontSize(9)
  .font('Helvetica')
  .text('Email: rim.sri.30@gmail.com  |  LinkedIn: linkedin.com/in/ridhimasrivastava-9b048b3b5  |  GitHub: github.com/RIDHIMA0120');

doc.moveDown(0.8);
doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

// Helper for section headings
function addSectionHeader(title) {
  doc
    .fillColor(accentColor)
    .fontSize(12)
    .font('Helvetica-Bold')
    .text(title.toUpperCase());
  
  doc.moveDown(0.2);
  doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.4);
}

// SUMMARY
addSectionHeader('Career Summary');
doc
  .fillColor(darkGray)
  .fontSize(9.5)
  .font('Helvetica')
  .text(
    'Computer Science graduate from ABES Engineering College dedicated to pursuing a career in Cybersecurity and Information Security. Hands-on experience completing enterprise cybersecurity analyst job simulations with Deloitte and Tata (via Forage), gaining exposure to threat analysis, risk mitigation, security protocols, and system workflows. Backed by computational logic in C++ (DSA) and web development skills in HTML/CSS. Seeking Cybersecurity Analyst / InfoSec Internships for 2026.',
    { align: 'justify', lineGap: 3 }
  );

doc.moveDown(1);

// EDUCATION
addSectionHeader('Education');
doc
  .fillColor(primaryColor)
  .fontSize(10.5)
  .font('Helvetica-Bold')
  .text('ABES Engineering College', { continued: true })
  .fillColor(lightGray)
  .font('Helvetica')
  .text(' — Ghaziabad, Uttar Pradesh', { align: 'left' });

doc
  .fillColor(darkGray)
  .fontSize(9.5)
  .font('Helvetica')
  .text('Bachelor of Technology, Computer Science', { continued: true })
  .fillColor(lightGray)
  .text('  ·  2025', { align: 'right' });

doc.moveDown(1);

// CYBERSECURITY SIMULATIONS & EXPERIENCE
addSectionHeader('Cybersecurity Experience & Simulations');

doc
  .fillColor(primaryColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('Deloitte Cyber Job Simulation (Forage)', { continued: true })
  .fillColor(lightGray)
  .font('Helvetica')
  .text('  ·  Cybersecurity Simulation');

doc.moveDown(0.2);

doc
  .fillColor(darkGray)
  .fontSize(9)
  .font('Helvetica')
  .text('• Analyzed enterprise cybersecurity protocols, incident workflows, and risk management standards for scalable applications.', { indent: 10, lineGap: 2 });

doc.moveDown(0.5);

doc
  .fillColor(primaryColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('Tata — Cybersecurity Analyst Job Simulation (Forage)', { continued: true })
  .fillColor(lightGray)
  .font('Helvetica')
  .text('  ·  Technical Analyst Simulation');

doc.moveDown(0.2);

doc
  .fillColor(darkGray)
  .fontSize(9)
  .font('Helvetica')
  .text('• Evaluated network access controls, threat prevention practices, and security monitoring logs for enterprise infrastructure.', { indent: 10, lineGap: 2 });

doc.moveDown(1);

// PROJECTS
addSectionHeader('Projects');

// Project 1
doc
  .fillColor(primaryColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('Amazon Clone & Front-End Architecture', { continued: true })
  .fillColor(accentColor)
  .font('Helvetica')
  .text('  — GitHub: https://github.com/RIDHIMA0120/Web-Development-project--sem-II');

doc.moveDown(0.2);

doc
  .fillColor(darkGray)
  .fontSize(9)
  .font('Helvetica')
  .text('• Built a responsive front-end clone of the Amazon website using HTML and CSS, replicating secure navigation, layout, and UI components.', { indent: 10, lineGap: 2 });

doc.moveDown(0.5);

// Project 2
doc
  .fillColor(primaryColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('Task & Incident Tracker Web App', { continued: true })
  .fillColor(accentColor)
  .font('Helvetica')
  .text('  — GitHub: https://github.com/RIDHIMA0120/RIDHIMA0120.github.io');

doc.moveDown(0.2);

doc
  .fillColor(darkGray)
  .fontSize(9)
  .font('Helvetica')
  .text('• Developed an interactive web app to log, track, and manage daily security tasks and workflows, deployed live on GitHub Pages.', { indent: 10, lineGap: 2 });

doc.moveDown(1);

// SKILLS & CERTIFICATIONS
addSectionHeader('Cybersecurity Skills & Certifications');

doc
  .fillColor(primaryColor)
  .fontSize(9.5)
  .font('Helvetica-Bold')
  .text('Security Competencies: ', { continued: true })
  .fillColor(darkGray)
  .font('Helvetica')
  .text('Threat Analysis, Fundamentals of Information Security, Access Control, Risk Mitigation, Vulnerability Assessment');

doc.moveDown(0.3);

doc
  .fillColor(primaryColor)
  .fontSize(9.5)
  .font('Helvetica-Bold')
  .text('Technical Stack: ', { continued: true })
  .fillColor(darkGray)
  .font('Helvetica')
  .text('C++ (DSA & Logic), HTML, CSS, Responsive Design, Git & GitHub');

doc.moveDown(0.5);

const certs = [
  'Deloitte Cyber Job Simulation (Forage)',
  'Tata — Cybersecurity Analyst Job Simulation (Forage)',
  'Fundamentals of Information Security',
  'Introduction to HTML & Introduction to CSS'
];

certs.forEach(cert => {
  doc
    .fillColor(darkGray)
    .fontSize(9)
    .font('Helvetica')
    .text(`• ${cert}`, { indent: 10, lineGap: 2 });
});

doc.end();
console.log('Cybersecurity PDF Resume generated at:', outputPath);
