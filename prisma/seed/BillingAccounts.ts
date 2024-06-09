/* eslint-disable @typescript-eslint/no-misused-promises */
import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

import { AccountAddressRegex } from 'entities/Accounts'

import { Currency, Source } from 'shared/types/enums'

const prisma = new PrismaClient()

function parseArgs() {
    const args = process.argv.slice(2)
    const params: Record<string, string | number> = {}

    args.forEach((arg) => {
        const [key, value] = arg.split('=')
        if (key && value) {
            params[key] = isNaN(Number(value)) ? value : Number(value)
        }
    })

    return params
}

async function seedingBillingAccounts() {
    const { user: userEmail, count } = parseArgs()

    const user = await prisma.user.findUnique({
        where: {
            email: userEmail as string,
        },
    })

    if (!user) {
        console.error(`User with email ${userEmail} not found`)
        return
    }

    for (let i = 0; i < (count ? +count : 0); i++) {
        await prisma.billingAccount.create({
            data: {
                balance: faker.number.int({ min: 0, max: 10000 }),
                address: faker.helpers.fromRegExp(AccountAddressRegex),
                currency: Currency.enum[faker.helpers.arrayElement(Currency.options)],
                source: Source.enum[faker.helpers.arrayElement(Source.options)],
                createdBy: {
                    connect: { id: user.id },
                },
            },
        })
    }

    console.log(`Created ${count} BillingAccounts for user with email ${userEmail}`)
}

seedingBillingAccounts()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
