function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh w-screen text-gray-100 bg-[url('/bg.png')] bg-cover bg-center">
      <div className="min-h-dvh w-full flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl rounded-2xl shadow-2xl p-3 bg-white m-4 md:m-8">
          <div className="rounded-xl bg-gray-900/85 backdrop-blur-sm border-t-[0.1px] border-r-[0.2px] border-b-[0.1px] border-l-[0.2px] border-white/60 p-6 md:p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleLayout;
