🧱 Padrão de Projeto ✦ Builder ✦
Também conhecido como: Construtor

❥ Propósito
༄ O Builder é um padrão de projeto criacional que permite construir objetos complexos de forma passo a passo. Ele separa a construção de um objeto da sua representação final, permitindo criar diferentes versões do mesmo tipo de objeto usando o mesmo processo de construção.

❥ Problema
༄ Quando o código precisa instanciar objetos com muitos atributos opcionais ou em diferentes combinações, o uso de construtores com muitos parâmetros pode se tornar confuso, propenso a erros e difícil de manter.

Além disso, manter a ordem dos argumentos ou lembrar o que cada parâmetro representa pode causar inconsistência e dificultar a leitura do código.

❥ Solução com o Builder
O padrão Builder resolve esses problemas ao introduzir um objeto construtor que encapsula a lógica de construção do objeto.

Em vez de passar todos os parâmetros de uma vez, o Builder fornece métodos para definir cada parte do objeto de forma fluente. Ao final, um método específico (geralmente chamado build) retorna o objeto totalmente construído.

Isso permite construir objetos de forma clara, modular e flexível.

❥ Estrutura do padrão
Produto: A classe do objeto complexo que será construído.

Builder: Define a interface para construção das partes do objeto.

Builders concretos: Implementam os passos da construção para versões específicas do produto.

Diretor (opcional): Define a ordem de construção e reutiliza os Builders para criar diferentes representações do produto.

❥ Aplicabilidade
Use o padrão Builder quando:

➤ Um objeto precisa ser criado em várias etapas ou configurações.
➤ Há muitos parâmetros opcionais ou combinações possíveis.
➤ Deseja-se separar a lógica de construção da lógica do próprio objeto.
➤ O mesmo processo de construção deve gerar diferentes representações do objeto.

❥ Vantagens e desvantagens
➤ Vantagens:

✅ Criação de objetos complexos de forma clara e organizada.
✅ Código mais legível e expressivo.
✅ Redução de erros por parâmetros fora de ordem ou omitidos.
✅ Facilita a criação de diferentes variações do mesmo objeto.
✅ Segue os princípios da responsabilidade única e aberto/fechado.

➤ Desvantagens:

⚠️ Pode aumentar a complexidade do sistema em casos simples.
⚠️ Pode exigir a criação de várias classes Builders para diferentes representações.

❥ Relação com outros padrões
✦ Frequentemente usado junto com Factory Method e Abstract Factory em sistemas complexos.
✦ Pode ser combinado com Prototype para duplicar objetos parcialmente construídos.
✦ Ajuda na implementação do princípio da separação de responsabilidades.
✦ Uma evolução natural do uso de construtores telescópicos com muitos parâmetros.

❥ Créditos
༄ Este conteúdo foi elaborado por Miguel Rubim Vencato.

❥ Vídeo
༄ Vídeo explicativo: [Clique aqui para assistir](https://drive.google.com/drive/folders/17ZGb3AmYrQe1YJsX7g76sYVHZEYdwgkF?usp=sharing)
