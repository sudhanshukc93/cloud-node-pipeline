const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cloud Node Pipeline v2</title>
        </head>
        <body>
            <h1>🚀 Cloud Node Pipeline v2</h1>
            <h2>GitHub Actions + Docker + GHCR</h2>
            <p>This application is automatically built and published through CI/CD.</p>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
