# CraftBoilerplate

Table of Contents
=================
* [New Project Setup](#new-project-setup)
* [Miscellaneous Information](#miscellaneous-information)
* [Project Specific Information](#project-specific-information)
* [About Craft CMS](#about-craft-cms)


## Node installation

CraftCMS project CraftBoilerplate utilize `nodejs`, `npm`, and `laravel mix`, in order to run SASS processing, javascript minifcation, and autoprefixing.

Find out how to download and install `node` for your environment here (which includes `npm`): https://nodejs.org/en/download/


# New Project Setup

Follow these instructions when you need to start a brand new CraftCMS from scratch, utilizing this bootstrap project as a foundation and a starting point.

## New Project Setup
1. Create a new directory for the new project and unzip the craftboilerplate archive into this directory.
1. Open up a terminal and change the directory where you unzipped the archive above.
1. Run `$ composer install --no-scripts`, which will download Craft and all associated plugins.
1. Run `$ composer run-script post-create-project-cmd`, which will guide you through the "CraftCMS Initialization" steps that ultimately create an .env file and set your security key.
1. Add a new site/database and make sure a database is available for Craft to be installed into.
1. Run `$ ./craft setup` and follow the instructions, which will fill out the rest of the fields in your .env file and set up the database for first-time use.
1. Run `$ npm install`, which will install all Node dependencies for this project.
1. Access your control panel at `/admin` and login using the credentials you created during installation. Browse to Settings -> Plugins, and install each of the plugins listed.

# Miscellaneous Information
### File/Directory Structure

This CraftCMS project expects certain files to be in specific locations in order to be used.

* [assets/](assets/) - Parent directory where javascripts/sass files are stored
  * [assets/javascript/](assets/javascript/) - Your project's javascript files go here.
  * [assets/sass/](assets/sass/) - Your project's SASS files go here ([Tailwind CSS](https://github.com/tailwindcss/tailwindcss) by default).
* [config/](config/) - Parent directory which holds configuration files
  * [config/db.php](config/db.php) - Database configuration, but mostly pulled from `.env`
  * [config/general.php](config/general.php) - General CraftCMS configuration file
  * [config/license.key](config/license.key) - License key that gets generated upon site bootstrap.
  * [config/project.yaml](config/project.yaml) - Project Config settings to help sync your fields/sections/settings across environments.
* [modules/](modules/) - Holds any custom Yii modules you might be using
* [public/](public/) - Project's site root according to your webserver
  * [public/images/](public/images/) - Project's non-asset images are stored here (git controlled)
  * [public/index.php](public/index.php) - Root PHP file read by the webserver
  * [public/uploads/](public/uploads/) - Parent directory for all uploaded assets (not git controlled)
  * [public/assets/](public/assets/) - **Compiled** assets (js/sass/etc) get put here (not git controlled)
* [scripts/](scripts/) - Utility shell scripts to perform various functions
* [storage/](storage/) - CraftCMS dynamically generated files, such as logs and backups.
* [templates/](templates/) - The location for all Twig templates
* [.env.example](.env.example) - Example `.env` file
* [composer.json](composer.json) - PHP Composer configuration file
* [composer.lock](composer.lock) - PHP Composer package information lock file
* [craft](craft) - CraftCMS PHP console application
* [craft.bat](craft.bat) - CraftCMS console loader for Windows
* [favicon.js](favicon.js) - Automated utility for saving favicon and other files like that
* [tailwind.config.js](tailwind.config.js) - Tailwind css configuration
* [webpack.mix.js](webpack.mix.js) - Laravel Mix configuration (sass/js compilation, etc)
* [package.json](package.json) - npm packages configuration file
* [package-lock.json](package-lock.json) - npm packages information lock file

More detailed information about the default structure can be found here: https://docs.craftcms.com/v3/directory-structure.html

### .env
 - Database and environment name are set in the .env file when you craft setup
 - This file is not tracked in git, helping to keep passwords more secure

### [Nginx](https://github.com/nystudio107/nginx-craft)
 - My development environment is setup using apache which I find a tad simpler to work with locally
 - Refer to this repo if the staging/prod environment is not using our setup scripts
 - It may be a little heavy handed so an alternative with the least amount of required bits is [here](https://craftcms.stackexchange.com/a/980/107)

### NPM/Laravel Mix
 - Laravel Mix makes webpack implementation very easy and has a fairly basic setup for Sass and JS merging

### Database
 - No database is included.
 - Add a blank database to your local host and then fill in the details of that when running `./craft setup`
 - Go to yourdomain.test/admin and craft will install a new version into that empty database

### SASS
 - [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) is included in the project

### [Craft Scripts](https://github.com/nystudio107/craft-scripts)
 - Use these scripts to pull down db and assets
 - Change the settings in the `/scripts/.env.sh` file to match your local machine and the remote server

<hr style="margin: 80px 0;">

<a href="https://craftcms.com/" rel="noopener" target="_blank"><img width="247" height="60" src="https://craftcms.com/craftcms.svg" alt="Craft CMS"></a>

<br>

[Craft](https://craftcms.com/) is a flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.

In technical terms, it’s a self-hosted PHP 8 application backed by a MySQL or Postgres database. Read more in the [official documentation](https://craftcms.com/docs).

__Psst!__ Looking for the Craft source code? Need to file a bug report or feature request? Check out [`craftcms/cms`](https://github.com/craftcms/cms).

---

:postal_horn: **If you just heard about Craft:** Take a feature tour on [our website](https://craftcms.com/features)—then spin up a [demo project](https://craftcms.com/demo) to try them out for yourself.

:construction_worker_woman: **If you are eager to start building:** You’re in exactly the right place!

## Getting Started

This repository is a bare-bones [Composer](https://getcomposer.org/) “project,” intended for use with the `composer create-project` command. It contains only the folders and files absolutely required to run Craft.



## Resources

Craft comes with a ton of official and community [resources](https://github.com/craftcms/cms#resources).
