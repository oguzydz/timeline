import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";

import Post from "./Post";

import postsDummy from "../helpers/posts.json";

const Timeline = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = (isLoadMore = false) => {
        if (isLoadMore) {
            setIsLoadMoreLoading(true);
        }

        if (!isLoadMore) {
            setIsLoading(true);
        }

        new Promise((resolve) => setTimeout(() => resolve(postsDummy), 500))
            .then((response) => {
                if (isLoadMore) {
                    setPosts([...posts, ...response]);
                }
                if (!isLoadMore) {
                    setPosts(response)
                }
            })
            .finally(() => {
                setIsLoading(false)
                setIsLoadMoreLoading(false)
            });
    }

    const handleLoadMore = () => {
        fetchPosts({ isLoadMore: true });
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
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.75}
                    ListFooterComponent={isLoadMoreLoading ? <ActivityIndicator size="small" color="#111827" style={styles.loadMoreIndicator} /> : null}
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
    },
    loadMoreIndicator: {
        marginVertical: 20
    }
});