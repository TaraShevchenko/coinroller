import { type FC } from 'react'

import { type Child } from 'shared/types/types'
import { cn } from 'shared/utils/cn'

export const PaginationControlsContainer: FC<Child> = ({ children }) => {
    return <div className={cn('flex items-center space-x-6 lg:space-x-8')}>{children}</div>
}
