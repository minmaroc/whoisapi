// whois.js

const whois = require('whois-json');

module.exports = async function (context, req) {
    try {
        const { domain } = req.query;
        if (!domain) {
            context.res = {
                status: 400,
                body: "Domain parameter is required."
            };
            return;
        }

        // Perform WHOIS lookup using whois-json
        const whoisResult = await whois(domain);

        context.res = {
            status: 200,
            body: { result: whoisResult }
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: error.message }
        };
    }
};
