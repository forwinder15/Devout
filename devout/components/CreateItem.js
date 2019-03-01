import React from 'react';
import { Platform, Text, StyleSheet, View, TextInput, Button, DatePickerIOS } from 'react-native';
import Form from 'react-native-form';

class CreateItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            chosenDate: new Date(),
            setDate: ''
        }
    }

    handleChange = (title, description, setDate) => {
        this.setState({
            title,
            description,
            setDate
        })
        console.log(this.state);

    }

    render() {
        return (
            <View>
                <Text style={styles.head} >Enter a Prayer</Text>
                <View>
                    <Text style={styles.title}>Title</Text>
                    <TextInput style={styles.input}
                        type="text"
                        id='title'
                        name='title'
                        placeholder='Title'
                        required
                        value={this.state.title}
                        onChange={this.handleChange}></TextInput>
                </View>
                <View>
                    <Text style={styles.title}>Description</Text>
                    <TextInput style={styles.input}
                        type="text"
                        id='description'
                        name='description'
                        placeholder='Enter a description'
                        required
                        value={this.state.description}
                        onChange={this.handleChange}> </TextInput>
                </View>
                <View>
                    <Button style={styles.title} title='Date'></Button>
                    <DatePickerIOS type="DatePickerIOS" name="myBirthday" date={this.state.chosenDate}
                        onDateChange={this.setDate} />
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({

    title: {
        fontSize: 30,
        color: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    head: {
        fontSize: 40,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 100,
        height: 20,
    }
});

export default CreateItem;
