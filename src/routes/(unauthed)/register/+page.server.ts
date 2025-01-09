import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData()) as {
      email: string
      password: string
      passwordConfirm: string
    }

    try {
      await locals.pb.collection('users').create(data)
    } catch (e) {
      console.error(e)
      throw e
    }

    redirect(303, '/')
  },
}
