import { create } from 'zustand';

export const useStore = create((set) => ({
  // Auth State
  isAuthenticated: false,
  user: null, // parent info
  
  login: (regNo, phone) => {
    // Mock login functionality
    set({ 
      isAuthenticated: true, 
      user: {
        name: "Rajesh Kumar",
        phone: phone,
        relation: "Father",
        studentRegNo: regNo
      }
    });
  },
  
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },

  // UI State
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
}));
