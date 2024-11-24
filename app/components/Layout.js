import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <div className="grid-background" />
    {children}
  </>
);

export default Layout;
