import { Link } from 'react-router-dom'

type Props = {
  title: string
  location: string
  img: string
  price?: string
}

export default function PropertyCard({ title, location, img, price }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
      <img src={img} alt={title} className="h-48 w-full object-cover group-hover:scale-[1.02] transition" />
      <div className="p-5">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-600">{location}</p>
        {price && <p className="mt-1 text-emerald-700 font-medium">{price}</p>}
        <div className="mt-3">
          <Link to="/contact" className="text-sm underline underline-offset-4 hover:text-emerald-700">Request details</Link>
        </div>
      </div>
    </div>
  )
}