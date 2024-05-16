import { Box, Grid, Typography } from "@mui/material";
import { GiBrain } from "react-icons/gi";
import { GiComputing } from "react-icons/gi";
import { SiTestinglibrary } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

import { Card } from "@/_components";

export const WorkProcess = () => {
  const CardGrid = () => (
    <Grid container spacing={2} flex={1}>
      <Grid item xs={12} md={6}>
        <Card title="Entendimento" content="Isso envolve a análise detalhada dos requisitos, a identificação de possíveis desafios e a formulação de um plano sólido para abordá-los." icon={<GiBrain />} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card title="Desenvolvimento" content="Aqui, minha prioridade é escrever código limpo, eficiente e escalável. Eu me esforço para seguir as melhores práticas de programação e estou sempre aberto a aprender e implementar novas tecnologias e técnicas que possam melhorar o projeto." icon={<GiComputing />} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card title="Testes" content="Isso inclui testes unitários, testes de integração e testes de aceitação, conforme necessário para garantir que o código seja robusto e confiável." icon={<SiTestinglibrary />} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card title="Commit" content="Quando os testes passam sem problemas e o código está limpo, faço o commit do código para o repositório. Cada commit é acompanhado por uma mensagem clara e concisa, explicando as alterações feitas e o motivo por trás delas." icon={<FaGitAlt />} />
      </Grid>
    </Grid>
  );

  return (
    <Box component='section' display='flex' flexDirection={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' gap={2}>
      <Box display='flex' flex={1} flexDirection='column' gap={1}>
        <Typography variant='h4' gutterBottom>
          Processo de Trabalho
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Quando inicio um novo projeto, meu objetivo principal é entender completamente os requisitos e as expectativas do cliente. Isso envolve uma comunicação clara e detalhada para garantir que eu esteja alinhado com as metas do projeto desde o início.
        </Typography>
      </Box>
      <CardGrid />
    </Box >
  );
};