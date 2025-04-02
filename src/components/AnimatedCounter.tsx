// // Example of animated counter component
// const AnimatedCounter = ({ value }: { value: number }) => {
//     return (
//       <motion.span
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         key={value}
//       >
//         {value.toLocaleString()}
//       </motion.span>
//     );
//   };

//   // Example of hover effect with glow
//   const GlowCard = ({ children }: { children: React.ReactNode }) => {
//     return (
//       <motion.div
//         className="relative overflow-hidden"
//         whileHover={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.7)' }}
//       >
//         {children}
//         <motion.div
//           className="absolute inset-0 bg-purple-500 opacity-0"
//           whileHover={{ opacity: 0.1 }}
//           transition={{ duration: 0.3 }}
//         />
//       </motion.div>
//     );
//   };
