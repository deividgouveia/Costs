import { ChakraProvider, Flex, Link } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex flex={1} justify="space-between" m={0} w={1200}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/company">Empresa</Link>
          <Link href="/newproject">Novo Projeto</Link>
        </Flex>
        <Flex minH="75%">
          <MainRoutes />
        </Flex>
        <Flex>
          <h1>Footer</h1>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
