function Container({ classes, children }) {
  return (
    <div className={"max-w-[1100px] mx-auto text-left w-full" + " " + classes}>
      {children}
    </div>
  );
}
export default Container;
