import ReactDOM from 'react-dom/client';
import './Styles/tailwind.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0, // API 요청 실패가 발생한다는 건 서버에 문제이므로 빠른 응답을 위해 0으로 설정
        useErrorBoundary: true, // Fallback UI 설정
      },
      mutations: {
        useErrorBoundary: true, // Fallback UI 설정
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
