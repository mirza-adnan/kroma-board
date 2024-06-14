function ModalBg({ children }) {
  return (
    <div className="fixed top-0 left-0 h-[100dvh] w-[100dvw] bg-modalBg flex justify-center items-center z-50">
      {children}
    </div>
  );
}
export default ModalBg;
