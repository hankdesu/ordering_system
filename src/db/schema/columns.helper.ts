import { boolean, serial, timestamp } from 'drizzle-orm/pg-core';

export const timestamps = {
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
};

export const id = serial().primaryKey();

export const isActive = boolean('is_active').default(true);
