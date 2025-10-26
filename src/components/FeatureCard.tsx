// ------------------------------------------------------------
import { ReactNode } from 'react'

type Props = { icon: ReactNode; title: string; desc: string }
export default function FeatureCard({ icon, title, desc }: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  )
}