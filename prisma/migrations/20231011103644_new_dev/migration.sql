-- DropIndex
DROP INDEX `todo_userID_fkey` ON `todo`;

-- AddForeignKey
ALTER TABLE `todo` ADD CONSTRAINT `todo_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_tagsTotodo` ADD CONSTRAINT `_tagsTotodo_A_fkey` FOREIGN KEY (`A`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_tagsTotodo` ADD CONSTRAINT `_tagsTotodo_B_fkey` FOREIGN KEY (`B`) REFERENCES `todo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
