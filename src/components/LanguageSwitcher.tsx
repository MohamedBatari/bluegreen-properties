import { getLang, setLang, type Lang } from '@/i18n'

const langs: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'tr', label: 'TR' },
]

export function LanguageSwitcher() {
  const current = getLang()
  function change(e: React.ChangeEvent<HTMLSelectElement>) {
    setLang(e.target.value as Lang)
  }
  return (
    <select onChange={change} defaultValue={current} className="text-sm rounded-md border border-slate-300 bg-white/70 px-2 py-1">
      {langs.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
    </select>
  )
}