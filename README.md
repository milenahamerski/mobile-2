# Mundi

Mundi é um aplicativo mobile desenvolvido com **React Native** e **Expo**, voltado para o registro e planejamento de viagens.  
Com ele, você pode anotar destinos, datas, observações e manter um histórico das suas experiências pelo mundo.

---
## Design System

[Design no Figma](https://www.figma.com/design/0VQlP8P0Y4WE1c2G3n3YZw/mobile?node-id=0-1&t=jzfOtkoFqobkVIyL-1)

---

## Objetivo

O objetivo do Mundi é funcionar como um diário de viagens pessoal. O aplicativo permite:

- Cadastrar viagens passadas ou futuras
- Incluir datas, anotações e notas pessoais
- Consultar a lista de viagens registradas
- Visualizar detalhes de cada viagem
- Editar ou remover registros de viagem

---
## Telas criadas

![Tela_1](https://res.cloudinary.com/dso7vvpma/image/upload/v1747269047/Screenshot_from_2025-05-14_21-28-54_kdrfcf.png)

![Tela 2](https://res.cloudinary.com/dso7vvpma/image/upload/v1747269048/Screenshot_from_2025-05-14_21-29-19_gqfwsr.png)

![Tela 3](https://res.cloudinary.com/dso7vvpma/image/upload/v1747269047/Screenshot_from_2025-05-14_21-28-59_tqalgm.png)

![Tela 4](https://res.cloudinary.com/dso7vvpma/image/upload/v1747269048/Screenshot_from_2025-05-14_21-29-53_ujzj3l.png)

![Tela 5](https://res.cloudinary.com/dso7vvpma/image/upload/v1747269047/Screenshot_from_2025-05-14_21-29-42_m0mqnq.png)

![Tela 6](https://res.cloudinary.com/dso7vvpma/image/upload/v1747269048/Screenshot_from_2025-05-14_21-28-34_hiokpj.png)

---
## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Expo Router

## Diferença entre Testes Unitários e Testes E2E (End to End) em aplicações mobile
- Testes Unitários verificam pequenas partes isoladas do código, como funções, componentes ou métodos individuais. Eles são rápidos e ajudam a garantir que cada pedaço do código funciona corretamente de forma **independente**.
Exemplo: testar se um componente React Native renderiza corretamente com determinadas props.

- Testes E2E (End to End) simulam o uso real do aplicativo do começo ao fim, testando fluxos completos, interagindo com a interface como um **usuário** faria. Eles garantem que todas as partes do sistema (frontend, backend, banco de dados) funcionem integradas corretamente.
Exemplo: abrir o app, preencher um formulário, salvar uma viagem e verificar se a viagem aparece na lista.
---

## Como executar o projeto
```bash
   git clone https://github.com/milenahamerski/mobile-2.git
```
```bash
   yarn install
```
```bash
   yarn start
```
## Como executar os testes
### Testes Unitários:
Estes testes são escritos com Jest e React Testing Library. Para rodá-los:
```bash
   yarn test
```

### Testes E2E (End to End):
Usamos Playwright para testes E2E que simulam a interação real com o aplicativo. Para rodá-los, use:
```bash
   yarn test:e2e
```
