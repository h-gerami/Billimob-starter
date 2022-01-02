// bahse language inja handle mishavad
// kafiye shoma az too code ke oonja bishtar tozih dadam
// faghat begid language chiye
// be ezaye har zaban bayad yek language add konid
import {en} from './En';
import {fa} from './Fa';
import {es} from './Es';
import {de} from './De';
export const BLang = (l: string) => {
  switch (l) {
    case 'en':
      return en;
    case 'fa':
      return fa;
    case 'es':
      return es;
    case 'de':
      return de;
  }
};
