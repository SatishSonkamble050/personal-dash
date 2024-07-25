import create from 'zustand';

const useStore = create((set) => ({
  theme: 'light',
  quickLinks: [],
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  })),
  addQuickLink: (link) => set((state) => ({
    quickLinks: [...state.quickLinks, link]
  })),
  removeQuickLink: (index) => set((state) => ({
    quickLinks: state.quickLinks.filter((_, i) => i !== index)
  })),
}));

export default useStore;
