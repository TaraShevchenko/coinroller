import { AuthCard, LoginForm } from 'features/Auth'

import { getServerAuthSession } from 'shared/lib/nextAuth'

export const metadata = {
    title: 'Login - Coinroller',
    description: 'Keep your coins',
}

export default async function Login() {
    const session = await getServerAuthSession()
    console.log(session)
    return (
        <AuthCard title={'Login Account'} subtitle={'Sign in to your account using the options below!'}>
            <LoginForm />
        </AuthCard>
    )
}
