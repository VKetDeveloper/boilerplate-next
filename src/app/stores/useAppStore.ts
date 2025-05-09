import { create } from 'zustand';

interface AppState {
  isXRMode: boolean;
  setXRMode: (enabled: boolean) => void;

  currentScene: string;
  setCurrentScene: (scene: string) => void;

  isModelLoaded: boolean;
  setModelLoaded: (loaded: boolean) => void;

  userSettings: {
    volume: number;
    language: string;
  };
  setVolume: (volume: number) => void;
  setLanguage: (lang: string) => void;

  isSettingsModalOpen: boolean;
  setSettingsModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isXRMode: false,
  setXRMode: (enabled) => set({ isXRMode: enabled }),

  currentScene: 'default',
  setCurrentScene: (scene) => set({ currentScene: scene }),

  isModelLoaded: false,
  setModelLoaded: (loaded) => set({ isModelLoaded: loaded }),

  userSettings: {
    volume: 0.5,
    language: 'ja',
  },
  setVolume: (volume) =>
    set((state) => ({
      userSettings: { ...state.userSettings, volume },
    })),
  setLanguage: (language) =>
    set((state) => ({
      userSettings: { ...state.userSettings, language },
    })),

  isSettingsModalOpen: false,
  setSettingsModalOpen: (open) => set({ isSettingsModalOpen: open }),
}));
