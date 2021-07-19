import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const JOBS = [
    {
        id: 1,
        company: {
            name: 'Google',
            logo: require('./../../assets/images/google.png'),
        },
        jobTitle: 'Product Design',
        description: {
            color: '#7E8CE4',
            time: 'Fulltime',
            level: 'Junior',
        },
        place: 'California',
        salary: '$ 1.000 / month',
        color: '#3949AD'
    },
    {
        id: 2,
        company: {
            name: 'Dribbble',
            logo: require('./../../assets/images/dribbble.png'),
        },
        jobTitle: 'UI Designer',
        description: {
            color: '#FFBFD4',
            time: 'Internship',
            level: 'Junior',
        },
        place: 'Singapore',
        salary: '$ 500 / month',
        color: '#BD3362'
    },
];

const RecentlyPosted = [
    {
        id: 1,
        company: {
            name: 'Gojek',
            logo: require('./../../assets/images/gojek.png'),
        },
        jobTitle: 'Digital Marketing',
        description: {
            color: '#E9FFEB',
            time: 'Fulltime',
            level: 'Junior',
        },
        place: 'Indonesia',
        salary: '$ 250 / month',
        experience: '1-3',
        color: '#E9FFEB'
    },
    {
        id: 2,
        company: {
            name: 'Shopee',
            logo: require('./../../assets/images/shopee.png'),
        },
        jobTitle: 'Content Creator',
        description: {
            color: '#FFEBE7',
            time: 'Fulltime',
            level: 'Senior',
        },
        place: 'Indonesia',
        salary: '$ 500 / month',
        experience: '1',
        color: '#FFEBE7'
    },
    {
        id: 3,
        company: {
            name: 'Bukalapak',
            logo: require('./../../assets/images/bukalapak.png'),
        },
        jobTitle: 'FrontEnd Dev',
        description: {
            color: '#FFE2EB',
            time: 'Fulltime',
            level: 'Junior',
        },
        place: 'Indonesia',
        salary: '$ 750 / month',
        experience: '1-2',
        color: '#FFE2EB'
    },
    {
        id: 4,
        company: {
            name: 'Blibli',
            logo: require('./../../assets/images/blibli.png'),
        },
        jobTitle: 'UX Designer',
        description: {
            color: '#E9F6FF',
            time: 'Fulltime',
            level: 'Junior',
        },
        place: 'Indonesia',
        salary: '$ 250 / month',
        experience: '1',
        color: '#E9F6FF'
    },
];

const Freelance = [
    {
        id: 1,
        company: {
            name: 'Glints',
            logo: require('./../../assets/images/glints.png')
        },
        jobTitle: 'HR Recruiter',
        status: 'Fulltime'
    },
    {
        id: 2,
        company: {
            name: 'LinkedIn',
            logo: require('./../../assets/images/linkedin.png')
        },
        jobTitle: 'Software Engineering',
        status: 'Fulltime'
    }
];

const Home = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Let’s Find</Text>
                    <Text style={styles.textTitle}>Your Dream Jobs</Text>
                </View>
                <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Image source={require('./../../assets/icons/Search.png')} style={{height: 14, width: 14}} />
                    </View>
                    <View style={styles.searchForm}>
                        <TextInput style={styles.searchInput} placeholderTextColor="#9CA5BF" placeholder="Search a job or position"/>
                    </View>
                </View>
                <View style={styles.jobs}>
                    <View style={styles.jobsHeader}>
                        <Text style={styles.jobsTitle}>Jobs For You</Text>
                        <Text style={styles.buttonMore}>See All</Text>
                    </View>
                    <View style={styles.jobsContent}>
                        <FlatList
                            data={JOBS}
                            renderItem={({item}) => (
                                <View style={{...styles.jobsItems, backgroundColor: item.color}}>
                                    <View style={styles.jobHeaderItems}>
                                        <View style={{flex: 2, marginRight: 16}}>
                                            <Image source={item.company.logo} style={{width: 40, height: 40}}/>
                                        </View>
                                        <View style={{flex: 8}}>
                                            <Text style={{fontSize: 18, fontFamily: 'Inter-Bold', color: 'white'}}>{item.jobTitle}</Text>
                                            <Text style={{fontSize: 14, fontFamily: 'Inter-Regular', color: '#9CA5BF', marginTop: 4, marginBottom: 12}}>{item.company.name}</Text>
                                            <View style={{height: 25, flexDirection: 'row'}}>
                                                <View style={{padding: 5, backgroundColor: item.description.color, borderRadius: 5, marginRight: 12}}>
                                                    <Text style={{fontSize: 12, fontFamily: 'Inter-Regular', color: '#FFFFFF'}}>{item.description.time}</Text>
                                                </View>
                                                <View style={{padding: 5, backgroundColor: item.description.color, borderRadius: 5, marginRight: 12}}>
                                                    <Text style={{fontSize: 12, fontFamily: 'Inter-Regular', color: '#FFFFFF'}}>{item.description.level}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.jobFooterItems}>
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Regular', color: '#FFFFFF'}}>{item.place}</Text>
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Regular', color: '#FFFFFF'}}>{item.salary}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal: 8}}
                        />
                    </View>
                </View>
                <View style={recentlyPosted.container}>
                    <View style={recentlyPosted.header}>
                        <Text style={styles.jobsTitle}>Recently Posted</Text>
                        <Text style={styles.buttonMore}>See All</Text>
                    </View>
                    <View style={recentlyPosted.content}>
                        { RecentlyPosted.map((item) => {
                            return (
                                <View key={item.id} style={recentlyPosted.containerItem}>
                                    <View style={{...recentlyPosted.item, backgroundColor: item.color}}>
                                        <View style={recentlyPosted.logoItem}>
                                            <Image source={item.company.logo} style={{width: item.company.name === 'Blibli' ? 100 : 40, height: 40, resizeMode: 'contain'}}/>
                                        </View>
                                        <View style={recentlyPosted.titleItem}>
                                            <Text style={{fontFamily: 'Inter-Bold', fontSize: 16}}>{item.jobTitle}</Text>
                                        </View>
                                        <View style={recentlyPosted.descriptionItem}>
                                            <Text style={{fontSize: 14, fontFamily: 'Inter-Regular'}}>{item.experience + " year Experience"}</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{ backgroundColor: item.description.color, borderRadius: 5, marginRight: 12}}>
                                                    <Text style={{fontSize: 14, fontFamily: 'Inter-Regular', color: '#9CA5BF'}}>{item.description.time}</Text>
                                                </View>
                                                <View style={{backgroundColor: item.description.color, borderRadius: 5, marginRight: 12}}>
                                                    <Text style={{fontSize: 14, fontFamily: 'Inter-Regular', color: '#9CA5BF'}}>{item.description.level}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={freelance.container}>
                    <View style={freelance.header}>
                        <Text style={freelance.headerTitle}>Freelance Jobs</Text>
                    </View>
                    <FlatList
                        data={Freelance}
                        renderItem={({item}) => {
                            return (
                                <View style={freelance.item}>
                                    <View style={{}}>
                                        <Image source={item.company.logo} style={{height: 35, width: 35}}/>
                                    </View>
                                    <View style={freelance.description}>
                                        <Text style={{marginBottom: 4, fontSize: 12, fontFamily: 'Inter-Regular'}}>{item.company.name}</Text>
                                        <Text style={{marginBottom: 8, fontFamily: 'Inter-Bold'}}>{item.jobTitle}</Text>
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Regular', color: '#0097FF'}}>{item.status}</Text>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 8}}
                    />
                </View>
            </ScrollView>
            <View style={navigation.container}>
                <View style={navigation.button}>
                    <Image source={require('./../../assets/icons/Home_Active.png')} style={{height: 24, width: 24}}/>
                    <Text style={{fontSize: 12, fontFamily: 'Inter-Bold', color: '#475BD8'}}>Home</Text>
                </View>
                <View style={navigation.button}>
                    <Image source={require('./../../assets/icons/Bookmark.png')} style={{height: 24, width: 24}}/>
                    <Text style={{fontSize: 12, fontFamily: 'Inter-Regular', color: '#9CA5BF'}}>Bookmark</Text>
                </View>
                <View style={navigation.button}>
                    <Image source={require('./../../assets/icons/Paper.png')} style={{height: 24, width: 24}}/>
                    <Text style={{fontSize: 12, fontFamily: 'Inter-Regular', color: '#9CA5BF'}}>Application</Text>
                </View>
                <View style={navigation.button}>
                    <Image source={require('./../../assets/icons/Profile.png')} style={{height: 24, width: 24}}/>
                    <Text style={{fontSize: 12, fontFamily: 'Inter-Regular', color: '#9CA5BF'}}>My Account</Text>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 94,
        marginLeft: 16
    },
    textTitle: {
        fontSize: 34,
        fontFamily: 'Inter-Bold',
    },
    searchBar: {
        marginTop: 16,
        height: 46,
        borderWidth: 1,
        marginHorizontal: 16,
        borderRadius: 10,
        borderColor: '#EBF0FF',
        paddingHorizontal: 16,
        flexDirection: 'row'
    },
    searchIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchForm: {
        flex: 9,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    searchInput: {
        width: '100%',
        fontSize: 17
    },
    jobs: {
        height: 211,
        marginTop: 40,
    },
    jobsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
        alignItems: 'center'
    },
    jobsTitle: {
        fontSize: 22,
        fontFamily: 'Inter-Bold'
    },
    buttonMore: {
        fontSize: 13,
        fontFamily: 'Inter-Regular',
        color: '#9CA5BF'
    },
    jobsContent: {
        flex: 1,
    },
    jobsItems: {
        height: '100%',
        width: 271,
        marginHorizontal: 8,
        borderRadius: 15,
        padding: 16,
        justifyContent: 'space-between',
    },
    jobHeaderItems: {
        flexDirection: 'row'
    },
    jobFooterItems: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

const recentlyPosted = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8
    },
    content: {
        marginTop: 8,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerItem: {
        width: '50%',
        aspectRatio: 1,
        height: '100%',
        padding: 8,
    },
    item: {
        flex: 1,
        elevation: 0.5,
        borderRadius: 15,
        padding: 16,
        justifyContent: 'space-between'
    },
    logoItem: {
        flex: 3,
        justifyContent: 'flex-end'
    },
    titleItem: {
        justifyContent: 'center',
        flex: 3
    },
    descriptionItem: {
        flex: 4,
        justifyContent: 'flex-end'
    }
});

const freelance = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 16
    },
    headerTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        marginHorizontal: 8
    },
    item: {
        // width: 196,
        marginHorizontal: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 16,
        backgroundColor: '#E9F6FF'
    },
    description: {
        marginLeft: 14
    }
});

const navigation = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        borderWidth: 1,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderTopColor: '#EBF0FF',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        elevation: 0.5,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Home;