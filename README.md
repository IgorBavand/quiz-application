# Quiz Application

Este é um projeto de aplicação de quiz desenvolvido com Angular. A aplicação permite aos usuários responder a perguntas de múltipla escolha e ver suas respostas corretas e incorretas.

## Tecnologias Utilizadas

- Angular 15
- Angular Material
- SCSS
- TypeScript
- HTML
- JSON

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

src/
├── app/
│ ├── core/
│ │ ├── alternative.dto.ts
│ │ └── question.dto.ts
│ ├── services/
│ │ └── quiz.service.ts
│ ├── quiz/
│ │ ├── quiz.component.html
│ │ ├── quiz.component.scss
│ │ ├── quiz.component.ts
│ │ └── quiz.component.spec.ts
│ ├── app.component.html
│ ├── app.component.scss
│ ├── app.component.ts
│ └── app.module.ts
├── assets/
│ └── questions.json
├── styles.scss
└── index.html

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Angular CLI instalados na sua máquina.

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Instalação

1. Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/IgorBavand/quiz-application
cd quiz-application
npm install
ng serve
