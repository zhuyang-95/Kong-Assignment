# Kong Assignment
Small test automation for Kong Assignment using Cypress + JavaScript.

## Get Started
1. Set Up
```bash
npm install
```

2. Run Test:
```bash
npm test
```

3. Debug Test:
```bash
npm run debug
```

## Design Considerations & Assumptions

### About Test
1. Considering first/not first time create gateway service and route, both can pass.
2. Considering add a route with/without a service, both can pass.
3. Make sure every time adding different name for service and route.
4. Very basic happy path.

### About Test Report
1. Using cypress-mochawesome-reporter to generate report.
2. Will attach screenshot and video in the report when test failed, but in order to demo, comment out `videoOnFailOnly: true` for now.

### About CI
1. Basic CI triggered to run all tests after push to this repo.
2. Start docker before run tests.
3. Test report also been uploaded to CI artifact.

## Trade-offs
1. Considering a route can be added without service, so can split to two tests. Otherwise need to put into one test.
2. Still perfer Page Object Mode(POM), using POM here.
3. Using `[data-testid=*]` for almost all elements selector and only added basic assertion like assert title and success message for now.
Like the [Best Practice](https://docs.cypress.io/guides/references/best-practices#Text-Content) in offical doc said: 
"how important is the Submit text content to your test? If the text changed from Submit to Save - would you want the test to fail?"
4. Usually test automation project CI will designed to trigger after new commit to the application project been testing or schedule the pipeline to run at specific time.

## Personal Thoughts
1. Need a deeper understanding and knowledge of Kong's product.
2. First time using Cypress + Github Actions(before was playwright + Gitlab). Had fun with exploring it.
