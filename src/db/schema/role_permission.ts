import {
  foreignKey,
  index,
  integer,
  pgTable,
  primaryKey,
  timestamp,
} from 'drizzle-orm/pg-core';

import { permission } from './permission';
import { role } from './role';
import { user } from './user';

export const rolePermission = pgTable(
  'role_permission',
  {
    roleId: integer('role_id').notNull(),
    permissionId: integer('permission_id').notNull(),
    grantedAt: timestamp('granted_at').defaultNow().notNull(),
    grantedBy: integer(),
  },
  (table) => [
    primaryKey({ columns: [table.roleId, table.permissionId] }),
    foreignKey({
      name: 'role_id',
      columns: [table.roleId],
      foreignColumns: [role.id],
    }).onDelete('cascade'),
    foreignKey({
      name: 'permission_id',
      columns: [table.permissionId],
      foreignColumns: [permission.id],
    }).onDelete('cascade'),
    foreignKey({
      name: 'granted_by',
      columns: [table.grantedBy],
      foreignColumns: [user.id],
    }).onDelete('set null'),
    index('index_role_permission_role_id').on(table.roleId),
    index('index_role_permission_permission_id').on(table.permissionId),
  ],
);
