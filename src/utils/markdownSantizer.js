const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const { allColors } = require('winston/lib/winston/config');
const turndown = require('turndown');
function sanitizeMarkdown(markdownContent) {
  //Conver Markdown to HTML
  const convertedHTML = marked.parse(markdownContent);
  //Sanitize HTML
  const sanitizedHtml = sanitizeHtml(convertedHTML, {
    //Allow only img tag and src attribute
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      img: ['src'],
    },
  });
  //Convert HTML to Markdown
  const turndownService = new turndown();
  const markdown = turndownService.turndown(sanitizedHtml);
  return markdown;
}
// const input = `# Hello World

// This is a paragraph with some text and a [link](https://example.com).

// <script>alert('Hello World')</script>

// `;
// const output = sanitizeMarkdown(input);

module.exports = sanitizeMarkdown;
