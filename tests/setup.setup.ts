import { test as setup } from '@playwright/test'

setup('authentication', async ({ page }) => {
    const authFile='.auth/user.json'

    //login auth
    await page.goto("https://conduit.bondaracademy.com/")
    await page.getByText('Sign in').click()
    await page.getByPlaceholder('Email').fill('tobirama@gmail.com')
    await page.getByPlaceholder('Password').fill("Tobirama")
    await page.getByRole('button').click()

    await page.context().storageState({path: authFile})

})