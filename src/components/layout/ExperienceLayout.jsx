const ExperienceLayout = ({ children, className }) => {
  return (
    <main
      className={`max-w-6xl mx-auto h-dvh px-4 md:px-8 pt-8 overflow-y-scroll scrollbar-hide scroll-smooth snap-y snap-mandatory ${className}`}
    >
      {children}
    </main>
  );
};

export default ExperienceLayout;
