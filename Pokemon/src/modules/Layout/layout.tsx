/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "../../componentes/footer";
import Header from "../../componentes/header";

const Layout = ({ children }:any):JSX.Element  => {
  return (
    <main className="w-screen h-screen">
      <div className="w-screen h-screen bg-red-700  mx-auto flex flex-col overflow-x-hidden">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
      </div>
    </main>
  );
};

export default Layout;
