const Main = ({ children, className }) => {
  return (
    <main
      className={`w-full h-dvh overflow-y-scroll scrollbar-hide scroll-smooth snap-y snap-mandatory ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
