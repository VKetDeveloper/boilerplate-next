'use client'; 
import dynamic from 'next/dynamic';
import Header from './components/Header';
import LoadingOverlay from './components/LoadingOverlay';
const CanvasWrapper = dynamic(() => import('./components/CanvasWrapper'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">展示モデル</h2>
        <CanvasWrapper />
      </section>
      <LoadingOverlay />
    </main>
  );
}
