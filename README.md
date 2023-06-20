# Car Showcase

![Car Showcase App](public/car_showcase.png)

---

### Table of Contents

- [Description](#description)
- [How to use](#how-to-use)
- [API Reference](#api-reference)
- [License](#license)
- [Author Info](#author-info)

---

## Description

A simple web app that showcases users the different cars with search and filter capabilities. All cars data was obtained from RapiD API.

The web app is hosted at Car Showcase.

#### Technologies

- React JS
- Next JS
- TypeScript
- Tailwind CSS
- Headless UI

[Back to the Top](#car-showcase)

---

## How to use

Clone the project 

```bash
  git clone https://github.com/pras306/car-showcase.git
```

Go to the project directory

```bash
  cd car-showcase
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[Back to the Top](#car-showcase)

---

## API Reference

- [Cars API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)
- Custom Proxy Server for hiding API key - [https://api-proxy-server-6xbe.onrender.com/api/v1](https://api-proxy-server-6xbe.onrender.com/api/v1)

#### Get all car details

```http
    GET /cars/find?make=${manufacturer}&year=${year}&model=${model}&fuel=${fuel}&limit=${limit}
```

|Request Body   | Type     | Description                                        |
| :----------   | :------- | :------------------------------------------------- |
| `manufacturer`| `string` | Name of the manufacturer of the car                |
| `model`       | `string` | Name of the model of the car                       |
| `year`        | `number` | Year when the car was manufactured                 |
| `fuel`        | `string` | Fuel type of the car                               |
| `limit`       | `number` | Number of results to get in a single API call      |


[Back to the Top](#car-showcase)

---

## License

MIT License

Copyright (c) [2022] [Prasanna Sriram]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back to the Top](#car-showcase)

---

## Author Info

- Github - [pras306](https://github.com/pras306)
- LinkedIn - [Prasanna Sriram](https://www.linkedin.com/in/prasanna-sriram/)
- Portfolio - [Personal Portfolio](https://prasanna-sriram.netlify.app/)

[Back to the Top](#car-showcase)
