const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/v2/entries/en/hello', function (req, res) {
  res.json([
    {
      word: 'hello',
      phonetics: [
        {
          audio:
            'https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3',
          sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=75797336',
          license: {
            name: 'BY-SA 4.0',
            url: 'https://creativecommons.org/licenses/by-sa/4.0',
          },
        },
        {
          text: '/həˈləʊ/',
          audio:
            'https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3',
          sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=9021983',
          license: {
            name: 'BY 3.0 US',
            url: 'https://creativecommons.org/licenses/by/3.0/us',
          },
        },
        { text: '/həˈloʊ/', audio: '' },
      ],
      meanings: [
        {
          partOfSpeech: 'noun',
          definitions: [
            {
              definition: '"Hello!" or an equivalent greeting.',
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ['greeting'],
          antonyms: [],
        },
        {
          partOfSpeech: 'verb',
          definitions: [
            {
              definition: 'To greet with "hello".',
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: 'interjection',
          definitions: [
            {
              definition:
                'A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.',
              synonyms: [],
              antonyms: [],
              example: 'Hello, everyone.',
            },
            {
              definition: 'A greeting used when answering the telephone.',
              synonyms: [],
              antonyms: [],
              example: 'Hello? How may I help you?',
            },
            {
              definition:
                'A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.',
              synonyms: [],
              antonyms: [],
              example: 'Hello? Is anyone there?',
            },
            {
              definition:
                'Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.',
              synonyms: [],
              antonyms: [],
              example:
                'You just tried to start your car with your cell phone. Hello?',
            },
            {
              definition: 'An expression of puzzlement or discovery.',
              synonyms: [],
              antonyms: [],
              example: 'Hello! What’s going on here?',
            },
          ],
          synonyms: [],
          antonyms: ['bye', 'goodbye'],
        },
      ],
      license: {
        name: 'CC BY-SA 3.0',
        url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/hello'],
    },
  ]);
});

app.get('/api/v2/entries/en/keyboard', function (req, res) {
  res.json([
    {
      word: 'keyboard',
      phonetic: '/ˈkiːbɔːd/',
      phonetics: [
        { text: '/ˈkiːbɔːd/', audio: '' },
        { text: '/ˈkiːbɔːd/', audio: '' },
        {
          text: '/ˈkibɔɹd/',
          audio:
            'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
          sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
          license: {
            name: 'BY-SA 3.0',
            url: 'https://creativecommons.org/licenses/by-sa/3.0',
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: 'noun',
          definitions: [
            {
              definition:
                '(etc.) A set of keys used to operate a typewriter, computer etc.',
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [
            'electronic keyboard',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
          ],
          antonyms: [],
        },
        {
          partOfSpeech: 'verb',
          definitions: [
            {
              definition: 'To type on a computer keyboard.',
              synonyms: [],
              antonyms: [],
              example: 'Keyboarding is the part of this job I hate the most.',
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: 'CC BY-SA 3.0',
        url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
    },
  ]);
});

app.listen(8000);
