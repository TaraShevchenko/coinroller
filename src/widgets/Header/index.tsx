import Image from 'next/image'

import { LogoutButton } from 'features/Auth/ui/LogoutButton'
import { LangSelector } from 'features/LangSelector'
import { ThemeSelector } from 'features/ThemeSelector'

import { Anchor } from 'shared/ui/Button'
import { Container } from 'shared/ui/Container'
import { cn } from 'shared/utils/cn'

import logo from './assets/LogoWithText.png'

export const Header = () => {
    return (
        <header>
            <Container className={cn('flex h-14 items-center justify-between')}>
                <div className={cn('flex items-center gap-5')}>
                    <Image className={cn('h-10 w-auto')} src={logo} alt={'logo'} priority={false} />
                    <nav>
                        <ul className={cn('flex')}>
                            <li>
                                <Anchor href={'dashboard'} variant={'link'} text={'Dashboard'} />
                            </li>
                            <li>
                                <Anchor href={'settings'} variant={'link'} text={'Settings'} />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cn('flex items-center gap-2')}>
                    <ThemeSelector />
                    <LangSelector />
                    <LogoutButton />
                </div>
            </Container>
        </header>
    )
}
