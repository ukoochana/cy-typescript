# cy-typescript

# Pre-requisites:
node
npm

# Checkout the project and open a terminal and go to the root directory 'cy-typescript'

API tests are in cypress/e2e/features/postUpdate.feature
LOGIN tests are in cypress/e2e/features/login.feature
PRODUCT tests are in cypress/e2e/features/products.feature

# Install all the dependencies by going to the root directory
`npm install`

# Run single test with @test tag
`npm run singleTest`

# Run all the tests from all feature files
`npm run runAllTests`

# Run the tests by opening in the cypress UI
`npm run openCypress`

# Run the tests in parallel (example: this will run in 2 threads)
`npm run parallel`


# Reports are generated in cypress/cucumber-html/cucumber-html.html and can be opened in a browser
