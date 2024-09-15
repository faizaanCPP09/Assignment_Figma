import RevenueGraphs from '../components/RevenueGraphs';

export default function RevenuePage() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-6">
          <RevenueGraphs />
        </div>
      </div>
    </div>
  );
}
