import { test, expect } from '@playwright/test';

// test.beforeEach(async({page})=>{

//     await page.goto()
// })

test('create new article', async ({ request }) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data:
        {
            "article": {
                "title": "new article",
                "description": "test article description",
                "body": "test article body",
                "tagList": []
            }
        }
    })

    const responsebody = await response.json()
    expect(response.status()).toEqual(200)




})
test('Mock the request of tag and article', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/')
    await page.route('*/**/api/tags*', async route => {
        const tags = {
            "tags": [
                "Automation",
                "Testing"
            ]
        }
        await route.fulfill({ body: JSON.stringify(tags) })
        body: JSON.stringify(tags)
    })
    await expect(page.locator('[class="logo-font"]').first()).toHaveText('conduit')

    // Wait for tags to be visible
    await page.waitForSelector('.tag-default.tag-pill');

    const tags = await page.locator('.tag-default.tag-pill').allTextContents();
    for (const tag of tags) {
        console.log(tag);
    }

})
test('Delete the articles', async ({ page }) => {

})
