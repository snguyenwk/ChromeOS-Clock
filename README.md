# ChromeOS Clock

Native clock app implementation for ChromeOS.

## How to build

Before running the project, perform the following steps to configure
your workflow:

- Ensure Node.js is installed
- Clone the repo onto your device
- Navigate to the project folder via the command line
- Install npm dependencies: `npm i`

Once you have a properly configured workflow, you can now build the project.

To run, perform the following steps:
- `npm run build`: Compile & bundle project
- `npm run serve`: Start a local server instance

You can also configure a running instance to automatically recompile upon
source code changes. To do this, run the following command.

`npm run build:watch`

Then, in a separate command line instance, start the server:

`npm run serve`

## Tech stack details

This project primarily uses these libraries & frameworks:

Technology              | Role
------------------------|-------------------------------
Node.js                 | JavaScript runtime used by Lit
Lit                     | Web app framework
TypeScript              | Static-typed superset of JS
Material Design         | Design philosophy
Material Web Components | Web component library