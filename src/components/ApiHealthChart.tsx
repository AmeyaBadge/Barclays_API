import { CustomLineChart, CustomBarChart } from "./Charts";

export function LineChartWrapper() {
  return (
    <div className="h-80">
      <CustomLineChart />
    </div>
  );
}

export function BarChartWrapper() {
  return (
    <div className="h-80">
      <CustomBarChart />
    </div>
  );
}
