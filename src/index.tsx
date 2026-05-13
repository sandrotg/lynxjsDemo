import { root } from '@lynx-js/react'
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { MemoryRouter, Routes, Route } from 'react-router';
import { App } from './App.js'
import GameDetailsScreen from './screens/game-details.js';

const queryClient = new QueryClient();
root.render(
<QueryClientProvider client={queryClient}>
    <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game-details/:id" element={<GameDetailsScreen />} />
    </Routes>
  </MemoryRouter>,
</QueryClientProvider>,
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
