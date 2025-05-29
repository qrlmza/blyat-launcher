CREATE TABLE `s25_blyatlauncher`.`user_sessions` (
    `id` INT(12) NOT NULL AUTO_INCREMENT,
    `user_id` INT(12) NOT NULL,
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME,
    `duration` INT DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB;
