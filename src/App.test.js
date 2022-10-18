import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './react-web/Home';
import Header from './react-web/Header';
import Editor from './react-web/Editor';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

// // Query is being simulated here; this was taken from an actual instance of the query object in the code.
const query = {"status":"success","fetchStatus":"idle","isLoading":false,"isSuccess":true,"isError":false,"data":{"boards":[{"boardId":1,"unit":"rem","left":0,"top":0,"width":50,"height":50,"backgroundColor":"#531fc2"},{"boardId":2,"unit":"rem","left":0,"top":50,"width":50,"height":50,"backgroundColor":"Red"}],"elements":[{"elementId":1,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":"Drag"},{"elementId":2,"elementType":"shape","width":5.5,"height":5.5,"left":12.5,"top":11,"unit":"rem","className":"blue circle","text":"me"},{"elementId":3,"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":"Hello Fellows","initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]},"dataUpdatedAt":1666106380967,"error":null,"errorUpdatedAt":0,"failureCount":0,"errorUpdateCount":0,"isFetched":true,"isFetchedAfterMount":true,"isFetching":false,"isRefetching":false,"isLoadingError":false,"isPaused":false,"isPlaceholderData":false,"isPreviousData":false,"isRefetchError":false,"isStale":true}
//const query = {"boards":[{"boardId":1,"unit":"rem","left":0,"top":0,"width":50,"height":50,"backgroundColor":"#531fc2"},{"boardId":2,"unit":"rem","left":0,"top":50,"width":50,"height":50,"backgroundColor":"Red"}],"elements":[{"elementId":1,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":"Drag"},{"elementId":2,"elementType":"shape","width":5.5,"height":5.5,"left":12.5,"top":11,"unit":"rem","className":"blue circle","text":"me"},{"elementId":3,"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":"Hello Fellows","initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]}

// // Create a client
// const queryClient = new QueryClient()
jest.mock('@tanstack/react-query', () => ({ useQuery: () => (query), })); // https://github.com/TanStack/query/discussions/1461


describe('CrashTests', () => {
  //const div = document.createElement('div');
  
  it('renders app without crashing', () => {
    render(<App />, {wrapper: BrowserRouter});
  })

  it('renders Home without crashing', () => {
    render(<Home />, {wrapper: BrowserRouter});
  })

  it('renders Header without crashing', () => {
    render(<Header />, {wrapper: BrowserRouter});
  })

  it('renders Editor without crashing', () => {
    render(<Editor />, {wrapper: BrowserRouter});
  })
});