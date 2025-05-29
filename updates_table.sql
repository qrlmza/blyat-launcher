CREATE TABLE
    `s25_blyatlauncher`.`updates` (
        `id` INT (12) NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(100) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `date` DATE NOT NULL,
        `posted_by` VARCHAR(24) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;