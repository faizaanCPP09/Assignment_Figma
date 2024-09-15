import { HomeIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-xl font-semibold">BHARAT TDM</div>
      <nav className="mt-10">
        <ul>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <HomeIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/doctors" className="flex items-center space-x-3">
              <UserGroupIcon className="w-5 h-5" />
              <span>Doctors</span>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/revenue" className="flex items-center space-x-3">
              <CurrencyDollarIcon className="w-5 h-5" />
              <span>Revenue</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
