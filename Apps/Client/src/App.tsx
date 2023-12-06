
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './Components/Menus/HeaderMenu';

function App() {

  return (

    <MantineProvider>
      <HeaderMegaMenu/>
    </MantineProvider>
  )
}

export default App
