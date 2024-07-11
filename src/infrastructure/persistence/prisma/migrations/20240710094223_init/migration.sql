/*
  Warnings:

  - Made the column `age` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "age" SET NOT NULL;
