import { z } from 'zod'

import { Currencies, Currency, Sort, Source, Sources } from 'shared/types/enums'
import { PaginationPayloadScheme, PaginationResponseScheme } from 'shared/types/types'
import { type TableFilterOption } from 'shared/ui/Table'

export const AccountAddressRegex = /[a-zA-Z\d]{6}\*{6}[a-zA-Z\d]{4}/

export const NewAccountScheme = z.object({
    /*TODO: Add favorite field */
    source: Source,
    balance: z.number(),
    currency: Currency,
    address: z.string().refine((value) => AccountAddressRegex.test(value ?? ''), 'Address is incorrect'),
})

export const AccountScheme = z
    .object({
        id: z.string().uuid(),
        createdAt: z.date(),
        updatedAt: z.date(),
        createdById: z.string().uuid(),
    })
    .merge(NewAccountScheme)

export const AccountsScheme = z.array(AccountScheme)

//Todo: don't repeat optional
export const AccountsFiltersScheme = z
    .object({
        search: z.string().optional(),
        source: Sources.optional(),
        currency: Currencies.optional(),
        balanceSort: Sort.optional(),
        sourceSort: Sort.optional(),
        currencySort: Sort.optional(),
        addressSort: Sort.optional(),
    })
    .merge(PaginationPayloadScheme)

// export const AccountsTableCols = z.enum(['Address', 'Source', 'Currency', 'Income', 'Expense', 'Balance'])

// export const AccountsTableRows = z.enum(['Head', 'Total'])

// export const HiddenEntities = z.record(z.union([AccountsTableCols, AccountsTableRows]), z.boolean())

export const AccountsSettingsScheme = z.object({
    filters: AccountsFiltersScheme,
    pagination: PaginationResponseScheme.optional(),
})

export const AccountsResponseScheme = z.object({
    accounts: AccountsScheme,
    settings: AccountsSettingsScheme,
})

export type AccountsLoading = {
    loading: boolean
    tableSkeleton: boolean
    tableLoader: boolean
    filters: boolean
}

export type AccountsTableState = {
    loading: AccountsLoading
    accounts?: z.infer<typeof AccountsScheme>
    settings: z.infer<typeof AccountsSettingsScheme>

    enableLoading: (loading?: Partial<AccountsLoading>) => void
    disableLoading: () => void
    setAccountsAndSettings: (payload: z.infer<typeof AccountsResponseScheme>) => void

    updateSearch: (value?: string) => void
    updateSourceFilters: (value: TableFilterOption[]) => void
    updateCurrencyFilters: (value: TableFilterOption[]) => void
    clearSourceFilters: () => void
    clearCurrencyFilters: () => void
    updatePagination: (value: z.infer<typeof PaginationPayloadScheme>) => void
}
