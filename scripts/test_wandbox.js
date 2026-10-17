const https = require('https');
const payload = JSON.stringify({
  compiler: 'openjdk-jdk-21+35',
  code: 'class Prog { public static void main(String[] args) { System.out.println("Java 21 OK from Wandbox!"); } }'
});
const req = https.request('https://wandbox.org/api/compile.json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
}, res => {
  let d = ''; res.on('data', c => d += c);
  res.on('end', () => console.log('Wandbox status:', res.statusCode, d));
});
req.write(payload); req.end();
