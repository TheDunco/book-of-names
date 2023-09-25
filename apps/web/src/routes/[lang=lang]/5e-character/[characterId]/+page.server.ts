import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { PAYLOAD_API_KEY } from '$env/static/private';
import { CMS_URL } from '$env/static/private';

export const load = (async ({ fetch, params }) => {
	const id = params.characterId;
	const res = await fetch(`${CMS_URL}/api/fifth-edition-character/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${PAYLOAD_API_KEY}`
		}
	});

	if (res.ok) {
		const character = await res.json();
		return {
			props: {
				character
			},
			appVersion: 'v0.0.1'
		};
	}

	return {
		status: res.status,
		error: new Error(await res.text()),
		appVersion: 'v0.0.1'
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	NSD: async (event) => {
		console.log('NSD', event);
	}
};
