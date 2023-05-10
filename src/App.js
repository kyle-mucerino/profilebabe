import React, { useState } from "react";
import { ThemeProvider } from "@mui/styles";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Nav from "./components/Nav/index";
import Page from "./components/Page/index";
import theme from "./theme"; // Import your custom theme

function App() {
  const [pages] = useState([
    {
      name: "home"
    },
    {
      name: "about"
    },
    {
      name: "photo gallery"
    },
    {
      name: "speaking inquiries"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
