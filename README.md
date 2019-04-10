To install and start, please run the following in the project directory:

### `npm install` 

and then

### `npm start`

In terms of choices of libraries, I used:

create-react-app for speed and ease of use with setting up Babel, Webpack etc.

axios for requesting data from the Pokemon API, since it is generally recommended over fetch and I've used it a lot in the past.

I used Semantic-UI for their css, I still ended up with a small amount of custom css but I find it quicker to develop using the Semantic-UI library. Whilst it can be quick to use a css library like this it obviously comes with its own set of learning and may have its own peculiarities. To align the two coloured boxes here I've had to put one component into a grid, for example, which isn't necessarily ideal.

To test the project I would use something like Jest to create some simple tests cases for the components. I would test that given the same input props they would have the same state and expected output using snapshots built from the current state of the app.