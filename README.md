### Beverages Challenge

This project is a simplified version of an e-commerce platform for beverages, developed using Next.js and Tailwind CSS. Due to privacy concerns, the full scope of the original project cannot be displayed. However, this README provides an overview of the project's objectives and technical requirements.

### Objective

The goal of this challenge was to create a Product Detail Page (PDP) that displays all the information for a single product, including stock and price information. The project aims to replicate the original Figma design while adhering to certain limitations.

### Technical Requirements

1. **API Endpoint for Stock and Price Information**: An API endpoint was created to return stock and price information for a specific product identified by its SKU code.
2. **PDP Updates**: The PDP updates stock and price information every 5 seconds using the API endpoint.
3. **Data Sources**: The project uses two main data sources: a "products.js" file containing product details and images, and a "stock-price.js" file with stock and price information.
4. **URL Access**: The PDP can be accessed through a URL in the format of `/productId-productBrand`.
5. **API Endpoint URL Format**: The API endpoint for stock and price information retrieval uses the URL format: `GET /api/stock-price/code`.
6. **Price Display**: Prices are stored in cents but displayed in dollars with 2 decimal places.

### Technological Stack

The project was developed using the following technologies:

- Next.js: A React framework for building server-side rendered and static web applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Axios: A promise-based HTTP client for the browser and Node.js.
- React Icons: A library that provides a wide range of icons for use in React applications.

### How to Access the Product Detail Page (PDP)

To access the PDP, navigate to the URL in the format of `/productId-productBrand`. For example, for a product with ID 5 and the brand "Corona" the URL should be `/5-corona`.

### Note

This project is a simplified version and does not include all features of the original e-commerce platform. It is intended for demonstration purposes and to meet the specific requirements outlined in the challenge.
