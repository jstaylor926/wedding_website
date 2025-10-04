function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh w-screen text-slate-100">
      <div className="min-h-dvh w-full flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl rounded-3xl bg-slate-900/80 backdrop-blur-xl shadow-2xl p-4 md:p-6 m-4 md:m-8">
          <div className="rounded-2xl border-2 border-white/60 bg-transparent shadow-2xl p-6 md:p-10 font-pollen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleLayout;
