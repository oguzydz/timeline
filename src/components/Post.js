import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import moment from 'moment';

import DotsIcon from '../assets/icons/dots.svg';
import ClapsIcon from '../assets/icons/claps.svg';
import PlayerIcon from '../assets/icons/player.svg';

const window = Dimensions.get('window');

const Post = ({ item, index }) => {

    const renderPostMessage = (message) => {
        let splitText = message.split(' ')

        splitText.forEach((word, index) => {
            if (word[0] === "@") {
                splitText[index] = <Text style={styles.postUsername}>{word}</Text>
            }

            if (word[0] !== "@") {
                splitText[index] = `${word} `
            }
        })

        return splitText
    }

    return (
        <View key={index.toString()} style={styles.container}>
            {item?.liked_user &&
                <View style={styles.likedUserContainer}>
                    <ClapsIcon width="24" height="24" />
                    <Text style={styles.likedUserText}>
                        <Text style={styles.likedUserName}>{item?.liked_user?.name}</Text> liked this post.
                    </Text>
                </View>
            }
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image
                        source={{ uri: item?.profile_image }}
                        style={styles.profileImage}
                    />
                    <View style={styles.titleContainer}>
                        <View style={styles.titleTextContainer}>
                            <Text style={styles.userName}>
                                {item?.name}
                            </Text>
                            <Text style={styles.userTitle}>
                                {item?.title}
                            </Text>
                        </View>
                        <Text style={styles.date}>
                            {moment(item?.created_at).fromNow()}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.dots}>
                    <DotsIcon />
                </TouchableOpacity>
            </View>

            <View style={styles.messageContainer}>
                <Text style={styles.message}>
                    {renderPostMessage(item?.post?.message)?.map((word, index) => {
                        if(typeof word === "string") {
                            return <View key={index.toString()}><Text>{word}</Text></View>
                        }
                        if(typeof word === "object") {
                            return <View key={index.toString()}>{word}</View>
                        }
                    })}
                </Text>
            </View>

            <View style={styles.thumbContainer}>
                <View>
                    {<View style={styles.playerIconContainer}>
                        <PlayerIcon />
                    </View>}
                    <Image
                        source={{ uri: item?.post?.image }}
                        style={styles.thumbImage}
                    />
                </View>

                <View style={styles.thumbInfoContainer}>
                    <Text style={styles.thumbSharedText}>
                        This {item?.post?.thumb_shared?.target_type} is shared via <Text style={{ color: item?.post?.thumb_shared?.color }}>{item?.post?.thumb_shared?.label}</Text>
                    </Text>
                    <Text style={styles.thumbDescription}>
                        {item?.post?.thumb_description?.length > 100 ? `${item?.post?.thumb_description.slice(0, 70)}...` : item?.post?.thumb_description}
                    </Text>
                </View>
            </View>

            <ScrollView horizontal contentContainerStyle={styles.footer}>
                {item?.post?.categories?.map((category, index) => (
                    <TouchableOpacity key={index.toString()} style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>
                            {category?.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default Post;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: .5,
        borderTopWidth: .5,
        borderColor: '#D1D5DB',
        marginVertical: 6
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: .5,
        borderColor: '#D1D5DB',
    },
    titleContainer: {
        flexDirection: 'row',
        marginLeft: 6
    },
    titleTextContainer: {
    },
    userName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
    },
    userTitle: {
        fontSize: 13,
        fontWeight: '400',
        color: '#111827',
        marginTop: -2
    },
    date: {
        fontSize: 13,
        color: "#9CA3AF",
        fontWeight: "600",
        marginLeft: 6,
        marginTop: 2
    },
    dots: {},
    messageContainer: {
        marginTop: 10,
    },
    message: {
        color: '#111827',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.1,
    },
    postUsername: {
        color: '#00A0FF',
    },
    thumbContainer: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        padding: 10,
    },
    thumbImage: {
        width: '100%',
        height: 175,
    },
    thumbInfoContainer: {
        marginTop: 10,
    },
    thumbSharedText: {
        fontSize: 12,
        color: '#9CA3AF',
        fontWeight: '500',
        lineHeight: 16,
    },
    thumbDescription: {
        fontSize: 16,
        color: '#111827',
        fontWeight: '700',
        lineHeight: 21,
        marginTop: 2
    },
    footer: {
        paddingTop: 10,
        alignItems: "center"
    },
    footerButton: {
        backgroundColor: "#F3F4F6",
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#E5E7EB"
    },
    footerButtonText: {
        fontSize: 13,
        color: "#111827",
        fontWeight: "600"
    },
    likedUserContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    likedUserText: {
        fontSize: 12,
        color: '#9CA3AF',
        marginLeft: 6
    },
    likedUserName: {
        color: '#111827',
        fontWeight: '500'
    },
    playerIconContainer: {
        position: 'absolute',
        zIndex: 1,
        left: (window.width - 50) / 2 - 60,
        top: 175 / 2 - 60,
    }
}); 