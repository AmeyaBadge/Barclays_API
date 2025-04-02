// import { useState, useEffect } from 'react';

// export function useFakeData() {
//   const [metrics, setMetrics] = useState({
//     totalRequests: 124532,
//     errorRate: 1.2,
//     anomalies: 18,
//     responseTime: 142
//   });

//   const [alerts, setAlerts] = useState([
//     {
//       severity: 'high' as const,
//       apiName: 'Payment Processing API',
//       message: 'Response time > 2s for 15 minutes',
//       time: '2 minutes ago',
//       rootCause: 'Database latency'
//     },
//     // ... other initial alerts
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Simulate data changes
//       setMetrics(prev => ({
//         totalRequests: prev.totalRequests + Math.floor(Math.random() * 100),
//         errorRate: Math.max(0.5, Math.min(2.5, prev.errorRate + (Math.random() * 0.2 - 0.1))),
//         anomalies: prev.anomalies + (Math.random() > 0.7 ? 1 : 0),
//         responseTime: Math.max(100, Math.min(200, prev.responseTime + (Math.random() * 10 - 5)))
//       }));

//       // Occasionally add a new alert
//       if (Math.random() > 0.9) {
//         const newAlert = {
//           severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as const,
//           apiName: ['Payment API', 'Auth API', 'User API', 'Transaction API'][Math.floor(Math.random() * 4)],
//           message: ['Latency spike', 'Error rate increase', 'Timeout detected'][Math.floor(Math.random() * 3)],
//           time: 'Just now',
//           rootCause: ['High traffic', 'Database issue', 'Network latency'][Math.floor(Math.random() * 3)]
//         };
//         setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
//       }
//     }, 3000); // Update every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return { metrics, alerts };
// }