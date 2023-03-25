import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { PAYLOAD_API_KEY } from '$env/static/private';

const CMS_URL = 'https://payload-character-sheet-production.up.railway.app';
// const CMS_URL = 'http://localhost:3002';

export const load = (async ({ fetch, params }) => {
	// TODO: Character ID from URL
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
	setTheme: async ({ url, cookies, params }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo ?? params.lang);
	}
};
