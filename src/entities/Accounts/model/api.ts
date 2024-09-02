import { Prisma } from '@prisma/client'
import { type z } from 'zod'

import { createTRPCRouter, protectedProcedure } from 'shared/lib/trpc/trpc'
import { sleep } from 'shared/utils/sleep'

import { DEFAULT_SKIP, DEFAULT_TAKE } from './const'
import { AccountsFiltersScheme, type AccountsResponseScheme, NewAccountScheme } from './types'

export const accountRouter = createTRPCRouter({
    getAccounts: protectedProcedure.input(AccountsFiltersScheme).query(async ({ ctx, input }) => {
        const { take = DEFAULT_TAKE, skip = DEFAULT_SKIP, ...filters } = input ?? {}

        const where = {
            AND: [
                {
                    OR: [
                        // {
                        //     balance: filters?.search
                        //         ? {
                        //               contains: filters.search.toLowerCase(),
                        //               mode: 'insensitive',
                        //           }
                        //         : {},
                        // },
                        {
                            address: {
                                contains: filters?.search?.toLowerCase(),
                                mode: Prisma.QueryMode.insensitive,
                            },
                        },
                    ],
                },
                { source: { in: filters?.source } },
                { currency: { in: filters?.currency } },
            ],
        }

        const orderBy = {
            balance: filters?.balanceSort,
            source: filters?.sourceSort,
            currency: filters?.currencySort,
            address: filters?.addressSort,
        }

        const accounts = await ctx.db.billingAccount.findMany({
            where,
            orderBy,
            take,
            skip,
        })

        const totalCount = await ctx.db.billingAccount.count({ where })

        const result: z.infer<typeof AccountsResponseScheme> = {
            accounts,
            settings: {
                filters: input,
                pagination: {
                    page: Math.floor(skip / take) + 1,
                    perPage: take,
                    totalItems: totalCount,
                    totalPages: Math.max(Math.ceil(totalCount / take), 1),
                },
            },
        }
        // TODO: Delete sleep
        // await sleep(2000)

        return result
    }),

    addAccount: protectedProcedure.input(NewAccountScheme).mutation(({ ctx, input }) => {
        return ctx.db.billingAccount.create({
            data: {
                ...input,
                createdById: ctx.session.user.id,
            },
        })
    }),
})
