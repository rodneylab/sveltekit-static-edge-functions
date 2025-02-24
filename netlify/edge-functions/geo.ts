import { Context } from 'https://edge.netlify.com';

export default async (_request: Request, context: Context) => {
	console.log('In edge function');

	const {
		ip,
		geo: {
			city,
			country: { name: country },
		},
	} = context;

	return Response.json({ ip, city, country });
};
