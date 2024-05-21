Manipulando erros de sua API .Net 🚀

Dessa vez a dica será bem rápida. É fácil dizer o motivo para se usar, basta ver antes e depois kk

Então deixarei esse espaço para justificar:

Por que a responsabilidade de retornar boas mensagens de erro deve ser do backend e não no frontend?

Não confie em desenvolvedor frontend! Ele não sabe ao todo a lógica CRUD de dados e seus relacionamentos. Quem possui esse conhecimento é o desenvolvedor backend 👈

Mas, ainda assim, há situações que vale a pena retorná-las diretamente pelo frontend, por exemplo, validações de campos de formulário, formatações específicas, campos requeridos, etc.

A forma como sua API lida com os erros tem um impacto significativo na UX, na segurança da aplicação e na facilidade de manutenção do código.

Aqui vai um rápido tutorial:

Que tal criarmos um usuário e descobrirmos que isso gera um grande erro na API que não possui tratamento de erros:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%201.png)
![](../blog/posts/manipulando-erros-de-sua-api-net/image%202.png)

E que tal fazer o mesmo, mas em uma API com tratamento de erros:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%201.png)
![](../blog/posts/manipulando-erros-de-sua-api-net/image%204.png)

Obs: note que o objeto de erro é bem estruturado e informativo.

## Passo a passo para manipular erros:

Defina o objeto de retorno:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%205.png)

Crie o controlador responsável por seu retorno:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%206.png)

Em program, habilite o manipulador:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%207.png)

Agora você pode lançar exceções de qualquer parte da aplicação:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%208.png)

E se for necessário ver a mensagem de erro completa, ela estará no console ou nos logs:

![](../blog/posts/manipulando-erros-de-sua-api-net/image%209.png)
