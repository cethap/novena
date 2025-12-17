
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomeView from './components/views/HomeView';
import GenericPrayerView from './components/views/GenericPrayerView';
import ConsiderationsView from './components/views/ConsiderationsView';
import GozosView from './components/views/GozosView';
import VillancicosView from './components/views/VillancicosView';
import GroupLobby from './components/views/GroupLobby';
import ScrollToTop from './components/layout/ScrollToTop';
import { DATA } from './data/content';
import { NovenaProvider } from './context/NovenaContext';

function App() {
  return (
    <>
      <NovenaProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="lobby" element={<GroupLobby />} />

            <Route
              path="todos-dias"
              element={
                <GenericPrayerView
                  title={DATA.oracionTodosDias.titulo}
                  text={DATA.oracionTodosDias.texto}
                  image={DATA.oracionTodosDias.imagen}
                  nextLink="/consideraciones"
                  nextText="Ir a las Consideraciones"
                  borderColor="border-red-200"
                />
              }
            />

            <Route path="consideraciones" element={<ConsiderationsView />} />

            <Route
              path="virgen"
              element={
                <GenericPrayerView
                  title={DATA.oracionVirgen.titulo}
                  text={DATA.oracionVirgen.texto}
                  image={DATA.oracionVirgen.imagen}
                  nextLink="/san-jose"
                  nextText="Ir a Oración a San José"
                  borderColor="border-blue-200"
                />
              }
            />

            <Route
              path="san-jose"
              element={
                <GenericPrayerView
                  title={DATA.oracionSanJose.titulo}
                  text={DATA.oracionSanJose.texto}
                  image={DATA.oracionSanJose.imagen}
                  nextLink="/gozos"
                  nextText="Ir a los Gozos"
                  borderColor="border-yellow-200"
                />
              }
            />

            <Route path="gozos" element={<GozosView />} />

            <Route
              path="nino"
              element={
                <GenericPrayerView
                  title={DATA.oracionNino.titulo}
                  text={DATA.oracionNino.texto}
                  image={DATA.oracionNino.imagen}
                  nextLink="/villancicos"
                  nextText="Cantar Villancicos"
                  borderColor="border-green-200"
                />
              }
            />

            <Route path="villancicos" element={<VillancicosView />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </NovenaProvider>
    </>
  );
}

export default App;

