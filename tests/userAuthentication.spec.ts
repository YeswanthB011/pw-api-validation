import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test("CRUD Operation : GET Method", async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/1');
    const responseBody = await response.json();
    //console.log(responseBody);
    expect(response.status()).toEqual(200);
    expect(responseBody.id).toEqual(1);
    expect(responseBody.title).toBe('Essence Mascara Lash Princess');

})

test("CRUD Operation : POST Methos", async ({ request }) => {
    const response = await request.post('https://dummyjson.com/auth/login', {
        data: {
            "username": "charlottem",
            "password": "charlottempass"
        }
    });
    const responseBody = await response.json()
    console.log(responseBody)

})