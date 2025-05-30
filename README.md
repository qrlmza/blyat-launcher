# BlyatLauncher

A custom Minecraft launcher for the BlyatCraft modded server, built with Electron and modern web technologies.

## Features

- 🔒 Secure user authentication system
- 💾 Automatic modpack download and installation
- ⚙️ Customizable game settings (RAM, Java path)
- 👤 User profile management with Minecraft avatar integration
- 🎮 Server status monitoring
- 🌟 Modern glass-effect UI design

## Installation

1. Clone the repository:

```sh
git clone https://github.com/qrlmza/blyat-launcher.git
cd blyat-launcher
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file based on `.env.example` and configure your settings:

```sh
cp .env.example .env
```

4. Set up the MySQL database using the provided SQL files:

- users_table.sql
- user_sessions_table.sql
- updates_table.sql

## Development

Start the application in development mode:

```sh
npm start
```

## Built With

- [Electron](https://www.electronjs.org/) - Desktop application framework
- [Node.js](https://nodejs.org/) - Runtime environment
- [MySQL](https://www.mysql.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing

## Project Structure

```
src/
  ├── assets/        # Images and static assets
  ├── pages/         # HTML pages
  ├── auth.js        # Authentication logic
  ├── db.js         # Database connection
  ├── modpack.js    # Modpack management
  └── style.css     # Global styles
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Todo

See [TODO](TODO) file for planned features and improvements.
