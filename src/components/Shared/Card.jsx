const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};