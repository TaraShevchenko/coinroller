import { TableBodyLoading } from 'entities/Accounts/ui/Table/components/TableBodyLoading'

import { PaginationLoading } from 'shared/ui/Table'

import { TableHeader } from './components/TableHeader'
import { TableWrapper } from './components/TableWrapper'

const TableLoading = () => {
    return (
        <>
            <TableWrapper>
                <TableHeader />
                <TableBodyLoading />
            </TableWrapper>
            <PaginationLoading />
        </>
    )
}

export default TableLoading
