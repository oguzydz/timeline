import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";

import Post from "./Post";

import postsDummy from "../helpers/posts.json";

const Timeline = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);

        new Promise((resolve) => setTimeout(() => resolve(postsDummy), 2000))
            .then((response) => setPosts(response))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            {isLoading ? (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#111827" />
                </View>
            ) : (
                <FlatList
                    data={posts}
                    renderItem={({ ...props }) => <Post {...props} />}
                    keyExtractor={(item, index) => index?.toString()}
                />
            )}
        </>
    );
}

export default Timeline;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }
});