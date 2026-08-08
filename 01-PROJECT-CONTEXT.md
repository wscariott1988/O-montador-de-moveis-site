# PROJECT-CONTEXT.md

## Projeto: Willian Montador / Central Montador

**Versão:** 1.0  
**Data de consolidação:** 07/08/2026  
**Objetivo deste documento:** servir como fonte de verdade para retomar o projeto em outro chat, IDE ou agente de código sem depender do histórico da conversa.

\---

# 1\. VISÃO GERAL

O projeto tem dois lados diferentes e eles NÃO devem ser confundidos na comunicação:

## 1.1. Lado do cliente final

A aquisição de clientes será feita principalmente usando a confiança pessoal de **Willian como montador de móveis**.

Posicionamento recomendado ao consumidor:

**Willian | Montador de Móveis**

A comunicação não deve apresentar a operação principalmente como marketplace, plataforma ou "Central Montador".

O cliente deve perceber:

* uma pessoa real responsável pelo atendimento;
* experiência prática em montagem de móveis;
* rapidez para verificar orçamento e disponibilidade;
* possibilidade de atendimento pessoalmente por Willian ou por montador parceiro selecionado;
* transparência sobre qual profissional irá ao local antes do atendimento.

## 1.2. Lado dos montadores parceiros

A operação interna de repasse é organizada sob o conceito:

**Central Montador**

Nome atual do grupo de WhatsApp:

**Repasse de Montagens | NH e Região**

O grupo é fechado e somente o administrador publica oportunidades.

\---

# 2\. SOBRE WILLIAN

Willian é montador de móveis há mais de 5 anos e atende a região do Vale dos Sinos.

A experiência prática de Willian é uma das principais camadas de confiança do projeto.

O site atual utilizado como referência é:

https://omontadordemoveis.com/

A página atual foi construída em WordPress/Elementor e não está no novo projeto de código.

A intenção é NÃO migrar o código do Elementor. O site atual deve ser usado apenas como referência para:

* informações;
* fotos;
* avaliações;
* provas;
* histórico;
* identidade;
* serviços que ainda fizerem sentido.

\---

# 3\. NOVA ARQUITETURA DO SITE

A intenção é criar um projeto novo em código, versionado no GitHub e publicado na Vercel.

Estrutura planejada:

```text
omontadordemoveis.com/
│
├── /                  → nova homepage institucional
└── /montador          → landing page exclusiva para Google Ads
```

Possíveis rotas futuras, somente após validação:

```text
/montador/novo-hamburgo
/montador/sao-leopoldo
/montador/campo-bom
/montador/estancia-velha
/montador/sapucaia-do-sul
```

Não criar essas rotas agora.

## 3.1. Ordem de execução recomendada

1. Criar o novo projeto.
2. Criar documentação permanente.
3. Construir primeiro `/montador`.
4. Testar conversão, tracking, mobile e deploy.
5. Colocar a campanha no ar quando a LP estiver pronta.
6. Construir a nova homepage `/`.
7. Só alterar DNS quando homepage e LP estiverem aprovadas.

Enquanto isso, o site Elementor atual continua no ar.

\---

# 4\. ESCOPO DO SERVIÇO NA CAMPANHA

A campanha e a landing page `/montador` são focadas exclusivamente em:

**MONTAGEM DE MÓVEIS CONVENCIONAIS**

Exemplos:

* guarda-roupas;
* cômodas;
* armários;
* racks;
* painéis;
* mesas;
* cadeiras;
* camas;
* móveis comprados pela internet;
* móveis de grandes lojas;
* outros móveis convencionais desmontados.

Não posicionar essa landing page como:

* móveis planejados;
* marcenaria;
* fabricação sob medida;
* projeto de móveis;
* reparos em geral;
* marido de aluguel;
* elétrica;
* hidráulica;
* serviço genérico de manutenção.

\---

# 5\. REGIÃO INICIAL DA CAMPANHA

Anunciar inicialmente somente para:

1. **Novo Hamburgo**
2. **São Leopoldo**
3. **Estância Velha**
4. **Campo Bom**
5. **Sapucaia do Sul**

**Esteio NÃO faz parte da configuração atual.**

A comunicação geral pode usar:

**Novo Hamburgo e Região**

Na landing page, listar explicitamente as cinco cidades.

\---

# 6\. MODELO OPERACIONAL COM PARCEIROS

O fluxo planejado é:

1. Cliente pede orçamento.
2. Willian coleta fotos, cidade e preferência de data.
3. A oportunidade é publicada no grupo fechado.
4. O montador interessado responde no privado.
5. O montador informa:

   * valor líquido que quer receber;
   * data disponível;
   * horário disponível.
6. O montador só executa serviços que ele próprio avaliou e precificou.
7. Willian adiciona sua margem/comissão ao valor informado pelo montador.
8. As possibilidades são apresentadas ao cliente.
9. Em geral, velocidade de resposta é priorizada.
10. O cliente escolhe/aceita uma opção.
11. O profissional é identificado antes do atendimento.
12. O cliente paga diretamente ao montador.
13. O montador repassa a comissão combinada no mesmo dia.
14. O montador avisa quando concluiu e envia fotos.
15. O cliente é consultado posteriormente sobre atendimento e pontualidade.

Se um montador respondeu e não recebeu retorno:

* o cliente não fechou;
* ou o serviço foi direcionado para outro profissional.

Quando um serviço fechar, a oportunidade deixa de estar disponível.

Preferência operacional:

* marcar como **SERVIÇO AGENDADO COM MONTADOR PARCEIRO** antes de remover/arquivar a publicação, para demonstrar movimentação real no grupo.

\---

# 7\. PADRÕES ESPERADOS DOS MONTADORES

O básico esperado:

* chegar no horário combinado;
* ser educado;
* ser profissional;
* avisar imediatamente qualquer imprevisto;
* não alterar o valor depois da confirmação sem uma mudança real e previamente comunicada no escopo;
* concluir corretamente o serviço;
* conferir alinhamento;
* conferir portas e gavetas;
* conferir funcionamento correto;
* avisar que concluiu;
* enviar fotos finais;
* repassar a comissão da intermediação no mesmo dia após receber do cliente.

Atrasos recorrentes, falta sem aviso, atendimento ruim ou comportamento inadequado podem encerrar a parceria.

Não há:

* mensalidade;
* exclusividade;
* obrigação de aceitar serviços;
* quantidade mínima de montagens;
* jornada de trabalho.

\---

# 8\. MARCA E COMUNICAÇÃO

## 8.1. Cliente final

Preferência atual:

**Willian | Montador de Móveis**

A confiança pessoal é usada para aquisição.

Exemplo de transparência:

> "Conforme disponibilidade e região, o atendimento pode ser realizado por mim ou por um montador parceiro selecionado. Antes da confirmação, você recebe as informações do profissional responsável."

Evitar linguagem que faça o consumidor imaginar que sempre será Willian quem irá ao local.

## 8.2. Parceiros

Marca/conceito interno:

**Central Montador**

Grupo atual:

**Repasse de Montagens | NH e Região**

Imagem do grupo:

* fundo vermelho forte;
* visual destacado no WhatsApp;
* texto principal "REPASSE DE MONTAGENS";
* subtítulo "NH E REGIÃO";
* ícone de móvel + parafusadeira.

\---

# 9\. GOOGLE ADS — CONFIGURAÇÃO JÁ DECIDIDA

## 9.1. Tipo de campanha

* Google Ads
* Rede de Pesquisa
* Objetivo: Leads
* Uma campanha inicialmente

Nome recomendado:

**PESQUISA | Leads | Willian Montador | NH e Região | 08/2026**

## 9.2. Estratégia de lance

Começar com:

**Maximizar cliques**

Com limite inicial sugerido de CPC máximo:

**R$ 5,00**

Não começar com correspondência ampla.

Depois, com tracking confiável e volume suficiente de conversões úteis, migrar para:

**Maximizar conversões**

Não fazer a mudança apenas porque "passaram X dias". A mudança deve considerar:

* rastreamento validado;
* volume de conversões;
* qualidade dos contatos;
* estabilidade da campanha.

## 9.3. Orçamento e bônus

Objetivo promocional informado:

**usar pelo menos R$ 1.220 em até 60 dias para ganhar o bônus do Google Ads.**

Orçamento inicial discutido:

**R$ 25/dia**

Como a campanha não deve rodar aos domingos inicialmente, monitorar semanalmente o gasto acumulado para garantir que o total de R$ 1.220 seja alcançado dentro da janela promocional.

Se o ritmo estiver abaixo do necessário, aumentar o orçamento.

## 9.4. Redes

* Rede de Pesquisa do Google: LIGADA
* Parceiros de pesquisa: DESLIGADOS inicialmente
* Rede de Display: DESLIGADA

## 9.5. Locais

Adicionar individualmente:

* Novo Hamburgo
* São Leopoldo
* Estância Velha
* Campo Bom
* Sapucaia do Sul

Opção de localização:

**Presença: pessoas que estão ou costumam estar nos locais segmentados.**

Evitar "presença ou interesse" na configuração inicial.

## 9.6. Idioma

* Português

## 9.7. Programação

Configuração inicial:

**Segunda a sábado: 06:00 às 20:00**

**Domingo: não anunciar**

Justificativa:

* o modelo depende de resposta rápida de parceiros;
* histórico de outras campanhas de montadores mostrou forte volume de conversões durante o dia;
* sábado mostrou desempenho forte;
* domingo foi relativamente inferior e é operacionalmente menos interessante.

\---

# 10\. EVIDÊNCIAS HISTÓRICAS ANALISADAS

Estas informações são referências históricas e NÃO metas garantidas da nova campanha.

## 10.1. Dados próprios antigos

Em relatório antigo:

* Smartphones: 287 cliques, R$ 840,71
* Computadores: 50 cliques, R$ 209,33

Aproximadamente 85% dos cliques vieram de smartphones.

Implicação:

**A landing page deve ser mobile-first e o WhatsApp deve ser a conversão principal.**

## 10.2. Campanhas de outros montadores

Foram analisados relatórios de campanhas de montadores de cidades próximas.

Duas campanhas usadas como referência somaram aproximadamente:

* 1.977 cliques;
* 522 conversões registradas;
* cerca de R$ 6,7 mil em investimento.

O intervalo 06h–20h concentrou a grande maioria das conversões do histórico analisado.

O sábado apresentou desempenho forte em volume e custo por conversão.

Esses dados servem para escolher um ponto de partida, não para assumir que a nova campanha terá o mesmo comportamento.

\---

# 11\. PALAVRAS-CHAVE — REGRA PRINCIPAL

Usar apenas:

* **correspondência de frase**
* **correspondência exata**

Não usar correspondência ampla no início.

As palavras negativas serão construídas em uma etapa separada usando o histórico completo de várias campanhas.

\---

# 12\. PALAVRAS-CHAVE INICIAIS

## 12.1. Grupo genérico

### Correspondência de frase

```text
"montador de móveis"
"montagem de móveis"
"montador de móveis perto de mim"
"montador de móveis próximo a mim"
"serviço de montador de móveis"
"montador de móveis profissional"
```

### Correspondência exata

```text
\[montador de móveis]
\[montagem de móveis]
\[montador de móveis perto de mim]
\[montador de móveis próximo a mim]
\[serviço de montador de móveis]
\[montador de móveis profissional]
```

\---

## 12.2. Novo Hamburgo

### Frase

```text
"montador de móveis novo hamburgo"
"montador de móveis em novo hamburgo"
"montagem de móveis novo hamburgo"
"montagem de móveis em novo hamburgo"
"montador novo hamburgo"
```

### Exata

```text
\[montador de móveis novo hamburgo]
\[montador de móveis em novo hamburgo]
\[montagem de móveis novo hamburgo]
\[montagem de móveis em novo hamburgo]
\[montador novo hamburgo]
```

\---

## 12.3. São Leopoldo

### Frase

```text
"montador de móveis são leopoldo"
"montador de móveis em são leopoldo"
"montagem de móveis são leopoldo"
"montagem de móveis em são leopoldo"
"montador são leopoldo"
```

### Exata

```text
\[montador de móveis são leopoldo]
\[montador de móveis em são leopoldo]
\[montagem de móveis são leopoldo]
\[montagem de móveis em são leopoldo]
\[montador são leopoldo]
```

\---

## 12.4. Campo Bom

### Frase

```text
"montador de móveis campo bom"
"montador de móveis em campo bom"
"montagem de móveis campo bom"
"montagem de móveis em campo bom"
"montador campo bom"
```

### Exata

```text
\[montador de móveis campo bom]
\[montador de móveis em campo bom]
\[montagem de móveis campo bom]
\[montagem de móveis em campo bom]
\[montador campo bom]
```

\---

## 12.5. Estância Velha

### Frase

```text
"montador de móveis estância velha"
"montador de móveis em estância velha"
"montagem de móveis estância velha"
"montagem de móveis em estância velha"
"montador estância velha"
```

### Exata

```text
\[montador de móveis estância velha]
\[montador de móveis em estância velha]
\[montagem de móveis estância velha]
\[montagem de móveis em estância velha]
\[montador estância velha]
```

\---

## 12.6. Sapucaia do Sul

### Frase

```text
"montador de móveis sapucaia do sul"
"montador de móveis em sapucaia do sul"
"montagem de móveis sapucaia do sul"
"montagem de móveis em sapucaia do sul"
"montador sapucaia do sul"
```

### Exata

```text
\[montador de móveis sapucaia do sul]
\[montador de móveis em sapucaia do sul]
\[montagem de móveis sapucaia do sul]
\[montagem de móveis em sapucaia do sul]
\[montador sapucaia do sul]
```

\---

# 13\. ESTRUTURA INICIAL DOS GRUPOS DE ANÚNCIOS

Uma única campanha, com grupos:

```text
AG | Genérico
AG | Novo Hamburgo
AG | São Leopoldo
AG | Campo Bom
AG | Estância Velha
AG | Sapucaia do Sul
```

Objetivo:

* permitir anúncios mais alinhados à cidade pesquisada;
* manter orçamento concentrado em uma única campanha;
* evitar fragmentação excessiva nesta fase inicial.

\---

# 14\. ANÚNCIOS — DIRETRIZES

Usar nomes das cidades nos títulos dos grupos específicos.

Exemplos:

```text
Montador em Novo Hamburgo
Montador em São Leopoldo
Montador em Campo Bom
Montador em Estância Velha
Montador em Sapucaia do Sul
```

Outros títulos possíveis:

```text
Montagem de Móveis
Orçamento pelo WhatsApp
Montador Profissional
Atendimento Rápido
Agende Sua Montagem
Mais de 5 Anos de Experiência
Móveis Convencionais
Envie Fotos no WhatsApp
Atendimento no Vale dos Sinos
Montagem com Cuidado
Peça Seu Orçamento
```

Descrições-base:

```text
Envie fotos dos móveis pelo WhatsApp e consulte valor e disponibilidade para a montagem.

Montagem de móveis convencionais com atendimento profissional na sua região.

Fale com Willian, montador há mais de 5 anos, e solicite seu orçamento pelo WhatsApp.

Agende sua montagem pelo WhatsApp. Atendimento conforme disponibilidade na sua região.
```

Não prometer prazo, preço ou garantia que não estejam formalmente definidos.

\---

# 15\. CONVERSÃO E TRACKING

Conversão principal da landing page:

**Clique no WhatsApp**

Nome sugerido de evento:

```text
whatsapp\_click
```

Parâmetro:

```text
cta\_location
```

Exemplos:

```text
hero
processo
portfolio
faq
final
sticky-mobile
```

Regras:

* href de WhatsApp deve funcionar sem JavaScript;
* não usar preventDefault para bloquear navegação;
* tracking não pode atrasar ou impedir a abertura do WhatsApp;
* não usar formulário na LP.

Posteriormente, acompanhar também de forma operacional:

* clique;
* conversa real;
* orçamento;
* serviço fechado;
* valor do serviço;
* comissão/margem;
* montador responsável.

\---

# 16\. PÁGINA DE DESTINO

URL planejada:

**https://omontadordemoveis.com/montador**

A página deve ser criada primeiro no novo projeto e testada na Vercel.

Não usar `/google`.

Não usar `/ads` como primeira escolha.

`/montador` é a rota preferida porque corresponde diretamente à intenção do usuário.

\---

# 17\. PENDÊNCIAS

Ainda precisam ser definidos/validados:

* lista consolidada de palavras-chave negativas;
* copy final dos RSA;
* landing page final;
* política formal de garantia/retorno na comunicação ao consumidor;
* tracking real do novo projeto;
* configuração definitiva de Google Ads após a LP;
* eventual ajuste de CPC máximo após observar impressões;
* momento de migração de Maximizar Cliques para Maximizar Conversões;
* eventual inclusão futura de novas cidades;
* eventual criação de páginas por cidade.

\---

# 18\. REGRA PARA RETOMAR O PROJETO

Ao reutilizar este documento em outro chat/agente:

1. Ler este arquivo antes de sugerir mudanças.
2. Não adicionar cidades que não estejam na lista atual.
3. Não usar correspondência ampla.
4. Não transformar a comunicação ao consumidor em "Central Montador".
5. Não incluir móveis planejados na LP `/montador`.
6. Não apagar decisões anteriores sem explicar o motivo.
7. Diferenciar claramente:

   * fatos/decisões já tomadas;
   * hipóteses;
   * recomendações novas;
   * resultados de dados posteriores.

