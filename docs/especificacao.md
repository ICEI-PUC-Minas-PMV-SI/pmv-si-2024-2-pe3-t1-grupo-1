# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Definir os requisitos necessários para o desenvolvimento da aplicação web voltada para jovens e adultos, que permitirá o registro e o monitoramento de hábitos saudáveis, atendendo às necessidades estabelecidas pelo projeto Saúde e Equilíbrio.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais


### 3.2.2 Missão do produto
Gerenciar informações relacionadas ao monitoramento de hábitos saudáveis, fornecendo recursos para acompanhamento de metas, práticas diárias, e oferecendo conteúdos educativos. O sistema web também visa personalizar a experiência do usuário com base em suas atividades e progresso, promovendo a manutenção de um estilo de vida equilibrado e sustentável.

### 3.2.3 Limites do produto
O projeto Saúde e Equilíbrio não substitui a necessidade de consultas médicas, exames laboratoriais ou acompanhamento profissional especializado. A aplicação web serve como uma ferramenta de monitoramento e incentivo de hábitos saudáveis, mas não realiza diagnósticos, tratamentos ou recomendações médicas personalizadas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no registro e acompanhamento de hábitos |	Essencial |
|2 | Facilidade na visualização do progresso e metas | Essencial | 
|3 | Acesso a conteúdos educativos personalizados | Essencial | 
|4	| Desencorajamento de hábitos prejudiciais	| Recomendável | 
|5 | Motivação e engajamento para manter os hábitos saudáveis	| Recomendável | 
|6 | Melhora na qualidade de vida e redução de doenças crônicas	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Curso de Aperfeiçoamento |	Processamento de Inclusão, Alteração, Exclusão e Consulta de Cursos de Aperfeiçoamento |
| RF2 |	Gerenciar Professor	| Processamento de Inclusão, Alteração, Exclusão e Consulta de professores |
| RF3	| Gerenciar Matrícula |	Processamento de Inclusão, Alteração, Exclusão e Consulta de Matrículas de alunos em Cursos de Aperfeiçoamento |
| ... |	...	| ... |

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
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](https://github.com/user-attachments/assets/97ab1aa8-eb03-4b58-9ad5-1697d414a451)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
