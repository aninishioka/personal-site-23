import "../styles/global.css";
import { ThemeProvider } from "../contexts/theme.context";
import MainLayout from "../layouts/main.layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
