// Create reference instance
const myMarked = require('marked')
const createDOMPurify = require('dompurify')
const { JSDOM } = require('jsdom')

const fs = require('fs')
const path = require('path')
const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

// Set options
// `highlight` example uses `highlight.js`
myMarked.setOptions({
    renderer: new myMarked.Renderer(),
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
})

let file = (name) => path.join(__dirname, name)

// if(fs.existsSync(file('demo.html'))){
//     // fs.unlinkSync()
//     // console.log('exits');
// }

let content = fs.readFileSync(file('demo.md'), { encoding: 'utf8' })

const tokenizer = {
    codespan(src) {
        const match = src.match(/demo+/)
        if (match) {
            return {
                type: 'codespan',
                raw: match.input,
                text: match[0].trim() + ' xxxx',
            }
        }

        // return false to use original codespan tokenizer
        return false
    },
}

const walkTokens = (token) => {
    if (token.type === 'heading') {
        token.depth += 1
    }
}

// Override function
const renderer = {
    heading(text, level) {
        return `<h${level}><span class="header-link">${text}</span></h${level}>`
    },
}

myMarked.use({ tokenizer, renderer, walkTokens })

// Compile
let compile = DOMPurify.sanitize(myMarked(content))

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>marked</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.1/build/styles/tomorrow-night-bright.min.css">
</head>

<body>
${compile}
</body>
</html>
`

fs.writeFileSync(file('demo.html'), html, { encoding: 'utf8' })
