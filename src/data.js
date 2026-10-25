import about from './assets/images/about-photo.webp'
import galery1 from './assets/images/galery1.webp'
import galery2 from './assets/images/galery2.webp'
import galery3 from './assets/images/galery3.webp'
import galery4 from './assets/images/galery4.webp'
import galery5 from './assets/images/galery5.webp'
import eventPamungkas from './assets/images/brk/event-pamungkas.webp'
import eventDanilla from './assets/images/brk/event-danilla.webp'
import eventFeast from './assets/images/brk/event-feast.webp'
import eventPanturas from './assets/images/brk/event-panturas.webp'
import venueGathering from './assets/images/brk/venue-gathering.webp'
import venueGatheringGroup from './assets/images/brk/venue-gathering-group.webp'
import venueWeddingGarden from './assets/images/brk/venue-wedding-garden.webp'
import venueWedding from './assets/images/brk/venue-wedding.webp'
import branchMas from './assets/images/brk/branch-mas.webp'
import branchSanur from './assets/images/brk/branch-sanur.webp'

// Product photos cropped from the menu book, keyed by file name
const MENU_IMAGES = import.meta.glob('./assets/images/menu/*.webp', { eager: true, import: 'default' })
const photo = (name) => MENU_IMAGES[`./assets/images/menu/${name}.webp`]

export const NAV_LINKS = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Menu', href: '#menu' },
  { name: 'Event', href: '#event' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Lokasi', href: '#lokasi' },
]

// From the official Linktree (https://linktr.ee/berbagikopihub) and the menu book
export const LINKS = {
  menu: 'https://drive.google.com/drive/folders/1nXPqdthZj8pETUpaPdGQpKR8zj037QuS?usp=sharing',
  gallery: 'https://drive.google.com/drive/folders/1E_zcmGvj9GaZ6dZpqqM02A8wrgywaB_y?usp=sharing',
  panggung: 'https://www.instagram.com/berbagipanggung/',
  instagram: 'https://instagram.com/berbagikopihub',
  whatsapp: 'https://api.whatsapp.com/send?phone=6285847836004',
  // the "Scan disini untuk reservasi" QR in the menu book (bit.ly/3URT6yi)
  reservasi: 'https://api.whatsapp.com/send?phone=6282236256709',
}

export const SOCIALS = [
  { icon: 'instagram', label: 'Instagram', href: LINKS.instagram },
  { icon: 'tiktok', label: 'TikTok', href: 'https://tiktok.com/@berbagikopi' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@BerbagiRuangKopi' },
  { icon: 'whatsapp', label: 'WhatsApp', href: LINKS.whatsapp },
  { icon: 'mail', label: 'Email', href: 'mailto:berbagikopihub@gmail.com' },
]

export const FEATURES = [
  { icon: 'coffee', title: 'Berbagi Blend', desc: 'Arabica & Robusta' },
  { icon: 'utensils', title: 'Hidangan Lezat', desc: 'Nusantara, pasta & burger' },
  { icon: 'wifi', title: 'Co-working', desc: 'Wi-Fi gratis' },
  { icon: 'music', title: 'Live Music', desc: '& event komunitas' },
]

export const REASONS = [
  { icon: 'coffee', title: 'Kopi Berbagi Blend', desc: 'Arabica untuk kopi klasik, Robusta untuk kopi susuan.' },
  { icon: 'utensils', title: 'Hidangan Lezat', desc: 'Nasi goreng, rice bowl, pasta, burger & camilan.' },
  { icon: 'laptop', title: 'Ruang Co-working', desc: 'Tempat kerja santai dengan Wi-Fi gratis.' },
  { icon: 'smile', title: 'Staf Ramah', desc: 'Serasa di rumah sendiri.' },
]

// Picks shown in the hero card and the bento preview
export const HIGHLIGHT = {
  hero: { name: 'Cappucino', group: 'Kopi Klasik', price: 28, img: photo('drink-klasik') },
  preview: [
    { name: 'Signature Berbagi', note: 'mulai', price: 28, img: photo('drink-signature') },
    { name: 'Nasi Goreng Beef', price: 39, img: photo('nasi-goreng-beef') },
    { name: 'Snack Platter Combo', price: 85, img: photo('snack-platter-combo') },
    { name: 'Croffle', note: 'mulai', price: 18, img: photo('croffle') },
  ],
  signature: { img: photo('drink-signature'), items: ['Peach Black', 'Bitter Lemon', 'Boosted Milo', 'Biscoff Deluxe', 'Charcoal Coffee'] },
}

/*
 * Menu Peguyangan BRK 2024 — prices in thousands of rupiah, exactly as printed.
 * A group either lists rows under price columns (`cols`, null = not available)
 * or, when every item has a photo, renders as photo cards.
 */
const SAJI = 'disajikan dengan nasi putih.'
const ISI_NUSANTARA = 'garlic, onion, daun pre, cabe besar, wortel, sayur hijau, kol, selada, coslaw timun tomat, kerupuk udang, acar dan chili oil.'
const ISI_TOAST = 'roti tawar, mayonaise, daun selada, tomat, keju slice, kentang goreng, saos khas berbagi, disajikan dengan mix salad, saos tomat dan saos sambal.'
const ISI_BURGER = 'mayonaise, daun selada, tomat, keju melted, kentang goreng, saos khas berbagi disajikan dengan mix salad, saos tomat dan saos sambal.'
const ISI_PASTA = 'disajikan dengan toast garlic bread.'

export const MENU_TABS = [
  {
    id: 'kopi',
    label: 'Kopi',
    groups: [
      {
        title: 'Kopi Klasik', note: 'Dengan Berbagi Blend (Arabica)', cols: ['Hot', 'Ice'], img: photo('drink-klasik'),
        items: [
          { name: 'Espresso', prices: [20, null] },
          { name: 'Americano', prices: [25, 25] },
          { name: 'Americano Susu', prices: [27, null] },
          { name: 'Cafe Latte', prices: [28, 28] },
          { name: 'Cappucino', prices: [28, 28] },
          { name: 'Moccacino', prices: [33, 33] },
          { name: 'Affogato', prices: [null, 28] },
        ],
      },
      {
        title: 'Signature Berbagi', cols: ['Ice'], img: photo('drink-signature'),
        items: [
          { name: 'Peach Black', prices: [28] },
          { name: 'Bitter Lemon', prices: [28] },
          { name: 'Boosted Milo', prices: [30] },
          { name: 'Biscoff Deluxe', prices: [30] },
          { name: 'Charcoal Coffee', prices: [30] },
        ],
      },
      {
        title: 'Kopi Susuan Super', note: 'Dengan Berbagi Blend (Arabica)', cols: ['Hot', 'Ice'],
        items: [
          { name: 'Spanish Latte', prices: [30, 30] },
          { name: 'Brown Latte', prices: [30, 30] },
          { name: 'Pandan Latte', prices: [30, 30] },
          { name: 'Caramel Latte', prices: [30, 30] },
          { name: 'Hazelnut Latte', prices: [30, 30] },
        ],
      },
      {
        title: 'Kopi Susuan', note: 'Dengan Bersama Blend (Robusta)', cols: ['Ice'],
        items: [
          { name: 'Original', prices: [25] },
          { name: 'Nuansa Aren', prices: [28] },
          { name: 'Nuansa Pandan', prices: [28] },
          { name: 'Caramelia', prices: [28] },
          { name: 'Rum-Ugh', prices: [28] },
          { name: 'Sweet Banana', prices: [28] },
          { name: 'Baileys', prices: [28] },
          { name: 'Movie Night', prices: [28] },
        ],
      },
      {
        title: 'Add On', cols: [''],
        items: [
          { name: 'Extra Espresso', prices: [6] },
          { name: 'Change to Oat Milk', prices: [8] },
        ],
      },
    ],
  },
  {
    id: 'non-kopi',
    label: 'Bukan Kopi & Teh',
    groups: [
      {
        title: 'Bukan Kopi', cols: ['Hot', 'Ice'], img: photo('drink-bukan-kopi'),
        items: [
          { name: 'Choco Latte', prices: [27, 27] },
          { name: 'Matcha Latte', prices: [27, 27] },
          { name: 'Red Velvet Latte', prices: [27, 27] },
          { name: 'Taro Latte', prices: [27, 27] },
          { name: 'Milo Latte', prices: [27, 27] },
          { name: 'Biscoff Milk', prices: [28, 28] },
          { name: 'Charcoal Latte', prices: [30, 30] },
          { name: "Cookies 'n Cream", prices: [null, 32] },
          { name: 'Susu Segar', prices: [25, 25] },
        ],
      },
      {
        title: 'Teh Pilihan', cols: ['Hot', 'Ice'],
        items: [
          { name: 'Chamomile Tea', prices: [25, 25] },
          { name: 'English Breakfast', prices: [25, 25] },
          { name: 'Peppermint Tea', prices: [25, 25] },
          { name: 'Green Tea', prices: [25, 25] },
        ],
      },
      {
        title: 'Teh Alami', cols: ['Hot', 'Ice'],
        items: [
          { name: 'Black Tea', prices: [20, 20] },
          { name: 'Lemon Tea', prices: [22, 22] },
          { name: 'Rosella Tea', prices: [null, 25] },
          { name: 'Lychee Tea', prices: [null, 28] },
        ],
      },
    ],
  },
  {
    id: 'penyegar',
    label: 'Penyegar & Jus',
    groups: [
      {
        title: 'Penyegar Dahaga', cols: [''], img: photo('drink-penyegar'),
        items: [
          { name: 'Soda Splash', desc: 'Kiwi, Passion atau Peach', prices: [25] },
          { name: 'Shaken Tea', desc: 'Kiwi, Passion atau Peach', prices: [26] },
          { name: 'Yakult Punch', desc: 'Jeruk, Lemon Madu atau Lychee', prices: [30] },
          { name: 'Raspberry Cosmos', prices: [30] },
          { name: 'Raspberry Lemonade', prices: [30] },
          { name: 'Apple Martin', prices: [30] },
          { name: 'Aromatic Peach', prices: [30] },
        ],
      },
      {
        title: 'Jus Segar', cols: ['Ice'],
        items: [
          { name: 'Melon', prices: [28] },
          { name: 'Semangka', prices: [28] },
          { name: 'Jeruk', prices: [28] },
          { name: 'Mangga', prices: [30] },
          { name: 'Strawberry', prices: [30] },
          { name: 'Alpokat', prices: [30] },
        ],
      },
      {
        title: 'Beer', cols: [''],
        items: [
          { name: 'Large Beer', prices: [47] },
          { name: 'Small Beer', prices: [32] },
          { name: 'Tower Beer', prices: [185] },
          { name: 'Mineral Water', prices: [10] },
        ],
      },
    ],
  },
  {
    id: 'camilan',
    label: 'Camilan',
    groups: [
      {
        title: 'Camilan Garing',
        items: [
          { name: 'Onion Ring', price: 21, img: photo('onion-ring'), desc: 'Bawang bombay digoreng tepung, disajikan dengan coslaw salad, saos tomat dan saos sambal.' },
          { name: 'Spring Rolls', price: 25, img: photo('spring-rolls'), desc: 'Daging ayam cincang, wortel, bawang bombay, bihun, jamur kuping, daun bawang, seledri, disajikan dengan coslaw salad, saos tomat dan saos sambal.' },
          { name: 'French Fries', price: 23, img: photo('french-fries'), desc: 'Kentang goreng disajikan dengan saos tomat dan saos sambal.' },
          { name: 'Chicken Karaage', price: 26, img: photo('chicken-karaage'), desc: 'Ayam goreng tepung disajikan dengan coslaw salad, saos spicy mayo dan daun bawang.' },
          { name: 'Cumi Crispy', price: 35, img: photo('cumi-crispy'), desc: 'Cumi goreng tepung disajikan dengan coslaw salad, saos tartar dan slice lime.' },
          { name: 'Udang Tempura', price: 39, img: photo('udang-tempura'), desc: 'Udang goreng tepung disajikan dengan coslaw salad, saos tartar dan slice lime.' },
          { name: 'Snack Platter', price: 40, img: photo('snack-platter'), desc: 'Ayam goreng tepung, kentang goreng, bombay goreng tepung, spring roll, disajikan dengan coslaw salad, saos bbq & saos spicy mayo.' },
          { name: 'Snack Platter Combo', price: 85, img: photo('snack-platter-combo'), desc: 'Ayam goreng tepung, cumi tepung, udang tepung, sosis ayam, kentang goreng, disajikan dengan coslaw salad, saos bbq, saos spicy mayo dan saos tartar.' },
        ],
      },
      {
        title: 'Camilan Manis', cols: ['Original', 'Topping'],
        photos: [photo('kue-gabin'), photo('croffle'), photo('churros')],
        foot: 'Pilihan topping: Coklat, Vanilla, Matcha, Keju, Tiramisu, Aren, Ice Cream',
        items: [
          { name: 'Kue Gabin', prices: [10, 15] },
          { name: 'Roti Bakar', prices: [13, 17] },
          { name: 'Churros', prices: [13, 17] },
          { name: 'Pisang Goreng', prices: [16, 20] },
          { name: 'Croffle', prices: [18, 22] },
          { name: 'Waffle', prices: [17, 20] },
        ],
      },
    ],
  },
  {
    id: 'utama',
    label: 'Hidangan Utama',
    note: 'Hidangan utama disajikan dengan pilihan nasi putih / kentang goreng.',
    groups: [
      {
        title: 'Hidangan Utama & Seafood',
        items: [
          { name: 'Cabe Garam', options: [['Chicken', 27], ['Beef', 47]], img: photo('cabe-garam'), desc: `Daging ayam / sapi, garlic, onion, daun pre, cabe rawit, cabe besar, coslaw timun tomat ${SAJI}` },
          { name: 'Teriyaki', options: [['Chicken', 27], ['Beef', 49]], img: photo('teriyaki'), desc: `Daging ayam / sapi, garlic, onion, daun pre, biji wijen, saos teriyaki, coslaw salad ${SAJI}` },
          { name: 'Sambal Matah', options: [['Chicken', 27], ['Beef', 47]], img: photo('sambal-matah'), desc: `Daging ayam / sapi, bawang merah, cabe rawit, cabe hijau, sereh, daun jeruk, terasi udang, minyak kelapa, coslaw timun tomat ${SAJI}` },
          { name: 'Blackpepper', options: [['Chicken', 27], ['Beef', 49]], img: photo('blackpepper'), desc: `Daging ayam / sapi, merica hitam, onion, cabe besar, daun pre, coslaw timun tomat, bumbu khas berbagi ${SAJI}` },
          { name: 'Barbeque', options: [['Chicken', 30], ['Beef', 49]], img: photo('barbeque'), desc: `Ayam fillet panggang / smoked beef, saos bbq khas berbagi, mix salad ${SAJI}` },
          { name: 'Crispy Curry', options: [['Chicken', 30]], img: photo('crispy-curry'), desc: `Ayam katsu, onion, garlic, bumbu curry khas berbagi, coslaw salad ${SAJI}` },
          { name: 'Spicy Mayo', options: [['Chicken', 29]], img: photo('spicy-mayo'), desc: `Ayam katsu, saos mayonaise pedas khas berbagi, coslaw salad, daun pre ${SAJI}` },
          { name: 'Salted Egg', options: [['Chicken', 39]], img: photo('salted-egg'), desc: `Daging ayam, telur asin, susu, cream, onion, daun pre, cabe besar, coslaw salad ${SAJI}` },
          { name: 'Mushroom Sauce', options: [['Chicken', 33]], img: photo('mushroom-sauce'), desc: 'Ayam fillet panggang, mushroom tiram, cream basil sauce, mix salad dan kentang goreng.' },
          { name: 'Parmigiana', options: [['Chicken', 45]], img: photo('parmigiana'), desc: 'Ayam katsu, concase saos, mozzarella cheese, basil, mix salad, kentang goreng, disajikan dengan saos tomat dan saos sambal.' },
          { name: 'Cumi', options: [['Asam Manis', 39], ['Suna Cekuh', 39]], img: photo('cumi-suna-cekuh'), desc: `Cumi, garlic, onion, daun pre, cabe besar, bumbu bali khas berbagi, selada, coslaw timun tomat ${SAJI}` },
          { name: 'Udang', options: [['Suna Cekuh', 45], ['Asam Manis', 45]], img: photo('udang-asam-manis'), desc: `Udang, garlic, onion, daun pre, cabe besar, nanas, seledri, bumbu asam manis khas berbagi, selada, coslaw timun tomat ${SAJI}` },
        ],
      },
    ],
  },
  {
    id: 'nusantara',
    label: 'Nusantara',
    groups: [
      {
        title: 'Nusantara Menu',
        items: [
          { name: 'Nasi Goreng Suna Cekuh', price: 38, img: photo('nasi-goreng-suna-cekuh'), desc: 'Daging ayam, telur, garlic, onion, daun pre, cabe besar, wortel, sayur hijau, kol, selada, coslaw timun tomat, bumbu bali khas berbagi, kerupuk udang dan sambal goreng.' },
          { name: 'Nasi Goreng Chicken', price: 37, img: photo('nasi-goreng-chicken'), desc: `Daging ayam, telur, ${ISI_NUSANTARA}` },
          { name: 'Nasi Goreng Beef', price: 39, img: photo('nasi-goreng-beef'), desc: `Smoked beef brisket, ${ISI_NUSANTARA}` },
          { name: 'Nasi Goreng Seafood', price: 39, img: photo('nasi-goreng-seafood'), desc: `Cumi, udang, telur, ${ISI_NUSANTARA}` },
          { name: 'Mie Goreng Chicken', price: 37, img: photo('mie-goreng-chicken'), desc: `Daging ayam, telur, ${ISI_NUSANTARA}` },
          { name: 'Mie Goreng Beef', price: 39, img: photo('mie-goreng-beef'), desc: `Smoked beef brisket, telur, ${ISI_NUSANTARA}` },
          { name: 'Mie Goreng Seafood', price: 39, img: photo('mie-goreng-seafood'), desc: `Cumi, udang, telur, ${ISI_NUSANTARA}` },
        ],
      },
    ],
  },
  {
    id: 'toast-pasta',
    label: 'Toast, Burger & Spaghetti',
    groups: [
      {
        title: 'Spaghetti',
        items: [
          { name: 'Beef Alfredo', price: 42, img: photo('beef-alfredo'), desc: `Spaghetti, beef brisket, mushroom, garlic, onion, cream, susu, basil, parmesan cheese ${ISI_PASTA}` },
          { name: 'Shrimp Aglio è Olio', price: 39, img: photo('shrimp-aglio-olio'), desc: `Spaghetti, udang, garlic, onion, cabe slice, tomat cherry, basil, parmesan cheese ${ISI_PASTA}` },
          { name: 'Beef Carbonara', price: 42, img: photo('beef-carbonara'), desc: `Spaghetti, beef shortplate, garlic, onion, kuning telur, susu, basil, parmesan cheese ${ISI_PASTA}` },
          { name: 'Beef Bolognese', price: 42, img: photo('beef-bolognese'), desc: `Spaghetti, daging sapi cincang, saos concase, garlic, onion, basil, parmesan cheese ${ISI_PASTA}` },
        ],
      },
      {
        title: 'Toast', cols: [''], img: photo('egg-cheese-toast'),
        items: [
          { name: 'Beef Cheese Toast', desc: `Smoked beef ham, ${ISI_TOAST}`, prices: [35] },
          { name: 'Chicken Cheese Toast', desc: `Ayam katsu, ${ISI_TOAST}`, prices: [32] },
          { name: 'Egg Cheese Toast', desc: `Telur, ${ISI_TOAST}`, prices: [29] },
        ],
      },
      {
        title: 'Burger', cols: [''], img: photo('beef-burger'),
        items: [
          { name: 'Beef Burger', desc: `Bun burger, beef patty, ${ISI_BURGER}`, prices: [59] },
          { name: 'Chicken Burger', desc: `Bun burger, chicken, ${ISI_BURGER}`, prices: [55] },
        ],
      },
    ],
  },
]

export const EVENTS = [
  { icon: 'music', tag: 'Live', title: 'Peguyangan Rock City 2024', desc: 'Bersama Danilla, Feast, Pamungkas & The Panturas.', img: eventPamungkas },
  { icon: 'mic', tag: 'Gigs', title: 'Berbagigs', desc: 'Seri gigs di Berbagi, kini sudah Vol.14.', img: galery2 },
  { icon: 'smile', tag: 'Venue', title: 'Gathering & Wedding', desc: 'Sewa tempat untuk acaramu, hingga 200 orang.', img: venueGathering },
]

export const STAGE_PHOTOS = [
  { src: eventDanilla, caption: 'Danilla' },
  { src: eventFeast, caption: 'Feast' },
  { src: eventPanturas, caption: 'The Panturas' },
]

export const VENUES = [
  {
    id: 'gathering',
    title: 'Gathering Event',
    capacity: 'Maksimal 200 orang',
    desc: 'Talkshow, workshop, seminar sampai buffet — panggung, sound dan area makan dalam satu tempat.',
    img: venueGathering,
    thumb: venueGatheringGroup,
  },
  {
    id: 'wedding',
    title: 'Wedding Event',
    capacity: 'Maksimal 200 tamu undangan',
    desc: 'Akad, resepsi atau intimate wedding di taman hijau yang rindang.',
    img: venueWeddingGarden,
    thumb: venueWedding,
  },
]

export const LOCATIONS = [
  {
    id: 'peguyangan',
    name: 'Peguyangan',
    city: 'Denpasar',
    address: 'Jl. Astasura No.91, Peguyangan Kangin, Denpasar Utara, Bali 80115',
    maps: 'https://maps.app.goo.gl/WvGXz3CWFVi9gCrw5',
    coords: '-8.6109023,115.2206777',
    img: galery3,
  },
  {
    id: 'ubud',
    name: 'Mas, Ubud',
    city: 'Gianyar',
    address: 'Jl. Raya Mas, Mas, Ubud, Gianyar, Bali 80582',
    maps: 'https://maps.app.goo.gl/PiCR3Ve8acjh5KXTA',
    coords: '-8.5614593,115.2732213',
    img: branchMas,
  },
  {
    id: 'sanur',
    name: 'Sanur',
    city: 'Denpasar',
    address: 'Jl. Cemara No.4, Sanur, Denpasar Selatan, Bali 80228',
    maps: 'https://maps.app.goo.gl/sMSdyuqrKtCcP7Tv5',
    coords: '-8.7078403,115.2569788',
    img: branchSanur,
  },
]

export const ABOUT_IMG = about

export const GALLERY = [
  { src: galery1, caption: 'Sudut Berbagi', w: 880, h: 1324 },
  { src: galery2, caption: 'Intimate Music Gigs', w: 1014, h: 680 },
  { src: galery3, caption: 'Suasana Malam', w: 696, h: 678 },
  { src: galery4, caption: 'Ngopi Siang', w: 480, h: 600 },
  { src: galery5, caption: 'Obrolan Kreatif', w: 1220, h: 600 },
]
