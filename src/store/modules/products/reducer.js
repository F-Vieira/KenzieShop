import soloLeveling1 from "../../../assets/soloLevelingVol1Capa.jpg";
import soloLeveling2 from "../../../assets/soloLevelingVol2Capa.jpg";
import soloLeveling3 from "../../../assets/soloLevelingVol3Capa.jpg";
import TBATEvol1 from "../../../assets/TBATEvol1Capa.jpg";
import TBATEvol2 from "../../../assets/TBATEvol2Capa.jpg";
import TBATEvol3 from "../../../assets/TBATEvol3Capa.jpg";
import TBATEvol4 from "../../../assets/TBATEvol4Capa.jpg";
import TBATEvol5 from "../../../assets/TBATEvol5Capa.jpg";
import TBATEvol6 from "../../../assets/TBATEvol6Capa.jpg";
import TBATEvol7 from "../../../assets/TBATEvol7Capa.jpg";
import TBATEvol8 from "../../../assets/TBATEvol8Capa.jpg";

const defaultState = [
  { id: 1, name: "Solo Leveling 1", price: 40.0, img: soloLeveling1 },
  { id: 2, name: "Solo Leveling 2", price: 40.0, img: soloLeveling2 },
  { id: 3, name: "Solo Leveling 3", price: 40.0, img: soloLeveling3 },
  {
    id: 4,
    name: "The Beginning After The End - Early Years",
    price: 40.0,
    img: TBATEvol1,
  },
  {
    id: 5,
    name: "The Beginning After The End - New Heights",
    price: 40.0,
    img: TBATEvol2,
  },
  {
    id: 6,
    name: "The Beginning After The End - Beckoning Fates",
    price: 40.0,
    img: TBATEvol3,
  },
  {
    id: 7,
    name: "The Beginning After The End - Horizon's Edge",
    price: 40.0,
    img: TBATEvol4,
  },
  {
    id: 8,
    name: "The Beginning After The End - Convergence",
    price: 40.0,
    img: TBATEvol5,
  },
  {
    id: 9,
    name: "The Beginning After The End - Transcendence",
    price: 40.0,
    img: TBATEvol6,
  },
  {
    id: 10,
    name: "The Beginning After The End - Divergence",
    price: 40.0,
    img: TBATEvol7,
  },
  {
    id: 11,
    name: "The Beginning After The End - Ascencion",
    price: 40.0,
    img: TBATEvol8,
  },
];
const productsReducer = (state = defaultState, action) => {
  return state;
};
export default productsReducer;
