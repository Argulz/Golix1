/*
  Warnings:

  - You are about to drop the `_tagstotodo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `todo_userID_fkey` ON `todo`;

-- DropTable
DROP TABLE `_tagstotodo`;

-- DropTable
DROP TABLE `tags`;

-- AddForeignKey
ALTER TABLE `todo` ADD CONSTRAINT `todo_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
