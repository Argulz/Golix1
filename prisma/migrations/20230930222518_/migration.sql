/*
  Warnings:

  - You are about to drop the column `userID` on the `todo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `todo_userID_key` ON `todo`;

-- AlterTable
ALTER TABLE `todo` DROP COLUMN `userID`;
