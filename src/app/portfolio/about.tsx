import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box component='section' display='flex' flexDirection='row' justifyContent='center' alignItems='center' gap={2}>
      <Box display='flex' flex={1} flexDirection='column' gap={1}>
        <Typography variant='h4' gutterBottom>
          Um bit sobre mim
        </Typography>
        <Typography variant='subtitle2' gutterBottom>Olá! Meu nome é George Maia e sou um desenvolvedor web full-stack. Sou apaixonado por Next e .Net e estou sempre procurando maneiras de expandir meu conhecimento e melhorar meu código e processos de desenvolvimento. Adoro conteúdos como metodologias ágeis, arquitetura de software e testes automatizados, novas tecnologias e técnicas de desenvolvimento. Estou sempre aberto a novas oportunidades e desafios, então, se você tem um projeto interessante, entre em contato!</Typography>
      </Box>
    </Box>
  );
}