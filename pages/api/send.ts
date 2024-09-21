const AWS = require("aws-sdk");
import rateLimit from "../../utils/rate-limit";
import { defaultQuery } from "../../lib/queries";
import { fetchQuery } from "../../lib/sanity";
//rate limiting
const limiter = rateLimit({
	interval: 60 * 1000, // 60 seconds
	uniqueTokenPerInterval: 500 // Max 50 users per second
});

// Amazon SES configuration
const SESConfig = {
	apiVersion: "2010-12-01",
	accessKeyId: process.env.SES_ACCESS_KEY_ID,
	secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
	region: "us-west-2"
};

export default async function(req, res) {
	const config = await fetchQuery(defaultQuery);
	const targetEmail = config?.email || "support@newfrontdoor.org";
	try {
		if (req.method !== "POST" || !req.body) {
			res.status(400).json({ error: "Bad request" });
			res.end();
		} else {
			const { message, type } = req.body;
			const table = Object.entries(message)
				.map(
					([key, value]) =>
						`<tr><td>${key}</td> <td>${
							typeof value === "object"
								? `<ul>${(value as Array<string>).map((item) => `<li>${item}</li>`).join("")}</ul>`
								: value
						}</td></tr>`
				)
				.join("");

			const emailBody = `
    <p>Hi,</p>
    <p>A new form submission has arrived. Please see the details below.</p>
    <table>
    ${table}
    </table>
    `;

			await limiter.check(res, 10, "CACHE_TOKEN"); //requests per minute

			var params = {
				Source: "WMPCA Forms <forms@wmpca.org.au>",
				Destination: {
					ToAddresses: [targetEmail]
				},
				ReplyToAddresses: [targetEmail],
				Message: {
					Body: {
						Html: {
							Charset: "UTF-8",
							Data: emailBody
						}
					},
					Subject: {
						Charset: "UTF-8",
						Data: `[no-reply] [${type}] New form submission from ${message.name}`
					}
				}
			};
			new AWS.SES(SESConfig)
				.sendEmail(params)
				.promise()
				.then((sesRes) => {
					console.log(sesRes);
					res.status(200).json({ message: "Email sent" });
				});
		}
	} catch (err) {
		console.log(err);
		res.status(429).json({ error: "Rate limit exceeded" });
		res.end();
	}
}
