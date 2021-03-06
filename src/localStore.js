export default {
    authenticated: false,
    verified: false,
    search:'',
    username: "",
    email: "",
    drawer: false,
    cartCounter: 0,
    photo1: null,
    photo: null,
    imageData: null,
    firstname: "",
    lastname: "",
    adresa: "",
    newPassword: "",
    oldPassword: "",
    kupovina: [],
    show1: false,
    show2: false,
    show3: false,
    
    rules: [{
    velicina: value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    required: value => !!value || 'Nužno je unijeti.',
    password: value => {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      console.log("Usao je u rules");
      return (
        pattern.test(value) || 
        "Minimalno 8 znakova, 1 veliko slovo, 1 broj i 1 poseban znak"
      );
    },
  }],

  storeItems: [
    {
      id: 37, 
      ime: "Lonac", 
      cijena: 239.90, 
      opis: "Izrađen od visokokvalitetnih materijala, s česticama kamena i bakra. Energetski učinkovit lonac otporan je na ogrebotine i s neprianjajućim svojstvima. Pogodan je za korištenje na svim vrstama štednjaka (uključujući indukcijski) i u pećnici. Jednostavan za održavanje, lonac je periv u perilici.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://topshophr.azureedge.net/media/catalog/product/cache/2/small_image/210x157/9df78eab33525d08d6e5fb8d27136e95/d/l/dl_stone_legend_copperlux_pot_24cm.jpg"
    },
    {
      id: 38, 
      ime: "Set noževa", 
      cijena: 149.90, 
      opis: "Kuhinjski noževi izrađeni je od nehrđajućeg čelika visoke kvalitete. Njihova prednost je dvosmjerno ručno oštrena oštrica, pod kutom od 15 ° za dugotrajnu oštrinu i izdržljivost. Pogodni su za rezanje velikih komada hrane. Dužina oštrice je 20,5 cm. ", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://i.pinimg.com/originals/9d/86/67/9d866736df552397568a7daf751fefed.jpg"
    },
    {
      id: 39,
      ime: "Posuđe",
      cijena: 149.90, 
      opis: "Set posudica za pohranjivanje hrane od 10 dijelova pomoći će vam da uštedite do 60% prostora za pohranu u kuhinji. Set sadrži 5 različitih veličina posudice sa 100% hermetičkim zatvaranjem. Sigurne su za korištenje u hladnjaku i mikrovalnoj pećnici. Dolaze u veličinama: 250 ml, 350 ml, 540 ml, 800 ml i 1200 ml.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://pbs.twimg.com/media/D0lgCw0X4AEg8TX.jpg"
    },
    {
      id: 40, 
      ime: "Pribor za jelo", 
      cijena: 399.90, 
      opis: "Bezvremensku eleganciju na vašem stolu donijet će set pribora za jelo Gourmet. Izrađen od nehrđajućeg čelika, set je jednostavan za održavanje. Sadrži šest žlica, šest vilica, šest noževa i šest čajnih žličica. ", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://topshophr.azureedge.net/media/catalog/product/cache/2/small_image/210x157/9df78eab33525d08d6e5fb8d27136e95/d/l/dl_gourmet_cutlery_set_1.jpg"
    },
    {
      id: 41, 
      ime: "Ribež", 
      cijena: 69.90, 
      opis: "Dvostruki ribež za brze rezultate omogućuje ribanje u oba smjera. Oštrice od nehrđajućeg čelika. Naribajte korjenasto povrće, tikvice, luk i ostalu hranu po želji. Sa udobnom ručkom. Ribež dimenzija 31 x 7 cm.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://cdn.vitapur.net/media/catalog/product/cache/3/small_image/430x404/9df78eab33525d08d6e5fb8d27136e95/1/9/19389_two_way_ribbon_grater_rosmarino_product_3_web.jpg"
    },
    {
      id: 42, 
      ime: "Set za grill", 
      cijena: 129.90, 
      opis: "Omogućite si jednostavnu i brzu pripremu hrane s roštilja pomoću Seta za gril Astoria. Set sadrži vilicu za roštilj, velike hvataljke i lopaticu za roštilj. Izrađen od visokokvalitetnog nehrđajućeg čelika, set je praktičan za pripremu i posluživanje jela s roštilja.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://topshophr.azureedge.net/media/catalog/product/cache/2/small_image/210x157/9df78eab33525d08d6e5fb8d27136e95/d/l/dl_astoria_grilling_set.jpg"
    },
    {
      id: 43, 
      ime: "Kuhinjska vaga", 
      cijena: 149.90, 
      opis: "Zaboravite vage na baterije i električne kablove. Uz praktičnu kuhinjsku vagu Joy izvažite omiljene sastojke do 5 kg pritiskom na 2 tipke! Kompaktnog i jednostavnog dizajna, vaga sadrži i digitalni ekran s više mjernih jedinica (g, oz, lb i ml za vodu ili mlijeko). Jednostavna za pohranu. Veličina: 25 x 19 x 1.4 cm.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://images-na.ssl-images-amazon.com/images/I/61zNakpa4%2BL._AC_SX522_.jpg"
    },
    {
      id: 44, 
      ime: "Blender", 
      cijena: 599.90, 
      opis: "Sjeckalica je multifunkcionalni pomagač kojeg možete koristiti za razne kulinarske poslove, svaki dan. Odaberite jednostruke ili dvostruke oštrice za sjeckanje u zdjeli zapremine 360 ml. Uz 2 dodatka pripremite različite vrste umaka. Jednostavna je za upotrebu i periva u perilici.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://k.nooncdn.com/t_desktop-pdp-v1/v1551527549/N21175612A_1.jpg"
    },
    {
      id: 45, 
      ime: "Pekač", 
      cijena: 399.90, 
      opis: "Zahvaljujući pekaču Stone Legend Flamenco možete u kratkom vremenu ispeći razna jela. Pekač je otporan na ogrebotine, bez prianjanja i energetski učinkovit. Pogodan je za korištenje na svim vrstama štednjaka (uključujući indukcijski) i u pećnici. Dimenzije pekača su 35x21 cm.", 
      kolicina: "kom", 
      stanje: 0, 
      show: false, 
      pic: "https://www.oven-racks.com/img/black-baking-tray.jpg"
    },
  ],
  groceries: [
    {
      id: 1,
      ime: "Artičoka",
      opis: [{
        kalorije: 47,
        masti: 0.2,
        ugljikohidrati: 11,
        bjelancevine: 3.3,
      }],
      kolicina: "kom",
      cijena: 4.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/articoka-300x300.jpg"
    },
    { 
      id: 2,
      ime: "Batat",
      opis: [{
        kalorije: 85,
        masti: 0.1,
        ugljikohidrati: 20,
        bjelancevine: 1.6,
      }],
      kolicina: "1kg",
      cijena: 9.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/batat7-300x300.jpg",
    },
    {
      id: 3,
      ime: "Blitva",
      opis: [{
        kalorije: 43,
        masti: 0.2,
        ugljikohidrati: 10,
        bjelancevine: 1.6,
      }],
      kolicina: "1kg",
      cijena: 11.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/blitva-lisnata-300x300.jpg",
    },
    {
      id: 4,
      ime: "Brokula",
      opis: [{
        kalorije: 33,
        masti: 0.4,
        ugljikohidrati: 7,
        bjelancevine: 2.8,
      }],
      kolicina: "1kg",
      cijena: 19.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/brokula1-300x300.jpg",
    },
    {
      id: 5,
      ime: "Cikla",
      opis: [{
        kalorije: 19,
        masti: 0.2,
        ugljikohidrati: 3.7,
        bjelancevine: 1.8,          
      }],
      kolicina: "1kg",
      cijena: 8.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/cikla-300x300.jpg",
    },
    {
      id: 6,
      ime: "Cvjetača",
      opis: [{
        kalorije: 24,
        masti: 0.3,
        ugljikohidrati: 5,
        bjelancevine: 1.9,
      }],
      kolicina: "kom",
      cijena: 4.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/cvjetaca1-300x300.jpg",
    },
    {
      id: 7,
      ime: "Češnjak",
      opis: [{
        kalorije: 24,
        masti: 0.3,
        ugljikohidrati: 5,
        bjelancevine: 1.9,
      }],
      kolicina: "1kg",
      cijena: 19.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/luk-cesnjak-300x300.jpg",
    },
    {
      id: 8,
      ime: "Endivija",
      opis: [{
        kalorije: 17,
        masti: 0.2,
        ugljikohidrati: 3.4,
        bjelancevine: 1.3,
      }],
      kolicina: "kom",
      cijena: 8.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/endivija1-300x300.jpg",
    },
    {
      id: 9,
      ime: "Grašak",
      opis: [{
        kalorije: 81,
        masti: 0.4,
        ugljikohidrati: 14,
        bjelancevine: 5,
      }],
      kolicina: "1kg",
      cijena: 16.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/grasak2-300x300.jpg",
    },
    {
      id: 10,
      ime: "Kelj",
      opis: [{
        kalorije: 49,
        masti: 0.9,
        ugljikohidrati: 9,
        bjelancevine: 4.3,
      }],
      kolicina: "kom",
      cijena: 9.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/kelj-300x300.jpg",
    },
    {
      id: 11,
      ime: "Krastavac",
      opis: [{
        kalorije: 10,
        masti: 0.2,
        ugljikohidrati: 2.2,
        bjelancevine: 0.6,
      }],
      kolicina: "1kg",
      cijena: 7.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/krastavac1-300x300.jpg",
    },
    {
      id: 12,
      ime: "Krumpir",
      opis: [{
        kalorije: 77,
        masti: 0.1,
        ugljikohidrati: 17,
        bjelancevine: 2,
      }],
      kolicina: "1kg",
      cijena: 4.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/krumpir26-300x300.jpg",
    },
    {
      id: 13,
      ime: "Kukuruz",
      opis: [{
        kalorije: 64,
        masti: 0.5,
        ugljikohidrati: 15,
        bjelancevine: 1.9,
      }],
      kolicina: "1kg",
      cijena: 2.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/kukuruz-secerac-300x300.jpg",
    },
    {
      id: 14,
      ime: "Kupus",
      opis: [{
        kalorije: 24.6,
        masti: 0.1,
        ugljikohidrati: 6,
        bjelancevine: 1.3,
      }],
      kolicina: "1kg",
      cijena: 5.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/kupus5-300x300.jpg",
    },
    {
      id: 15,
      ime: "Lovor",
      opis: [{
        kalorije: 42,
        masti: 0,
        ugljikohidrati: 0,
        bjelancevine: 0,
      }],
      kolicina: "30g",
      cijena: 8.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/lovor-300x300.jpg",
    },
    {
      id: 16,
      ime: "Luk",
      opis: [{
        kalorije: 39,
        masti: 0.1,
        ugljikohidrati: 9,
        bjelancevine: 1.1,
      }],
      kolicina: "1kg",
      cijena: 8.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/luk7-300x300.jpg",
    },
    {
      id: 17,
      ime: "Matovilac",
      opis: [{
        kalorije: 21,
        masti: 0.4,
        ugljikohidrati: 20,
        bjelancevine: 2,
      }],
      kolicina: "200g",
      cijena: 19.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/matovilac-300x300.jpg",
    },
    {
      id: 18,
      ime: "Mrkva",
      opis: [{
        kalorije: 41,
        masti: 0,
        ugljikohidrati: 10,
        bjelancevine: 1,
      }],
      kolicina: "1kg",
      cijena: 11.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/mrkva7-300x300.jpg",
    },
    {
      id: 19,
      ime: "Paprika",
      opis: [{
        kalorije: 35,
        masti: 0,
        ugljikohidrati: 6,
        bjelancevine: 1,
      }],
      kolicina: "1kg",
      cijena: 13.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/paprika15-300x300.jpg",
    },
    {
      id: 20,
      ime: "Patlidžan",
      opis: [{
        kalorije: 18,
        masti: 0,
        ugljikohidrati: 3,
        bjelancevine: 0,
      }],
      kolicina: "1kg",
      cijena: 16.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/patlidjan-300x300.jpg",
    },
    {
      id: 21,
      ime: "Peršin",
      opis: [{
        kalorije: 41,
        masti: 0.4,
        ugljikohidrati: 9,
        bjelancevine: 4.4,
      }],
      kolicina: "10g",
      cijena: 15.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/persin1-300x300.jpg",
    },
    {
      id: 22,
      ime: "Radič",
      opis: [{
        kalorije: 23,
        masti: 0.25,
        ugljikohidrati: 4.5,
        bjelancevine: 1.4,
      }],
      kolicina: "500g",
      cijena: 11.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/radic3-300x300.jpg",
    },
    {
      id: 23,
      ime: "Rajčica",
      opis: [{
        kalorije: 25,
        masti: 0,
        ugljikohidrati: 29,
        bjelancevine: 1,
      }],
      kolicina: "1kg",
      cijena: 11.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/rajcica32-300x300.jpg",
    },
    {
      id: 24,
      ime: "Rukola",
      opis: [{
        kalorije: 25,
        masti: 0.7,
        ugljikohidrati: 3.7,
        bjelancevine: 2.6,
      }],
      kolicina: "200g",
      cijena: 19.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/rukola-300x300.jpg",
    },
    {
      id: 25,
      ime: "Ružmarin",
      opis: [{
        kalorije: 131,
        masti: 5.9,
        ugljikohidrati: 20.7,
        bjelancevine: 3.3,
      }],
      kolicina: "30g",
      cijena: 23.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/ruzmarin1-300x300.jpg",
    },
    {
      id: 26,
      ime: "Rotkvica",
      opis: [{
        kalorije: 16,
        masti: 0.1,
        ugljikohidrati: 3.4,
        bjelancevine: 0.7,
      }],
      kolicina: "100g",
      cijena: 4.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/rotkvica1-300x300.jpg",
    },
    {
      id: 27,
      ime: "Zel. salata",
      opis: [{
        kalorije: 14,
        masti: 0.2,
        ugljikohidrati: 2.9,
        bjelancevine: 1.4,
      }],
      kolicina: "kom",
      cijena: 12.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/salata14-300x300.jpg",
    },
    {
      id: 28,
      ime: "Špinat",
      opis: [{
        kalorije: 23,
        masti: 0.3,
        ugljikohidrati: 3.7,
        bjelancevine: 3,
      }],
      kolicina: "500g",
      cijena: 16.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/spinat1-300x300.jpg",
    },        
    {
      id: 29,
      ime: "Tikvica",
      opis: [{
        kalorije: 17,
        masti: 0.3,
        ugljikohidrati: 3.1,
        bjelancevine: 1.2,
      }],
      kolicina: "1kg",
      cijena: 8.99,
      show: false,
      stanje: 0,
      pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/tikva-300x300.jpg",
    },
    {
      id: 30,
      ime: "Govedina",
      opis: [{
        kalorije: 214,
        masti: 15.4,
        ugljikohidrati: 0,
        bjelancevine: 18.8,
      }],
      kolicina: "1kg",
      cijena: 49.99,
      show: false,
      stanje: 0,
      pic: "https://dobartek.spar.hr/files/images/novosti/LIFESTYLE/2017/680x370-7/Meso.jpg",
    },
    {
      id: 31,
      ime: "Junetina",
      opis: [{
        kalorije: 217,
        masti: 11.8,
        ugljikohidrati: 0,
        bjelancevine: 26.1,
      }],
      kolicina: "1kg",
      cijena: 69.99,
      show: false,
      stanje: 0,
      pic: "https://rtl-static.cdn.sysbee.net/image/nemasna-junetina-meso-od-zivotinja-hranjenih-travom-sadrzi-zdrave-omega-3-masne-kiseline-koje-cuvaju-zdravlje-srca-i-kardiovaskularnog-sustava-d6da9cc5db3bcbef90eb08b8cba61b36_view_article_new.jpg?v=22",
    },
    {
      id: 32,
      ime: "Teletina",
      opis: [{
        kalorije: 204,
        masti: 14.6,
        ugljikohidrati: 0,
        bjelancevine: 18.1,
      }],
      kolicina: "1kg",
      cijena: 89.99,
      show: false,
      stanje: 0,
      pic: "http://stancija-kovacici.hr/images/teletina-ispod-sa%C4%8Da334x232.jpg?crc=69723608",
    },
    {
      id: 33,
      ime: "Janjetina",
      opis: [{
        kalorije: 243,
        masti: 18.6,
        ugljikohidrati: 0,
        bjelancevine: 17.5,
      }],
      kolicina: "1kg",
      cijena: 69.99,
      show: false,
      stanje: 0,
      pic: "https://storage.bljesak.info/image/221298/1280x880/JanjetinaTanjur.jpg",
    },
    {
      id: 34,
      ime: "Svinjetina",
      opis: [{
        kalorije: 117,
        masti: 2.3,
        ugljikohidrati: 0,
        bjelancevine: 22.4,
      }],
      kolicina: "1kg",
      cijena: 29.99,
      show: false,
      stanje: 0,
      pic: "https://gastro.24sata.hr/media/img/41/ae/93567f22e885d40e8f63.jpeg",
    },
    {
      id: 35,
      ime: "Piletina",
      opis: [{
        kalorije: 215,
        masti: 15,
        ugljikohidrati: 0,
        bjelancevine: 18.6,
      }],
      kolicina: "1kg",
      cijena: 49.99,
      show: false,
      stanje: 0,
      pic: "http://www.kfc.hr/wp-content/uploads/2016/10/Komadi-piletine-1-kom_bjelovnik_597_672.jpg",
    },
    {
      id: 36,
      ime: "Boškarin",
      opis: [{
        kalorije: 232,
        masti: 18.4,
        ugljikohidrati: 0,
        bjelancevine: 18.8,
      }],
      kolicina: "1kg",
      cijena: 99.99,
      show: false,
      stanje: 0,
      pic: "https://www.crogourmet365.hr/media/__sized__/image/33/b9/shutterstock_732177829-crop-c0-5__0-5-900x600-70.jpg", 
    },
  ],
  recepies: [{
    id: 46,
    ime: "Šugo od boškarina",
    vrijeme: "180min",
    ikona: 3,
    tezina: "teško",
    opis: "nije jednostavno",
    brojOsoba: "8 osoba",
    show: false,
    pic: "https://coolinarika.azureedge.net/images/_variations/a/1/a1b3cb9019e75f6838655c7e6644345d_header.jpg?v=11",
    namirnice: [
      {
        id: 36,
        ime: "Boškarin",
        cijena: 99.99,
        stanje: 1,
        pic: "https://www.crogourmet365.hr/media/__sized__/image/33/b9/shutterstock_732177829-crop-c0-5__0-5-900x600-70.jpg",
      },
      {
        id: 23,
        ime: "Rajčica",
        cijena: 11.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/rajcica32-300x300.jpg",
      },
      {
        id: 18,
        ime: "Mrkva",
        cijena: 1.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/mrkva7-300x300.jpg",
      },
      {
        id: 16,
        ime: "Luk",
        cijena: 8.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/luk7-300x300.jpg",
      },
      {
        id: 27,
        ime: "Zel. salata",
        cijena: 12.99,
        stanje: 1,
        pic:"https://cdn.agroklub.com/upload/images/plant-specie/thumb/salata14-300x300.jpg",
      },
      {
        id: 17,
        ime: "Matovilac",
        cijena: 19.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/matovilac-300x300.jpg",
      },
    ],
  },
  {
    id: 47,
    ime: "Nedjeljni ručak",
    vrijeme: "120min",
    ikona: 2,
    tezina: "složeno",
    opis: "ne bas full jednostavno",
    brojOsoba: "4 osobe",
    pic: "https://coolinarika.azureedge.net/images/_variations/d/2/d233b4d475d2def0eedc5a30f9dd27b4_header.jpg?v=3",
    show: false,
    namirnice: [
      {
        id: 34,
        ime: "Svinjetina",
        cijena: 29.99,
        stanje: 1,
        pic: "https://gastro.24sata.hr/media/img/41/ae/93567f22e885d40e8f63.jpeg",
      },
      {
        id: 16,
        ime: "Luk",
        cijena: 8.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/luk7-300x300.jpg",
      },
      {
        id: 12,
        ime: "Krumpir",
        cijena: 4.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/krumpir26-300x300.jpg",
      },
      {
        id: 27,
        ime: "Zel. salata",
        cijena: 12.99,
        stanje: 1,
        pic:"https://cdn.agroklub.com/upload/images/plant-specie/thumb/salata14-300x300.jpg",
      },
      {
        id: 17,
        ime: "Matovilac",
        cijena: 19.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/matovilac-300x300.jpg",
      },
      {
        id: 24,
        ime: "Rukola",
        cijena: 19.99,
        stanje: 1,
        pic :"https://cdn.agroklub.com/upload/images/plant-specie/thumb/rukola-300x300.jpg",
      },
      {
        id: 25,
        ime: "Ružmarin",
        cijena: 23.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/ruzmarin1-300x300.jpg",
      },
    ],
  },
  {
    id: 48,
    ime: "Juneće meso sa špinatom",
    vrijeme: "40min",
    ikona: 1,
    tezina: "jednostavno",
    opis: "full jednostavno",
    brojOsoba: "4 osobe",
    pic: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/26548_sfs-sirloin-tips-with-steakhouse-creamed-spinach-014",
    show: false,
    namirnice: [
      {
        id: 31,
        ime: "Junetina",
        cijena: 69.99,
        stanje: 1,
        pic: "https://rtl-static.cdn.sysbee.net/image/nemasna-junetina-meso-od-zivotinja-hranjenih-travom-sadrzi-zdrave-omega-3-masne-kiseline-koje-cuvaju-zdravlje-srca-i-kardiovaskularnog-sustava-d6da9cc5db3bcbef90eb08b8cba61b36_view_article_new.jpg?v=22",
      },
      {
        id: 28,
        ime: "Špinat",
        cijena: 16.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/spinat1-300x300.jpg",
      },
      {
        id: 8,
        ime: "Endivija",
        cijena: 8.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/endivija1-300x300.jpg"
      },
      {
        id: 22,
        ime: "Radič",
        cijena: 11.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/radic3-300x300.jpg",
      },
      {
        id: 23,
        ime: "Rajčica",
        cijena: 11.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/rajcica32-300x300.jpg",
      },
      {
        id: 15,
        ime: "Lovor",
        cijena: 8.99,
        stanje: 1,
        pic: "https://cdn.agroklub.com/upload/images/plant-specie/thumb/lovor-300x300.jpg",
      },
    ],
  }
  ],
};


