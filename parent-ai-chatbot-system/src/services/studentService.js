// Logic to extract academic insights and predict risk

export const studentService = {
  getInsights: (studentData) => {
    if (!studentData) return null;

    const insights = [];
    const { attendance, performance } = studentData;

    // Attendance Insights
    if (attendance.overall < 75) {
      insights.push({
        type: 'danger',
        title: 'Low Overall Attendance',
        message: `Overall attendance is ${attendance.overall}%. Minimum 75% is required to write final exams.`
      });
    }

    const poorSubjects = attendance.subjects.filter(sub => sub.percentage < 75);
    if (poorSubjects.length > 0) {
      insights.push({
        type: 'warning',
        title: 'Subject Attendance Warning',
        message: `Low attendance in: ${poorSubjects.map(s => s.name).join(', ')}.`
      });
    }

    // Performance Insights
    if (performance.backlogs > 0) {
      insights.push({
        type: 'danger',
        title: 'Active Backlogs',
        message: `Student has ${performance.backlogs} active backlog(s) in ${performance.backlogSubjects.join(', ')}.`
      });
    }

    if (performance.cgpa > 8.0) {
      insights.push({
        type: 'success',
        title: 'Academic Excellence',
        message: `Student is performing excellently with a CGPA of ${performance.cgpa}.`
      });
    }

    return insights;
  },

  getRecommendations: (studentData) => {
    if (!studentData) return [];
    
    return studentData.performance.strengths.map(strength => {
      return `Student performs well in ${strength}. Recommend advanced certifications or hackathons in this area.`;
    });
  },

  generatePredictiveRisk: (studentData) => {
    // Simple ML simulation: Risk = low attendance + low previous grades
    const { attendance, performance } = studentData;
    
    for (const sub of attendance.subjects) {
      if (sub.percentage < 65 && performance.weaknesses.includes(sub.name)) {
        return {
          hasRisk: true,
          level: 'High',
          message: `High risk of failing/backlog in ${sub.name} due to low attendance (${sub.percentage}%) and past performance.`
        };
      }
    }
    
    return { hasRisk: false };
  }
};
