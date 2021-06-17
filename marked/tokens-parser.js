const marked = require('marked');

const md = `
  # heading

  [link][1]

  [1]: #heading "heading"
`;

// const tokens = marked.lexer(md);
const lexer = new marked.Lexer();
const tokens = lexer.lex(md);
console.log(tokens);

// const html = marked.parser(tokens);
const parser = new marked.Parser()
const html = parser.parse(tokens)

console.log(html);