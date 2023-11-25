const nlp = require('compromise');

function extractNouns(sentence) {
  let doc = nlp(sentence);
  let nouns = doc.nouns().out('array');

  // Exception words that need to be excluded
  const excludeList = ['i', 'you', 'he', 'she', 'it', 'we', 'they'];

  nouns = nouns.filter(noun => !excludeList.includes(noun.toLowerCase()));

  return nouns;
}

module.exports = extractNouns;

