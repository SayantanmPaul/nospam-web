export default function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: 'url(/background-blue.jpg)' }}
      className="flex h-screen bg-cover bg-center overflow-hidden  "
    >
      <div className="m-auto bg-slate-50 rounded-lg lg:w-3/5 w-4/5 h-5/7 grid lg:grid-cols-2">
        <div className=""></div>
        <div className="right flex flex-col justify-evenly ">
          <div className="lg:p-7 p-5 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
