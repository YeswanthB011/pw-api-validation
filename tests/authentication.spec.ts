import { test, expect } from '@playwright/test';

test('create new article', async ({ page, request }) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data:
        {
            "article": {
                "title": "new article",
                "description": "test article description",
                "body": "test article body",
                "tagList": []
            }
        },
        headers: {
            Authorization: ""
        }
    })

    const responsebody = await response.json()
    expect(response.status()).toEqual(200)

})
test('Mock the request of tag and article', async ({ page }) => {

    await page.route('https://conduit-api.bondaracademy.com/api/tags/', async route => {
        const tags = {
            "tags": [
                "Automation",
                "Testing"
            ]
        }
        await route.fulfill({
            body: JSON.stringify(tags)
        })
    })

    await page.goto('https://conduit-api.bondaracademy.com/')
    await page.pause()

})
test('Delete the articles', async ({ page }) => {

})
