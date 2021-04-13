"github_com/devopsfaith/krakend-cors": {
	"allow-origins": ["*"],
	"allow_headers": ["*"],
	"allow-methods": ["GET", "POST", "DELETE", "PUT"],
	"headers_to_pass": [
		"Accept-Encoding",
		"Authorization",
		"Content-Type",
		"Content-Lenght",
		"Host",
		"Origin",
		"User-Agent",
		"accessToken",
		"refreshToken",
		"grant"
	],
	"allow_credentials": true,
	"max-age": "24h"
}