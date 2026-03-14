import { faqData } from '../data/faqData';
import { mockStudentData } from '../data/mockStudentData';

export const chatbotService = {
  // Simple Natural Language Pattern Matching
  processQuery: async (query, regNo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        const student = mockStudentData[regNo] || Object.values(mockStudentData)[0];

        // 1. Check for specific student data queries first
        
        // Attendance queries
        if (lowerQuery.includes('attendance')) {
          if (lowerQuery.includes('low') || lowerQuery.includes('shortage')) {
             const lowSubs = student.attendance.subjects.filter(s => s.percentage < 75);
             if (lowSubs.length > 0) {
               resolve(`Yes, attendance is low in ${lowSubs.map(s => s.name).join(', ')}.`);
               return;
             }
             resolve(`No, attendance is well maintained. Overall is ${student.attendance.overall}%.`);
             return;
          }
          resolve(`Your child's overall attendance is ${student.attendance.overall}%.`);
          return;
        }

        // Performance / CGPA queries
        if (lowerQuery.includes('cgpa') || lowerQuery.includes('marks') || lowerQuery.includes('performance')) {
          resolve(`The current CGPA is ${student.performance.cgpa}.`);
          return;
        }

        // Backlog queries
        if (lowerQuery.includes('backlog') || lowerQuery.includes('fail')) {
          if (student.performance.backlogs > 0) {
            resolve(`There is ${student.performance.backlogs} active backlog in ${student.performance.backlogSubjects.join(', ')}.`);
            return;
          }
          resolve(`Great news! There are no active backlogs.`);
          return;
        }

        // Fee queries
        if (lowerQuery.includes('fee') || lowerQuery.includes('pay') || lowerQuery.includes('due')) {
          resolve(`The total fee due is ₹${student.fees.due}. Due date is ${student.fees.dueDate}.`);
          return;
        }

        // Multi-language basic support (Telugu)
        if (lowerQuery.includes('attendance entha') || lowerQuery.includes('attendence entha')) {
          resolve(`మీ పిల్లవాడి హాజరు ${student.attendance.overall}%.`);
          return;
        }

        // 2. Fallback to General FAQ Database
        for (const faq of faqData) {
          if (faq.keywords.some(kw => lowerQuery.includes(kw))) {
            resolve(faq.answer);
            return;
          }
        }

        // 3. Default Fallback
        resolve("I am your AI Parent Assistant. I can help you with attendance, CGPA, backlogs, fees, or university schedules. Could you please rephrase your question?");
      }, 800); // Simulate processing time
    });
  }
};
