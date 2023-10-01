import { Phonetic } from './phonetic.model';

export interface Defnition {
  license: {
    name: string;
    url: string;
  };
  word: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example: string;
      synonyms: [];
      antonyms: [];
    }>;
  }>;
}
