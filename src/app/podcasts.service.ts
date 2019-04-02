import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

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
      name: 'podteste9',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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

      id: 10,
      name: 'podteste10',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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

      id: 11,
      name: 'podteste11',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 12,
      name: 'podteste12',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 13,
      name: 'podteste13',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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

      id: 14,
      name: 'podteste14',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 15,
      name: 'podteste14',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 16,
      name: 'podteste11213',
      description: 'podcast lalalalalalalalaa',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 17,
      name: 'podteste2',
      description: 'podcast blablablabla',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 18,
      name: 'podteste3',
      description: 'podcast UEhUEhUHEuhe',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 19,
      name: 'podteste4',
      description: 'euheuee blablablabla',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 20,
      name: 'podteste5',
      description: 'euheuee blablablabla',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 21,
      name: 'podteste6',
      description: 'euheuee blablablabla',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 22,
      name: 'podteste7',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      name: 'podteste8',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 24,
      name: 'podteste9',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      name: 'podteste10',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 26,
      name: 'podteste11',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 27,
      name: 'podteste12',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      name: 'podteste13',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 29,
      name: 'podteste14',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
      id: 30,
      name: 'podteste14',
      description: 'asdsasad geblablablabegela',
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
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
}
