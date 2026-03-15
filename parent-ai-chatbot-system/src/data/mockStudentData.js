export const parentCredentials = {
  validPhoneNumbers: ['9876543210', '1234567890', '9988776655'],
  validRegNumbers: ['231FA04092', '231FA04254', '211FA04123', '211FA04000', '221FA05001']
};

export const mockStudentData = {
  "231FA04092": {
    name: "Harsha AN",
    regNo: "231FA04092",
    branch: "Computer Science and Engineering",
    year: "1st Year",
    semester: "Semester 2",
    attendance: {
      overall: 85,
      subjects: [
        { name: "Programming in C", percentage: 90, status: "Excellent" },
        { name: "Engineering Physics", percentage: 82, status: "Good" },
        { name: "Engineering Mathematics", percentage: 75, status: "Average" },
        { name: "Communicative English", percentage: 95, status: "Excellent" },
      ],
      history: [80, 82, 85, 88, 85]
    },
    performance: {
      cgpa: 9.1,
      semesters: [
        { sem: "Sem 1", gpa: 9.1 },
      ],
      backlogs: 0,
      backlogSubjects: [],
      strengths: ["Programming", "Communication"],
      weaknesses: ["Mathematics"]
    },
    fees: {
      total: 150000,
      paid: 150000,
      due: 0,
      dueDate: "2026-08-10",
      status: "Paid",
      history: [
        { date: "2025-08-10", amount: 150000, method: "Net Banking" },
      ]
    },
    facultyDocs: {
      counselor: { name: "Dr. A. Ramarao", phone: "+91-9876500003", email: "ramarao.a@vignan.ac.in" },
      hod: { name: "Dr. D. Venkateswarlu", phone: "+91-9876500002", email: "hod.cse@vignan.ac.in" }
    },
    notifications: [
      { id: 1, type: 'success', text: 'Congratulations on your excellent performance in Semester 1!', date: '2026-03-10' },
      { id: 2, type: 'info', text: 'Internship fair on April 5th.', date: '2026-03-15' },
    ]
  },
  "231FA04254": {
    name: "Hari",
    regNo: "231FA04254",
    branch: "Electronics and Communication Engineering",
    year: "1st Year",
    semester: "Semester 2",
    attendance: {
      overall: 78,
      subjects: [
        { name: "Basic Electrical Engineering", percentage: 70, status: "Average" },
        { name: "Engineering Chemistry", percentage: 85, status: "Good" },
        { name: "Engineering Mathematics", percentage: 65, status: "Poor" },
        { name: "Workshop Practice", percentage: 92, status: "Excellent" },
      ],
      history: [75, 72, 78, 80, 78]
    },
    performance: {
      cgpa: 8.5,
      semesters: [
        { sem: "Sem 1", gpa: 8.5 },
      ],
      backlogs: 1,
      backlogSubjects: ["Engineering Mathematics"],
      strengths: ["Practical Skills"],
      weaknesses: ["Mathematics"]
    },
    fees: {
      total: 145000,
      paid: 75000,
      due: 70000,
      dueDate: "2026-04-20",
      status: "Partial",
      history: [
        { date: "2025-08-12", amount: 75000, method: "Demand Draft" },
      ]
    },
    facultyDocs: {
      counselor: { name: "Dr. B. Suresh", phone: "+91-9876500004", email: "suresh.b@vignan.ac.in" },
      hod: { name: "Dr. M. Satish", phone: "+91-9876500005", email: "hod.ece@vignan.ac.in" }
    },
    notifications: [
      { id: 1, type: 'warning', text: 'Your attendance in Engineering Mathematics is low.', date: '2026-03-11' },
      { id: 2, type: 'alert', text: 'Fee payment of ₹70,000 is due on April 20th.', date: '2026-03-05' },
    ]
  },
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
  },
  "221FA05001": {
    name: "Priya Sharma",
    regNo: "221FA05001",
    branch: "Information Technology",
    year: "2nd Year",
    semester: "Semester 4",
    attendance: {
      overall: 92,
      subjects: [
        { name: "Object Oriented Programming", percentage: 95, status: "Excellent" },
        { name: "Operating Systems", percentage: 90, status: "Excellent" },
        { name: "Software Engineering", percentage: 88, status: "Good" },
        { name: "Discrete Mathematics", percentage: 91, status: "Excellent" },
      ],
      history: [90, 91, 92, 93, 92]
    },
    performance: {
      cgpa: 9.5,
      semesters: [
        { sem: "Sem 1", gpa: 9.3 },
        { sem: "Sem 2", gpa: 9.6 },
        { sem: "Sem 3", gpa: 9.5 },
      ],
      backlogs: 0,
      backlogSubjects: [],
      strengths: ["Programming", "Problem Solving"],
      weaknesses: []
    },
    fees: {
      total: 130000,
      paid: 130000,
      due: 0,
      dueDate: "2026-08-15",
      status: "Paid",
      history: [
        { date: "2025-08-15", amount: 130000, method: "Net Banking" },
      ]
    },
    facultyDocs: {
      counselor: { name: "Dr. S. Sharma", phone: "+91-9876500006", email: "sharma.s@vignan.ac.in" },
      hod: { name: "Dr. R. Gupta", phone: "+91-9876500007", email: "hod.it@vignan.ac.in" }
    },
    notifications: [
      { id: 1, type: 'success', text: 'Ranked 1st in the department for Semester 3.', date: '2026-03-01' },
      { id: 2, type: 'info', text: 'Call for papers for the annual tech symposium.', date: '2026-03-10' },
    ]
  }
};
