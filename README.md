# 📅 Calendário Interativo

## 📌 Descrição do Projeto

O *Calendário Interativo* é uma aplicação web simples desenvolvida com **HTML**, **CSS** e **JavaScript**, cujo objetivo é permitir que o usuário selecione uma cor e aplique essa cor a um dia específico do mês de abril de 2025. A aplicação também realiza a contagem de quantos dias estão marcados com cada cor.

---

## 🧠 Funcionalidades

- Exibição de um calendário estático para o mês de **abril de 2025**.
- Seleção de cores entre as opções:
  - Azul (`LightBlue`)
  - Verde (`PaleGreen`)
  - Rosa (`LightPink`)
  - Roxo (`SlateBlue`)
- Aplicação da cor selecionada a um dia específico do mês.
- Contabilização, em segundo plano, da quantidade de células pintadas com cada cor (exibido no console).

---

## 🗃️ Estrutura dos Arquivos

| Arquivo        | Descrição |
|----------------|-----------|
| `index.html`   | Estrutura base da página com o calendário e os inputs de interação. |
| `style.css`    | Estilização da tabela e dos elementos da página. |
| `main.js`      | Lógica de interação com o usuário e aplicação das cores no calendário. |
| `README.md`    | Documentação do projeto. |

---

## 📂 Como Utilizar

1. Abra o arquivo `index.html` em um navegador moderno (Chrome, Firefox, etc).
2. Escolha uma **cor** no seletor.
3. Informe o **dia** (entre 1 e 30) e clique em “Enviar”.
4. O dia correspondente será colorido com a cor escolhida.
5. Os contadores de cores são exibidos no console do navegador (`F12` → aba "Console").

---

## 🧪 Validações

- Se o usuário não informar um número de dia, será exibido um alerta solicitando o preenchimento.
- Dias inválidos (menores que 1 ou maiores que 31) também disparam alertas de erro.
- A célula do dia é encontrada com base na posição na tabela (`td`) e a cor é aplicada dinamicamente.

---

## 🖥️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (puro)

---

## 💡 Possíveis Melhorias Futuras

- Mostrar o total de dias marcados com cada cor diretamente na interface, em vez de apenas no console.
- Tornar o calendário dinâmico (com base no mês e ano atual).
- Permitir desmarcar dias ou redefinir o calendário.
- Responsividade para dispositivos móveis.
