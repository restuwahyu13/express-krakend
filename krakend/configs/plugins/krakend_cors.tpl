"github_com/devopsfaith/krakend-cors": {
	"allow-origins": ["*"],
	"allow_headers": ["*"],
	"allow-methods": ["GET", "POST", "DELETE", "PUT"],
	"expose_headers": [
		"Accept-Encoding",
		"Accept-Language",
		"access-control-allow-origin",
		"Access-Control-Request-Headers",
		"Access-Control-Request-Method",
		"Authorization",
		"Cache-Control",
		"Connection",
		"Content-Type",
		"Host",
		"If-Modified-Since",
		"Keep-Alive",
		"Key",
		"Origin",
		"Pragma",
		"User-Agent",
		"X-Custom-Header"
	],
	"allow_credentials": true,
	"max-age": "24h"
}