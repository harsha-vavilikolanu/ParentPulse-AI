import { create } from 'zustand';
import { mockStudentData, parentCredentials } from '../data/mockStudentData';

export const useStore = create((set) => ({
  // Auth State
  isAuthenticated: false,
  user: null, // parent info
  studentData: null, // student info

  login: (regNo, phone) => {
    const isValidRegNo = parentCredentials.validRegNumbers.includes(regNo.toUpperCase());
    const isValidPhone = parentCredentials.validPhoneNumbers.includes(phone);

    if (isValidRegNo && isValidPhone) {
      const studentData = mockStudentData[regNo.toUpperCase()];
      if (studentData) {
        set({
          isAuthenticated: true,
          user: {
            name: "Parent", // Mock parent name
            phone: phone,
            relation: "Parent",
            studentRegNo: regNo
          },
          studentData: studentData
        });
        return true;
      }
    }
    
    // Invalid credentials
    set({ isAuthenticated: false, user: null, studentData: null });
    return false;
  },
  
  logout: () => {
    set({ isAuthenticated: false, user: null, studentData: null });
  },

  // UI State
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
}));
