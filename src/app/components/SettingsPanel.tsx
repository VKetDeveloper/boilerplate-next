'use client';
import { useAppStore } from '../stores/useAppStore';

export default function SettingsPanel() {
  const volume = useAppStore((s) => s.userSettings.volume);
  const setVolume = useAppStore((s) => s.setVolume);
  const language = useAppStore((s) => s.userSettings.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const isOpen = useAppStore((s) => s.isSettingsModalOpen);
  const setOpen = useAppStore((s) => s.setSettingsModalOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold">設定</h2>
      <div>
        音量:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
      <div>
        言語:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
      </div>
      <button className="mt-2 text-blue-600" onClick={() => setOpen(false)}>閉じる</button>
    </div>
  );
}
