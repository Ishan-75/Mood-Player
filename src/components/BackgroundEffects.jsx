export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
    </>
  );
}