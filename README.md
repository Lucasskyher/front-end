# 🌐 Controle de Investimentos - Front-end

## 📑 Sumário
- [Objetivos do Projeto](#-objetivos-do-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Validações](#-validações)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)
- [Autor](#-autor)


## 🎯 Objetivos do Projeto
O front-end do sistema de Controle de Investimentos, desenvolvido com Angular, é fundamental para garantir uma experiência interativa e intuitiva para o usuário. Ele permite que o usuário cadastre, edite, exclua e visualize investimentos, com validações no lado do cliente para garantir dados corretos antes de serem enviados ao back-end. Utilizando Bootstrap, a interface é responsiva, adaptando-se a diferentes dispositivos. A comunicação com o back-end é feita via requisições HTTP, mantendo os dados atualizados em tempo real. Além disso, o front-end oferece feedback ao usuário por meio de mensagens de sucesso ou erro, gerencia o estado da aplicação de forma eficiente e permite fácil manutenção e expansão do sistema.

## 🔥 Funcionalidades Principais
- *Cadastrar novos investimentos*: Inserir informações como nome, tipo, valor investido e data do investimento.
- *Editar investimentos existentes*: Atualizar informações de investimentos cadastrados.
- *Excluir investimentos*: Remover investimentos da lista.
- *Visualizar lista de investimentos*: Exibir todos os investimentos cadastrados com a possibilidade de realizar ações de edição e remoção.

## ✔ Validações
- *Nome do Investimento*: O nome do investimento deve ter pelo menos 3 caracteres. Caso contrário, o usuário receberá uma mensagem de erro.
- *Tipo de Investimento*: O tipo do investimento é obrigatório e não pode ser deixado em branco.
- *Valor Investido*: O valor investido deve ser maior que 0, garantindo que o usuário insira um valor válido para o investimento.
- *Data do Investimento*: A data do investimento não pode ser no futuro. O sistema valida a data inserida e assegura que o investimento tenha sido feito em uma data válida.

## 🛠 Tecnologias Utilizadas:
- *Frontend*: O front-end do sistema foi desenvolvido utilizando Angular, oferecendo uma interface interativa e fácil de usar.
- *Estilo*: Foi utilizado Bootstrap para garantir um design responsivo e atraente, com componentes prontos para facilitar o desenvolvimento da interface.

## 💻 Como Executar:
- *Clonar Repositório*: Abra o terminal ou prompt de comando, navegue até a pasta onde deseja clonar, e execute este comando:
```sh
git clone https://github.com/Lucasskyher/front-end
```
- *Instalar as Dependências*: Na pasta front-end do projeto angular, instale as dependências necessárias:
```sh
npm install
```
- *Iniciar Servidor Angular*: Execute o seguinte comando no diretório do projeto (pasta front-end):
```sh
ng serve
```
Isso iniciará o front-end na URL http://localhost:4200.

## 👥 Autor
O Aplicativo Controle de Investimentos foi criado por Lucas Silva Pinheiro.
