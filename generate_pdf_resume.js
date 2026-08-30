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
  .text('Frontend Developer | HTML · CSS · C++ | Ghaziabad, Uttar Pradesh, India');

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
addSectionHeader('Summary');
doc
  .fillColor(darkGray)
  .fontSize(9.5)
  .font('Helvetica')
  .text(
    'Computer Science graduate from ABES Engineering College with hands-on experience building responsive, clean websites using HTML and CSS. Currently strengthening problem-solving skills through Data Structures & Algorithms in C++. Completed job simulations with Deloitte and Tata, gaining exposure to real-world professional workflows. Seeking a Frontend Development / Web Development internship for 2026.',
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

// PROJECTS
addSectionHeader('Projects');

// Project 1
doc
  .fillColor(primaryColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('Amazon Clone', { continued: true })
  .fillColor(accentColor)
  .font('Helvetica')
  .text('  — GitHub: https://github.com/RIDHIMA0120/Web-Development-project--sem-II');

doc.moveDown(0.2);

doc
  .fillColor(darkGray)
  .fontSize(9)
  .font('Helvetica')
  .text('• Built a responsive front-end clone of the Amazon website using HTML and CSS, replicating layout, navigation, and product display components.', { indent: 10, lineGap: 2 });

doc.moveDown(0.6);

// Project 2
doc
  .fillColor(primaryColor)
  .fontSize(10)
  .font('Helvetica-Bold')
  .text('To-Do List App', { continued: true })
  .fillColor(accentColor)
  .font('Helvetica')
  .text('  — GitHub / Live: https://github.com/RIDHIMA0120/RIDHIMA0120.github.io');

doc.moveDown(0.2);

doc
  .fillColor(darkGray)
  .fontSize(9)
  .font('Helvetica')
  .text('• Developed and deployed an interactive to-do list web app to add, manage, and track daily tasks, hosted via GitHub Pages.', { indent: 10, lineGap: 2 });

doc.moveDown(1);

// SKILLS
addSectionHeader('Skills');
doc
  .fillColor(primaryColor)
  .fontSize(9.5)
  .font('Helvetica-Bold')
  .text('Languages & Web: ', { continued: true })
  .fillColor(darkGray)
  .font('Helvetica')
  .text('HTML, CSS, C++');

doc.moveDown(0.3);

doc
  .fillColor(primaryColor)
  .fontSize(9.5)
  .font('Helvetica-Bold')
  .text('Concepts: ', { continued: true })
  .fillColor(darkGray)
  .font('Helvetica')
  .text('Responsive Web Design, Front-End Development, Data Structures & Algorithms (in progress)');

doc.moveDown(1);

// CERTIFICATIONS
addSectionHeader('Certifications');
const certs = [
  'Introduction to HTML',
  'Introduction to CSS',
  'Fundamentals of Information Security',
  'Deloitte Cyber Job Simulation (Forage)',
  'Tata — Cybersecurity Analyst Job Simulation (Forage)'
];

certs.forEach(cert => {
  doc
    .fillColor(darkGray)
    .fontSize(9)
    .font('Helvetica')
    .text(`• ${cert}`, { indent: 10, lineGap: 2 });
});

doc.end();
console.log('PDF Resume successfully generated at:', outputPath);
