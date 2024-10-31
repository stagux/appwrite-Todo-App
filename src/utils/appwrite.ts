import { Client, Databases } from 'appwrite'

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67236d45000cac1b7c88')

export const databases = new Databases(client)