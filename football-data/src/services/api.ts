import axios from 'axios';

async function getListTournament() {
    try {
      const { data, status } = await axios.get<Root>(
        'https://api.api-futebol.com.br/v1/campeonatos',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer test_6816e9c908fd060bcd234197c8be5d'
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
}

export interface Root {
    campeonato_id: number
    nome: string
    slug: string
    nome_popular: string
    edicao_atual: EdicaoAtual
    fase_atual: FaseAtual
    rodada_atual: any
    status: string
    tipo: string
    logo: string
    regiao: string
    _link: string
}
  
export interface EdicaoAtual {
    edicao_id: number
    temporada: string
    nome: string
    nome_popular: string
    slug: string
}
  
export interface FaseAtual {
    fase_id: number
    nome: string
    slug: string
    tipo: string
    _link: string
}

export default getListTournament;