import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function back() {
    if (navigationRef.isReady()) {
        // Perform navigation if the react navigation is ready to handle actions
        navigationRef.goBack();
    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        // Perform navigation if the react navigation is ready to handle actions
        navigationRef.navigate(name, params);
    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}

export function reset() {
    if (navigationRef.isReady()) {
        // Perform navigation if the react navigation is ready to handle actions
        navigationRef.reset({
            index: 0,
            routes: [
                { name: 'Welcome' }
            ],
        });
    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}
