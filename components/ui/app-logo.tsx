import { Dancing_Script } from 'next/font/google'

const font = Dancing_Script({
  display: 'auto',
  weight: '700',
  style: 'normal',
  subsets: ['latin', 'latin-ext'],
})

export default function AppLogo() {
  return (
    <div className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ungroup">
        <rect width="8" height="6" x="5" y="4" rx="1"/>
        <rect width="8" height="6" x="11" y="14" rx="1"/>
      </svg>
      <span className={`text-2xl font-bold ${font.className}`}>Clutter</span>
    </div>
  );
}