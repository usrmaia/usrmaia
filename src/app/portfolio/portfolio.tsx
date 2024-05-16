import { Container, Grid, Typography } from '@mui/material';

import { CardPotfolio, ICardPotfolioProps } from '@/_components';

const projects: ICardPotfolioProps[] = [
  {
    title: 'LNSF - Lar Nossa Senhora de Fátima',
    buttons: [
      { name: '.Net', href: 'https://dotnet.microsoft.com/pt-br/' },
      { name: 'React', href: 'https://react.dev/' },
      { name: 'MUI', href: 'https://mui.com/' },
    ],
    description: 'O sistema LNSF foi desenvolvido com um propósito fundamental: aprimorar a eficiência das operações realizadas pelos servidores dedicados ao Lar Nossa Senhora de Fátima. Este sistema visa a melhoria do processo de gestão dos pacientes e quartos, além de automatizar tarefas complexas, anteriormente realizadas de forma manual, como a emissão de relatórios',
    imagesPath: [
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Login.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/Api%20-%20Swagger.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Page.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Table.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Form.png?raw=true'
    ],
    href: 'https://github.com/LovelaceLines/LNSF/tree/development',
    startDate: 'Ago 2023',
    endDate: 'Presente'
  },
  {
    title: 'Lovelace Lines - Landpage + Blog',
    buttons: [
      { name: 'Next', href: 'https://nextjs.org/' },
      { name: 'Prisma', href: 'https://www.prisma.io/' },
      { name: 'MUI', href: 'https://mui.com/' },
    ],
    description: 'Este repositório abriga a landing page e o blog da Lovelace Lines. Desenvolvido com uma combinação de tecnologias modernas, o projeto oferece uma experiência dinâmica e eficiente aos usuários com componentes SSR, CSR e Api de consulta.',
    href: 'https://github.com/LovelaceLines/lovelacelines/tree/development',
    imagesPath: [
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201831.png?raw=true',
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201844.png?raw=true',
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201858.png?raw=true',
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201916.png?raw=true',
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201924.png?raw=true',
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201929.png?raw=true',
      'https://github.com/LovelaceLines/lovelacelines/blob/development/docs/images/Captura%20de%20tela%202024-03-11%20201957.png?raw=true',
    ],
    startDate: 'Fev 2024',
    endDate: 'Presente'
  },
];

export const Portfolio = () => {
  return (
    <>
      <Typography variant='h4' align='center' gutterBottom>
        Portfolio
      </Typography>

      <Container>
        <Grid container spacing={2} display='flex' alignItems='stretch'>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} xl={4} key={index} alignItems='stretch'>
              <CardPotfolio key={index} {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};