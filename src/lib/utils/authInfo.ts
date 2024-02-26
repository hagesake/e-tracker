import { cookies } from 'next/headers'
import { cache } from 'react'

import { lucia } from '@/auth'
import type { Session, User } from 'lucia'

// validateRequest will check for the session cookie, validate it, and set a new cookie if necessary.
// In Nextjs CSRF protection is handled by Nextjs when using server actions, if using route handlers shoul be implemented
export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) {
      return {
        user: null,
        session: null
      }
    }

    const result = await lucia.validateSession(sessionId)
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        )
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        )
      }
    } catch {}
    return result
  }
)

export const getUser = async () => (await validateRequest()).user
export const getSession = async () => (await validateRequest()).session
