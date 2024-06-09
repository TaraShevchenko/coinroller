import { Montserrat } from 'next/font/google'

import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import type { ThemeConfig } from 'storybook-addon-data-theme-switcher'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' })

export const globalTypes = {
    dataThemes: {
        defaultValue: {
            list: [
                { name: 'Light', dataTheme: 'light', color: 'hsl(0 0% 100%)' },
                { name: 'Dark', dataTheme: 'dark', color: 'hsl(240 10% 3.9%)' },
            ],
            dataAttribute: 'data-theme',
            clearable: true,
        } satisfies ThemeConfig,
    },
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: themes.dark,
        },
        layout: 'centered',
        backgrounds: {
            default: 'Dark',
            values: [
                {
                    name: 'Light',
                    value: 'hsl(0 0% 100%)',
                },
                {
                    name: 'Dark',
                    value: 'hsl(240 10% 3.9%)',
                },
            ],
        },
    },
    decorators: [
        (Story) => (
            <main className={montserrat.variable}>
                <Story />
            </main>
        ),
    ],
}

export default preview
