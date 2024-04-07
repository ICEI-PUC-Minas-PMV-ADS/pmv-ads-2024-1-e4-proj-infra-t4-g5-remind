# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/blob/main/docs/img/Arquitetura-de-solucao.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.
 
## Modelo Físico
Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

**Linguagens de Programação:**

* JavaScript: Linguagem de programação utilizada no frontend e no back-end.

**Frameworks:**

* NodeJS (back-end): O Node.js é um framework que permite a criação de APIs, aplicações de chat e microsserviços.
* React Native (front-end): É uma estrutura de aplicativo móvel e web, baseada na linguagem JavaScript, que permite a reutilização de componentes em mais de uma plataforma, assim provendo maior disponibilidades em plataformas.
* React (web): É uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário interativas e eficientes.

**Documentação de API:**

* Swagger: É uma ferramenta de código aberto para a criação de documentação de APIs RESTful.

**Testes Unitários:**

* Jest: É um framework de testes unitários JavaScript de código aberto.

**Visualização de Dados do Banco:**

* MongoDbCompass: É uma ferramenta gráfica de código aberto para gerenciar bancos de dados MongoDB.

**Banco de Dados Back-end:**

* Mongoose: É uma biblioteca JavaScript de código aberto para interagir com bancos de dados MongoDB.


## Qualidade de Software

A qualidade do software do Remind é avaliada segundo diversos critérios essenciais, tais como funcionalidade, eficiência de desempenho, usabilidade, manutenibilidade e segurança. Essas dimensões são fundamentais para garantir a entrega de um produto que não apenas atenda às necessidades do nosso público-alvo, mas também proporcione uma experiência de uso positiva. Abaixo estão as considerações específicas para a qualidade do software do Remind, baseadas na ISO/IEC 25002:2024:

### Funcionalidade

O Remind oferece um conjunto de funcionalidades focadas na otimização da comunicação interna, na delegação de tarefas e no gerenciamento eficiente de lembretes, garantindo que os membros da equipe estejam sempre alinhados e focados em suas responsabilidades.

### Eficiência de Desempenho

O aplicativo é projetado para ser rápido e responsivo, garantindo um desempenho eficiente mesmo sob carga de trabalho intensa, usando recursos de maneira otimizada.

### Usabilidade

Com uma interface intuitiva e fácil de navegar, o Remind se destaca pela facilidade de uso, permitindo que usuários de todos os níveis técnicos interajam com o aplicativo sem dificuldades.

### Manutenibilidade

O código do Remind é estruturado e documentado de maneira a facilitar atualizações e manutenções, assegurando a longevidade e a adaptabilidade do software.

### Segurança

A proteção das informações dos usuários é prioritária. O Remind implementa medidas de segurança robustas para garantir a confidencialidade e integridade dos dados.

| Característica de Qualidade     | Subcaracterísticas                                        | Justificativa                                                                                                          |
|---------------------------------|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Adequação Funcional**         | Adequação, Acurácia, Conformidade                         | Atende às necessidades específicas de comunicação e gestão de tarefas com precisão e conformidade com padrões.        |
| **Eficiência de Desempenho**    | Comportamento em relação aos recursos                     | Utiliza recursos de forma eficiente, assegurando alta performance e responsividade.                                    |
| **Usabilidade**                 | Inteligibilidade, Apreensibilidade, Operacionalidade      | Fácil de aprender, usar e operar, independente do nível técnico do usuário.                                            |
| **Manutenibilidade**            | Modularidade, Modificabilidade, Testabilidade             | Facilita atualizações e manutenções, promovendo a adaptabilidade e evolução contínua do software.                      |
| **Segurança**                   | Confidencialidade                                         | Assegura a proteção dos dados dos usuários contra acessos não autorizados.                                             |

### Métricas de Avaliação da Qualidade

A avaliação da qualidade do Remind é feita através de métricas específicas para cada subcaracterística de qualidade, considerando escalas que variam de "Atende Completamente" a "Não Atende", com um peso atribuído como "ALTO" para todas as características, refletindo a importância de cada uma no contexto do nosso aplicativo.

| Subcaracterísticas             | Métrica                                          | Escala                                      | Peso  |
|--------------------------------|-------------------------------------------------|---------------------------------------------|-------|
| Adequação                      | O sistema atende às necessidades de comunicação?| Atende Completamente / Parcialmente / Não  | ALTO  |
| Acurácia                       | O sistema gera resultados precisos?             | Atende Completamente / Parcialmente / Não  | ALTO  |
| Conformidade                   | O sistema está em conformidade com normas?      | Atende Completamente / Parcialmente / Não  | ALTO  |
| Comportamento em relação aos recursos | O sistema usa recursos eficientemente?       | Muito / Suficiente / Pouco                  | ALTO  |
| Inteligibilidade               | O sistema é fácil de entender?                  | Atende Completamente / Parcialmente / Não  | ALTO  |
| Apreensibilidade               | O sistema é fácil de aprender?                  | Atende Completamente / Parcialmente /


