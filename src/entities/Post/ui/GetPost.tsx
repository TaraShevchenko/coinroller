'use client'

import { api } from 'shared/lib/trpc/client'

export function GetPost() {
    const { data, isLoading } = api.post.getLatest.useQuery()
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {data ? (
                        <p className="truncate">Your most recent post: {data.name}</p>
                    ) : (
                        <p>You have no posts yet.</p>
                    )}
                </>
            )}
        </div>
    )
}
