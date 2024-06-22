import sanity from "@sanity/client";

const client = sanity({
	projectId: process.env.SANITY_PROJECT_ID || "",
	dataset: "production",
	token: process.env.SANITY_ACCESS_TOKEN
});

export default async (req, res) => {
	const doc = {
		_type: "submission",
		datetime: new Date(),
		formId: req.body?.formId,
		values: JSON.stringify(req.body)
	};

	client.create(doc).then((result) => {
		res.status(200).json({ outcome: "Form was submitted", result });
	});
};
