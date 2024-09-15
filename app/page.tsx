import DoctorsAcquisitionChart from './dashboard/DoctorsAcquisitionChart';
import IncomeAccumulationChart from './dashboard/IncomeAccumulationChart';
import ConsultationTimelinessChart from './dashboard/ConsultationTimelinessChart';
import ConsultationInsightsChart from './dashboard/ConsultationInsightsChart';
import ServerCostChart from './dashboard/ServerCostChart';


export default function Dashboard() {
  return (
    <div className="flex">
      
      <div className="flex-grow">
        
        <div className="p-6 space-y-6">
        <IncomeAccumulationChart />
        <ConsultationTimelinessChart />
        <DoctorsAcquisitionChart />          
        <ConsultationInsightsChart />
        <ServerCostChart /> 
        </div>
      </div>
    </div>
  );
}
