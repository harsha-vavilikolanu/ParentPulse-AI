export const mockStudentData = {
  profile: {
    name: "Aditya Sharma",
    regNo: "21BCE10234",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    semester: "6th Semester",
    section: "A",
    batch: "2021-2025",
    dob: "15-08-2003",
    email: "aditya.s@student.vignan.ac.in",
    advisor: "Dr. Venkat Rao",
    photo: "https://i.pravatar.cc/150?img=11"
  },
  attendance: {
    overall: 82.5,
    subjects: [
      { name: "Machine Learning", code: "CS301", percentage: 85, classesAttended: 34, totalClasses: 40 },
      { name: "Web Technologies", code: "CS302", percentage: 92, classesAttended: 46, totalClasses: 50 },
      { name: "Computer Networks", code: "CS303", percentage: 75, classesAttended: 30, totalClasses: 40 },
      { name: "Cloud Computing", code: "CS304", percentage: 68, classesAttended: 27, totalClasses: 40, warning: true },
      { name: "Software Engineering", code: "CS305", percentage: 88, classesAttended: 44, totalClasses: 50 }
    ],
    history: [
      { semester: "Sem 1", percentage: 90 },
      { semester: "Sem 2", percentage: 88 },
      { semester: "Sem 3", percentage: 85 },
      { semester: "Sem 4", percentage: 81 },
      { semester: "Sem 5", percentage: 84 },
      { semester: "Sem 6", percentage: 82.5 }
    ]
  },
  academicStatus: {
    backlogs: { active: 1, cleared: 2 },
    repeatedSubjects: 0,
    incompleteSubjects: 0,
    courseCompletion: 65,
    activeBacklogDetails: [
      { name: "Data Structures", code: "CS201", semester: "3rd Semester" }
    ]
  },
  performance: {
    currentCgpa: 8.24,
    history: [
      { semester: "Sem 1", sgpa: 8.5 },
      { semester: "Sem 2", sgpa: 8.4 },
      { semester: "Sem 3", sgpa: 7.8 },
      { semester: "Sem 4", sgpa: 8.1 },
      { semester: "Sem 5", sgpa: 8.3 },
      { semester: "Sem 6", sgpa: 8.4 }
    ],
    recentMarks: [
      { subject: "Machine Learning", midterm1: 24, midterm2: 26, total: 50, max: 60 },
      { subject: "Web Technologies", midterm1: 28, midterm2: 27, total: 55, max: 60 },
      { subject: "Computer Networks", midterm1: 20, midterm2: 22, total: 42, max: 60 }
    ]
  },
  finance: {
    totalFee: 250000,
    paid: 150000,
    pending: 100000,
    status: "Partial",
    dueDate: "20-04-2026",
    transactions: [
      { id: "TXN001", date: "10-08-2023", amount: 50000, method: "Net Banking", status: "Success", purpose: "Tuition Fee - Sem 1" },
      { id: "TXN002", date: "15-01-2024", amount: 50000, method: "Credit Card", status: "Success", purpose: "Tuition Fee - Sem 2" },
      { id: "TXN003", date: "05-08-2024", amount: 50000, method: "UPI", status: "Success", purpose: "Tuition Fee - Sem 3" }
    ],
    scholarships: [
      { name: "Merit Scholarship", amount: 20000, year: "2023-2024" }
    ]
  },
  notifications: [
    { id: 1, type: "exam", title: "Mid Term 2 Examinations", date: "25-03-2026", description: "Mid Term 2 exams will commence from 25th March." },
    { id: 2, type: "fee", title: "Fee Payment Reminder", date: "20-04-2026", description: "Please pay the pending tuition fee for the current semester." },
    { id: 3, type: "academic", title: "Project Proposal Submission", date: "30-03-2026", description: "Final year project proposals must be submitted to the guide." },
    { id: 4, type: "attendance", title: "Low Attendance Warning", date: "15-03-2026", description: "Attendance in Cloud Computing is below 70%." }
  ],
  contacts: [
    { name: "Dr. Venkat Rao", role: "Class Advisor", department: "Computer Science", email: "venkat.rao@vignan.ac.in", phone: "+91 9876543210" },
    { name: "Prof. Sreekanth M", role: "HOD", department: "Computer Science", email: "hod.cse@vignan.ac.in", phone: "+91 9876543211" },
    { name: "Ms. Anjali P", role: "Exam Coordinator", department: "Examinations", email: "exams@vignan.ac.in", phone: "+91 9876543212" }
  ],
  insights: {
    strongSubjects: ["Web Technologies", "Machine Learning"],
    weakSubjects: ["Cloud Computing", "Computer Networks"],
    suggestions: [
      "Student needs to improve attendance in Cloud Computing.",
      "Focus more on Computer Networks to improve overall CGPA.",
      "Clear the Data Structures backlog as soon as possible."
    ]
  }
};
