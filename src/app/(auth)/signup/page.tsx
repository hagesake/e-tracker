import { validateRequest } from '@/lib/utils/authInfo'
import { redirect } from 'next/navigation'

import { SignUpForm } from '@/components/pages/signup'

const SigUpPage = async () => {
  const { user } = await validateRequest()
  if (user) {
    return redirect('/')
  }

  return (
    <>
      <h1>Create an account</h1>

      <SignUpForm />
    </>
  )
}

export default SigUpPage
