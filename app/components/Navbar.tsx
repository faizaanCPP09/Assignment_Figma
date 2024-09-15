import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">BHARAT TDM Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Admin Name</span>
        <Image
            src="/avatar.png" width={100} height={100} alt="No Avatar Available"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
      </div>
    </header>
  )
}
