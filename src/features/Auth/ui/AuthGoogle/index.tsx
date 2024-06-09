'use client'

import React from 'react'

import { signIn } from 'next-auth/react'

import { Button } from 'shared/ui/Button'
import { Google } from 'shared/ui/Icons'

export const AuthGoogle = async () => {
    const handleSignIn = async () => {
        await signIn('google', { callbackUrl: '/accounts' })
    }

    return <Button onClick={handleSignIn} variant="outline" text={'Google'} icon={Google} />
}
