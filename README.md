# Weather App

# Installing dependencies

```bash
npm i
```

### Start bundler

```bash
npm run start
```

### Running on Android

```bash
# using npm
npm run android
```

You can also run it using Android Studio. I'm not sure if it works on iOS, as I don't have a macOS to test it. :sweet_smile:

## Architecture

I decided to follow this separation for the project, although I think there's a lot of space for improvement. Like separating the API folder into a proper module, as it will allow easier maintance and usage.

The project is organized as follows:

- `components/`: Contains all the reusable components.
- `assets/`: Contains all static files like images, etc.
- `__tests__/`: Contains helpers files for tests.
- `src/`: This is where all the source code of the application resides.
  - `api/`: Contains all query functions, as well as the react-query configuration.
  - `screens/`: Contains all the screen components, which are the main views users will see.
  - `utils/`: Contains utility functions and constants.
  - `navigation/`: Contains the navigation configuration as well as the navigation component and the provider.

I decided to split the components folder into a separate "module", as If we decided to use this component in another project, it would be easier to extract it and publish it as a package. Also, it easier to connect it to a Storybook project or even Snack without having any dependency to the project. Althought, there's a coupling between the components and the utils folder, and the API as I'm using some functions and types from this modules. Ideally, this coupling should be removed and the components should be self-contained.

## CI/CD

I also added a small pipeline to run lint and tests on each PR. It's using GitHub Actions, and you can check the workflow file [here](.github/workflows/main.yml).

## Styles

I decided to use "@gluestack-ui" to style this, as It was something I wanted to try for a while. Instead of creating my own theme or something similar, I decided to the the default config provided by the library but isolating it making it easier to change in the future as it can be seen in the [theme file](components/theme/theme.ts).

## Data-Fetching

I decided to use React-Query to handle the data fetching, as it's a library I'm familiar with and I think it's a good fit for this project. I think for such a tiny context this is kind of a overkill, but as I come from projects using Relay, and Apollo I decided to use by it's similarity to those libraries, as well as the caching and refetching capabilities.

## Final thoughts

Something I'm missing and I believe would be a great addition, is to support the user locale to show the temperate according to it. As of today, it's always showing in Celcius(sorry if you are testing from the 🇺🇸). I also think it would be much better to use a shimmer or something similar instead of a AcitivityIndicatior while we load the city page.

![Demo](https://github.com/MateusAndrade/weather-app/blob/main/demo/Demo%20Android.gif)


![Demo](https://raw.githubusercontent.com/username/repo/branch/path_to_video.gif)
