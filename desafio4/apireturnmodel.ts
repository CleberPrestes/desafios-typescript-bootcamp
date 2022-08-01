interface ClienteHttp{
    status?: number,
    statusText?: string
  }
  
  interface AutenticacaoDeLogin extends ClienteHttp{
    success: boolean,
    expires_at: string,
    request_token: string
  }
  
  interface SessaoGet extends ClienteHttp{
    success: boolean,
    session_id: string,
    status_message?: string,
    status_code?: number
  }
  
  type BodyTypes = ConteudoLista | ConteudoListaAdicionarFilme | ConteudoLogin | ConteudoDaSessao
  
  interface RetornoGet extends ClienteHttp{
      url : string,
      method: 'GET' | 'POST' | 'DELETE' | 'PUT',
      body?: BodyInit | null | BodyTypes
  }
  
  interface TokenGet extends ClienteHttp{
    success: boolean,
    expires_at: string,
    request_token: string
  }
  
  interface ConteudoLogin{
    username: string,
    password: string,
    request_token: string
  }
  
  interface ConteudoLista{
    name: string,
    description: string,
    language: "pt-br"
  }
  
  interface ConteudoListaAdicionarFilme{
    media_id: string
  }
  
  interface ConteudoDaSessao{
    request_token: string
  }
  
  interface ResultadosDeFilmes extends ClienteHttp{
    adult: boolean,
    backdrop_path: string,
    genre_ids: string[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }
  
  interface RespostaDeFilme extends ClienteHttp{
    page: number,
    results: ResultadosDeFilmes[],
    total_pages: number,
    total_results: number
  }
  
  interface ListaCriada extends ClienteHttp{
    status_message: string,
    success: boolean,
    status_code: number,
    list_id: string
  }
  
  interface AdicionarFilmeParaLista extends ClienteHttp{
    success: boolean,
    status_code: number,
    status_message: string
  }
  
  interface ListaGet extends ClienteHttp{
    create_by: string,
    description: string,
    favorite_count: number,
    id: string,
    items: ResultadosDeFilmes[],
    item_count: number,
    iso_639_1: string,
    name: string,
    poster_path: string | null
  }