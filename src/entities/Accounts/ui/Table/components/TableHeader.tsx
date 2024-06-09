import { TableHeader as SharedTableHeader, TableHead, TableRow } from 'shared/ui/Table'

export const TableHeader = () => {
    return (
        <SharedTableHeader>
            <TableRow canHovered={false}>
                <TableHead text={'Address'} />
                <TableHead text={'Source'} />
                <TableHead text={'Currency'} />
                <TableHead text={'Income'} />
                <TableHead text={'Expense'} />
                <TableHead text={'Balance'} />
            </TableRow>
        </SharedTableHeader>
    )
}
