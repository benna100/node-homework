function getHeader(title) {
  return `
        <head>
            <title>${title}</title>
            <link rel="stylesheet" href="static/index.css">
            <script src="static/index.js"></script>
        </head>`;
}

module.exports = getHeader;
