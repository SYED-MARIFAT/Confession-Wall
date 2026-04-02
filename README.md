<<<<<<< HEAD
# 🎭 Confession Wall

A colorful, anonymous confession wall website where users can share their thoughts, like confessions, and delete them.

## Features ✨

- 🌈 **Colorful & Playful Design** - Modern gradient UI with smooth animations
- 💬 **Anonymous Confessions** - Share your deepest thoughts anonymously (optional name field)
- ❤️ **Like System** - Show support for other confessions
- 🗑️ **Delete Confessions** - Remove your own confessions
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 💾 **Persistent Storage** - All confessions are saved on the backend

## Prerequisites

- **Node.js** installed on your computer ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)

## Setup Instructions 🚀

### 1. Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

This will install Express, CORS, and Body-Parser.

### 2. Start the Server

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║      🎭 CONFESSION WALL SERVER 🎭      ║
║                                        ║
║   Server running on:                   ║
║   http://localhost:3000                 ║
║                                        ║
║   Open it in your browser!             ║
╚════════════════════════════════════════╝
```

### 3. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

That's it! Your confession wall is now live! 🎉

## How to Use

1. **Submit a Confession:**
   - Enter your name (optional - defaults to "Anonymous")
   - Write your confession in the text area
   - Click "Submit Confession"

2. **Like a Confession:**
   - Click the ❤️ Likes button on any confession card
   - Click again to unlike

3. **Delete a Confession:**
   - Click the 🗑️ Delete button to remove a confession
   - A confirmation dialog will appear

## Project Structure

```
template/
├── index.html          # Frontend - HTML, CSS, JavaScript
├── server.js           # Backend - Express server
├── package.json        # Project dependencies
└── README.md          # This file
```

## API Endpoints

- `GET /api/confessions` - Get all confessions
- `POST /api/confessions` - Create a new confession
- `POST /api/confessions/:id/like` - Like/unlike a confession
- `DELETE /api/confessions/:id` - Delete a confession

## Notes 📝

- **Data Persistence:** Currently, all data is stored in memory. When you restart the server, data is reset. To make it permanent, you can add a database like MongoDB or SQLite.
- **Anonymous:** Users can leave the name field empty to post as "Anonymous"
- **CORS Enabled:** The server allows requests from any origin (CORS enabled)

## Customization 🎨

### Change Port

Edit `server.js` and change:
```javascript
const PORT = 3000;
```

### Change Colors

Edit `index.html` and modify the CSS gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Database (Advanced)

Replace the in-memory array with a database like MongoDB, SQLite, or PostgreSQL for permanent data storage.

## Troubleshooting 🔧

**Port already in use?**
- Change the PORT in `server.js` to another number (e.g., 3001)

**Connection refused?**
- Make sure the server is running with `npm start`
- Check that you're on the correct URL: http://localhost:3000

**Dependencies not installing?**
- Make sure Node.js is installed: `node --version`
- Try deleting `node_modules` folder and running `npm install` again

## License

MIT License - Created by Martin

Enjoy your confession wall! 🎭✨
=======
# 🎭 Confession Wall

A colorful, anonymous confession wall website where users can share their thoughts, like confessions, and delete them.

## Features ✨

- 🌈 **Colorful & Playful Design** - Modern gradient UI with smooth animations
- 💬 **Anonymous Confessions** - Share your deepest thoughts anonymously (optional name field)
- ❤️ **Like System** - Show support for other confessions
- 🗑️ **Delete Confessions** - Remove your own confessions
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 💾 **Persistent Storage** - All confessions are saved on the backend

## Prerequisites

- **Node.js** installed on your computer ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)

## Setup Instructions 🚀

### 1. Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

This will install Express, CORS, and Body-Parser.

### 2. Start the Server

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║      🎭 CONFESSION WALL SERVER 🎭      ║
║                                        ║
║   Server running on:                   ║
║   http://localhost:3000                 ║
║                                        ║
║   Open it in your browser!             ║
╚════════════════════════════════════════╝
```

### 3. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

That's it! Your confession wall is now live! 🎉

## How to Use

1. **Submit a Confession:**
   - Enter your name (optional - defaults to "Anonymous")
   - Write your confession in the text area
   - Click "Submit Confession"

2. **Like a Confession:**
   - Click the ❤️ Likes button on any confession card
   - Click again to unlike

3. **Delete a Confession:**
   - Click the 🗑️ Delete button to remove a confession
   - A confirmation dialog will appear

## Project Structure

```
template/
├── index.html          # Frontend - HTML, CSS, JavaScript
├── server.js           # Backend - Express server
├── package.json        # Project dependencies
└── README.md          # This file
```

## API Endpoints

- `GET /api/confessions` - Get all confessions
- `POST /api/confessions` - Create a new confession
- `POST /api/confessions/:id/like` - Like/unlike a confession
- `DELETE /api/confessions/:id` - Delete a confession

## Notes 📝

- **Data Persistence:** Currently, all data is stored in memory. When you restart the server, data is reset. To make it permanent, you can add a database like MongoDB or SQLite.
- **Anonymous:** Users can leave the name field empty to post as "Anonymous"
- **CORS Enabled:** The server allows requests from any origin (CORS enabled)

## Customization 🎨

### Change Port

Edit `server.js` and change:
```javascript
const PORT = 3000;
```

### Change Colors

Edit `index.html` and modify the CSS gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Database (Advanced)

Replace the in-memory array with a database like MongoDB, SQLite, or PostgreSQL for permanent data storage.

## Troubleshooting 🔧

**Port already in use?**
- Change the PORT in `server.js` to another number (e.g., 3001)

**Connection refused?**
- Make sure the server is running with `npm start`
- Check that you're on the correct URL: http://localhost:3000

**Dependencies not installing?**
- Make sure Node.js is installed: `node --version`
- Try deleting `node_modules` folder and running `npm install` again

## License

MIT License - Created by Martin

Enjoy your confession wall! 🎭✨
>>>>>>> 8470e346efed8bf9a91962687ad1b275c6c8d7a4
