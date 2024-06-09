import type z from 'zod'

import { type AccountsFiltersScheme } from 'entities/Accounts'

export const DEFAULT_SKIP = 0
export const DEFAULT_TAKE = 10

export const DEFAULT_FILTERS: z.infer<typeof AccountsFiltersScheme> = {
    take: DEFAULT_TAKE,
    skip: DEFAULT_SKIP,
}
