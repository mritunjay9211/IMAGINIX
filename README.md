# AI Image Generator 🎨

A full-stack MERN application that generates and shares AI-powered images using OpenAI's API.


## 📝 Description

This project is a web application that allows users to generate images using artificial intelligence based on text prompts. Users can create, search, download, and share AI-generated images with the community. The application uses React for the frontend, Node.js and Express for the backend, and MongoDB for the database.

## ✨ Features

- 🖼️ Generate AI images using text prompts via OpenAI API
- 🔍 Search functionality to find images by prompts or tags
- 💾 Download generated images directly to your device
- 👥 Community image sharing - view images created by other users
- 📱 Responsive design for both desktop and mobile devices

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose ODM
- OpenAI API integration

## 📦 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- OpenAI API key

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-image-generator.git
cd ai-image-generator
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Set up environment variables
Create a `.env` file in the server directory with the following variables:
```
MONGODB_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=8080
```

4. Install frontend dependencies
```bash
cd ../client
npm install
```

5. Set up frontend environment variables
Create a `.env` file in the client directory:
```
REACT_APP_BACKEND_URL=http://localhost:8080
```

6. Run the application
```bash
# In the server directory
npm run dev

# In a new terminal, in the client directory
npm start
```

7. Open your browser and navigate to `http://localhost:3000`

## 💻 Usage

1. Enter a descriptive prompt in the text field
2. Click "Generate" to create an AI image
3. View your generated image and choose to download or share it
4. Browse the community showcase to see images created by other users
5. Use the search functionality to find specific images


## 🔮 Future Improvements

- User authentication and profiles
- Advanced image customization options
- Image collections and favorites
- Social sharing features
- Premium tier with additional features

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the image generation API
- The MERN stack community for resources and inspiration
