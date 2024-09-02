import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { type AccountsTableState } from 'entities/Accounts'
import { DEFAULT_FILTERS } from 'entities/Accounts/model/const'

import { Currencies, Sources } from 'shared/types/enums'
import { PaginationPayloadScheme } from 'shared/types/types'

export const useAccountsTableStore = create<AccountsTableState>()(
    devtools(
        immer((set, get) => ({
            settings: { filters: DEFAULT_FILTERS },
            loading: {
                loading: true,
                tableSkeleton: true,
                tableLoader: false,
                filters: true,
                pagination: true,
            },
            enableLoading: (loading) => {
                set((state) => {
                    state.loading = { ...state.loading, loading: true, ...loading }
                })
            },
            disableLoading: () => {
                set((state) => {
                    state.loading = {
                        loading: false,
                        tableSkeleton: false,
                        tableLoader: false,
                        filters: false,
                    }
                })
            },
            setAccountsAndSettings: ({ accounts, settings }) => {
                set((state) => {
                    state.accounts = accounts
                    state.settings = settings
                })
                get().disableLoading()
            },

            updateSearch: (searchValue = '') => {
                get().enableLoading({ tableLoader: true })
                set((state) => {
                    if (state.accounts) {
                        state.accounts = state.accounts.filter((account) =>
                            account.address.toLowerCase().includes(searchValue.toLowerCase()),
                        )
                    }
                    state.settings.filters.search = searchValue
                })
            },
            updateSourceFilters: (tableFilters) => {
                get().enableLoading({ tableLoader: true })
                set((state) => {
                    try {
                        const unsafeSource = tableFilters.filter(({ isActive }) => isActive).map(({ value }) => value)
                        state.settings.filters.source = Sources.parse(unsafeSource)
                    } catch (e) {
                        console.error(
                            {
                                path: 'src/entities/Accounts/model/state.ts',
                                functionName: 'updateSourceFilters',
                            },
                            e,
                        )
                    }
                })
            },
            updateCurrencyFilters: (tableFilters) => {
                get().enableLoading({ tableLoader: true })
                set((state) => {
                    try {
                        const unsafeCurrency = tableFilters.filter(({ isActive }) => isActive).map(({ value }) => value)
                        state.settings.filters.currency = Currencies.parse(unsafeCurrency)
                    } catch (e) {
                        console.error(
                            {
                                path: 'src/entities/Accounts/model/state.ts',
                                functionName: 'updateCurrencyFilters',
                            },
                            e,
                        )
                    }
                })
            },
            clearSourceFilters: () => {
                get().enableLoading({ tableSkeleton: true })
                set((state) => {
                    state.settings.filters.source = undefined
                })
            },
            clearCurrencyFilters: () => {
                get().enableLoading({ tableSkeleton: true })
                set((state) => {
                    state.settings.filters.currency = undefined
                })
            },
            updatePagination: (pagination) => {
                get().enableLoading({ tableSkeleton: true })
                set((state) => {
                    try {
                        state.settings.filters = {
                            ...state.settings.filters,
                            ...PaginationPayloadScheme.parse(pagination),
                        }
                    } catch (e) {
                        console.error(
                            {
                                path: 'src/entities/Accounts/model/state.ts',
                                functionName: 'updatePagination',
                            },
                            e,
                        )
                    }
                })
            },
        })),
    ),
)
