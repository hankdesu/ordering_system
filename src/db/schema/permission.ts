import {
  index,
  pgTable,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import { id, timestamps } from './columns.helper';

export const permission = pgTable(
  'permission',
  {
    id,
    name: varchar({ length: 50 }).notNull().unique(),
    resource: varchar().notNull(),
    action: varchar().notNull(),
    description: text(),
    ...timestamps,
  },
  (table) => [
    index('index_permission_resource').on(table.resource),
    uniqueIndex('index_permission_name').on(table.name),
    uniqueIndex('index_permission_resource_action').on(table.resource, table.action),
  ],
);
