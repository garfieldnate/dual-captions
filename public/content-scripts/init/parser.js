class TranslationParser {
  parse(text) {
    return Promise.reject('TranslationParser.parse must be implemented.');
  }
}

window.TranslationParser = TranslationParser;
window.DC.parser = new TranslationParser();
