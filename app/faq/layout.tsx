function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh w-screen text-gray-100">
      <div className="min-h-dvh w-full flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl rounded-2xl shadow-2xl p-3 bg-white m-4 md:m-8">
          <div className="rounded-xl bg-gray-900/95 backdrop-blur-sm border-[0.5px] border-white/75 p-6 md:p-10 font-pollen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqLayout;
