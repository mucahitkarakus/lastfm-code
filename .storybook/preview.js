import {Provider} from "react-redux";
import {store} from "../src/app/store";

export const parameters = {
    action: {argTypesRegex : "^on[A-Z].*"},
    controls:{
        matchers:{
            color : /(background|color)$/i,
            date: /Date$/,
        }
    }
};

export const decorators = [
    (Story) => {
        <Provider store={store}>
            <Story />
        </Provider>
    }
]