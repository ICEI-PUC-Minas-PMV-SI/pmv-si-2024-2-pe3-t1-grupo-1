# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Definir os requisitos necessários para o desenvolvimento da aplicação web voltada para jovens e adultos, que permitirá o registro e o monitoramento de hábitos saudáveis, atendendo às necessidades estabelecidas pelo projeto "Saúde e Equilíbrio".

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto “Saúde e Equilíbrio” será uma aplicação web voltada para o gerenciamento de práticas saudáveis, composta por quatro módulos principais: registro de hábitos saudáveis, gestão de usuários, conteúdos educacionais e comunidades. 
### 3.2.2 Missão do produto
Gerenciar informações relacionadas ao monitoramento de hábitos saudáveis, fornecendo recursos para o acompanhamento de metas, práticas diárias e conteúdos educativos. O sistema web visa promover a manutenção de um estilo de vida equilibrado e saudável, auxiliando os usuários no controle de atividades.
### 3.2.3 Limites do produto
O projeto "Saúde e Equilíbrio" não substitui a necessidade de consultas médicas, exames laboratoriais ou acompanhamento profissional especializado. A aplicação web serve como uma ferramenta de monitoramento e incentivo de hábitos saudáveis, mas não realiza diagnósticos, tratamentos ou recomendações médicas personalizadas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no registro e acompanhamento de hábitos |	Essencial |
|2 | Facilidade no acesso a comunidades formadas por outros usuários | Essencial | 
|3 | Facilidade no acesso a conteúdos educacionais | Essencial | 
|4	| Desencorajamento de hábitos prejudiciais	| Recomendável | 
|5 | Motivação e engajamento para manter os hábitos saudáveis	| Recomendável | 
|6 | Melhora na qualidade de vida e redução de doenças crônicas	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Atividades Físicas |	Criação, alteração, exclusão e consulta das atividades físicas registradas pelo usuário.|
| RF2 |	Gerenciar Alimentação	| Criação, alteração, exclusão e consulta das informações alimentares registradas pelo usuário. |
| RF3	| Gerenciar Qualidade do Sono |	Criação, alteração, exclusão e consulta dos dados sobre a qualidade do sono. |
| RF4 |	Gerenciar Conteúdos Educacionais	| Criação, alteração, exclusão e consulta dos conteúdos educacionais registrados pelo usuário.|
| RF5 |	Notificar o Usuário	| Notificações diárias para lembrar o usuário de manter a prática dos hábitos saudáveis. |
| RF6 |	Gerenciar Conta do Usuário | Criação, alteração, exclusão e consulta sobre os dados pessoais do usuário. |
| RF7 |	Compartilhar Conteúdos Educacionais | Permitir a disseminação dos conteúdos educacionais por meio das redes sociais. |
| RF8 |	Gerenciar Metas | Criação, alteração, exclusão e consulta das metas registradas pelos usuários. |
| RF9 |	Gerenciar Comunidades | Criação, alteração, exclusão e consulta das comunidades criadas pelos usuários. |
| RF10 |	Gerenciar Humor | Criação, alteração, exclusão e consulta dos registros de humor realizados pelo usuário. |
| RF11 |	Gerar Alertas de Tendências Negativas | Gerar alertas automáticos caso o sistema detecte uma queda ou tendência negativa nos hábitos saudáveis do usuário, sugerindo intervenções ou mudanças. |
| RF12 |	Entrar na aplicação web | Permitir ao usuário cadastrado realizar login na aplicação web. |
| RF13 |	Sair da aplicação web | Permitir ao usuário cadastrado realizar logout da aplicação web. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | A aplicação web deve ser responsiva para atender diferentes tipos de dispositivos. (Usabilidade) |
| RNF2 | As informações pessoais dos usuários devem ser armazenadas seguindo as normas da LGDP (Lei Geral de Proteção de Dados Pessoais). (Segurança) |
| RNF3 |	A aplicação web deve realizar a autenticação dos usuários antes de permitir o acesso aos recursos. (Segurança) |
| RNF4 | A aplicação web deve ser tolerante a potenciais falhas. (Confiabilidade) |
| RNF5 | A aplicação web deve estar disponível 90% do tempo durante o mês, garantindo um tempo de inatividade mínimo. (Disponibilidade) |
| RNF6 | O sistema deverá retornar uma solicitação em no máximo 5 segundos. (Desempenho) |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Usuário não cadastrado |	Usuário responsável por acessar e compartilhar conteúdos educacionais nas redes sociais. |
| Usuário |	Usuário responsável por gerenciar atividades físicas, alimentação, sono e progresso nas tarefas. Possui acesso completo às funcionalidades da aplicação. |
| Administrador |	Usuário responsável por gerenciar os conteúdos educacionais. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Conforme observado no diagrama de casos de uso (representado pela Figura 1) da aplicação web "Saúde e Equilíbrio", o **Usuário não cadastrado** pode compartilhar conteúdos educacionais nas redes sociais. O **Usuário Registrado** pode, além disso, entrar e sair da aplicação web, gerenciar atividades físicas, alimentação, sono, conta do usuário, comunidades, humor e metas. O **Administrador** é responsável por gerenciar os conteúdos educacionais, enquanto o usuário **Tempo** emite alertas e envia notificações ao usuário.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![Diagrama de Casos de Uso - Saúde e Equilibrio](https://github.com/user-attachments/assets/950700e2-2a78-4b38-990d-a553d71df9b9)

### 3.4.2 Descrições de Casos de Uso

---

#### Gerenciar Atividades Físicas (CSU01)

Sumário: O Usuário realiza a gestão (criação, alteração, exclusão e consulta) das atividades físicas registradas.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção das atividades físicas.
2) O Sistema apresenta as operações que podem ser realizadas: criação de uma nova atividade, alteração de uma atividade existente, exclusão de uma atividade e consulta de atividades registradas.
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) Se o Usuário desejar continuar com a gestão de atividades, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de uma nova atividade física.
2) O Sistema apresenta um formulário solicitando os detalhes da atividade (Nome, Duração, Intensidade, Categoria).
3) O Usuário fornece os dados solicitados.
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui a nova atividade e atualiza a lista de atividades registradas; caso contrário, o Sistema reporta o erro e solicita novos dados.

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona uma atividade e requisita ao Sistema que a remova.
2) Se a atividade pode ser removida, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona uma atividade e solicita a alteração dos detalhes.
2) O Sistema apresenta os detalhes atuais da atividade em um formulário (Nome, Duração, Intensidade, Categoria).
3) O Usuário altera os detalhes desejados e requisita a atualização.
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados da atividade; caso contrário, o erro é reportado.

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por pesquisar uma atividade pelo nome ou tipo e solicita a consulta.
2) O Sistema apresenta uma lista das atividades que atendem ao critério de pesquisa (Nome, Duração, Intensidade, Categoria).
3) O Usuário seleciona uma atividade da lista.
4) O Sistema apresenta os detalhes da atividade selecionada.

**Pós-condições:** Uma atividade foi criada, alterada, excluída ou os detalhes de uma atividade foram apresentados na tela.

---

#### Gerenciar Alimentação (CSU02)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) das informações alimentares registradas.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção das informações alimentares.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de uma nova informação alimentar, alteração de uma informação existente, exclusão de uma informação e consulta de informações alimentares registradas.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão de informações alimentares, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de uma nova informação alimentar.  
2) O Sistema apresenta um formulário solicitando os detalhes da informação (qunatidade de calorias, número de refeições, tipo da dieta, quantidade de água).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui a nova informação e atualiza a lista de informações alimentares registradas; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona uma informação alimentar e requisita ao Sistema que a remova.  
2) Se a informação pode ser removida, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona uma informação alimentar e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais da informação em um formulário (qunatidade de calorias, número de refeições, tipo da dieta, quantidade de água).  
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados da informação; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por pesquisar uma informação alimentar pelo nome ou data e solicita a consulta.  
2) O Sistema apresenta uma lista das informações que atendem ao critério de pesquisa (qunatidade de calorias, número de refeições, tipo da dieta, quantidade de água).
3) O Usuário seleciona uma informação da lista.  
4) O Sistema apresenta os detalhes da informação selecionada.  

**Pós-condições:** Uma informação alimentar foi criada, alterada, excluída ou os detalhes de uma informação foram apresentados na tela.

---

#### Gerenciar Qualidade do Sono (CSU03)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) dos dados sobre a qualidade do sono.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção dos dados sobre a qualidade do sono.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de uma nova entrada sobre a qualidade do sono, alteração de uma entrada existente, exclusão de uma entrada e consulta de dados sobre o sono registrados.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão dos dados do sono, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de uma nova entrada sobre a qualidade do sono.  
2) O Sistema apresenta um formulário solicitando os detalhes da entrada (duração do sono, horário de dormir, horário de acordar, ambiente).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui a nova entrada e atualiza a lista de dados sobre a qualidade do sono; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona uma entrada sobre a qualidade do sono e requisita ao Sistema que a remova.  
2) Se a entrada pode ser removida, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona uma entrada sobre a qualidade do sono e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais da entrada em um formulário (duração do sono, horário de dormir, horário de acordar, ambiente).   
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados da entrada; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por pesquisar uma entrada sobre a qualidade do sono pelo data e solicita a consulta.  
2) O Sistema apresenta uma lista das entradas que atendem ao critério de pesquisa (duração do sono, horário de dormir, horário de acordar, ambiente).    
3) O Usuário seleciona uma entrada da lista.  
4) O Sistema apresenta os detalhes da entrada selecionada.  

**Pós-condições:** Uma entrada sobre a qualidade do sono foi criada, alterada, excluída ou os detalhes de uma entrada foram apresentados na tela.

---

#### Gerenciar Conteúdos Educacionais (CSU04)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) dos conteúdos educacionais registrados.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção dos conteúdos educacionais.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de um novo conteúdo, alteração de um conteúdo existente, exclusão de um conteúdo e consulta de conteúdos educacionais registrados.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão dos conteúdos educacionais, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de um novo conteúdo educacional.  
2) O Sistema apresenta um formulário solicitando os detalhes do conteúdo (Título, Descrição, Tipo de Conteúdo, Data de Publicação).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo conteúdo e atualiza a lista de conteúdos educacionais registrados; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona um conteúdo educacional e requisita ao Sistema que o remova.  
2) Se o conteúdo pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona um conteúdo educacional e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais do conteúdo em um formulário (Título, Descrição, Tipo de Conteúdo, Data de Publicação).  
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados do conteúdo; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por pesquisar um conteúdo educacional pelo título ou data de publicação e solicita a consulta.  
2) O Sistema apresenta uma lista dos conteúdos que atendem ao critério de pesquisa (Título, Descrição, Tipo de Conteúdo, Data de Publicação).  
3) O Usuário seleciona um conteúdo da lista.  
4) O Sistema apresenta os detalhes do conteúdo selecionado.  

**Pós-condições:** Um conteúdo educacional foi criado, alterado, excluído ou os detalhes de um conteúdo foram apresentados na tela.

---

#### Gerenciar Conteúdos Educacionais (CSU04)

**Sumário:** O Administrador realiza a gestão (criação, alteração, exclusão e consulta) dos conteúdos educacionais registrados.

**Ator Primário:** Administrador.

**Pré-condições:** O Administrador deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Administrador solicita a manutenção dos conteúdos educacionais.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de um novo conteúdo, alteração de um conteúdo existente, exclusão de um conteúdo e consulta de conteúdos educacionais registrados.  
3) O Administrador seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Administrador desejar continuar com a gestão dos conteúdos educacionais, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Administrador requisita a criação de um novo conteúdo educacional.  
2) O Sistema apresenta um formulário solicitando os detalhes do conteúdo (tipo do conteúdo, título, descrição).  
3) O Administrador fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo conteúdo e atualiza a lista de conteúdos educacionais registrados; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Administrador seleciona um conteúdo educacional e requisita ao Sistema que o remova.  
2) Se o conteúdo pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Administrador seleciona um conteúdo educacional e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais do conteúdo em um formulário (tipo do conteúdo, título, descrição).   
3) O Administrador altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados do conteúdo; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Administrador opta por pesquisar um conteúdo educacional pelo título ou data de publicação e solicita a consulta.  
2) O Sistema apresenta uma lista dos conteúdos que atendem ao critério de pesquisa (tipo do conteúdo, título, descrição).  
3) O Administrador seleciona um conteúdo da lista.  
4) O Sistema apresenta os detalhes do conteúdo selecionado.  

**Pós-condições:** Um conteúdo educacional foi criado, alterado, excluído ou os detalhes de um conteúdo foram apresentados na tela.

---

#### Notificar o Usuário (CSU05)

**Sumário:** O Sistema envia notificações diárias para lembrar o usuário de manter a prática dos hábitos saudáveis.

**Ator Primário:** Tempo.

**Ator Secundário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema e as notificações devem estar ativadas nas configurações.

**Fluxo Principal:**

1) O Sistema verifica se é hora de enviar a notificação ao Usuário.  
2) Se for o horário programado, o Sistema gera uma notificação diária com lembretes sobre a prática de hábitos saudáveis.  
3) O Sistema envia a notificação ao Usuário.  
4) O Usuário recebe a notificação e pode optar por visualizar mais informações sobre os hábitos saudáveis.  
5) O caso de uso termina após o envio da notificação.  

**Fluxo Alternativo (2): Falha no Envio**

1) O Sistema tenta enviar a notificação, mas ocorre uma falha (ex: problema de conexão, configuração incorreta).  
2) O Sistema registra o erro e tenta reenviar a notificação após um período determinado.  
3) Se o envio for bem-sucedido, o caso de uso prossegue para o passo 4; caso contrário, o Sistema mantém o registro da falha.  

**Pós-condições:** O Usuário recebeu a notificação diária sobre a prática de hábitos saudáveis.

---

#### Gerenciar Conta do Usuário (CSU06)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) dos seus dados pessoais.

**Ator Primário:** Usuário.

**Pré-condições:** 
- Criação: Conexão com a internet. 
- Alteração, Exclusão e Consulta: Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção da sua conta.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de uma nova conta (caso não exista), alteração dos dados da conta existente, exclusão da conta e consulta dos dados pessoais registrados.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão da conta, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de uma nova conta.  
2) O Sistema apresenta um formulário solicitando os dados pessoais (nome, idade, e-mail, telefone, nome do usuário, senha do usuário).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos e a conta não existir, inclui a nova conta e confirma a criação; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona a opção para excluir sua conta e requisita ao Sistema que a remova.  
2) Se a conta pode ser removida, o Sistema realiza a remoção e confirma a exclusão; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário solicita a alteração dos dados da conta.  
2) O Sistema apresenta os detalhes atuais da conta em um formulário (nome, idade, e-mail, telefone, nome do usuário, senha do usuário).  
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados da conta; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por visualizar os dados pessoais da conta e solicita a consulta.  
2) O Sistema apresenta os dados pessoais registrados (nome, idade, e-mail, telefone, nome do usuário, senha do usuário).  
3) O Usuário pode solicitar alterações ou decidir finalizar a consulta.  

**Pós-condições:** Uma conta do usuário foi criada, alterada, excluída ou os dados pessoais foram apresentados na tela.

---

#### Compartilhar Conteúdos Educacionais (CSU07)

**Sumário:** O Usuário compartilha conteúdos educacionais por meio das redes sociais.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema e ter um conteúdo educacional disponível para compartilhamento.

**Fluxo Principal:**

1) O Usuário seleciona um conteúdo educacional que deseja compartilhar.  
2) O Sistema apresenta as opções de redes sociais disponíveis para compartilhamento e/ou um link do conteúdo.
3) O Usuário escolhe o meio desejado de compartilhamento.    
4) O Usuário confirma o compartilhamento.

**Fluxo Alternativo (2): Falha no Compartilhamento**

1) O Usuário seleciona um conteúdo e tenta compartilhá-lo.  
2) O Usuário tenta publicar o conteúdo, mas ocorre uma falha (ex: problema de conexão, erro na API da rede social).  
3) O Sistema registra o erro e notifica o Usuário sobre a falha no compartilhamento.  
4) O Usuário pode optar por tentar novamente ou cancelar a operação.  

**Pós-condições:** O conteúdo educacional foi compartilhado com sucesso em uma rede social ou uma falha no compartilhamento foi registrada.

---

#### Gerenciar Metas (CSU08)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) das metas registradas.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção das metas.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de uma nova meta, alteração de uma meta existente, exclusão de uma meta e consulta das metas registradas.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão das metas, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de uma nova meta.  
2) O Sistema apresenta um formulário solicitando os detalhes da meta (nome, descrição, data de inicio, data de fim).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui a nova meta e atualiza a lista de metas registradas; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona uma meta e requisita ao Sistema que a remova.  
2) Se a meta pode ser removida, o Sistema realiza a remoção e confirma a exclusão; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona uma meta e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais da meta em um formulário (nome, descrição, data de inicio, data de fim).   
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados da meta; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por visualizar as metas registradas e solicita a consulta.  
2) O Sistema apresenta uma lista das metas registradas (nome, descrição, data de inicio, data de fim). 
3) O Usuário seleciona uma meta da lista.  
4) O Sistema apresenta os detalhes da meta selecionada.  

**Pós-condições:** Uma meta foi criada, alterada, excluída ou os detalhes de uma meta foram apresentados na tela.

---

Aqui está o caso de uso "Gerenciar Comunidades" atualizado com os fluxos alternativos para adicionar comentários, curtir publicações e compartilhar comunidades:

---

#### Gerenciar Comunidades (CSU09)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) das comunidades criadas.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção das comunidades.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de uma nova comunidade, alteração de uma comunidade existente, exclusão de uma comunidade, consulta das comunidades registradas, adicionar comentários, curtir publicações e compartilhar comunidades.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração, Consulta, Adicionar Comentários, Curtir Publicações ou Compartilhar Comunidades, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão das comunidades, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de uma nova comunidade.  
2) O Sistema apresenta um formulário solicitando os detalhes da comunidade (nome, descrição).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui a nova comunidade e atualiza a lista de comunidades registradas; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona uma comunidade e requisita ao Sistema que a remova.  
2) Se a comunidade pode ser removida, o Sistema realiza a remoção e confirma a exclusão; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona uma comunidade e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais da comunidade em um formulário (nome, descrição).  
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados da comunidade; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por visualizar as comunidades registradas e solicita a consulta.  
2) O Sistema apresenta uma lista das comunidades registradas (nome, descrição, data de criação, quantidade de usuários).  
3) O Usuário seleciona uma comunidade da lista.  
4) O Sistema apresenta os detalhes da comunidade selecionada.  

**Fluxo Alternativo (3): Adicionar Comentários**

1) O Usuário seleciona uma comunidade e opta por adicionar um comentário.  
2) O Sistema apresenta um formulário para o Usuário inserir seu comentário.  
3) O Usuário fornece o comentário.  
4) O Sistema verifica a validade do comentário. Se for válido, o comentário é adicionado à comunidade; caso contrário, o Sistema reporta o erro.  

**Fluxo Alternativo (3): Curtir Publicações**

1) O Usuário seleciona uma publicação dentro de uma comunidade.  
2) O Usuário opta por curtir a publicação.  
3) O Sistema registra a ação de curtir e atualiza o contador de curtidas na publicação.  
4) O caso de uso termina.  

**Fluxo Alternativo (3): Compartilhar Comunidades**

1) O Usuário seleciona uma comunidade e opta por compartilhá-la.  
2) O Sistema apresenta opções de compartilhamento (redes sociais, link direto).  
3) O Usuário escolhe o meio de compartilhamento e confirma.  
4) O Sistema realiza o compartilhamento e notifica o Usuário da conclusão.  
5) O caso de uso termina.  

**Pós-condições:** Uma comunidade foi criada, alterada, excluída, os detalhes de uma comunidade foram apresentados na tela, um comentário foi adicionado, uma publicação foi curtida, ou uma comunidade foi compartilhada.

---

#### Gerenciar Humor (CSU10)

**Sumário:** O Usuário realiza a gestão (criação, alteração, exclusão e consulta) dos registros de humor.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema.

**Fluxo Principal:**

1) O Usuário solicita a manutenção dos registros de humor.  
2) O Sistema apresenta as operações que podem ser realizadas: criação de um novo registro de humor, alteração de um registro existente, exclusão de um registro e consulta dos registros de humor.  
3) O Usuário seleciona a operação desejada: Criação, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4) Se o Usuário desejar continuar com a gestão dos registros de humor, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.  

**Fluxo Alternativo (3): Criação**

1) O Usuário requisita a criação de um novo registro de humor.  
2) O Sistema apresenta um formulário solicitando os detalhes do registro (tipo, intensidade, descrição).  
3) O Usuário fornece os dados solicitados.  
4) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo registro e atualiza a lista de registros de humor; caso contrário, o Sistema reporta o erro e solicita novos dados.  

**Fluxo Alternativo (3): Exclusão**

1) O Usuário seleciona um registro de humor e requisita ao Sistema que o remova.  
2) Se o registro pode ser removido, o Sistema realiza a remoção e confirma a exclusão; caso contrário, o Sistema reporta o fato.  

**Fluxo Alternativo (3): Alteração**

1) O Usuário seleciona um registro de humor e solicita a alteração dos detalhes.  
2) O Sistema apresenta os detalhes atuais do registro em um formulário (tipo, intensidade, descrição).   
3) O Usuário altera os detalhes desejados e requisita a atualização.  
4) O Sistema verifica a validade dos dados e, se forem válidos, altera os dados do registro; caso contrário, o erro é reportado.  

**Fluxo Alternativo (3): Consulta**

1) O Usuário opta por visualizar os registros de humor e solicita a consulta.  
2) O Sistema apresenta uma lista dos registros de humor (tipo, intensidade, descrição, data de criação).    
3) O Usuário seleciona um registro da lista.  
4) O Sistema apresenta os detalhes do registro selecionado.  

**Pós-condições:** Um registro de humor foi criado, alterado, excluído ou os detalhes de um registro foram apresentados na tela.

---

#### Gerar Alertas de Tendências Negativas (CSU11)

**Sumário:** O Sistema gera alertas automáticos caso detecte uma queda ou tendência negativa nos hábitos saudáveis do Usuário, sugerindo intervenções ou mudanças.

**Ator Primário:** Tempo.

**Ator Secundário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado no Sistema e deve ter dados de hábitos registrados.

**Fluxo Principal:**

1) O Sistema monitoriza continuamente os dados dos hábitos saudáveis do Usuário.  
2) O Sistema analisa os dados para identificar tendências negativas (ex: queda na frequência de atividades físicas, aumento no consumo de alimentos não saudáveis).  
3) Ao detectar uma tendência negativa, o Sistema gera um alerta automático.  
4) O Sistema notifica o Usuário sobre a tendência negativa identificada, apresentando sugestões de intervenções ou mudanças (ex: dicas de atividades físicas, sugestões de refeições saudáveis).  
5) O caso de uso termina.  

**Fluxo Alternativo (2): Não Detecção de Tendências**

1) O Sistema continua monitorando os dados dos hábitos saudáveis do Usuário.  
2) Se não forem detectadas tendências negativas, o Sistema permanece em estado de monitoramento, sem gerar alertas.  
3) O caso de uso continua até que uma tendência negativa seja identificada.
**Pós-condições:** O Usuário foi notificado sobre uma tendência negativa em seus hábitos saudáveis, com sugestões de intervenções ou mudanças apresentadas.

---

#### Entrar na Aplicação Web (CSU12)

**Sumário:** O Usuário cadastrado realiza login na aplicação web.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar cadastrado no Sistema.

**Fluxo Principal:**

1) O Usuário acessa a página de login da aplicação web.  
2) O Sistema apresenta um formulário solicitando o e-mail e a senha do Usuário.  
3) O Usuário fornece as credenciais (e-mail e senha).  
4) O Sistema verifica a validade das credenciais.  
   - **Se as credenciais forem válidas:**  
     1) O Sistema autentica o Usuário e o redireciona para a página inicial da aplicação.  
   - **Se as credenciais forem inválidas:**  
     1) O Sistema reporta um erro de login e solicita que o Usuário insira as credenciais novamente.  
5) O caso de uso termina.

**Fluxo Alternativo (3): Recuperação de Senha**

1) Se o Usuário esquecer a senha, ele seleciona a opção de "Esqueci a senha".  
2) O Sistema solicita o e-mail cadastrado.  
3) O Usuário fornece o e-mail.  
4) O Sistema verifica se o e-mail está cadastrado.  
   - **Se o e-mail estiver cadastrado:**  
     1) O Sistema envia um link de recuperação de senha para o e-mail informado.  
   - **Se o e-mail não estiver cadastrado:**  
     1) O Sistema reporta um erro informando que o e-mail não foi encontrado.  
5) O caso de uso termina.

**Fluxo Alternativo (4): Falha de Acesso à Aplicação**

1) O Usuário tenta acessar a aplicação web.  
2) O Sistema verifica se a aplicação está acessível.  
   - **Se a aplicação estiver fora do ar:**  
     1) O Sistema exibe uma mensagem de erro informando que a aplicação está temporariamente indisponível.  
     2) O Usuário é orientado a tentar novamente mais tarde.  
   - **Se a aplicação estiver acessível:**  
     1) O fluxo principal continua.  
3) O caso de uso termina.

**Pós-condições:** O Usuário foi autenticado com sucesso e redirecionado para a página inicial da aplicação, um erro de login foi reportado, ou o acesso à aplicação foi negado devido à indisponibilidade.

---

#### Sair da Aplicação Web (CSU13)

**Sumário:** O Usuário cadastrado realiza logout da aplicação web.

**Ator Primário:** Usuário.

**Pré-condições:** O Usuário deve estar autenticado na aplicação web.

**Fluxo Principal:**

1) O Usuário seleciona a opção de "Sair" na aplicação web.  
2) O Sistema solicita confirmação do logout.  
3) O Usuário confirma a ação de logout.  
4) O Sistema finaliza a sessão do Usuário.  
5) O Sistema redireciona o Usuário para a página de login da aplicação.  
6) O caso de uso termina.

**Fluxo Alternativo (2): Cancelamento do Logout**

1) O Usuário seleciona a opção de "Sair" na aplicação web.  
2) O Sistema solicita confirmação do logout.  
3) O Usuário decide não realizar o logout e cancela a ação.  
4) O Sistema mantém a sessão do Usuário ativa.  
5) O caso de uso termina.

**Pós-condições:** O Usuário foi desconectado da aplicação web e redirecionado para a página de login, ou a sessão do Usuário foi mantida ativa.

---

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes da aplicação web "Saúde e Equilíbrio". No diagrama, as seguintes regras de negócio foram estabelecidas:
 
A classe **Usuário** possui como atributos: nome, idade, endereço de e-mail e telefone e mantém uma relação de **associação** com as classes **Meta**, **Alimentação**, **Humor**, **Comunidade**, **Atividade Física**, **Qualidade do Sono** e **Conta Usuário**.
 
- A relação entre **Usuario** e **ContaUsuário** indica que um usuário pode ter no máximo uma conta e uma conta deve estar vinculada a um usuário. Os atributos da classe ContaUsuario são: nomeUsuario, idadeUsuario, enderecoEmail, telefoneUsuario e senhaUsuario.
- Para as demais classes associadas (Meta, Alimentação, Humor, Comunidade, Atividade Física e Qualidade do Sono), um usuário pode ter múltiplas instâncias de cada uma dessas entidades, mas cada entidade está associada a exatamente um usuário.

Os atributos relacionados a cada uma das classes são:
- Meta: nomeHabito, descricaoMeta, dataInicio e dataFim.
- Alimentacao: quantidadeCalorias, numeroRefeicoes, tipoDieta e quantidadeAgua.
- Humor: tipoHumor, intensidadeHumor, descricaoHumor, dataCriacao.
- Comunidade: nomeComunidade, quantidadeUsuarios, descricaoComunidade e dataCriacao.
- AtividadeFisica: nome, duracao, intensidade e categoria.
- QualidadeSono: duracaoSono, horarioDormir, horarioAcordar e ambienteSono.
 
Além disso, a classe **Administrador** herda as características da classe **Usuário**, através de uma relação de **herança**, possuindo como atributo único permissaoAdministrador. O **Administrador** é responsável por gerenciar conteúdos educacionais, que contém os seguintes atributos: tipoConteudo, tituloConteudo e descricaoConteudo. O administrador deve criar ao menos um conteúdo e os conteúdos devem estar associados a apenas um administrador.

#### Figura 2: Diagrama de Classes do Sistema.
 
![Diagrama de Classes - Saúde e Equilibrio](https://github.com/user-attachments/assets/3c9be173-a7d7-4a6a-9428-5179b2fd9bf9)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuario |	Gerenciar informações referentes aos usuários, como por exemplo nome, idade, endereço e telefone. |
| 2	| Administrador |	Controlar informações dos usuários administradores, como por exemplo o tipo de permissão. |
| 3 |	ContaUsuario |	Gerenciar informações das contas dos usuários, como por exemplo nome, idade, endereço de e-mail, senha e telefone. |
| 4 |	ConteudoEducacional | Gerenciar informações referentes aos conteúdos educacionais, como por exemplo o tipo do conteúdo, título e descrição.	|
| 5	|	QualidadeSono |	Gerenciar informações relativas à qualidade do sono, como duração, horário para dormir, acordar e ambiente. |
| 6	|	AtividadeFisica |	Gerenciar informações relativas à atividade física, como nome, duração, intensidade e categoria. |
| 7	|	Comunidade |	Gerenciar informações das comunidades criadas pelos usuários, como por exemplo nome, quantidade de usuários, descrição e data de criação. |
| 8 |	Humor |	Gerenciar informações referentes ao humor do usuário, como por exemplo tipo do humor, intensidade, descrição e data de criação. |
| 9 |	Alimentacao |	Gerenciar informações referentes à alimentação do usuário, como por exemplo a quantidade de calorias, número de refeições, tipo da dieta e quantidade de água. |
| 10 |	Meta | Gerenciar informações referentes às metas atribuídas para cada hábito, como por exemplo nome do hábito, descrição da meta, data de início e fim.	|
