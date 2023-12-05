import { HeaderMegaMenu } from "./Components/Menu/HeaderMenu"
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {

  return (

    <MantineProvider>
      <HeaderMegaMenu />
    </MantineProvider>
  )
}

export default App
