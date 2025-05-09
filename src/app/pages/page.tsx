import dynamic from 'next/dynamic';

const CanvasWrapper = dynamic(() => import('../components/CanvasWrapper'), { ssr: false });
import SettingsPanel from '../components/SettingsPanel';
import XRToggleButton from '../components/XRToggleButton';
import LoadingOverlay from '../components/LoadingOverlay';

export default function HomePage() {
  return (
    <>
      <CanvasWrapper />
      <LoadingOverlay />
      <SettingsPanel />
      <XRToggleButton />
    </>
  );
}
