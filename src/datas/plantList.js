import monstera from "../assets/monstera.jpg";
import ficus from "../assets/ficus.jpg";
import Pothos from "../assets/pothos.jpg";
import Aloe from "../assets/Aloe.jpg";
import Basilic from "../assets/basilic.jpg";
import Geranium from "../assets/Geranium.jpg";
import Olivier from "../assets/olivier.jpg";
import Succulente from "../assets/Succulente.jpg";
import Yucca from "../assets/Yucca.jpg";

export const plantList = [
  {
    name: "Monstera",
    category: "Classique",
    id: "1ed",
    isBestSale: true,
    light: 1,
    water: 3,
    waterComment:
      "Arrosez votre Monstera environ 1 fois par semaine au printemps et en été. En hiver, encore plus rarement. Il est indispensable de laisser sécher la terre entre chaque nouvel arrosage. Touchez-la du bout des doigts avant d’ajouter de l'eau. Si elle est humide, attendez encore quelques jours. Vous pouvez brumiser ses feuilles et ses racines avec un vaporisateur d’eau non calcaire, lorsque l’air est trop sec. Originaire des forêts tropicales humides, le Monstera a besoin de se sentir dans son environnement naturel pour prospérer.",
    cover: monstera,
    price: 12,
    description:
      "La discrétion, très peu pour lui ! Comme son nom l’indique, le Monstera sait imposer sa loi, notamment dans son milieu naturel où il se transforme en véritable liane grimpant le long des troncs des arbres. Il est à coup sûr un compagnon malin : il a su développer des grandes feuilles supérieures dentelées pour permettre à celles inférieures de capter la lumière du soleil. Imposant et sculptural, il existe en plusieurs variétés toutes plus belles les unes que les autres, comme le fameux Monstera Variegata au feuillage bicolore blanc et vert ou le Monstera Deliciosa (faux philodendron). Pas étonnant que cette plante d’intérieur particulièrement photogénique ait même lancé une nouvelle tendance très populaire sur Instagram avec son hashtag #monsteramonday. Vous êtes tombé sous le charme de cette beauté sauvage et tropicale ?",
    entretien:
      "Il ne faut pas couper les racines aériennes, mais vous pouvez tailler les tiges, en les pinçant à leur extrémité pour stopper la croissance et rafraîchir votre plante d'intérieur. Au printemps et en été, vous pouvez ajouter de l’engrais liquide environ 1 fois par mois. Aussi, il est nécessaire de le rempoter dès lors que les racines sont à l’étroit dans le pot. Les jeunes Monsteras en pot doivent être rempotés au printemps. Pratiquez un surfaçage en remplaçant la terre en surface par un nouveau terreau, si votre plante est déjà volumineuse.",
  },
  {
    name: "Ficus lyrata",
    category: "Classique",
    id: "2ab",
    isBestSale: true,
    light: 3,
    water: 3,
    cover: ficus,
    price: 4,
    description:
      "Une plante d'intérieur, c’est joli… Mais un arbre, oui un vrai arbre, avouez que ça en jette tout de suite plus ! Le Ficus Lyrata fait partie de la famille des figuiers et possède un beau feuillage atypique. En choisissant cette variété, vous gagnez en hauteur, mais ne misez pas sur ses figues, car cette grande plante africaine n’est pollinisée que par une espèce de guêpes qui n’atteindra jamais votre salon. Cependant, sa fonction esthétique est intacte à condition de bien choisir son emplacement !",
    waterComment:
      "Arrosez raisonnablement votre arbre : environ 1 fois par semaine en été et un peu moins fréquemment en hiver. Son besoin en eau est faible. Faites attention à ce qu’il n’y ait pas d’eau stagnante dans la soucoupe afin de ne pas asphyxier ses racines. Brumisez régulièrement ses feuilles à l’aide d’un vaporisateur avec de l’eau non calcaire pour maintenir une bonne humidité. ",
    entretien:
      "Pour que votre Ficus Lyrata conserve son éclat, nettoyez régulièrement ses feuilles avec un chiffon humide. Vous pouvez également apporter de l’engrais pour plantes vertes, 1 à 2 fois par mois au printemps et en été : une croissance boostée garantie ! Selon la taille de votre Ficus, vous pouvez le rempoter tous les 2 ou 3 ans dans un pot plus grand.",
  },
  {
    name: "Pothos argenté",
    category: "Classique",
    id: "3sd",
    isBestSale: false,
    light: 3,
    water: 3,
    cover: Pothos,
    price: 8,
    description:
      "Le Pothos est une plante robuste et facile d’entretien, il conviendra à tous les publics et encore plus aux débutants qui désirent se lancer dans l’aventure jungle at home ! Peu exigeant, il saura s’adapter sans difficultés à de nombreux intérieurs. Découvrez quelques conseils pour en prendre soin : ",
    waterComment:
      "Au niveau de l’arrosage, il est l’amoureux des têtes en l’air puisque moins on l’arrose : mieux il se porte !  Le Pothos Argenté fait partie de ces plantes qui détestent que le sol dans lequel il vit soit détrempé. On évitera alors d’avoir la main lourde et bien espacer les arrosages.  D’ailleurs, si votre plante a un gros coup de soif, il vous le fera savoir en enroulant ses feuilles.",
    entretien:
      "Rien de plus facile que de bouturer le pothos : il vous suffit de couper un morceau de liane en dessous d’un nœud, à la longueur souhaitée et de placer la tige dans l’eau. Au bout de quelques  jours vous pourrez voir apparaître des racines ! Vous n’aurez qu’à replanter celle-ci avec la plante mère pour lui donner un beau volume.",
  },
  {
    name: "Yucca",
    category: "Classique",
    id: "4kk",
    isBestSale: false,
    light: 3,
    water: 3,
    cover: Yucca,
    price: 5,
  },
  {
    name: "Olivier",
    category: "Extérieur",
    id: "5pl",
    isBestSale: false,
    light: 3,
    water: 3,
    cover: Olivier,
    price: 13,
  },
  {
    name: "Géranium",
    category: "Extérieur",
    id: "6uo",
    isBestSale: false,
    light: 3,
    water: 3,
    cover: Geranium,
    price: 15,
  },
  {
    name: "Basilic",
    category: "Extérieur",
    id: "7ie",
    isBestSale: false,
    light: 3,
    water: 3,
    cover: Basilic,
    price: 17,
    isSpecialOffer: true,
  },
  {
    name: "Aloe",
    category: "Plante grasse",
    id: "8fp",
    isBestSale: false,
    light: 3,
    water: 2,
    cover: Aloe,
    price: 10,
    isSpecialOffer: true,
  },
  {
    name: "Succulente",
    category: "Plante grasse",
    id: "9vn",
    isBestSale: false,
    light: 3,
    water: 1,
    cover: Succulente,
    price: 11,
  },
];
