import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity 
} from 'react-native';
import {Text} from 'react-native-paper';

import { format } from 'date-fns';
import {useNavigation} from '@react-navigation/native';

import { formatDate } from '../../../constant/date';
import { useUserContext } from '../contexts/UserContext';

import MemberProfile from '../member_profile';
import AnswerButton from '../answer_button';

function QuestionCard({questionId, info, question, createdAt}) {
    const navigation = useNavigation();
    return (
        <View style={[styles.card, styles.shadow]}>
            <MemberProfile info={info}/>
            <Text style={styles.text}>{question}</Text>
            <Text style={styles.time}>{formatDate(new Date(createdAt.seconds*1000))}</Text>
            <AnswerButton
                onPress={() => navigation.navigate('UploadAnswerScreen', {key: questionId})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        paddingVertical: 45,
        paddingHorizontal: 15,
        borderRadius:20,
        backgroundColor:'white'
    },
    text:{
        fontSize:17,
        marginBottom:5,
        position:'absolute',
        left:10,
        bottom:1,
    },
    time:{
        position:'absolute',
        right:10,
        top:10,
        marginRight:20,
        marginBottom:10
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity: 0.89,
        shadowRadius:3.84,
        elevation:5,
    }
});

export default QuestionCard;
