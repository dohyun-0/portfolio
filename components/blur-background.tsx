export function BlurBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* 흰색 요소들 (더 잘 보이도록 불투명도 증가) */}
      <div className="fixed top-[-10%] left-[5%] w-[600px] h-[600px] rounded-full bg-white/20 -z-10" />
      <div className="fixed top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/15 -z-10" />
      <div className="fixed bottom-[-10%] left-[30%] w-[700px] h-[700px] rounded-full bg-white/20 -z-10" />

      {/* 검은색 블러 레이어 (흰색 요소 위에 위치) */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-3xl -z-5" />
    </div>
  );
}
