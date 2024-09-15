export default function DoctorTable() {
    const doctors = [
      { name: 'Bessie Cooper', id: '#51674738', email: 'debra.holt@example.com', location: 'City,Pin-00000', contact: '0000000000' },
      { name: 'Devon Lane', id: '#51674738', email: 'bill.sanders@example.com', location: 'City,Pin-00000', contact: '0000000000' },
      { name: 'Kristin Watson', id: '#51674738', email: 'bill.sanders@example.com', location: 'City,Pin-00000', contact: '0000000000' },
      { name: 'Cameron Will', id: '#51674738', email: 'bill.sanders@example.com', location: 'City,Pin-00000', contact: '0000000000' },
      
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Doctor Added In The Month Of October</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Doctor Name</th>
              <th className="px-4 py-2">Doctor ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index} className="text-center border-t">
                <td className="px-4 py-2">{doctor.name}</td>
                <td className="px-4 py-2">{doctor.id}</td>
                <td className="px-4 py-2">{doctor.email}</td>
                <td className="px-4 py-2">{doctor.location}</td>
                <td className="px-4 py-2">{doctor.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  