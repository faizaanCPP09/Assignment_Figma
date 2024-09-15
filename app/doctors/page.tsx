import DoctorTable from '../components/DoctorTable';

export default function DoctorsPage() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-6">
          <DoctorTable />
        </div>
      </div>
    </div>
  );
}
