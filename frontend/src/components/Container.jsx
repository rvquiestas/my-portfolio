const Container = ({ children, className = "" }) => {
  return (
    <div className={`px-6 md:px-12 xl:px-6 max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;