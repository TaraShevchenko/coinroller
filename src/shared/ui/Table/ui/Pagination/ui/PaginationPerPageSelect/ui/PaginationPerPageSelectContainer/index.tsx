import { type FC } from 'react'

import { type Child } from 'shared/types/types'
import { Text } from 'shared/ui/Text'

export const PaginationPerPageSelectContainer: FC<Child> = ({ children }) => (
    <div className="flex items-center space-x-2">
        <Text text={'Rows per page'} variant={'bold'} />
        {children}
    </div>
)
