import { Meaning } from './meaning.model';
import { Phonetic } from './phonetic.model';

export interface WordDefninition {
  license: {
    name: string;
    url: string;
  };
  word: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}
