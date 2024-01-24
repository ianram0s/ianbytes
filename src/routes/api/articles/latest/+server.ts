import type { RequestHandler } from './$types';
import { DEVTO_API_KEY } from '$env/static/private';
import { error, type NumericRange } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch, url }) => {
    try {
        const validParams = [
            'page',
            'per_page'
        ];

        let apiUrl = 'https://dev.to/api/articles/latest';
        let isFirstParam = true;

        validParams.forEach((param) => {
            const value = url.searchParams.get(param);
            if (value) {
                apiUrl += `${isFirstParam ? '?' : '&'}${param}=${value}`;
                isFirstParam = false;
            }
        });

        const response = await fetch(apiUrl, {
            headers: {
                'api-key': DEVTO_API_KEY
            },
        });

        if (response.ok) {
            const jsonData = await response.json();
            
            return new Response(JSON.stringify(jsonData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        } else {
            
            return error(response.status as NumericRange<400, 599>);
        }
    
    } catch (e) {
        
        return error(500, 'Internal Server Error');
    }
};
