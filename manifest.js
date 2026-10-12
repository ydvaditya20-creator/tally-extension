{
  "manifest_version": 3,
  "name": "Tally Connector Extension",
  "version": "1.0",
  "description": "HTML पेज से Tally Prime में डेटा भेजने और निकालने के लिए",
  "permissions": [
    "scripting"
  ],
  "host_permissions": [
    "http://localhost:9000/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://*.github.io/*", "http://127.0.0*", "http://localhost/*"],
      "js": ["content.js"]
    }
  ]
}
