export const AccountInitOptions = [
  {
    id: 0,
    title: 'account.init.facilities.title',
    disabled: false,
    value: 'facilities',
    icon: '🏛',
    options: [
      {
        id: 0,
        value: 'facilities.gestao_compras_imoveis',
        title: 'account.init.facilities.gestao_compras_imoveis',
      },
      {
        id: 1,
        value: 'facilities.gestao_investimentos',
        title: 'account.init.facilities.gestao_investimentos',
      },
      {
        id: 2,
        value: 'facilities.vendas_imoveis',
        title: 'account.init.facilities.gestao_investimentos',
      },
      {
        id: 3,
        value: 'facilities.gerenciamento_fornecedores',
        title: 'account.init.facilities.vendas_imoveis',
      },
      {
        id: 4,
        value: 'facilities.gerenciamento_facilities',
        title: 'account.init.facilities.gerenciamento_fornecedores',
      },
      {
        id: 5,
        value: 'facilities.negociacao_contratacao_fornecedores',
        title: 'account.init.facilities.gerenciamento_facilities',
      },
      {
        id: 6,
        value: 'facilities.solicitacao_facilities',
        title: 'account.init.facilities.negociacao_contratacao_fornecedores',
      },
      {
        id: 7,
        insert: true,
        value: 'others',
        title: 'account.init.others',
      },
    ],
  },
  {
    id: 1,
    title: 'account.init.product_development.title',
    disabled: false,
    value: 'product_development',
    icon: '🗂️ ',
    options: [
      {
        id: 0,
        value: 'product_development.roadmap',
        title: 'account.init.product_development.roadmap',
      },
      {
        id: 1,
        value: 'product_development.solicitacoes_dev',
        title: 'account.init.product_development.solicitacoes_dev',
      },
      {
        id: 2,
        value: 'product_development.acompanhamento_bug',
        title: 'account.init.product_development.acompanhamento_bug',
      },
      {
        id: 3,
        value: 'product_development.gestao_colaborativa_ideias',
        title: 'account.init.product_development.gestao_colaborativa_ideias',
      },
      {
        id: 4,
        value: 'product_development.design_produto',
        title: 'account.init.product_development.design_produto',
      },
      {
        id: 5,
        value: 'product_development.feedback_produto',
        title: 'account.init.product_development.feedback_produto',
      },
      {
        id: 6,
        insert: true,
        value: 'others',
        title: 'account.init.others',
      },
    ],
  },
  {
    id: 2,
    title: 'account.init.shared_services.title',
    disabled: false,
    value: 'services',
    icon: '🤝',
    break: true,
    options: [
      {
        id: 0,
        value: 'shared_services.cs_support',
        title: 'account.init.shared_services.cs_support',
      },
      {
        id: 1,
        value: 'shared_services.finance',
        title: 'account.init.shared_services.finance',
      },
      {
        id: 2,
        value: 'shared_services.rh',
        title: 'account.init.shared_services.rh',
      },
      {
        id: 3,
        value: 'shared_services.ti',
        title: 'account.init.shared_services.ti',
      },
      {
        id: 4,
        value: 'shared_services.buy',
        title: 'account.init.shared_services.buy',
      },
      {
        id: 5,
        value: 'shared_services.shared',
        title: 'account.init.shared_services.shared',
      },
      { id: 6, insert: true, value: 'others', title: 'account.init.others' },
    ],
  },
  {
    id: 3,
    title: 'account.init.sells.title',
    disabled: false,
    value: 'sells',
    icon: '📢',
    options: [
      {
        id: 0,
        value: 'sells.qualificacao_leads',
        title: 'account.init.sells.qualificacao_leads',
      },
      {
        id: 1,
        value: 'sells.gestao_pedidos',
        title: 'account.init.sells.gestao_pedidos',
      },
      { id: 2, value: 'sells.funil', title: 'account.init.sells.funil' },
      { id: 3, value: 'sells.cotacao', title: 'account.init.sells.cotacao' },
      {
        id: 4,
        value: 'sells.solicitacao',
        title: 'account.init.sells.solicitacao',
      },
      { id: 5, insert: true, value: 'others', title: 'account.init.others' },
    ],
  },
  {
    id: 4,
    title: 'account.init.rh.title',
    disabled: false,
    value: 'rh',
    icon: '👩‍💼',
    options: [
      {
        id: 0,
        value: 'rh.recrutamento',
        title: 'account.init.rh.recrutamento',
      },
      { id: 1, value: 'rh.onboarding', title: 'account.init.rh.onboarding' },
      { id: 2, value: 'rh.solicitacao', title: 'account.init.rh.solicitacao' },
      {
        id: 3,
        value: 'rh.solicitacao_abertura',
        title: 'account.init.rh.solicitacao_abertura',
      },
      { id: 4, value: 'rh.avaliacao', title: 'account.init.rh.avaliacao' },
      { id: 5, value: 'rh.admisao', title: 'account.init.rh.admisao' },
      { id: 6, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 5,
    title: 'account.init.financeiro.title',
    disabled: false,
    value: 'finance',
    icon: '⌨️',
    options: [
      {
        id: 0,
        value: 'financeiro.processo',
        title: 'account.init.financeiro.processo',
      },
      { id: 1, value: 'financeiro.cp', title: 'account.init.financeiro.cp' },
      { id: 2, value: 'financeiro.cr', title: 'account.init.financeiro.cr' },
      {
        id: 3,
        value: 'financeiro.segunda',
        title: 'account.init.financeiro.segunda',
      },
      {
        id: 4,
        value: 'financeiro.status',
        title: 'account.init.financeiro.status',
      },
      {
        id: 5,
        value: 'financeiro.parcelas',
        title: 'account.init.financeiro.parcelas',
      },
      {
        id: 6,
        value: 'financeiro.extrato',
        title: 'account.init.financeiro.extrato',
      },
      { id: 7, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 6,
    title: 'account.init.cs.title',
    disabled: false,
    value: 'cs_suport',
    icon: '📞',
    options: [
      {
        id: 0,
        value: 'cs.gerenciamento',
        title: 'account.init.cs.gerenciamento',
      },
      { id: 1, value: 'cs.feedback', title: 'account.init.cs.feedback' },
      { id: 2, value: 'cs.co', title: 'account.init.cs.co' },
      { id: 3, value: 'cs.cs', title: 'account.init.cs.cs' },
      { id: 4, value: 'cs.sc', title: 'account.init.cs.sc' },
      { id: 5, value: 'cs.parcelas', title: 'account.init.cs.parcelas' },
      { id: 6, value: 'cs.solicitacao', title: 'account.init.cs.solicitacao' },
      { id: 7, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 7,
    title: 'account.init.juridico.title',
    disabled: false,
    value: 'juridic',
    icon: '⚖️',
    options: [
      {
        id: 0,
        value: 'juridico.analise',
        title: 'account.init.juridico.analise',
      },
      {
        id: 1,
        value: 'juridico.redacao',
        title: 'account.init.juridico.redacao',
      },
      {
        id: 2,
        value: 'juridico.criacao',
        title: 'account.init.juridico.criacao',
      },
      {
        id: 3,
        value: 'juridico.solicitacao',
        title: 'account.init.juridico.solicitacao',
      },
      { id: 4, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 8,
    title: 'account.init.supply.title',
    disabled: false,
    value: 'supply_chain',
    icon: '✈️',
    options: [
      {
        id: 0,
        value: 'supply.distribuicao',
        title: 'account.init.supply.distribuicao',
      },
      {
        id: 1,
        value: 'supply.expedicao',
        title: 'account.init.supply.expedicao',
      },
      {
        id: 2,
        value: 'supply.gestao_frota',
        title: 'account.init.supply.gestao_frota',
      },
      {
        id: 3,
        value: 'supply.gestao_frete',
        title: 'account.init.supply.gestao_frete',
      },
      {
        id: 4,
        value: 'supply.importacao',
        title: 'account.init.supply.importacao',
      },
      {
        id: 5,
        value: 'supply.planejamento',
        title: 'account.init.supply.planejamento',
      },
      {
        id: 6,
        value: 'supply.atendimento',
        title: 'account.init.supply.atendimento',
      },
      {
        id: 7,
        value: 'supply.solicitacao',
        title: 'account.init.supply.solicitacao',
      },
      { id: 8, insert: true, value: 'others', title: 'account.init.others' },
    ],
  },
  {
    id: 9,
    title: 'account.init.negocios.title',
    disabled: false,
    value: 'operations',
    icon: '🚀',
    options: [
      {
        id: 0,
        value: 'negocios.ideias',
        title: 'account.init.negocios.ideias',
      },
      {
        id: 1,
        value: 'negocios.crescimento',
        title: 'account.init.negocios.crescimento',
      },
      {
        id: 2,
        value: 'negocios.equipe',
        title: 'account.init.negocios.equipe',
      },
      {
        id: 3,
        value: 'negocios.operacoes',
        title: 'account.init.negocios.operacoes',
      },
      { id: 4, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 10,
    title: 'account.init.marketing.title',
    disabled: false,
    value: 'marketing',
    icon: '📜',
    options: [
      {
        id: 0,
        value: 'marketing.campanha',
        title: 'account.init.marketing.campanha',
      },
      {
        id: 1,
        value: 'marketing.ideias',
        title: 'account.init.marketing.ideias',
      },
      {
        id: 2,
        value: 'marketing.conteudo',
        title: 'account.init.marketing.conteudo',
      },
      {
        id: 3,
        value: 'marketing.evento',
        title: 'account.init.marketing.evento',
      },
      {
        id: 4,
        value: 'marketing.crescimento',
        title: 'account.init.marketing.crescimento',
      },
      {
        id: 5,
        value: 'marketing.solicitacao',
        title: 'account.init.marketing.solicitacao',
      },
      {
        id: 6,
        value: 'marketing.pesquisas',
        title: 'account.init.marketing.pesquisas',
      },
      { id: 7, value: 'marketing.sem', title: 'account.init.marketing.sem' },
      { id: 8, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 11,
    title: 'account.init.ti.title',
    disabled: false,
    value: 'ti',
    icon: '💻',
    options: [
      { id: 0, value: 'ti.acesso', title: 'account.init.ti.acesso' },
      { id: 1, value: 'ti.ativos', title: 'account.init.ti.ativos' },
      { id: 2, value: 'ti.suporte', title: 'account.init.ti.suporte' },
      { id: 3, value: 'ti.onboarding', title: 'account.init.ti.onboarding' },
      { id: 4, value: 'ti.problemas', title: 'account.init.ti.problemas' },
      {
        id: 5,
        value: 'ti.solicitacoes',
        title: 'account.init.ti.solicitacoes',
      },
      { id: 6, value: 'ti.incidentes', title: 'account.init.ti.incidentes' },
      { id: 7, title: 'account.init.others', insert: true, value: 'others' },
    ],
  },
  {
    id: 12,
    title: 'account.init.others',
    disabled: false,
    value: 'others',
    insert: true,
    icon: '',
    options: [],
  },
];
