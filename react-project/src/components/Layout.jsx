import Header from "./Header";
import Proptypes from "prop-types"

const Layout = ({ children }) => (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );

export default Layout

Layout.propTypes = {
    children: Proptypes.node,
  };