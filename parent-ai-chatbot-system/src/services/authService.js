import { parentCredentials, mockStudentData } from '../data/mockStudentData';

export const authService = {
  // Simulate sending OTP
  sendOTP: async (phone, regNo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!parentCredentials.validRegNumbers.includes(regNo)) {
          reject(new Error("Student Registration Number not found."));
          return;
        }
        if (!parentCredentials.validPhoneNumbers.includes(phone)) {
          reject(new Error("Phone number is not registered for this student."));
          return;
        }
        // In real world, integration with SMS gateway goes here
        resolve({ success: true, message: "OTP sent successfully" });
      }, 1500); // simulate network delay
    });
  },

  // Simulate verifying OTP
  verifyOTP: async (phone, regNo, otp) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === "1234") {
          const studentInfo = mockStudentData[regNo] || Object.values(mockStudentData)[0];
          resolve({ 
            success: true, 
            token: "mock-jwt-token-xyz-123",
            student: studentInfo
          });
        } else {
          reject(new Error("Invalid OTP. Please try again."));
        }
      }, 1000);
    });
  },

  logout: () => {
    localStorage.removeItem('parentAuthToken');
    localStorage.removeItem('studentData');
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('parentAuthToken');
  }
};
