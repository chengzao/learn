// https://marked.js.org/using_pro#use

const marked = require('marked')

const descriptionlist = {
    name: 'descriptionList',
    level: 'block',                                     // Is this a block-level or inline-level tokenizer?
    start(src) { return src.match(/:[^:\n]/)?.index; }, // Hint to Marked.js to stop and check for a match
    tokenizer(src, tokens) {
      const rule = /^(?::[^:\n]+:[^:\n]*(?:\n|$))+/;    // Regex for the complete token
      const match = rule.exec(src);
      if (match) {
        return {                                        // Token to generate
          type: 'descriptionList',                      // Should match "name" above
          raw: match[0],                                // Text to consume from the source
          text: match[0].trim(),                        // Additional custom properties
          tokens: this.inlineTokens(match[0].trim())    // inlineTokens to process **bold**, *italics*, etc.
        };
      }
    },
    renderer(token) {
      return `<dl>${this.parseInline(token.tokens)}\n</dl>`; // parseInline to turn child tokens into HTML
    }
  };

  const description = {
    name: 'description',
    level: 'inline',                                 // Is this a block-level or inline-level tokenizer?
    start(src) { return src.match(/:/)?.index; },    // Hint to Marked.js to stop and check for a match
    tokenizer(src, tokens) {
      const rule = /^:([^:\n]+):([^:\n]*)(?:\n|$)/;  // Regex for the complete token
      const match = rule.exec(src);
      if (match) {
        return {                                     // Token to generate
          type: 'description',                       // Should match "name" above
          raw: match[0],                             // Text to consume from the source
          dt: this.inlineTokens(match[1].trim()),    // Additional custom properties
          dd: this.inlineTokens(match[2].trim())
        };
      }
    },
    renderer(token) {
      return `\n<dt>${this.parseInline(token.dt)}</dt><dd>${this.parseInline(token.dd)}</dd>`;
    },
    childTokens: ['dt', 'dd'],                 // Any child tokens to be visited by walkTokens
    walkTokens(token) {                        // Post-processing on the completed token tree
      if (token.type === 'strong') {
        token.text += ' walked';
      }
    }
  };

  //   marked.use({extensions: [descriptionlist] });
  //   marked.use({extensions: [description]     });

  marked.use({ extensions: [descriptionlist, description] });

  let md = 'A Description List:\n'
  + ':   Topic 1   :  Description 1\n'
  + ': **Topic 2** : *Description 2*'

  let html = marked(md)

  console.log(html);