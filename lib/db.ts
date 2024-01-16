import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}
// Uses globalThis to make sure that the PrismaClient is only instantiated once
// Avdoids multiple instances of PrismaClient in development
// Because Next.js uses Fast Refresh, a new instance of PrismaClient would be created on every hot reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;