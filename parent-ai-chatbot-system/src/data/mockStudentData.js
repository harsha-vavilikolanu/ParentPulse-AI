export const parentCredentials = {
  validPhoneNumbers: ['9876543210', '1234567890'],
  validRegNumbers: ['211FA04123', '211FA04000']
};

export const mockStudentData = {
  "211FA04123": {
    name: "Rahul Verma",
    regNo: "211FA04123",
    branch: "Computer Science and Engineering",
    year: "3rd Year",
    semester: "Semester 6",
    attendance: {
      overall: 72,
      subjects: [
        { name: "Compiler Design", percentage: 85, status: "Good" },
        { name: "Computer Networks", percentage: 78, status: "Average" },
        { name: "Web Technologies", percentage: 90, status: "Excellent" },
        { name: "Data Structures", percentage: 65, status: "Poor" },
        { name: "Database Management", percentage: 60, status: "Critical" }
      ],
      history: [65, 68, 70, 75, 78, 72] // Monthly trend
    },
    performance: {
      cgpa: 8.2,
      semesters: [
        { sem: "Sem 1", gpa: 8.0 },
        { sem: "Sem 2", gpa: 7.8 },
        { sem: "Sem 3", gpa: 8.4 },
        { sem: "Sem 4", gpa: 8.5 },
        { sem: "Sem 5", gpa: 8.2 },
      ],
      backlogs: 1,
      backlogSubjects: ["Engineering Mathematics II"],
      strengths: ["Web Technologies", "Programming"],
      weaknesses: ["Mathematics", "Database Management"]
    },
    fees: {
      total: 120000,
      paid: 80000,
      due: 40000,
      dueDate: "2026-04-15",
      status: "Partial",
      history: [
        { date: "2025-08-10", amount: 40000, method: "Net Banking" },
        { date: "2026-01-05", amount: 40000, method: "UPI" }
      ]
    },
    facultyDocs: {
      counselor: { name: "Dr. K. Srinivas", phone: "+91-9876500001", email: "srinivas.k@vignan.ac.in" },
      hod: { name: "Dr. D. Venkateswarlu", phone: "+91-9876500002", email: "hod.cse@vignan.ac.in" }
    },
    notifications: [
      { id: 1, type: 'warning', text: 'DBMS attendance is critical (60%). Immediate improvement required.', date: '2026-03-12' },
      { id: 2, type: 'info', text: 'Mid-semester exams scheduled from March 20th.', date: '2026-03-10' },
      { id: 3, type: 'alert', text: 'Fee due of ₹40,000 by April 15.', date: '2026-03-01' }
    ]
  }
};
