import { pgTable, text, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

import { id, isActive, timestamps } from './columns.helper';

export const role = pgTable(
  'role',
  {
    id,
    name: varchar({ length: 50 }).notNull().unique(),
    description: text(),
    isActive,
    ...timestamps,
  },
  (table) => [uniqueIndex('index_role_name').on(table.name)],
);
