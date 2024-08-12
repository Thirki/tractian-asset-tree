# ⚠️ Notice #
In this project, I used styled-components to manage CSS-in-JS. I interpreted the rule against using UI libraries as applying to component libraries that provide pre-built UI elements (e.g., Material-UI, Bootstrap). Since styled-components is purely a CSS-in-JS library, I believe it aligns with the challenge's requirements. However, I'm open to adjusting this approach if necessary.

# 📙 Descriptin #

This repository presents a Tree View Application designed to visualize and manage industrial assets efficiently. The project focuses on displaying a hierarchical structure of assets, components, and locations through an intuitive tree interface. Key features include dynamic tree rendering, search filters for components and sensors, and the ability to handle large data sets effectively.

Developed using React and styled-components, the application emphasizes clear visualization and user interaction. It leverages React Query for data fetching and caching, and Axios for API requests. Although the project was completed within a short timeframe, it incorporates core functionalities for asset management and highlights areas for potential performance enhancements and testing improvements.

# 📁 Technologies #
This project was developed using the following technologies:

* [React](https://reactjs.org/)
* [React Query](https://react-query.tanstack.com/)
* [React Router Dom](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [Styled Components](https://styled-components.com/)

# 💪 What Would I Improve?

For a project completed in a few days, I am quite satisfied with the result. However, if I had more time, there are definitely areas where I would improve.

### Responsive Design

The responsive design is not perfect; there are several improvements I couldn't address within the timeframe. Since it wasn't the main focus of the project, I left it as a last priority. With more time, I would have refined the responsiveness to ensure a smoother experience across different devices.

### Testing

Unfortunately, I wasn't able to implement any tests, which is quite disappointing. Testing is a crucial part of development, and I would have aimed for at least 80% test coverage if time permitted. This would have significantly improved the reliability and maintainability of the code.

### Performance Optimization

To improve the performance of the tree structure, I would explore libraries like [react-window](https://github.com/bvaughn/react-window). This would help in rendering a large number of elements more efficiently. Some decisions were made with the concern of not overwhelming Apex Unit, but with more time, I would refine these aspects to enhance overall performance and usability.



# 🎬 Getting started #
**Clone the project and access the folder**
~~~
$ git clone git@github.com:Thirki/asset-tree.git
~~~
**Follow the steps below**
~~~
# Install the dependencies
$ npm install
~~~

~~~
# Run the project
$ npm run dev
~~~

~~~
The app will be available for access on your browser at http://localhost:5173 or in another port
~~~
# ✨ special thanks ✨ #
Code with 💜 by me!, [Thirki/Henrique](https://www.linkedin.com/in/thirki/)
