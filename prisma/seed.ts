import { PrismaClient, TransactionType } from "../src/generated/prisma/client";
import {PrismaPg} from "@prisma/adapter-pg"

import "dotenv/config"

const connectionString = process.env.DATABASE_URL

const adapter = new PrismaPg({connectionString})
export const prisma = new PrismaClient({adapter});

const defaultCategories: { name: string; type: TransactionType; icon: string }[] = [
  // Expense categories
  { name: "Housing",        type: "EXPENSE", icon: "house" },
  { name: "Groceries",      type: "EXPENSE", icon: "shopping-cart" },
  { name: "Transport",      type: "EXPENSE", icon: "car" },
  { name: "Utilities",      type: "EXPENSE", icon: "zap" },
  { name: "Health",         type: "EXPENSE", icon: "heart-pulse" },
  { name: "Dining Out",     type: "EXPENSE", icon: "utensils" },
  { name: "Entertainment",  type: "EXPENSE", icon: "tv" },
  { name: "Shopping",       type: "EXPENSE", icon: "bag" },
  { name: "Education",      type: "EXPENSE", icon: "graduation-cap" },
  { name: "Travel",         type: "EXPENSE", icon: "plane" },
  { name: "Subscriptions",  type: "EXPENSE", icon: "repeat" },
  { name: "Personal Care",  type: "EXPENSE", icon: "sparkles" },
  { name: "Other Expense",  type: "EXPENSE", icon: "circle-ellipsis" },

  // Income categories
  { name: "Salary",         type: "INCOME", icon: "briefcase" },
  { name: "Freelance",      type: "INCOME", icon: "laptop" },
  { name: "Investments",    type: "INCOME", icon: "trending-up" },
  { name: "Gifts",          type: "INCOME", icon: "gift" },
  { name: "Other Income",   type: "INCOME", icon: "circle-ellipsis" },
];

async function main() {
    console.log("Seeding start")

    for (const category of defaultCategories) {
        await prisma.category.upsert({
            where: {
                name_isDefault: {
                    name: category.name,
                    isDefault: true
                }
            },
            update: {},
            create: {
                userId: null,
                isDefault: true,
                ...category
            }
        });
    }

    console.log("Done.")
}

main()
    .catch((e) => {console.error(e); process.exit(1)})
    .finally(() => prisma.$disconnect());