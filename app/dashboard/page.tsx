import DoctorsAcquisitionChart from './DoctorsAcquisitionChart';
import IncomeAccumulationChart from './IncomeAccumulationChart';
import ConsultationTimelinessChart from './ConsultationTimelinessChart';
import ConsultationInsightsChart from './ConsultationInsightsChart';
import ServerCostChart from './ServerCostChart';


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
