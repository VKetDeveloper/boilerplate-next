'use client';
import { useAppStore } from '../stores/useAppStore';

export default function XRToggleButton() {
  const isXR = useAppStore((s) => s.isXRMode);
  const setXR = useAppStore((s) => s.setXRMode);

  return (
    <button
      className="fixed bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => setXR(!isXR)}
    >
      XR: {isXR ? 'ON' : 'OFF'}
    </button>
  );
}
