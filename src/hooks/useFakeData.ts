import { useEffect, useState } from "react";

type Trend = "up" | "down";

interface Metrics {
  totalRequests: number;
  errorRate: number;
  anomalies: number;
  responseTime: number;
  errorTrend: Trend;
  responseTrend: Trend;
}

interface Alert {
  severity: "high" | "medium" | "low";
  apiName: string;
  message: string;
  time: string;
  rootCause: string;
}

export function useFakeData() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalRequests: 124532,
    errorRate: 1.2,
    anomalies: 18,
    responseTime: 142,
    errorTrend: "down",
    responseTrend: "down"
  });

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      severity: "high",
      apiName: "Payment Processing API",
      message: "Response time > 2s for 15 minutes",
      time: "2 minutes ago",
      rootCause: "Database latency"
    },
    {
      severity: "medium",
      apiName: "User Authentication API",
      message: "Error rate spike (12%)",
      time: "15 minutes ago",
      rootCause: "High traffic"
    },
    {
      severity: "low",
      apiName: "Transaction History API",
      message: "Latency increase detected",
      time: "1 hour ago",
      rootCause: "Cache miss"
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newErrorRate = Math.max(0.5, Math.min(2.5, prev.errorRate + (Math.random() * 0.2 - 0.1)));
        const newResponseTime = Math.max(100, Math.min(200, prev.responseTime + (Math.random() * 10 - 5)));
        
        return {
          ...prev,
          totalRequests: prev.totalRequests + Math.floor(Math.random() * 100),
          errorRate: newErrorRate,
          errorTrend: newErrorRate > prev.errorRate ? "up" : "down",
          anomalies: prev.anomalies + (Math.random() > 0.7 ? 1 : 0),
          responseTime: newResponseTime,
          responseTrend: newResponseTime > prev.responseTime ? "up" : "down"
        };
      });

      // Occasionally add a new alert
      if (Math.random() > 0.9) {
        setAlerts(prev => {
          const newAlert: Alert = {
            severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "high" | "medium" | "low",
            apiName: ["Payment API", "Auth API", "User API", "Transaction API"][Math.floor(Math.random() * 4)],
            message: ["Latency spike", "Error rate increase", "Timeout detected"][Math.floor(Math.random() * 3)],
            time: "Just now",
            rootCause: ["High traffic", "Database issue", "Network latency"][Math.floor(Math.random() * 3)]
          };
          return [newAlert, ...prev.slice(0, 4)]; // Keep max 5 alerts
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { metrics, alerts };
}