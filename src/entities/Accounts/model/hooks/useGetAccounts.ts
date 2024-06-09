'use client'

import { useEffect } from 'react'

import { api } from 'shared/lib/trpc/client'

import { useAccountsTableStore } from '../state'

export const useGetAccounts = () => {
    const filters = useAccountsTableStore((state) => state.settings.filters)

    const { data: accountsResponse, isFetched } = api.account.getAccounts.useQuery(filters)

    const setAccounts = useAccountsTableStore((state) => state.setAccountsAndSettings)

    useEffect(() => {
        if (isFetched && accountsResponse) {
            setAccounts(accountsResponse)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetched])
}
