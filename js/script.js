import { wordsData } from "./data/wordsData.js";
import { Dictionary } from "./components/dictionary.js";

// console.log(wordsData);
// console.log(Dictionary);

const zodynas = new Dictionary('.content', 'Anglu-Lietuviu-kalbos-zodynas', wordsData);
zodynas.init();
