CREATE TABLE
    `s25_blyatlauncher`.`users` (
        `id` INT (12) NOT NULL AUTO_INCREMENT,
        `username` VARCHAR(24) NOT NULL,
        `password` VARCHAR(100) NOT NULL,
        `email` VARCHAR(254) NOT NULL,
        `created_at` DATE NOT NULL,
        `last_connect` DATE NOT NULL,
        `is_admin` BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;