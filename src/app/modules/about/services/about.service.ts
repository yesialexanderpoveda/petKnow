import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AboutService {


  fundations = [

    {
      name: "dejando huella",
      src: "https://www.fundacionanimaldejandohuella.com/",
      logo: "https://static.wixstatic.com/media/22a254_1b617619b1c247f3870e6c8b299d92cc~mv2.png/v1/fill/w_150,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/corazonlogo2.png",
    },
    {
      name: "Voz animal",
      src: "https://www.fundacionvozanimal.org/",
      logo: "https://static.wixstatic.com/media/83790b_7eeded368daf458e8bb8bc56b65ea424~mv2.png/v1/fill/w_220,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/83790b_7eeded368daf458e8bb8bc56b65ea424~mv2.png"
    },
    {
      name: "Adopta no compres",
      src: "https://www.adoptanocompres.org/",
      logo: "https://www.adoptanocompres.org/wp-content/uploads/2021/09/New-logo-0-1.png"
    },
    {
      name: "Razas unicas",
      src: "https://fundacionrazasunicas.org/",
      logo: "https://fundacionrazasunicas.org/wp-content/uploads/2017/03/razasunicas-logo-v1.png"
    },
    {
      name: 'Voz gatuna',
      src: "https://www.instagram.com/vozgatuna/",
      logo: "https://pbs.twimg.com/profile_images/698332775259234304/MImC5f-w_400x400.jpg"
    }

  ]

  store = [

    {
      name: 'icono pet',
      src: "https://iconopet.com/",
      logo: "https://iconopet.com/sitio/wp-content/uploads/2015/09/logo2.png"
    },
    {
      name: 'Agrocampo',
      src: "https://www.agrocampo.com.co/",
      logo: "https://www.agrocampo.com.co/pub/static/frontend/agrocampo/default/es_ES/images/logo.png"
    },
    {
      name: 'Mascotas Bichos',
      src: "https://www.mascotasbichos.com/",
      logo: "https://mascotasbichos.vteximg.com.br/arquivos/logo_mascotas-bichos_color.png?v=636603704174500000"
    },
    {
      name: 'Venta de Cachorros',
      src: "https://ventadecachorros.com.co/",
      logo: "https://ventadecachorros.com.co/wp-content/uploads/2020/07/nuevo-logo-png-para-web-1024x906.png"
    },
    {
      name: 'Happy Pets',
      src: "https://www.happypetsco.com/",
      logo: "https://www.happypetsco.com/wp-content/uploads/2021/03/logo-Happy-pets-completo.png"
    },
    {
      name: 'Puppy export',
      src: "https://www.puppyexport.com/",
      logo: "https://www.puppyexport.com/Resources/img-logo-12.png"
    },
    {
      name: 'Chicko Pipo',
      src: "https://tiendachikopipo.com/",
      logo: "https://tiendachikopipo.com/wp-content/uploads/2019/06/Logo_ChikoPipo_digital-Leydi-Peq-PNG.png"
    },
    {
      name: 'Am Mascotas',
      src: "https://www.ammascotas.com/",
      logo: "https://www.ammascotas.com/wp-content/uploads/2017/11/am-mascotas-online.png"
    },
    {
      name: 'Ciudad de Mascotas',
      src: "https://www.ciudaddemascotas.com/default/",
      logo: "https://www.ciudaddemascotas.com/pub/media/logo/stores/4/logo_2.png"
    },
    {
      name: 'Wawan',
      src: "https://wawaw.co/tiendavirtual/",
      logo: "https://wawaw.co/wp-content/uploads/2017/02/LogotipoGris.png"
    }
  ]

}