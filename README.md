# EchoTube

A simple YouTube clone built with React and the YouTube Data API, allowing users to search, browse, and watch videos with a user-friendly interface.

## Features

- Search for videos
- Browse trending videos by category
- Select region-based content
- Watch videos with detailed information
- Toggle sidebar navigation
- Responsive and modern UI using Material-UI.

## Technologies Used

- **React:** Library for building user interfaces.
- **React Router** Multi-strategy router for React.
- **YouTube Data API:** Adds a variety of YouTube features to the application such as searching for videos matching specific search terms, topics, locations, publication dates, and much more. .
- **Moment.js:** A JavaScript date library for parsing, validating, manipulating, and formatting dates.
- **CSS:** Styling.

## Installation

To install and run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a .env file in the root directory and add your YouTube API key:**

VITE_API_KEY=your_youtube_api_key

5. **Start the application in development mode:**

   ```bash
   npm start
   This will open the application in your browser at http://localhost:3000.
   ```

## Project Structure

- **`public/`**: Static assets that are publicly accessible.

  - **`EchoTube.png`**: Icon for the application.

- **`src/`**: Main folder for the application's source code.
  - **`assets/`**: Static assets (images, icons, etc.).
  - **`components/`**: Reusable React components.
    - **`Feed`**: Main content feed component.
    - **`Navbar`**: Navigation bar component.
    - **`PlayVideo`**: Video itself and details.
    - **`Recommended`**: Recommended videos related.
    - **`Sidebar`**: Sidebar navigation component.
  - **`Pages/`**: Page-level components for routing.
    - **`Home`**: Home page component.
    - **`Video`**: Video player page component.
  - **`data.js`**: Functions to convert views and time values.
  - **`main.tsx`**: Entry point of the React application where the root component is rendered.
  - **`App.jsx`**: Main component of the application.
  - **`.env`**: Environment variables (API keys, configs).

## Usage

1. **Select a category:** Use the `Sidebar` component to choose the category you want to watch. The selected category will update the source from wich it loads the most popular videos.

![Home Screen](public/Usage1.png)

2. **Search bar:** Use the `Searchbar` to find specific content. This will disable the category videos until you press home or delete the text.

![Game Screen](public/Usage2.png)

3. **Region Filter:** You can change the region to select the videos belonging to that region.

4. **Recommended Videos:** Whenever you click a specific video, some related recomendations will be shown.

## ToDo

- [x] Add readme.
- [x] Add Region filter.
- [x] Add Search bar.
- [ ] Add dark/light theme.
- [ ] When region filtered change app languaje.
- [ ] Shorten description and comments length.
- [ ] Add button to show full lenght of description + show more comments.
- [ ] Improve loading states.
- [ ] Move the sidebar under the Navbar in mobile design.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your changes:**

   ```bash
   git checkout -b your-branch-name
   ```

3. **Make your changes and commit:**

   ```bash
   git commit -am 'Add some feature'
   ```

4. **Push your changes to the remote repository:**

   ```bash
   git push origin your-branch-name
   ```

5. **Create a pull request on GitHub.**

<!-- ## License
This project is licensed under the MIT License. See the LICENSE file for details. -->

## Links

- [GitHub Repository](https://github.com/AlvaroSapata/EchoTube)
- [Live Application](https://myechotube.netlify.app/)

## Contact

For any inquiries, please contact [alvaromfdv@gmail.com](mailto:alvaromfdv@gmail.com).

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/getting-started/installation/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
