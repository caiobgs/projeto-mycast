import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  config = {
    urlitunes: 'https://itunes.apple.com',
    urllocal:'http://localhost:8080'
  };

  constructor(private http: HttpClient) { }

    getPodCast(nome) {
      return this.http.jsonp(`${this.config.urlitunes}/search?term=${nome}&entity=podcast&country=BR`, 'callback');
    }

    getPodCastFollow(){
      return this.http.get(`${this.config.urllocal}/podcast/follow`);
    }

    getPodCastLater(){
      return this.http.get(`${this.config.urllocal}/podcast/later`);
    }

    getPodCastFavorite(){
      return this.http.get(`${this.config.urllocal}/podcast/favorite`);
    }

  // tslint:disable-next-line:member-ordering
  public podcasts = [
    {
      id: 1,
      name: 'ZOFE',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
       been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
       remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      picture: 'https://d33wubrfki0l68.cloudfront.net/94cd36b1652f20becc415f5ba31c4cf2d92f7186/5af99/static/zofe-logo-c40d68c2f4a57b4d55c5cd9ce9048227.png',
      banner: 'https://d33wubrfki0l68.cloudfront.net/94cd36b1652f20becc415f5ba31c4cf2d92f7186/5af99/static/zofe-logo-c40d68c2f4a57b4d55c5cd9ce9048227.png',
      favorite: true,
      history: false,
      later: true,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: ` It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },

    {

      id: 2,
      name: 'DevNaEstrada',
      description: 'podcast blablablabla',
      picture: 'https://devnaestrada.com.br/assets/img/logo-dne.svg',
      banner: 'https://devnaestrada.com.br/assets/img/logo-dne.svg',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 3,
      name: 'BlueSoft',
      description: 'podcast UEhUEhUHEuhe',
      picture: 'https://labs.bluesoft.com.br/wp-content/uploads/2014/08/LogoTopo.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 4,
      name: 'Grok Podcast',
      description: 'euheuee blablablabla',
      picture: 'https://www.grokpodcast.com.br/images/logo.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 5,
      name: 'FalaFreela',
      description: 'euheuee blablablabla',
      picture: 'https://carreirasolo.org/wp-content/uploads/2016/03/loco_cs_v6.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      favorite: false,
      history: true,
      later: true,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 6,
      name: 'PODebug',
      description: 'euheuee blablablabla',
      picture: 'http://lvcabral.com/podebug/wp-content/uploads/sites/4/2015/09/header-podebug-700px2.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      favorite: false,
      histfavorite: false,
      history: true,
      later: true,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 7,
      name: '99 Vidas',
      description: 'asdsasad geblablablabegela',
      picture: 'https://cdn1.player.fm/images/5654/series/mJBAAzlOJ1jJEbMX/256.jpg',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      favorite: false,
      history: true,
      later: true,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 8,
      name: 'Black Banner Magic',
      description: 'asdsasad geblablablabegela',
      picture: 'https://cdn1.player.fm/images/22328132/series/8ayaJOT7xv5d2RlF/256.jpg',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 9,
      name: 'ALÔ TÉNICA',
      description: 'asdsasad geblablablabegela',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast17-Alo-Tenica_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast17-Alo-Tenica_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 10,
      name: 'BALLASCAST',
      description: 'Um podcast dedicado para os que desejam produzir podcasts, com dicas práticas, técnicas e reflexões para todos que estão iniciando ou pensando em se tornar um podcaster. É um tema bem específico, mas trata-se de um programa com excelente agenda de conteúdo e liderança do sempre excelente Leo Lopes. Os temas atendem interesse de podcasters iniciantes e profissionais.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts1_Ballascast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts1_Ballascast_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 11,
      name: 'BEERCAST',
      description: 'O melhor podcast do País sobre cultura cervejeira, artesanal e industrial, levando uma conversa bem humorada e instrutiva sobre cerveja em diversas dimensões: cultural, comercial, criativa, social e econômica. A turma faz degustação ao vivo de cervejas, contando com participação de convidados. Eles trazem informações históricas, conversam sobre a produção e a evolução da marca, bem como tentam traduzir as percepções sensoriais que cada um sente na cerveja analisada. Sob comando do espirituoso Anselmo Mendo e dos Beercasters Gustavo Passi, Renato Martins e Ricardo Shimoishi.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast16-Beercast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast16-Beercast_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 12,
      name: 'BRAINCAST',
      description: 'Podcast que discute temas variados, mas quase sempre rondando o universo da cultura digital, entretenimento e tecnologia. Inevitavelmente, as conversas escapam para falar de temas ligados a criatividade, inovação, marketing e comunicação. Comandado pelo seu criador, Carlos Merigo, o podcast sempre provoca discussões divertidas e atuais sobre o mundo dos negócios, que é um tema que sempre me interessa.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts15-Braincast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts15-Braincast_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 13,
      name: 'CAFÉ BRASIL',
      description: 'Um super podcast produzido por Luciano Pires, que entorta a cabeça das pessoas, tratando de temas como comportamento, cidadania, política, cultura e educação. É muitas vezes polêmico, provocando reflexões e incômodo. Os episódios são ilustrados sempre com música, sendo muitas delas desconhecidas e inusitadas. Sem dúvida, um dos melhores podcasts do Brasil. É um presente para qualquer brasileiro que busca entender melhor nossas raízes, de onde viemos e para onde vamos, como País e cidadãos.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast14-Cafe-Brasil_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast14-Cafe-Brasil_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {

      id: 14,
      name: 'CAIXAS DE HISTÓRIAS',
      description: 'Um delicioso podcast que oferece uma experiência diferenciada na apreciação dos livros. Paulo Carvalho, líder do podcast literário, sempre narra um ou mais trechos da obra, comentando e conversando com os convidados. Esse é um podcast que apresenta um olhar diferente sobre a literatura, sempre trazendo novas obras e “criando” novos leitores.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast13-Caixa-de-Historias_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast13-Caixa-de-Historias_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 15,
      name: 'ESCRIBA CAFÉ',
      description: 'Passam os anos e o Escriba Café continua sendo mais que um podcast: é uma experiência. São histórias super bem contadas sobre o mundo, história, mistérios da humanidade e curiosidades. Sob criação e produção de Christian Gurtner, esse podcast tem uma sonoplastia imbatível e criativa, com dramaticidade, apresentação impecável e fruto de uma pesquisa detalhada do tema abordado. É um primor de podcast.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts12-Escriba-Cafe_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts12-Escriba-Cafe_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 16,
      name: 'FRONTEIRAS DA CIÊNCIA',
      description: 'Um podcast que aborda temas relacionados à ciência através de uma conversa descontraída entre acadêmicos, estudantes e profissionais. Às vezes, a discussão é profunda, mas a conversa e a pluralidade do papo fazem você fazer parte da roda. Este é um podcast maravilhoso que não é muito divulgado e pouco conhecido por todos. A qualidade de produção não é especial, mas o conteúdo é super rico e esclarecedor. Esse programa é produzido pelos professores e alunos da UFRGS.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast11-Fronteiras-da-Ci%C3%AAncia_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast11-Fronteiras-da-Ci%C3%AAncia_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 17,
      name: 'FRONTEIRAS INVISÍVEIS DO FUTEBOL',
      description: 'Um podcast que fala de futebol, mundial e brasileiro, orbitando a conversa ao redor da cultura, história, política e geopolítica. Ou seria o contrário? O futebol é contado de dentro e, principalmente, fora das quatro linhas. Sob o comando de Matias Pinto, acompanhado de Filipe Figueiredo, esse podcast tem um belo trabalho de edição e pesquisa.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast10-Fronteiras-Invisiveis-do-Futebol_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast10-Fronteiras-Invisiveis-do-Futebol_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 18,
      name: 'LIDERCAST',
      description: 'Um podcast sobre liderança e empreendedorismo, de todas as formas, onde Luciano Pires bate um papo com pessoas das mais diversas origens e experiências, sempre de forma leve e lúdica, explorando o assunto de uma forma nada tradicional. Experimente ouvir alguns episódios e você vai se surpreender. O formato é simples, basicamente uma conversa, mas o conteúdo é o grande diferencial. Atualmente, é o meu podcast favorito.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast9-Lidercast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast9-Lidercast_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 19,
      name: 'MAMILOS',
      description: 'Apresentando-se como “Jornalismo de Peito Aberto” e sob o comando das carismáticas Juliana Wallauer e Cris Bartis, o podcast Mamilos é amado por seus fãs e seguidores. Aqui rola de tudo, sempre no formato de entrevista e debate, desde temas amplos até específicos. É sempre interessante ouvir um novo episódio para encarar uma discussão a respeito de um tema inesperado. A pauta toca temas importantes da sociedade.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts8-Mamilos-C_B9_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts8-Mamilos-C_B9_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 20,
      name: 'NA TRILHA',
      description: 'Podcast focado em esportes e atividades outdoor, ou temas relacionados. Os episódios quase sempre têm convidados externos para conversar sobre experiências, informações técnicas e dicas. Recomendo muito. Esse é um programa que incentiva muito a prática regular de esportes e atividades ao ar livre. Sob o comando de Renan Cirilo Alves, Lucia Conrado e Rafael Pelissari.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast7-Na-Trilha_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast7-Na-Trilha_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 21,
      name: 'NERDCAST',
      description: 'Esse é o podcast de maior audiência do País, amado por seus fãs, e seu enorme sucesso não é por acaso. O Nerdcast é a versão podcast do Jovem Nerd. Recheado de bom humor de ponta a ponta, porém com conteúdo de valor, rola de tudo nos episódios comandados por Alexandre Ottoni e Azaghal. Tem tecnologia, comportamento, cultura, cinema, história, ciência, cotidiano e uma lista sem fim de assuntos que eles tocam. Esse é daqueles podcasts considerados indispensáveis.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast6-Nerdcast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast6-Nerdcast_575-300x157.jpg',
      favorite: true,
      history: false,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 22,
      name: 'RADIOFOBIA CLASSICS',
      description: 'Delicioso programa mensal apresentado por Leo Lopes, trazendo a biografia e alguns dos maiores sucessos dos grandes nomes da música mundial. É um show de história e música. É muito bem produzido, com conteúdo que surpreende, pois apresenta um lado do artista que você não conhece. É sentar, colocar o fone de ouvido e curtir muito!',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts5_Radiofobia_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts5_Radiofobia_575-300x157.jpg',
      favorite: true,
      history: true,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 23,
      name: 'RAPADURACAST',
      description: 'Sob o comando de Jurandir Filho, o Rapaduracast discute o universo do cinema, cobrindo os principais lançamentos, as grandes polêmicas, os grandes clássicos, com homenagens aos grandes nomes da indústria cinematográfica e tudo que gira ao redor da telinha. Os participantes têm opiniões próprias, estudam profundamente o tema discutido e são pessoas apaixonadas pelo mundo do cinema. São papos muito agradáveis.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast4-Rapaduracast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast4-Rapaduracast_575-300x157.jpg',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 24,
      name: 'TEMACAST',
      description: 'Um podcast com conteúdo riquíssimo, profundo e didático sobre história, biografias, cultura geral e comportamento. Cada episódio é uma aula detalhada sob comando de Francisco Seixas e convidados. Particularmente, gosto muito dos episódios abordando momentos e fatos da história do Brasil.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast3_Temacast_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcast3_Temacast_575-300x157.jpg',
      favorite: true,
      history: true,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 25,
      name: 'XADREZ VERBAL',
      description: 'aUm podcast dedicado à política, especialmente internacional, que descomplica o assunto de forma didática e lúdica, ligando todos os pontos e fazendo você entender coisas que pareciam impossíveis de acompanhar. Liderado por Filipe Figueiredo, acompanhado de Matias Pinto, o Xadrez Verbal procura discutir sobre atualidades na política, mas avança também nos temas de cultura, história e sociedade em geral. Esse é um podcast muito inovador, não somente pelo conteúdo, mas também pela forma e pela ousadia de entrar num tema para lá de difícil.',
      picture: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts2_Xadrez-Verbal_575-300x157.jpg',
      banner: 'https://www.meioemensagem.com.br/wp-content/uploads/2018/10/Podcasts2_Xadrez-Verbal_575-300x157.jpg',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 26,
      name: 'Imagina Juntas',
      description: 'Carol "Tchulim" Rocha, Jéssica Grecco e Gus Lanzetta apresentam um podcast com discussões sobre cultura pop, trabalho, dinheiro, relacionamentos, entre outros assuntos. No ar desde novembro de 2017, tem mais de 50 episódios.',
      picture: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/20/12/asset/buzzfeed-prod-web-04/sub-buzz-9271-1545328709-1.png?downsize=800:*&output-format=auto&output-quality=auto',
      banner: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/20/12/asset/buzzfeed-prod-web-04/sub-buzz-9271-1545328709-1.png?downsize=800:*&output-format=auto&output-quality=auto',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 27,
      name: 'Pretas na Rede',
      description: 'Neste podcast as apresentadoras Gabriela Santos, Larissa Barboza e Liliane Ribeiro falam sobre a vida, viagens, maturidade, sororidade, Lauryn Hill, Beyoncé e tudo o mais. Está no ar desde 2018. ',
      picture: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/20/14/asset/buzzfeed-prod-web-04/sub-buzz-16651-1545334717-1.png?downsize=800:*&output-format=auto&output-quality=auto',
      banner: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/20/14/asset/buzzfeed-prod-web-04/sub-buzz-16651-1545334717-1.png?downsize=800:*&output-format=auto&output-quality=auto',
      favorite: true,
      history: true,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 28,
      name: 'Esquizofrenóias',
      description: 'O podcast sobre desgraçamentos mentais e saúde mental da apresentadora Amanda Ramalho. Em sua primeira temporada, ela recebeu vários convidados, como Ronald Rios, Daiana Garbin, Luciana Vendramini e Alexandre Nickel.',
      picture: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/20/15/asset/buzzfeed-prod-web-05/sub-buzz-20960-1545338659-8.png?downsize=800:*&output-format=auto&output-quality=auto',
      banner: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/20/15/asset/buzzfeed-prod-web-05/sub-buzz-20960-1545338659-8.png?downsize=800:*&output-format=auto&output-quality=auto',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 29,
      name: 'Gordacast',
      description: 'Um podcast apresentado pela jornalista Thamiris Rezende com reflexões e discussões envolvendo o universo de pessoas gordas e/ou fora dos rótulos impostos pela sociedade.',
      picture: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/21/12/asset/buzzfeed-prod-web-05/sub-buzz-21113-1545411905-1.png?crop=525:523;15,15&downsize=800:*&output-format=auto&output-quality=auto',
      banner: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/21/12/asset/buzzfeed-prod-web-05/sub-buzz-21113-1545411905-1.png?crop=525:523;15,15&downsize=800:*&output-format=auto&output-quality=auto',
      favorite: false,
      history: true,
      later: true,
      follow: false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
    {
      id: 30,
      name: 'Mulheres que Escrevem',
      description: 'Um programa semanal de entrevistas com autoras, indicações e debates sobre literatura feita por mulheres. No ar desde abril de 2018, tem mais de vinte edições apresentadas por Seane Melo e Taís Bravo.',
      picture: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/21/10/asset/buzzfeed-prod-web-06/sub-buzz-14052-1545407020-1.jpg?downsize=800:*&output-format=auto&output-quality=auto',
      banner: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/21/10/asset/buzzfeed-prod-web-06/sub-buzz-14052-1545407020-1.jpg?downsize=800:*&output-format=auto&output-quality=auto',
      favorite: true,
      history: true,
      later: false,
      follow: true,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    }
  ];


  private fontShowPodcast = new BehaviorSubject(this.podcasts);
  private fontShowPodcastEpisode = new BehaviorSubject(this.podcasts);

  showPodcastCurrent = this.fontShowPodcast.asObservable();
  showPodcastEpisodeCurrent = this.fontShowPodcastEpisode.asObservable();

  changeShowPodcast(podcasts) {
    this.fontShowPodcast.next(podcasts);
  }

  changeShowEpisode(episode) {
    this.fontShowPodcastEpisode.next(episode);
  }
}
