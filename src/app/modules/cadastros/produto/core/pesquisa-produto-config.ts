import { PesquisaConfig } from "src/app/modules/pesquisa/models/pesquisa-config";

export const PESQUISA_PRODUTO_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Nome',
            nome: 'nome'
        },
        {
            label: 'Marca',
            nome: 'marca'
        },
        {
          label: 'Preço',
          nome: 'preco'
        },
        {
          label: 'Imagem',
          nome: 'imagem'
        },
        {
          label: 'Código de Barras',
          nome: 'codigoBarras'
        },
    ],
    pathApi: 'produto'
};
