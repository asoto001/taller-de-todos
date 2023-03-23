import { useEffect, useState } from "react";

const useLocalStorege = (jsonItem, initialValue) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {

                const localStoregeItem = localStorage.getItem(jsonItem);
                let savedItem;

                if (!localStoregeItem) {
                    localStorage.setItem(jsonItem, JSON.stringify(initialValue));
                    savedItem = initialValue;
                } else {
                    savedItem = JSON.parse(localStoregeItem);
                }

                setItem(savedItem);
                setLoading(false)

            } catch (error) {
                setError(error)
            }

        }, 2000)
    });

    const saveItem = (newItem) => {
        const stringifyItem = JSON.stringify(newItem);
        localStorage.setItem(jsonItem, stringifyItem);
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export default useLocalStorege;