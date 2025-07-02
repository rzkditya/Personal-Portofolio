const Main = ({ children, className }) => {
  return (
    <main className={`w-full h-screen overflow-y-scroll scrollbar-hide scroll-smooth snap-y snap-mandatory px-[10%] ${className}`}>
        {children}
    </main>
  )
}

export default Main