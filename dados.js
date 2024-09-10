let dados = [
    {
        titulo: "Renda Fixa",
        descricao: "Os investimentos em renda fixa podem ser prefixados (quando é possível saber o retorno exato da aplicação antes de investir) ou pós-fixados (quando o rendimento está atrelado a índices da economia). Existe também o tipo híbrido, que funciona como uma mistura do prefixado e do pós-fixado. Abaixo, confira os principais tipos de investimentos de renda fixa:",
        link: "https://www.infomoney.com.br/guias/renda-fixa/",
        tags: ""
    },
    {
        titulo: "Poupança",
        descricao: "Esse produto é isento de Imposto de Renda e não exige um valor mínimo para começar, mas seu rendimento é limitado e muda de acordo com a taxa básica de juros da economia, a Selic.",
        link: "https://blog.nubank.com.br/qual-o-rendimento-da-poupanca/",
        tags: ""
    },
    {
        titulo: "Tesouro Direto", 
        descricao: "O Tesouro Direto é um programa criado pelo Tesouro Nacional para garantir que pessoas físicas possam ter acesso aos títulos públicos. Ao comprar um título público, é como se o investidor emprestasse dinheiro ao Governo para financiar a dívida pública. Ou seja, a pessoa se torna credora e, depois de um prazo, recebe juros por isso. Existem diferentes títulos públicos, com diferentes prazos e rendimentos, que podem ser prefixados ou acompanhar indicadores importantes da economia, como a inflação (IPCA) e os juros (Selic).",
        link: "https://blog.nubank.com.br/o-que-e-tesouro-direto/",
        tags: ""
    },
    {
        titulo: "CDB",
        descricao: "o CDB (Certificado de Depósito Bancário) também é um título de dívida, mas quem compra esse produto vira credor de bancos – que são as únicas instituições que emitem esse tipo de título.O rendimento do CDB também pode ser conhecido no momento da aplicação ou seguir algum indicador da economia.", 
        link: "https://blog.nubank.com.br/cdb-o-que-e/",
        tags: ""
    },
    {
        titulo: "LCI e LCA",
        descricao: "Esses tipos de investimentos caminham lado a lado porque funcionam de forma parecida. A LCI (Letra de Crédito Imobiliário) e a LCA (Letra de Crédito do Agronegócio) também são emitidas apenas por instituições financeiras, mas têm destinos específicos. Ao comprar esses títulos, o investidor também está emprestando dinheiro à instituição bancária, mas esses recursos só podem ser usados para financiar os setores imobiliários, no caso da LCI, e do agronegócio, no caso da LCA. ",
        link: "https://blog.nubank.com.br/lci-e-lca/",
        tags: ""
    }, 
    {
        titulo: "CRI e CRA", 
        descricao: "Os CRIs (Certificados de Recebíveis Imobiliários) e os CRAs (Certificados de Recebíveis do Agronegócio) são tipos de investimentos parecidos com as LCIs e LCAs. Ou seja, o dinheiro desses títulos só pode ser usado para financiar os setores imobiliário e do agronegócio. Mas quem emite os CRIs e CRAs não são instituições financeiras, e sim companhias securitizadoras. Além disso, diferentemente das letras de crédito, os certificados têm isenção de Imposto de Renda.",
        link: "https://blog.nubank.com.br/cri-e-cra-o-que-sao/",
        tags: ""
    }, 
    {
        titulo: "Renda Variável",
        descricao: "Diferentemente da renda fixa, na renda variável os tipos de investimentos oscilam mais e, por isso, têm risco maior – no mundo dos investimentos, mais risco pode significar também mais rentabilidade. Contudo, não é possível garantir esses rendimentos. Além disso, os produtos da renda variável têm dinâmicas e regras muito diferentes entre si. Abaixo, confira os principais tipos de investimentos de renda variável.",
        link: "https://www.infomoney.com.br/guias/renda-variavel/",
        tags: ""
    },
    {
        titulo: "Ações",
        descricao: "Se uma empresa fosse um bolo, as ações das empresas de capital aberto seriam fatias que podem ser compradas por qualquer pessoa interessada em ter um pedaço do doce. Ou seja, comprar uma ação significa virar dono daquele pedacinho da empresa. Ao se tornar sócio, o investidor tem alguns direitos – como receber parte do lucro, quando ele ocorre (dividendos), por exemplo. Só é possível comprar ações na Bolsa de Valores, por meio de alguma corretora de valores. É possível ganhar dinheiro com ações de várias formas – a mais comum é comprar os papéis por um preço e vender por um valor mais alto. Assim como qualquer tipo de investimento de renda variável, não é possível prever a valorização das ações e nem se de fato ela pode ocorrer.",
        link: "https://blog.nubank.com.br/o-que-sao-acoes/",
        tags: ""
    },
    {
        titulo: "BDRs",
        descricao: "BDR é a sigla para Brazilian Depositary Receipt, um certificado de depósito emitido e negociado no Brasil que representa ações de empresas listadas em Bolsas de outros países – como na NASDAQ e a NYSE, dos Estados Unidos.Em outras palavras, esses ativos financeiros BDRs são recibos de ações de empresas estrangeiras negociados na Bolsa aqui do Brasil. Ou seja: é uma forma mais simples de brasileiros investirem em companhias negociadas em Bolsas internacionais, sem a necessidade de abrir conta em corretora estrangeira nem de enfrentar a complexidade de investimentos internacionais. Mas atenção: os BDRs não são investimentos no exterior. Eles apenas acompanham a variação das empresas estrangeiras. É por isso que, ao investir em um BDR, você não vai se tornar sócio da empresa estrangeira, como acontece quando compra uma ação aqui no Brasil. Isso acontece porque os BDRs representam ações de empresas, mas não são as empresas em si.", 
        link: "https://blog.nubank.com.br/bdr-o-que-e/",
        tags: ""
    },
    {
        titulo: "Fundos de Investimento",
        descricao: "Os fundos de investimentos são uma modalidade de aplicação financeira coletiva – isto é, diversas pessoas podem investir em um mesmo fundo. Todos os valores aplicados são administrados por uma gestora e investidos em outros produtos, que variam conforme o tipo do fundo e sua proposta.Esse fundo é composto por diversos ativos e é gerido por um especialista. E esse profissional toma conta de todo o patrimônio. Esse patrimônio pode estar na forma de ações, imóveis, títulos públicos, entre outros. Existem diversos tipos de fundos: de renda fixa, de ações, cambial, multimercado e ouro.",
        link: "https://blog.nubank.com.br/fundos-de-investimento-o-que-sao/",
        tags: ""
    },
    {
        titulo: "Fundo Imobiliários",
        descricao: "Os fundos imobiliários ou FIIs, sigla usada no mercado, são fundos populares e são conhecidos como o primeiro investimento de renda variável de um investidor iniciante. Eles funcionam como outros fundos de investimento: reúnem pessoas interessadas em investir e têm gestores responsáveis por controlar e gerenciar onde o dinheiro será aplicado. A diferença aqui é que esses gestores investem apenas em ativos do setor imobiliário, sejam os empreendimentos imobiliários em si ou aplicações financeiras ligadas a esse mercado. Existem vários tipos de fundos imobiliários, como os Fundos de tijolo, Fundos de papel, Fundos de Fundos (FoFs) e os Fundos Híbridos. ",
        link: "https://blog.nubank.com.br/o-que-sao-fundos-imobiliarios/",
        tags: ""
    },
    {
        titulo: "ETFs",
        descricao: "ETF é a sigla em inglês para Exchange Traded Fund, que pode ser traduzida para fundo negociado em bolsa. Basicamente, ETF é um fundo que tem como referência algum índice da bolsa de valores – como o Ibovespa, por exemplo. Portanto, os ETFs nada mais são do que cestas cheias de ações, mas estas cestas copiam o desempenho de um índice. Existem tanto ETFs que seguem índices de ações bem como ETFs de renda fixa.",
        link: "https://blog.nubank.com.br/o-que-e-etf-como-funciona/",
        tags: ""

    }
];
