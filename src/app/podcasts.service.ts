import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  public podcasts = [
    {
      picture : 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      id: 1,
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      name: 'podteste1',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
       been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
       remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      favorite:true,
      historic:false,
      episodes: [
        {
          id: 1,
          title: 'Episodio 1: A volta dos que não foram',
          description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
          id: 2,
          title: 'Episodio 2: Aquele que foi sem ter ido',
          description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
        },
        {
          id: 3,
          title: 'Episodio 3: As tranças do rei careca',
          description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
          id: 4,
          title: 'Episodio 4: Os quatro cantos das sala redonda',
          description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
          id: 5,
          title: 'Episodio 5: Meu tio é filho único',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ]
    },
  
    {
      picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      id: 2,
      banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
      name: 'podteste2',
      description: 'podcast blablablabla',
      favorite:false,
      historic:true,
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
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 3,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste3',
    //   description: 'podcast UEhUEhUHEuhe',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 4,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste4',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 5,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste5',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 6,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste6',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 7,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste7',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 8,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste8',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 9,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste9',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 10,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste10',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 11,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste11',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 12,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste12',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 13,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste13',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 14,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste14',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 15,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste14',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 16,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste11213',
    //   description: 'podcast lalalalalalalalaa',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 17,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste2',
    //   description: 'podcast blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 18,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste3',
    //   description: 'podcast UEhUEhUHEuhe',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 19,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste4',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 20,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste5',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 21,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste6',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 22,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste7',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 23,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste8',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 24,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste9',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 25,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste10',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 26,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste11',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 27,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste12',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 28,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste13',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 29,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste14',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 30,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste14',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 31,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste1',
    //   description: 'podcast lalalalalalalalaa',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 32,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste2',
    //   description: 'podcast blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 33,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste3',
    //   description: 'podcast UEhUEhUHEuhe',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 34,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste4',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 35,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste5',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 36,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste6',
    //   description: 'euheuee blablablabla',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 37,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste7',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 38,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste8',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 39,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste9',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 40,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste10',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 41,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste11',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 42,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste12',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 43,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste13',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 44,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste14',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
    // {
    //   picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   id: 45,
    //   banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
    //   name: 'podteste14',
    //   description: 'asdsasad geblablablabegela',
    //   episodes: [
    //     {
    //       id: 1,
    //       title: 'Episodio 1: A volta dos que não foram',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Episodio 2: Aquele que foi sem ter ido',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Episodio 3: As tranças do rei careca',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 4,
    //       title: 'Episodio 4: Os quatro cantos das sala redonda',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     },
    //     {
    //       id: 5,
    //       title: 'Episodio 5: Meu tio é filho único',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    //     }
    //   ]
    // },
  ]

  // public podCastsLater = [

  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 1,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste11000',
  //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
  //      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  //      scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
  //      remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  //      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 2,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste2149',
  //     description: 'podcast blablablabla',
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  // ]

  // public podcastsFavorite = [
  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 0,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste11111111',
  //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
  //      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  //      scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
  //      remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  //      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 1,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste1213132',
  //     description: 'podcast blablablabla',
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  // ];
  
  // public podCastsHistory = [

  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 1,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste1091',
  //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
  //      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  //      scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
  //      remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  //      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 2,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste193812',
  //     description: 'podcast blablablabla',
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  // ]

  // public podCastsFollow = [

  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 1,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podteste11919dhu1h',
  //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
  //      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
  //      scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,
  //      remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  //      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  //   {
  //     picture: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     id: 2,
  //     banner: 'https://demos.creative-tim.com/material-dashboard-pro-angular2/assets/img/angular2-logo-white.png',
  //     name: 'podtest1uide2',
  //     description: 'podcast blablablabla',
  //     favorite: '1',
  //     follow: '1',
  //     episodes: [
  //       {
  //         id: 1,
  //         title: 'Episodio 1: A volta dos que não foram',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Episodio 2: Aquele que foi sem ter ido',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 3,
  //         title: 'Episodio 3: As tranças do rei careca',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Episodio 4: Os quatro cantos das sala redonda',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Episodio 5: Meu tio é filho único',
  //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //       }
  //     ]
  //   },
  // ]


}
