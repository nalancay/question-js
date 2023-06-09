import "./App.css";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import { JavaScriptLogo } from "./components/JavaScriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./components/Game";
import { useQuestionsData } from "./hooks/useQuestionsData";
import { Results } from "./components/Results";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();
  const theme = useTheme();

  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant={medium ? "h2" : "h5"} component="h1">
            JavaScript Quiz
          </Typography>
        </Stack>

        <strong
          style={{ fontSize: "18px", marginBottom: "48px", display: "block" }}
        >
          ¿Quieres ver más proyectos hecho con React ⚛️?{" "}
          <a style={{ color: "yellow" }} href="https://github.com/nalancay">
            ¡Haz click aquí!
          </a>
        </strong>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && unanswered > 0 && <Game />}
        {questions.length > 0 && unanswered === 0 && <Results />}

        <strong
          style={{ display: "block", fontSize: "14px", marginTop: "48px" }}
        >
          Desarrollado con TypeScript + Zustand -{" "}
          <a
            style={{ color: "yellow" }}
            href="https://github.com/nalancay/question-js"
          >
            Ir al código
          </a>
        </strong>
      </Container>
    </main>
  );
}

export default App;
