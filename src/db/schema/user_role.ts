import {
  foreignKey,
  index,
  integer,
  pgTable,
  primaryKey,
  timestamp,
} from 'drizzle-orm/pg-core';

import { role } from './role';
import { user } from './user';

export const userRole = pgTable(
  'user_role',
  {
    userId: integer('user_id').notNull(),
    roleId: integer('role_id').notNull(),
    assignedAt: timestamp('assigned_at').defaultNow().notNull(),
    assignedBy: integer('assigned_by'),
  },
  (table) => [
    primaryKey({ columns: [table.userId, table.roleId] }),
    foreignKey({
      name: 'user_id',
      columns: [table.userId],
      foreignColumns: [user.id],
    }).onDelete('cascade'),
    foreignKey({
      name: 'role_id',
      columns: [table.roleId],
      foreignColumns: [role.id],
    }).onDelete('cascade'),
    foreignKey({
      name: 'assigned_by',
      columns: [table.assignedBy],
      foreignColumns: [user.id],
    }).onDelete('set null'),
    index('index_user_role_user_id').on(table.userId),
    index('index_user_role_role_id').on(table.roleId),
  ],
);
