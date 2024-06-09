import { useAccountsTableStore } from 'entities/Accounts/model/state'

import { PaginationLimit } from 'shared/types/enums'
import { Pagination as SharedPagination } from 'shared/ui/Table'

export const Pagination = () => {
    const pagination = useAccountsTableStore((state) => state.settings.pagination)
    const updatePagination = useAccountsTableStore((state) => state.updatePagination)
    const onPerPageChange = (unsafeLimit: string) => {
        try {
            const take = PaginationLimit.parse(+unsafeLimit)
            updatePagination({ take })
        } catch (err) {
            console.error(err)
        }
    }

    const { page, perPage, totalItems } = pagination ?? {}
    const skip = page && perPage ? page * perPage - perPage : 0
    const paginationControls = {
        onFirstPage: () => updatePagination({ skip: 0 }),
        onPrevPage: () => updatePagination({ skip: skip - (perPage ?? 0) }),
        onNextPage: () => updatePagination({ skip: skip + (perPage ?? 0) }),
        onLastPage: () =>
            updatePagination({ skip: totalItems && perPage ? Math.floor(totalItems / perPage) * perPage : 0 }),
    }

    return (
        <>
            {!!pagination && (
                <SharedPagination
                    onPerPageChange={onPerPageChange}
                    paginationControls={paginationControls}
                    {...pagination}
                />
            )}
        </>
    )
}
