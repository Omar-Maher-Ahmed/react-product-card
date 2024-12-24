import apiClient from "../lib/axios";
import { IProduct, IUser, CartList, CartItem } from "./intaerfaces";
export const checkAuth = (): void => {
    // Check if the authorization header is present
    if (!apiClient.defaults.headers.common['Authorization']) {
        throw new Error("User must be logged in to perform this action");
    }
};
const handleError = (error: any): Promise<any> => {
    if (error.response) {
        // Error coming from the API response
        console.error("API Error:", error.response.data);
        return Promise.reject({
            message: "An error occurred while connecting to the server. Please try again later.",
            details: error.response.data, // Return the error details if available
        });
    } else if (error.request) {
        // No response received from the API (connection issue)
        console.error("Request Error:", error.request);
        return Promise.reject({
            message: "No response received from the server. Please check your internet connection.",
        });
    } else {
        // Other errors (like code-related issues)
        console.error("General Error:", error.message);
        return Promise.reject({
            message: "An unexpected error occurred. Please try again later.",
            details: error.message,
        });
    }
};

// products

/**
 * Product interface represents the structure of a product object returned by the API.
 */


/**
 * Example Response:
 * [
 *   {
 *     "id": 0,
 *     "name": "Super Widget",
 *     "description": "A gadget that does everything!",
 *     "price": 414040,
 *     "stock": 9223372036854776000,
 *     "category": "Tech Toys",
 *     "image_url": "https://example.com/widget.jpg",
 *     "is_available": true,
 *     "created_at": "2024-12-20T15:15:07.349Z",
 *     "updated_at": "2024-12-20T15:15:07.349Z"
 *   }
 * ]
 */

/**
 * Fetches the list of products from the server.
 * 
 * This function makes an API call to the endpoint `/products/` to retrieve a collection of products.
 * It does not require any parameters and returns a list of product objects, each containing details
 * such as the product's name, description, price, and availability.
 * 
 * @returns {Promise<IProduct[]>} A promise that resolves to an array of products.
 * 
 * @throws {ApiError} If there is an error during the API call, the error is caught and handled by
 * the `handleError` function, which processes the error appropriately.
 * 
 * @example
 * const products = await getProducts();
 * console.log(products);
 */
export const getProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await apiClient.get("/products/");
        console.log("API Response:", response.data);
        return response.data;
    } catch (error: unknown) {
        return handleError(error);
    }
}



/**
 * Fetches a specific product by its unique ID from the server.
 * 
 * This function makes an API call to the endpoint `/products/{id}/` to retrieve a single product.
 * The product is identified by a unique integer `id`, which is passed in the URL path.
 * 
 * @param {number} id - The unique identifier of the product you want to fetch.
 * 
 * @returns {Promise<IProduct>} A promise that resolves to a `Product` object.
 * 
 * @throws {ApiError} If there is an error during the API call, the error is caught and handled by
 * the `handleError` function, which processes the error appropriately.
 * 
 * @example
 * const product = await getProduct(1);
 * console.log(product);
 */
export const getProduct = async (id: number): Promise<IProduct> => {
    try {
        const response = await apiClient.get(`/products/${id}/`);
        return response.data;  // Returns a single product object
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}
// users


/**
 * UserData interface represents the structure of the user object returned by the API upon successful login.
 */


/**
 * Handles user login via Basic Authentication.
 * 
 * This function takes the user's email and password, encodes them in Base64 format, and sets the `Authorization` header 
 * for the request to the `/users/login/` endpoint. It then sends a GET request to authenticate the user. 
 * If the credentials are valid, it returns the user's data.
 * 
 * @param {string} email - The user's email address used for login.
 * @param {string} password - The user's password used for login.
 * 
 * @returns {Promise<IUser>} A promise that resolves to the user's data if authentication is successful.
 * 
 * @throws {ApiError} If there is an error during the API call, the error is caught and handled by
 * the `handleError` function, which processes the error appropriately.
 * 
 * @example
 * const user = await login('user@example.com', 'password123');
 * console.log(user);
 */
export const login = async (email: string, password: string): Promise<IUser> => {
    try {
        // Set the Authorization header for Basic Authentication
        apiClient.defaults.headers.common['Authorization'] = `Basic ${btoa(`${email}:${password}`)}`;

        // Send GET request to login endpoint
        const response = await apiClient.get("users/login/");

        // Return user data if successful
        return response.data;
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}



/**
 * Example Response (200 OK):
 * {
 *   "id": 0,
 *   "username": "johndoe",
 *   "email": "user@example.com",
 *   "first_name": "John",
 *   "last_name": "Doe",
 *   "is_staff": true,
 *   "address": "123 Main St",
 *   "phone_number": "01010531169"
 * }
 * 
 * Example Response (400 Bad Request):
 * {
 *   "additionalProp1": "Invalid email format",
 *   "additionalProp2": "Password is required",
 *   "additionalProp3": "Missing authorization header"
 * }
 * 
 * Example Response (401 Unauthorized):
 * {
 *   "additionalProp1": "Invalid credentials",
 *   "additionalProp2": "Username or password is incorrect",
 *   "additionalProp3": "Access denied"
 * }
 */

/**
 * Handles user registration by creating a new user with the provided data.
 * 
 * This function accepts a `data` object containing the user’s registration information,
 * which is then sent in a POST request to the `/users/register/` endpoint. The server
 * processes the request and returns the newly created user's data if the registration is successful.
 * 
 * @param {Record<string, unknown>} data - The user's registration data, including fields like `email`, `password`, 
 *                                      `username`, `first_name`, `last_name`, etc.
 * 
 * @returns {Promise<UserData>} A promise that resolves to the user's data upon successful registration.
 * 
 * @throws {Error} If `email` or `password` is missing in the `data`, an error is thrown indicating that these fields are required.
 * 
 * @throws {ApiError} If there is an error during the API call, the error is caught and handled by
 * the `handleError` function.
 * 
 * @example
 * const userData = {
 *   username: 'johndoe',
 *   email: 'user@example.com',
 *   first_name: 'John',
 *   last_name: 'Doe',
 *   password: 'password123',
 *   address: '123 Main St',
 *   phone_number: '01025512405',
 *   is_staff: false
 * };
 * const user = await register(userData);
 * console.log(user);
 */
export const register = async (data: Record<string, unknown>): Promise<IUser> => {
    if (!data.email || !data.password) {
        throw new Error("Data must include 'email' and 'password'");
    }

    try {
        const response = await apiClient.post("users/register/", data);
        return response.data;  // Returns user data upon successful registration
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}


// orders


/**
 * CartList interface represents the structure of the data returned from the `/orders/cart/` endpoint.
 * It includes a list of orders where each order has its `id`, `items`, `total_price`, `order_date`, `status`, and `user`.
 */


/**
 * CartItem interface represents the structure of each item in the cart.
 * Each item has an `id`, `quantity`, `price`, associated `order`, and linked `product`.
 */


/**
 * Retrieves the authenticated user's cart containing orders with the status "CART".
 * 
 * This function first checks for user authentication using `checkAuth()` before attempting to fetch the cart information.
 * It makes a GET request to the `/orders/cart/` endpoint to retrieve the user's cart data. If the request is successful, 
 * it returns the list of cart items. If there's an error during the API call, it handles it with `handleError`.
 * 
 * @returns {Promise<CartList>} A promise that resolves to the user's cart data if successful.
 * 
 * @throws {Error} If the user is not authenticated (using `checkAuth()`).
 * @throws {ApiError} If there is an error during the API call, it is caught and handled by `handleError`.
 * 
 * @example
 * const cart = await getCart();
 * console.log(cart);
 */
export const getCart = async (): Promise<CartList> => {
    try {
        checkAuth();  // Ensure user is authenticated
        const response = await apiClient.get("orders/cart/");
        return response.data;  // Returns the user's cart data
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}


/**
 * Example Response (200 OK):
 * [
 *   {
 *     "id": 0,
 *     "items": [
 *       {
 *         "id": 0,
 *         "quantity": 9223372036854776000,
 *         "price": "848975.43",
 *         "order": 0,
 *         "product": 0
 *       }
 *     ],
 *     "total_price": "-4",
 *     "order_date": "2024-12-20T15:23:38.763Z",
 *     "status": "string",
 *     "user": 0
 *   }
 * ]
 */

/**
 * Creates a new order for the authenticated user by changing the status of the order from "CART" to "PENDING".
 * 
 * This function first checks for user authentication using `checkAuth()` before attempting to create a new order. It makes
 * a POST request to the `orders/` endpoint to create the order. If the request is successful, it returns the serialized order data.
 * If there's an error during the API call, it handles it with `handleError`.
 * 
 * @returns {Promise<CartList>} A promise that resolves to the created order's data upon successful creation.
 * 
 * @throws {Error} If the user is not authenticated (using `checkAuth()`).
 * @throws {ApiError} If there is an error during the API call, it is caught and handled by `handleError`.
 * 
 * @example
 * const order = await createOrder();
 * console.log(order);
 */
export const createOrder = async (): Promise<CartList> => {
    try {
        checkAuth();  // Ensure user is authenticated
        const response = await apiClient.post("orders/");
        return response.data;  // Returns the created order data
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}

/**
 * Adds a new item (product) to the user's cart.
 * 
 * This function adds a specified quantity of a product to the user's current order (with status "CART"). The item is added to
 * the order, the total price of the order is updated, and the order is saved. The response contains the serialized data of the
 * created item.
 * 
 * @param {number} quantity - The quantity of the product to add to the cart.
 * @param {number} product - The ID of the product to add to the cart.
 * 
 * @returns {Promise<CartItem>} A promise that resolves to the data of the newly created item in the cart upon success.
 * 
 * @throws {Error} If the user is not authenticated (using `checkAuth()`).
 * @throws {ApiError} If there is an error during the API call, it is caught and handled by `handleError`.
 * 
 * @example
 * const cartItem = await addItem(3, 101);
 * console.log(cartItem);
 */
export const addItem = async (quantity: number, product: number): Promise<CartItem> => {
    try {
        checkAuth();  // Ensure user is authenticated
        const response = await apiClient.post("orders/item/", { quantity, product });
        return response.data;  // Returns the created cart item data
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}
/**
 * Retrieves a specific item from the user's cart.
 * 
 * This function retrieves a cart item by its ID from the user's cart (order with status "CART"). The response contains the 
 * serialized data of the item, including its `id`, `quantity`, `price`, and `product`. If the item is not found, an error 
 * response will be returned.
 * 
 * @param {number} id - The unique identifier (primary key) of the item to retrieve from the cart.
 * 
 * @returns {Promise<CartItem>} A promise that resolves to the data of the requested cart item.
 * 
 * @throws {Error} If the user is not authenticated (using `checkAuth()`).
 * @throws {ApiError} If there is an error during the API call, it is caught and handled by `handleError`.
 * 
 * @example
 * const cartItem = await getItem(101);
 * console.log(cartItem);
 */
export const getItem = async (id: number): Promise<CartItem> => {
    try {
        checkAuth();  // Ensure user is authenticated
        const response = await apiClient.get(`orders/item/${id}/`);
        return response.data;  // Returns the requested cart item data
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}
/**
 * Deletes a specific item from the user's cart.
 * 
 * This function removes an item from the user's cart by sending a DELETE request to the API endpoint with the item ID.
 * It first ensures that the user is authenticated by calling `checkAuth()`. Upon successful deletion, it returns the 
 * serialized data of the deleted item.
 * 
 * @param {number} id - The unique identifier (primary key) of the item to delete from the cart.
 * 
 * @returns {Promise<CartItem>} A promise that resolves to the data of the deleted cart item.
 * 
 * @throws {Error} If the user is not authenticated (using `checkAuth()`).
 * @throws {ApiError} If there is an error during the API call, it is caught and handled by `handleError`.
 * 
 * @example
 * const deletedItem = await deleteItem(101);
 * console.log(deletedItem);
 */
export const deleteItem = async (id: number): Promise<CartItem> => {
    try {
        checkAuth();  // Ensure user is authenticated
        const response = await apiClient.delete(`orders/item/${id}/`);
        return response.data;  // Returns the serialized data of the deleted item
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}
/**
 * Updates an existing item in the user's cart.
 * 
 * This function sends a `PUT` request to the API to update the specified item in the user's cart.
 * It ensures that the user is authenticated before making the API request using `checkAuth()`. Upon successful update,
 * the updated item data is returned. If there is an error, it will be caught and handled by `handleError`.
 * 
 * @param {number} id - The unique identifier (primary key) of the item to update.
 * 
 * @returns {Promise<CartItem>} A promise that resolves to the updated item data.
 * 
 * @throws {Error} If the user is not authenticated (using `checkAuth()`).
 * @throws {ApiError} If there is an error during the API call, it is caught and handled by `handleError`.
 * 
 * @example
 * const updatedItem = await updateItem(101);
 * console.log(updatedItem);
 */
export const updateItem = async (id: number): Promise<CartItem> => {
    try {
        checkAuth();  // Ensure user is authenticated
        const response = await apiClient.put(`orders/item/${id}/`);
        return response.data;  // Returns the serialized data of the updated item
    } catch (error: unknown) {
        return handleError(error);  // Handles errors as usual
    }
}

