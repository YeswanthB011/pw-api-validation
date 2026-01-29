import { test as setup } from '@playwright/test'
import user from '../.auth/user.json'
import fs from 'fs'

// Use ignoreHTTPSErrors for all tests in this file
setup.use({ ignoreHTTPSErrors: true });

setup('authentication', async ({ request }) => {
    const authFile = '.auth/user.json'

    //login auth
    // await page.goto("https://conduit.bondaracademy.com/")
    // await page.getByText('Sign in').click()
    // await page.getByPlaceholder('Email').fill('tobirama@gmail.com')
    // await page.getByPlaceholder('Password').fill("Tobirama")
    // await page.getByRole('button').click()
    // await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags')
    // await page.context().storageState({path: authFile})

    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data:
            { "user": { "email": "Tobirama@gmail.com", "password": "Tobirama" } }
    })

    const responseBody = await response.json();
    const accessToken = responseBody.user.token
    user.origins[0].localStorage[0].value = accessToken
    fs.writeFileSync(authFile, JSON.stringify(user))

    //if access token expires call refresh token dont try to relogin in automation we found usign 401 response

    process.env['ACCESS_TOKEN'] = accessToken
})