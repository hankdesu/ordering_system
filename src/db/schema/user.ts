import { pgTable, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

import { id, isActive, timestamps } from './columns.helper';

export const user = pgTable(
  'user',
  {
    id,
    name: varchar({ length: 30 }).notNull(),
    email: varchar().notNull().unique(),
    password: varchar().notNull(),
    isActive,
    ...timestamps,
  },
  (table) => [uniqueIndex('index_user_email').on(table.email)],
);
