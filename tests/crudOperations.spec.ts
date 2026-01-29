import { test, expect } from '@playwright/test';

test("CRUD Operation : GET Method", async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/1');
    const responseBody = await response.json();
    //console.log(responseBody);
    expect(response.status()).toEqual(200);
    expect(responseBody.id).toEqual(1);
    expect(responseBody.title).toBe('Essence Mascara Lash Princess');

})

test("CRUD Operation : POST Method", async ({ request }) => {
    const response = await request.post('https://dummyjson.com/auth/login', {
        data: {
            "username": "charlottem",
            "password": "charlottempass"
        }
    });
    const responseBody = await response.json()
    console.log(responseBody)

})

test("CRUD Operation : DELETE Method", async ({ request }) => {

    const response = await request.delete('https://dummyjson.com/cart/1');
    const responseBody = await response.json();

    const date = new Date().toISOString().split("T")[0];
    expect(responseBody.deletedOn).toContain(date);

})

test("CRUD Operation : UPDATE Method", async ({ request }) => {
    const response = await request.patch('https://dummyjson.com/carts/1', {
        data:{"products": [
      {
        "id": 1,
        "quantity": 1
      }
]}
    })

    const responseBody=await response.json()
    //console.log(responseBody)
    expect(responseBody.totalProducts && responseBody.totalQuantity).toBe(1)
})