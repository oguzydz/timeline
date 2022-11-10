import React, { useCallback, useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Dimensions, StyleSheet, Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const window = Dimensions.get('window');

const Settings = ({ isModalVisible, setIsModalVisible }) => {
    const [isBackdropVisible, setIsBackdropVisible] = useState(true);

    useEffect(() => {
        if (isModalVisible) {
            setIsBackdropVisible(true);
        }
    }, [isModalVisible]);

    useEffect(() => {
        return () => {
            setIsModalVisible()
        }
    }, [])


    const handleDropDownMenu = () => {
        setIsBackdropVisible(false);
        setTimeout(() => {
            setIsModalVisible();
        }, 500);
    }


    const handleVisible = () => {
        setIsBackdropVisible(false);
        setTimeout(() => {
            setIsModalVisible();
        }, 500);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={handleVisible}
            onDismiss={handleVisible}
        >
            <TouchableOpacity style={styles.container} onPressOut={handleVisible} activeOpacity={1}>
                {isBackdropVisible && <Animated.View entering={FadeIn.delay(500)} exiting={FadeOut} style={styles.backdropContainer} />}
                <View style={styles.contentContainer}>
                    <View style={styles.listContainer}>
                        <TouchableOpacity style={styles.listItemContainer} onPress={handleDropDownMenu}>
                            <Text style={[styles.listItemText, { color: '#EF4444' }]}>Delete</Text>
                        </TouchableOpacity>
                        <View style={styles.seperator} />
                        <TouchableOpacity style={styles.listItemContainer} onPress={handleDropDownMenu}>
                            <Text style={styles.listItemText}>Share</Text>
                        </TouchableOpacity>
                        <View style={styles.seperator} />
                        <TouchableOpacity style={styles.listItemContainer} onPress={handleDropDownMenu}>
                            <Text style={styles.listItemText}>Add to Curation</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={handleVisible} style={styles.modalButton}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default React.memo(Settings);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    contentContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingBottom: 30,
    },
    listContainer: {
        backgroundColor: '#fff',
        marginBottom: 8,
        borderRadius: 14,
        paddingRight: 15,
        shadowOffset: { height: 3, width: 2 },
        shadowOpacity: .2,
        shadowRadius: 6,
        elevation: 5
    },
    listItemContainer: {
        paddingVertical: 16,
        justifyContent: "center",
    },
    listItemText: {
        fontSize: 17,
        textAlign: "center",
        fontWeight: "400",
        color: "#111827"
    },
    seperator: {
        height: .5,
        width: '100%',
        backgroundColor: '#D1D5DB'
    },
    modalButton: {
        backgroundColor: "#fff",
        width: '100%',
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        paddingRight: 15,
        shadowOffset: { height: 3, width: 2 },
        shadowOpacity: .2,
        shadowRadius: 6,
        elevation: 5
    },
    modalButtonText: {
        fontSize: 18,
        color: "#000"
    },
    backdropContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5);',
        position: "absolute",
        width: window.width,
        height: window.height,
    }
});
